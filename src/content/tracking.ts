// Google Ads Conversion-Tracking. Leer = kein Tracking, kein Cookie-Banner.
export const tracking = {
  // Google-Tag, der geladen wird (Ziel: Werbekonto MPB_Berlin)
  tagId: "GT-MK5BBF5V",
  // Conversion-ID des Werbekontos MPB_Berlin, Labels aus den Ereignis-Snippets
  googleAdsId: "AW-18533068206",
  conversions: {
    form: "LjUYCNGIk6cdEK7boIVF", // Kontaktformular
    whatsapp: "HaorCJD9h6cdEK7boIVF", // Kontakt-Whatsapp
    phone: "FeipCPOPk6cdEK7boIVF", // Kontakt-Telefon
  },
};

export const trackingEnabled = tracking.tagId !== "";
