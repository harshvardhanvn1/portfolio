// Allow overriding the basePath in environments where the site is served from a sub-path.
// Default to root (""), which is correct for the custom domain deployment.
const computedBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = computedBasePath || undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: computedBasePath,
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
