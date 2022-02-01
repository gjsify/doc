import {
  JSX,
  PageEvent,
  Reflection,
  DefaultThemeRenderContext,
  Options,
  DefaultTheme,
  Logger,
} from "typedoc";

import type { GjsifyTheme } from "./theme";

import { header } from "./partials/header";
import { defaultLayout } from "./layouts/default";

function bind<F, L extends any[], R>(fn: (f: F, ...a: L) => R, first: F) {
  return (...r: L) => fn(first, ...r);
}

type Partial = (props: PageEvent<Reflection>) => JSX.Element;

/**
 * The theme context is where all of the partials live for rendering a theme,
 * in addition to some helper functions.
 */
export class GjsifyThemeContext extends DefaultThemeRenderContext {
  logger: Logger;

  constructor(private ownTheme: GjsifyTheme, options: Options) {
    super(ownTheme, options);
    this.logger = ownTheme.application.logger;
    // ownTheme.owner.hooks.on("head.end", (...args) => this.onHeadEnd(...args));
    // ownTheme.application.renderer.hooks.on("head.end", (...args) => this.onHeadEnd(...args));
  }

  override defaultLayout: Partial = bind(defaultLayout, this);

  override header: Partial = bind(header, this);

  onHeadEnd(context: DefaultThemeRenderContext) {
    return (
      <script>
        <JSX.Raw html="console.log('Hello World!');" />
      </script>
    );
  }
}
