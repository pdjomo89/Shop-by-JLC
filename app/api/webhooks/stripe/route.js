import { NextResponse } from "next/server";
import { getStripe } from "@/lib/payments/stripe";
import { notify } from "@/lib/payments/notify";
import { sendWelcomeEmail } from "@/lib/payments/email";
import {
  generatePassword,
  hashPassword,
  deriveUsername,
} from "@/lib/payments/credentials";
import { PLANS } from "@/lib/payments/plans";
import {
  ensureWebhookEventFresh,
  upsertCustomerByEmail,
  getCustomerByStripeId,
  upsertSubscription,
  recordPayment,
  createUserCredentials,
} from "@/lib/payments/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const signature = req.headers.get("stripe-signature");
  const rawBody = await req.text();

  let event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(rawBody, signature, secret);
  } catch (err) {
    console.error("[stripe webhook] signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const fresh = await ensureWebhookEventFresh({
    provider: "stripe",
    eventId: event.id,
    type: event.type,
  });
  if (!fresh) return NextResponse.json({ received: true, deduped: true });

  try {
    await handleStripeEvent(event);
  } catch (err) {
    console.error("[stripe webhook] handler error", err);
  }

  await notify(`stripe.${event.type}`, {
    id: event.id,
    object: summarize(event.data?.object),
  });

  return NextResponse.json({ received: true });
}

async function handleStripeEvent(event) {
  const obj = event.data?.object;
  if (!obj) return;

  switch (event.type) {
    case "checkout.session.completed": {
      const email = obj.customer_email || obj.customer_details?.email;
      const customerId = await upsertCustomerByEmail({
        email,
        stripeCustomerId: typeof obj.customer === "string" ? obj.customer : obj.customer?.id,
        locale: obj.locale,
      });
      const plan = obj.metadata?.plan;
      const subscriptionId =
        typeof obj.subscription === "string" ? obj.subscription : obj.subscription?.id;

      let trialEnd = null;
      let subscriptionStatus = "trialing";
      if (subscriptionId) {
        try {
          const stripe = getStripe();
          const sub = await stripe.subscriptions.retrieve(subscriptionId);
          trialEnd = sub.trial_end ? sub.trial_end * 1000 : null;
          subscriptionStatus = sub.status || subscriptionStatus;
        } catch (err) {
          console.error("[stripe webhook] subscription retrieve failed", err);
        }
      }

      if (customerId && subscriptionId && plan) {
        await upsertSubscription({
          customerId,
          plan,
          provider: "stripe",
          externalId: subscriptionId,
          status: subscriptionStatus,
          currency: obj.currency,
          amount: obj.amount_total,
        });

        if (email) {
          await issueCredentialsAndWelcome({
            customerId,
            email,
            plan,
            trialEnd,
            locale: obj.locale,
          });
        }
      }
      break;
    }

    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const stripeCustomerId = typeof obj.customer === "string" ? obj.customer : obj.customer?.id;
      const customer = await getCustomerByStripeId(stripeCustomerId);
      if (!customer) break;
      const plan = obj.metadata?.plan || obj.items?.data?.[0]?.price?.lookup_key || "unknown";
      await upsertSubscription({
        customerId: customer._id,
        plan,
        provider: "stripe",
        externalId: obj.id,
        status: obj.status,
        currency: obj.currency,
        amount: obj.items?.data?.[0]?.price?.unit_amount,
        currentPeriodEnd: obj.current_period_end ? obj.current_period_end * 1000 : undefined,
        cancelAt: obj.cancel_at ? obj.cancel_at * 1000 : undefined,
      });
      break;
    }

    case "invoice.paid":
    case "invoice.payment_failed": {
      const stripeCustomerId = typeof obj.customer === "string" ? obj.customer : obj.customer?.id;
      const customer = await getCustomerByStripeId(stripeCustomerId);
      await recordPayment({
        customerId: customer?._id,
        provider: "stripe",
        externalReference: obj.id,
        amount: obj.amount_paid ?? obj.amount_due ?? 0,
        currency: obj.currency,
        status: event.type === "invoice.paid" ? "succeeded" : "failed",
      });
      break;
    }

    default:
      break;
  }
}

async function issueCredentialsAndWelcome({ customerId, email, plan, trialEnd, locale }) {
  try {
    const password = generatePassword();
    const passwordHash = hashPassword(password);
    const username = deriveUsername(email);

    const result = await createUserCredentials({
      customerId,
      email,
      username,
      passwordHash,
    });
    if (!result || result.alreadyExisted) return;

    const planMeta = PLANS[plan];
    await sendWelcomeEmail({
      to: email,
      username: result.username,
      password,
      planName: planMeta?.name || plan,
      trialEndsAt: trialEnd,
      locale: locale || "en",
    });
  } catch (err) {
    console.error("[stripe webhook] welcome flow failed", err);
  }
}

function summarize(obj) {
  if (!obj) return null;
  return {
    id: obj.id,
    customer: obj.customer,
    customer_email: obj.customer_email || obj.customer_details?.email,
    subscription: obj.subscription,
    amount_total: obj.amount_total,
    currency: obj.currency,
    status: obj.status,
    metadata: obj.metadata,
  };
}
