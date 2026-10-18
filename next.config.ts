import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow builds to use an isolated output directory alongside `next dev`.
  distDir: process.env.NEXT_DIST_DIR || ".next",

  // Output configuration for Vercel
  output: 'standalone',
  
  // Image optimization
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Performance optimizations
  compress: true,
  
  // Production optimizations
  poweredByHeader: false,
  
  // React strict mode for better development experience
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0, must-revalidate" }],
      },
      {
        source: "/sw.js",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0, must-revalidate" }],
      },
    ]
  },
};

export default nextConfig;
