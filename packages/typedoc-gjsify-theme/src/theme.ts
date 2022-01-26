import {
  DefaultTheme,
  Renderer,
} from "typedoc";

import { GjsifyThemeContext } from './context'

/**
 * A near clone of the default theme, that adds some custom text after the footer.
 */
export class GjsifyTheme extends DefaultTheme {
  private _contextCache?: GjsifyThemeContext;

  constructor(renderer: Renderer) {
    super(renderer)
  }

  override getRenderContext(): GjsifyThemeContext {
    if (this._contextCache instanceof GjsifyThemeContext) {
      return this._contextCache;
    }
    this._contextCache = new GjsifyThemeContext(
      this,
      this.application.options
    );
    return this._contextCache;
  }
}