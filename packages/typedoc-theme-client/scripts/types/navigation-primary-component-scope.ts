import type { ScopeBase } from "@ribajs/core";
import type { Module, Dataset } from "./index.js";
import type { NavigationPrimaryComponent } from "../components/navigation-primary/navigation-primary.component.js";

export interface NavigationPrimaryComponentScope
  extends ScopeBase<{ dataset: Dataset }> {
  modules?: Module[];
  selectedModule: string;
  onModuleSelect: NavigationPrimaryComponent["onModuleSelect"];
}
