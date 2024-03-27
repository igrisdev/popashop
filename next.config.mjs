/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: 'dbwupri3k',
    NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET: 'vsucuk0n',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

export default nextConfig
