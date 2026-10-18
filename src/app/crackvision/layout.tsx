import type { Metadata } from "next"
import { siteUrl } from "@/lib/site"

const title = "CrackVision | Concrete Crack Classification"
const description = "Explore CrackVision, a computer vision project that classifies concrete crack severity using machine learning."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/crackvision" },
  openGraph: { title, description, url: `${siteUrl}/crackvision`, type: "article", images: ["/og-image.jpg"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
}

export default function CrackVisionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
