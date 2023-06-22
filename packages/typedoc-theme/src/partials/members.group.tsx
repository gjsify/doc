import type { GjsifyThemeRenderContext } from "../theme-render-context";
import { JSX } from "../jsx/index.js";
import type { ReflectionGroup } from "typedoc";

export function membersGroup(
  context: GjsifyThemeRenderContext,
  group: ReflectionGroup
) {
  if (group.categories) {
    return (
      <>
        {group.categories.map((item) => (
          <section class="tsd-panel-group tsd-member-group">
            <h2>
              {group.title}
              {!!item.title && <> - {item.title}</>}
            </h2>
            {item.children.map(
              (item) => !item.hasOwnDocument && context.member(item)
            )}
          </section>
        ))}
      </>
    );
  }

  return (
    <section class="tsd-panel-group tsd-member-group">
      <h2>{group.title}</h2>
      {group.children.map(
        (item) => !item.hasOwnDocument && context.member(item)
      )}
    </section>
  );
}
