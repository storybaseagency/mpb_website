// Google Ads Conversion-Tracking. Leer = kein Tracking, kein Cookie-Banner.
export const tracking = {
  googleAdsId: "", // z. B. "AW-123456789"
  conversions: {
    form: "", // Label der Conversion-Aktion „Kontaktformular“
    whatsapp: "", // Label „WhatsApp-Klick“
    phone: "", // Label „Telefon-Klick“
  },
};

export const trackingEnabled = tracking.googleAdsId !== "";
