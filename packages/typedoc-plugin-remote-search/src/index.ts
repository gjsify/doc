import { Application } from "typedoc";
import { RemoteSearchIndexPlugin } from "./plugin/plugin";
import { addDeclarations, pluginOptions } from "./plugin/options";

export function load(app: Application) {
  addDeclarations(app);
  const getOptions = pluginOptions(app);
  new RemoteSearchIndexPlugin(app.logger, app.renderer, getOptions);
}
