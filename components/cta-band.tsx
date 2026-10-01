import { SITE } from "@/lib/site";
import { Button } from "./button";

export function CtaBand({ title }: { title: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8 md:pb-32">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-paper md:px-16 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
        />
        <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <h2 className="max-w-[24ch] text-balance text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            {title}
          </h2>
          <div className="shrink-0 rounded-full bg-paper p-0.5">
            <Button
              href="/contact"
              arrow
              className="!bg-paper !text-ink shadow-none hover:!bg-white"
            >
              {SITE.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
