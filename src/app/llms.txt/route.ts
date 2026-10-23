import { services } from "@/content/services";
import { about, site } from "@/content/site";

export const dynamic = "force-static";

// Kurzbeschreibung für KI-Systeme (llms.txt). Geringe Priorität, aber ohne Aufwand aktuell gehalten.
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${about.intro} Ansprechpartner: ${site.contact.person}, ${site.contact.street}, ${site.contact.city}, Telefon ${site.contact.phone}, ${site.contact.email}.`,
    "",
    "## Leistungen",
    ...services.map((s) => `- [${s.h1}](${site.url}/${s.slug}/): ${s.teaser}`),
    "",
    "## Weitere Seiten",
    `- [Referenzen](${site.url}/referenzen/)`,
    `- [Über Jan Bruchwalski](${site.url}/ueber-jan-bruchwalski/)`,
    `- [FAQ](${site.url}/faq/)`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
