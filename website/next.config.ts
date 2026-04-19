import type { NextConfig } from "next";

// Only apply the repo-name base path when deploying to GitHub Pages.
// Vercel (and local dev) serve the site at the root, so basePath must be "".
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/Byurakan-Astrophysical-Observatory" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
};

export default nextConfig;
