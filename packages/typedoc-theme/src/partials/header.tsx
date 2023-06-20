import { getDisplayName, hasTypeParameters, join, renderFlags } from "../lib";
import { JSX } from "typedoc";
import type { GjsifyThemeRenderContext } from "../theme-render-context";
import type { PageEvent } from "typedoc";
import { Reflection, ReflectionKind } from "typedoc";

export const header = (
  context: GjsifyThemeRenderContext,
  props: PageEvent<Reflection>
) => {
  const HeadingLevel = props.model.isProject() ? "h2" : "h1";
  return (
    <div class="tsd-page-title">
      {!!props.model.parent && (
        <ul class="tsd-breadcrumb">{context.breadcrumb(props.model)}</ul>
      )}
      <HeadingLevel>
        {props.model.kind !== ReflectionKind.Project &&
          `${ReflectionKind.singularString(props.model.kind)} `}
        {getDisplayName(props.model)}
        {hasTypeParameters(props.model) && (
          <>
            {"<"}
            {join(", ", props.model.typeParameters, (item) => item.name)}
            {">"}
          </>
        )}
        {renderFlags(props.model.flags, props.model.comment)}
      </HeadingLevel>
    </div>
  );
};
