const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Brooklyn Suppers",
  description:
    "A monthly dinner club in Brooklyn with seasonal menus, wine, and good conversation around a long table.",
  url: "https://brooklynsuppers.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    addressCountry: "US",
  },
  servesCuisine: "Seasonal American",
  priceRange: "$$",
  sameAs: ["https://www.instagram.com/brooklynsuppers"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@brooklynsuppers.com",
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
