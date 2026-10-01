import Link from "next/link";
import { INDUSTRIES, SERVICES, SITE } from "@/lib/site";
import { Logo } from "./logo";

const col = "text-[15px] text-muted transition-colors duration-300 hover:text-ink";

export function Footer() {
  return (
    <footer className="relative mt-8">
      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
        <div className="bezel">
          <div className="bezel-core-flat px-7 py-14 md:px-14">
            <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
              <div className="max-w-xs">
                <Logo />
                <p className="mt-5 text-[15px] leading-relaxed text-muted">
                  Hyper-local digital marketing for local businesses.
                  Directories, Google Business Profile optimization, and lead
                  generation.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex h-11 items-center rounded-full bg-ink px-5 text-[15px] font-medium text-paper transition-transform duration-300 ease-glide active:scale-[0.97]"
                >
                  {SITE.cta}
                </Link>
              </div>
              <nav aria-label="Services">
                <h2 className="text-sm font-semibold">Services</h2>
                <ul className="mt-5 space-y-3">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className={col}>
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav aria-label="Industries">
                <h2 className="text-sm font-semibold">Industries</h2>
                <ul className="mt-5 space-y-3">
                  {INDUSTRIES.slice(0, 5).map((i) => (
                    <li key={i.slug}>
                      <Link href={`/industries/${i.slug}`} className={col}>
                        {i.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav aria-label="Company">
                <h2 className="text-sm font-semibold">Company</h2>
                <ul className="mt-5 space-y-3">
                  <li><Link href="/how-it-works" className={col}>How it works</Link></li>
                  <li><Link href="/about" className={col}>About</Link></li>
                  <li><Link href="/blog" className={col}>Blog</Link></li>
                  <li>
                    <a href={`mailto:${SITE.email}`} className={col}>
                      {SITE.email}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted md:flex-row md:justify-between">
              <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
              <p>
                <Link href="/privacy" className="transition-colors duration-300 hover:text-ink">Privacy</Link>
                {" · "}
                <Link href="/terms" className="transition-colors duration-300 hover:text-ink">Terms</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
