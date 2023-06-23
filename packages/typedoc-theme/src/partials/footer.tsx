import { JSX } from "../jsx/index.js";
import { Application } from "typedoc";
import type { GjsifyThemeRenderContext } from "../theme-render-context";

export function footer(context: GjsifyThemeRenderContext) {
  const hideGenerator = context.options.getValue("hideGenerator");
  if (!hideGenerator)
    return (
      <tsd-footer class="tsd-generator">
        {!hideGenerator && (
          <div class="container">
            <p>
              {"Generated using "}
              <a href="https://typedoc.org/" target="_blank">
                TypeDoc <small>v{Application.VERSION}</small>
              </a>
              {" with "}
              <a
                href="https://github.com/gjsify/doc/tree/main/packages/typedoc-theme"
                target="_blank"
              >
                Gjsify Theme <small>v{context.VERSION}</small>
              </a>
            </p>
          </div>
        )}
      </tsd-footer>
    );
}
