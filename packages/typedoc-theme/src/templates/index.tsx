import type { GjsifyThemeRenderContext } from "../theme-render-context";
import type { ProjectReflection } from "typedoc";
import type { PageEvent } from "typedoc";
import { JSX, Raw } from "../jsx/index.js";

export const indexTemplate = (
  { markdown }: GjsifyThemeRenderContext,
  props: PageEvent<ProjectReflection>
) => (
  <div class="tsd-panel tsd-typography">
    <Raw html={markdown(props.model.readme || [])} />
  </div>
);
