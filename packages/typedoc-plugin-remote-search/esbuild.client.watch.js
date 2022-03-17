/* eslint-disable @typescript-eslint/no-var-requires */

const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/client/main.ts"],
  bundle: true,
  minify: false,
  watch: {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error)
      else console.log('watch build succeeded:', result)
    }
  },
  sourcemap: "inline",
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  outfile: "assets/search-custom-element.js"
}).then(result => {
  console.log('watching...')
});
