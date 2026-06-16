import { NextResponse } from "next/server";
import { saveAndNotify } from "@/lib/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const subject = String(body.subject || "").trim();
  const message = String(body.body || body.message || "").trim();
  const locale = String(body.locale || "").trim() || undefined;

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (subject.length > 200) {
    return NextResponse.json({ error: "Subject too long" }, { status: 400 });
  }
  if (message.length < 5 || message.length > 5000) {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  await saveAndNotify({
    name,
    email,
    subject: subject || undefined,
    body: message,
    locale,
    userAgent: req.headers.get("user-agent") || undefined,
  });

  return NextResponse.json({ ok: true });
}
