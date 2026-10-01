import Link from "next/link";
import { POSTS } from "@/lib/posts";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Practical guides on local SEO, Google Business Profile, directories, and lead attribution.",
  path: "/blog",
});

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <PageHeader
        title="Local marketing, explained plainly"
        intro="Guides for local business owners and agencies."
        crumbs={[{ name: "Blog", href: "/blog" }]}
      />
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <ul className="divide-y divide-line border-y border-line">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group grid gap-3 py-8 md:grid-cols-[12rem_1fr] md:gap-10"
              >
                <time dateTime={p.date} className="text-sm text-muted">{fmt(p.date)}</time>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight group-hover:text-accent-text">{p.title}</h2>
                  <p className="mt-2 max-w-[60ch] text-muted">{p.description}</p>
                  <p className="mt-3 text-sm text-muted">{p.readMinutes} min read</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
