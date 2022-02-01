/**
 * This file is needed to define custom HTML elements for JSX.
 * @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/utils/jsx.elements.ts
 */

import { JSX as OJSX } from "typedoc";

export type JsxElement = OJSX.Element;
export declare type JsxChildren =
  | JsxElement
  | string
  | number
  | null
  | undefined
  | JsxChildren[];

/**
 * The common properties that may appear on any HTML element.
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#list_of_global_attributes
 */
export interface JsxHtmlGlobalProps {
  accessKey?: string;
  autocapitalize?: string;
  children?: JsxChildren;
  class?: string;
  contentEditable?: string;
  [data: `data-${string}`]: string;
  dir?: string;
  draggable?: boolean;
  enterKeyHint?: string;
  hidden?: boolean;
  id?: string;
  inputMode?: string;
  is?: string;
  itemId?: string;
  itemProp?: string;
  itemRef?: string;
  itemScope?: string;
  itemType?: string;
  lang?: string;
  nonce?: string;
  part?: string;
  slot?: string;
  spellcheck?: boolean;
  style?: string;
  tabIndex?: number;
  title?: string;
  translate?: boolean;
}

/**
 * Properties permitted on the `<link>` element.
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
 */
export interface JsxLinkElementProps extends JsxHtmlGlobalProps {
  as?:
    | "audio"
    | "document"
    | "embed"
    | "fetch"
    | "font"
    | "image"
    | "object"
    | "script"
    | "style"
    | "track"
    | "video"
    | "worker";
  crossOrigin?: "anonymous" | "use-credentials";
  disabled?: boolean;
  href?: string;
  hreflang?: string;
  imageSizes?: string;
  imageSrcset?: string;
  media?: string;
  rel?: string;
  sizes?: string;
  type?: string;
  // This is missing in JsxLinkElementProps of typedoc
  color?: string;
}

interface IntrinsicElements extends OJSX.JSX.IntrinsicElements {
  "router-view": JsxHtmlGlobalProps;
  link: JsxLinkElementProps;
}

export const Raw = OJSX.Raw;

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
