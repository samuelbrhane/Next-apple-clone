/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["www.apple.com", "store.storeimages.cdn-apple.com"] },
};

module.exports = nextConfig;
