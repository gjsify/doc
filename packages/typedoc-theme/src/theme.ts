import {
  DefaultTheme,
  Renderer,
  PageEvent,
  RendererEvent,
  Logger,
  ContainerReflection,
} from "typedoc";
import { copyFileSync, readdirSync } from "fs";
import { resolve, basename, join } from "path";

import { GjsifyThemeContext } from "./context";

/**
 * A near clone of the default theme, that adds some custom text after the footer.
 */
export class GjsifyTheme extends DefaultTheme {
  private _contextCache?: GjsifyThemeContext;

  logger: Logger;

  constructor(renderer: Renderer) {
    super(renderer);
    this.logger = this.application.logger;

    this.listenTo(this.owner, {
      [PageEvent.END]: this.onGjsifyPageEnd,
      [RendererEvent.END]: this.onGjsifyRendererEnd,
      [RendererEvent.BEGIN]: this.onGjsifyRendererBegin,
    });
  }

  override getRenderContext(): GjsifyThemeContext {
    this._contextCache ||= new GjsifyThemeContext(
      this,
      this.application.options
    );
    return this._contextCache;
  }

  copyAsset(filename: string, outputDirectory: string) {
    const src = resolve(__dirname, "../assets", filename);
    const dest = resolve(outputDirectory, "assets", filename);
    this.logger.info(`[GjsifyTheme] ${filename} -> ${dest}`);
    copyFileSync(src, dest);
  }

  copyAssets(filenames: string[], outputDirectory: string) {
    for (const filename of filenames) {
      this.copyAsset(filename, outputDirectory);
    }
  }

  copyFavicon(filepath: string, outputDirectory: string) {
    const src = resolve(filepath);
    const dest = resolve(outputDirectory, "assets", basename(filepath));
    this.logger.info(`[GjsifyTheme] ${filepath} -> ${dest}`);
    copyFileSync(src, dest);
  }

  copyFavicons(outputDirectory: string) {
    const dir = resolve(__dirname, "../assets/favicon");
    const files = readdirSync(dir);
    for (const file of files) {
      if (
        file.endsWith(".png") ||
        file.endsWith(".svg") ||
        file.endsWith(".ico") ||
        file.endsWith(".xml") ||
        file.endsWith(".webmanifest")
      ) {
        this.copyFavicon(resolve(dir, file), outputDirectory);
      }
    }
  }

  onGjsifyPageEnd(page: PageEvent<ContainerReflection>) {
    this.logger.info(`[GjsifyTheme] Render page "${page.filename}"...`);
  }

  onGjsifyRendererEnd(renderer: RendererEvent) {
    this.logger.info("[GjsifyTheme] onRendererEnd");
    this.copyAssets(
      ["logo.svg", "main.bundle.js", "main.css", "vendors.bundle.js"],
      renderer.outputDirectory
    );
    this.copyFavicons(renderer.outputDirectory);
  }

  onGjsifyRendererBegin(renderer: RendererEvent) {
    this.logger.info("[GjsifyTheme] onRendererBegin");
  }
}
