import type { PageEvent, Reflection } from "typedoc";
import type { JsxElement } from "../jsx/index.js";

export type PartialTemplate<T = PageEvent<Reflection>,> = (props: T) => JsxElement;
