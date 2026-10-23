export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
            <h3>{f.q}</h3>
            <span className="text-accent transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
