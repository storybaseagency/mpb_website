import ContactForm from "@/components/ContactForm";
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
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm text-stone-300 hover:text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
            Jan Bruchwalski auf LinkedIn
          </a>
        </div>
        <ContactForm subject={subject} />
      </div>
    </section>
  );
}
