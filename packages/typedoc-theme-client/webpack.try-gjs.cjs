/* eslint-disable @typescript-eslint/no-var-requires */
const ribaWebpackConfig = require("@ribajs/webpack-config");
const { config } = require("./webpack.base.cjs");
const { resolve } = require("path");
const outputPath = resolve("../../docs/try-gjs/assets");

config.publicPath = outputPath;
config.output.path = outputPath;
config.webpackbar = {
  name: "Try GJS",
  color: "blue"
};

const webpackConfig = ribaWebpackConfig(config);
module.exports = webpackConfig;
