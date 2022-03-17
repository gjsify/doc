import { PageEvent, Reflection, Application } from "typedoc";
import { GjsifyThemeContext } from "../context.js";
import { VERSION } from "../constants/index.js";
import * as JSX from "../jsx";

export const footer = (
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
) => {
  const hideSettings = true;
  const hideLegend = context.options.getValue("hideLegend");
  const hideGenerator = context.options.getValue("hideGenerator");
  const excludeExternals = context.options.getValue("excludeExternals");
  return (
    <tsd-footer>
      <footer>
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

          {!hideSettings && (
            <div>
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
                    <input
                      type="checkbox"
                      id="tsd-filter-inherited"
                      checked={true}
                    />
                    <label class="tsd-widget" for="tsd-filter-inherited">
                      Inherited
                    </label>
                    {!excludeExternals && (
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
              </div>
            </div>
          )}
        </div>

        {!hideGenerator && (
          <div class="container tsd-generator">
            <p>
              {"Generated using "}
              <a href="https://typedoc.org/" target="_blank">
                TypeDoc <small>v{ Application.VERSION }</small>
              </a>{" "}
              <a
                href="https://github.com/gjsify/doc/tree/main/packages/typedoc-theme"
                target="_blank"
              >
                Gjsify Theme <small>v{ VERSION }</small>
              </a>
            </p>
          </div>
        )}
      </footer>
    </tsd-footer>
  );
};
