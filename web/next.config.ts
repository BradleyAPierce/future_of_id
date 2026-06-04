import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure Next uses this app folder as root when multiple lockfiles exist on disk.
    root: process.cwd(),
  },
};

export default nextConfig;
