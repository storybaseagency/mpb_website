// Google Ads Conversion-Tracking. Leer = kein Tracking, kein Cookie-Banner.
export const tracking = {
  googleAdsId: "AW-18306146694",
  conversions: {
    form: "", // Label der Conversion-Aktion „Kontaktformular“
    whatsapp: "", // Label „WhatsApp-Klick“
    phone: "", // Label „Telefon-Klick“
  },
};

export const trackingEnabled = tracking.googleAdsId !== "";
