"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";

export default function Navbar() {
  const { t } = useT();

  const links = [
    { href: "/how-it-works", label: t.nav.howItWorks, dot: "bg-brand-500" },
    { href: "/ai-coach", label: t.nav.aiCoach, dot: "bg-accent-500" },
    { href: "/pricing", label: t.nav.pricing, dot: "bg-brand-500" },
    { href: "/news", label: t.nav.news, dot: "bg-brand-500" },
    { href: "/faq", label: t.nav.faq, dot: "bg-accent-500" },
    { href: "/contact", label: t.nav.contact, dot: "bg-brand-500" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      {/* top gradient stripe — orange triangle → emerald L */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent-500"
      />

      {/* soft color wash behind the bar */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-50/70 via-white to-accent-50/70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-8 left-1/4 -z-0 h-24 w-48 rounded-full bg-brand-200/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-8 right-1/4 -z-0 h-24 w-48 rounded-full bg-accent-200/50 blur-3xl"
        />

        <div className="container-page relative flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-semibold tracking-tight"
          >
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-white shadow-soft ring-1 ring-brand-200/70 transition group-hover:ring-brand-400">
              <Image
                src="/logo.jpeg"
                alt="ShopByJLC logo"
                width={40}
                height={40}
                priority
                className="h-9 w-9 rounded-lg object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-accent-500 ring-2 ring-white"
              />
            </span>
            <span className="text-lg leading-none">
              <span className="text-brand-600">Shop</span>
              <span className="text-ink-800">By</span>
              <span className="text-accent-600">JLC</span>
            </span>
          </Link>

          <nav className="hidden gap-1 text-sm md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group/link relative inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-ink-600 transition hover:bg-white hover:text-ink-900"
              >
                <span
                  aria-hidden="true"
                  className={[
                    "h-1.5 w-1.5 rounded-full opacity-60 transition group-hover/link:opacity-100",
                    l.dot,
                  ].join(" ")}
                />
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <a
              href="https://www.shopbyjlc.com/"
              className="hidden rounded-full px-3 py-1.5 text-sm font-medium text-ink-600 transition hover:bg-white hover:text-ink-900 lg:inline"
            >
              {t.nav.signIn}
            </a>
            <Link
              href="/pricing"
              className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:from-brand-600 hover:to-accent-600"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-white/90"
              />
              {t.nav.startFree}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
