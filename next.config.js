/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    swcMinify: true,
    instrumentationHook: true,
  },

  poweredByHeader: false,
  output: 'standalone',
  deploymentId: process.env.COOLIFY_CONTAINER_NAME,

  env: {
    API_HOST: process.env.COOLIFY_FQDN ?? process.env.NEXT_PUBLIC_API_HOST,
    POSTHOG_HOST: process.env.POSTHOG_HOST,
    NEXT_PUBLIC_SOURCE_COMMIT: process.env.SOURCE_COMMIT,
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
