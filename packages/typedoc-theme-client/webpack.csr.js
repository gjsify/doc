const ribaWebpackConfig = require("@ribajs/webpack-config");
const { resolve } = require("path");

const source = resolve(__dirname);
const tsSourceDir = resolve(source, "scripts");
const assets = resolve(source, "assets");
const outputPath = resolve("../typedoc-theme/assets");
const scssSourceDir = resolve(source, "styles");
const tsIndexPath = resolve(tsSourceDir, "index.ts");
const scssIndexPath = resolve(scssSourceDir, "main.scss");

const config = {
  template: "local",
  copyAssets: {
    enable: true,
    images: true,
    scss: false,
    iconset: true,
    foldername: assets,
  },
  tsSourceDir,
  scssSourceDir,
  tsIndexPath,
  scssIndexPath,
  output: {
    path: outputPath,
    filename: "[name].bundle.js",
  },
  styles: {
    build: true,
    extract: true,
    resolveUrl: "onlyImports",
  },
};

const webpackConfig = ribaWebpackConfig(config);
module.exports = webpackConfig;
