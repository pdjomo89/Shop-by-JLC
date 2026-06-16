"use client";

import { useT } from "@/components/LanguageProvider";

export default function PageContent({ pageKey }) {
  const { t } = useT();
  const page = t.pages?.[pageKey];
  if (!page?.body?.length) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <article className="mx-auto max-w-3xl space-y-10">
          {page.body.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold tracking-tight text-ink-800 sm:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-ink-600">
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          {page.updatedAt && (
            <p className="border-t border-ink-100 pt-6 text-sm text-ink-400">
              {t.pages.updatedLabel}: <span className="font-medium text-ink-600">{page.updatedAt}</span>
            </p>
          )}
        </article>
      </div>
    </section>
  );
}
