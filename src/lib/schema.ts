import { areaServed, site } from "@/content/site";
import type { Service } from "@/content/services";

// Strukturierte Daten (schema.org) für Suchmaschinen und KI-Systeme.
const url = (path = "/") => `${site.url}${path}`;
export const businessId = url("/#business");
export const personId = url("/#jan-bruchwalski");

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": businessId,
  name: site.name,
  description: site.description,
  url: url(),
  image: url("/images/jan-bruchwalski.webp"),
  telephone: "+49 160 7534434",
  email: site.contact.email,
  vatID: site.contact.vatId,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.street,
    postalCode: "13595",
    addressLocality: "Berlin",
    addressRegion: "Berlin",
    addressCountry: "DE",
  },
  areaServed: areaServed.map((name) => ({ "@type": "Place", name })),
  founder: { "@id": personId },
  sameAs: [site.linkedin],
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: site.contact.person,
  jobTitle: ["Kameramann", "Bildmischer", "Mediengestalter"],
  description:
    "Mediengestalter mit 20 Jahren Erfahrung in der Bewegtbildproduktion – Kamera, Bildregie und Liveproduktion in Berlin.",
  image: url("/images/jan-bruchwalski.webp"),
  url: url("/ueber-jan-bruchwalski/"),
  worksFor: { "@id": businessId },
  workLocation: { "@type": "Place", name: "Berlin" },
  knowsAbout: [
    "Bildregie",
    "Bildmischung",
    "Livestreaming",
    "Kameraarbeit",
    "Videoproduktion",
    "Hybride Events",
    "vMix",
    "Blackmagic ATEM",
    "mimoLive",
    "OBS",
  ],
  sameAs: [site.linkedin],
};

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": url(`/${s.slug}/#service`),
    name: s.h1,
    serviceType: s.title,
    description: s.metaDescription,
    url: url(`/${s.slug}/`),
    image: url(s.image),
    provider: { "@id": businessId },
    areaServed: areaServed.map((name) => ({ "@type": "Place", name })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Startseite", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: url(item.path),
    })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
