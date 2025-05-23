/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cms-webserver-statics.s3.amazonaws.com'],
    remotePatterns: [
      // Add any domains you might use for images
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // Often used by Unsplash for certain images
      },
      // Add other domains if needed
    ],
  },
};

export default nextConfig;
