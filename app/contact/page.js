import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import { dict, DEFAULT_LANG } from "@/lib/i18n";

const meta = dict[DEFAULT_LANG].pages.contact;

export const metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: meta.metaTitle,
    description: meta.metaDescription,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        pageKey="contact"
        bgImage="/tumisu-contact-us-2993000.jpg"
        bgAlt="Person in a suit tapping a row of contact icons (email, phone, mobile, mail)"
        overlayClassName="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/20"
      />
      <Contact />
    </>
  );
}
