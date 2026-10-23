// Google Ads Conversion-Tracking. Leer = kein Tracking, kein Cookie-Banner.
export const tracking = {
  // Google-Tag, der geladen wird (leitet an das Werbekonto MPB_Berlin weiter)
  tagId: "", // "GT-MK5BBF5V" – wird aktiviert, sobald die Ziele des Tags geprüft sind
  // Conversion-ID des Werbekontos MPB_Berlin, Labels aus den Ereignis-Snippets
  googleAdsId: "", // "AW-18533068206" (MPB_Berlin) – wird mit den Labels bestätigt
  conversions: {
    form: "", // Kontaktformular
    whatsapp: "", // Kontakt-Whatsapp
    phone: "", // Kontakt-Telefon
  },
};

export const trackingEnabled = tracking.tagId !== "";
