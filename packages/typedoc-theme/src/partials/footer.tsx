import { PageEvent, Reflection } from "typedoc";
import { GjsifyThemeContext } from "../context";
import * as JSX from "../jsx";
import { classNames } from "../lib";

export function footer(
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
) {
  const hideLegend = context.options.getValue("hideLegend");
  const hideGenerator = context.options.getValue("hideGenerator");
  return (
    <footer
      class={classNames({
        "with-border-bottom": !hideGenerator,
      })}
    >
      <div class="container">
        {!hideLegend && props.legend?.length && (
          <div>
            <h2>Legend</h2>
            <div class="tsd-legend-group">
              {props.legend.map((item) => (
                <ul class="tsd-legend">
                  {item.map((item) => (
                    <li class={item.classes.join(" ")}>
                      <span class="tsd-kind-icon">{item.name}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        )}

        <h2>Settings</h2>
        <p>
          Theme <bs5-theme-button></bs5-theme-button>
        </p>
      </div>

      {!hideGenerator && (
        <div class="container tsd-generator">
          <p>
            {"Generated using "}
            <a href="https://typedoc.org/" target="_blank">
              TypeDoc
            </a>
          </p>
        </div>
      )}
    </footer>
  );
}
