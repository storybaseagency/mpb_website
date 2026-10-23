// Google Ads Conversion-Tracking. Leer = kein Tracking, kein Cookie-Banner.
export const tracking = {
  googleAdsId: "", // z. B. "AW-123456789"
  conversions: {
    form: "", // Kontaktformular
    whatsapp: "", // Kontakt-Whatsapp
    phone: "", // Kontakt-Telefon
  },
};

export const trackingEnabled = tracking.googleAdsId !== "";
