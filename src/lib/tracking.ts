import { tracking, trackingEnabled } from "@/content/tracking";

// Einwilligung wird lokal gespeichert (technisch notwendig, um die Entscheidung zu merken).
const STORAGE_KEY = "mpb-consent";
export type Consent = "granted" | "denied";

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function saveConsent(value: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Ohne Speicher wird beim nächsten Besuch erneut gefragt.
  }
}

// Lädt Google Ads erst nach Einwilligung (Consent Mode v2, Basis-Implementierung).
export function loadGoogleAds() {
  if (!trackingEnabled || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag erwartet das arguments-Objekt
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  window.gtag("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", tracking.tagId);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${tracking.tagId}`;
  document.head.appendChild(script);
}

export function trackConversion(action: keyof typeof tracking.conversions) {
  const label = tracking.conversions[action];
  if (!window.gtag || !label || !tracking.googleAdsId) return;
  window.gtag("event", "conversion", { send_to: `${tracking.googleAdsId}/${label}` });
}

// Kampagnen-Herkunft aus der URL (ohne Cookies), wird mit dem Formular verschickt.
export function campaignFromUrl(): string {
  const p = new URLSearchParams(window.location.search);
  const parts = [
    p.get("gclid") || p.get("gbraid") || p.get("wbraid") ? "Google Ads" : p.get("utm_source"),
    p.get("utm_medium"),
    p.get("utm_campaign") && `Kampagne: ${p.get("utm_campaign")}`,
    p.get("utm_term") && `Keyword: ${p.get("utm_term")}`,
  ].filter(Boolean);
  return parts.length ? `${parts.join(" / ")} (Seite: ${window.location.pathname})` : "";
}
