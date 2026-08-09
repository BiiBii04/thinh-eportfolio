import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://thinhngo.io.vn/sitemap.xml",
    host: "https://thinhngo.io.vn",
  };
}
