/* eslint-disable @typescript-eslint/no-var-requires */
const ribaWebpackConfig = require("@ribajs/webpack-config");
const { config } = require("./webpack.base");
const { resolve } = require("path");
const outputPath = resolve("../typedoc-theme/assets");

config.publicPath = outputPath;
config.output.path = outputPath;
config.webpackbar = {
  name: "Typedoc",
  color: "purple"
};

const webpackConfig = ribaWebpackConfig(config);
module.exports = webpackConfig;
