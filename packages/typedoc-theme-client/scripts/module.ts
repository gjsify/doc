import { RibaModule } from "@ribajs/core";
import * as binders from "./binders/index.js";
import * as formatters from "./formatters/index.js";
import * as services from "./services/index.js";
import * as components from "./components/index.js";
import { TypedocModuleOptions } from "./types/index.js";

export const gjsifyTypedocModule: RibaModule<TypedocModuleOptions> = {
  binders,
  services,
  formatters,
  components,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  init(options = {}) {
    services.TypedocService.setSingleton(options);
    return this;
  }
};
