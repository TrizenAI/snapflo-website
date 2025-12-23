/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 REQUIRED
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
