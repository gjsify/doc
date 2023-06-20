/**
 * This config is based on:
 * - https://github.com/wesselvanree/shopify-theme-tailwind/blob/main/vite.config.ts
 */

import { defineConfig } from "vite";
import { resolve } from "path";

const sourceDir = resolve(__dirname);
const outDir = resolve(sourceDir, "../typedoc-theme/assets");

export default defineConfig(({ mode }) => {
  return {
    build: {
      outDir,
      emptyOutDir: false,
      sourcemap: true, // mode !== "production",
      rollupOptions: {
        input: ["scripts/main.ts", "styles/main.scss"],
        output: {
          entryFileNames: "[name].bundle.js",
          assetFileNames: "[name].[ext]",
          chunkFileNames: `[name]-[hash].chunk.js`,
        },
      },
      watch:
        mode === "production"
          ? null
          : {
              include: "src/**",
              exclude: ["assets/*"],
            },
    },
    plugins: [],
  };
});
