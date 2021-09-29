
const webpack = require("webpack");
// const { parsed: myEnv } = require("dotenv").config();
const withOptimizedImages = require('next-optimized-images');
 
module.exports =   withOptimizedImages({
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  env: {
    customKey: "AIzaSyD8PhnFnWcQnL8Qz2m9s8tKThO1IKZuBvg",
    gridCustomKey: "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",
  },

});
