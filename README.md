# Medienproduktion Bruchwalski – Website (Next.js)

Statische Next.js-Seite als Ersatz für die bisherige WordPress-Installation.

## Entwickeln

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # erzeugt den Ordner out/
```

## Inhalte pflegen (CMS)

Texte, Bilder, Kundenstimmen, Referenzen und Videos werden im CMS unter
**https://medienproduktionbruchwalski.de/admin/** bearbeitet (Sveltia CMS).
Jede gespeicherte Änderung landet als Commit auf `main`; der automatische Upload
stellt sie nach ca. 2 Minuten online. Hochgeladene Fotos werden automatisch in WebP
umgewandelt und auf max. 2000 px verkleinert.

Anmeldung mit einem GitHub-Token (einmalig anlegen):

1. GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained tokens** → *Generate new token*
2. Resource owner: `storybaseagency`, Repository access: *Only select repositories* → `mpb_website`
3. Permissions → Repository permissions → **Contents: Read and write**
4. Token kopieren und im CMS bei *Mit Zugriffstoken anmelden* einfügen

Die Inhalte liegen als JSON-Dateien in `content/`:

- `content/leistungen/*.json` – die Leistungsseiten (eine Datei pro Seite)
- `content/allgemein.json` – Startseite und Kontaktdaten
- `content/ueber-mich.json`, `content/kundenstimmen.json`, `content/referenzen.json`

Die Felder des CMS sind in `public/admin/config.yml` definiert. Das CMS-Skript wird
beim Build aus `node_modules/@sveltia/cms` nach `public/admin/` kopiert.

### Video auf einer Leistungsseite einsetzen

Im CMS bei der Leistungsseite das Feld **Video** ausfüllen:

- YouTube: `https://www.youtube-nocookie.com/embed/VIDEO-ID`
- Vimeo: `https://player.vimeo.com/video/VIDEO-ID`

Ist das Feld leer, wird stattdessen das Titelbild der Leistung gezeigt.
YouTube und Vimeo laden erst nach Klick (Datenschutz).

## Seiten

| URL | Zweck |
| --- | --- |
| `/` | Startseite |
| `/bildregie-bildmischer-berlin/` | Leistung: Bildregie & Bildmischer |
| `/livestream-produktion-berlin/` | Leistung: Livestream & Aufzeichnung |
| `/technischer-livestream-support-berlin/` | Leistung: Technischer Support |
| `/kameramann-berlin/` | Leistung: Kameramann |
| `/videoproduktion-berlin/` | Leistung: Videoproduktion |
| `/referenzen/`, `/ueber-jan-bruchwalski/`, `/faq/` | Vertrauen & Fragen |
| `/impressum/`, `/datenschutz/` | Pflichtseiten |

## Google Ads

Conversion-Tracking wird in `src/content/tracking.ts` aktiviert (Google-Tag, Conversion-ID und Labels).
Solange `tagId` leer ist, wird nichts geladen und kein Cookie-Banner angezeigt.
Mit ID erscheint ein Banner; Google Ads lädt erst nach Einwilligung (Consent Mode v2).
Gezählt werden: abgeschicktes Formular, Klick auf Telefon, Klick auf WhatsApp.
Kampagnen-Parameter (`utm_*`, `gclid`) werden unabhängig davon in der Anfrage-Mail mitgeschickt.

## SEO

Offene Aufgaben außerhalb der Website: `docs/seo-checkliste.md`.
Nach jedem Deployment neue Inhalte an Bing & Co. melden: `npm run indexnow`.

## Kontaktformular

Das Formular schickt die Daten an `public/kontakt.php`, das bei all-inkl per PHP
eine E-Mail per SMTP versendet (Zugangsdaten siehe Deployment). Lokal mit
`npm run dev` funktioniert der Versand nicht – nur auf dem Server.

## Deployment bei all-inkl

Jeder Push auf `main` baut die Seite und lädt sie automatisch per FTPS hoch
(`.github/workflows/deploy.yml`). Danach werden neue Inhalte per IndexNow gemeldet.

Einmalig einrichten:

1. Bei all-inkl im KAS unter **FTP** einen eigenen FTP-Benutzer anlegen, dessen
   Verzeichnis das Webverzeichnis der Domain ist.
2. Auf GitHub unter **Settings → Secrets and variables → Actions** drei Secrets anlegen:
   `FTP_SERVER` (z. B. `w0123456.kasserver.com`), `FTP_USERNAME`, `FTP_PASSWORD`.
3. Vorher die WordPress-Dateien sichern und aus dem Webverzeichnis entfernen
   (insbesondere `index.php`, sonst wird weiter WordPress angezeigt).
4. Unter **Actions → Deploy zu all-inkl → Run workflow** den ersten Upload starten.

Ohne Secrets wird nur gebaut, nichts hochgeladen.

### Kontaktformular (SMTP)

Das Formular verschickt per SMTP über das all-inkl-Postfach. Dafür zwei weitere Secrets:

- `SMTP_USERNAME` – Login des Postfachs `website@medienproduktionbruchwalski.de` (KAS → E-Mail → Postfächer)
- `SMTP_PASSWORD` – Passwort dieses Postfachs
- optional `SMTP_HOST` – sonst wird `FTP_SERVER` verwendet

Das Deployment schreibt daraus `kontakt-config.php` auf den Server (per `.htaccess` gesperrt).
Ohne diese Secrets versucht das Formular den Versand per PHP `mail()`.
