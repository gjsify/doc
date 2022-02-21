import type { PageEvent, Reflection } from "typedoc";
import type { JsxElement } from "../jsx";

export type Partial<T = PageEvent<Reflection>> = (props: T) => JsxElement;
