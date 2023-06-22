import type { GjsifyThemeRenderContext } from "../theme-render-context";
import { JSX } from "../jsx/index.js";
import { ContainerReflection, DeclarationReflection } from "typedoc";
import { classNames } from "../lib";

export function members(
  context: GjsifyThemeRenderContext,
  props: ContainerReflection
) {
  if (props.categories && props.categories.length) {
    return (
      <>
        {props.categories.map(
          (item) =>
            !item.allChildrenHaveOwnDocument() && (
              <section
                class={classNames(
                  { "tsd-panel-group": true, "tsd-member-group": true },
                  props instanceof DeclarationReflection
                    ? context.getReflectionClasses(props)
                    : ""
                )}
              >
                <h2>{item.title}</h2>
                {item.children.map(
                  (item) => !item.hasOwnDocument && context.member(item)
                )}
              </section>
            )
        )}
      </>
    );
  }

  return (
    <>
      {props.groups?.map(
        (item) =>
          !item.allChildrenHaveOwnDocument() && context.membersGroup(item)
      )}
    </>
  );
}
