import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { HOME_FAQS, INDUSTRIES, SERVICES, SITE, STATS, STEPS } from "@/lib/site";
import { faqLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { MapPack } from "@/components/map-pack";
import { VisibilityCheck } from "@/components/visibility-check";
import { Faq } from "@/components/faq";

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(HOME_FAQS)} />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-12 md:px-8 lg:min-h-[calc(100dvh-6rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-28 lg:pt-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Local visibility, engineered
          </span>
          <h1 className="mt-7 max-w-[15ch] text-balance text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.04em] md:text-[4.75rem]">
            Hyper-local marketing that puts you on the map
          </h1>
          <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-muted md:text-xl">
            Directories, Google Business Profile, and local ads that turn nearby
            searches into calls and customers.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact" arrow>{SITE.cta}</Button>
            <Button href="/services" variant="ghost">Explore services</Button>
          </div>
        </div>
        <Reveal delay={0.1} blur>
          <MapPack />
        </Reveal>
      </section>

      <section aria-label="Results" className="border-y border-line">
        <dl className="mx-auto grid max-w-7xl divide-y divide-line px-4 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-8">
          {STATS.map((s) => (
            <div key={s.label} className="py-10 md:px-10 md:first:pl-0 md:last:pr-0">
              <dd className="font-mono text-5xl font-semibold tracking-tighter tabular-nums md:text-6xl">
                {s.value}
              </dd>
              <dt className="mt-2 text-[15px] text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
        <Reveal blur>
          <h2 className="max-w-[18ch] text-balance text-[2.1rem] font-semibold leading-tight tracking-[-0.035em] md:text-[3.5rem]">
            Three pillars. One goal: more customers through your door.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-6">
          {SERVICES.slice(0, 3).map((s, i) => (
            <Reveal
              key={s.slug}
              delay={i * 0.08}
              className={i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : "md:col-span-6"}
            >
              <Link href={`/services/${s.slug}`} className="bezel group block h-full">
                <div
                  className={`bezel-core flex h-full flex-col justify-between gap-12 p-8 transition-transform duration-500 ease-glide group-hover:-translate-y-1 md:p-9 ${
                    i === 0 ? "bg-accent-soft" : i === 1 ? "bg-surface" : "bg-surface"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink/[0.05]">
                      <s.icon size={26} weight="duotone" className="text-accent-text" />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/[0.05] text-muted transition-transform duration-500 ease-glide group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <ArrowUpRight size={18} weight="bold" />
                    </span>
                  </div>
                  <div className={i === 2 ? "md:flex md:items-end md:justify-between md:gap-16" : ""}>
                    <div className="max-w-[46ch]">
                      <h3 className="text-2xl font-semibold tracking-tight md:text-[1.75rem]">
                        {s.name}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted">{s.summary}</p>
                    </div>
                    {i === 2 && (
                      <ul className="mt-8 grid gap-3 text-[15px] md:mt-0 md:min-w-[24rem]">
                        {s.features.map((f) => (
                          <li key={f} className="border-t border-line pt-3 text-muted">
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
          <Reveal blur>
            <h2 className="max-w-[20ch] text-balance text-[2.1rem] font-semibold leading-tight tracking-[-0.035em] md:text-[3.5rem]">
              Check your local visibility in a minute
            </h2>
            <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-muted">
              Tick what is true for your business and see where the gaps are.
            </p>
          </Reveal>
          <Reveal className="mt-12" delay={0.05}>
            <VisibilityCheck />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
        <Reveal blur>
          <h2 className="max-w-[18ch] text-balance text-[2.1rem] font-semibold leading-tight tracking-[-0.035em] md:text-[3.5rem]">
            Directory discipline. Startup speed.
          </h2>
        </Reveal>
        <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          {STEPS.map((s, i) => (
            <li key={s.n} className="border-t border-line pt-6">
              <Reveal delay={i * 0.07}>
                <p className="font-mono text-sm text-accent-text">{s.n}</p>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <Button href="/how-it-works" variant="ghost" arrow>How it works</Button>
        </div>
      </section>

      <section className="border-y border-line bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-28">
          <Reveal blur>
            <h2 className="max-w-[22ch] text-balance text-[2.1rem] font-semibold leading-tight tracking-[-0.035em] md:text-[3.5rem]">
              Built for the businesses your neighbors call first
            </h2>
          </Reveal>
          <div className="no-scrollbar -mx-4 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0">
            {INDUSTRIES.map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="bezel group w-72 shrink-0 snap-start"
              >
                <div className="bezel-core flex h-full flex-col justify-between gap-14 p-6 transition-transform duration-500 ease-glide group-hover:-translate-y-1">
                  <i.icon size={30} weight="duotone" className="text-accent-text" />
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{i.name}</h3>
                    <p className="mt-1 text-[15px] text-muted">{i.summary}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-4 py-24 md:px-8 md:py-36 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h2 className="text-balance text-[2.1rem] font-semibold leading-tight tracking-[-0.035em] md:text-[3.5rem]">
            Questions, answered
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <Faq items={HOME_FAQS} />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8 md:pb-32">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-paper md:px-16 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
          />
          <div className="relative">
            <h2 className="max-w-[20ch] text-balance text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              Ready to own your local market?
            </h2>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed opacity-75">
              We work with agencies, franchises, multi-location brands, and
              single-location owners.
            </p>
            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-paper px-7 text-[15px] font-medium text-ink transition-transform duration-300 ease-glide active:scale-[0.97]"
              >
                {SITE.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
