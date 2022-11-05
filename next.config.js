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
  output: 'standalone',

  env: {
    API_HOST: process.env.API_HOST ?? 'http://127.0.0.1:3000'
  }
};

module.exports = nextConfig;
