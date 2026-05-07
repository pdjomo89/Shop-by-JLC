export const PLAN_IDS = ["trial", "starter", "pro", "business", "enterprise"];

export const PLANS = {
  trial: {
    id: "trial",
    name: "Trial",
    eur: 0,
    stripePriceEnv: null,
    contactOnly: false,
    freeTrial: true,
  },
  starter: {
    id: "starter",
    name: "Starter",
    eur: 9.99,
    stripePriceEnv: "STRIPE_PRICE_STARTER",
    contactOnly: false,
  },
  pro: {
    id: "pro",
    name: "Pro",
    eur: 19.99,
    stripePriceEnv: "STRIPE_PRICE_PRO",
    contactOnly: false,
  },
  business: {
    id: "business",
    name: "Business / Team",
    eur: 39.99,
    stripePriceEnv: "STRIPE_PRICE_BUSINESS",
    contactOnly: false,
  },
  enterprise: {
    id: "enterprise",
    name: "Enterprise",
    eur: 79.99,
    stripePriceEnv: null,
    contactOnly: true,
  },
};

export function getPlan(planId) {
  const plan = PLANS[planId];
  if (!plan) throw new Error(`Unknown plan: ${planId}`);
  return plan;
}

export function eurToXaf(eurAmount) {
  const rate = Number(process.env.EUR_TO_XAF || 656);
  return Math.round(eurAmount * rate);
}
