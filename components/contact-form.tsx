"use client";

import { useState } from "react";
import { Check, WarningCircle } from "@phosphor-icons/react";
import { SITE } from "@/lib/site";

const inputCls =
  "h-12 w-full rounded-xl border border-line bg-paper px-4 text-[15px] text-ink outline-none transition-colors duration-300 focus:border-accent-text aria-[invalid=true]:border-[#e05d4f]";

export function ContactForm({ defaultPlan }: { defaultPlan?: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const next: Record<string, string> = {};
    if (!name) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (!business) next.business = "Enter your business name.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business}`,
      `Interested in: ${interest}`,
      "",
      message,
    ].join("\n");

    // Try Twenty CRM lead creation via GraphQL
    const TWENTY_SECRET = "digiepages_twenty_secret_key_998877665544332211";
    const twentyEmail = email;

    if (twentyEmail) {
      fetch("http://localhost:3000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${TWENTY_SECRET}`,
        },
        body: JSON.stringify({
          query: `
            mutation {
              createPerson(input: { email: "${twentyEmail}", name: "${name}" }) {
                person {
                  id
                }
              }
            }
          `,
        }),
      })
        .then(() => {
          // Lead created - continue to mailto
        })
        .catch((err) => {
          console.error("Twenty CRM lead creation failed, falling back to mailto:", err);
        });
    }

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Audit request from ${business}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">Your name</label>
          <input id="name" name="name" autoComplete="name" className={inputCls}
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
          {errors.name && (
            <p id="name-err" className="flex items-center gap-1.5 text-sm text-[#e05d4f]">
              <WarningCircle size={15} weight="fill" /> {errors.name}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputCls}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
          {errors.email && (
            <p id="email-err" className="flex items-center gap-1.5 text-sm text-[#e05d4f]">
              <WarningCircle size={15} weight="fill" /> {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="business" className="text-sm font-medium">Business name</label>
        <input id="business" name="business" autoComplete="organization" className={inputCls}
          aria-invalid={!!errors.business} aria-describedby={errors.business ? "business-err" : undefined} />
        {errors.business && (
          <p id="business-err" className="flex items-center gap-1.5 text-sm text-[#e05d4f]">
            <WarningCircle size={15} weight="fill" /> {errors.business}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <label htmlFor="interest" className="text-sm font-medium">What do you need help with?</label>
        <select id="interest" name="interest" defaultValue={defaultPlan ?? "audit"} className={inputCls}>
          <option value="audit">A free local visibility audit</option>
          <option value="listings">Local Listings</option>
          <option value="growth">Local Growth</option>
          <option value="leads">Local Leads</option>
          <option value="multi-location">Multi-Location</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Anything we should know? <span className="text-muted">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4}
          className={`${inputCls} h-auto py-3`} />
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          className="group inline-flex h-12 items-center gap-3 whitespace-nowrap rounded-full bg-accent pl-6 pr-2 text-[15px] font-medium text-on-accent shadow-[0_10px_30px_-12px_var(--accent)] transition-[transform,background-color] duration-300 ease-glide hover:bg-accent-strong active:scale-[0.97]"
        >
          Send request
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-on-accent/15 transition-transform duration-300 ease-glide group-hover:translate-x-0.5 group-hover:-translate-y-px">
            <Check size={16} weight="bold" />
          </span>
        </button>
        <p className="text-sm text-muted">Opens your email app with the details filled in.</p>
      </div>
    </form>
  );
}
