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
}
