"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";

// Main Page: Now a standard client-routing skeleton file that compiles instantly 
export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Tell us about your business"
        intro="We reply with a local visibility audit plan within one business day."
        crumbs={[{ name: "Contact", href: "/contact" }]}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:px-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-line bg-surface p-6 md:p-10">
          {/* Wrapped in Suspense so Next.js exports it safely */}
          <Suspense fallback={<div className="h-64 animate-pulse bg-line/20 rounded-2xl" />}>
            <ContactFormWithParams />
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

// Subcomponent: Safely isolates URL reading inside the browser execution context
function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan");
  const plan = planParam || undefined;

  return <ContactForm defaultPlan={plan} />;
}
