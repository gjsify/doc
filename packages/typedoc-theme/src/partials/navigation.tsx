import {
  DeclarationReflection,
  ProjectReflection,
  Reflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
} from "typedoc";
import { JSX } from "../jsx/index.js";
import { classNames, getDisplayName, wbr } from "../lib";

import type { PageEvent } from "typedoc";
import type { GjsifyThemeRenderContext } from "../theme-render-context";
import type { Module, NavigationData } from "../types";

export function sidebarLinks(context: GjsifyThemeRenderContext) {
  const links = Object.entries(context.options.getValue("sidebarLinks"));
  if (!links.length) return null;
  return (
    <nav id="tsd-sidebar-links" class="tsd-navigation my-3">
      {links.map(([label, url]) => (
        <a href={url} target="_blank">
          {label}
        </a>
      ))}
    </nav>
  );
}

type NavigationElement =
  | ReflectionCategory
  | ReflectionGroup
  | DeclarationReflection;

function getNavigationElements(
  parent: NavigationElement | ProjectReflection,
  opts: { includeCategories: boolean; includeGroups: boolean }
): NavigationElement[] {
  if (parent instanceof ReflectionCategory) {
    return parent.children;
  }

  if (parent instanceof ReflectionGroup) {
    if (opts.includeCategories && parent.categories) {
      return parent.categories;
    }
    return parent.children;
  }

  if (!parent.kindOf(ReflectionKind.SomeModule | ReflectionKind.Project)) {
    return [];
  }

  if (parent.categories && opts.includeCategories) {
    return parent.categories;
  }

  if (parent.groups && opts.includeGroups) {
    return parent.groups;
  }

  return parent.children || [];
}

export function getModulesData(
  context: GjsifyThemeRenderContext,
  props: PageEvent<Reflection>
) {
  const opts = context.options.getValue("navigation");
  const elements = getNavigationElements(props.project, opts);
  const modules: Module[] = [];
  for (const el of elements) {
    if (
      el instanceof DeclarationReflection &&
      el.kind === ReflectionKind.Module
    ) {
      modules.push({
        // kind: el.kind,
        name: el.name,
        url: "/" + el.url,
        packageName: el.project.packageName,
        packageVersion: el.packageVersion || el.project.packageVersion,
      });
    }
  }
  return modules;
}

export function navigationData(
  context: GjsifyThemeRenderContext,
  props: PageEvent<Reflection>,
  forceOptions: {
    includeCategories?: boolean;
    includeGroups?: boolean;
    fullTree?: boolean;
  } = {}
): NavigationData {
  const opts = { ...context.options.getValue("navigation"), ...forceOptions };
  // Create the navigation for the current page
  // Recurse to children if the parent is some kind of module

  return createNavElementData(props.project);

  function linksData(
    mod: NavigationElement,
    parents: string[]
  ): NavigationData {
    const nameClasses = classNames(
      { deprecated: mod instanceof Reflection && mod.isDeprecated() },
      mod instanceof DeclarationReflection
        ? context.getReflectionClasses(mod)
        : void 0
    );

    const _children = getNavigationElements(mod, opts);

    if (
      !_children.length ||
      (!opts.fullTree &&
        mod instanceof Reflection &&
        !navigationInPath(props, mod))
    ) {
      return createNavElementData(mod, parents, nameClasses);
    }

    const nav = createNavElementData(mod, parents);

    nav.children = _children.map((c) =>
      linksData(
        c,
        mod instanceof Reflection
          ? [mod.getFullName()]
          : [...parents, mod.title]
      )
    );

    return nav;
  }

  function createNavElementData(
    child: NavigationElement | ProjectReflection,
    parents: string[] = [],
    nameClasses?: string
  ): NavigationData {
    const key =
      child instanceof Reflection
        ? child.getFullName()
        : [...parents, child.title].join("$");

    // const active = child instanceof Reflection && inPath(child);
    // const current = child === props.model;
    // const classes = classNames({}, nameClasses);

    const children: NavigationData[] = [];

    for (const c of getNavigationElements(child, opts)) {
      // Ignore root Modules which are not active / in path on not fullTree
      if (!opts.fullTree && !navigationInPath(props, c)) continue;

      const parentsNext =
        child instanceof Reflection
          ? [child.getFullName()]
          : [...parents, child.title];

      children.push(linksData(c, parentsNext));
    }

    if (child instanceof Reflection) {
      return {
        key,
        // active,
        // current,
        url: context.absoluteUrl(child.url),
        title: getDisplayName(child), // TODO wbr
        // classes,
        kind: child.kind,
        children,
      };
    }

    return {
      // key,
      // active,
      // current,
      title: child.title,
      isGroup: child instanceof ReflectionGroup,

      // classes,
      children,
    };
  }
}

export function navigation(
  context: GjsifyThemeRenderContext,
  props: PageEvent<Reflection>
) {
  const opts = context.options.getValue("navigation");
  // Create the navigation for the current page
  // Recurse to children if the parent is some kind of module

  // console.debug("navigation", navigationData(context, props));

  const addTitle = false;

  return (
    <nav class="tsd-navigation">
      {addTitle ? createNavElement(props.project) : <></>}
      <ul class="tsd-small-nested-navigation">
        {getNavigationElements(props.project, opts).map((c) => {
          // Ignore root Modules which are not active / in path
          if (!opts.fullTree && !navigationInPath(props, c)) return null;
          return <li>{links(c, [])}</li>;
        })}
      </ul>
    </nav>
  );

  function links(mod: NavigationElement, parents: string[]) {
    const nameClasses = classNames(
      { deprecated: mod instanceof Reflection && mod.isDeprecated() },
      mod instanceof DeclarationReflection
        ? context.getReflectionClasses(mod)
        : void 0
    );

    const children = getNavigationElements(mod, opts);

    if (
      !children.length ||
      (!opts.fullTree &&
        mod instanceof Reflection &&
        !navigationInPath(props, mod))
    ) {
      return createNavElement(mod, nameClasses);
    }

    return (
      <details
        class={classNames({ "tsd-index-accordion": true }, nameClasses)}
        open={mod instanceof Reflection && navigationInPath(props, mod)}
        data-key={
          mod instanceof Reflection
            ? mod.getFullName()
            : [...parents, mod.title].join("$")
        }
      >
        <summary class="tsd-accordion-summary">
          {context.icons.chevronDown()}
          {createNavElement(mod)}
        </summary>
        <div class="tsd-accordion-details">
          <ul class="tsd-nested-navigation">
            {children.map((c) => (
              <li>
                {links(
                  c,
                  mod instanceof Reflection
                    ? [mod.getFullName()]
                    : [...parents, mod.title]
                )}
              </li>
            ))}
          </ul>
        </div>
      </details>
    );
  }

  function createNavElement(
    child: NavigationElement | ProjectReflection,
    nameClasses?: string
  ) {
    if (child instanceof Reflection) {
      return (
        <a
          href={context.urlTo(child)}
          class={classNames({ current: child === props.model }, nameClasses)}
        >
          {context.icons[child.kind]()}
          <span>{wbr(getDisplayName(child))}</span>
        </a>
      );
    }

    return <span>{child.title}</span>;
  }
}

export function pageNavigation(
  context: GjsifyThemeRenderContext,
  props: PageEvent<Reflection>
) {
  const levels: JSX.Element[][] = [[]];

  function finalizeLevel() {
    const built = (
      <ul>
        {levels.pop()?.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
    );
    levels[levels.length - 1].push(built);
  }

  for (const heading of props.pageHeadings) {
    const inferredLevel = heading.level ? heading.level + 1 : 1;
    while (inferredLevel < levels.length) {
      finalizeLevel();
    }
    if (inferredLevel > levels.length) {
      // Lower level than before
      levels.push([]);
    }

    levels[levels.length - 1].push(
      <a href={heading.link} class={heading.classes}>
        {heading.kind && context.icons[heading.kind]()}
        <span>{wbr(heading.text)}</span>
      </a>
    );
  }

  while (levels.length > 1) {
    finalizeLevel();
  }

  if (!levels[0].length) {
    return <></>;
  }

  return (
    <details open={true} class="tsd-index-accordion tsd-page-navigation my-3">
      <summary class="tsd-accordion-summary">
        <h3>
          {context.icons.chevronDown()}
          On This Page
        </h3>
      </summary>
      <div class="tsd-accordion-details">
        <ul>
          {levels[0].map((l) => (
            <li>{l}</li>
          ))}
        </ul>
      </div>
    </details>
  );
}

/** Get the current module */
export function getCurrentModule(
  context: GjsifyThemeRenderContext,
  props: PageEvent<Reflection>
) {
  const modules = props.model.project.getChildrenByKind(
    ReflectionKind.SomeModule
  );
  const parentMod = modules.find((mod) => inPath(mod, props.model));
  const childMod = parentMod?.children?.find(
    (mod) => mod.kindOf(ReflectionKind.SomeModule) && inPath(mod, props.model)
  );
  const currentModule = childMod || parentMod;
  let module: Module | undefined;

  if (currentModule && currentModule.url) {
    module = {
      name: currentModule.name,
      url: currentModule.url,
    };
  }

  return module;
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

function navigationInPath(
  props: PageEvent<Reflection>,
  mod: NavigationElement
) {
  let iter: Reflection | undefined = props.model;
  do {
    if (iter == mod) return true;
    iter = iter.parent;
  } while (iter);
  return false;
}
