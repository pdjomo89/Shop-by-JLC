export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://shopbyjlc.com"
).replace(/\/$/, "");

export const SITE_NAME = "ShopByJLC";

export const SITE_DESCRIPTION =
  "ShopByJLC is a KPI-first SaaS platform for retail, hybrid, and production businesses. See if your business is truly profitable — in under 90 seconds.";

export const SITE_LOCALES = ["en", "fr", "de"];
export const DEFAULT_LOCALE = "en";

export const TWITTER_HANDLE = "@shopbyjlc";

export const OG_IMAGE = {
  url: `${SITE_URL}/logo.jpeg`,
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — Know your true profit in 90 seconds`,
};
