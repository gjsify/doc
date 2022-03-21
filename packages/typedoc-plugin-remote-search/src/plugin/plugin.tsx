import { Renderer, Logger, JSX, DefaultThemeRenderContext } from "typedoc";
import { writeFileSync, readFileSync } from "fs";
import { Converter } from "../converter";
import { PluginOptionsFunction } from "../types";
import { join } from "path";

/**
 * A plugin that exports an index of the project to a json file.
 *
 * The resulting javascript file can be used to build a simple server side (but also client-side if you want) search function.
 */
export class RemoteSearchIndexPlugin {
  private firstPageBegan = false;

  private readonly outputDirectory: string;

  private readonly settingsFilename = "search-settings.js";
  private readonly customElementFilename = "search-custom-element.js";
  private scriptCustomElement: string;
  private converter: Converter;

  constructor(
    public readonly logger: Logger,
    private readonly renderer: Renderer,
    private readonly getOptions: PluginOptionsFunction
  ) {
    this.outputDirectory = this.renderer.application.options.getValue("out");

    this.converter = new Converter(logger);

    this.scriptCustomElement = this.getScriptCustomElement();

    this.renderer.hooks.on("body.end", (context) => {
      return this.onBodyEnd(context);
    });
  }

  private onBodyEnd(context: DefaultThemeRenderContext) {
    // Workaround until the RendererHooks are implemented, see https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md
    if (!this.firstPageBegan) {
      this.firstPageBegan = true;
      this.onRenderDone();
    }
    return this.getScriptTags(context);
  }

  private async onRenderDone() {
    this.copyScripts();
    await this.convertSearch();
  }

  /**
   * Copies the script elements for the custom element and search settings to the assets path of the rendered documentation
   */
  private copyScripts() {
    const options = this.getOptions();
    const scriptSettings = this.getScriptSettings();
    const targetSettings = join(
      this.outputDirectory,
      "assets",
      this.settingsFilename
    );
    writeFileSync(targetSettings, scriptSettings);
    if (options.script && this.scriptCustomElement) {
      const targetCustomElement = join(
        this.outputDirectory,
        "assets",
        this.customElementFilename
      );
      writeFileSync(targetCustomElement, this.scriptCustomElement);
    }
  }

  private getScriptSettings() {
    const options = this.getOptions();
    return `window.remoteSearchOptions = window.remoteSearchOptions || {
  serverBaseUrl: "${options.serverBaseUrl}",
  replaceElement: ${options.replaceElement},
  script: ${options.script},
};`;
  }

  private getScriptCustomElement() {
    return readFileSync(
      join(__dirname, "../../assets", this.customElementFilename),
      "utf8"
    );
  }

  /**
   * Adds the script elements for the custom element and search settings to the html
   */
  private getScriptTags(context: DefaultThemeRenderContext) {
    const options = this.getOptions();
    if (options.script && this.scriptCustomElement) {
      return (
        <>
          <script
            src={context.relativeURL("assets/" + this.settingsFilename)}
          ></script>
          <script
            src={context.relativeURL("assets/" + this.customElementFilename)}
          ></script>
        </>
      );
    }
    return (
      <script
        src={context.relativeURL("assets/" + this.settingsFilename)}
      ></script>
    );
  }

  /**
   * Instead of a search.js, we are using a search.json to load them more easily with node.js.
   * For this we need to convert the search.js to a search.json
   */
  private async convertSearch() {
    const options = this.getOptions();
    if (!this.outputDirectory) {
      this.logger.error("[RemoteSearch] outputDirectory not found!");
      return;
    }

    const source = join(this.outputDirectory, "assets", "search.js");
    const targetFilename = options.compress ? "search.json.7z" : "search.json";
    const target = join(this.outputDirectory, "assets", targetFilename);
    const deleteSource = true;

    await this.converter.convertSearch(
      source,
      target,
      deleteSource,
      options.compressLevel
    );
  }
}
