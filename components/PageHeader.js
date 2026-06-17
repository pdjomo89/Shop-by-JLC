"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function PageHeader({
  pageKey,
  bgImage,
  bgAlt = "",
  bgImageClassName = "",
  overlayClassName = "absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white/80",
  large = false,
}) {
  const { t } = useT();
  const page = t.pages?.[pageKey];
  if (!page) return null;

  return (
    <section
      className={[
        "relative isolate overflow-hidden border-b border-ink-100",
        bgImage ? "" : "bg-gradient-to-br from-brand-50 via-white to-accent-50",
      ].join(" ")}
    >
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt={bgAlt}
            fill
            priority
            sizes="100vw"
            className={["object-cover", bgImageClassName].join(" ").trim()}
          />
          <div className={overlayClassName} />
        </>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-accent-200/40 blur-3xl"
      />

      <div
        className={[
          "container-page relative",
          large ? "py-24 sm:py-32 lg:py-40" : "py-16 sm:py-20",
        ].join(" ")}
      >
        <nav aria-label="Breadcrumb" className="text-xs font-medium text-ink-500">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="transition hover:text-ink-700">
                ShopByJLC
              </Link>
            </li>
            <li aria-hidden="true" className="text-ink-300">
              /
            </li>
            <li className="font-semibold text-ink-700">{page.eyebrow}</li>
          </ol>
        </nav>

        <div className="mt-6 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink-800 sm:text-5xl">
            {page.title}
          </h1>
          {page.subtitle && (
            <p className="mt-4 text-lg leading-7 text-ink-500">{page.subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
