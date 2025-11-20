/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    serverComponentsExternalPackages: ["mongodb"],
  },

  // Tell Next.js we want Turbopack
  turbopack: {},
};

export default nextConfig;
