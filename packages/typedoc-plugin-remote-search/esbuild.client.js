/* eslint-disable @typescript-eslint/no-var-requires */

const esbuild = require("esbuild");

esbuild.buildSync({
  entryPoints: ["src/client/client.ts"],
  bundle: true,
  minify: false,
  sourcemap: "inline",
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  outfile: "assets/client.js",
});
