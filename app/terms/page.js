import PageHeader from "@/components/PageHeader";
import PageContent from "@/components/PageContent";
import { dict, DEFAULT_LANG } from "@/lib/i18n";

const meta = dict[DEFAULT_LANG].pages.terms;

export const metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: meta.metaTitle,
    description: meta.metaDescription,
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader pageKey="terms" />
      <PageContent pageKey="terms" />
    </>
  );
}
