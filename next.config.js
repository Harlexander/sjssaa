/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    disableImageWarnings: true,
  },
}

module.exports = nextConfig
