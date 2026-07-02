import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/docs";

export default function sitemap(): MetadataRoute.Sitemap {
  const docPages = getAllSlugs().map((slug) => ({
    url: `https://thecounterweight.org/docs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://thecounterweight.org",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://thecounterweight.org/docs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...docPages,
  ];
}
