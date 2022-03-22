import type { Navigation } from "./navigation.js"

export interface NavigationPrimary {
  name: string;
  href?: string;
  path?: string;
  classNames: string;
  intern: Navigation[];
  extern: Navigation[];
}