/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/delivery-manager',
  assetPrefix: '/delivery-manager/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
