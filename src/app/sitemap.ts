import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/crackvision`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/riceprotech`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/envirotech`, changeFrequency: "yearly", priority: 0.7 },
  ]
}
