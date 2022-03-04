import { ParameterType, DeclarationOption, Application } from "typedoc";
import type { PluginOptions } from "../types";

export const OPTIONS = {
  serverBaseUrl: {
    help: "[Remote Search] The base url of the remote search server",
    name: "serverBaseUrl",
    type: ParameterType.String,
    defaultValue: "http://localhost:3024",
  } as DeclarationOption,
  noReplaceElement: {
    help: "[Remote Search] Do not replace the search element with a custom element for out of the box working remote search",
    name: "noReplaceElement",
    type: ParameterType.Boolean,
    defaultValue: false,
  } as DeclarationOption,
  noScript: {
    help: "[Remote Search] Do not insert client-side javascript into the theme (this way the search will not work without manual adjustments)",
    name: "noScript",
    type: ParameterType.Boolean,
    defaultValue: false,
  } as DeclarationOption,
  noCompress: {
    help: "[Remote Search] Disables the compression of the search.json",
    name: "noCompress",
    type: ParameterType.Boolean,
    defaultValue: false,
  } as DeclarationOption,
  compressLevel: {
    help: "[Remote Search] The compression level 0-9, 0 is no compression, 1 the fastest and 9 the highest",
    name: "compressLevel",
    type: ParameterType.Number,
    defaultValue: 6,
  } as DeclarationOption,
};

export const addDeclarations = (app: Application) => {
  app.options.addDeclaration(OPTIONS.serverBaseUrl);
  app.options.addDeclaration(OPTIONS.noReplaceElement);
  app.options.addDeclaration(OPTIONS.noScript);
  app.options.addDeclaration(OPTIONS.noCompress);
  app.options.addDeclaration(OPTIONS.compressLevel);
};

/** The passed options cannot be accessed directly at the beginning, so this is implemented as a function */
export const pluginOptions = (app: Application) => {
  const getOptions = () => {
    const serverBaseUrl = app.options.getValue(
      OPTIONS.serverBaseUrl.name
    ) as string;
    const noReplaceElement = app.options.getValue(
      OPTIONS.noReplaceElement.name
    ) as boolean;
    const noScript = app.options.getValue(OPTIONS.noScript.name) as boolean;
    let noCompress = app.options.getValue(OPTIONS.noCompress.name) as boolean;

    let compressLevel = app.options.getValue(
      OPTIONS.compressLevel.name
    ) as number;

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
  };
  return getOptions;
};
