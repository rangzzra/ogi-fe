import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ndev-01-api.ozoraglobal.com",
      },
    ],
  },
};

export default nextConfig;
