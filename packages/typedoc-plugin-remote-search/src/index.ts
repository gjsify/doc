import { Application } from "typedoc";
import { RemoteSearchIndexPlugin } from "./plugin/plugin";
import { PluginRemoteSearchOptionsReader } from "./plugin/options-reader";

export function load(app: Application) {
  const optionsReader = new PluginRemoteSearchOptionsReader();
  optionsReader.addDeclarations(app.options);
  const options = optionsReader.getOptions(app.options, app.logger);
  new RemoteSearchIndexPlugin(app.logger, app.renderer, options);
}
