"use client";

import Image from "next/image";
import { useT } from "@/components/LanguageProvider";

export default function FAQ() {
  const { t } = useT();

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden border-t border-ink-100 py-20 sm:py-28"
    >
      <Image
        src="/alexas_fotos-faq-3408300.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-white/75" aria-hidden="true" />
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-lg text-ink-500">{t.faq.subtitle}</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-sm">
          {t.faq.items.map((item, i) => (
            <details key={i} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <span className="text-base font-semibold text-ink-800">{item.q}</span>
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full border border-ink-200 text-ink-500 transition group-open:rotate-45 group-open:border-brand-500 group-open:text-brand-600">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-ink-500">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
