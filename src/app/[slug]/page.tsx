import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { serviceBySlug, services } from "@/content/services";
import { gear, testimonials } from "@/content/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/${slug}/` },
    openGraph: { title: service.metaTitle, description: service.metaDescription, images: [service.image] },
  };
}

export default async function ServicePage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const quotes = testimonials.filter((t) => service.testimonials.includes(t.name));
  const related = service.related.map(serviceBySlug).filter((s) => s !== undefined);
  const crumbs = [{ name: service.title, path: `/${slug}/` }];

  return (
    <>
      <JsonLd data={[serviceSchema(service), breadcrumbSchema(crumbs), faqSchema(service.faq)]} />

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(228,87,46,0.28),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-12 text-center sm:px-6 sm:pt-16">
          <Breadcrumbs items={crumbs} />
          <p className="mt-10 text-sm uppercase tracking-[0.2em] text-accent">{service.title}</p>
          <h1 className="font-display mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            {service.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-300">{service.teaser}</p>
          {service.video ? (
            <div className="mt-12">
              <Video src={service.video} poster={service.videoPoster} title={service.h1} />
            </div>
          ) : (
            <div className="relative mx-auto mt-12 aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image src={service.image} alt={service.imageAlt} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
            </div>
          )}
          <Link
            href="#anfrage"
            className="mt-10 inline-block rounded-full bg-accent px-8 py-4 font-medium text-white transition hover:brightness-110"
          >
            {service.cta}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="max-w-3xl font-display text-xl font-medium leading-relaxed sm:text-2xl">{service.answer}</p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {service.highlights.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-surface p-6">
              <div className="h-1 w-10 rounded bg-accent" />
              <h2 className="font-display mt-5 text-lg font-semibold">{b.title}</h2>
              <p className="mt-2 text-sm text-muted">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        {service.sections.map((sec) => (
          <div key={sec.heading} className="mb-14">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">{sec.heading}</h2>
            {sec.paragraphs.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-muted">{p}</p>
            ))}
            {sec.bullets && (
              <ul className="mt-5 space-y-2">
                {sec.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {service.table && (
          <div className="mb-14 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left font-display text-lg font-semibold text-foreground">
                {service.table.caption}
              </caption>
              <thead>
                <tr className="border-b border-border">
                  {service.table.head.map((h) => (
                    <th key={h} className="py-3 pr-4 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {service.table.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-border">
                    {row.map((cell, i) => (
                      <td key={i} className={`py-3 pr-4 ${i === 0 ? "font-medium" : "text-muted"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className={`grid gap-4 ${service.gallery.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {service.gallery.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="font-display text-3xl font-semibold">So läuft es ab</h2>
          <ol className={`mt-10 grid gap-8 ${service.steps.length > 3 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
            {service.steps.map((step, i) => (
              <li key={step.title}>
                <span className="font-display text-5xl font-semibold text-accent/80">{i + 1}</span>
                <h3 className="font-display mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 flex flex-wrap gap-3">
            {gear.map((g) => (
              <span key={g.title} className="rounded-full border border-border px-4 py-2 text-sm">
                <span className="font-semibold">{g.title}:</span> <span className="text-muted">{g.text}</span>
              </span>
            ))}
          </div>
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
        <div className="mt-8">
          <Faq items={service.faq} />
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-semibold">Weitere Leistungen in Berlin</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}/`}
                className="rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
              >
                {r.h1.split(" – ")[0]} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection id="anfrage" title={service.cta} subject={service.title} />
    </>
  );
}
