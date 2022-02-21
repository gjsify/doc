import { DeclarationReflection } from "typedoc";
import { GjsifyThemeContext } from "../context";
import * as JSX from "../jsx";

export const memberSignatures = (
  context: GjsifyThemeContext,
  props: DeclarationReflection
) => (
  <tsd-member-signatures>
    <ul class={"tsd-signatures " + props.cssClasses} rv-element="signaturesEl">
      {props.signatures?.map((item, index) => (
        <li
          class="tsd-signature tsd-kind-icon"
          rv-on-click={`showDescByIndex | args ${index}`}
        >
          {context.memberSignatureTitle(item)}
        </li>
      ))}
    </ul>

    <ul class="tsd-descriptions" rv-element="descriptionsEl">
      {props.signatures?.map((item) => (
        <li class="tsd-description">{context.memberSignatureBody(item)}</li>
      ))}
    </ul>
  </tsd-member-signatures>
);
