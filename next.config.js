/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcMinify: true,
    profiling: true,
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },

  poweredByHeader: false,
  // Not supported in Next.js 13
  output: 'standalone',

  env: {
    API_HOST: process.env.API_HOST
  }
};

module.exports = nextConfig;
