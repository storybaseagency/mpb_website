// Leistungsseiten. Jede Seite beantwortet eine Suchintention (z. B. „Bildmischer Berlin“)
// und beginnt mit einer kurzen Direktantwort.
import fs from "node:fs";
import path from "node:path";

export type Service = {
  slug: string;
  title: string; // kurzer Name für Karten, Navigation und interne Links
  metaTitle: string;
  metaDescription: string;
  h1: string;
  teaser: string;
  image: string;
  imageAlt: string;
  answer: string; // Kurzantwort im ersten Absatz
  // YouTube-/Vimeo-Embed-URL oder Pfad zu einer MP4 in /public. Leer = kein Video.
  video: string;
  videoPoster?: string;
  highlights: { title: string; text: string }[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  table?: { caption: string; head: string[]; rows: string[][] };
  steps: { title: string; text: string }[];
  gallery: { src: string; alt: string }[];
  testimonials: string[]; // Namen aus `testimonials`
  faq: { q: string; a: string }[];
  related: string[]; // Slugs verwandter Leistungen
  cta: string;
};

type ServiceFile = Partial<Omit<Service, "table">> & {
  order?: number;
  table?: { caption?: string; head?: string[]; rows?: { a?: string; b?: string; c?: string }[] } | null;
};

// Liest die Leistungsseiten aus /content/leistungen/*.json (gepflegt über das CMS unter /admin/).
// Nur zur Build-Zeit genutzt; nicht aus Client-Komponenten importieren.
function loadServices(): Service[] {
  const dir = path.join(process.cwd(), "content", "leistungen");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")) as ServiceFile)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
    .map((s) => ({
      slug: s.slug ?? "",
      title: s.title ?? "",
      metaTitle: s.metaTitle ?? s.title ?? "",
      metaDescription: s.metaDescription ?? "",
      h1: s.h1 ?? s.title ?? "",
      teaser: s.teaser ?? "",
      image: s.image ?? "",
      imageAlt: s.imageAlt ?? "",
      answer: s.answer ?? "",
      video: s.video ?? "",
      videoPoster: s.videoPoster || undefined,
      highlights: s.highlights ?? [],
      sections: (s.sections ?? []).map((sec) => ({
        heading: sec.heading ?? "",
        paragraphs: sec.paragraphs ?? [],
        bullets: sec.bullets?.length ? sec.bullets : undefined,
      })),
      table: s.table?.rows?.length
        ? {
            caption: s.table.caption ?? "",
            head: s.table.head ?? [],
            rows: s.table.rows.map((r) => [r.a ?? "", r.b ?? "", r.c ?? ""]),
          }
        : undefined,
      steps: s.steps ?? [],
      gallery: s.gallery ?? [],
      testimonials: s.testimonials ?? [],
      faq: s.faq ?? [],
      related: s.related ?? [],
      cta: s.cta || "Verfügbarkeit anfragen",
    }));
}

export const services: Service[] = loadServices();

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
