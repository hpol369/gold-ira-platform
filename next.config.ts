import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://www.richdadretirement.com" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PATCH" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, x-api-key" },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/:path*.(jpg|jpeg|png|gif|svg|ico|webp|avif|woff|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // SEO: Redirect old learn slug to new standalone authority page
      {
        source: '/learn/is-gold-good-investment-2026',
        destination: '/is-gold-a-good-investment',
        permanent: true,
      },
      // SEO: Consolidate rollover hub
      {
        source: '/rollover',
        destination: '/gold-ira-rollover',
        permanent: true,
      },
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
      // CRITICAL: Fix top-traffic 404s found in GA (Mar 2026)
      { source: '/learn/rmd-penalty-2026', destination: '/learn/rmd-penalty-if-i-forget', permanent: true },
      { source: '/learn/voya-401k-rollover-guide', destination: '/learn/voya-401k-rollover', permanent: true },
      { source: '/learn/railroad-retirement-guide', destination: '/learn/railroad-retirement-calculator', permanent: true },
      { source: '/learn/comex-silver-inventory', destination: '/learn/comex-silver-inventory-data', permanent: true },
      { source: '/learn/gold-ira-rollover-rules', destination: '/gold-ira-rules', permanent: true },
      // 401k-to-gold cannibalization fix — consolidate to single authority page
      { source: '/guide/transfer-401k-to-gold', destination: '/guide/401k-to-gold-rollover', permanent: true },
      { source: '/guide/convert-401k-to-gold', destination: '/guide/401k-to-gold-rollover', permanent: true },
      { source: '/guide/move-401k-to-gold', destination: '/guide/401k-to-gold-rollover', permanent: true },
    ];
  },
};

export default nextConfig;
