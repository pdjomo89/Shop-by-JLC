import { NextResponse } from "next/server";
import { verifyWebhookKey, normalizePhone } from "@/lib/payments/campay";
import { notify } from "@/lib/payments/notify";
import {
  ensureWebhookEventFresh,
  upsertCustomerByPhone,
  upsertSubscription,
  recordPayment,
} from "@/lib/payments/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  if (!verifyWebhookKey(body?.webhook_key || body?.signature)) {
    console.warn("[campay webhook] invalid webhook key");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const eventId = body.reference || body.external_reference;
  if (eventId) {
    const fresh = await ensureWebhookEventFresh({
      provider: "campay",
      eventId,
      type: body.status,
    });
    if (!fresh) return NextResponse.json({ received: true, deduped: true });
  }

  try {
    await handleCampayEvent(body);
  } catch (err) {
    console.error("[campay webhook] handler error", err);
  }

  await notify(`campay.${body.status || "event"}`, {
    reference: body.reference,
    external_reference: body.external_reference,
    status: body.status,
    operator: body.operator,
    amount: body.amount,
    currency: body.currency,
    phone_number: body.phone_number,
  });

  return NextResponse.json({ received: true });
}

async function handleCampayEvent(body) {
  const phone = normalizePhone(body.phone_number);
  const customerId = phone ? await upsertCustomerByPhone({ phone }) : null;
  const status = String(body.status || "").toUpperCase();
  const plan = body.plan || extractPlanFromDescription(body.description);

  if (customerId && body.external_reference) {
    await upsertSubscription({
      customerId,
      plan: plan || "unknown",
      provider: "campay",
      externalId: body.external_reference,
      status: status === "SUCCESSFUL" ? "active" : status.toLowerCase(),
      currency: body.currency || "XAF",
      amount: Number(body.amount) || undefined,
      currentPeriodEnd:
        status === "SUCCESSFUL" ? Date.now() + 30 * 24 * 60 * 60 * 1000 : undefined,
    });
  }

  await recordPayment({
    customerId: customerId ?? undefined,
    provider: "campay",
    externalReference: body.reference || body.external_reference || "unknown",
    amount: Number(body.amount) || 0,
    currency: body.currency || "XAF",
    status: status.toLowerCase() || "unknown",
    plan,
  });
}

function extractPlanFromDescription(description) {
  if (!description) return null;
  const m = description.match(/ShopByJLC (Starter|Pro|Business[^\s]*|Enterprise)/i);
  if (!m) return null;
  return m[1].toLowerCase().split(" ")[0];
}
