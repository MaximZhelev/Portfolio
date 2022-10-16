/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    WEBHOOK_URL: process.env.WEBHOOK_URL
  }
};

module.exports = nextConfig;
