/**
 * This file is needed to define custom HTML elements for JSX.
 * @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/utils/jsx.elements.ts
 */
import { JSX as OJSX } from "typedoc";

import type { JsxElement } from "./jsx-element.js";
import type { IntrinsicElements as TsdIntrinsicElements } from "./intrinsic-elements.js";
import type { JsxChildren } from "./jsx-children.js";

export const Raw = OJSX.Raw;

export type Element = JsxElement;

export type Children = JsxChildren;

export const Fragment = OJSX["Fragment"];

/**
 * JSX factory function to create an "element" that can later be rendered with {@link renderElement}
 * @param tag
 * @param props
 * @param children
 */
export const createElement = OJSX.createElement as (
  tag: typeof Fragment | string | OJSX.JsxComponent<any>,
  props: object | null,
  ...children: JsxChildren[]
) => JsxElement;

export const setRenderSettings = OJSX.setRenderSettings;

export const renderElement = OJSX.renderElement;

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
  export {
    TsdIntrinsicElements as IntrinsicElements,
    Element,
    Children,
    Fragment,
    Raw,
    createElement,
    renderElement,
  };
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // This extends the IntrinsicElements interface defined in @ribajs/jsx
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface IntrinsicElements extends TsdIntrinsicElements {
      //
    }

    export type Element = JsxElement;
    export type Children = JsxChildren;

    // export { Raw, createElement, renderElement, Fragment };
  }
}

// globalThis.JSX ||= JSX;

// globalThis.JSX.Fragment = Fragment;
// globalThis.JSX.Raw = Raw;
// globalThis.JSX.createElement = createElement;
// globalThis.JSX.renderElement = renderElement;
