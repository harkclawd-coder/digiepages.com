import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static exports since there is no Node server to resize images
  },
};

export default nextConfig;

