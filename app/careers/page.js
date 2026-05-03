import PageHeader from "@/components/PageHeader";
import PageContent from "@/components/PageContent";
import { dict, DEFAULT_LANG } from "@/lib/i18n";

const meta = dict[DEFAULT_LANG].pages.careers;

export const metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  alternates: { canonical: "/careers" },
  openGraph: {
    title: meta.metaTitle,
    description: meta.metaDescription,
    url: "/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <PageHeader pageKey="careers" />
      <PageContent pageKey="careers" />
    </>
  );
}
