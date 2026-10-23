import type { Testimonial } from "@/content/site";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className={`grid gap-6 ${items.length > 2 ? "md:grid-cols-3" : items.length === 2 ? "md:grid-cols-2" : ""}`}>
      {items.map((t) => (
        <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-surface p-7">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">{t.topic}</p>
          <blockquote className="mt-4 flex-1 text-foreground/90">„{t.quote}“</blockquote>
          <figcaption className="mt-6 text-sm">
            <span className="font-semibold">{t.name}</span>
            <span className="text-muted"> · {t.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
