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
      
    ]
  }
};

export default withFlowbiteReact(nextConfig);