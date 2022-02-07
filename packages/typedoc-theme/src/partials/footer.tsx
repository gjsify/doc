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
        "page-footer": true,
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
        <div class="table-cell" id="tsd-widgets">
          <div id="tsd-filter">
            <a
              href="#"
              class="tsd-widget options no-caption"
              data-toggle="options"
            >
              Options
            </a>
            <div class="tsd-filter-group">
              <div class="tsd-select" id="tsd-filter-visibility">
                <span class="tsd-select-label">All</span>
                <ul class="tsd-select-list">
                  <li data-value="public">Public</li>
                  <li data-value="protected">Public/Protected</li>
                  <li data-value="private" class="selected">
                    All
                  </li>
                </ul>
              </div>{" "}
              <input type="checkbox" id="tsd-filter-inherited" checked={true} />
              <label class="tsd-widget" for="tsd-filter-inherited">
                Inherited
              </label>
              {!context.options.getValue("excludeExternals") && (
                <span>
                  <input
                    type="checkbox"
                    id="tsd-filter-externals"
                    checked={true}
                  />
                  <label class="tsd-widget" for="tsd-filter-externals">
                    Externals
                  </label>
                </span>
              )}
            </div>
          </div>

          <a href="#" class="tsd-widget menu no-caption" data-toggle="menu">
            Menu
          </a>
        </div>
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
