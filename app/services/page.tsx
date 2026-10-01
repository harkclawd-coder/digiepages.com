import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { SERVICES } from "@/lib/site";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";

export const metadata = pageMetadata({
  title: "Local marketing services",
  description:
    "Hyper-local directories, Google Business Profile optimization, local ad products, and lead attribution for local businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHeader
        title="Everything a local business needs to be found, chosen, and trusted"
        intro="Four services that work on their own and compound together."
        crumbs={[{ name: "Services", href: "/services" }]}
      />
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2">
          {SERVICES.map((s) => (
            <li key={s.slug} className="bg-paper">
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col gap-10 p-8 transition-colors duration-200 hover:bg-surface md:p-10"
              >
                <div className="flex items-start justify-between">
                  <s.icon size={36} weight="duotone" className="text-accent-text" />
                  <ArrowUpRight size={22} className="text-muted transition-transform duration-200 ease-snap group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{s.name}</h2>
                  <p className="mt-3 max-w-[48ch] leading-relaxed text-muted">{s.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand title="Not sure where to start? Begin with an audit." />
    </>
  );
}
