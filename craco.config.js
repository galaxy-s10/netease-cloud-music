const CracoLessPlugin = require('craco-less');
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  publicPath: './',
  plugins: [],
  webpack: {
    publicPath: './',
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components")
    }
  }
}