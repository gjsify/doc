import { Renderer, Logger, JSX } from "typedoc";
import { writeFileSync, readFileSync, unlinkSync, existsSync } from "fs";
import { join } from "path";
import { PluginOptions } from "./types";

/**
 * A plugin that exports an index of the project to a json file.
 *
 * The resulting javascript file can be used to build a simple server side (but also client-side if you want) search function.
 */
export class RemoteSearchIndexPlugin {
  private firstPageBegan = false;

  private script: string;
  private outputDirectory: string;

  constructor(
    public logger: Logger,
    private renderer: Renderer,
    private readonly options: PluginOptions
  ) {
    this.outputDirectory = this.renderer.application.options.getValue("out");

    this.script = `window.remoteSearchOptions = window.remoteSearchOptions || {
      hostname: "${options.hostname || ""}",
      port: ${options.port || 0},
      replaceElement: ${options.replaceElement || false},
      script: ${options.script || false},
    };`;

    if (options.script)
      this.script += readFileSync(
        join(__dirname, "../assets/client.js"),
        "utf8"
      );

    this.renderer.hooks.on("head.end", () => {
      // Workaround until the RendererHooks are implemented, see https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md
      if (!this.firstPageBegan) {
        this.firstPageBegan = true;
        this.onRenderDone();
      }
      return this.onHeadEnd();
    });
  }

  private onHeadEnd() {
    return (
      <script>
        <JSX.Raw html={this.script} />
      </script>
    );
  }

  private onRenderDone() {
    this.convertSearch();
  }

  /**
   * Instead of a search.js, we are using a search.json to load them more easily with node.js.
   * For this we need to convert the search.js to a search.json
   */
  private convertSearch() {
    if (!this.outputDirectory) {
      this.logger.error("outputDirectory not found!");
      return;
    }

    const originalFileName = join(this.outputDirectory, "assets", "search.js");
    const jsonFileName = join(this.outputDirectory, "assets", "search.json");

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
