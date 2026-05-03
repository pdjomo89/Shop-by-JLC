import { ConvexHttpClient } from "convex/browser";
import { anyApi } from "convex/server";

let convex = null;
function getConvex() {
  if (convex) return convex;
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!url) return null;
  convex = new ConvexHttpClient(url);
  return convex;
}

async function persistMessage(input) {
  const c = getConvex();
  if (!c) return null;
  try {
    return await c.mutation(anyApi.messages.create, input);
  } catch (err) {
    console.error("[contact] convex persist failed", err);
    return null;
  }
}

async function sendEmail(input) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO || process.env.NOTIFY_EMAIL_TO;
  const from = process.env.NOTIFY_EMAIL_FROM;
  if (!apiKey || !to || !from) return null;

  const subject = input.subject
    ? `[ShopByJLC contact] ${input.subject}`
    : "[ShopByJLC contact] New message";

  const text = [
    `From: ${input.name} <${input.email}>`,
    input.locale ? `Locale: ${input.locale}` : null,
    "",
    input.body,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: input.email,
        subject,
        text,
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] resend failed", res.status, detail);
    }
    return res.ok;
  } catch (err) {
    console.error("[contact] resend error", err);
    return false;
  }
}

export async function saveAndNotify(input) {
  console.log("[contact] new message", { name: input.name, email: input.email });
  const [persisted, mailed] = await Promise.all([persistMessage(input), sendEmail(input)]);
  return { persisted: Boolean(persisted), mailed: Boolean(mailed) };
}
