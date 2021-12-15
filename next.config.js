const webpack = require("webpack");
// const { parsed: myEnv } = require("dotenv").config();
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
});
