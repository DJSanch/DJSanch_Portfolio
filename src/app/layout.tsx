import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PortfolioLoader from "@/components/portfolio-loader";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniel Sanchez | Full-Stack Developer & Network Engineer",
    template: "%s | Daniel Sanchez",
  },
  description: "Daniel Sanchez is a full-stack developer and network engineer in Davao City, Philippines, building thoughtful web, mobile, and AI-powered products.",
  applicationName: "Daniel Sanchez Portfolio",
  category: "technology",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: "/DAN%20SANCHEZ.svg",
    shortcut: "/DAN%20SANCHEZ.svg",
  },
  keywords: ["Daniel Sanchez", "Full-Stack Developer", "Software Developer", "Network Engineer", "Davao City", "Philippines", "Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Machine Learning", "Portfolio"],
  authors: [{ name: "Daniel Sanchez", url: siteUrl }],
  creator: "Daniel Sanchez",
  publisher: "Daniel Sanchez",
  openGraph: {
    title: "Daniel Sanchez | Full-Stack Developer & Network Engineer",
    description: "Thoughtful web, mobile, and AI-powered products by Daniel Sanchez, a developer and network engineer in Davao City, Philippines.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Daniel Sanchez Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Daniel Sanchez — Full-Stack Developer and Network Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Sanchez | Full-Stack Developer & Network Engineer",
    description: "Thoughtful web, mobile, and AI-powered products by Daniel Sanchez in Davao City, Philippines.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#0a1220] text-white antialiased`}
      >
        <PortfolioLoader>{children}</PortfolioLoader>
      </body>
    </html>
  );
}
