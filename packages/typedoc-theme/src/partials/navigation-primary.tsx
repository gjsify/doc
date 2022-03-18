// See https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/partials/navigation.tsx

import {
  PageEvent,
  Reflection,
  DeclarationReflection,
  ReflectionKind
} from "typedoc";
import { GjsifyThemeContext } from "../context.jsx";
import * as JSX from "../jsx/index.js";
import { Navigation, NavigationPrimary } from "../types/index.js";
import { classNames, wbr, partition } from "../utils/index.js";

/** List of modules object */
export const navigationPrimaryObject = (
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
) => {
  // Create the navigation for the current page:
  // If there are modules marked as "external" then put them in their own group.

  const projectLinkName = "Modules";

  const modules = props.model.project.getChildrenByKind(
    ReflectionKind.SomeModule
  );  

  const [ext, int] = partition(modules, (m) => m.flags.isExternal);

  const primaryNav: NavigationPrimary = {
    name: projectLinkName,
    href: context.urlTo(props.model.project),
    classNames: classNames({ current: props.model.isProject() }),
    intern: int.map((mod) => linkObj(mod, context, props)),
    extern: ext.map((mod) => linkObj(mod, context, props))
  }

  return primaryNav;
}

/** List of modules jsx elements */
export const navigationPrimary = (
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
) => {
  const primaryNav = navigationPrimaryObject(context, props);

  if (primaryNav.extern.length === 0) {
    return (
      <nav class="tsd-navigation primary">
        <ul>
          <li class={ primaryNav.classNames }>
            <a href={ primaryNav.href }>{ wbr(primaryNav.name) }</a>
          </li>
          { primaryNav.extern.map(link) }
        </ul>
      </nav>
    );
  }

  return (
    <nav class="tsd-navigation primary">
      <ul>
        <li class={ primaryNav.classNames }>
          <a href={ primaryNav.href }>{ wbr(primaryNav.name) }</a>
        </li>
        <li class="label tsd-is-external">
          <span>Internals</span>
        </li>
        { primaryNav.extern.map(link) }
        <li class="label tsd-is-external">
          <span>Externals</span>
        </li>
        { primaryNav.extern.map(link) }
      </ul>
    </nav>
  );
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

function linkObj(mod: DeclarationReflection, context: GjsifyThemeContext, props: PageEvent<Reflection>) {
  const current = inPath(mod, props.model);
  const modulesNav: Navigation = {
    name: mod.name,
    href: context.urlTo(mod),
    classNames: classNames({ current }) + " " + mod.cssClasses,
    children: []
  }

  if (current) {
    const childModules = mod.children?.filter((m) =>
      m.kindOf(ReflectionKind.SomeModule)
    );
    if (childModules?.length) {
      modulesNav.children = childModules.map((mod) => linkObj(mod, context, props));
    }
  }

  return modulesNav;
}

function link(mod: Navigation) {
  let childNav: JSX.JsxElement | undefined;
  if (mod.children.length) {
    childNav = <ul>{mod.children.map((mod) => link(mod))}</ul>;
  }

  return (
    <li class={ mod.classNames }>
      <a href={ mod.href }>{ wbr(mod.name) }</a>
      { childNav }
    </li>
  );
}