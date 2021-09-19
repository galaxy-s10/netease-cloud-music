console.log("读取babel.config.js");
module.exports = {
  presets: [
    // [
    //   '@babel/preset-env',
    //   {
    //     // false: 不用任何的polyfill相关的代码
    //     // usage: 代码中需要哪些polyfill, 就引用相关的api
    //     // entry: 手动在入口文件中导入 core-js/regenerator-runtime, 根据目标浏览器引入所有对应的polyfill
    //     useBuiltIns: 'usage',
    //     corejs: 3,
    //   },
    // ],
    // ['@babel/preset-react'],
  ],
  plugins: [
    [
      "import",
      { libraryName: "antd", libraryDirectory: "lib", style: "css" },
      "antd",
    ],
    // [
    //   "@babel/plugin-transform-runtime", //和@babel/preset-env的useBuiltIns二选一。
    //   {
    //     corejs: 3,
    //   },
    // ],
    // "react-hot-loader/babel", //使用react-hot-loader需要配置的，但是现在不用它了
  ],
};
