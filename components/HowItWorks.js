"use client";

import Image from "next/image";
import { useT } from "@/components/LanguageProvider";

export default function HowItWorks() {
  const { t } = useT();

  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden border-t border-ink-100 py-20 sm:py-28"
    >
      <Image
        src="/jakub-zerdzicki-9PwLeZA-RGc-unsplash.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/85" />
      <div className="container-page relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-ink-500">{t.howItWorks.subtitle}</p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.howItWorks.steps.map((s, i) => (
            <li
              key={i}
              className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition hover:shadow-soft"
            >
              <div
                className={[
                  "text-sm font-semibold",
                  i % 2 === 0 ? "text-brand-600" : "text-accent-600",
                ].join(" ")}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-ink-800">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-500">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
