// Zentrale Inhalte der Website. Texte übernommen von der bisherigen WordPress-Seite.

export const site = {
  name: "Medienproduktion Bruchwalski",
  shortName: "Bruchwalski",
  url: "https://www.medienproduktionbruchwalski.de",
  headline: "Kameramann und Bildmischer in Berlin für professionelle Produktionen",
  homeTitle: "Kameramann & Bildmischer Berlin | Livestream & Bildregie – Medienproduktion Bruchwalski",
  subline: "Kamera, Bildregie und Liveproduktion in Berlin und deutschlandweit.",
  description:
    "Kameramann & Bildmischer aus Berlin-Spandau: Bildregie, Livestream-Produktion, technischer Support und Videoproduktion in Berlin und deutschlandweit.",
  linkedin: "https://www.linkedin.com/in/jan-b-a4a45a350/",
  contact: {
    person: "Jan Bruchwalski",
    street: "Pichelsdorfer Straße 59",
    city: "13595 Berlin",
    email: "bruchwalski@medienproduktionbruchwalski.de",
    phone: "0160 7534434",
    phoneHref: "tel:+491607534434",
    whatsapp: "https://wa.me/491607534434?text=" + encodeURIComponent("Hallo Jan, ich habe eine Anfrage zu einer Produktion:"),
  },
};

export const about = {
  title: "Über mich",
  intro:
    "Hey, ich bin Jan. Mediengestalter mit 20 Jahren Erfahrung in unterschiedlichen Bereichen der Bewegtbildproduktion.",
  paragraphs: [
    "Ob hinter der Kamera, in der Bildregie oder bei der technischen Umsetzung: Ich unterstütze Produktionen dort, wo Erfahrung, ein gutes Auge und technisches Verständnis gefragt sind.",
    "Von Videoproduktionen und Aufzeichnungen bis hin zu Live-Events und Livestreams: Mir ist wichtig, dass Technik und Gestaltung zusammenspielen und am Ende eine Produktion entsteht, die professionell aussieht und zuverlässig funktioniert.",
  ],
  motivation:
    "Mich begeistert, wenn aus Technik, Timing und einem guten Gespür für Bilder eine Produktion entsteht, die einfach funktioniert. Ob hinter der Kamera oder in der Bildregie – ich arbeite konzentriert und lösungsorientiert.",
  image: "/images/jan-bruchwalski.webp",
};

export type Testimonial = { topic: string; quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  {
    topic: "Technik & Bildregie",
    quote:
      "Ich kenne Jan Bruchwalski schon länger und habe ihn öfters für verschiedene Livestreams gebucht. Häufig in den Ministergärten in Berlin, wo es neben der guten Arbeit auch auf professionelles Auftreten ankommt. Ich danke Jan für die tolle Zusammenarbeit.",
    name: "Martin Kautzsch",
    role: "Geschäftsführer",
  },
  {
    topic: "Kamera & Schnitt",
    quote:
      "Wir hatten Jan Bruchwalski für unsere Agentur öfters beauftragt, für Kamera- und Schnittarbeiten. Wir waren allzeit zufrieden, sowohl mit der Zusammenarbeit, als auch mit den Endprodukten.",
    name: "Lea Schermer",
    role: "Geschäftsführerin",
  },
  {
    topic: "Bildmischer & Regie",
    quote:
      "Ich habe mit Jan Bruchwalski verschiedene Live-Produktionen erlebt und finde die Kommunikation klar und die Ergebnisse sind klasse.",
    name: "Christian Grodau",
    role: "Kameramann",
  },
];

export const gear = [
  { title: "Bildregie", text: "vMix, mimoLive, OBS, ATEM" },
  { title: "Kamera", text: "Blackmagic, Sony, RED" },
];

export type CaseStudy = {
  title: string;
  location: string;
  service: string; // Slug der Leistung
  summary: string;
  facts: string[];
  image: string;
};

// Projektberichte für /referenzen/. Leer = Abschnitt wird ausgeblendet.
export const caseStudies: CaseStudy[] = [];

export const areaServed = ["Berlin", "Spandau", "Potsdam", "Brandenburg", "Deutschland"];

export const nav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/referenzen/", label: "Referenzen" },
  { href: "/ueber-jan-bruchwalski/", label: "Über mich" },
  { href: "/faq/", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
];
