import { getKindClass, join, renderTypeParametersSignature, wbr } from "../lib";
import type { GjsifyThemeRenderContext } from "../theme-render-context";
import { JSX } from "../jsx/index.js";
import {
  ParameterReflection,
  ReflectionKind,
  SignatureReflection,
} from "typedoc";

function renderParameterWithType(
  context: GjsifyThemeRenderContext,
  item: ParameterReflection
) {
  return (
    <>
      {!!item.flags.isRest && <span class="tsd-signature-symbol">...</span>}
      <span class="tsd-kind-parameter">{item.name}</span>
      <span class="tsd-signature-symbol">
        {!!item.flags.isOptional && "?"}
        {!!item.defaultValue && "?"}
        {": "}
      </span>
      {context.type(item.type)}
    </>
  ) as JSX.Element;
}

function renderParameterWithoutType(item: ParameterReflection) {
  return (
    <>
      {!!item.flags.isRest && <span class="tsd-signature-symbol">...</span>}
      <span class="tsd-kind-parameter">{item.name}</span>
      {(item.flags.isOptional || item.defaultValue) && (
        <span class="tsd-signature-symbol">?</span>
      )}
    </>
  ) as JSX.Element;
}

export function memberSignatureTitle(
  context: GjsifyThemeRenderContext,
  props: SignatureReflection,
  {
    hideName = false,
    arrowStyle = false,
  }: { hideName?: boolean; arrowStyle?: boolean } = {}
) {
  const hideParamTypes = context.options.getValue("hideParameterTypesInTitle");
  const renderParam = hideParamTypes
    ? renderParameterWithoutType
    : renderParameterWithType.bind(null, context);

  return (
    <>
      {!hideName ? (
        <span class={getKindClass(props)}>{wbr(props.name)}</span>
      ) : (
        <>
          {props.kind === ReflectionKind.ConstructorSignature && (
            <>
              {!!props.flags.isAbstract && (
                <span class="tsd-signature-symbol">abstract </span>
              )}
              <span class="tsd-signature-symbol">new </span>
            </>
          )}
        </>
      )}
      {renderTypeParametersSignature(context, props.typeParameters)}
      <span class="tsd-signature-symbol">(</span>
      {join(", ", props.parameters ?? [], renderParam)}
      <span class="tsd-signature-symbol">)</span>
      {!!props.type && (
        <>
          <span class="tsd-signature-symbol">{arrowStyle ? " => " : ": "}</span>
          {context.type(props.type)}
        </>
      )}
    </>
  );
}
