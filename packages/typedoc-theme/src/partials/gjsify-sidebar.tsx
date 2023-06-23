import { PageEvent, Reflection } from "typedoc";
import { GjsifyThemeRenderContext } from "../theme-render-context";
import { JSX } from "../jsx";

export const gjsifySidebar = (
  context: GjsifyThemeRenderContext,
  props: PageEvent<Reflection>
): JSX.Element => (
  <bs5-sidebar
    class="bg-td-dark bg-tl-white text-tl-dark text-td-light border-end border-tl-gray border-td-black p-3"
    id="left-sidebar"
    container-selector="router-view"
    position="left"
    rv-bs5-co-xs-auto-hide="true"
    rv-bs5-co-xl-auto-hide="false"
    rv-bs5-co-xs-auto-show="false"
    rv-bs5-co-xl-auto-show="true"
    rv-bs5-co-xs-mode="'overlap'"
    rv-bs5-co-xl-mode="'side'"
    width="300px"
  >
    <tsd-navigation-primary class="d-block d-md-none my-2"></tsd-navigation-primary>
    <tsd-navigation-secondary>
      {context.navigationSecondary(props)}
    </tsd-navigation-secondary>
  </bs5-sidebar>
);
