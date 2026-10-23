"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 text-ink-foreground backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-display text-lg font-semibold">
          {site.shortName}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-stone-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            className="rounded-full bg-accent px-4 py-2 font-medium text-accent-foreground transition hover:brightness-110"
          >
            Verfügbarkeit anfragen
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-4 pb-4 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-stone-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
