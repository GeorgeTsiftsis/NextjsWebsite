const webpack = require("webpack");
const { parsed: myEnv } = require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
  future: { webpack5: true },
};
