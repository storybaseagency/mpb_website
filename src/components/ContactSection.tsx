import ContactForm from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { site } from "@/content/site";

export default function ContactSection({
  id = "kontakt",
  title = "Verfügbarkeit anfragen",
  subject,
}: {
  id?: string;
  title?: string;
  subject?: string;
}) {
  return (
    <section id={id} className="scroll-mt-16 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Kontakt</p>
          <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-4 text-stone-300">
            Schicken Sie mir Ihr Wunschdatum und ein paar Eckdaten zur Produktion – ich melde mich zeitnah.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition hover:brightness-105"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              {site.contact.phone}
            </a>
          </div>
          <ul className="mt-8 space-y-2 text-sm text-stone-300">
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">{site.contact.email}</a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Jan Bruchwalski auf LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <ContactForm subject={subject} />
      </div>
    </section>
  );
}
