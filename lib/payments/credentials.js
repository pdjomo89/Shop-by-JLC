import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const ALPHABET = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const PASSWORD_LENGTH = 16;

export function generatePassword() {
  const bytes = randomBytes(PASSWORD_LENGTH);
  let out = "";
  for (let i = 0; i < PASSWORD_LENGTH; i++) {
    out += ALPHABET[bytes[i] % ALPHABET.length];
  }
  return out;
}

export function hashPassword(password) {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64);
  return `scrypt$1$${salt.toString("hex")}$${hash.toString("hex")}`;
}

export function verifyPassword(password, encoded) {
  const parts = String(encoded || "").split("$");
  if (parts.length !== 4 || parts[0] !== "scrypt") return false;
  const salt = Buffer.from(parts[2], "hex");
  const expected = Buffer.from(parts[3], "hex");
  const actual = scryptSync(password, salt, expected.length);
  return expected.length === actual.length && timingSafeEqual(actual, expected);
}

export function deriveUsername(email) {
  const local = String(email || "user").split("@")[0].toLowerCase();
  const sanitized = local.replace(/[^a-z0-9]+/g, "").slice(0, 20) || "user";
  const suffix = randomBytes(2).toString("hex");
  return `${sanitized}-${suffix}`;
}
