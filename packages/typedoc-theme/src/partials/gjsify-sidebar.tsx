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
    <tsd-module-menu class="d-block d-md-none my-2"></tsd-module-menu>
    <tsd-sidebar-content>
      {gjsifySidebarContent(context, props)}
    </tsd-sidebar-content>
  </bs5-sidebar>
);

export const gjsifySidebarContent = (
  context: GjsifyThemeRenderContext,
  props: PageEvent<Reflection>
): JSX.Element => (
  <>
    {context.hook("sidebar.begin")}
    {context.hook("pageSidebar.begin")}
    {context.pageNavigation(props)}
    {context.hook("pageSidebar.end")}
    {context.sidebarLinks()}
    {context.navigation(props)}
    {context.hook("sidebar.end")}
  </>
);
