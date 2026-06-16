"use client";

import { useT } from "@/components/LanguageProvider";

export default function News() {
  const { t } = useT();

  return (
    <section id="news" className="border-t border-ink-100 bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-600 ring-1 ring-accent-200">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            {t.news.badge}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {t.news.title}
          </h2>
          <p className="mt-4 text-lg text-ink-500">{t.news.subtitle}</p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.news.items.map((item, i) => (
            <li
              key={i}
              className="group relative flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span
                  className={[
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold",
                    item.tone === "accent"
                      ? "bg-accent-50 text-accent-600 ring-1 ring-accent-200"
                      : "bg-brand-50 text-brand-600 ring-1 ring-brand-200",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className={[
                      "h-1.5 w-1.5 rounded-full",
                      item.tone === "accent" ? "bg-accent-500" : "bg-brand-500",
                    ].join(" ")}
                  />
                  {item.tag}
                </span>
                <time className="text-xs font-medium text-ink-500">{item.date}</time>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-ink-800">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-500">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
