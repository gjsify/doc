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
  navigationPrimary,
  navigationPrimaryObject,
  navigationSecondary,
  memberSignatures,
  navigationSecondaryObject
} from "./partials";
import { defaultLayout } from "./layouts/default.js";
import { bind } from "./utils/index.js";
import { readFileSync } from "fs";
import { resolve } from "path";

import type { GjsifyTheme } from "./theme.js";
import type { PartialTemplate } from "./types/index.js";

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

  override defaultLayout: PartialTemplate = bind(defaultLayout, this);

  override header: PartialTemplate = bind(header, this);
  override footer: PartialTemplate = bind(footer, this);
  override memberSignatures: PartialTemplate<DeclarationReflection> = bind(
    memberSignatures,
    this
  );

  public navigationPrimary: PartialTemplate = bind(navigationPrimary, this);
  public navigationPrimaryObject = bind(navigationPrimaryObject, this);
  public navigationSecondary: PartialTemplate = bind(navigationSecondary, this);
  public navigationSecondaryObject = bind(navigationSecondaryObject, this);

  public navbar: PartialTemplate = bind(navbar, this);
  public sidebar: PartialTemplate = bind(sidebar, this);

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
