// See https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/partials/navigation.tsx

import {
  PageEvent,
  Reflection,
  ContainerReflection,
  ReflectionKind
} from "typedoc";
import { GjsifyThemeContext } from "../context";
import * as JSX from "../jsx";
import { Navigation, NavigationSecondary } from "../types/index.js";

import { wbr } from "../utils";

/** Navigation for the content of the current module */
export const navigationSecondaryObject = (
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
) => {
  const children =
    props.model instanceof ContainerReflection
      ? props.model.children || []
      : [];

    const secondaryNav: NavigationSecondary = {
      pageNavigation: []
    }

  // Multiple entry points, and on main project page.
  if (
    props.model.isProject() &&
    props.model.getChildrenByKind(ReflectionKind.Module).length
  ) {
    return secondaryNav;
  }

  // TODO: TypeDoc 0.21 did special things here. If there were more than 40
  // children of this page's parent, it only displayed this page's children.
  // Otherwise, it displayed *everything*. For now, only display page children.
  // It seems weird to do this according to a random hardcoded number. At the very
  // least this should be added as a configurable flag, but maybe even the whole
  // behavior should be configurable globally...

  secondaryNav.pageNavigation = 
    children
    .filter((child) => !child.kindOf(ReflectionKind.SomeModule))
    .map((child) => {

      const childNav: Navigation = {
        classNames: child.cssClasses || "",
        href: context.urlTo(child),
        name: child.name,
        children: [],

        // TODO
        isExtern: false,
        isIntern: true
      }

      return childNav;
    });

  if (props.model.kindOf(ReflectionKind.SomeModule | ReflectionKind.Project)) {
    return secondaryNav;
  }

  secondaryNav.classNames = "current " + props.model.cssClasses;
  secondaryNav.href = context.urlTo(props.model);
  secondaryNav.name = props.model.name;

  return secondaryNav;
}

/** Navigation for the content of the current module */
export const navigationSecondary = (
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
) => {

  const secondaryNavObj = navigationSecondaryObject(context, props);

  // Multiple entry points, and on main project page.
  if (
    !secondaryNavObj.name && !secondaryNavObj.pageNavigation
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
      {secondaryNavObj.pageNavigation
        .map((child) => {
          return (
            <li class={child.classNames}>
              <a href={child.href} class="tsd-kind-icon">
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
        <li class={secondaryNavObj.classNames}>
          <a href={secondaryNavObj.href} class="tsd-kind-icon">
            {wbr(secondaryNavObj.name || "")}
          </a>
          {pageNavigation}
        </li>
      </ul>
    </nav>
  );
}
