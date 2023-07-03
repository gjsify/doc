import type { ScopeBase } from "@ribajs/core";
import type { ModuleNavigation, NavigationData, Dataset } from "./index.js";
import type { ModuleNavigationComponent } from "../components/module-navigation/module-navigation.component.js";

export interface ModuleNavigationScope extends ScopeBase<{ dataset: Dataset }> {
  modules: ModuleNavigation[];
  /** Current module */
  module?: ModuleNavigation;
  /** Current navigation for current module */
  navigation?: NavigationData;
  /** Child modules of the current navigation */
  subModules: NavigationData[];
  /** Child namespaces of the current navigation */
  subNamespaces: NavigationData[];
  /** Child references of the current navigation */
  subReferences: NavigationData[];
  onModuleSelect: ModuleNavigationComponent["onModuleSelect"];
}
