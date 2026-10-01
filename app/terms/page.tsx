import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/page-header";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms",
  description: "Terms information for DigiePages.",
  path: "/terms",
});

export default function Page() {
  return (
    <>
      <PageHeader title="Terms" />
      <section className="mx-auto max-w-3xl px-5 pb-24 md:px-8">
        <p className="text-lg leading-relaxed text-muted">
          This page is a placeholder. Contact {SITE.email} with any questions
          until the full terms document is published.
        </p>
      </section>
    </>
  );
}
