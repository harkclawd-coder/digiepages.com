import { STEPS } from "@/lib/site";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

export const metadata = pageMetadata({
  title: "How it works",
  description:
    "Our four-step process: audit and strategy, build and launch, operate and optimize, scale and expand.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "How it works", path: "/how-it-works" }])} />
      <PageHeader
        title="From audit to compounding local results"
        intro="Directory discipline, startup speed, and a partner mindset."
        crumbs={[{ name: "How it works", href: "/how-it-works" }]}
      />
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <ol className="divide-y divide-line border-y border-line">
          {STEPS.map((s, i) => (
            <li key={s.n} className="grid gap-4 py-10 md:grid-cols-[6rem_1fr_1.2fr] md:gap-10">
              <Reveal delay={i * 0.04} className="contents">
                <p className="font-mono text-2xl text-accent-text">{s.n}</p>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{s.title}</h2>
                  <p className="mt-1 text-sm text-muted">{s.time}</p>
                </div>
                <p className="leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand title="Step one takes 48 hours. Start your audit." />
    </>
  );
}
