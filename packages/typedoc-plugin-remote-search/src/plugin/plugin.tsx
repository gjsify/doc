import type {
  Logger,
  DefaultThemeRenderContext,
  Comment,
  DefaultTheme,
} from "typedoc";
import {
  JSX,
  DeclarationReflection,
  ProjectReflection,
  IndexEvent,
  Renderer,
  RendererEvent,
} from "typedoc";
import { readFileSync, mkdirSync } from "fs";
import { writeFileSync } from "../utils/fs";
import { Converter } from "../converter";
import { PluginOptionsFunction, SearchData, SearchDocument } from "../types";
import { join } from "path";

import { Builder, trimmer } from "lunr";

/**
 * A plugin that exports an index of the project to a json file.
 *
 * The resulting javascript file can be used to build a simple server side (but also client-side if you want) search function.
 */
export class RemoteSearchIndexPlugin {
  private firstBodyEnd = false;

  private readonly outputDirectory: string;

  private readonly settingsFilename = "search-settings.js";
  private readonly customElementFilename = "search-custom-element.js";
  private scriptCustomElement: string;
  private converter: Converter;

  searchComments = true;

  constructor(
    public readonly logger: Logger,
    private readonly renderer: Renderer,
    private readonly getOptions: PluginOptionsFunction
  ) {
    this.outputDirectory = this.renderer.application.options.getValue("out");

    this.converter = new Converter(logger);

    this.scriptCustomElement = this.getScriptCustomElement();

    this.renderer.hooks.on("body.end", (context) => {
      this.logger.info("RemoteSearchIndexPlugin: onBodyEnd");
      return this.onBodyEnd(context);
    });

    this.renderer.on(Renderer.EVENT_BEGIN, (event: RendererEvent) => {
      this.logger.info("RemoteSearchIndexPlugin: onRendererBegin");
      return this.onRendererBegin(event);
    });
  }

  /**
   * Triggered after a document has been rendered, just before it is written to disc.
   *
   * @param event  An event object describing the current render operation.
   */
  private onRendererBegin(event: RendererEvent) {
    if (event.isDefaultPrevented) {
      return;
    }

    const rows: SearchDocument[] = [];

    const initialSearchResults = Object.values(
      event.project.reflections
    ).filter((refl) => {
      return (
        refl instanceof DeclarationReflection &&
        refl.url &&
        refl.name &&
        !refl.flags.isExternal
      );
    }) as DeclarationReflection[];

    const indexEvent = new IndexEvent(
      IndexEvent.PREPARE_INDEX,
      initialSearchResults
    );

    this.renderer.trigger(indexEvent);

    if (indexEvent.isDefaultPrevented) {
      return;
    }

    const builder = new Builder();
    builder.pipeline.add(trimmer);

    builder.ref("id");
    for (const [key, boost] of Object.entries(indexEvent.searchFieldWeights)) {
      builder.field(key, { boost });
    }

    for (const reflection of indexEvent.searchResults) {
      if (!reflection.url) {
        continue;
      }

      const boost = reflection.relevanceBoost ?? 1;
      if (boost <= 0) {
        continue;
      }

      let parent = reflection.parent;
      if (parent instanceof ProjectReflection) {
        parent = undefined;
      }

      const row: SearchDocument = {
        kind: reflection.kind,
        name: reflection.name,
        url: reflection.url,
        classes: "",
      };

      if (
        typeof (this.renderer.theme as DefaultTheme).getReflectionClasses ===
        "function"
      ) {
        row.classes = (
          this.renderer.theme as DefaultTheme
        ).getReflectionClasses(reflection);
      }

      if (parent) {
        row.parent = parent.getFullName();
      }

      builder.add(
        {
          name: reflection.name,
          comment: this.getCommentSearchText(reflection),
          ...indexEvent.searchFields[rows.length],
          id: rows.length,
        },
        { boost }
      );
      rows.push(row);
    }

    const index = builder.build();

    // const jsonFileName = Path.join(
    //   event.outputDirectory,
    //   "assets",
    //   "search.js"
    // );

    // const jsonData = JSON.stringify({
    //   rows,
    //   index,
    // });

    // this.logger.info(`RemoteSearchIndexPlugin: writing ${jsonFileName}`);

    // writeFileSync(
    //   jsonFileName,
    //   `window.searchData = JSON.parse(${JSON.stringify(jsonData)});`
    // );

    const searchData: SearchData = {
      rows,
      index,
    };
    const options = this.getOptions();
    const targetFilename = options.compress ? "search.json.7z" : "search.json";
    const jsonFileName = join(this.outputDirectory, "assets", targetFilename);
    this.converter.writeSearch(searchData, jsonFileName, options.compressLevel);
  }

  private getCommentSearchText(reflection: DeclarationReflection) {
    if (!this.searchComments) return;

    const comments: Comment[] = [];
    if (reflection.comment) comments.push(reflection.comment);
    reflection.signatures?.forEach(
      (s) => s.comment && comments.push(s.comment)
    );
    reflection.getSignature?.comment &&
      comments.push(reflection.getSignature.comment);
    reflection.setSignature?.comment &&
      comments.push(reflection.setSignature.comment);

    if (!comments.length) {
      return;
    }

    return comments
      .flatMap((c) => {
        return [...c.summary, ...c.blockTags.flatMap((t) => t.content)];
      })
      .map((part) => part.text)
      .join("\n");
  }

  private onBodyEnd(context: DefaultThemeRenderContext) {
    // Workaround until the RendererHooks are implemented, see https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md
    if (!this.firstBodyEnd) {
      this.firstBodyEnd = true;
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
    const targetSettingsAssetDir = join(this.outputDirectory, "assets");
    const targetSettingsPath = join(
      targetSettingsAssetDir,
      this.settingsFilename
    );
    mkdirSync(targetSettingsAssetDir, { recursive: true });
    writeFileSync(targetSettingsPath, scriptSettings);
    if (options.script && this.scriptCustomElement) {
      const targetCustomElement = join(
        targetSettingsAssetDir,
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
