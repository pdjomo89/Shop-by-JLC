import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { initiateCollect } from "@/lib/payments/campay";
import { PLANS } from "@/lib/payments/plans";
import { notify } from "@/lib/payments/notify";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_OPERATORS = new Set(["OM", "MTN"]);

export async function POST(req) {
  try {
    const { planId, phone, operator, email } = await req.json();
    if (!planId || !PLANS[planId]) {
      return NextResponse.json({ error: "Invalid planId" }, { status: 400 });
    }
    if (PLANS[planId].contactOnly) {
      return NextResponse.json({ error: "Contact sales for this plan" }, { status: 400 });
    }
    if (!phone) {
      return NextResponse.json({ error: "Phone number is required" }, { status: 400 });
    }
    if (operator && !ALLOWED_OPERATORS.has(operator)) {
      return NextResponse.json({ error: "Invalid operator" }, { status: 400 });
    }

    const externalReference = randomUUID();
    const result = await initiateCollect({
      planId,
      phone,
      operator,
      externalReference,
      description: `ShopByJLC ${PLANS[planId].name} subscription`,
    });

    await notify("campay.collect.initiated", {
      planId,
      phone,
      operator,
      email,
      externalReference,
      reference: result.reference,
      amountXaf: result.amount,
    });

    return NextResponse.json({
      reference: result.reference,
      externalReference,
      ussdCode: result.ussd_code,
      operator: result.operator,
      amountXaf: result.amount,
    });
  } catch (err) {
    console.error("[campay collect] error", err);
    return NextResponse.json({ error: err.message || "Payment failed" }, { status: 500 });
  }
}
