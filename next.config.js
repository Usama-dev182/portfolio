/** @type {import('next').NextConfig} */
const nextConfig = {
  
  
  experimental: { 
    appDir: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  



};

module.exports = nextConfig;
