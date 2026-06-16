export default function KpiBackground() {
  const bars = [54, 78, 62, 96, 82, 110, 90, 132];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="kpi-tile" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.72" />
          </linearGradient>
          <linearGradient id="kpi-bar" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#ffe5cc" />
            <stop offset="100%" stopColor="#ee7d2e" />
          </linearGradient>
          <linearGradient id="kpi-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#4fad7b" />
            <stop offset="100%" stopColor="#74c993" />
          </linearGradient>
          <linearGradient id="kpi-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#4fad7b" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#4fad7b" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="kpi-center" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.78" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* faint grid */}
        <g stroke="#e7e7e7" strokeWidth="1" opacity="0.55">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="0" x2="1440" y1={80 * (i + 1)} y2={80 * (i + 1)} />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v${i}`} y1="0" y2="800" x1={120 * (i + 1)} x2={120 * (i + 1)} />
          ))}
        </g>

        {/* top-left: bar chart */}
        <g transform="translate(60, 70)">
          <rect width="380" height="240" rx="20" fill="url(#kpi-tile)" stroke="#e7e7e7" />
          <text x="24" y="40" fontFamily="ui-sans-serif" fontSize="13" fill="#7a7a7a">
            Revenue this week
          </text>
          <text
            x="24"
            y="74"
            fontFamily="ui-sans-serif"
            fontSize="26"
            fontWeight="700"
            fill="#262626"
          >
            € 24,830
          </text>
          <g transform="translate(24, 90)">
            <rect width="86" height="22" rx="11" fill="#ecf8f1" />
            <text x="14" y="16" fontFamily="ui-sans-serif" fontSize="12" fill="#3a8e62">
              ↑ 12.4%
            </text>
          </g>
          {bars.map((h, i) => (
            <rect
              key={i}
              x={24 + i * 42}
              y={220 - h}
              width="28"
              height={h}
              rx="6"
              fill="url(#kpi-bar)"
            />
          ))}
        </g>

        {/* top-right: line chart */}
        <g transform="translate(960, 90)">
          <rect width="420" height="220" rx="20" fill="url(#kpi-tile)" stroke="#e7e7e7" />
          <text x="24" y="40" fontFamily="ui-sans-serif" fontSize="13" fill="#7a7a7a">
            Net margin
          </text>
          <text
            x="24"
            y="74"
            fontFamily="ui-sans-serif"
            fontSize="26"
            fontWeight="700"
            fill="#262626"
          >
            38.2%
          </text>
          <g transform="translate(120, 50)">
            <rect width="74" height="22" rx="11" fill="#fff5ec" />
            <text x="12" y="16" fontFamily="ui-sans-serif" fontSize="12" fill="#b34e0f">
              ↑ 3.1 pts
            </text>
          </g>
          <path
            d="M 24 170 L 80 145 L 140 158 L 200 110 L 260 122 L 320 88 L 376 64"
            fill="none"
            stroke="url(#kpi-line)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 24 170 L 80 145 L 140 158 L 200 110 L 260 122 L 320 88 L 376 64 L 376 200 L 24 200 Z"
            fill="url(#kpi-area)"
          />
          <circle cx="376" cy="64" r="6" fill="#4fad7b" />
          <circle cx="376" cy="64" r="2.5" fill="#ffffff" />
        </g>

        {/* bottom-left: donut + label */}
        <g transform="translate(80, 480)">
          <rect width="320" height="240" rx="20" fill="url(#kpi-tile)" stroke="#e7e7e7" />
          <text x="24" y="40" fontFamily="ui-sans-serif" fontSize="13" fill="#7a7a7a">
            Cash conversion
          </text>
          <g transform="translate(160, 140)">
            <circle r="60" fill="none" stroke="#f1efee" strokeWidth="14" />
            <circle
              r="60"
              fill="none"
              stroke="#ee7d2e"
              strokeWidth="14"
              strokeDasharray="294 377"
              strokeLinecap="round"
              transform="rotate(-90)"
            />
            <text
              y="6"
              textAnchor="middle"
              fontFamily="ui-sans-serif"
              fontSize="26"
              fontWeight="700"
              fill="#262626"
            >
              78%
            </text>
            <text
              y="28"
              textAnchor="middle"
              fontFamily="ui-sans-serif"
              fontSize="11"
              fill="#7a7a7a"
            >
              of revenue
            </text>
          </g>
        </g>

        {/* bottom-right: KPI cards stack */}
        <g transform="translate(940, 460)">
          {[
            { label: "Break-even", value: "Day 14", trend: "on track", trendColor: "#3a8e62", chip: "#ecf8f1" },
            { label: "Avg. ticket", value: "€ 32.40", trend: "↑ 4.2%", trendColor: "#b34e0f", chip: "#fff5ec" },
            { label: "Cost / unit", value: "€ 7.85", trend: "↓ 1.1%", trendColor: "#3a8e62", chip: "#ecf8f1" },
          ].map((c, i) => (
            <g key={i} transform={`translate(0, ${i * 86})`}>
              <rect width="440" height="74" rx="16" fill="url(#kpi-tile)" stroke="#e7e7e7" />
              <text x="20" y="30" fontFamily="ui-sans-serif" fontSize="12" fill="#7a7a7a">
                {c.label}
              </text>
              <text
                x="20"
                y="58"
                fontFamily="ui-sans-serif"
                fontSize="22"
                fontWeight="700"
                fill="#262626"
              >
                {c.value}
              </text>
              <g transform="translate(330, 24)">
                <rect width="92" height="26" rx="13" fill={c.chip} />
                <text
                  x="46"
                  y="18"
                  textAnchor="middle"
                  fontFamily="ui-sans-serif"
                  fontSize="12"
                  fill={c.trendColor}
                >
                  {c.trend}
                </text>
              </g>
            </g>
          ))}
        </g>

        {/* center fade so the headline reads cleanly */}
        <rect width="1440" height="800" fill="url(#kpi-center)" />
      </svg>
    </div>
  );
}
