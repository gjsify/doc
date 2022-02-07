/* eslint-disable @typescript-eslint/no-var-requires */
const ribaWebpackConfig = require("@ribajs/webpack-config");
const { config } = require("./webpack.csr");
const { resolve } = require("path");
const outputPath = resolve("../../docs/try/assets");

config.publicPath = outputPath;
config.output.path = outputPath;

console.debug("config", config);

const webpackConfig = ribaWebpackConfig(config);
module.exports = webpackConfig;
