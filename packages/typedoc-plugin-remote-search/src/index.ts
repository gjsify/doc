import { Application, ParameterType } from "typedoc";
import { RemoteSearchIndexPlugin } from "./plugin";
import type { PluginOptions } from "./types";

export function load(app: Application) {
  app.options.addDeclaration({
    help: "[Remote Search] Port of remote search server",
    name: "port",
    type: ParameterType.Number,
    defaultValue: 3024,
  });

  app.options.addDeclaration({
    help: "[Remote Search] A domain name or IP address of the search server",
    name: "hostname",
    type: ParameterType.String,
    defaultValue: "localhost",
  });

  app.options.addDeclaration({
    help: "[Remote Search] Do not replace the search element with a custom element for out of the box working remote search",
    name: "noReplaceElement",
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    help: "[Remote Search] Do not insert client-side javascript into the theme (this way the search will not work without manual adjustments)",
    name: "noScript",
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  const port = Number(app.options.getValue("port"));
  const hostname = app.options.getValue("hostname") as string | undefined;
  const noReplaceElement =
    app.options.getValue("noReplaceElement") === true ||
    app.options.getValue("noReplaceElement") === "true";
  const noScript =
    app.options.getValue("noScript") === true ||
    app.options.getValue("noScript") === "true";

  if (!port) {
    throw new Error("port not set!");
  }

  if (!hostname) {
    throw new Error("hostname not set!");
  }

  const options: PluginOptions = {
    port,
    hostname,
    replaceElement: !noReplaceElement,
    script: !noScript,
  };

  new RemoteSearchIndexPlugin(app.logger, app.renderer, options);
}
