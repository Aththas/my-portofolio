/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/my-portofolio',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true, 
  }
}

module.exports = nextConfig
