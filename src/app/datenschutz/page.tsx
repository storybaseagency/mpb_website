import type { Metadata } from "next";
import { site } from "@/content/site";
import { trackingEnabled } from "@/content/tracking";

export const metadata: Metadata = { title: "Datenschutzerklärung", robots: { index: false } };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export default function Datenschutz() {
  const { contact } = site;
  return (
    <article className="mx-auto max-w-3xl px-4 py-24 text-muted sm:px-6">
      <h1 className="font-display text-4xl font-semibold text-foreground">Datenschutzerklärung</h1>
      <p className="mt-4 text-sm">Stand: Oktober 2026</p>

      <Section title="1. Verantwortlicher">
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
          Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p>
          {contact.person} – {site.name}<br />
          {contact.street}<br />
          {contact.city}<br />
          Telefon: {contact.phone}<br />
          E-Mail: <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a>
        </p>
        <p>Ein Datenschutzbeauftragter ist nicht bestellt, da hierzu keine gesetzliche Pflicht besteht.</p>
      </Section>

      <Section title="2. Überblick">
        <p>
          {trackingEnabled
            ? "Diese Website setzt Cookies und Google Ads Conversion-Tracking nur ein, wenn Sie über das Cookie-Banner einwilligen (siehe Ziffer 8). Analyse-Dienste werden nicht verwendet."
            : "Diese Website verwendet keine Cookies, keine Analyse- oder Tracking-Dienste und keine Werbe-Pixel."}{" "}
          Schriftarten werden lokal von diesem Server ausgeliefert; es besteht dabei
          keine Verbindung zu Servern von Google oder anderen Drittanbietern. Personenbezogene Daten
          werden nur verarbeitet, soweit dies für den Betrieb der Website oder die Bearbeitung Ihrer
          Anfrage erforderlich ist.
        </p>
      </Section>

      <Section title="3. Hosting und Server-Logfiles">
        <p>
          Diese Website wird bei ALL-INKL.COM – Neue Medien Münnich, Hauptstraße 68, 02742
          Friedersdorf, Deutschland, gehostet. Mit dem Hoster besteht ein Vertrag zur
          Auftragsverarbeitung gemäß Art. 28 DSGVO.
        </p>
        <p>
          Beim Aufruf der Website werden durch den Server automatisch Informationen erfasst, die Ihr
          Browser übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
          Referrer-URL, Browsertyp und -version sowie Betriebssystem. Diese Daten sind technisch
          erforderlich, um die Website auszuliefern und deren Sicherheit und Stabilität zu
          gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          einem sicheren und funktionsfähigen Webangebot). Die Logfiles werden nach kurzer Zeit
          automatisch gelöscht, sofern sie nicht zur Aufklärung eines Sicherheitsvorfalls benötigt
          werden.
        </p>
      </Section>

      <Section title="4. SSL-/TLS-Verschlüsselung">
        <p>
          Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.
        </p>
      </Section>

      <Section title="5. Kontaktformular">
        <p>
          Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name, E-Mail-Adresse, optional
          Wunschdatum, wie Sie auf mich aufmerksam geworden sind, sowie Ihre Nachricht) per E-Mail an
          mich übermittelt und zur Bearbeitung Ihrer Anfrage verwendet. Sind Sie über eine Anzeige oder
          einen Kampagnenlink auf die Seite gekommen, wird zusätzlich die Kampagnenkennung aus der
          aufgerufenen Adresse (z. B. „utm_campaign“) mitgeschickt; hierfür werden keine Cookies
          gesetzt. Die Daten werden über den Mailserver des Hosters versendet und nicht an Dritte
          weitergegeben.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einem Vertrag oder
          vorvertraglichen Maßnahmen zusammenhängt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden gelöscht,
          sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen
          Aufbewahrungspflichten (z. B. bei Zustandekommen eines Auftrags) entgegenstehen.
        </p>
      </Section>

      <Section title="6. Kontakt per E-Mail, Telefon und WhatsApp">
        <p>
          Wenn Sie mich per E-Mail oder Telefon kontaktieren, verarbeite ich Ihre Angaben zur
          Bearbeitung Ihres Anliegens auf denselben Rechtsgrundlagen wie unter Ziffer 5.
        </p>
        <p>
          Auf dieser Website befindet sich ein Link zu WhatsApp. Beim bloßen Besuch der Website
          werden keine Daten an WhatsApp übertragen. Erst wenn Sie auf den WhatsApp-Button klicken,
          wird WhatsApp bzw. die Website von WhatsApp geöffnet. Nutzen Sie WhatsApp zur
          Kontaktaufnahme, verarbeitet der Anbieter WhatsApp Ireland Limited, Merrion Road, Dublin 4,
          D04 X2K5, Irland, Ihre Daten (u. a. Telefonnummer, Metadaten der Kommunikation) nach
          eigenen Datenschutzbestimmungen. Dabei kann eine Übermittlung in die USA an die Muttergesellschaft
          Meta Platforms Inc. erfolgen; Meta ist unter dem EU-US Data Privacy Framework zertifiziert.
          Die Nutzung von WhatsApp ist freiwillig – alternativ können Sie mich jederzeit per
          Formular, E-Mail oder Telefon erreichen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. f
          DSGVO.
        </p>
      </Section>

      <Section title="7. Eingebettete Videos (YouTube, Vimeo)">
        <p>
          Auf einigen Seiten können Videos der Plattformen YouTube (Google Ireland Limited, Gordon
          House, Barrow Street, Dublin 4, Irland) oder Vimeo (Vimeo.com, Inc., 330 West 34th Street,
          New York, NY 10001, USA) eingebunden sein. Die Videos werden erst geladen, wenn Sie aktiv
          auf das Video klicken. Vorher findet keine Verbindung zu den Anbietern statt.
        </p>
        <p>
          Nach dem Klick wird eine Verbindung zu den Servern des jeweiligen Anbieters hergestellt.
          Dabei werden u. a. Ihre IP-Adresse und Informationen über die aufgerufene Seite übertragen;
          der Anbieter kann Cookies oder ähnliche Technologien auf Ihrem Endgerät speichern. YouTube
          wird im erweiterten Datenschutzmodus (youtube-nocookie.com) eingebunden. Eine Übermittlung
          in die USA ist möglich; Google und Vimeo sind unter dem EU-US Data Privacy Framework
          zertifiziert.
        </p>
        <p>
          Rechtsgrundlage ist Ihre Einwilligung durch den Klick auf das Video (Art. 6 Abs. 1 lit. a
          DSGVO, § 25 Abs. 1 TDDDG). Die Einwilligung gilt nur für den jeweiligen Seitenaufruf und
          kann durch Schließen bzw. Neuladen der Seite jederzeit widerrufen werden.
        </p>
      </Section>

      {trackingEnabled && (
        <Section title="8. Google Ads Conversion-Tracking">
          <p>
            Ich schalte Anzeigen bei Google Ads und möchte messen, ob sie zu Anfragen führen. Dafür
            nutze ich – nur mit Ihrer Einwilligung – das Conversion-Tracking der Google Ireland
            Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“).
          </p>
          <p>
            Haben Sie eingewilligt und sind über eine Google-Anzeige auf diese Website gelangt, setzt
            Google ein Cookie auf Ihrem Endgerät. Schicken Sie anschließend das Kontaktformular ab oder
            klicken auf die Telefonnummer bzw. den WhatsApp-Button, erfahren Google und ich, dass eine
            Anfrage über eine Anzeige zustande kam. Ich erhalte dabei nur statistische Auswertungen,
            keine Informationen, mit denen Sie persönlich identifiziert werden können. Google
            verarbeitet unter anderem Ihre IP-Adresse, Geräte- und Browserinformationen, die
            aufgerufenen Seiten sowie Klick-Kennungen. Eine Übermittlung in die USA ist möglich;
            Google ist unter dem EU-US Data Privacy Framework zertifiziert. Ich nutze den
            Einwilligungsmodus von Google (Consent Mode); ohne Ihre Einwilligung wird Google Ads nicht
            geladen.
          </p>
          <p>
            Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Sie
            können sie jederzeit mit Wirkung für die Zukunft über „Cookie-Einstellungen“ im Seitenfuß
            widerrufen. Ihre Entscheidung wird im lokalen Speicher Ihres Browsers abgelegt, damit das
            Banner nicht bei jedem Seitenaufruf erscheint (§ 25 Abs. 2 Nr. 2 TDDDG). Weitere
            Informationen:{" "}
            <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">
              Datenschutzerklärung von Google
            </a>
            .
          </p>
        </Section>
      )}

      <Section title={`${trackingEnabled ? 9 : 8}. Link zu LinkedIn`}>
        <p>
          Diese Website enthält einen einfachen Link zu meinem LinkedIn-Profil. Es handelt sich nicht
          um ein eingebundenes Plugin; Daten werden erst übertragen, wenn Sie den Link anklicken und
          die Website von LinkedIn aufrufen. Dort gelten die Datenschutzbestimmungen der LinkedIn
          Ireland Unlimited Company.
        </p>
      </Section>

      <Section title={`${trackingEnabled ? 10 : 9}. Ihre Rechte`}>
        <p>Sie haben im Rahmen der gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>
          <strong className="text-foreground">Widerspruchsrecht (Art. 21 DSGVO):</strong> Soweit die
          Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht, können Sie aus Gründen, die sich aus
          Ihrer besonderen Situation ergeben, jederzeit widersprechen.
        </p>
        <p>
          Zur Ausübung Ihrer Rechte genügt eine Nachricht an{" "}
          <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a>.
        </p>
        <p>
          Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
          Zuständig ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit,
          Alt-Moabit 59–61, 10555 Berlin.
        </p>
      </Section>

      <Section title={`${trackingEnabled ? 11 : 10}. Änderungen`}>
        <p>
          Ich passe diese Datenschutzerklärung an, sobald sich die Website oder die rechtlichen
          Rahmenbedingungen ändern. Es gilt die jeweils aktuelle, hier veröffentlichte Fassung.
        </p>
      </Section>
    </article>
  );
}
