import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { INDUSTRIES } from "@/lib/site";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";

export const metadata = pageMetadata({
  title: "Industries we serve",
  description:
    "Local marketing for restaurants, home services, dental and medical practices, legal and professional firms, automotive shops, and multi-location brands.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />
      <PageHeader
        title="One local playbook, tuned to how your customers search"
        intro="Pick your industry to see what we focus on first."
        crumbs={[{ name: "Industries", href: "/industries" }]}
      />
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/industries/${i.slug}`}
                className="group flex h-full flex-col justify-between gap-12 rounded-3xl border border-line bg-surface p-7 transition-[border-color,transform] duration-200 ease-snap hover:-translate-y-0.5 hover:border-ink"
              >
                <div className="flex items-start justify-between">
                  <i.icon size={34} weight="duotone" className="text-accent-text" />
                  <ArrowUpRight size={20} className="text-muted" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{i.name}</h2>
                  <p className="mt-2 text-[15px] text-muted">{i.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand title="Don't see your industry? We likely serve it." />
    </>
  );
}
