import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${site.url}/dinners`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...["about", "contact", "join"].map((path) => ({
      url: `${site.url}/${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
