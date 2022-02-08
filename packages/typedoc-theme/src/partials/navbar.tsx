// import { PageEvent, Reflection } from "typedoc";
import { GjsifyThemeContext } from "../context";
import * as JSX from "../jsx";

export const navbar = (
  context: GjsifyThemeContext
  // props: PageEvent<Reflection>
): JSX.JsxElement => (
  <tsd-navbar class="tsd-page-toolbar navbar fixed-top navbar-expand navbar-os bg-theme-light-white bg-theme-dark-dark border-bottom border-gray">
    <div class="container-fluid d-flex justify-content-between">
      <div class="d-flex">
        <bs5-toggle-button
          class="d-flex d-xl-none align-items-center me-3"
          target-id="left-sidebar"
        >
          <ul class="nav">
            <li class="nav-item d-flex align-items-center">
              <bs5-icon
                src={context.absoluteUrl("/assets/iconset/svg/icon_menu.svg")}
                size="32"
                rv-hide="isActive"
                rv-on-click="toggle"
              ></bs5-icon>
            </li>
            <li class="nav-item d-flex align-items-center">
              <bs5-icon
                src={context.absoluteUrl("/assets/iconset/svg/icon_close.svg")}
                size="32"
                rv-show="isActive"
                rv-on-click="toggle"
              ></bs5-icon>
            </li>
          </ul>
        </bs5-toggle-button>
        <a
          class="navbar-brand d-flex align-items-center"
          href={context.absoluteUrl("/")}
        >
          <img
            class="img-fluid mh-100 d-theme-dark-none"
            src={context.absoluteUrl("/assets/logo.svg")}
            alt="Gjsify Logo"
          />
          <img
            class="img-fluid mh-100 d-theme-light-none"
            src={context.absoluteUrl("/assets/logo-light.svg")}
            alt="Gjsify Logo"
          />
        </a>
      </div>
      <div class="d-flex">
        <tsd-search
          id="tsd-search"
          class="table-cell ready"
          base={context.absoluteUrl("/")}
        ></tsd-search>
        <bs5-theme-button class="d-flex align-items-center" mode="icon">
          <button class="btn btn-icon" rv-on-click="toggleTheme">
            <bs5-icon
              class="d-theme-dark-none"
              color="warning"
              src={context.absoluteUrl("/assets/iconset/svg/icon_sun_alt.svg")}
              size="32"
            ></bs5-icon>
            <bs5-icon
              class="d-theme-light-none color-orange"
              color="warning"
              src={context.absoluteUrl("/assets/iconset/svg/icon_moon_alt.svg")}
              size="32"
            ></bs5-icon>
          </button>
        </bs5-theme-button>
      </div>
    </div>
  </tsd-navbar>
);
