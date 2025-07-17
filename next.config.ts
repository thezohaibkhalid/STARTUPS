import type { NextConfig } from 'next';

const nextConfig: NextConfig & { turbopack?: boolean } = {
  turbopack: false, 
  dangerouslyAllowSVG: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  output: 'export',
  basePath: '/STARTUPS',  
};

export default nextConfig;
