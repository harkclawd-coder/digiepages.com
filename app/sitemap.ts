export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { INDUSTRIES, SERVICES, SITE } from "@/lib/site";
import { POSTS } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const top = ["", "/services", "/industries", "/how-it-works", "/about", "/contact", "/blog"];
  return [
    ...top.map((p) => ({
      url: `${SITE.url}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...INDUSTRIES.map((i) => ({
      url: `${SITE.url}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...POSTS.map((p) => ({
      url: `${SITE.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
