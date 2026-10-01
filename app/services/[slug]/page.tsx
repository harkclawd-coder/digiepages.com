import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "@phosphor-icons/react/ssr";
import { SERVICES, SITE } from "@/lib/site";
import { abs, breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMetadata({
    title: s.name,
    description: s.summary,
    path: `/services/${s.slug}`,
  });
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();

  const path = `/services/${s.slug}`;
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.summary,
    url: abs(path),
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: "United States",
  };

  return (
    <>
      <JsonLd
        data={[
          serviceLd,
          faqLd(s.faqs),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: s.name, path },
          ]),
        ]}
      />
      <PageHeader
        title={s.headline}
        intro={s.intro}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: s.name, href: path },
        ]}
      >
        <Button href="/contact" arrow>{SITE.cta}</Button>
        <Button href="/services" variant="ghost">All services</Button>
      </PageHeader>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-balance text-3xl font-semibold tracking-tighter md:text-4xl">
            What is included
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {s.features.map((f) => (
              <li key={f} className="flex gap-3 rounded-2xl border border-line bg-paper p-5 text-[15px]">
                <Check size={20} weight="bold" className="mt-0.5 shrink-0 text-accent-text" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {s.outcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.06}>
              <h3 className="text-xl font-semibold tracking-tight">{o.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{o.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-balance text-3xl font-semibold tracking-tighter md:text-4xl">
          Common questions
        </h2>
        <Faq items={s.faqs} />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <h2 className="text-xl font-semibold tracking-tight">Other services</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {SERVICES.filter((x) => x.slug !== s.slug).map((x) => (
            <li key={x.slug}>
              <Link
                href={`/services/${x.slug}`}
                className="inline-flex h-10 items-center rounded-full border border-line px-4 text-[15px] transition-colors duration-200 hover:border-ink"
              >
                {x.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand title="See where your business stands today." />
    </>
  );
}
