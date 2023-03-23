import { Application } from "typedoc";
import { GjsifyThemeContext } from "../context.js";
import { VERSION } from "../constants/index.js";
import * as JSX from "../jsx";

export const footer = (context: GjsifyThemeContext) => {
  const hideGenerator = context.options.getValue("hideGenerator");
  return (
    <tsd-footer>
      {!hideGenerator && (
        <div class="container tsd-generator">
          <p>
            {"Generated using "}
            <a href="https://typedoc.org/" target="_blank">
              TypeDoc <small>v{Application.VERSION}</small>
            </a>{" "}
            <a
              href="https://github.com/gjsify/doc/tree/main/packages/typedoc-theme"
              target="_blank"
            >
              Gjsify Theme <small>v{VERSION}</small>
            </a>
          </p>
        </div>
      )}
    </tsd-footer>
  );
};
