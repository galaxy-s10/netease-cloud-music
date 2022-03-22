const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
const { outputStaticUrl } = require("./src/config/outputStaticUrl");
// import { outputStaticUrl } from "./config/outputStaticUrl";

module.exports = {
  webpack: {
    publicPath: outputStaticUrl(),
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
  },
};
