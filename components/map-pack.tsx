"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, Phone, Star } from "@phosphor-icons/react";

const LISTINGS = [
  { id: "a", name: "Harbor Street Plumbing", meta: "Plumber · Open now", x: 28, y: 34, rating: "4.9" },
  { id: "b", name: "Northside Dental Care", meta: "Dentist · Closes 6 PM", x: 62, y: 26, rating: "4.8" },
  { id: "c", name: "Mill Road Kitchen", meta: "Restaurant · Open now", x: 48, y: 64, rating: "4.7" },
] as const;

export function MapPack() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string>("a");

  return (
    <div className="bezel">
      <div
        className="bezel-core"
        role="group"
        aria-label="Example local search results"
      >
        <div className="relative aspect-[5/4] map-grid bg-surface-2">
          <div
            aria-hidden="true"
            className="absolute left-[-10%] top-[46%] h-3 w-[120%] -rotate-6 bg-paper"
          />
          <div
            aria-hidden="true"
            className="absolute left-[40%] top-[-10%] h-[120%] w-3 rotate-12 bg-paper"
          />
          {LISTINGS.map((l) => {
            const on = active === l.id;
            return (
              <motion.button
                key={l.id}
                type="button"
                aria-label={`Show ${l.name}`}
                aria-pressed={on}
                onClick={() => setActive(l.id)}
                onMouseEnter={() => setActive(l.id)}
                onFocus={() => setActive(l.id)}
                className="absolute -translate-x-1/2 -translate-y-full"
                style={{ left: `${l.x}%`, top: `${l.y}%` }}
                animate={reduce ? undefined : { scale: on ? 1.25 : 1, y: on ? -4 : 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
              >
                <MapPin
                  size={40}
                  weight="fill"
                  className={on ? "text-accent" : "text-muted"}
                />
              </motion.button>
            );
          })}
          <div className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-3 py-1 text-xs text-muted backdrop-blur">
            Example results
          </div>
        </div>

        <ul className="divide-y divide-line">
          {LISTINGS.map((l) => {
            const on = active === l.id;
            return (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => setActive(l.id)}
                  onMouseEnter={() => setActive(l.id)}
                  onFocus={() => setActive(l.id)}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 ${
                    on ? "bg-accent-soft" : "bg-surface"
                  }`}
                >
                  <span>
                    <span className="block font-medium">{l.name}</span>
                    <span className="mt-0.5 flex items-center gap-2 text-sm text-muted">
                      <Star size={14} weight="fill" className="text-accent-text" />
                      {l.rating} · {l.meta}
                    </span>
                  </span>
                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      on ? "bg-accent text-on-accent" : "bg-surface-2 text-ink"
                    }`}
                    aria-hidden="true"
                  >
                    <Phone size={16} weight="fill" />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
