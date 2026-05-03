import PageHeader from "@/components/PageHeader";
import AiAgent from "@/components/AiAgent";
import { dict, DEFAULT_LANG } from "@/lib/i18n";

const meta = dict[DEFAULT_LANG].pages.aiCoach;

export const metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  alternates: { canonical: "/ai-coach" },
  openGraph: {
    title: meta.metaTitle,
    description: meta.metaDescription,
    url: "/ai-coach",
  },
};

export default function AiCoachPage() {
  return (
    <>
      <PageHeader pageKey="aiCoach" bgImage="/zach-m-Tyt5Z03BoaI-unsplash.jpg" />
      <AiAgent />
    </>
  );
}
