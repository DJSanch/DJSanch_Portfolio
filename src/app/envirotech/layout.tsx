import type { Metadata } from "next"
import { siteUrl } from "@/lib/site"

const title = "Envirotech | Environmental Monitoring Platform"
const description = "Explore Envirotech, an environmental monitoring and analysis platform built to support sustainable solutions."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/envirotech" },
  openGraph: { title, description, url: `${siteUrl}/envirotech`, type: "article", images: ["/og-image.jpg"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
}

export default function EnvirotechLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
