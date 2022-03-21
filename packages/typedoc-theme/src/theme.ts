/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DefaultTheme,
  Renderer,
  PageEvent,
  RendererEvent,
  Logger,
  ContainerReflection,
  Reflection
} from "typedoc";
import { join } from "path";
import { copyFileSync, readdirSync, writeFileSync } from "fs";
import { resolve, basename } from "path";
import { mkdir } from "./utils/index.js";

import { GjsifyThemeContext } from "./context.js";

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
      [RendererEvent.BEGIN]: this.onGjsifyRendererBegin
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

  copyFavicon(filepath: string, outputDirectory: string) {
    const src = resolve(filepath);
    const destDir = resolve(outputDirectory, "assets");
    const dest = resolve(destDir, basename(filepath));
    mkdir(destDir);
    this.logger.info(`[GjsifyTheme] ${basename(filepath)} -> ${dest}`);
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

  copyIcon(filepath: string, outputDirectory: string) {
    const src = resolve(filepath);
    const destDir = resolve(outputDirectory, "assets/iconset/svg");
    const dest = resolve(destDir, basename(filepath));
    mkdir(destDir);
    this.logger.info(`[GjsifyTheme] ${basename(filepath)} -> ${dest}`);
    copyFileSync(src, dest);
  }

  copyIconset(outputDirectory: string) {
    const dir = resolve(__dirname, "../assets/iconset/svg");
    const files = readdirSync(dir);
    for (const file of files) {
      if (
        file.endsWith(".png") ||
        file.endsWith(".svg") ||
        file.endsWith(".ico") ||
        file.endsWith(".xml") ||
        file.endsWith(".webmanifest")
      ) {
        this.copyIcon(resolve(dir, file), outputDirectory);
      }
    }
  }

  onGjsifyPageEnd(page: PageEvent<Reflection>) {
    this.logger.info(`[GjsifyTheme] Render page "${page.url}"...`);
    if (page.url === "index.html") {
      this.onGjsifyPageHomeEnd(page);
    }
    
  }

  onGjsifyPageHomeEnd(page: PageEvent<Reflection>) {
    this.writeNavigationPrimaryGlobalScript(page);
  }

  onGjsifyRendererEnd(renderer: RendererEvent) {
    this.logger.info("[GjsifyTheme] onRendererEnd");
    this.copyAssets(
      [
        "logo.svg",
        "logo-light.svg",
        "main.bundle.js",
        "main.css",
        "vendors.bundle.js"
      ],
      renderer.outputDirectory
    );
    this.copyFavicons(renderer.outputDirectory);
    this.copyIconset(renderer.outputDirectory);
  }

  writeNavigationPrimaryGlobalScript(page: PageEvent<Reflection>) {
    const filename = "primary-navigation.json";
    this.logger.info(`[GjsifyTheme] Generate ${filename}...`);
    const context = this.getRenderContext();
    const outputDirectory = this.application.options.getValue("out");
    
    const target = join(
      outputDirectory,
      "assets",
      filename
    );
    const navGlobal = context.navigationPrimaryGlobalObject(page);
    writeFileSync(target, JSON.stringify(navGlobal, null, 0));
  }

  onGjsifyRendererBegin(renderer: RendererEvent) {
    this.logger.info("[GjsifyTheme] onRendererBegin");
  }
}
