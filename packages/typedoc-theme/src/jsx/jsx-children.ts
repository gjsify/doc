import type { JsxElement } from "./jsx-element.js";
import type { JsxChildren as RibaJsxChildren } from "@ribajs/jsx";

export declare type JsxChildren = RibaJsxChildren &
  (JsxElement | string | number | null | undefined | JsxChildren[]);
