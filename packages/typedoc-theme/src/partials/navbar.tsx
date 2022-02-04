import { PageEvent, Reflection } from "typedoc";
import { GjsifyThemeContext } from "../context";
import * as JSX from "../jsx";
import { hasTypeParameters, join } from "../lib";

export const navbar = (
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
): JSX.JsxElement => (
  <tsd-navbar class="tsd-page-toolbar navbar fixed-top navbar-expand navbar-os bg-theme-light-white bg-theme-dark-dark">
    <div class="container-fluid">
      <a
        class="navbar-brand d-flex align-items-center"
        href={context.absoluteUrl("/")}
      >
        <img
          class="img-fluid mh-100"
          src={context.absoluteUrl("/assets/logo.svg") || ""}
          alt="Gjsify Logo"
        />
      </a>
      <div class="table-wrap">
        <tsd-search
          id="tsd-search"
          class="table-cell ready"
          base={context.absoluteUrl("/")}
        ></tsd-search>
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
    </div>
  </tsd-navbar>
);
