/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
import type {
  JsxHtmlGlobalProps,
  BasicIntrinsicElements,
} from "@ribajs/jsx/src/types/jsx";
import type { Bs5IntrinsicElements } from "@ribajs/bs5/src/types/jsx";
import type { RouterIntrinsicElements } from "@ribajs/router/src/types/jsx";

export interface JsxTsdSearchProps extends JsxHtmlGlobalProps {
  base?: string;
  port?: number | string;
  hostname?: string;
}

export type JsxTsdNavbarProps = JsxHtmlGlobalProps;

export type JsxTsdNavigationProps = JsxHtmlGlobalProps;

export type JsxTsdHeaderProps = JsxHtmlGlobalProps;

export type JsxTsdFooterProps = JsxHtmlGlobalProps;

export interface TsdIntrinsicElements {
  // Custom Elements
  "tsd-search": JsxTsdSearchProps;
  "tsd-navigation": JsxTsdNavigationProps;
  "tsd-navbar": JsxTsdNavbarProps;
  "tsd-header": JsxTsdHeaderProps;
  "tsd-footer": JsxTsdFooterProps;
}

export interface IntrinsicElements
  extends BasicIntrinsicElements,
    TsdIntrinsicElements,
    Bs5IntrinsicElements,
    RouterIntrinsicElements {}
