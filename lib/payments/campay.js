import { getPlan, eurToXaf } from "@/lib/payments/plans";

const DEFAULT_BASE = "https://demo.campay.net/api";

function base() {
  return (process.env.CAMPAY_API_BASE || DEFAULT_BASE).replace(/\/$/, "");
}

let cachedToken = null;

async function getToken() {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) {
    return cachedToken.value;
  }

  const username = process.env.CAMPAY_USERNAME;
  const password = process.env.CAMPAY_PASSWORD;
  if (!username || !password) {
    throw new Error("CAMPAY_USERNAME and CAMPAY_PASSWORD are required");
  }

  const res = await fetch(`${base()}/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Campay token request failed: ${res.status} ${text}`);
  }

  const data = await res.json();
  const ttlMs = (Number(data.expires_in || 3600) - 60) * 1000;
  cachedToken = { value: data.token, expiresAt: Date.now() + ttlMs };
  return cachedToken.value;
}

export function normalizePhone(raw) {
  const digits = String(raw || "").replace(/[^\d]/g, "");
  if (digits.startsWith("237")) return digits;
  if (digits.length === 9) return `237${digits}`;
  return digits;
}

export async function initiateCollect({ planId, phone, operator, externalReference, description }) {
  const plan = getPlan(planId);
  if (plan.contactOnly) throw new Error(`Plan "${planId}" is contact-only`);

  const token = await getToken();
  const amount = eurToXaf(plan.eur);

  const body = {
    amount: String(amount),
    currency: "XAF",
    from: normalizePhone(phone),
    description: description || `ShopByJLC ${plan.name} subscription`,
    external_reference: externalReference,
  };
  if (operator) body.operator = operator;

  const res = await fetch(`${base()}/collect/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Campay collect failed: ${res.status} ${JSON.stringify(data)}`);
  }

  return { reference: data.reference, ussd_code: data.ussd_code, operator: data.operator, amount };
}

export async function getTransactionStatus(reference) {
  const token = await getToken();
  const res = await fetch(`${base()}/transaction/${encodeURIComponent(reference)}/`, {
    headers: { Authorization: `Token ${token}` },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Campay status failed: ${res.status} ${JSON.stringify(data)}`);
  }
  return data;
}

export function verifyWebhookKey(bodyKey) {
  const expected = process.env.CAMPAY_WEBHOOK_KEY;
  if (!expected) return false;
  return bodyKey && bodyKey === expected;
}
