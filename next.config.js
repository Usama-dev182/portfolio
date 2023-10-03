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
  images: {
    domains: ['dev.ptechfusion.com']
  },

  // distDir: "build",
  // exportPathMap: {
  //   '/': 'app/page.tsx',
  //   '/about': '/app/about/page.tsx',
  //   '/blog': 'app/blog/page.tsx',
  //   '/blog-details ': '/app/blog-details/page.tsx',
  //   '/blog-sidebar': '/app/blog-sidebar/page.tsx',
  //   '/contact': '/app/contact/page.tsx',
  //   '/error': '/app/error/page.tsx',
  //   '/signin': '/app/signin/page.tsx',
  //   '/signup': '/app/signup/page.tsx',
  // },

  // output: 'export',
  output: 'export',

};

module.exports = nextConfig;
