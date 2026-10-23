"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { trackingEnabled } from "@/content/tracking";
import { loadGoogleAds, readConsent, saveConsent, trackConversion, type Consent } from "@/lib/tracking";

export const OPEN_CONSENT_EVENT = "mpb-open-consent";

// Cookie-Banner für Google Ads. Erscheint nur, wenn Tracking konfiguriert ist.
export default function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!trackingEnabled) return;
    const consent = readConsent();
    if (consent === "granted") loadGoogleAds();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Entscheidung liegt erst im Browser vor
    else if (consent === null) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);

    // Klicks auf Telefon- und WhatsApp-Links als Conversion zählen
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      if (link.href.startsWith("tel:")) trackConversion("phone");
      else if (link.href.includes("wa.me/")) trackConversion("whatsapp");
    };
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
      document.removeEventListener("click", onClick);
    };
  }, []);

  function decide(value: Consent) {
    const previous = readConsent();
    saveConsent(value);
    setOpen(false);
    if (value === "granted") loadGoogleAds();
    // Widerruf: Seite neu laden, damit Google Ads nicht mehr aktiv ist
    else if (previous === "granted") window.location.reload();
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-border bg-surface p-6 text-foreground shadow-2xl"
    >
      <p className="font-display text-lg font-semibold">Darf ich messen, ob meine Anzeigen wirken?</p>
      <p className="mt-2 text-sm text-muted">
        Mit Ihrer Einwilligung setze ich Google Ads Conversion-Tracking ein. Dabei werden Cookies gesetzt und Daten
        an Google übertragen, auch in die USA. Sie können Ihre Entscheidung jederzeit über „Cookie-Einstellungen“ im
        Seitenfuß ändern. Details in der{" "}
        <Link href="/datenschutz/" className="underline">Datenschutzerklärung</Link>.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => decide("granted")}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
        >
          Akzeptieren
        </button>
        <button
          type="button"
          onClick={() => decide("denied")}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
}
