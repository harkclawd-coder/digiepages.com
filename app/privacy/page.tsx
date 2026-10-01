import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/page-header";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "Privacy information for DigiePages.",
  path: "/privacy",
});

export default function Page() {
  return (
    <>
      <PageHeader title="Privacy" />
      <section className="mx-auto max-w-3xl px-5 pb-24 md:px-8">
        <p className="text-lg leading-relaxed text-muted">
          This page is a placeholder. Contact {SITE.email} with any questions
          until the full privacy document is published.
        </p>
      </section>
    </>
  );
}
