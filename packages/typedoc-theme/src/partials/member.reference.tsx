import type { GjsifyThemeRenderContext } from "../theme-render-context";
import { JSX } from "typedoc";
import type { ReferenceReflection } from "typedoc";

export const memberReference = (
  { urlTo }: GjsifyThemeRenderContext,
  props: ReferenceReflection
) => {
  const referenced = props.tryGetTargetReflectionDeep();

  if (!referenced) {
    return <>Re-exports {props.name}</>;
  }

  if (props.name === referenced.name) {
    return (
      <>
        Re-exports <a href={urlTo(referenced)}>{referenced.name}</a>
      </>
    );
  }

  return (
    <>
      Renames and re-exports <a href={urlTo(referenced)}>{referenced.name}</a>
    </>
  );
};
