import type { Navigation } from "./navigation.js";

export interface SidebarContent {
  name?: string;
  href?: string;
  classNames?: string;
  pageNavigation: Navigation[];
}
