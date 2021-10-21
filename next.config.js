
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
