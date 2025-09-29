const isProd = process.env.NODE_ENV === "production";
const repo = "portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
