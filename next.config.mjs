/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakeimg.pl'
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/junxio/**'
      }
    ]
  }
}

export default nextConfig
