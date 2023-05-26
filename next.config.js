/** @type {import('next').NextConfig} */
const { createProxyMiddleware } = require("http-proxy-middleware");

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://eu-central-1.aws.data.mongodb-api.com/app/data-dncmd/endpoint/data/v1/action/:path*",
      },
    ];
  },
  async middleware() {
    return [
      createProxyMiddleware("/api", {
        target:
          "https://eu-central-1.aws.data.mongodb-api.com/app/data-dncmd/endpoint/data/v1/action",
        changeOrigin: true,
        secure: false,
      }),
    ];
  },
};

module.exports = nextConfig;
