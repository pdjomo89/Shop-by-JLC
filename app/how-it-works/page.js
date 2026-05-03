import PageHeader from "@/components/PageHeader";
import HowItWorks from "@/components/HowItWorks";
import Audience from "@/components/Audience";
import { dict, DEFAULT_LANG } from "@/lib/i18n";

const meta = dict[DEFAULT_LANG].pages.howItWorks;

export const metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: meta.metaTitle,
    description: meta.metaDescription,
    url: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader pageKey="howItWorks" />
      <HowItWorks />
      <Audience />
    </>
  );
}
