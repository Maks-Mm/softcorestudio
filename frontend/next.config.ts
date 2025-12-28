/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    turbopack: {
      root: process.cwd(), // This fixes the lockfile warning
    },
  },
};

module.exports = nextConfig;