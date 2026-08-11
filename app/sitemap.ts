import type { MetadataRoute } from "next";

const BASE = "https://thinh-eportfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.9 },
    { path: "/work", priority: 0.9 },
    { path: "/coursework", priority: 0.9 },
    { path: "/leadership", priority: 0.9 },
    { path: "/work/scf", priority: 0.8 },
    { path: "/work/achievia", priority: 0.7 },
    { path: "/work/wws", priority: 0.7 },
    { path: "/work/apec", priority: 0.7 },
    { path: "/work/microloan", priority: 0.7 },
    { path: "/work/ups", priority: 0.7 },
    { path: "/resume", priority: 0.8 },
    { path: "/contact", priority: 0.6 },
  ];

  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
