import type { DeclarationReflection, ReflectionType } from "typedoc";
import { JSX } from "../jsx/index.js";
import {
  getKindClass,
  hasTypeParameters,
  renderTypeParametersSignature,
  wbr,
} from "../lib";
import type { GjsifyThemeRenderContext } from "../theme-render-context";

export function memberDeclaration(
  context: GjsifyThemeRenderContext,
  props: DeclarationReflection
) {
  function renderTypeDeclaration(type: ReflectionType) {
    return (
      <div class="tsd-type-declaration">
        <h4>Type declaration</h4>
        {context.parameter(type.declaration)}
      </div>
    );
  }

  const visitor = { reflection: renderTypeDeclaration };

  return (
    <>
      <div class="tsd-signature">
        <span class={getKindClass(props)}>{wbr(props.name)}</span>
        {renderTypeParametersSignature(context, props.typeParameters)}
        {props.type && (
          <>
            <span class="tsd-signature-symbol">
              {!!props.flags.isOptional && "?"}:
            </span>{" "}
            {context.type(props.type)}
          </>
        )}
        {!!props.defaultValue && (
          <>
            <span class="tsd-signature-symbol">
              {" = "}
              {props.defaultValue}
            </span>
          </>
        )}
      </div>

      {context.commentSummary(props)}

      {hasTypeParameters(props) && context.typeParameters(props.typeParameters)}

      {props.type?.visit<JSX.Children>({
        reflection: renderTypeDeclaration,
        array: (arr) => arr.elementType.visit(visitor),
        intersection: (int) => int.types.map((t) => t.visit(visitor)),
        union: (union) => union.types.map((t) => t.visit(visitor)),
        reference: (ref) => ref.typeArguments?.map((t) => t.visit(visitor)),
        tuple: (ref) => ref.elements.map((t) => t.visit(visitor)),
      })}

      {context.commentTags(props)}

      {context.memberSources(props)}
    </>
  );
}
