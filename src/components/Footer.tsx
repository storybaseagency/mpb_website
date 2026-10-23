import Image from "next/image";
import Link from "next/link";
import ConsentSettingsLink from "@/components/ConsentSettingsLink";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-stone-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Image src="/images/logo-horizontal-weiss.webp" alt={site.name} width={1200} height={240} className="h-10 w-auto" />
          <p className="mt-2 text-sm">Kameramann & Bildmischer in Berlin</p>
          <address className="mt-4 text-sm not-italic">
            {site.contact.person}<br />
            {site.contact.street}<br />
            {site.contact.city}
          </address>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Leistungen</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}/`} className="hover:text-white">
                  {s.title} Berlin
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Kontakt</p>
          <ul className="mt-3 space-y-2">
            <li><a href={site.contact.phoneHref} className="hover:text-white">{site.contact.phone}</a></li>
            <li><a href={`mailto:${site.contact.email}`} className="hover:text-white">{site.contact.email}</a></li>
            <li>
              <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-4 py-6 text-xs sm:px-6">
          <p>© 2026 {site.name}</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/referenzen/" className="hover:text-white">Referenzen</Link>
            <Link href="/ueber-jan-bruchwalski/" className="hover:text-white">Über mich</Link>
            <Link href="/faq/" className="hover:text-white">FAQ</Link>
            <Link href="/impressum/" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz/" className="hover:text-white">Datenschutz</Link>
            <ConsentSettingsLink />
          </div>
        </div>
      </div>
    </footer>
  );
}
