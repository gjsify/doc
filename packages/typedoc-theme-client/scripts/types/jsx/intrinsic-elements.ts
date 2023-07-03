/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
import type {
  JsxTsdSearchProps,
  JsxTsdModuleMenuProps,
  JsxTsdModuleNavigationProps,
  JsxTsdSidebarContentProps,
  JsxTsdNavbarProps,
  JsxTsdMemberSignaturesProps,
} from "./index.js";

export interface TsdIntrinsicElements {
  // Custom Elements
  "tsd-search": JsxTsdSearchProps;
  "tsd-module-menu": JsxTsdModuleMenuProps;
  "tsd-module-navigation": JsxTsdModuleNavigationProps;
  "tsd-sidebar-content": JsxTsdSidebarContentProps;
  "tsd-navbar": JsxTsdNavbarProps;
  "tsd-member-signatures": JsxTsdMemberSignaturesProps;
}

declare global {
  namespace JSX {
    // This extends the IntrinsicElements interface defined in @ribajs/jsx
    interface IntrinsicElements extends TsdIntrinsicElements {}
  }
}
