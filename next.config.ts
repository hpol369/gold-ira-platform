import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/guide/silver-ira-rules',
        destination: '/silver-ira/rules',
        permanent: true,
      },
      {
        source: '/guide/silver-ira-rollover',
        destination: '/silver-ira/rollover',
        permanent: true,
      },
      // Ad URL redirects (fixing 404s)
      {
        source: '/gold-ira/compare',
        destination: '/best-gold-ira-companies',
        permanent: true,
      },
      {
        source: '/silver-ira/guide',
        destination: '/guide/silver-ira-guide',
        permanent: true,
      },
      {
        source: '/gold-ira/fee-guide',
        destination: '/guide/gold-ira-fees',
        permanent: true,
      },
      {
        source: '/silver-ira/approved',
        destination: '/guide/ira-approved-silver',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
