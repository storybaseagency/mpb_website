// Google Ads Conversion-Tracking. Leer = kein Tracking, kein Cookie-Banner.
// Conversion-Aktionen liegen im Verwaltungskonto (kontoübergreifendes Conversion-Tracking).
export const tracking = {
  googleAdsId: "AW-18306146694",
  conversions: {
    form: "wI3UCN7xjKcdEIbDhplE", // Kontaktformular
    whatsapp: "0IvuCM20iacdEIbDhplE", // Kontakt-Whatsapp
    phone: "Agu4CPvhgacdEIbDhplE", // Kontakt-Telefon
  },
};

export const trackingEnabled = tracking.googleAdsId !== "";
