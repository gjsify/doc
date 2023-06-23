import type { Navigation } from "./navigation.js";

export interface ModuleMenu {
  name: string;
  href?: string;
  classNames: string;
  intern: Navigation[];
  extern: Navigation[];
}
