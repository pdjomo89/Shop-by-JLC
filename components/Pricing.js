"use client";

import Image from "next/image";
import { useState } from "react";
import { useT } from "@/components/LanguageProvider";
import CheckoutModal from "@/components/CheckoutModal";
import { PLAN_IDS, PLANS } from "@/lib/payments/plans";

function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 flex-none text-accent-500"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Pricing() {
  const { t } = useT();
  const highlightedIndex = PLAN_IDS.indexOf("pro");
  const [openTier, setOpenTier] = useState(null);

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@shopbyjlc.com";

  const handleTierClick = (planId) => {
    if (PLANS[planId]?.contactOnly) {
      window.location.href = `mailto:${contactEmail}?subject=ShopByJLC%20Enterprise%20inquiry`;
      return;
    }
    if (PLANS[planId]?.freeTrial) {
      window.location.href = `mailto:${contactEmail}?subject=ShopByJLC%20free%20trial`;
      return;
    }
    setOpenTier(planId);
  };

  const openTierData = openTier ? t.pricing.tiers[PLAN_IDS.indexOf(openTier)] : null;

  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden border-t border-ink-100 py-20 sm:py-28"
    >
      <Image
        src="/rochasbrasil-stone-2250700.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-white/80" aria-hidden="true" />
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-ink-500">{t.pricing.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.pricing.tiers.map((tier, i) => {
            const highlighted = i === highlightedIndex;
            const planId = PLAN_IDS[i];
            const isFreeTrial = PLANS[planId]?.freeTrial;
            return (
              <div
                key={tier.name}
                className={[
                  "flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition",
                  highlighted
                    ? "border-brand-500 ring-2 ring-brand-500 shadow-soft"
                    : "border-ink-100 hover:shadow-soft",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-ink-800">{tier.name}</h3>
                  {highlighted && (
                    <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-medium text-white">
                      {t.pricing.mostPopular}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-ink-500">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1 whitespace-nowrap">
                  <span className="text-2xl font-bold tracking-tight text-ink-800 xl:text-xl 2xl:text-2xl">
                    {tier.price}
                  </span>
                  {!isFreeTrial && (
                    <span className="text-xs font-medium text-ink-400">{t.pricing.perMonth}</span>
                  )}
                </div>

                {!PLANS[planId]?.contactOnly && !isFreeTrial && t.pricing.trialBadge && (
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-semibold text-accent-700 ring-1 ring-accent-200 self-start">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                    {t.pricing.trialBadge}
                  </p>
                )}

                <ul className="mt-6 space-y-3 text-sm text-ink-700">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleTierClick(planId)}
                  className={[
                    "mt-8 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition",
                    highlighted
                      ? "bg-brand-500 text-white shadow-soft hover:bg-brand-600"
                      : "border border-ink-200 text-ink-800 hover:border-ink-300 hover:bg-ink-50",
                  ].join(" ")}
                >
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <CheckoutModal
        planId={openTier}
        planLabel={openTierData?.name}
        planPrice={openTierData?.price}
        onClose={() => setOpenTier(null)}
      />
    </section>
  );
}
