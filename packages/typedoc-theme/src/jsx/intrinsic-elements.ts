/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
import type {
  JsxHtmlGlobalProps,
  BasicIntrinsicElements,
} from "@ribajs/jsx/src/types/index";
import type { Bs5IntrinsicElements } from "@ribajs/bs5/src/types/jsx";
import type { RouterIntrinsicElements } from "@ribajs/router/src/types/jsx";
import type { TsdIntrinsicElements } from "@gjsify/typedoc-theme-client";

export type JsxTsdHeaderProps = JsxHtmlGlobalProps;

export type JsxTsdFooterProps = JsxHtmlGlobalProps;

export interface TsdThemeIntrinsicElements {
  // Custom Elements
  "tsd-header": JsxTsdHeaderProps;
  "tsd-footer": JsxTsdFooterProps;
}

export interface IntrinsicElements
  extends BasicIntrinsicElements,
    TsdThemeIntrinsicElements,
    TsdIntrinsicElements,
    Bs5IntrinsicElements,
    RouterIntrinsicElements {}
