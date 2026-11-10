// Zentrale Inhalte der Website. Die Texte liegen in /content/*.json und werden über das CMS (/admin/) gepflegt.
import allgemein from "../../content/allgemein.json";
import kundenstimmen from "../../content/kundenstimmen.json";
import referenzen from "../../content/referenzen.json";
import ueberMich from "../../content/ueber-mich.json";

// "0160 7534434" -> "491607534434"
const internationalNumber = (phone: string) => phone.replace(/\D/g, "").replace(/^0/, "49");

export const site = {
  name: "Medienproduktion Bruchwalski",
  shortName: "Bruchwalski",
  url: "https://medienproduktionbruchwalski.de",
  headline: allgemein.headline,
  homeTitle: allgemein.homeTitle,
  subline: allgemein.subline,
  description: allgemein.description,
  linkedin: allgemein.linkedin,
  contact: {
    ...allgemein.contact,
    phoneHref: `tel:+${internationalNumber(allgemein.contact.phone)}`,
    whatsapp: `https://wa.me/${internationalNumber(allgemein.contact.phone)}?text=${encodeURIComponent(allgemein.whatsappText)}`,
  },
};

export const about = {
  title: ueberMich.title,
  intro: ueberMich.intro,
  paragraphs: ueberMich.paragraphs,
  motivation: ueberMich.motivation,
  image: ueberMich.image,
};

export type Testimonial = { topic: string; quote: string; name: string; role: string };

export const testimonials: Testimonial[] = kundenstimmen.items;

export const gear: { title: string; text: string }[] = ueberMich.gear;

export type CaseStudy = {
  title: string;
  location: string;
  service: string; // Slug der Leistung
  summary: string;
  facts: string[];
  image: string;
};

// Projektberichte für /referenzen/. Leer = Abschnitt wird ausgeblendet.
export const caseStudies: CaseStudy[] = (referenzen.projekte as Partial<CaseStudy>[]).map((c) => ({
  title: c.title ?? "",
  location: c.location ?? "",
  service: c.service ?? "",
  summary: c.summary ?? "",
  facts: c.facts ?? [],
  image: c.image ?? "",
}));

export const areaServed = ["Berlin", "Spandau", "Potsdam", "Brandenburg", "Deutschland"];

export const nav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/referenzen/", label: "Referenzen" },
  { href: "/ueber-jan-bruchwalski/", label: "Über mich" },
  { href: "/faq/", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
];
