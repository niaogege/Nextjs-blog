/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "dist",
  ...(process.env.NODE_ENV === "production" && {
    basePath: "/next",
    assetPrefix: "/next",
  }),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.byteimg.com",
      },
    ],
  },
  // 路由重写
  async rewrites() {
    return [
      {
        source: "/blog/page/:page",
        destination: "/blog",
      },
    ];
  },
};

module.exports = nextConfig;
