import type { GjsifyThemeRenderContext } from "../theme-render-context";
import { JSX } from "typedoc";
import type { Reflection } from "typedoc";

export const breadcrumb = (
  context: GjsifyThemeRenderContext,
  props: Reflection
): JSX.Element | undefined =>
  props.parent ? (
    <>
      {context.breadcrumb(props.parent)}
      <li>
        {props.url ? (
          <a href={context.urlTo(props)}>{props.name}</a>
        ) : (
          <span>{props.name}</span>
        )}
      </li>
    </>
  ) : props.url ? (
    <li>
      <a href={context.urlTo(props)}>{props.name}</a>
    </li>
  ) : undefined;
