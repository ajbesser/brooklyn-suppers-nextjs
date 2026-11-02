import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const url = new URL(path, site.url).toString();
  const image = { url: "/images/hero-food.jpg", width: 1080, height: 1350, alt: "A Brooklyn Suppers table with shared dishes and candles" };
  return {
    title, description, alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, type: "website", locale: "en_US", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}
