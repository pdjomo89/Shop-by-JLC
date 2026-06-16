import { NextResponse } from "next/server";
import { createSubscriptionCheckoutSession } from "@/lib/payments/stripe";
import { PLANS } from "@/lib/payments/plans";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { planId, email, locale } = await req.json();
    if (!planId || !PLANS[planId]) {
      return NextResponse.json({ error: "Invalid planId" }, { status: 400 });
    }
    if (PLANS[planId].contactOnly) {
      return NextResponse.json({ error: "Contact sales for this plan" }, { status: 400 });
    }

    const session = await createSubscriptionCheckoutSession({ planId, email, locale });
    return NextResponse.json({ url: session.url, id: session.id });
  } catch (err) {
    console.error("[stripe checkout] error", err);
    return NextResponse.json({ error: err.message || "Checkout failed" }, { status: 500 });
  }
}
