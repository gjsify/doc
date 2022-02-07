import type { JSX } from "typedoc";
import { JsxHtmlGlobalProps } from "./jsx-html-global-props";

/**
 * Properties permitted on the `<meta>` element.
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
 */
export interface JsxMetaElementProps extends JsxHtmlGlobalProps {
  "http-equiv"?:
    | "content-security-policy"
    | "content-type"
    | "default-style"
    | "x-ua-compatible"
    | "refresh";
  charSet?: "utf-8";
  content?: string;
  name?: string;
  // This is missing in JsxLinkElementProps of typedoc
  media?: string;
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

export interface JsxTsdSearchProps extends JsxHtmlGlobalProps {
  base?: string;
  port?: number | string;
  hostname?: string;
}

export type JsxTsdNavbarProps = JsxHtmlGlobalProps;

export interface JsxBs5ThemeButtonProps extends JsxHtmlGlobalProps {
  mode?: "dropdown" | "icon";
  labels?: string; // JSON string
  "light-icon-src"?: string;
  "dark-icon-src"?: string;
  "icon-size"?: string;
}

export interface JsxBs5SidebarProps extends JsxHtmlGlobalProps {
  position?: "left" | "right";
  // .. todo more
}

export type JsxBs5ToggleButtonProps = JsxHtmlGlobalProps;

export interface JsxBs5IconProps extends JsxHtmlGlobalProps {
  src: string;
  size?: string;
  // .. todo more
}

export interface IntrinsicElements extends JSX.JSX.IntrinsicElements {
  link: JsxLinkElementProps;
  meta: JsxMetaElementProps;
  // Custom Elements
  "router-view": JsxHtmlGlobalProps;
  "tsd-search": JsxTsdSearchProps;
  "tsd-navbar": JsxTsdNavbarProps;
  "bs5-theme-button": JsxBs5ThemeButtonProps;
  "bs5-sidebar": JsxBs5SidebarProps;
  "bs5-toggle-button": JsxBs5ToggleButtonProps;
  "bs5-icon": JsxBs5IconProps;
}
