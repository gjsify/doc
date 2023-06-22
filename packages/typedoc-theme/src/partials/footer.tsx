import { JSX } from "../jsx/index.js";
import type { GjsifyThemeRenderContext } from "../theme-render-context";

export function footer(context: GjsifyThemeRenderContext) {
  const hideGenerator = context.options.getValue("hideGenerator");
  if (!hideGenerator)
    return (
      <div class="tsd-generator">
        <p>
          {"Generated using "}
          <a href="https://typedoc.org/" target="_blank">
            TypeDoc
          </a>
        </p>
      </div>
    );
}
