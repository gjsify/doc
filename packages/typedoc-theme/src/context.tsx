import {
  DefaultThemeRenderContext,
  Options,
  Logger,
  RendererHooks,
  DeclarationReflection
} from "typedoc";
import * as JSX from "./jsx";
import {
  header,
  footer,
  navbar,
  sidebar,
  secondaryNavigation,
  primaryNavigation,
  memberSignatures
} from "./partials";
import { defaultLayout } from "./layouts/default.js";
import { bind } from "./utils/index.js";
import { readFileSync } from "fs";
import { resolve } from "path";

import type { GjsifyTheme } from "./theme.js";
import type { Partial } from "./types/index.js";

/**
 * The theme context is where all of the partials live for rendering a theme,
 * in addition to some helper functions.
 */
export class GjsifyThemeContext extends DefaultThemeRenderContext {
  logger: Logger;

  /**
   * Regular expression to test if a string looks like an external url.
   */
  protected urlPrefix = /^(http|ftp)s?:\/\//;

  constructor(private ownTheme: GjsifyTheme, options: Options) {
    super(ownTheme, options);
    this.logger = this.ownTheme.application.logger;
    // this.ownTheme.owner.hooks.on("head.end", (context) =>
    //   this.onHeadEnd(context)
    // );
  }

  override hook = (name: keyof RendererHooks): JSX.JsxElement[] =>
    this.ownTheme.owner.hooks.emit(name, this);

  override defaultLayout: Partial = bind(defaultLayout, this);

  override header: Partial = bind(header, this);
  override footer: Partial = bind(footer, this);
  override memberSignatures: Partial<DeclarationReflection> = bind(
    memberSignatures,
    this
  );

  public primaryNavigation: Partial = bind(primaryNavigation, this);
  public secondaryNavigation: Partial = bind(secondaryNavigation, this);

  public navbar: Partial = bind(navbar, this);
  public sidebar: Partial = bind(sidebar, this);

  public absoluteUrl = (url: string | undefined): string => {
    if (!url) return "";
    const isAbsolute = this.urlPrefix.test(url);
    if (isAbsolute) {
      // TODO append base path from settings
      return url;
    }
    return this.relativeURL(url) || "";
  };

  public getAssetStr(name: string) {
    const assetStr = readFileSync(
      resolve(__dirname, "../assets/", name),
      "utf8"
    );
    return assetStr;
  }

  // onHeadEnd(context: DefaultThemeRenderContext) {
  //   return <></>;
  // }
}
