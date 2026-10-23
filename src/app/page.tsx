import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import ServiceCards from "@/components/ServiceCards";
import Testimonials from "@/components/Testimonials";
import { services } from "@/content/services";
import { about, gear, site, testimonials } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: site.homeTitle },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <Image src="/images/hero-kamera.webp" alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="mx-auto max-w-6xl px-4 pb-28 pt-24 sm:px-6 sm:pb-36 sm:pt-32">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Jan Bruchwalski · Berlin</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-6xl">
            {site.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-stone-300">{site.subline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#kontakt" className="rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:brightness-110">
              Verfügbarkeit anfragen
            </Link>
            <Link href="#leistungen" className="rounded-full border border-white/25 px-6 py-3 font-medium transition hover:bg-white/10">
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      <section id="ueber-mich" className="scroll-mt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image src={about.image} alt="Jan Bruchwalski, Kameramann und Bildmischer aus Berlin" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">{about.title}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">{about.intro}</h2>
            {about.paragraphs.map((p) => (
              <p key={p} className="mt-5 text-muted">{p}</p>
            ))}
            <Link href="/ueber-jan-bruchwalski/" className="mt-6 inline-block font-medium text-accent hover:underline">
              Mehr über Jan Bruchwalski →
            </Link>
          </div>
        </div>
      </section>

      <section id="leistungen" className="scroll-mt-16 border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Leistungen</p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">Video, Bildregie & Liveproduktion in Berlin</h2>
            <p className="mt-4 text-muted">
              Agenturen, Eventtechnik-Firmen und Veranstalter buchen mich als Bildmischer, Kameramann und
              Livestream-Techniker – einzeln oder für die komplette Produktion.
            </p>
          </div>
          <div className="mt-12">
            <ServiceCards items={services} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Motivation</p>
          <p className="font-display mt-4 text-2xl font-medium leading-snug sm:text-3xl">{about.motivation}</p>
        </div>
        <div className="grid content-center gap-4">
          {gear.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm font-semibold">{g.title}</p>
              <p className="mt-1 text-muted">{g.text}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-sm font-semibold">Einsatzgebiet</p>
            <p className="mt-1 text-muted">
              Standort Berlin-Spandau – im Einsatz in ganz Berlin, in Potsdam und Brandenburg sowie deutschlandweit.
            </p>
          </div>
        </div>
      </section>

      <section id="stimmen" className="scroll-mt-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Stimmen</p>
          <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">Stimmen zu meiner Arbeit</h2>
          <div className="mt-12">
            <Testimonials items={testimonials} />
          </div>
          <Link href="/referenzen/" className="mt-8 inline-block font-medium text-accent hover:underline">
            Alle Referenzen ansehen →
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
