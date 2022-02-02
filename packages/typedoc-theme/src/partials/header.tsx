import { PageEvent, DefaultThemeRenderContext, Reflection } from "typedoc";
import * as JSX from "../jsx";
import { hasTypeParameters, join } from "../lib";

export const header = (
  context: DefaultThemeRenderContext,
  props: PageEvent<Reflection>
): JSX.JsxElement => (
  <header>
    <tsd-navbar class="tsd-page-toolbar"></tsd-navbar>
    <div class="tsd-page-title">
      <div class="container">
        {!!props.model.parent && (
          <ul class="tsd-breadcrumb">{context.breadcrumb(props.model)}</ul>
        )}
        <h1>
          {props.model.kindString !== "Project" &&
            `${props.model.kindString ?? ""} `}
          {props.model.name}
          {hasTypeParameters(props.model) && (
            <>
              {"<"}
              {join(", ", props.model.typeParameters, (item) => item.name)}
              {">"}
            </>
          )}
        </h1>
      </div>
    </div>
  </header>
);
