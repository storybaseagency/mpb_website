import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Impressum", robots: { index: false } };

// PLATZHALTER: Angaben prüfen und vervollständigen (auf der alten Seite gab es kein Impressum).
export default function Impressum() {
  const { contact } = site;
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Impressum</h1>
      <div className="mt-8 space-y-6 text-muted">
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
          <p className="mt-2">E-Mail: {contact.email}</p>
        </div>
      </div>
    </section>
  );
}
