import type { JSX } from "typedoc";
import { JsxHtmlGlobalProps } from "./jsx-html-global-props";

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

export interface JsxTsdSearchProps extends JsxHtmlGlobalProps {
  base: string;
  port: number | string;
  hostname: string;
}

export type JsxTsdNavbarProps = JsxHtmlGlobalProps;

export interface IntrinsicElements extends JSX.JSX.IntrinsicElements {
  "router-view": JsxHtmlGlobalProps;
  "tsd-search": JsxTsdSearchProps;
  "tsd-navbar": JsxTsdNavbarProps;
  link: JsxLinkElementProps;
}
