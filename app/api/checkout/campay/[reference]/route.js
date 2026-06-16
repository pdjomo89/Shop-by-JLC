import { NextResponse } from "next/server";
import { getTransactionStatus } from "@/lib/payments/campay";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_req, { params }) {
  const { reference } = await params;
  if (!reference) {
    return NextResponse.json({ error: "Missing reference" }, { status: 400 });
  }
  try {
    const data = await getTransactionStatus(reference);
    return NextResponse.json({
      status: data.status,
      reference: data.reference,
      operator: data.operator,
      amount: data.amount,
      currency: data.currency,
      external_reference: data.external_reference,
    });
  } catch (err) {
    console.error("[campay status] error", err);
    return NextResponse.json({ error: err.message || "Status failed" }, { status: 500 });
  }
}
