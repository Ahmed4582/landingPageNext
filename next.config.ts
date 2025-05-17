/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.dummyjson.com',             // ← لازم تضيف الدومين دا
      'storage.googleapis.com',
      'images.pexels.com',
      'services.zaindev.com.sa',
      'img.freepik.com'
    ],
  },
}

module.exports = nextConfig
