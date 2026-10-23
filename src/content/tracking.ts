// Google Ads Conversion-Tracking. Leer = kein Tracking, kein Cookie-Banner.
export const tracking = {
  googleAdsId: "AW-18089263240",
  conversions: {
    form: "", // Kontaktformular
    whatsapp: "", // Kontakt-Whatsapp
    phone: "", // Kontakt-Telefon
  },
};

export const trackingEnabled = tracking.googleAdsId !== "";
