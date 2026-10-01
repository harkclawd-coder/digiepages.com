import { Plus } from "@phosphor-icons/react/ssr";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-medium tracking-tight [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-accent-text transition-[transform,background-color,border-color] duration-300 ease-glide group-open:rotate-45 group-open:border-transparent group-open:bg-accent-soft">
              <Plus size={16} weight="bold" />
            </span>
          </summary>
          <p className="max-w-[62ch] pb-7 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
