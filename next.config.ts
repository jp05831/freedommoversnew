import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel server output is required for Prisma, Supabase auth, webhooks, and share links.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeholder.co",
      },
    ],
  },
};

export default nextConfig;
