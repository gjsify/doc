import { PageEvent, Reflection } from "typedoc";
import { GjsifyThemeContext } from "../context";
import * as JSX from "../jsx";

export const sidebar = (
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
): JSX.JsxElement => (
  <bs5-sidebar
    class="bg-theme-dark-dark bg-theme-light-white text-theme-light-dark text-theme-dark-light border-end border-gray p-3"
    id="left-sidebar"
    container-selector="router-view, tsd-footer"
    position="left"
    rv-bs5-co-xs-auto-hide="true"
    rv-bs5-co-xl-auto-hide="false"
    rv-bs5-co-xs-auto-show="false"
    rv-bs5-co-xl-auto-show="true"
    rv-bs5-co-xs-mode="'overlap'"
    rv-bs5-co-xl-mode="'side'"
    width="300px"
  >
    <tsd-navigation>{context.navigation(props)}</tsd-navigation>
  </bs5-sidebar>
);
