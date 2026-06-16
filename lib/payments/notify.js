export async function notify(subject, payload) {
  const line = `[payments] ${subject} ${JSON.stringify(payload)}`;
  console.log(line);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL_TO;
  const from = process.env.NOTIFY_EMAIL_FROM;
  if (!apiKey || !to || !from) return;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to,
        subject: `[ShopByJLC] ${subject}`,
        text: JSON.stringify(payload, null, 2),
      }),
    });
  } catch (err) {
    console.error("[payments] notify email failed", err);
  }
}
