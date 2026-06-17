"use client";

import { useT } from "@/components/LanguageProvider";

function ShopIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="h-44 w-full">
      <defs>
        <linearGradient id="shop-bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff5ec" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" rx="16" fill="url(#shop-bg)" />
      {/* sidewalk */}
      <rect x="0" y="170" width="320" height="30" fill="#f6f6f6" />
      {/* facade */}
      <rect x="50" y="60" width="220" height="110" fill="#ffffff" stroke="#e7e7e7" />
      {/* awning */}
      <path d="M 40 60 L 280 60 L 270 80 L 50 80 Z" fill="#ee7d2e" />
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={i}
          x1={50 + i * 23}
          y1="60"
          x2={60 + i * 23}
          y2="80"
          stroke="#ffffff"
          strokeOpacity="0.45"
          strokeWidth="3"
        />
      ))}
      {/* window with bar chart */}
      <rect x="68" y="92" width="120" height="64" rx="4" fill="#ecf8f1" stroke="#cfedda" />
      {[18, 30, 24, 40, 32, 48].map((h, i) => (
        <rect key={i} x={76 + i * 18} y={150 - h} width="10" height={h} rx="2" fill="#4fad7b" />
      ))}
      {/* door */}
      <rect x="208" y="100" width="48" height="70" rx="3" fill="#262626" />
      <circle cx="248" cy="138" r="2" fill="#ee7d2e" />
      {/* OPEN sign */}
      <rect x="216" y="108" width="32" height="12" rx="2" fill="#4fad7b" />
      <text
        x="232"
        y="117"
        fontFamily="ui-sans-serif"
        fontSize="8"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
      >
        OPEN
      </text>
    </svg>
  );
}

function WorkshopIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="h-44 w-full">
      <defs>
        <linearGradient id="ws-bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ecf8f1" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="ws-line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ee7d2e" />
          <stop offset="100%" stopColor="#f48a3d" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" rx="16" fill="url(#ws-bg)" />
      {/* sparkline floating above bench */}
      <g transform="translate(34, 30)">
        <path
          d="M 0 28 L 30 16 L 60 22 L 90 6 L 130 14 L 170 0"
          fill="none"
          stroke="url(#ws-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="170" cy="0" r="4" fill="#ee7d2e" />
      </g>
      {/* gear */}
      <g transform="translate(225, 60)">
        <circle r="34" fill="#ffffff" stroke="#e7e7e7" />
        <circle r="14" fill="none" stroke="#4fad7b" strokeWidth="3" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          const x1 = Math.cos(a) * 24;
          const y1 = Math.sin(a) * 24;
          const x2 = Math.cos(a) * 32;
          const y2 = Math.sin(a) * 32;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#4fad7b"
              strokeWidth="5"
              strokeLinecap="round"
            />
          );
        })}
      </g>
      {/* workbench */}
      <rect x="36" y="140" width="248" height="14" rx="2" fill="#262626" />
      <rect x="48" y="154" width="6" height="30" fill="#262626" />
      <rect x="266" y="154" width="6" height="30" fill="#262626" />
      {/* hammer */}
      <g transform="translate(60, 100)">
        <rect x="0" y="0" width="40" height="14" rx="2" fill="#ee7d2e" />
        <rect x="36" y="-4" width="14" height="22" rx="2" fill="#262626" />
        <rect x="50" y="6" width="60" height="6" rx="3" fill="#a8a8a8" />
      </g>
      {/* wrench */}
      <g transform="translate(140, 110) rotate(20)">
        <rect x="0" y="-3" width="60" height="6" rx="3" fill="#7a7a7a" />
        <circle cx="0" cy="0" r="9" fill="none" stroke="#7a7a7a" strokeWidth="4" />
        <circle cx="60" cy="0" r="9" fill="none" stroke="#7a7a7a" strokeWidth="4" />
      </g>
    </svg>
  );
}

function HybridIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="h-44 w-full">
      <defs>
        <linearGradient id="hy-bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff5ec" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" rx="16" fill="url(#hy-bg)" />
      {/* shelves */}
      <g stroke="#e7e7e7" strokeWidth="2">
        <line x1="36" y1="60" x2="180" y2="60" />
        <line x1="36" y1="100" x2="180" y2="100" />
      </g>
      {/* jars on shelves */}
      {[
        { x: 50, c: "#ee7d2e" },
        { x: 80, c: "#4fad7b" },
        { x: 110, c: "#f48a3d" },
        { x: 140, c: "#74c993" },
      ].map((j, i) => (
        <g key={`s1-${i}`} transform={`translate(${j.x}, 38)`}>
          <rect width="20" height="22" rx="3" fill={j.c} />
          <rect y="-4" x="2" width="16" height="6" rx="1" fill="#262626" />
        </g>
      ))}
      {[
        { x: 56, c: "#fda866" },
        { x: 90, c: "#a3dcb8" },
        { x: 124, c: "#ffc89a" },
      ].map((j, i) => (
        <g key={`s2-${i}`} transform={`translate(${j.x}, 78)`}>
          <rect width="20" height="22" rx="3" fill={j.c} />
          <rect y="-4" x="2" width="16" height="6" rx="1" fill="#262626" />
        </g>
      ))}
      {/* counter */}
      <rect x="36" y="140" width="248" height="14" rx="2" fill="#262626" />
      <rect x="36" y="154" width="248" height="32" rx="2" fill="#3f3f3f" />
      {/* coffee cup */}
      <g transform="translate(58, 110)">
        <path
          d="M 0 0 L 0 20 Q 0 30 10 30 L 30 30 Q 40 30 40 20 L 40 0 Z"
          fill="#ffffff"
          stroke="#262626"
          strokeWidth="2"
        />
        <path d="M 40 8 Q 50 8 50 16 Q 50 24 40 24" fill="none" stroke="#262626" strokeWidth="2" />
        <path d="M 8 -8 Q 12 -16 8 -22" stroke="#a8a8a8" strokeWidth="2" fill="none" />
        <path d="M 18 -8 Q 22 -16 18 -22" stroke="#a8a8a8" strokeWidth="2" fill="none" />
        <path d="M 28 -8 Q 32 -16 28 -22" stroke="#a8a8a8" strokeWidth="2" fill="none" />
      </g>
      {/* mini dashboard tile with donut */}
      <g transform="translate(210, 50)">
        <rect width="86" height="86" rx="10" fill="#ffffff" stroke="#e7e7e7" />
        <g transform="translate(43, 44)">
          <circle r="22" fill="none" stroke="#f1efee" strokeWidth="6" />
          <circle
            r="22"
            fill="none"
            stroke="#ee7d2e"
            strokeWidth="6"
            strokeDasharray="98 138"
            strokeLinecap="round"
            transform="rotate(-90)"
          />
          <text
            y="4"
            textAnchor="middle"
            fontFamily="ui-sans-serif"
            fontSize="13"
            fontWeight="700"
            fill="#262626"
          >
            71%
          </text>
        </g>
      </g>
    </svg>
  );
}

const ILLUSTRATIONS = [ShopIllustration, WorkshopIllustration, HybridIllustration];

export default function Audience() {
  const { t } = useT();
  const items = t.audience?.items || [];

  if (!items.length) return null;

  return (
    <section id="audience" className="border-t border-ink-100 bg-gradient-to-br from-brand-50 via-brand-100/60 to-accent-50 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {t.audience.title}
          </h2>
          <p className="mt-4 text-lg text-ink-500">{t.audience.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => {
            const Illustration = ILLUSTRATIONS[i] || ILLUSTRATIONS[0];
            return (
              <div
                key={i}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition hover:shadow-soft"
              >
                <div className="bg-ink-50/60 p-2">
                  <Illustration />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-ink-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-500">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
