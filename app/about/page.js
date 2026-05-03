import PageHeader from "@/components/PageHeader";
import PageContent from "@/components/PageContent";
import { dict, DEFAULT_LANG } from "@/lib/i18n";

const meta = dict[DEFAULT_LANG].pages.about;

export const metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    title: meta.metaTitle,
    description: meta.metaDescription,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader pageKey="about" />
      <PageContent pageKey="about" />
    </>
  );
}
