import type { Metadata } from "next"
import { siteUrl } from "@/lib/site"

const title = "RiceProTech | Rice Leaf Disease Detection App"
const description = "Explore RiceProTech, a React Native mobile app applying image classification to rice leaf disease identification."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/riceprotech" },
  openGraph: { title, description, url: `${siteUrl}/riceprotech`, type: "article", images: ["/og-image.jpg"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
}

export default function RiceProTechLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
