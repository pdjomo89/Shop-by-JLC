"use client";

import Image from "next/image";
import { useT } from "@/components/LanguageProvider";

function MobileMoneyIllustration() {
  return (
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label="MTN Mobile Money and Orange Money payment channels"
    >
      <defs>
        <linearGradient id="mm-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff5ec" />
          <stop offset="100%" stopColor="#ecf8f1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#mm-bg)" />

      {/* phone */}
      <g transform="translate(158, 28)">
        <rect x="0" y="0" width="84" height="148" rx="14" fill="#262626" />
        <rect x="6" y="6" width="72" height="136" rx="9" fill="#ffffff" />
        {/* payment check */}
        <circle cx="42" cy="44" r="18" fill="#ecf8f1" />
        <path
          d="M34 44l6 6 12-13"
          fill="none"
          stroke="#3a8e62"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="18" y="74" width="48" height="7" rx="3.5" fill="#e7e7e7" />
        <rect x="24" y="88" width="36" height="6" rx="3" fill="#f0f0f0" />
        <rect x="18" y="108" width="48" height="20" rx="6" fill="#ee7d2e" />
      </g>

      {/* MTN MoMo tile (yellow) */}
      <g transform="translate(40, 56)">
        <rect width="92" height="56" rx="12" fill="#ffcb05" />
        <text
          x="46"
          y="26"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="18"
          fontWeight="800"
          fill="#1a1a1a"
        >
          MTN
        </text>
        <text
          x="46"
          y="43"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="11"
          fontWeight="700"
          fill="#1a1a1a"
        >
          MoMo
        </text>
      </g>

      {/* Orange Money tile */}
      <g transform="translate(268, 56)">
        <rect width="92" height="56" rx="12" fill="#ff6f00" />
        <rect x="40" y="10" width="12" height="12" fill="#ffffff" />
        <text
          x="46"
          y="40"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="11"
          fontWeight="700"
          fill="#ffffff"
        >
          Orange Money
        </text>
      </g>
    </svg>
  );
}

const CARD_MEDIA = [
  { type: "illustration" },
  { type: "image", src: "/zach-m-Tyt5Z03BoaI-unsplash.jpg" },
  { type: "image", src: "/jakub-zerdzicki-9PwLeZA-RGc-unsplash.jpg" },
];

export default function News() {
  const { t } = useT();

  return (
    <section id="news" className="border-t border-ink-100 bg-gradient-to-br from-brand-50 via-brand-100/50 to-accent-50 py-20 sm:py-28">
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
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="relative h-44 w-full overflow-hidden">
                {(CARD_MEDIA[i % CARD_MEDIA.length]?.type === "illustration") ? (
                  <div className="h-full w-full transition duration-300 group-hover:scale-105">
                    <MobileMoneyIllustration />
                  </div>
                ) : (
                  <Image
                    src={CARD_MEDIA[i % CARD_MEDIA.length].src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
