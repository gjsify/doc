import { Application } from "typedoc";
import { RemoteSearchIndexPlugin } from "./plugin";

export function load(app: Application) {
  new RemoteSearchIndexPlugin(app.logger, app.renderer);
}
