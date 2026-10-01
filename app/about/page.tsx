import { STATS } from "@/lib/site";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";

export const metadata = pageMetadata({
  title: "About",
  description:
    "DigiePages combines 15+ years of directory heritage with a modern stack to help local businesses get found, chosen, and trusted.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHeader
        title="Directory heritage. Modern stack."
        intro="We started in local directories and kept building for the businesses that depend on being found nearby."
        crumbs={[{ name: "About", href: "/about" }]}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed text-muted">
          <p>
            DigiePages builds and runs the digital infrastructure local
            businesses need to be found, chosen, and trusted: directories,
            Google Business Profile optimization, and ad products that drive
            real leads.
          </p>
          <p>
            We work with agencies, franchises, multi-location brands, and
            ambitious single-location owners. Our approach is simple: measure
            what matters, ship quickly, and keep improving.
          </p>
        </div>
        <dl className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line">
          {STATS.map((s) => (
            <div key={s.label} className="bg-surface p-6">
              <dd className="font-mono text-4xl font-semibold tracking-tighter tabular-nums">{s.value}</dd>
              <dt className="mt-1 text-[15px] text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>
      <CtaBand title="Let's talk about your local market." />
    </>
  );
}
