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
      // Silver sub-pages removed — redirect to hub pages
      { source: '/silver-price/prediction-2027', destination: '/silver-price', permanent: true },
      { source: '/silver-price/prediction-2030', destination: '/silver-price', permanent: true },
      { source: '/silver-price/prediction-2040', destination: '/silver-price', permanent: true },
      { source: '/silver-price/gold-silver-ratio', destination: '/silver-price', permanent: true },
      { source: '/silver-price/historical-analysis', destination: '/silver-price', permanent: true },
      { source: '/silver-price/expert-forecasts', destination: '/silver-price', permanent: true },
      { source: '/silver-products/american-silver-eagle', destination: '/silver-products', permanent: true },
      { source: '/silver-products/canadian-maple-leaf', destination: '/silver-products', permanent: true },
      { source: '/silver-products/silver-bars', destination: '/silver-products', permanent: true },
      { source: '/silver-products/silver-rounds', destination: '/silver-products', permanent: true },
      { source: '/silver-products/junk-silver', destination: '/silver-products', permanent: true },
      { source: '/silver-products/ira-approved-silver', destination: '/silver-products', permanent: true },
      { source: '/silver-products/coins-vs-bars', destination: '/silver-products', permanent: true },
      { source: '/silver-products/premium-comparison', destination: '/silver-products', permanent: true },
      { source: '/silver-experts/keith-neumeyer', destination: '/silver-experts', permanent: true },
      { source: '/silver-experts/peter-schiff-silver', destination: '/silver-experts', permanent: true },
      { source: '/silver-squeeze/reddit-wallstreetsilver-review', destination: '/silver-squeeze', permanent: true },
    ];
  },
};

export default nextConfig;
