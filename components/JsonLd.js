import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, OG_IMAGE } from "@/lib/seo";
import { dict, DEFAULT_LANG } from "@/lib/i18n";

function Script({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.jpeg`,
      width: 512,
      height: 512,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: ["en", "fr", "de"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const tiers = dict[DEFAULT_LANG]?.pricing?.tiers || [];
  const offers = tiers.map((tier) => ({
    "@type": "Offer",
    name: tier.name,
    description: tier.description,
    price: String(tier.price || "").replace(/[^\d.,]/g, "").replace(",", "."),
    priceCurrency: "EUR",
    category: "subscription",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#pricing`,
  }));

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: SITE_DESCRIPTION,
    image: OG_IMAGE.url,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    offers: offers.length ? offers : undefined,
  };

  const faqItems = dict[DEFAULT_LANG]?.faq?.items || [];
  const faqPage = faqItems.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <>
      <Script data={organization} />
      <Script data={website} />
      <Script data={softwareApplication} />
      {faqPage && <Script data={faqPage} />}
    </>
  );
}
