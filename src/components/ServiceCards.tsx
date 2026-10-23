import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";

export default function ServiceCards({ items }: { items: Service[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <Link
          key={s.slug}
          href={`/${s.slug}/`}
          className="group overflow-hidden rounded-2xl border border-border bg-background transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={s.image}
              alt={s.imageAlt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.teaser}</p>
            <p className="mt-4 text-sm font-medium group-hover:text-accent">{s.title} in Berlin →</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
