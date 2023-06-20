import type { GjsifyThemeRenderContext } from "../theme-render-context";
import { JSX } from "typedoc";
import type { DeclarationReflection } from "typedoc";
import { anchorIcon } from "./anchor-icon";
import { classNames } from "../lib";

export const memberSignatures = (
  context: GjsifyThemeRenderContext,
  props: DeclarationReflection
) => (
  <>
    <ul
      class={classNames(
        { "tsd-signatures": true },
        context.getReflectionClasses(props)
      )}
    >
      {props.signatures?.map((item) => (
        <>
          <li class="tsd-signature tsd-anchor-link" id={item.anchor}>
            {context.memberSignatureTitle(item)}
            {anchorIcon(context, item.anchor)}
          </li>
          <li class="tsd-description">{context.memberSignatureBody(item)}</li>
        </>
      ))}
    </ul>
  </>
);
