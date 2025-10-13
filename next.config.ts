import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
