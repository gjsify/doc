/* eslint-disable @typescript-eslint/no-var-requires */
const ribaWebpackConfig = require("@ribajs/webpack-config");
const { config } = require("./webpack.base.cjs");
const { resolve } = require("path");
const outputPath = resolve("../../docs/try-node-gtk/assets");

config.publicPath = outputPath;
config.output.path = outputPath;
config.webpackbar = {
  name: "Try Node-GTK",
  color: "orange"
};

const webpackConfig = ribaWebpackConfig(config);
module.exports = webpackConfig;
