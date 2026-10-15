import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages hosts the public site; retain server output for other hosts.
  ...(process.env.GITHUB_PAGES === "true" ? { output: "export" as const } : {}),
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
