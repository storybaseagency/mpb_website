"use client";

import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const sources = ["Google-Suche", "Google Maps", "ChatGPT / KI-Assistent", "LinkedIn", "Empfehlung", "Sonstiges"];

// Sendet an public/kontakt.php (läuft bei all-inkl per PHP, kein Node-Server nötig).
export default function ContactForm({ subject }: { subject?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/kontakt.php", { method: "POST", body: new FormData(e.currentTarget) });
      const data = await res.json();
      setStatus(res.ok && data.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center">
        <p className="font-display text-2xl font-semibold">Danke für Ihre Anfrage!</p>
        <p className="mt-2 text-stone-300">Ich melde mich schnellstmöglich bei Ihnen.</p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-stone-500 outline-none transition focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="betreff" value={subject ?? "Allgemeine Anfrage"} />
      {/* Honeypot gegen Spam-Bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <label className="grid gap-1.5 text-sm">
        Name*
        <input name="name" required className={field} autoComplete="name" />
      </label>
      <label className="grid gap-1.5 text-sm">
        E-Mail*
        <input name="email" type="email" required className={field} autoComplete="email" />
      </label>
      <label className="grid gap-1.5 text-sm">
        Wunschdatum
        <input name="datum" type="date" className={`${field} [color-scheme:dark]`} />
      </label>
      <label className="grid gap-1.5 text-sm">
        Wie haben Sie mich gefunden?
        <select name="quelle" defaultValue="" className={`${field} [color-scheme:dark]`}>
          <option value="">Bitte wählen</option>
          {sources.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm sm:col-span-2">
        Nachricht*
        <textarea name="nachricht" required rows={5} className={field} />
      </label>
      <label className="flex items-start gap-3 text-sm text-stone-300 sm:col-span-2">
        <input type="checkbox" name="datenschutz" required className="mt-1 accent-[var(--accent)]" />
        <span>
          Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden. Mehr in der{" "}
          <Link href="/datenschutz/" className="underline hover:text-white">Datenschutzerklärung</Link>.*
        </span>
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-accent px-8 py-3 font-medium text-white transition hover:brightness-110 disabled:opacity-60"
        >
          {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
        </button>
        <span className="text-xs text-stone-400">*notwendig</span>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400 sm:col-span-2">
          Das hat leider nicht geklappt. Bitte versuchen Sie es später erneut.
        </p>
      )}
    </form>
  );
}
