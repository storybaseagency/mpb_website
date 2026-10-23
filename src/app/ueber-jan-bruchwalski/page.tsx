import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import Testimonials from "@/components/Testimonials";
import { services } from "@/content/services";
import { about, gear, site, testimonials } from "@/content/site";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Über Jan Bruchwalski – Kameramann & Bildmischer Berlin",
  description:
    "Jan Bruchwalski ist Mediengestalter mit 20 Jahren Erfahrung in der Bewegtbildproduktion – Kameramann, Bildmischer und Livestream-Techniker aus Berlin-Spandau.",
  alternates: { canonical: "/ueber-jan-bruchwalski/" },
};

const crumbs = [{ name: "Über mich", path: "/ueber-jan-bruchwalski/" }];

export default function About() {
  return (
    <>
      <JsonLd data={[personSchema, breadcrumbSchema(crumbs)]} />

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16">
          <Breadcrumbs items={crumbs} />
          <div className="mt-10 grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Über mich</p>
              <h1 className="font-display mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Jan Bruchwalski – Kameramann und Bildmischer aus Berlin
              </h1>
              <p className="mt-6 text-lg text-stone-300">{about.intro}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image src={about.image} alt="Jan Bruchwalski mit Kamera" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">Erfahrung aus 20 Jahren Bewegtbild</h2>
        {about.paragraphs.map((p) => (
          <p key={p} className="mt-4 leading-relaxed text-muted">{p}</p>
        ))}
        <p className="mt-4 leading-relaxed text-muted">{about.motivation}</p>

        <h2 className="font-display mt-14 text-2xl font-semibold sm:text-3xl">Schwerpunkte</h2>
        <ul className="mt-5 space-y-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}/`} className="font-medium hover:text-accent">{s.h1.split(" – ")[0]}</Link>
              <p className="text-sm text-muted">{s.teaser}</p>
            </li>
          ))}
        </ul>

        <h2 className="font-display mt-14 text-2xl font-semibold sm:text-3xl">Technik</h2>
        <dl className="mt-5 grid gap-4 sm:grid-cols-2">
          {gear.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-surface p-5">
              <dt className="text-sm font-semibold">{g.title}</dt>
              <dd className="mt-1 text-muted">{g.text}</dd>
            </div>
          ))}
        </dl>

        <h2 className="font-display mt-14 text-2xl font-semibold sm:text-3xl">Standort und Einsatzgebiet</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Mein Standort ist {site.contact.street} in {site.contact.city} (Spandau). Von dort bin ich in ganz Berlin,
          in Potsdam und Brandenburg sowie deutschlandweit im Einsatz.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="font-display text-3xl font-semibold">Stimmen zu meiner Arbeit</h2>
          <div className="mt-10">
            <Testimonials items={testimonials} />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
