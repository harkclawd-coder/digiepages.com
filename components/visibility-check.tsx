"use client";

import { useId, useState, useEffect } from "react";
import { animate, useMotionValue, useTransform, motion } from "motion/react";
import Link from "next/link";
import { Check } from "@phosphor-icons/react";

const CHECKS = [
  { id: "claimed", label: "My Google Business Profile is claimed and verified", weight: 20 },
  { id: "nap", label: "Name, address, and phone match on every listing", weight: 15 },
  { id: "hours", label: "Hours and services are complete and current", weight: 15 },
  { id: "photos", label: "I add new photos every month", weight: 10 },
  { id: "reviews", label: "I ask for reviews and reply to all of them", weight: 15 },
  { id: "pages", label: "I have a page for each town or service I cover", weight: 15 },
  { id: "track", label: "I can tell which channel produced each call", weight: 10 },
] as const;

function verdict(score: number) {
  if (score >= 80) return "Strong foundation. Focus on scale and attribution.";
  if (score >= 50) return "Solid start. There are clear gaps to close.";
  return "Big opportunity. Basic fixes will move the needle.";
}

export function VisibilityCheck() {
  const uid = useId();
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const score = CHECKS.reduce((s, c) => s + (checked[c.id] ? c.weight : 0), 0);

  const mv = useMotionValue(0);
  const shown = useTransform(mv, (v) => Math.round(v));
  const width = useTransform(mv, (v) => `${v}%`);

  useEffect(() => {
    const controls = animate(mv, score, {
      type: "spring",
      duration: 0.6,
      bounce: 0.1,
    });
    return () => controls.stop();
  }, [score, mv]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <fieldset className="bezel">
        <div className="bezel-core p-2 md:p-3">
          <legend className="sr-only">Local visibility self-check</legend>
          <ul className="divide-y divide-line">
            {CHECKS.map((c) => {
              const on = !!checked[c.id];
              return (
                <li key={c.id}>
                  <label
                    htmlFor={`${uid}-${c.id}`}
                    className="flex cursor-pointer items-center gap-4 rounded-2xl px-4 py-4 transition-colors duration-300 hover:bg-surface-2"
                  >
                    <input
                      id={`${uid}-${c.id}`}
                      type="checkbox"
                      checked={on}
                      onChange={(e) =>
                        setChecked((s) => ({ ...s, [c.id]: e.target.checked }))
                      }
                      className="peer sr-only"
                    />
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,transform] duration-300 ease-glide ${
                        on
                          ? "border-transparent bg-accent text-on-accent"
                          : "border-line"
                      }`}
                      aria-hidden="true"
                    >
                      <Check
                        size={13}
                        weight="bold"
                        className={`transition-opacity duration-200 ${on ? "opacity-100" : "opacity-0"}`}
                      />
                    </span>
                    <span className="text-[15px] leading-snug">{c.label}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </fieldset>

      <div className="bezel">
        <div className="bezel-core flex h-full flex-col justify-between bg-surface-2 p-7 md:p-8">
          <div>
            <p className="text-sm text-muted">Your local visibility score</p>
            <p className="mt-3 font-mono text-7xl font-semibold tracking-tighter tabular-nums">
              <motion.span
                aria-live="polite"
                aria-atomic="true"
                aria-label={`${score} out of 100`}
              >
                {shown}
              </motion.span>
              <span className="text-3xl text-muted">/100</span>
            </p>
            <div
              className="mt-7 h-2 overflow-hidden rounded-full bg-line"
              role="progressbar"
              aria-valuenow={score}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Visibility score"
            >
              <motion.div className="h-full rounded-full bg-accent" style={{ width }} />
            </div>
            <p className="mt-6 max-w-[32ch] leading-relaxed">{verdict(score)}</p>
          </div>
          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-accent px-6 text-[15px] font-medium text-on-accent transition-[transform,background-color] duration-300 ease-glide hover:bg-accent-strong active:scale-[0.97]"
            >
              Get a free audit
            </Link>
            <p className="mt-3 text-sm text-muted">
              A quick self-check, not a full audit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
