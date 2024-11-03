/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['themes.pixelwars.org', 'media.better.com'], // Add any other domains you want to allow
  },
  trailingSlash: true, // Adds a trailing slash to the end of URLs
};

module.exports = nextConfig;

