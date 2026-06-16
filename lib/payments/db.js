import { ConvexHttpClient } from "convex/browser";
import { anyApi } from "convex/server";

let cached = null;

function getClient() {
  if (cached) return cached;
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!url) return null;
  cached = new ConvexHttpClient(url);
  return cached;
}

export function isDbEnabled() {
  return Boolean(process.env.NEXT_PUBLIC_CONVEX_URL);
}

async function safeMutation(ref, args) {
  const c = getClient();
  if (!c) return null;
  try {
    return await c.mutation(ref, args);
  } catch (err) {
    console.error("[convex] mutation failed", err);
    return null;
  }
}

async function safeQuery(ref, args) {
  const c = getClient();
  if (!c) return null;
  try {
    return await c.query(ref, args);
  } catch (err) {
    console.error("[convex] query failed", err);
    return null;
  }
}

export async function ensureWebhookEventFresh({ provider, eventId, type }) {
  const result = await safeMutation(anyApi.webhookEvents.ensureUnique, {
    provider,
    eventId,
    type,
  });
  if (!result) return true; // DB disabled → process anyway
  return result.fresh;
}

export async function upsertCustomerByEmail({ email, stripeCustomerId, locale }) {
  if (!email) return null;
  return safeMutation(anyApi.customers.upsertByEmail, {
    email,
    stripeCustomerId,
    locale,
  });
}

export async function upsertCustomerByPhone({ phone, email }) {
  if (!phone) return null;
  return safeMutation(anyApi.customers.upsertByPhone, { phone, email });
}

export async function getCustomerByStripeId(stripeCustomerId) {
  if (!stripeCustomerId) return null;
  return safeQuery(anyApi.customers.getByStripeCustomerId, { stripeCustomerId });
}

export async function upsertSubscription(input) {
  if (!input.customerId) return null;
  return safeMutation(anyApi.subscriptions.upsert, input);
}

export async function recordPayment(input) {
  return safeMutation(anyApi.payments.record, input);
}

export async function createUserCredentials({ customerId, email, username, passwordHash }) {
  if (!customerId || !email || !username || !passwordHash) return null;
  return safeMutation(anyApi.users.createCredentials, {
    customerId,
    email,
    username,
    passwordHash,
  });
}
