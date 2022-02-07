import { PageEvent, Reflection } from "typedoc";
import { GjsifyThemeContext } from "../context";
import * as JSX from "../jsx";

export const sidebar = (
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
): JSX.JsxElement => (
  <bs5-sidebar
    class="bg-theme text-theme-light-dark text-theme-dark-light"
    id="left-sidebar"
    container-selector=".container-main, .page-header, .page-footer"
    position="left"
    auto-hide-on-slimmer-than="xl"
    auto-show-on-wider-than="xl"
    mode-on-slimmer-than="xl"
  >
    <div>{context.navigation(props)}</div>
  </bs5-sidebar>
);
