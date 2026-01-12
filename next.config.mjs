/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'cdn.dummyjson.com',
      'i.dummyjson.com',
      'robohash.org',
      'dummyjson.com',
    ],
  },
};

export default nextConfig;
