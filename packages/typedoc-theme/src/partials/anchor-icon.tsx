import { JSX } from "../jsx/index.js";
import type { GjsifyThemeRenderContext } from "../theme-render-context";

export function anchorIcon(
  context: GjsifyThemeRenderContext,
  anchor: string | undefined
) {
  if (!anchor) return <></>;

  return (
    <a href={`#${anchor}`} aria-label="Permalink" class="tsd-anchor-icon">
      {context.icons.anchor()}
    </a>
  );
}
