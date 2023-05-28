/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://eu-central-1.aws.data.mongodb-api.com/app/data-dncmd/endpoint/data/v1/action/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
