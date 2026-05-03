"use client";

import Image from "next/image";
import { useT } from "@/components/LanguageProvider";
import KpiBackground from "@/components/KpiBackground";

export default function Hero() {
  const { t } = useT();
  const tones = ["brand", "accent", "ink"];

  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/alejo15084-ai-generated-8680092.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/35 to-white/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0) 80%)",
        }}
      />
      <KpiBackground />

      <div className="relative z-10 container-page py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-5xl text-center xl:max-w-6xl [text-shadow:0_1px_2px_rgba(255,255,255,0.6)]">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-ink-800 sm:text-5xl lg:text-6xl xl:text-7xl">
            {t.hero.headlinePart1} {t.hero.headlinePart2}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-ink-500 sm:text-xl">
            {t.hero.paragraph}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="w-full rounded-lg bg-brand-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600 sm:w-auto"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#how-it-works"
              className="w-full rounded-lg border border-ink-200 bg-white px-6 py-3 text-center text-sm font-semibold text-ink-700 transition hover:border-ink-300 hover:text-ink-800 sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {t.hero.stats.map((item, i) => {
              const tone = tones[i] || "ink";
              return (
                <div
                  key={i}
                  className="rounded-xl border border-white/60 bg-white/60 p-4 text-left shadow-sm backdrop-blur-md"
                >
                  <div
                    className={[
                      "text-2xl font-semibold",
                      tone === "brand"
                        ? "text-brand-600"
                        : tone === "accent"
                        ? "text-accent-600"
                        : "text-ink-800",
                    ].join(" ")}
                  >
                    {item.k}
                  </div>
                  <div className="text-sm text-ink-500">{item.v}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
