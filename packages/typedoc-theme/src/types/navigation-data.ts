import type { ReflectionKind } from "typedoc";

export interface NavigationData {
  key?: string;
  title: string;
  url?: string;
  // classes?: string | undefined;
  kind?: ReflectionKind;
  children: NavigationData[];
  // active: boolean;
  isGroup?: boolean;
}
