import { notFound } from "next/navigation";
import { WarningCircle } from "@phosphor-icons/react/ssr";
import { INDUSTRIES, SITE } from "@/lib/site";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: PageProps<"/industries/[slug]">) {
  const { slug } = await props.params;
  const i = INDUSTRIES.find((x) => x.slug === slug);
  if (!i) return {};
  return pageMetadata({
    title: `Local marketing for ${i.name.toLowerCase()}`,
    description: `${i.headline}. ${i.summary} Directories, Google Business Profile, and local ads from ${SITE.name}.`,
    path: `/industries/${i.slug}`,
  });
}

export default async function IndustryPage(props: PageProps<"/industries/[slug]">) {
  const { slug } = await props.params;
  const ind = INDUSTRIES.find((x) => x.slug === slug);
  if (!ind) notFound();
  const path = `/industries/${ind.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: ind.name, path },
        ])}
      />
      <PageHeader
        title={ind.headline}
        intro={ind.summary}
        crumbs={[
          { name: "Industries", href: "/industries" },
          { name: ind.name, href: path },
        ]}
      >
        <Button href="/contact" arrow>{SITE.cta}</Button>
      </PageHeader>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-balance text-3xl font-semibold tracking-tighter md:text-4xl">
            What gets in the way
          </h2>
          <ul className="grid gap-4">
            {ind.challenges.map((c) => (
              <li key={c} className="flex gap-3 rounded-2xl border border-line bg-paper p-5 text-[15px]">
                <WarningCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-accent-text" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tighter md:text-4xl">
          How we help
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {ind.plays.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand title={`Ready to grow your ${ind.name.toLowerCase()} business locally?`} />
    </>
  );
}
