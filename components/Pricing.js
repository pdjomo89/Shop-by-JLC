"use client";

import Image from "next/image";
import { useT } from "@/components/LanguageProvider";
import { PLAN_IDS } from "@/lib/payments/plans";
import { shopbyjlcLinks } from "@/lib/shopbyjlc-links";

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

function tierHref(planId) {
  const planMap = {
    trial: null,
    starter: "STARTER",
    pro: "PRO",
    business: "BUSINESS",
    enterprise: "ENTERPRISE",
  };

  if (planId === "trial") {
    return shopbyjlcLinks.registerTrialPro;
  }

  return shopbyjlcLinks.registerWithIntendedPlan(planMap[planId]);
}

export default function Pricing() {
  const { t } = useT();
  const highlightedIndex = PLAN_IDS.indexOf("pro");

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
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50/90 via-white/85 to-accent-50/90"
        aria-hidden="true"
      />
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-ink-500">{t.pricing.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {t.pricing.tiers.map((tier, i) => {
            const highlighted = i === highlightedIndex;
            const planId = PLAN_IDS[i];
            const isFreeTrial = planId === "trial";
            const href = tierHref(planId);

            return (
              <div
                key={tier.name}
                className={[
                  "flex flex-col rounded-2xl border p-7 transition duration-200 hover:-translate-y-1 sm:p-8",
                  highlighted
                    ? "border-brand-500 bg-gradient-to-b from-brand-50 to-white ring-2 ring-brand-500 shadow-soft"
                    : "border-ink-100 bg-white shadow-sm hover:border-accent-300 hover:shadow-soft",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-ink-800">{tier.name}</h3>
                  {highlighted && (
                    <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-medium text-white">
                      {t.pricing.mostPopular}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-ink-500">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1 whitespace-nowrap">
                  <span className="text-3xl font-bold tracking-tight text-ink-800 xl:text-2xl 2xl:text-3xl">
                    {tier.price}
                  </span>

                  {!isFreeTrial && (
                    <span className="text-xs font-medium text-ink-400">
                      {t.pricing.perMonth}
                    </span>
                  )}
                </div>

                {isFreeTrial && t.pricing.trialBadge && (
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-semibold text-accent-700 ring-1 ring-accent-200 self-start">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent-500"
                    />
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

                <a
                  href={href}
                  className={[
                    "mt-8 rounded-lg px-4 py-3 text-center text-sm font-semibold transition",
                    highlighted
                      ? "bg-brand-500 text-white shadow-soft hover:bg-brand-600"
                      : "border border-accent-300 text-accent-700 hover:border-accent-500 hover:bg-accent-50",
                  ].join(" ")}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
