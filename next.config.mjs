/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

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
