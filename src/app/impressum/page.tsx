import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Impressum", robots: { index: false } };

export default function Impressum() {
  const { contact } = site;
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Impressum</h1>
      <div className="mt-8 space-y-8 text-muted">
        <div>
          <h2 className="font-semibold text-foreground">Angaben gemäß § 5 DDG</h2>
          <p className="mt-2">
            {contact.person}<br />
            {site.name}<br />
            {contact.street}<br />
            {contact.city}
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-foreground">Kontakt</h2>
          <p className="mt-2">
            Telefon: <a href={contact.phoneHref} className="hover:text-foreground">{contact.phone}</a><br />
            E-Mail: <a href={`mailto:${contact.email}`} className="hover:text-foreground">{contact.email}</a>
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-foreground">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p className="mt-2">
            {contact.person}<br />
            {contact.street}, {contact.city}
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-foreground">Verbraucherstreitbeilegung</h2>
          <p className="mt-2">
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </section>
  );
}
