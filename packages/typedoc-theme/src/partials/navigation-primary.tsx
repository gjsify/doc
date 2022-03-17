// See https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/partials/navigation.tsx

import {
  PageEvent,
  Reflection,
  DeclarationReflection,
  ReflectionKind
} from "typedoc";
import { GjsifyThemeContext } from "../context";
import * as JSX from "../jsx";

import { classNames, wbr, partition } from "../utils";

/** List of modules */
export const primaryNavigation = (
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
) => {
  // Create the navigation for the current page:
  // If there are modules marked as "external" then put them in their own group.

  const modules = props.model.project.getChildrenByKind(
    ReflectionKind.SomeModule
  );
  const projectLinkName = "Modules";

  const [ext, int] = partition(modules, (m) => m.flags.isExternal);

  if (ext.length === 0) {
    return (
      <nav class="tsd-navigation primary">
        <ul>
          <li class={classNames({ current: props.model.isProject() })}>
            <a href={context.urlTo(props.model.project)}>{projectLinkName}</a>
          </li>
          {int.map(link)}
        </ul>
      </nav>
    );
  }

  return (
    <nav class="tsd-navigation primary">
      <ul>
        <li class={classNames({ current: props.model.isProject() })}>
          <a href={context.urlTo(props.model.project)}>{projectLinkName}</a>
        </li>
        <li class="label tsd-is-external">
          <span>Internals</span>
        </li>
        {int.map(link)}
        <li class="label tsd-is-external">
          <span>Externals</span>
        </li>
        {ext.map(link)}
      </ul>
    </nav>
  );

  function link(mod: DeclarationReflection) {
    const current = inPath(mod, props.model);
    let childNav: JSX.JsxElement | undefined;
    if (current) {
      const childModules = mod.children?.filter((m) =>
        m.kindOf(ReflectionKind.SomeModule)
      );
      if (childModules?.length) {
        childNav = <ul>{childModules.map(link)}</ul>;
      }
    }

    return (
      <li class={classNames({ current }) + " " + mod.cssClasses}>
        <a href={context.urlTo(mod)}>{wbr(mod.name)}</a>
        {childNav}
      </li>
    );
  }
}

function inPath(
  thisPage: Reflection,
  toCheck: Reflection | undefined
): boolean {
  while (toCheck) {
    if (toCheck.isProject()) return false;

    if (thisPage === toCheck) return true;

    toCheck = toCheck.parent;
  }

  return false;
}
