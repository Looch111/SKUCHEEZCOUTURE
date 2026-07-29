/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['10.13.186.157', '10.116.67.157', '10.81.106.157', '*.ngrok-free.app'],
  images: {
    qualities: [75, 95],
  },
};

export default nextConfig;