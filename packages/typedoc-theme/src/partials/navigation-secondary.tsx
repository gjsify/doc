// See https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/partials/navigation.tsx

import {
  PageEvent,
  Reflection,
  ContainerReflection,
  ReflectionKind
} from "typedoc";
import { GjsifyThemeContext } from "../context";
import * as JSX from "../jsx";

import { wbr } from "../utils";


export const navigationSecondary = (
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
) => {
  return (
    <div>
      {secondaryNavigation(context, props)}
    </div>
  );
};

/** Navigation for the content of the current module */
export const secondaryNavigation = (
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
) => {
  const children =
    props.model instanceof ContainerReflection
      ? props.model.children || []
      : [];

  // Multiple entry points, and on main project page.
  if (
    props.model.isProject() &&
    props.model.getChildrenByKind(ReflectionKind.Module).length
  ) {
    return <nav class="tsd-navigation secondary"></nav>;
  }

  // TODO: TypeDoc 0.21 did special things here. If there were more than 40
  // children of this page's parent, it only displayed this page's children.
  // Otherwise, it displayed *everything*. For now, only display page children.
  // It seems weird to do this according to a random hardcoded number. At the very
  // least this should be added as a configurable flag, but maybe even the whole
  // behavior should be configurable globally...

  const pageNavigation = (
    <ul>
      {children
        .filter((child) => !child.kindOf(ReflectionKind.SomeModule))
        .map((child) => {
          return (
            <li class={child.cssClasses}>
              <a href={context.urlTo(child)} class="tsd-kind-icon">
                {wbr(child.name)}
              </a>
            </li>
          );
        })}
    </ul>
  );

  if (props.model.kindOf(ReflectionKind.SomeModule | ReflectionKind.Project)) {
    return <nav class="tsd-navigation secondary">{pageNavigation}</nav>;
  }

  return (
    <nav class="tsd-navigation secondary">
      <ul>
        <li class={"current " + props.model.cssClasses}>
          <a href={context.urlTo(props.model)} class="tsd-kind-icon">
            {wbr(props.model.name)}
          </a>
          {pageNavigation}
        </li>
      </ul>
    </nav>
  );
}
