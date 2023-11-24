/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/auth",
  assetPrefix: "/auth/",
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
