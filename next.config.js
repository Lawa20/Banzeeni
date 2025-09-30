/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true, // For Vercel deployment
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  output: 'standalone', // For Vercel deployment
}

module.exports = nextConfig