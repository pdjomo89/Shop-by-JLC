import PageHeader from "@/components/PageHeader";
import PageContent from "@/components/PageContent";
import { dict, DEFAULT_LANG } from "@/lib/i18n";

const meta = dict[DEFAULT_LANG].pages.cookies;

export const metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  alternates: { canonical: "/cookies" },
  openGraph: {
    title: meta.metaTitle,
    description: meta.metaDescription,
    url: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <>
      <PageHeader pageKey="cookies" />
      <PageContent pageKey="cookies" />
    </>
  );
}
