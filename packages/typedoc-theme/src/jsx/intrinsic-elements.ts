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
  // This is missing in JsxMetaElementProps of typedoc
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

export type JsxTsdNavigationProps = JsxHtmlGlobalProps;

export type JsxTsdHeaderProps = JsxHtmlGlobalProps;

export type JsxTsdFooterProps = JsxHtmlGlobalProps;

export interface JsxBs5ThemeButtonProps extends JsxHtmlGlobalProps {
  mode?: "dropdown" | "icon";
  labels?: string; // JSON string
  "light-icon-src"?: string;
  "dark-icon-src"?: string;
  "icon-size"?: string;
}

export interface JsxBs5SidebarProps extends JsxHtmlGlobalProps {
  "container-selector"?: string;
  position?: "left" | "right";
  mode?: "overlap" | "move" | "side";
  width?: string;
  "auto-show-on-wider-than"?: string;
  "auto-hide-on-slimmer-than"?: string;
  "force-hide-on-location-pathnames"?: string;
  "force-show-on-location-pathnames"?: string;
  "mode-on-slimmer-than"?: string;
  "watch-new-page-ready-event"?: string;
  "close-on-swipe"?: string;
}

export interface JsxBs5ToggleButtonProps extends JsxHtmlGlobalProps {
  "target-id": string;
}

export interface JsxBs5IconProps extends JsxHtmlGlobalProps {
  size?: string;
  width?: string;
  height?: string;
  src: string;
  color?: string;
  direction?: string;
}

export interface IntrinsicElements extends JSX.JSX.IntrinsicElements {
  link: JsxLinkElementProps;
  meta: JsxMetaElementProps;
  // Custom Elements
  "router-view": JsxHtmlGlobalProps;
  "tsd-search": JsxTsdSearchProps;
  "tsd-navigation": JsxTsdNavigationProps;
  "tsd-navbar": JsxTsdNavbarProps;
  "tsd-header": JsxTsdHeaderProps;
  "tsd-footer": JsxTsdFooterProps;
  "bs5-theme-button": JsxBs5ThemeButtonProps;
  "bs5-sidebar": JsxBs5SidebarProps;
  "bs5-toggle-button": JsxBs5ToggleButtonProps;
  "bs5-icon": JsxBs5IconProps;
}
