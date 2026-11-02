import { site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description:
    "A monthly dinner club in Brooklyn with seasonal menus, wine, and good conversation around a long table.",
  url: site.url,
  areaServed: "Brooklyn, New York",
  sameAs: [site.instagramUrl],
  contactPoint: {
    "@type": "ContactPoint",
    email: site.email,
    contactType: "customer service",
  },
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
