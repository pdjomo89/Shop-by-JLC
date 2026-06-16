const APP_URL =
  process.env.NEXT_PUBLIC_SHOPBYJLC_APP_URL || "https://app.shopbyjlc.com";

const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_SHOPBYJLC_WHATSAPP_URL || "https://wa.me/491717743665";

function buildAppUrl(path, params = {}) {
  const url = new URL(path, APP_URL);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
}

export const shopbyjlcLinks = {
  app: APP_URL,

  registerTrialPro: buildAppUrl("/sign-up", {
    trial: "pro",
    source: "landing",
  }),

  registerWithIntendedPlan: (plan) =>
    buildAppUrl("/sign-up", {
      trial: "pro",
      intendedPlan: plan,
      source: "landing",
    }),

  login: buildAppUrl("/login", {
    source: "landing",
  }),

  loginToBilling: (plan) =>
    buildAppUrl("/login", {
      next: `/billing/plans?plan=${plan}`,
      source: "landing",
    }),

  pricing: "#pricing",

  whatsapp: `${WHATSAPP_URL}?text=${encodeURIComponent(
    "Bonjour, je souhaite en savoir plus sur ShopByJLC."
  )}`,
};
