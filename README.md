# Medienproduktion Bruchwalski – Website (Next.js)

Statische Next.js-Seite als Ersatz für die bisherige WordPress-Installation.

## Entwickeln

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # erzeugt den Ordner out/
```

## Inhalte pflegen

Alle Texte, Kundenstimmen, Kontaktdaten und die drei Leistungen stehen in `src/content/site.ts`.
Neue Videos, Texte oder Fragen & Antworten werden ebenfalls dort ergänzt.
Bilder liegen in `public/images/`.

### Video auf einer Landingpage einsetzen

In `src/content/site.ts` bei der Leistung das Feld `landing.video` setzen:

- YouTube: `https://www.youtube-nocookie.com/embed/VIDEO-ID`
- Vimeo: `https://player.vimeo.com/video/VIDEO-ID`
- Eigene Datei: MP4 nach `public/videos/` legen und `/videos/datei.mp4` eintragen

Ist das Feld leer, erscheint der Platzhalter „Video folgt in Kürze“.

## Seiten

| URL | Zweck |
| --- | --- |
| `/` | Startseite |
| `/leistungen/videoproduktion/` | Landingpage Leistung 1 |
| `/leistungen/live-recording/` | Landingpage Leistung 2 |
| `/leistungen/technischer-support/` | Landingpage Leistung 3 |
| `/impressum/`, `/datenschutz/` | Pflichtseiten |

## Kontaktformular

Das Formular schickt die Daten an `public/kontakt.php`, das bei all-inkl per PHP
eine E-Mail versendet. Lokal mit
`npm run dev` funktioniert der Versand nicht – nur auf dem Server.

## Deployment bei all-inkl

1. `npm run build`
2. Inhalt von `out/` (inkl. `.htaccess`) per FTP in das Webverzeichnis der Domain laden.
3. Vorher WordPress-Backup anlegen und die alten Dateien in einen Unterordner verschieben.
