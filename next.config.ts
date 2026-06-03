import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staunchmen.com'
      },
      {
        protocol: 'https',
        hostname: 'pngimg.com'
      },
       {
        protocol: "https",
        hostname: "dev-portal.motforex.com",
      },
      {
        protocol: "https",
        hostname: "cdn.motforex.com",
      },
      {
        protocol: "https",
        hostname: "staunchmen.com",
      },
      {
        protocol: "https",
        hostname: "pnngrok.com", 
      },
      
      
    ]
  }
};

export default withFlowbiteReact(nextConfig);