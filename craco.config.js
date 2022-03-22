const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
const { outputStaticUrl } = require("./src/config/outputStaticUrl");
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = "dist"; // 修改build的生成文件名称
      webpackConfig.output.path = resolve("./dist");
      webpackConfig.output.publicPath = outputStaticUrl();
      return webpackConfig;
    },
  },
  eslint: {
    enable: false,
  },
};
