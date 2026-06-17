import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import { dict, DEFAULT_LANG } from "@/lib/i18n";

const meta = dict[DEFAULT_LANG].pages.pricing;

export const metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: meta.metaTitle,
    description: meta.metaDescription,
    url: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <PageHeader pageKey="pricing" large />
      <Pricing />
    </>
  );
}
