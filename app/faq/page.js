import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import { dict, DEFAULT_LANG } from "@/lib/i18n";

const meta = dict[DEFAULT_LANG].pages.faq;

export const metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: meta.metaTitle,
    description: meta.metaDescription,
    url: "/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <PageHeader pageKey="faq" />
      <FAQ />
    </>
  );
}
