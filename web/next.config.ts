import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/BradleyAPierce/future-of-id-images/**",
      },
    ],
  },
  turbopack: {
    // Ensure Next uses this app folder as root when multiple lockfiles exist on disk.
    root: process.cwd(),
  },
};

export default nextConfig;
