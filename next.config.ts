import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        protocol: "https",
        hostname: "cdn.brandfetch.io",
      },
      {
        protocol: "https",
        hostname: "asset.brandfetch.io",
      },
      {
        protocol: "https",
        hostname: "www.freelogovectors.net",
      },
      {
        protocol: "https",
        hostname: "esc.uk.net",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "alturkiholding.com",
      },
      {
        protocol: "https",
        hostname: "tamimiglobal.com",
      },
    ],
  },
};

export default nextConfig;
