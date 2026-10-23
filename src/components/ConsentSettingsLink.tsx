"use client";

import { trackingEnabled } from "@/content/tracking";
import { OPEN_CONSENT_EVENT } from "@/components/ConsentBanner";

export default function ConsentSettingsLink() {
  if (!trackingEnabled) return null;
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))} className="hover:text-white">
      Cookie-Einstellungen
    </button>
  );
}
