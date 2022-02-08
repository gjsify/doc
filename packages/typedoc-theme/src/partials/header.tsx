import { PageEvent, Reflection } from "typedoc";
import { GjsifyThemeContext } from "../context";
import * as JSX from "../jsx";
import { hasTypeParameters, join } from "../utils";

export const header = (
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
): JSX.JsxElement => {
  const isHome = props.url === "index.html";
  return (
    <tsd-header>
      {!isHome && (
        <header>
          <div class="tsd-page-title">
            <div class="container">
              {!!props.model.parent && (
                <ul class="tsd-breadcrumb">
                  {context.breadcrumb(props.model)}
                </ul>
              )}
              <h1>
                {props.model.kindString !== "Project" &&
                  `${props.model.kindString ?? ""} `}
                {props.model.name}
                {hasTypeParameters(props.model) && (
                  <span>
                    {"<"}
                    {join(
                      ", ",
                      props.model.typeParameters,
                      (item) => item.name
                    )}
                    {">"}
                  </span>
                )}
              </h1>
            </div>
          </div>
        </header>
      )}
    </tsd-header>
  );
};
