"use client";

import { LANGS } from "@/lib/i18n";
import { useT } from "@/components/LanguageProvider";

export default function LanguageToggle({ className = "" }) {
  const { lang, setLang } = useT();

  return (
    <div
      role="group"
      aria-label="Language"
      className={[
        "relative z-[9999] inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-ink-200 bg-white p-0.5 text-xs font-semibold shadow-sm",
        className,
      ].join(" ")}
      style={{ pointerEvents: "auto" }}
    >
      {LANGS.map((l) => {
        const active = l.code === lang;

        return (
          <button
            key={l.code}
            type="button"
            aria-pressed={active}
            aria-label={l.name}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setLang(l.code);
            }}
            className={[
              "relative z-[9999] cursor-pointer rounded-full px-2.5 py-1 whitespace-nowrap transition",
              active
                ? "bg-brand-500 text-white shadow-soft"
                : "text-ink-500 hover:text-ink-800",
            ].join(" ")}
            style={{ pointerEvents: "auto" }}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}