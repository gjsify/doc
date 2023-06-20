import { Logger } from "typedoc";
import { copyFileSync } from "fs";
import { resolve, basename } from "path";
import { mkdir, copySync } from "../utils";

export class AssetService {
  logger = new Logger();

  sourceAssetsDirectory = resolve(__dirname, "../../assets");

  copyAsset(filename: string, outputDirectory: string) {
    const src = resolve(this.sourceAssetsDirectory, filename);
    const destDir = resolve(outputDirectory, "assets");
    const dest = resolve(destDir, filename);
    mkdir(destDir);
    this.logger.info(`[GjsifyTheme] ${filename} -> ${dest}`);
    copyFileSync(src, dest);
  }

  copyAssets(filenames: string[], outputDirectory: string) {
    for (const filename of filenames) {
      this.copyAsset(filename, outputDirectory);
    }
  }

  copyAssetsRecursively(
    dirname: string | null,
    outputDirectory: string,
    excludeNames: string[] = []
  ) {
    outputDirectory = resolve(outputDirectory, "assets");
    dirname = dirname
      ? resolve(this.sourceAssetsDirectory, dirname)
      : this.sourceAssetsDirectory;
    copySync(dirname, outputDirectory, excludeNames);
  }

  // copyFavicon(filepath: string, outputDirectory: string) {
  //   const src = resolve(filepath);
  //   const destDir = resolve(outputDirectory, "assets");
  //   const dest = resolve(destDir, basename(filepath));
  //   mkdir(destDir);
  //   this.logger.info(`[GjsifyTheme] ${basename(filepath)} -> ${dest}`);
  //   copyFileSync(src, dest);
  // }

  // copyFavicons(outputDirectory: string) {
  //   const dir = resolve(this.sourceAssetsDirectory, "favicon");
  //   const files = readdirSync(dir);
  //   for (const file of files) {
  //     if (
  //       file.endsWith(".png") ||
  //       file.endsWith(".svg") ||
  //       file.endsWith(".ico") ||
  //       file.endsWith(".xml") ||
  //       file.endsWith(".webmanifest")
  //     ) {
  //       this.copyFavicon(resolve(dir, file), outputDirectory);
  //     }
  //   }
  // }

  // copyIcon(filepath: string, outputDirectory: string) {
  //   const src = resolve(filepath);
  //   const destDir = resolve(outputDirectory, "assets/iconset/svg");
  //   const dest = resolve(destDir, basename(filepath));
  //   mkdir(destDir);
  //   this.logger.info(`[GjsifyTheme] ${basename(filepath)} -> ${dest}`);
  //   copyFileSync(src, dest);
  // }

  // copyIconset(outputDirectory: string) {
  //   const dir = resolve(this.sourceAssetsDirectory, "iconset/svg");
  //   const files = readdirSync(dir);
  //   for (const file of files) {
  //     if (
  //       file.endsWith(".png") ||
  //       file.endsWith(".svg") ||
  //       file.endsWith(".ico") ||
  //       file.endsWith(".xml") ||
  //       file.endsWith(".webmanifest")
  //     ) {
  //       this.copyIcon(resolve(dir, file), outputDirectory);
  //     }
  //   }
  // }
}
