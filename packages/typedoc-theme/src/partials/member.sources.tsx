import type { GjsifyThemeRenderContext } from "../theme-render-context";
import { JSX } from "../jsx/index.js";
import type { DeclarationReflection, SignatureReflection } from "typedoc";

export const memberSources = (
  context: GjsifyThemeRenderContext,
  props: SignatureReflection | DeclarationReflection
) => {
  const sources: JSX.Element[] = [];

  if (props.implementationOf) {
    sources.push(
      (
        <p>
          {"Implementation of "}
          {context.typeAndParent(props.implementationOf)}
        </p>
      ) as JSX.Element
    );
  }
  if (props.inheritedFrom) {
    sources.push(
      (
        <p>
          {"Inherited from "}
          {context.typeAndParent(props.inheritedFrom)}
        </p>
      ) as JSX.Element
    );
  }
  if (props.overwrites) {
    sources.push(
      (
        <p>
          {"Overrides "}
          {context.typeAndParent(props.overwrites)}
        </p>
      ) as JSX.Element
    );
  }
  if (props.sources) {
    sources.push(
      (
        <ul>
          {props.sources.map((item) =>
            item.url ? (
              <li>
                {"Defined in "}
                <a href={item.url}>
                  {item.fileName}:{item.line}
                </a>
              </li>
            ) : (
              <li>
                Defined in {item.fileName}:{item.line}
              </li>
            )
          )}
        </ul>
      ) as JSX.Element
    );
  }

  if (sources.length === 0) {
    return <></>;
  }

  return (<aside class="tsd-sources">{sources}</aside>) as JSX.Element;
};
