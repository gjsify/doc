import { Renderer, Logger, JSX } from "typedoc";
import { writeFileSync, readFileSync, unlinkSync, existsSync } from "fs";
import { resolve } from "path";

/**
 * A plugin that exports an index of the project to a json file.
 *
 * The resulting javascript file can be used to build a simple server side (but also client-side if you want) search function.
 */
export class RemoteSearchIndexPlugin {
  private firstPageBegan = false;

  constructor(public logger: Logger, private renderer: Renderer) {
    // Workaround until the RendererHooks are implemented, see https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md
    this.renderer.hooks.on(
      "head.end",
      (/*context: DefaultThemeRenderContext*/) => {
        if (!this.firstPageBegan) {
          const outputDirectory =
            this.renderer.application.options.getValue("out");

          this.convertSearch(outputDirectory);
          this.firstPageBegan = true;
        }
        return <JSX.Raw html="" />;
      }
    );
  }

  /**
   * Instead of a search.js, we are using a search.json to load them more easily with node.js.
   * For this we need to convert the search.js to a search.json
   */
  private convertSearch(outputDirectory?: string) {
    if (!outputDirectory) {
      this.logger.error("outputDirectory not found!");
      return;
    }

    const originalFileName = resolve(outputDirectory, "assets", "search.js");
    const jsonFileName = resolve(outputDirectory, "assets", "search.json");

    const removeStart = 'window.searchData = JSON.parse("';
    const removeEnd = '");';

    if (!existsSync(originalFileName)) {
      this.logger.error(`File not found "${originalFileName}"!`);
      return;
    }

    this.logger.info("Load original search.js file...");
    let searchData = readFileSync(originalFileName, "utf8");

    this.logger.info("Convert original search.js file to search.json...");
    searchData = searchData
      .substring(removeStart.length, searchData.length - removeEnd.length)
      .replace(/\\"/g, '"');

    writeFileSync(jsonFileName, searchData);

    this.logger.info("Delete search.js file...");
    unlinkSync(originalFileName);
  }
}
