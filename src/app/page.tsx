import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import { about, gear, services, site, testimonials } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <Image src="/images/hero-kamera.webp" alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="mx-auto max-w-6xl px-4 pb-28 pt-24 sm:px-6 sm:pb-36 sm:pt-32">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Jan Bruchwalski</p>
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
            <Image src={about.image} alt="Jan Bruchwalski mit Kamera" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">{about.title}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">{about.intro}</h2>
            {about.paragraphs.map((p) => (
              <p key={p} className="mt-5 text-muted">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="leistungen" className="scroll-mt-16 border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Leistungen</p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">Video, Bildregie & Liveproduktion</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/leistungen/${s.slug}/`}
                className="group overflow-hidden rounded-2xl border border-border bg-background transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-accent">0{i + 1}</p>
                  <h3 className="font-display mt-1 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.teaser}</p>
                  <p className="mt-4 text-sm font-medium group-hover:text-accent">Mehr erfahren →</p>
                </div>
              </Link>
            ))}
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
        </div>
      </section>

      <section id="stimmen" className="scroll-mt-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Stimmen</p>
          <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">Stimmen zu meiner Arbeit</h2>
          <div className="mt-12">
            <Testimonials items={testimonials} />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
