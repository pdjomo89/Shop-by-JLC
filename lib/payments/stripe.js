import Stripe from "stripe";
import { getPlan } from "@/lib/payments/plans";
import { SITE_URL } from "@/lib/seo";

let cached = null;

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  if (cached) return cached;
  cached = new Stripe(key, { apiVersion: "2024-12-18.acacia" });
  return cached;
}

export async function createSubscriptionCheckoutSession({ planId, email, locale }) {
  const plan = getPlan(planId);
  if (plan.contactOnly) throw new Error(`Plan "${planId}" is contact-only`);

  const priceId = process.env[plan.stripePriceEnv];
  if (!priceId) throw new Error(`Missing env ${plan.stripePriceEnv}`);

  const stripe = getStripe();

  return stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    payment_method_types: ["card"],
    payment_method_collection: "always",
    billing_address_collection: "auto",
    allow_promotion_codes: true,
    customer_email: email || undefined,
    locale: stripeLocale(locale),
    success_url: `${SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${SITE_URL}/checkout/cancelled`,
    metadata: { plan: plan.id },
    subscription_data: {
      metadata: { plan: plan.id },
      trial_period_days: TRIAL_PERIOD_DAYS,
      trial_settings: {
        end_behavior: { missing_payment_method: "cancel" },
      },
    },
  });
}

export const TRIAL_PERIOD_DAYS = 21;

function stripeLocale(locale) {
  const map = { en: "en", fr: "fr", de: "de" };
  return map[locale] || "auto";
}
