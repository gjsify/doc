import type { ReflectionKind } from "typedoc";

export interface NavigationData {
  key?: string;
  title: string;
  url?: string;
  // classes?: string | undefined;
  kind?: ReflectionKind;
  // active: boolean;
  isGroup?: boolean;
  /** Only defined if the children of this data are outsourced to a separate file */
  filename?: string;
  children: NavigationData[];
}
