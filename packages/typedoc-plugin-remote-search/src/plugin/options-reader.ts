import { Options, OptionsReader, Logger, ParameterType } from "typedoc";
import type { PluginOptions } from "../types";
import { existsSync, statSync } from "fs";
import { join, dirname, resolve } from "path";
import { ok } from "assert";

function isFile(file: string) {
  return existsSync(file) && statSync(file).isFile();
}

function getStringArray(arg: unknown): string[] {
  return Array.isArray(arg) ? arg.map(String) : [String(arg)];
}

export class PluginRemoteSearchOptionsReader implements OptionsReader {
  priority = 1000;
  name = "remote-search-json";
  container?: Options;

  public addDeclarations(container: Options) {
    container.addDeclaration({
      help: "[Remote Search] The base url of the remote search server",
      name: "serverBaseUrl",
      type: ParameterType.String,
      defaultValue: "http://localhost:3024",
    });

    container.addDeclaration({
      help: "[Remote Search] Do not replace the search element with a custom element for out of the box working remote search",
      name: "noReplaceElement",
      type: ParameterType.Boolean,
      defaultValue: false,
    });

    container.addDeclaration({
      help: "[Remote Search] Do not insert client-side javascript into the theme (this way the search will not work without manual adjustments)",
      name: "noScript",
      type: ParameterType.Boolean,
      defaultValue: false,
    });

    container.addDeclaration({
      help: "[Remote Search] Disables the compression of the search.json",
      name: "noCompress",
      type: ParameterType.Boolean,
      defaultValue: false,
    });

    container.addDeclaration({
      help: "[Remote Search] The compression level 0-9, 0 is no compression, 1 the fastest and 9 the highest",
      name: "compressLevel",
      type: ParameterType.Number,
      defaultValue: 6,
    });
  }

  /**
   * Read user configuration from a typedoc.json or typedoc.js configuration file.
   * @param container
   * @param logger
   */
  read(container: Options, logger: Logger): void {
    let dir = container.getValue("options");
    if (dir) {
      if (isFile(dir)) {
        dir = dirname(dir);
      }
    } else {
      dir = process.cwd();
    }

    const file = this.findConfigFile(dir);

    if (!file) {
      if (container.isSet("options")) {
        logger.error(
          `[RemoteSearch] The options file could not be found with the given directory ${dir}`
        );
      }
      return;
    }

    logger.info(`[RemoteSearch] Load config file ${dir}`);

    const seen = new Set<string>();
    this.readFile(file, container, logger, seen);
  }

  /**
   * Read the given options file + any extended files.
   * @param file
   * @param container
   * @param logger
   */
  private readFile(
    file: string,
    container: Options & { setValue(key: string, value: unknown): void },
    logger: Logger,
    seen: Set<string>
  ) {
    if (seen.has(file)) {
      logger.error(
        `[RemoteSearch] Tried to load the options file ${file} multiple times.`
      );
      return;
    }
    seen.add(file);

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fileContent: unknown = require(file);

    if (typeof fileContent !== "object" || !fileContent) {
      logger.error(`[RemoteSearch] The file ${file} is not an object.`);
      return;
    }

    // clone option object to avoid of property changes in re-calling this file
    const data: any = { ...fileContent };
    delete data["$schema"]; // Useful for better autocompletion, should not be read as a key.

    if ("extends" in data) {
      const extended: string[] = getStringArray(data["extends"]);
      for (const extendedFile of extended) {
        // Extends is relative to the file it appears in.
        this.readFile(
          resolve(dirname(file), extendedFile),
          container,
          logger,
          seen
        );
      }
      delete data["extends"];
    }

    for (const [key, val] of Object.entries(data)) {
      try {
        container.setValue(key as never, val as never, resolve(dirname(file)));
      } catch (error) {
        ok(error instanceof Error);
        logger.error(`[RemoteSearch] ${error.message}`);
      }
    }
  }

  /**
   * Search for the remote-search.json or remote-search.js file from the given path
   *
   * @param dir Directory to the typedoc.(js|json) file. If path is a directory
   *   typedoc file will be attempted to be found at the root of this path
   * @param logger
   * @return the typedoc.(js|json) file path or undefined
   */
  private findConfigFile(dir: string): string | undefined {
    dir = resolve(dir);

    return [
      join(dir, "remote-search.json"),
      join(dir, "remote-search.js"),
    ].find((dir) => {
      return isFile(dir);
    });
  }

  private parse(container: Options) {
    const serverBaseUrl = (container.getValue("serverBaseUrl") ||
      "http://localhost:3024") as string;
    const noReplaceElement =
      container.getValue("noReplaceElement") === true ||
      container.getValue("noReplaceElement") === "true";
    const noScript =
      container.getValue("noScript") === true ||
      container.getValue("noScript") === "true";
    let noCompress =
      container.getValue("noCompress") === true ||
      container.getValue("noCompress") === "true";

    let compressLevel = Number(container.getValue("compressLevel"));
    if (compressLevel === 0) {
      noCompress = true;
    }

    if (noCompress) {
      compressLevel = 0;
    }

    if (!serverBaseUrl) {
      throw new Error("serverBaseUrl not set!");
    }

    const options: PluginOptions = {
      serverBaseUrl,
      replaceElement: !noReplaceElement,
      script: !noScript,
      compress: !noCompress,
      compressLevel,
    };
    return options;
  }

  public getOptions(container: Options, logger: Logger) {
    this.read(container, logger);
    return this.parse(container);
  }
}
