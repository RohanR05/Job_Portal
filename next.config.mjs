/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", // your ImgBB domain
        pathname: "/**",      // allow all paths
      },
    ],
  },
};

export default nextConfig;
