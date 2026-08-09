import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://thinh-eportfolio.vercel.app/sitemap.xml",
    host: "https://thinh-eportfolio.vercel.app",
  };
}
