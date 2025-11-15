/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", // your ImgBB domain
        pathname: "/**",
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // allow all paths
      },
    ],
  },
};

export default nextConfig;
