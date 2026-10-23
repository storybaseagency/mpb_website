import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutzerklärung", robots: { index: false } };

// PLATZHALTER: Vollständige Datenschutzerklärung einfügen (z. B. per Generator erstellt).
// Abzudecken: Hosting bei all-inkl, Server-Logfiles, Kontaktformular (E-Mail-Versand),
// eingebettete Videos (YouTube/Vimeo), Link zu LinkedIn.
export default function Datenschutz() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Datenschutzerklärung</h1>
      <p className="mt-6 text-muted">Die Datenschutzerklärung wird in Kürze ergänzt.</p>
    </section>
  );
}
