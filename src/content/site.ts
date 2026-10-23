// Zentrale Inhalte der Website. Texte übernommen von der bisherigen WordPress-Seite.

export const site = {
  name: "Medienproduktion Bruchwalski",
  shortName: "Bruchwalski",
  url: "https://www.medienproduktionbruchwalski.de",
  headline: "Kameramann und Bildmischer für professionelle Produktionen",
  subline: "Kamera, Bildregie und Liveproduktion in Berlin und deutschlandweit.",
  description:
    "Jan Bruchwalski – Kameramann und Bildmischer für Videoproduktion, Bildregie, Livestreaming und Aufzeichnung in Berlin und deutschlandweit.",
  linkedin: "https://www.linkedin.com/in/jan-b-a4a45a350/",
  contact: {
    person: "Jan Bruchwalski",
    street: "Pichelsdorfer Straße 59",
    city: "13595 Berlin",
    email: "bruchwalski@medienproduktionbruchwalski.de",
    phone: "0160 7534434",
    phoneHref: "tel:+491607534434",
    whatsapp: "https://wa.me/491607534434?text=" + encodeURIComponent("Hallo Jan, ich habe eine Anfrage zu einer Produktion:"),
  },
};

export const about = {
  title: "Über mich",
  intro:
    "Hey, ich bin Jan. Mediengestalter mit 20 Jahren Erfahrung in unterschiedlichen Bereichen der Bewegtbildproduktion.",
  paragraphs: [
    "Ob hinter der Kamera, in der Bildregie oder bei der technischen Umsetzung: Ich unterstütze Produktionen dort, wo Erfahrung, ein gutes Auge und technisches Verständnis gefragt sind.",
    "Von Videoproduktionen und Aufzeichnungen bis hin zu Live-Events und Livestreams: Mir ist wichtig, dass Technik und Gestaltung zusammenspielen und am Ende eine Produktion entsteht, die professionell aussieht und zuverlässig funktioniert.",
  ],
  motivation:
    "Mich begeistert, wenn aus Technik, Timing und einem guten Gespür für Bilder eine Produktion entsteht, die einfach funktioniert. Ob hinter der Kamera oder in der Bildregie – ich arbeite konzentriert und lösungsorientiert.",
  image: "/images/jan-bruchwalski.webp",
};

export type Testimonial = { topic: string; quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  {
    topic: "Technik & Bildregie",
    quote:
      "Ich kenne Jan Bruchwalski schon länger und habe ihn öfters für verschiedene Livestreams gebucht. Häufig in den Ministergärten in Berlin, wo es neben der guten Arbeit auch auf professionelles Auftreten ankommt. Ich danke Jan für die tolle Zusammenarbeit.",
    name: "Martin Kautzsch",
    role: "Geschäftsführer",
  },
  {
    topic: "Kamera & Schnitt",
    quote:
      "Wir hatten Jan Bruchwalski für unsere Agentur öfters beauftragt, für Kamera- und Schnittarbeiten. Wir waren allzeit zufrieden, sowohl mit der Zusammenarbeit, als auch mit den Endprodukten.",
    name: "Lea Schermer",
    role: "Geschäftsführerin",
  },
  {
    topic: "Bildmischer & Regie",
    quote:
      "Ich habe mit Jan Bruchwalski verschiedene Live-Produktionen erlebt und finde die Kommunikation klar und die Ergebnisse sind klasse.",
    name: "Christian Grodau",
    role: "Kameramann",
  },
];

export const gear = [
  { title: "Bildregie", text: "vMix, mimoLive, OBS, ATEM" },
  { title: "Kamera", text: "Blackmagic, Sony, RED" },
];

export type Service = {
  slug: string;
  title: string;
  teaser: string;
  image: string;
  landing: {
    headline: string;
    subline: string;
    // YouTube-/Vimeo-Embed-URL oder Pfad zu einer MP4 in /public. Leer = Platzhalter.
    video: string;
    videoPoster?: string;
    intro: string;
    benefits: { title: string; text: string }[];
    steps: { title: string; text: string }[];
    gallery: { src: string; alt: string }[];
    showGear: boolean;
    testimonials: string[]; // Namen aus `testimonials`
    faq: { q: string; a: string }[];
    cta: string;
  };
};

export const services: Service[] = [
  {
    slug: "videoproduktion",
    title: "Videoproduktion",
    teaser:
      "Von der Idee bis zum fertigen Film. Professionelle Videoproduktion für Unternehmen, Events und digitale Formate.",
    image: "/images/dreharbeiten-hafen.webp",
    landing: {
      headline: "Videoproduktion – von der Idee bis zum fertigen Film",
      subline: "Professionelle Videoproduktion für Unternehmen, Events und digitale Formate.",
      video: "",
      intro:
        "Kamera und Schnitt aus einer Hand: Ich setze Ihr Video mit 20 Jahren Erfahrung in der Bewegtbildproduktion um – mit gutem Auge für Bilder und dem technischen Verständnis, damit am Ende alles passt.",
      benefits: [
        { title: "Kamera & Schnitt", text: "Dreh und Postproduktion aus einer Hand – ein Ansprechpartner für das ganze Projekt." },
        { title: "Für jedes Format", text: "Unternehmensvideos, Eventfilme und Clips für digitale Kanäle." },
        { title: "Berlin & deutschlandweit", text: "Flexibel vor Ort – im Studio, auf der Veranstaltung oder unterwegs." },
      ],
      steps: [
        { title: "Anfrage & Abstimmung", text: "Wir klären Ziel, Umfang, Termin und Drehort." },
        { title: "Dreh", text: "Professionelle Kameraarbeit vor Ort mit passendem Equipment." },
        { title: "Schnitt & Übergabe", text: "Schnitt, Feedbackrunde und Auslieferung im gewünschten Format." },
      ],
      gallery: [
        { src: "/images/kameraarbeit-see.webp", alt: "Kameraarbeit auf See bei Sonnenuntergang" },
        { src: "/images/kameraarbeit-unterwegs.webp", alt: "Dreh unterwegs zwischen Palmen" },
        { src: "/images/kamera-talk.webp", alt: "Kamera bei einer Talk-Aufzeichnung" },
      ],
      showGear: true,
      testimonials: ["Lea Schermer"],
      faq: [
        { q: "Was kostet eine Videoproduktion?", a: "Das hängt von Umfang, Drehtagen und Schnittaufwand ab. Nach einem kurzen Gespräch erhalten Sie ein transparentes Angebot." },
        { q: "Sind Sie auch außerhalb von Berlin buchbar?", a: "Ja, ich arbeite in Berlin und deutschlandweit." },
      ],
      cta: "Verfügbarkeit anfragen",
    },
  },
  {
    slug: "live-recording",
    title: "Live & Recording",
    teaser:
      "Professionelle Bildregie, Livestreaming und Aufzeichnung für Events, Konferenzen und hybride Produktionen.",
    image: "/images/liveregie-ministergaerten.webp",
    landing: {
      headline: "Bildregie, Livestream & Aufzeichnung",
      subline: "Für Events, Konferenzen und hybride Produktionen – zuverlässig und professionell.",
      video: "",
      intro:
        "Bei Live-Produktionen zählt jede Sekunde. Als Bildmischer sorge ich dafür, dass Ihr Event souverän übertragen und sauber aufgezeichnet wird – mit klarer Kommunikation im Team und professionellem Auftreten vor Ort.",
      benefits: [
        { title: "Bildregie", text: "Mehrkamera-Regie für Konferenzen, Podien und Bühnenprogramme." },
        { title: "Livestreaming", text: "Übertragung auf die Plattform Ihrer Wahl – auch für hybride Formate." },
        { title: "Aufzeichnung", text: "Saubere Mitschnitte, die Sie im Anschluss weiterverwenden können." },
      ],
      steps: [
        { title: "Briefing", text: "Ablauf, Location, Plattform und Technikbedarf abstimmen." },
        { title: "Aufbau & Test", text: "Setup vor Ort, Signalwege prüfen, Probedurchlauf." },
        { title: "Live & Übergabe", text: "Regie während des Events und Übergabe der Aufzeichnung." },
      ],
      gallery: [
        { src: "/images/setup-ministergaerten.webp", alt: "Kamera- und Regie-Setup in einem Konferenzsaal" },
        { src: "/images/regie.webp", alt: "Arbeit in der Regie während einer Live-Produktion" },
      ],
      showGear: true,
      testimonials: ["Martin Kautzsch", "Christian Grodau"],
      faq: [
        { q: "Welche Streaming-Plattformen sind möglich?", a: "Gängige Plattformen wie YouTube, Vimeo oder LinkedIn sowie eigene Streaming-Ziele – sprechen Sie mich gern an." },
        { q: "Bringen Sie die Technik mit?", a: "Je nach Produktion arbeite ich mit eigenem Equipment oder integriere mich in Ihre bestehende Technik." },
      ],
      cta: "Verfügbarkeit anfragen",
    },
  },
  {
    slug: "technischer-support",
    title: "Technischer Support",
    teaser:
      "Technische Unterstützung für Video- und Liveproduktionen. Zuverlässig, flexibel und passend zu bestehenden Workflows.",
    image: "/images/bildregie.webp",
    landing: {
      headline: "Technischer Support für Video- und Liveproduktionen",
      subline: "Zuverlässig, flexibel und passend zu Ihren bestehenden Workflows.",
      video: "",
      intro:
        "Sie haben ein Team, aber brauchen erfahrene Unterstützung? Ich steige in bestehende Produktionen ein – an der Kamera, in der Bildregie oder bei der technischen Umsetzung – und arbeite mit Ihrem Setup.",
      benefits: [
        { title: "Flexibel einsetzbar", text: "Kamera, Bildmischer oder Technik – dort, wo Sie Verstärkung brauchen." },
        { title: "Passt in Ihren Workflow", text: "Ich arbeite mit Ihrer bestehenden Technik und Ihren Abläufen." },
        { title: "Zuverlässig", text: "20 Jahre Erfahrung, klare Kommunikation und professionelles Auftreten." },
      ],
      steps: [
        { title: "Anfrage", text: "Datum, Einsatzbereich und vorhandene Technik kurz schildern." },
        { title: "Abstimmung", text: "Rolle, Ablauf und Schnittstellen im Team klären." },
        { title: "Einsatz", text: "Konzentrierte, lösungsorientierte Unterstützung vor Ort." },
      ],
      gallery: [
        { src: "/images/setup-ministergaerten.webp", alt: "Technisches Setup für eine Konferenz" },
        { src: "/images/regie.webp", alt: "Bildregie während einer Produktion" },
      ],
      showGear: true,
      testimonials: ["Christian Grodau", "Martin Kautzsch"],
      faq: [
        { q: "Kann ich Sie kurzfristig buchen?", a: "Fragen Sie gern Ihr Wunschdatum über das Formular an – ich melde mich schnellstmöglich zur Verfügbarkeit." },
        { q: "Mit welcher Technik arbeiten Sie?", a: "Unter anderem mit vMix, mimoLive, OBS und ATEM sowie Kameras von Blackmagic, Sony und RED." },
      ],
      cta: "Verfügbarkeit anfragen",
    },
  },
];

export const nav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#stimmen", label: "Stimmen" },
  { href: "/#kontakt", label: "Kontakt" },
];
