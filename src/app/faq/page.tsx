import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { services } from "@/content/services";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ – Livestream, Bildregie & Kameramann in Berlin",
  description:
    "Antworten auf häufige Fragen zu Livestream-Produktion, Bildmischer, technischem Support, Kameramann und Videoproduktion in Berlin: Kosten, Technik, Ablauf.",
  alternates: { canonical: "/faq/" },
};

const crumbs = [{ name: "FAQ", path: "/faq/" }];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(services.flatMap((s) => s.faq))]} />

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-5xl px-4 pb-20 pt-12 text-center sm:px-6 sm:pt-16">
          <Breadcrumbs items={crumbs} />
          <h1 className="font-display mx-auto mt-10 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Häufige Fragen zu Livestream, Bildregie und Kamera
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-300">
            Kosten, Technik und Ablauf – kurz beantwortet. Ihre Frage ist nicht dabei? Schreiben Sie mir einfach.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        {services.map((s) => (
          <section key={s.slug} className="mb-16">
            <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
            <div className="mt-6">
              <Faq items={s.faq} />
            </div>
            <Link href={`/${s.slug}/`} className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
              Mehr zu {s.title} in Berlin →
            </Link>
          </section>
        ))}
      </div>

      <ContactSection />
    </>
  );
}
