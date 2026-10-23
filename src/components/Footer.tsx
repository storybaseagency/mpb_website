import Link from "next/link";
import { services, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-stone-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-2 text-sm">{site.subline}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Leistungen</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/leistungen/${s.slug}/`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Kontakt</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="/#kontakt" className="hover:text-white">Verfügbarkeit anfragen</Link></li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-4 py-6 text-xs sm:px-6">
          <p>© 2026 {site.name}</p>
          <div className="flex gap-6">
            <Link href="/impressum/" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz/" className="hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
