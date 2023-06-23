import type { ScopeBase } from "@ribajs/core";
import type { Dataset } from "./index.js";

export interface SidebarContentComponentScope
  extends ScopeBase<{ dataset: Dataset }> {
  template?: string;
}
