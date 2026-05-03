import PageHeader from "@/components/PageHeader";
import PageContent from "@/components/PageContent";
import { dict, DEFAULT_LANG } from "@/lib/i18n";

const meta = dict[DEFAULT_LANG].pages.privacy;

export const metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: meta.metaTitle,
    description: meta.metaDescription,
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader pageKey="privacy" />
      <PageContent pageKey="privacy" />
    </>
  );
}
