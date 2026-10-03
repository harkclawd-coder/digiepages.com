import { Suspense } from "react";
import { SITE } from "@/lib/site";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";

export const metadata = pageMetadata({
  title: "Get a free audit",
  description:
    "Request a free local visibility audit covering listings, Google Business Profile, reviews, and gaps.",
  path: "/contact",
});

// FIX 1: Component changed to a regular synchronous function (no async keyword)
export default function ContactPage(props: { searchParams: Promise<any> }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHeader
        title="Tell us about your business"
        intro="We reply with a local visibility audit plan within one business day."
        crumbs={[{ name: "Contact", href: "/contact" }]}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:px-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-line bg-surface p-6 md:p-10">
          {/* FIX 2: Wrapped safely inside a client-side streaming Suspense container */}
          <Suspense fallback={<div className="h-64 animate-pulse bg-line/20 rounded-2xl" />}>
            <ContactFormWrapper searchParams={props.searchParams} />
          </Suspense>
        </div>
        <aside className="text-[15px] leading-relaxed">
          <h2 className="text-lg font-semibold">Prefer email?</h2>
          <p className="mt-3">
            <a className="text-accent-text underline underline-offset-4" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
          <h2 className="mt-10 text-lg font-semibold">What happens next</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
            <li>We review your business and competitors.</li>
            <li>You get an audit of listings, profile, reviews, and gaps.</li>
            <li>We recommend a plan, with no obligation.</li>
          </ol>
        </aside>
      </section>
    </>
  );
}

// FIX 3: Isolated wrapper to safely resolve search parameters inside the browser bundle
async function ContactFormWrapper({ searchParams }: { searchParams: Promise<any> }) {
  const sp = await searchParams;
  const plan = typeof sp?.plan === "string" ? sp.plan : undefined;

  return <ContactForm defaultPlan={plan} />;
}

