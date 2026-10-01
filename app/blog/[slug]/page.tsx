import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/lib/posts";
import { SITE } from "@/lib/site";
import { abs, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMetadata({
    title: p.title,
    description: p.description,
    path: `/blog/${p.slug}`,
    type: "article",
  });
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const p = getPost(slug);
  if (!p) notFound();
  const path = `/blog/${p.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    mainEntityOfPage: abs(path),
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
  };

  return (
    <>
      <JsonLd
        data={[
          articleLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: p.title, path },
          ]),
        ]}
      />
      <PageHeader
        title={p.title}
        intro={p.description}
        crumbs={[
          { name: "Blog", href: "/blog" },
          { name: p.title, href: path },
        ]}
      />
      <article className="mx-auto max-w-3xl px-5 pb-24 md:px-8">
        {p.sections.map((s) => (
          <section key={s.heading} className="mt-10 first:mt-0">
            <h2 className="text-2xl font-semibold tracking-tight">{s.heading}</h2>
            {s.body.map((para) => (
              <p key={para} className="mt-4 text-lg leading-relaxed text-muted">{para}</p>
            ))}
          </section>
        ))}
      </article>
      <CtaBand title="Want this done for you? Start with an audit." />
    </>
  );
}
