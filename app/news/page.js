import PageHeader from "@/components/PageHeader";
import News from "@/components/News";
import { dict, DEFAULT_LANG } from "@/lib/i18n";

const meta = dict[DEFAULT_LANG].pages.news;

export const metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  alternates: { canonical: "/news" },
  openGraph: {
    title: meta.metaTitle,
    description: meta.metaDescription,
    url: "/news",
  },
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        pageKey="news"
        bgImage="/mika-baumeister-_Y5jvYypnZA-unsplash.jpg"
        bgAlt="Neon NEWS sign glowing inside a classical building"
        bgImageClassName="object-[70%_30%]"
        overlayClassName="absolute inset-0 bg-gradient-to-br from-brand-50/80 via-white/90 to-accent-50/80"
      />
      <News />
    </>
  );
}
