/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static generation for auth pages
  output: 'standalone', // or remove if not needed
  // Add if you're having hydration issues
  reactStrictMode: true,
};

module.exports = nextConfig;