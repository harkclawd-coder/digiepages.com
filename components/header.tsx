"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { NAV, SITE } from "@/lib/site";
import { Logo } from "./logo";

function subscribe(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const scrolled = useSyncExternalStore(
    subscribe,
    () => window.scrollY > 8,
    () => false
  );

  useEffect(() => {
    requestAnimationFrame(() => setOpen(false));
  }, [pathname]);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      document.body.style.overflow = open ? "hidden" : "";
    });
    return () => {
      requestAnimationFrame(() => {
        document.body.style.overflow = "";
      });
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-paper/70 backdrop-blur-xl [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link
          href="/"
          aria-label={`${SITE.name} home`}
          className={`pointer-events-auto flex items-center rounded-full px-4 py-2.5 ring-1 backdrop-blur-xl transition-[background-color,box-shadow,ring-color] duration-500 ease-glide ${
            scrolled
              ? "bg-surface/85 ring-line shadow-card"
              : "bg-surface/60 ring-transparent"
          }`}
        >
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          className={`pointer-events-auto hidden items-center gap-1 rounded-full p-1.5 ring-1 backdrop-blur-xl transition-[background-color,box-shadow,ring-color] duration-500 ease-glide lg:flex ${
            scrolled
              ? "bg-surface/85 ring-line shadow-card"
              : "bg-surface/60 ring-transparent"
          }`}
        >
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[15px] transition-colors duration-300 ${
                  active
                    ? "bg-accent-soft font-medium text-accent-text"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="pointer-events-auto hidden h-11 items-center whitespace-nowrap rounded-full bg-accent px-5 text-[15px] font-medium text-on-accent transition-[transform,background-color] duration-300 ease-glide hover:bg-accent-strong active:scale-[0.97] sm:inline-flex"
          >
            {SITE.cta}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="pointer-events-auto relative flex h-11 w-11 items-center justify-center rounded-full bg-surface/85 ring-1 ring-line backdrop-blur-xl transition-[transform,background-color] duration-300 ease-glide active:scale-[0.95] lg:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-5 rounded-full bg-ink transition-transform duration-300 ease-glide ${
                open ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-5 rounded-full bg-ink transition-transform duration-300 ease-glide ${
                open ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`fixed inset-0 z-30 bg-paper/85 backdrop-blur-2xl transition-opacity duration-500 ease-glide lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="mx-auto flex h-full max-w-7xl flex-col justify-center gap-2 px-6 pb-16 pt-24"
        >
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              className={`border-b border-line py-5 text-3xl font-semibold tracking-tight transition-[transform,opacity] duration-500 ease-glide ${
                open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            tabIndex={open ? 0 : -1}
            style={{ transitionDelay: open ? `${100 + NAV.length * 60}ms` : "0ms" }}
            className={`mt-8 inline-flex h-14 items-center justify-center rounded-full bg-accent px-6 text-[15px] font-medium text-on-accent transition-[transform,opacity] duration-500 ease-glide ${
              open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {SITE.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}