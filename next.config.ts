import type { NextConfig } from 'next';

const nextConfig: NextConfig & { turbopack?: boolean } = {
  turbopack: false, 
  dangerouslyAllowSVG: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
