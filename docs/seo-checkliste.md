# SEO & GEO – Checkliste außerhalb der Website

Was auf der Website umgesetzt ist, steht unten. Die übrigen Punkte aus dem
SEO-/GEO-Plan lassen sich nur in externen Konten erledigen.

## Erledigt (Website)

- [x] Title, Meta-Description und H1 mit Berlin-Bezug auf allen Seiten
- [x] Fünf Leistungsseiten mit eigener URL, Direktantwort, Technik, Ablauf, FAQ und interner Verlinkung
  - /bildregie-bildmischer-berlin/
  - /livestream-produktion-berlin/
  - /technischer-livestream-support-berlin/
  - /kameramann-berlin/
  - /videoproduktion-berlin/
- [x] /referenzen/, /ueber-jan-bruchwalski/ (Personenseite), /faq/
- [x] Name, Adresse, Telefon (NAP) im Footer, Impressum und Datenschutz verlinkt
- [x] JSON-LD: ProfessionalService, Person, Service, BreadcrumbList, FAQPage
- [x] XML-Sitemap, robots.txt, llms.txt
- [x] IndexNow-Schlüssel und Skript (`npm run indexnow`)
- [x] Formular auf Deutsch, Feld „Wie haben Sie mich gefunden?“ (inkl. ChatGPT/KI)
- [x] Weiterleitungen alter URLs, Caching-Header, Bilder als WebP

## Offen – Woche 1–2

- [ ] Firmierung klären: Medienproduktion Bruchwalski vs. Story Base Agency UG – und überall identisch schreiben
- [ ] Google Search Console verifizieren (Code in `src/app/layout.tsx` unter `verification`), Sitemap einreichen
- [ ] Bing Webmaster Tools (Import aus Search Console), danach `npm run indexnow`
- [ ] Google-Unternehmensprofil anlegen (Kundenempfang vor Ort? sonst Adresse ausblenden + Einzugsgebiete)
- [ ] Die drei Referenzkunden um eine Google-Bewertung bitten

## Offen – Woche 3–6

- [ ] Bing Places, Apple Business Connect
- [ ] Crew United, Gelbe Seiten, Das Örtliche, 11880, Berliner Branchen, Cylex, LinkedIn-Unternehmensseite
- [ ] Profile als `sameAs` in `src/lib/schema.ts` ergänzen
- [ ] Showreel auf YouTube hochladen und auf Startseite/Leistungsseiten einbinden (`video` in `src/content/services.ts`)

## Offen – Monat 2–3

- [ ] Drei Projektberichte (z. B. Ministergärten) in `caseStudies` in `src/content/site.ts` eintragen
- [ ] Preisrahmen oder Pakete ergänzen (FAQ „Was kostet …?“)
- [ ] Kunden um Nennung/Verlinkung auf ihrer Website bitten

## Laufend

- [ ] Monatlich ein Fachartikel (z. B. Livestream-Checkliste für Konferenzen)
- [ ] Aufnahme in Listenartikel und Verzeichnisse anfragen
- [ ] Nach jedem Einsatz um eine Bewertung bitten
- [ ] Monatliches Prompt-Monitoring in ChatGPT, Perplexity, Gemini, Copilot
