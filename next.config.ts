import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
