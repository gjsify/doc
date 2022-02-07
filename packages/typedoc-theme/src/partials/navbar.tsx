// import { PageEvent, Reflection } from "typedoc";
import { GjsifyThemeContext } from "../context";
import * as JSX from "../jsx";

export const navbar = (
  context: GjsifyThemeContext
  // props: PageEvent<Reflection>
): JSX.JsxElement => (
  <tsd-navbar class="tsd-page-toolbar navbar fixed-top navbar-expand navbar-os bg-theme-light-white bg-theme-dark-dark">
    <div class="container-fluid">
      <bs5-toggle-button target-id="left-sidebar">
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
          class="img-fluid mh-100"
          src={context.absoluteUrl("/assets/logo.svg")}
          alt="Gjsify Logo"
        />
      </a>
      <div class="table-wrap">
        <tsd-search
          id="tsd-search"
          class="table-cell ready"
          base={context.absoluteUrl("/")}
        ></tsd-search>
        <bs5-theme-button
          mode="icon"
          light-icon-src={context.absoluteUrl(
            "/assets/iconset/svg/icon_sun_alt.svg"
          )}
          dark-icon-src={context.absoluteUrl(
            "/assets/iconset/svg/icon_moon_alt.svg"
          )}
        ></bs5-theme-button>
      </div>
    </div>
  </tsd-navbar>
);
