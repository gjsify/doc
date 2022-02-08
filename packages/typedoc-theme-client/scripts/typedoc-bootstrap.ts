/**
 * @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/assets/bootstrap.ts
 */

import { Application, registerComponent } from "./typedoc-app";
import { Signature } from "./typedoc-components/signature";
import { Toggle } from "./typedoc-components/toggle";
import { Filter } from "./typedoc-components/filter";

export const typedocBootstrap = () => {
  registerComponent(Signature, ".tsd-signatures");
  registerComponent(Toggle, "a[data-toggle]");

  if (Filter.isSupported()) {
    registerComponent(Filter, "#tsd-filter");
  } else {
    document.documentElement.classList.add("no-filter");
  }

  window.app = new Application();
};
