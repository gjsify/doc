import {
    JSX,
    DefaultTheme,
    PageEvent,
    Reflection,
    DefaultThemeRenderContext,
    Options,
  } from "typedoc";

import type { GjsifyTheme } from './theme'

import { header } from './partials/header'

function bind<F, L extends any[], R>(fn: (f: F, ...a: L) => R, first: F) {
  return (...r: L) => fn(first, ...r);
}

/**
 * The theme context is where all of the partials live for rendering a theme,
 * in addition to some helper functions.
 */
export class GjsifyThemeContext extends DefaultThemeRenderContext {
  constructor(private ownTheme: GjsifyTheme, options: Options) {
    super(ownTheme, options);
  }

  override header: (props: PageEvent<Reflection>) => JSX.Element = bind(header, this);
}