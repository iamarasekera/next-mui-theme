/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    assetPrefix: 'https://d1dao37twwf25.cloudfront.net',
    images: {
      unoptimized: true, // Disable image optimization in export mode
    },
    experimental: {
      outputFileTracingRoot: undefined,
    },
  }
  
  module.exports = nextConfig

