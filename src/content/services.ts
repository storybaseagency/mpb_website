// Inhalte der Leistungsseiten. Jede Seite beantwortet eine Suchintention
// (z. B. „Bildmischer Berlin“) und beginnt mit einer kurzen Direktantwort.

export type Service = {
  slug: string;
  title: string; // kurzer Name für Karten, Navigation und interne Links
  metaTitle: string;
  metaDescription: string;
  h1: string;
  teaser: string;
  image: string;
  imageAlt: string;
  answer: string; // Kurzantwort im ersten Absatz
  // YouTube-/Vimeo-Embed-URL oder Pfad zu einer MP4 in /public. Leer = kein Video.
  video: string;
  videoPoster?: string;
  highlights: { title: string; text: string }[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  table?: { caption: string; head: string[]; rows: string[][] };
  steps: { title: string; text: string }[];
  gallery: { src: string; alt: string }[];
  testimonials: string[]; // Namen aus `testimonials`
  faq: { q: string; a: string }[];
  related: string[]; // Slugs verwandter Leistungen
  cta: string;
};

const costAnswer =
  "Der Preis richtet sich nach Einsatzdauer, Anzahl der Kameras und Quellen, benötigter Technik sowie Auf- und Abbauzeit. Nach einem kurzen Briefing erhalten Sie ein transparentes, verbindliches Angebot.";

export const services: Service[] = [
  {
    slug: "bildregie-bildmischer-berlin",
    title: "Bildregie & Bildmischer",
    metaTitle: "Bildmischer & Bildregie Berlin buchen",
    metaDescription:
      "Erfahrener Bildmischer in Berlin: Live-Bildregie für Konferenzen, Events und Livestreams mit vMix, ATEM, mimoLive oder OBS. Jetzt Verfügbarkeit anfragen.",
    h1: "Bildmischer und Bildregie in Berlin",
    teaser:
      "Live-Bildregie für Konferenzen, Events und Livestreams – mit ruhiger Hand am Mischer und klarer Kommunikation im Team.",
    image: "/images/bildregie.webp",
    imageAlt: "Jan Bruchwalski am Bildmischer in der Regie",
    answer:
      "Als Bildmischer übernehme ich in Berlin und deutschlandweit die Live-Bildregie für Konferenzen, Podiumsdiskussionen, Bühnenprogramme und Livestreams. Ich schneide mehrere Kameras und Zuspieler live, setze Bauchbinden und Grafiken und sorge dafür, dass Saalprojektion, Stream und Aufzeichnung sauber laufen – mit vMix, ATEM, mimoLive oder OBS, eigenem Setup oder Ihrer vorhandenen Technik.",
    video: "",
    highlights: [
      { title: "20 Jahre Erfahrung", text: "Bewegtbild, Kamera und Live-Regie – ich weiß, worauf es in hektischen Momenten ankommt." },
      { title: "Systemunabhängig", text: "vMix, Blackmagic ATEM, mimoLive oder OBS – ich arbeite mit dem Setup, das zur Produktion passt." },
      { title: "Professionelles Auftreten", text: "Ruhig, diskret und lösungsorientiert – auch bei Veranstaltungen mit hochrangigen Gästen." },
    ],
    sections: [
      {
        heading: "Was ein Bildmischer bei Ihrer Veranstaltung leistet",
        paragraphs: [
          "Der Bildmischer – oft auch Bildregie oder Technical Director genannt – entscheidet in Echtzeit, welches Bild das Publikum sieht. Bei einer Konferenz heißt das: Totale beim Einlauf, Nahaufnahme der Rednerin, Schnitt auf die Präsentation, Publikumsreaktion bei der Fragerunde. Gute Bildregie fällt nicht auf, sie lässt eine Veranstaltung einfach professionell wirken.",
          "Ich koordiniere mich dafür mit Kameraleuten, Ton, Licht und Moderation, behalte den Ablaufplan im Blick und reagiere auf Änderungen, ohne dass Zuschauer im Saal oder im Stream etwas davon merken.",
        ],
        bullets: [
          "Live-Schnitt mehrerer Kameras und Zuspieler (Präsentationen, Einspieler, Remote-Gäste)",
          "Bauchbinden, Logos, Countdown und Grafiken",
          "Signalverteilung auf LED-Wand, Beamer, Livestream und Aufzeichnung",
          "Kommunikation mit Kamerateam über Intercom",
          "Isolierte Aufzeichnungen (ISO-Recordings) für den späteren Schnitt",
        ],
      },
      {
        heading: "Typische Einsätze",
        paragraphs: [
          "Ich werde von Agenturen, Eventtechnik-Firmen und Veranstaltern gebucht – entweder als Bildmischer mit eigenem, kompakten Regie-Setup oder als erfahrene Verstärkung für ein bestehendes Team. Zu meinen Einsätzen gehören unter anderem regelmäßige Livestreams aus den Ministergärten in Berlin.",
        ],
        bullets: [
          "Fachkonferenzen, Kongresse und Hauptversammlungen",
          "Podiumsdiskussionen und politische Veranstaltungen",
          "Hybride Events mit Remote-Speakern",
          "Bühnenprogramme, Preisverleihungen und Galas",
          "Studio-Talks, Webinare und Podcast-Videoproduktionen",
        ],
      },
      {
        heading: "Mit welcher Technik ich arbeite",
        paragraphs: [
          "Welcher Bildmischer der richtige ist, hängt von Anzahl der Quellen, Grafikbedarf und Streaming-Zielen ab. Ich arbeite routiniert mit Hardware-Mischern und Software-Lösungen und berate Sie vorab, welche Variante für Ihre Produktion sinnvoll ist.",
        ],
      },
    ],
    table: {
      caption: "Bildregie-Systeme im Überblick",
      head: ["System", "Stärke", "Typischer Einsatz"],
      rows: [
        ["Blackmagic ATEM", "Robuster Hardware-Mischer, sehr geringe Latenz", "Konferenzen und Bühnen mit mehreren Kameras"],
        ["vMix", "Flexible Software mit Grafik, Remote-Gästen und Multistreaming", "Livestreams und hybride Events"],
        ["mimoLive", "Starke Grafik- und Layout-Möglichkeiten auf dem Mac", "Talks, Studio-Formate, Webinare"],
        ["OBS", "Schlanke, frei verfügbare Lösung", "Kleinere Streams und Ergänzung bestehender Setups"],
      ],
    },
    steps: [
      { title: "Briefing", text: "Ablauf, Anzahl der Kameras und Quellen, Ausspielwege und vorhandene Technik klären." },
      { title: "Vorbereitung", text: "Grafiken, Szenen und Signalwege vorbereiten, Ablaufplan durchgehen." },
      { title: "Aufbau & Probe", text: "Regieplatz einrichten, Signale prüfen und mit dem Team proben." },
      { title: "Live-Einsatz", text: "Bildregie während der Veranstaltung und Übergabe der Aufzeichnungen." },
    ],
    gallery: [
      { src: "/images/regie.webp", alt: "Bildregie während einer Live-Produktion" },
      { src: "/images/liveregie-ministergaerten.webp", alt: "Live-Regieplatz bei einer Konferenz in den Ministergärten Berlin" },
    ],
    testimonials: ["Christian Grodau", "Martin Kautzsch"],
    faq: [
      { q: "Was ist der Unterschied zwischen Bildmischer und Regie?", a: "Die Regie gibt bei großen Produktionen die inhaltliche Richtung vor, der Bildmischer setzt die Bildwechsel technisch um. Bei Konferenzen und Livestreams übernehme ich häufig beides in einer Person: Ich entscheide, welches Bild zu sehen ist, und mische es selbst." },
      { q: "Was kostet ein Bildmischer für eine Veranstaltung?", a: costAnswer },
      { q: "Bringen Sie einen eigenen Bildmischer mit?", a: "Für kleinere Produktionen bringe ich ein eigenes, kompaktes Regie-Setup mit. Für größere Produktionen ergänze ich es auf Wunsch um Mietequipment – oder arbeite mit der Technik Ihres Dienstleisters bzw. der Location. Das klären wir im Briefing." },
      { q: "Wie früh sollte ich buchen?", a: "Je früher, desto besser – besonders in der Konferenzsaison im Frühjahr und Herbst. Kurzfristige Anfragen sind trotzdem möglich: Fragen Sie Ihr Wunschdatum einfach an." },
      { q: "Arbeiten Sie auch außerhalb von Berlin?", a: "Ja. Mein Standort ist Berlin-Spandau, ich bin in ganz Berlin, in Brandenburg und deutschlandweit im Einsatz." },
    ],
    related: ["livestream-produktion-berlin", "technischer-livestream-support-berlin", "kameramann-berlin"],
    cta: "Bildmischer anfragen",
  },
  {
    slug: "livestream-produktion-berlin",
    title: "Livestream & Aufzeichnung",
    metaTitle: "Livestream-Produktion Berlin – Konferenz, Hybrid & Multicam",
    metaDescription:
      "Livestream-Produktion in Berlin: Multicam-Livestreams, hybride Events und Konferenzaufzeichnung mit professioneller Bildregie. Zuverlässig und persönlich betreut.",
    h1: "Livestream-Produktion und Aufzeichnung in Berlin",
    teaser:
      "Professionelle Bildregie, Livestreaming und Aufzeichnung für Events, Konferenzen und hybride Produktionen.",
    image: "/images/liveregie-ministergaerten.webp",
    imageAlt: "Livestream-Regieplatz bei einer Konferenz in Berlin",
    answer:
      "Ich produziere Livestreams und Aufzeichnungen für Konferenzen, Podiumsdiskussionen, hybride Events und Studio-Formate in Berlin und deutschlandweit. Von der Kamera über die Bildregie bis zur Ausspielung auf YouTube, Vimeo, LinkedIn oder Ihre eigene Plattform betreue ich die Produktion persönlich – und liefere im Anschluss eine saubere Aufzeichnung zur weiteren Nutzung.",
    video: "",
    highlights: [
      { title: "Multicam-Livestream", text: "Mehrere Kameras, Präsentationen und Remote-Gäste in einem professionellen Bild." },
      { title: "Hybride Events", text: "Saalpublikum und Online-Zuschauer gleichzeitig gut versorgt." },
      { title: "Aufzeichnung inklusive", text: "Mitschnitt für Mediathek, Social Media oder Dokumentation." },
    ],
    sections: [
      {
        heading: "Livestream für Konferenzen, Podien und hybride Events",
        paragraphs: [
          "Ein Livestream erweitert Ihre Veranstaltung um ein Publikum, das nicht vor Ort sein kann – und macht Inhalte später als Aufzeichnung nutzbar. Damit das professionell wirkt, braucht es mehr als eine Kamera und eine Internetleitung: gute Bilder, verständlichen Ton, saubere Bildregie und eine stabile Übertragung.",
          "Ich betreue Livestreams von der Planung bis zur Übergabe der Aufzeichnung. Bei größeren Produktionen arbeite ich mit Partnern für zusätzliche Kameras, Ton oder Licht zusammen – Sie haben trotzdem einen festen Ansprechpartner.",
        ],
        bullets: [
          "Konferenzen, Kongresse und Fachtagungen",
          "Podiumsdiskussionen und politische Veranstaltungen",
          "Hybride Events mit Remote-Speakern per Video-Call",
          "Produktpräsentationen und interne Firmen-Events",
          "Studio-Talks, Webinare und Video-Podcasts",
        ],
      },
      {
        heading: "Aufzeichnung von Konferenzen und Vorträgen",
        paragraphs: [
          "Nicht jede Veranstaltung braucht einen Livestream – oft reicht eine hochwertige Aufzeichnung. Ich zeichne Vorträge, Panels und ganze Konferenztage mit mehreren Kameras auf, auf Wunsch bereits live geschnitten. So steht das Material direkt nach der Veranstaltung zur Verfügung und muss nicht aufwendig nachbearbeitet werden.",
        ],
      },
      {
        heading: "Worauf es bei einem stabilen Livestream ankommt",
        paragraphs: [
          "Die meisten Probleme bei Livestreams entstehen nicht während der Sendung, sondern durch fehlende Vorbereitung. Deshalb kläre ich vorab mit Ihnen und der Location die entscheidenden Punkte:",
        ],
        bullets: [
          "Internet: kabelgebundene Leitung mit ausreichend Upload, bei Bedarf eine Backup-Verbindung",
          "Ton: saubere Übergabe vom Saalton oder eigene Mikrofonierung",
          "Plattform: Stream-Schlüssel, Privatsphäre-Einstellungen und Testlauf vorab",
          "Ablauf: Zeitplan, Einspieler, Grafiken und Ansprechpartner vor Ort",
          "Aufzeichnung: lokale Sicherung parallel zum Stream",
        ],
      },
    ],
    table: {
      caption: "Typische Livestream-Setups",
      head: ["Setup", "Geeignet für", "Umfang"],
      rows: [
        ["1–2 Kameras", "Vorträge, Webinare, kleine Panels", "Kompakter Regieplatz, Stream und Aufzeichnung"],
        ["3–4 Kameras", "Konferenzen, Podiumsdiskussionen", "Bildregie, Grafiken, Präsentationszuspielung"],
        ["Hybrid", "Events mit Remote-Speakern und Saalpublikum", "Zusätzlich Video-Call-Integration und Saalprojektion"],
      ],
    },
    steps: [
      { title: "Briefing", text: "Ablauf, Location, Plattform und Technikbedarf abstimmen." },
      { title: "Technik-Check", text: "Internet, Ton und Signalwege mit der Location klären, Teststream einrichten." },
      { title: "Aufbau & Probe", text: "Setup vor Ort, Signale prüfen, Probedurchlauf." },
      { title: "Live & Übergabe", text: "Livestream während der Veranstaltung, anschließend Übergabe der Aufzeichnung." },
    ],
    gallery: [
      { src: "/images/setup-ministergaerten.webp", alt: "Kamera- und Livestream-Setup in einem Konferenzsaal in Berlin" },
      { src: "/images/regie.webp", alt: "Arbeit in der Regie während einer Live-Produktion" },
    ],
    testimonials: ["Martin Kautzsch", "Christian Grodau"],
    faq: [
      { q: "Was kostet ein Livestream in Berlin?", a: costAnswer },
      { q: "Auf welche Plattformen kann gestreamt werden?", a: "Auf alle gängigen Plattformen wie YouTube, Vimeo, LinkedIn oder Facebook sowie auf eigene Streaming-Server und Event-Plattformen – auf Wunsch auch auf mehrere Ziele gleichzeitig." },
      { q: "Bringen Sie die Technik mit?", a: "Ein kompaktes Livestream-Setup mit Bildmischer und Streaming-Rechner bringe ich selbst mit. Für größere Produktionen ergänze ich es auf Wunsch um Mietequipment oder arbeite mit der vorhandenen Technik der Location." },
      { q: "Welche Internetverbindung wird benötigt?", a: "Ideal ist eine kabelgebundene Leitung mit stabilem Upload. Ich kläre die Anbindung vorab mit der Location und plane bei Bedarf eine Backup-Verbindung ein." },
      { q: "Erhalte ich eine Aufzeichnung des Livestreams?", a: "Ja. Der Stream wird parallel lokal aufgezeichnet und Ihnen im Anschluss übergeben – auf Wunsch auch die einzelnen Kamerasignale für einen späteren Schnitt." },
      { q: "Können Speaker per Video zugeschaltet werden?", a: "Ja. Remote-Gäste lassen sich per Video-Call in den Livestream und auf die Saalprojektion holen – inklusive Rückkanal, damit sie das Publikum hören." },
    ],
    related: ["bildregie-bildmischer-berlin", "technischer-livestream-support-berlin", "videoproduktion-berlin"],
    cta: "Livestream anfragen",
  },
  {
    slug: "technischer-livestream-support-berlin",
    title: "Technischer Livestream-Support",
    metaTitle: "Technischer Livestream-Support Berlin – Techniker buchen",
    metaDescription:
      "Technischer Support für Livestreams und Videoproduktionen in Berlin: Streaming-Techniker, Bildmischer oder Kamera als Verstärkung für Ihr Team. Flexibel buchbar.",
    h1: "Technischer Support für Livestreams und Videoproduktionen in Berlin",
    teaser:
      "Technische Unterstützung für Video- und Liveproduktionen. Zuverlässig, flexibel und passend zu bestehenden Workflows.",
    image: "/images/setup-ministergaerten.webp",
    imageAlt: "Technisches Setup mit Kameras und Regieplatz in einem Konferenzsaal",
    answer:
      "Technischer Livestream-Support bedeutet: Ich steige als erfahrene Verstärkung in Ihre Produktion ein – als Streaming-Techniker, Bildmischer oder Kameramann. Agenturen, Eventtechnik-Firmen und Veranstalter in Berlin buchen mich, wenn ein Projekt zusätzliche Hände braucht oder ein bestehendes Setup zuverlässig betreut werden soll. Ich arbeite mit Ihrer Technik und Ihren Abläufen.",
    video: "",
    highlights: [
      { title: "Flexibel einsetzbar", text: "Streaming, Bildmischer oder Kamera – dort, wo Sie Verstärkung brauchen." },
      { title: "Passt in Ihren Workflow", text: "Ich arbeite mit Ihrer bestehenden Technik und Ihren Abläufen." },
      { title: "Zuverlässig", text: "20 Jahre Erfahrung, klare Kommunikation und professionelles Auftreten." },
    ],
    sections: [
      {
        heading: "Für wen der technische Support gedacht ist",
        paragraphs: [
          "Viele Produktionen haben das Equipment, aber nicht immer das Personal. Ich unterstütze Teams, die für einzelne Tage oder ganze Veranstaltungsreihen einen erfahrenen Techniker brauchen, der sich schnell einarbeitet und eigenständig arbeitet.",
        ],
        bullets: [
          "Eventtechnik-Firmen und Verleiher, die Personal für ihr Equipment benötigen",
          "Agenturen, die Livestreams für ihre Kunden umsetzen",
          "Unternehmen und Institutionen mit eigenem Streaming-Setup",
          "Produktionsfirmen, die kurzfristig Verstärkung suchen",
        ],
      },
      {
        heading: "Aufgaben, die ich übernehme",
        paragraphs: [
          "Ob Sie jemanden für den Streaming-Rechner, den Bildmischer oder eine Kameraposition brauchen: Ich übernehme klar definierte Aufgaben im Team oder die komplette technische Betreuung eines Setups.",
        ],
        bullets: [
          "Betreuung von Streaming-Encodern und Software (vMix, OBS, mimoLive)",
          "Bildmischung an Hardware-Mischern wie Blackmagic ATEM",
          "Kameraarbeit mit Blackmagic-, Sony- und RED-Kameras",
          "Einrichtung und Test von Signalwegen und Streaming-Zielen",
          "Fehlersuche und schnelle Lösungen während der Veranstaltung",
          "Einweisung Ihres Teams in bestehende Setups",
        ],
      },
      {
        heading: "Schnell eingearbeitet, auch in fremde Setups",
        paragraphs: [
          "Durch 20 Jahre in unterschiedlichen Bereichen der Bewegtbildproduktion kenne ich die gängigen Systeme und Arbeitsweisen. Das heißt für Sie: kurze Einarbeitung, wenig Abstimmungsaufwand und ein Techniker, der mitdenkt, wenn etwas nicht nach Plan läuft.",
        ],
      },
    ],
    steps: [
      { title: "Anfrage", text: "Datum, Einsatzbereich und vorhandene Technik kurz schildern." },
      { title: "Abstimmung", text: "Rolle, Ablauf und Schnittstellen im Team klären." },
      { title: "Einsatz", text: "Konzentrierte, lösungsorientierte Unterstützung vor Ort." },
    ],
    gallery: [
      { src: "/images/bildregie.webp", alt: "Jan Bruchwalski am Regieplatz" },
      { src: "/images/regie.webp", alt: "Technische Betreuung in der Regie" },
    ],
    testimonials: ["Christian Grodau", "Martin Kautzsch"],
    faq: [
      { q: "Kann ich Sie kurzfristig buchen?", a: "Fragen Sie Ihr Wunschdatum gern über das Formular, per Telefon oder WhatsApp an – ich melde mich schnellstmöglich zur Verfügbarkeit." },
      { q: "Mit welcher Technik arbeiten Sie?", a: "Unter anderem mit vMix, mimoLive, OBS und Blackmagic ATEM sowie Kameras von Blackmagic, Sony und RED." },
      { q: "Was kostet technischer Livestream-Support?", a: costAnswer },
      { q: "Übernehmen Sie auch mehrtägige Veranstaltungen?", a: "Ja, ich unterstütze sowohl einzelne Einsatztage als auch mehrtägige Konferenzen und wiederkehrende Veranstaltungsreihen." },
    ],
    related: ["bildregie-bildmischer-berlin", "livestream-produktion-berlin", "kameramann-berlin"],
    cta: "Support anfragen",
  },
  {
    slug: "kameramann-berlin",
    title: "Kameramann",
    metaTitle: "Kameramann Berlin buchen – Event, Live & Dreh",
    metaDescription:
      "Kameramann in Berlin buchen: Kameraarbeit für Events, Livestreams, Interviews und Drehs mit Blackmagic, Sony und RED. 20 Jahre Erfahrung, deutschlandweit im Einsatz.",
    h1: "Kameramann in Berlin für Events, Live und Drehs",
    teaser:
      "Kameraarbeit für Events, Livestreams, Interviews und Drehs – mit gutem Auge und technischem Verständnis.",
    image: "/images/kameraarbeit-unterwegs.webp",
    imageAlt: "Kameramann Jan Bruchwalski beim Dreh",
    answer:
      "Als Kameramann in Berlin filme ich Events, Konferenzen, Livestreams, Interviews und Imagedrehs – mit Kameras von Blackmagic, Sony und RED. Sie können mich als einzelnen Kameramann für Ihr Team buchen oder für komplette Drehs inklusive Schnitt. Mein Schwerpunkt liegt auf Live- und Eventproduktionen, bei denen Erfahrung und Übersicht zählen.",
    video: "",
    highlights: [
      { title: "Live & Event", text: "Kameraarbeit bei Konferenzen, Bühnen und Livestreams – auch mit Intercom und Bildregie." },
      { title: "Interviews & Drehs", text: "Interviews, Imagefilme und Reportagen im Studio oder unterwegs." },
      { title: "Professionelle Technik", text: "Kameras von Blackmagic, Sony und RED – passend zur Produktion." },
    ],
    sections: [
      {
        heading: "Kameraarbeit für Live- und Eventproduktionen",
        paragraphs: [
          "Bei Live-Produktionen muss der Kameramann vorausdenken: Wer spricht als Nächstes? Wo kommt die Reaktion im Publikum? Ich arbeite eng mit der Bildregie zusammen, setze Anweisungen über Intercom zuverlässig um und liefere Bilder, die sich gut schneiden lassen – auch wenn der Ablauf sich spontan ändert.",
        ],
        bullets: [
          "Konferenzen, Podien und Bühnenprogramme",
          "Livestreams mit mehreren Kamerapositionen",
          "Eventdokumentation und Aftermovies",
          "Studio-Talks und Video-Podcasts",
        ],
      },
      {
        heading: "Interviews, Imagefilme und Drehs unterwegs",
        paragraphs: [
          "Neben Live-Einsätzen drehe ich Interviews, Unternehmensvideos und Reportagen – im Studio, beim Kunden vor Ort oder unterwegs, vom Hafen bis aufs Schiff. Auf Wunsch übernehme ich auch den Schnitt, sodass Sie das fertige Video aus einer Hand erhalten.",
        ],
      },
      {
        heading: "Kameramann buchen: einzeln oder mit Team",
        paragraphs: [
          "Viele Kunden buchen mich als zusätzlichen Kameramann für ein bestehendes Team. Für größere Produktionen stelle ich bei Bedarf weitere erfahrene Kameraleute und Technik aus meinem Netzwerk zusammen – Sie haben dabei einen festen Ansprechpartner.",
        ],
      },
    ],
    steps: [
      { title: "Anfrage", text: "Datum, Ort, Art des Drehs und gewünschte Technik schildern." },
      { title: "Abstimmung", text: "Ablauf, Kamerapositionen und Lieferformat festlegen." },
      { title: "Dreh", text: "Kameraarbeit vor Ort und Übergabe des Materials oder fertiger Schnitt." },
    ],
    gallery: [
      { src: "/images/kameraarbeit-see.webp", alt: "Kameraarbeit auf See bei Sonnenuntergang" },
      { src: "/images/dreharbeiten-hafen.webp", alt: "Dreharbeiten am Hafen" },
      { src: "/images/kamera-talk.webp", alt: "Kamera bei einer Talk-Aufzeichnung" },
    ],
    testimonials: ["Lea Schermer", "Christian Grodau"],
    faq: [
      { q: "Was kostet ein Kameramann in Berlin?", a: "Das hängt von Einsatzdauer, benötigter Kameratechnik und gegebenenfalls Schnitt ab. Nach einem kurzen Briefing erhalten Sie ein transparentes Angebot." },
      { q: "Bringen Sie eigene Kameras mit?", a: "Ja, ich arbeite mit eigener Kameratechnik. Ich kann mich aber auch in Ihr vorhandenes Setup integrieren, etwa bei Multicam-Produktionen mit einheitlichen Kameras." },
      { q: "In welchem Format erhalte ich das Material?", a: "In dem Format, das Ihr Schnitt oder Ihre Plattform benötigt. Das Lieferformat stimmen wir vor dem Dreh ab." },
      { q: "Sind Sie auch außerhalb von Berlin buchbar?", a: "Ja, ich bin von Berlin-Spandau aus in ganz Berlin, Brandenburg und deutschlandweit im Einsatz." },
    ],
    related: ["videoproduktion-berlin", "livestream-produktion-berlin", "bildregie-bildmischer-berlin"],
    cta: "Kameramann anfragen",
  },
  {
    slug: "videoproduktion-berlin",
    title: "Videoproduktion",
    metaTitle: "Videoproduktion Berlin – Dreh & Schnitt aus einer Hand",
    metaDescription:
      "Videoproduktion in Berlin von der Idee bis zum fertigen Film: Unternehmensvideos, Eventfilme und Interviews – Kamera und Schnitt aus einer Hand.",
    h1: "Videoproduktion in Berlin – von der Idee bis zum fertigen Film",
    teaser:
      "Von der Idee bis zum fertigen Film. Professionelle Videoproduktion für Unternehmen, Events und digitale Formate.",
    image: "/images/dreharbeiten-hafen.webp",
    imageAlt: "Dreharbeiten für eine Videoproduktion am Hafen",
    answer:
      "Ich produziere Videos für Unternehmen, Events und digitale Formate – von der Idee über den Dreh bis zum fertigen Schnitt. Kamera und Schnitt kommen aus einer Hand, sodass Sie einen Ansprechpartner für das ganze Projekt haben. Mein Standort ist Berlin, gedreht wird in Berlin, Brandenburg und deutschlandweit.",
    video: "",
    highlights: [
      { title: "Kamera & Schnitt", text: "Dreh und Postproduktion aus einer Hand – ein Ansprechpartner für das ganze Projekt." },
      { title: "Für jedes Format", text: "Unternehmensvideos, Eventfilme, Interviews und Clips für digitale Kanäle." },
      { title: "Berlin & deutschlandweit", text: "Flexibel vor Ort – im Studio, auf der Veranstaltung oder unterwegs." },
    ],
    sections: [
      {
        heading: "Welche Videos ich produziere",
        paragraphs: [
          "Ich konzentriere mich auf Formate, bei denen Erfahrung mit Kamera und Technik den Unterschied macht – ob ein Video für die Website, ein Eventfilm oder die Aufzeichnung einer Veranstaltung.",
        ],
        bullets: [
          "Unternehmens- und Imagevideos",
          "Eventfilme und Aftermovies",
          "Interviews und Statements",
          "Aufzeichnungen von Vorträgen und Konferenzen",
          "Clips für Social Media und digitale Kanäle",
        ],
      },
      {
        heading: "Von der Idee bis zum fertigen Film",
        paragraphs: [
          "Am Anfang steht ein Gespräch über Ziel, Zielgruppe und Einsatzort des Videos. Daraus entsteht ein Ablauf für den Dreh. Ich übernehme die Kameraarbeit und den Schnitt und stimme den Rohschnitt mit Ihnen ab, bevor das fertige Video in den gewünschten Formaten ausgeliefert wird.",
          "Weil Dreh und Schnitt in einer Hand liegen, gehen keine Informationen zwischen verschiedenen Dienstleistern verloren – und der Aufwand für Sie bleibt überschaubar.",
        ],
      },
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
    testimonials: ["Lea Schermer"],
    faq: [
      { q: "Was kostet eine Videoproduktion?", a: "Das hängt von Umfang, Drehtagen und Schnittaufwand ab. Nach einem kurzen Gespräch erhalten Sie ein transparentes Angebot." },
      { q: "Wie lange dauert eine Videoproduktion?", a: "Das hängt vom Umfang ab. Den Zeitplan für Dreh, Feedbackrunde und Auslieferung stimmen wir zu Projektbeginn gemeinsam ab." },
      { q: "Sind Sie auch außerhalb von Berlin buchbar?", a: "Ja, ich arbeite in Berlin, Brandenburg und deutschlandweit." },
    ],
    related: ["kameramann-berlin", "livestream-produktion-berlin", "bildregie-bildmischer-berlin"],
    cta: "Videoprojekt anfragen",
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
