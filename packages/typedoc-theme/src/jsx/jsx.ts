/**
 * This file is needed to define custom HTML elements for JSX.
 * @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/utils/jsx.elements.ts
 */
import { JSX as OJSX } from "typedoc";
import { JsxElement } from "./jsx-element";
import { IntrinsicElements } from "./intrinsic-elements";

/**
 * TypeScript's rules for looking up the JSX.IntrinsicElements and JSX.Element
 * interfaces are incredibly strange. It will find them if they are included as
 * a namespace under the createElement function, or globally, or, apparently, if
 * a JSX namespace is declared at the same scope as the factory function.
 * Hide this in the docs, hopefully someday TypeScript improves this and allows
 * looking adjacent to the factory function and we can get rid of this phantom namespace.
 * @hidden
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace JSX {
  export { IntrinsicElements, JsxElement as Element };
}

/**
 * JSX factory function to create an "element" that can later be rendered with {@link renderElement}
 * @param tag
 * @param props
 * @param children
 */
export const createElement = OJSX.createElement;

export const renderElement = OJSX.renderElement;

export const Raw = OJSX.Raw;
