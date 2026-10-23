// Google Ads Conversion-Tracking. Leer = kein Tracking, kein Cookie-Banner.
export const tracking = {
  googleAdsId: "AW-18306146694",
  conversions: {
    form: "wI3UCN7xjKcdEIbDhplE", // Kontaktformular
    whatsapp: "", // Label „WhatsApp-Klick“
    phone: "Agu4CPvhgacdEIbDhplE", // Kontakt-Telefon
  },
};

export const trackingEnabled = tracking.googleAdsId !== "";
