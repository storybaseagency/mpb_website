import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Brotkrumen" className="text-xs text-stone-400">
      <ol className="flex flex-wrap justify-center gap-2">
        <li><Link href="/" className="hover:text-white">Startseite</Link></li>
        {items.map((item) => (
          <li key={item.path} className="flex gap-2">
            <span aria-hidden>/</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
