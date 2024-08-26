const envKeys = Object.keys(process.env)
console.log(`Fetching the known environment variables`)
envKeys.forEach(name => console.log(`${name}=${process.env[name]}`))

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcMinify: true,
  },

  poweredByHeader: false,
  output: 'standalone',

  env: {
    API_HOST: process.env.NEXT_PUBLIC_API_HOST,
    POSTHOG_HOST: process.env.POSTHOG_HOST
  },

  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://eu.i.posthog.com/decide",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
