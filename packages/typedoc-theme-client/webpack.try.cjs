/* eslint-disable @typescript-eslint/no-var-requires */
const typedocTryGJSConfig = require("./webpack.try-gjs.cjs");
const typedocTryNodeGtkConfig = require("./webpack.try-node-gtk.cjs");

module.exports = [typedocTryGJSConfig, typedocTryNodeGtkConfig];
