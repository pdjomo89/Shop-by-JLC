"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();

  const cols = [
    {
      title: t.footer.cols.product,
      accent: "brand",
      links: [
        { label: t.footer.links.howItWorks, href: "/how-it-works" },
        { label: t.nav.aiCoach, href: "/ai-coach" },
        { label: t.footer.links.pricing, href: "/pricing" },
        { label: t.footer.links.faq, href: "/faq" },
      ],
    },
    {
      title: t.footer.cols.company,
      accent: "accent",
      links: [
        { label: t.footer.links.about, href: "/about" },
        { label: t.footer.links.contact, href: "/contact" },
        { label: t.footer.links.careers, href: "/careers" },
      ],
    },
    {
      title: t.footer.cols.legal,
      accent: "brand",
      links: [
        { label: t.footer.links.privacy, href: "/privacy" },
        { label: t.footer.links.terms, href: "/terms" },
        { label: t.footer.links.cookies, href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink-800 text-ink-100">
      <div
        aria-hidden="true"
        className="h-1.5 w-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent-500"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl"
      />

      <div className="container-page relative py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 font-semibold tracking-tight">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-lg ring-1 ring-white/20">
                <Image
                  src="/logo.jpeg"
                  alt="ShopByJLC logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-lg object-cover"
                />
              </span>
              <span className="text-xl text-white">ShopByJLC</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-ink-300">
              {t.footer.tagline}{" "}
              <span className="font-medium text-brand-300">{t.footer.taglineHighlight}</span>
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600"
              >
                {t.footer.ctaPrimary}
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent-400 hover:text-accent-300"
              >
                {t.footer.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
                  <span
                    className={[
                      "h-2 w-2 rounded-full",
                      c.accent === "brand" ? "bg-brand-500" : "bg-accent-500",
                    ].join(" ")}
                  />
                  {c.title}
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-ink-300">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className={[
                          "transition",
                          c.accent === "brand"
                            ? "hover:text-brand-300"
                            : "hover:text-accent-300",
                        ].join(" ")}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {year}{" "}
            <span className="font-semibold text-white">ShopByJLC</span>. {t.footer.rights}
          </p>
          <p>
            {t.footer.madeForLead}{" "}
            <span className="text-brand-300">{t.footer.madeForShops}</span>,{" "}
            <span className="text-accent-300">{t.footer.madeForWorkshops}</span>{" "}
            {t.footer.madeForRest}
          </p>
        </div>
      </div>
    </footer>
  );
}
