import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PortfolioLoader from "@/components/portfolio-loader";
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
  title: "Daniel Sanchez - Portfolio",
  description: "Professional portfolio of DJSanch, a Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "DJSanch" }],
  creator: "DJSanch",
  openGraph: {
    title: "Daniel Sanchez - Portfolio",
    description: "Professional portfolio showcasing projects, skills, and experience in modern web development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Sanchez - Portfolio",
    description: "Professional portfolio showcasing projects, skills, and experience in modern web development.",
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
