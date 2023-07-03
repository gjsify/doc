import type { ScopeBase } from "@ribajs/core";
import type { ModuleNavigation, Dataset } from "./index.js";
import type { ModuleMenuComponent } from "../components/module-menu/module-menu.component.js";

export interface ModuleMenuScope extends ScopeBase<{ dataset: Dataset }> {
  modules?: ModuleNavigation[];
  selectedModule: string;
  onModuleSelect: ModuleMenuComponent["onModuleSelect"];
}
