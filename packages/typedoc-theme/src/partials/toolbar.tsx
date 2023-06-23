import type { Reflection } from "typedoc";
import { JSX } from "../jsx/index.js";
import type { PageEvent } from "typedoc";
import { getDisplayName } from "../lib";
import type { GjsifyThemeRenderContext } from "../theme-render-context";

export const toolbar = (
  context: GjsifyThemeRenderContext,
  props: PageEvent<Reflection>
) => (
  <>
    <tsd-navbar class="tsd-page-toolbar navbar fixed-top navbar-expand navbar-os bg-tl-white bg-td-dark border-bottom border-tl-gray border-td-black">
      <div class="container-fluid d-flex justify-content-between">
        <div class="d-flex">
          <bs5-toggle-button
            class="d-flex d-xl-none align-items-center me-3"
            target-id="left-sidebar"
          >
            <div class="d-flex align-items-center">
              <bs5-icon
                src={context.absoluteUrl("/assets/iconset/svg/icon_menu.svg")}
                size={32}
                rv-hide="isActive"
                rv-on-click="toggle"
              ></bs5-icon>
              <bs5-icon
                src={context.absoluteUrl("/assets/iconset/svg/icon_close.svg")}
                size={32}
                rv-show="isActive"
                rv-on-click="toggle"
              ></bs5-icon>
            </div>
          </bs5-toggle-button>
          <a
            class="navbar-brand d-flex align-items-center"
            href={context.absoluteUrl("/")}
          >
            <img
              class="img-fluid mh-100 d-td-none"
              src={context.absoluteUrl("/assets/logo.svg")}
              alt="Gjsify Logo"
            />
            <img
              class="img-fluid mh-100 d-tl-none"
              src={context.absoluteUrl("/assets/logo-light.svg")}
              alt="Gjsify Logo"
            />
          </a>
        </div>
        <div class="d-flex">
          <bs5-theme-button class="d-flex align-items-center" mode="icon">
            <button class="btn btn-icon" rv-on-click="toggleTheme">
              <bs5-icon
                class="d-td-none"
                color="warning"
                src={context.absoluteUrl(
                  "/assets/iconset/svg/icon_sun_alt.svg"
                )}
                size={32}
              ></bs5-icon>
              <bs5-icon
                class="d-tl-none color-orange"
                color="warning"
                src={context.absoluteUrl(
                  "/assets/iconset/svg/icon_moon_alt.svg"
                )}
                size={32}
              ></bs5-icon>
            </button>
          </bs5-theme-button>

          <tsd-module-menu class="mx-2 d-none d-md-block"></tsd-module-menu>

          <tsd-search
            rv-element="searchEl"
            id="tsd-search"
            class="table-cell"
          ></tsd-search>
        </div>
      </div>
    </tsd-navbar>

    {/* <header class="tsd-page-toolbar">
      <div class="tsd-toolbar-contents container">
        <div class="table-cell" id="tsd-widgets">
          <a
            href="#"
            class="tsd-widget tsd-toolbar-icon menu no-caption"
            data-toggle="menu"
            aria-label="Menu"
          >
            {context.icons.menu()}
          </a>
        </div>
      </div>
    </header> */}
  </>
);
