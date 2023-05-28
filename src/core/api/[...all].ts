import { createProxyMiddleware } from "http-proxy-middleware";

export default createProxyMiddleware("/api", {
  target:
    "https://eu-central-1.aws.data.mongodb-api.com/app/data-dncmd/endpoint/data/v1/action",
  changeOrigin: true,
  secure: false,
});
