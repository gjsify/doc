import type { DeclarationReflection } from "typedoc";
import { JSX } from "../jsx/index.js";
import { classNames } from "../lib";
import type { GjsifyThemeRenderContext } from "../theme-render-context";

export const memberGetterSetter = (
  context: GjsifyThemeRenderContext,
  props: DeclarationReflection
) => (
  <>
    <ul
      class={classNames(
        {
          "tsd-signatures": true,
        },
        context.getReflectionClasses(props)
      )}
    >
      {!!props.getSignature && (
        <>
          <li class="tsd-signature" id={props.getSignature.anchor}>
            <span class="tsd-signature-symbol">get</span> {props.name}
            {context.memberSignatureTitle(props.getSignature, {
              hideName: true,
            })}
          </li>
          <li class="tsd-description">
            {context.memberSignatureBody(props.getSignature)}
          </li>
        </>
      )}
      {!!props.setSignature && (
        <>
          <li class="tsd-signature" id={props.setSignature.anchor}>
            <span class="tsd-signature-symbol">set</span> {props.name}
            {context.memberSignatureTitle(props.setSignature, {
              hideName: true,
            })}
          </li>
          <li class="tsd-description">
            {context.memberSignatureBody(props.setSignature)}
          </li>
        </>
      )}
    </ul>
  </>
);
