import Link from "next/link";

export function PageHeader({
  title,
  intro,
  crumbs,
  children,
}: {
  title: string;
  intro?: string;
  crumbs?: { name: string; href: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 md:px-8 md:pb-24 md:pt-24">
      {crumbs && (
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="transition-colors duration-300 hover:text-ink">Home</Link></li>
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-line">/</span>
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-ink">{c.name}</span>
                ) : (
                  <Link href={c.href} className="transition-colors duration-300 hover:text-ink">{c.name}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <h1 className="max-w-[22ch] text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] md:text-[4.25rem]">
        {title}
      </h1>
      {intro && (
        <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-muted md:text-xl">
          {intro}
        </p>
      )}
      {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
    </section>
  );
}
