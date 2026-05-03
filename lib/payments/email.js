const PLATFORM_URL_DEFAULT = "https://www.shopbyjlc.com/";

export async function sendWelcomeEmail({
  to,
  username,
  password,
  planName,
  trialEndsAt,
  locale = "en",
}) {
  if (!to) return { sent: false, reason: "missing-recipient" };

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.WELCOME_EMAIL_FROM || process.env.NOTIFY_EMAIL_FROM;
  const platformUrl = process.env.PLATFORM_URL || PLATFORM_URL_DEFAULT;

  if (!apiKey || !from) {
    console.log("[welcome email] skipped (missing config)", {
      to,
      username,
      planName,
      trialEndsAt,
      platformUrl,
    });
    return { sent: false, reason: "missing-config" };
  }

  const tpl = TEMPLATES[locale] || TEMPLATES.en;
  const trialEndStr = formatDate(trialEndsAt, locale);
  const subject = tpl.subject(planName);
  const html = tpl.html({ username, password, planName, trialEndStr, platformUrl });
  const text = tpl.text({ username, password, planName, trialEndStr, platformUrl });

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ from, to, subject, html, text }),
    });
    if (!res.ok) {
      console.error("[welcome email] failed", res.status, await res.text());
      return { sent: false, reason: `http-${res.status}` };
    }
    return { sent: true };
  } catch (err) {
    console.error("[welcome email] error", err);
    return { sent: false, reason: "exception" };
  }
}

function formatDate(ms, locale) {
  if (!ms) return null;
  try {
    return new Date(ms).toLocaleDateString(locale === "auto" ? "en" : locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return new Date(ms).toISOString().slice(0, 10);
  }
}

const card = ({ username, password, label }) => `
<div style="margin:24px 0;padding:16px;border-radius:12px;background:#f1f5f9;font-family:ui-monospace,SFMono-Regular,Menlo,monospace">
  <p style="margin:0 0 8px;font-weight:600;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif">${label}</p>
  <p style="margin:4px 0"><span style="color:#64748b;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif">Username:</span> <code style="background:#fff;padding:2px 6px;border-radius:4px">${escapeHtml(username)}</code></p>
  <p style="margin:4px 0"><span style="color:#64748b;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif">Password:</span> <code style="background:#fff;padding:2px 6px;border-radius:4px">${escapeHtml(password)}</code></p>
</div>`;

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

const TEMPLATES = {
  en: {
    subject: (plan) =>
      plan ? `Welcome to ShopByJLC (${plan}) — your free trial starts now` : `Welcome to ShopByJLC — your free trial starts now`,
    text: ({ username, password, planName, trialEndStr, platformUrl }) =>
      [
        "Welcome to ShopByJLC!",
        "",
        planName ? `Plan: ${planName}` : null,
        `Your 21-day free trial has started.${trialEndStr ? ` It ends on ${trialEndStr}, when your card will be charged automatically.` : " Your card will be charged automatically when the trial ends."} Cancel anytime before then.`,
        "",
        `Sign in here: ${platformUrl}`,
        `Username: ${username}`,
        `Temporary password: ${password}`,
        "",
        "Please change your password after your first sign-in.",
        "",
        "— The ShopByJLC team",
      ]
        .filter(Boolean)
        .join("\n"),
    html: ({ username, password, planName, trialEndStr, platformUrl }) =>
      `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;background:#f7f7f8;margin:0;padding:24px;color:#1f2937">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;box-shadow:0 1px 2px rgba(0,0,0,0.06)">
    <h1 style="margin:0 0 8px;font-size:22px;color:#0f172a">Welcome to ShopByJLC</h1>
    ${planName ? `<p style="margin:0 0 16px;color:#475569"><strong>Plan:</strong> ${escapeHtml(planName)}</p>` : ""}
    <p style="margin:0 0 16px">Your <strong>21-day free trial</strong> has started.${
      trialEndStr ? ` It ends on <strong>${escapeHtml(trialEndStr)}</strong>, when your card will be charged automatically.` : " Your card will be charged automatically when the trial ends."
    } Cancel anytime before then.</p>
    ${card({ username, password, label: "Your sign-in details" })}
    <p style="margin:0 0 24px"><a href="${escapeHtml(platformUrl)}" style="display:inline-block;background:#2563eb;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600">Sign in to ShopByJLC</a></p>
    <p style="margin:0;font-size:13px;color:#64748b">Please change your password after your first sign-in. If you didn't subscribe, ignore this email — you won't be charged.</p>
  </div>
</body></html>`,
  },
  fr: {
    subject: (plan) =>
      plan ? `Bienvenue sur ShopByJLC (${plan}) — votre essai gratuit commence` : `Bienvenue sur ShopByJLC — votre essai gratuit commence`,
    text: ({ username, password, planName, trialEndStr, platformUrl }) =>
      [
        "Bienvenue sur ShopByJLC !",
        "",
        planName ? `Plan : ${planName}` : null,
        `Votre essai gratuit de 21 jours a commencé.${trialEndStr ? ` Il se termine le ${trialEndStr}, date à laquelle votre carte sera prélevée automatiquement.` : " Votre carte sera prélevée automatiquement à la fin de l'essai."} Vous pouvez annuler à tout moment avant.`,
        "",
        `Connectez-vous ici : ${platformUrl}`,
        `Identifiant : ${username}`,
        `Mot de passe temporaire : ${password}`,
        "",
        "Merci de changer votre mot de passe à la première connexion.",
        "",
        "— L'équipe ShopByJLC",
      ]
        .filter(Boolean)
        .join("\n"),
    html: ({ username, password, planName, trialEndStr, platformUrl }) =>
      `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;background:#f7f7f8;margin:0;padding:24px;color:#1f2937">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;box-shadow:0 1px 2px rgba(0,0,0,0.06)">
    <h1 style="margin:0 0 8px;font-size:22px;color:#0f172a">Bienvenue sur ShopByJLC</h1>
    ${planName ? `<p style="margin:0 0 16px;color:#475569"><strong>Plan :</strong> ${escapeHtml(planName)}</p>` : ""}
    <p style="margin:0 0 16px">Votre <strong>essai gratuit de 21 jours</strong> a commencé.${
      trialEndStr ? ` Il se termine le <strong>${escapeHtml(trialEndStr)}</strong>, date à laquelle votre carte sera prélevée automatiquement.` : " Votre carte sera prélevée automatiquement à la fin de l'essai."
    } Vous pouvez annuler à tout moment avant.</p>
    ${card({ username, password, label: "Vos identifiants" })}
    <p style="margin:0 0 24px"><a href="${escapeHtml(platformUrl)}" style="display:inline-block;background:#2563eb;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600">Se connecter à ShopByJLC</a></p>
    <p style="margin:0;font-size:13px;color:#64748b">Merci de changer votre mot de passe à la première connexion. Si vous n'avez pas souscrit, ignorez cet e-mail — aucun prélèvement ne sera effectué.</p>
  </div>
</body></html>`,
  },
  de: {
    subject: (plan) =>
      plan ? `Willkommen bei ShopByJLC (${plan}) — Ihre kostenlose Testphase startet jetzt` : `Willkommen bei ShopByJLC — Ihre kostenlose Testphase startet jetzt`,
    text: ({ username, password, planName, trialEndStr, platformUrl }) =>
      [
        "Willkommen bei ShopByJLC!",
        "",
        planName ? `Plan: ${planName}` : null,
        `Ihre 21-tägige kostenlose Testphase hat begonnen.${trialEndStr ? ` Sie endet am ${trialEndStr}, dann wird Ihre Karte automatisch belastet.` : " Ihre Karte wird automatisch belastet, sobald die Testphase endet."} Vorher jederzeit kündbar.`,
        "",
        `Anmeldung: ${platformUrl}`,
        `Benutzername: ${username}`,
        `Vorläufiges Passwort: ${password}`,
        "",
        "Bitte ändern Sie Ihr Passwort nach der ersten Anmeldung.",
        "",
        "— Das ShopByJLC-Team",
      ]
        .filter(Boolean)
        .join("\n"),
    html: ({ username, password, planName, trialEndStr, platformUrl }) =>
      `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;background:#f7f7f8;margin:0;padding:24px;color:#1f2937">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;box-shadow:0 1px 2px rgba(0,0,0,0.06)">
    <h1 style="margin:0 0 8px;font-size:22px;color:#0f172a">Willkommen bei ShopByJLC</h1>
    ${planName ? `<p style="margin:0 0 16px;color:#475569"><strong>Plan:</strong> ${escapeHtml(planName)}</p>` : ""}
    <p style="margin:0 0 16px">Ihre <strong>21-tägige kostenlose Testphase</strong> hat begonnen.${
      trialEndStr ? ` Sie endet am <strong>${escapeHtml(trialEndStr)}</strong>, dann wird Ihre Karte automatisch belastet.` : " Ihre Karte wird automatisch belastet, sobald die Testphase endet."
    } Vorher jederzeit kündbar.</p>
    ${card({ username, password, label: "Ihre Zugangsdaten" })}
    <p style="margin:0 0 24px"><a href="${escapeHtml(platformUrl)}" style="display:inline-block;background:#2563eb;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600">Bei ShopByJLC anmelden</a></p>
    <p style="margin:0;font-size:13px;color:#64748b">Bitte ändern Sie Ihr Passwort nach der ersten Anmeldung. Falls Sie kein Abonnement abgeschlossen haben, ignorieren Sie diese E-Mail — es wird nichts abgebucht.</p>
  </div>
</body></html>`,
  },
};
