import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import Testimonials from "@/components/Testimonials";
import { serviceBySlug } from "@/content/services";
import { caseStudies, testimonials } from "@/content/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Referenzen – Livestream, Bildregie & Kamera in Berlin",
  description:
    "Referenzen von Medienproduktion Bruchwalski: Livestreams aus den Ministergärten Berlin, Bildregie für Live-Produktionen sowie Kamera und Schnitt für Agenturen.",
  alternates: { canonical: "/referenzen/" },
};

const crumbs = [{ name: "Referenzen", path: "/referenzen/" }];

const impressions = [
  { src: "/images/liveregie-ministergaerten.webp", alt: "Live-Regie bei einer Konferenz in den Ministergärten Berlin", caption: "Livestream & Bildregie, Ministergärten Berlin" },
  { src: "/images/setup-ministergaerten.webp", alt: "Kamera- und Streaming-Setup in einem Konferenzsaal", caption: "Multicam-Setup für eine Konferenz" },
  { src: "/images/regie.webp", alt: "Arbeit in der Regie einer Live-Produktion", caption: "Bildregie bei einer Live-Produktion" },
  { src: "/images/kameraarbeit-see.webp", alt: "Kameraarbeit auf See", caption: "Kameraarbeit auf See" },
  { src: "/images/dreharbeiten-hafen.webp", alt: "Dreharbeiten am Hafen", caption: "Dreharbeiten am Hafen" },
  { src: "/images/kamera-talk.webp", alt: "Kamera bei einer Talk-Aufzeichnung", caption: "Talk-Aufzeichnung" },
];

export default function Referenzen() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-5xl px-4 pb-20 pt-12 text-center sm:px-6 sm:pt-16">
          <Breadcrumbs items={crumbs} />
          <h1 className="font-display mx-auto mt-10 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Referenzen aus Livestream, Bildregie und Kamera
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-300">
            Von regelmäßigen Livestreams aus den Ministergärten in Berlin bis zu Kamera- und Schnittarbeiten für Agenturen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h2 className="font-display text-3xl font-semibold">Das sagen Kunden</h2>
        <div className="mt-10">
          <Testimonials items={testimonials} />
        </div>
      </section>

      {caseStudies.length > 0 && (
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <h2 className="font-display text-3xl font-semibold">Projektberichte</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {caseStudies.map((c) => {
                const service = serviceBySlug(c.service);
                return (
                  <article key={c.title} className="overflow-hidden rounded-2xl border border-border bg-background">
                    <div className="relative aspect-[16/9]">
                      <Image src={c.image} alt={c.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-medium uppercase tracking-wider text-accent">{c.location}</p>
                      <h3 className="font-display mt-2 text-xl font-semibold">{c.title}</h3>
                      <p className="mt-3 text-sm text-muted">{c.summary}</p>
                      <ul className="mt-4 space-y-1 text-sm">
                        {c.facts.map((f) => <li key={f}>· {f}</li>)}
                      </ul>
                      {service && (
                        <Link href={`/${service.slug}/`} className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
                          {service.title} in Berlin →
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <h2 className="font-display text-3xl font-semibold">Eindrücke aus Produktionen</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {impressions.map((img) => (
            <figure key={img.src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-sm text-muted">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
