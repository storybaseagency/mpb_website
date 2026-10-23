import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statischer Export: der Ordner `out/` kann direkt per FTP zu all-inkl hochgeladen werden.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
