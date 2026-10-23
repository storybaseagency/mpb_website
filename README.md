# Medienproduktion Bruchwalski – Website (Next.js)

Statische Next.js-Seite als Ersatz für die bisherige WordPress-Installation.

## Entwickeln

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # erzeugt den Ordner out/
```

## Inhalte pflegen

- `src/content/site.ts` – Kontaktdaten, Über mich, Kundenstimmen, Technik, Projektberichte
- `src/content/services.ts` – die fünf Leistungsseiten (Texte, FAQ, Bilder, Video)
- `src/lib/schema.ts` – strukturierte Daten (z. B. weitere Profile unter `sameAs`)
- Bilder liegen in `public/images/`

### Video auf einer Leistungsseite einsetzen

In `src/content/services.ts` bei der Leistung das Feld `video` setzen:

- YouTube: `https://www.youtube-nocookie.com/embed/VIDEO-ID`
- Vimeo: `https://player.vimeo.com/video/VIDEO-ID`
- Eigene Datei: MP4 nach `public/videos/` legen und `/videos/datei.mp4` eintragen

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

## SEO

Offene Aufgaben außerhalb der Website: `docs/seo-checkliste.md`.
Nach jedem Deployment neue Inhalte an Bing & Co. melden: `npm run indexnow`.

## Kontaktformular

Das Formular schickt die Daten an `public/kontakt.php`, das bei all-inkl per PHP
eine E-Mail versendet. Lokal mit
`npm run dev` funktioniert der Versand nicht – nur auf dem Server.

## Deployment bei all-inkl

1. `npm run build`
2. Inhalt von `out/` (inkl. `.htaccess`) per FTP in das Webverzeichnis der Domain laden.
3. Vorher WordPress-Backup anlegen und die alten Dateien in einen Unterordner verschieben.
