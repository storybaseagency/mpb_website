import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { gear, services, testimonials } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/leistungen/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.teaser,
    alternates: { canonical: `/leistungen/${slug}/` },
    openGraph: { images: [service.image] },
  };
}

export default async function ServiceLanding({ params }: PageProps<"/leistungen/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const { landing } = service;
  const quotes = testimonials.filter((t) => landing.testimonials.includes(t.name));

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(228,87,46,0.28),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">{service.title}</p>
          <h1 className="font-display mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            {landing.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-300">{landing.subline}</p>
          <div className="mt-12">
            <Video src={landing.video} poster={landing.videoPoster} title={service.title} />
          </div>
          <Link
            href="#anfrage"
            className="mt-10 inline-block rounded-full bg-accent px-8 py-4 font-medium text-white transition hover:brightness-110"
          >
            {landing.cta}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="max-w-3xl font-display text-2xl font-medium leading-snug sm:text-3xl">{landing.intro}</p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {landing.benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-surface p-6">
              <div className="h-1 w-10 rounded bg-accent" />
              <h3 className="font-display mt-5 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className={`grid gap-4 ${landing.gallery.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {landing.gallery.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="font-display text-3xl font-semibold">So läuft es ab</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {landing.steps.map((step, i) => (
              <li key={step.title}>
                <span className="font-display text-5xl font-semibold text-accent/80">{i + 1}</span>
                <h3 className="font-display mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          {landing.showGear && (
            <div className="mt-14 flex flex-wrap gap-3">
              {gear.map((g) => (
                <span key={g.title} className="rounded-full border border-border px-4 py-2 text-sm">
                  <span className="font-semibold">{g.title}:</span> <span className="text-muted">{g.text}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {quotes.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="font-display text-3xl font-semibold">Das sagen Kunden</h2>
          <div className="mt-10">
            <Testimonials items={quotes} />
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <h2 className="font-display text-3xl font-semibold">Häufige Fragen</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {landing.faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {f.q}
                <span className="text-accent transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <ContactSection id="anfrage" title={landing.cta} subject={service.title} />
    </>
  );
}
