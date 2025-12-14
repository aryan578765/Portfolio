import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true,
  experimental: {
    useLightningcss: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
