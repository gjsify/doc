import type { GjsifyThemeRenderContext } from "../theme-render-context";
import { ArrayType, ReferenceType, SignatureReflection, Type } from "typedoc";
import { JSX } from "../jsx/index.js";

export const typeAndParent = (
  context: GjsifyThemeRenderContext,
  props: Type
): JSX.Element => {
  if (!props) return (<>void</>) as JSX.Element;

  if (props instanceof ArrayType) {
    return (
      <>
        {context.typeAndParent(props.elementType)}
        []
      </>
    ) as JSX.Element;
  }

  if (props instanceof ReferenceType && props.reflection) {
    const refl =
      props.reflection instanceof SignatureReflection
        ? props.reflection.parent
        : props.reflection;
    const parent = refl?.parent;

    return (
      <>
        {parent?.url ? (
          <a href={context.urlTo(parent)}>{parent.name}</a>
        ) : (
          parent?.name
        )}
        .
        {refl?.url ? <a href={context.urlTo(refl)}>{refl.name}</a> : refl?.name}
      </>
    ) as JSX.Element;
  }

  return (<>{props.toString()}</>) as JSX.Element;
};
