/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcMinify: true,
  },

  poweredByHeader: false,
  // Not supported in Next.js 13
  output: 'standalone',

  env: {
    API_HOST: process.env.NEXT_PUBLIC_API_HOST
  }
};

module.exports = nextConfig;
