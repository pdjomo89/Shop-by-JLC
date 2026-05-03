import { SITE_URL, SITE_LOCALES, DEFAULT_LOCALE } from "@/lib/seo";

const ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/how-it-works", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ai-coach", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/news", priority: 0.7, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.4, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority, changeFrequency }) => {
    const trimmed = path === "/" ? "" : path;
    const languages = Object.fromEntries(
      SITE_LOCALES.map((loc) => [
        loc,
        loc === DEFAULT_LOCALE
          ? `${SITE_URL}${path}`
          : `${SITE_URL}/${loc}${trimmed}`,
      ]),
    );
    return {
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    };
  });
}
