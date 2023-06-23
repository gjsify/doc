import {
  Theme,
  Reflection,
  ReflectionKind,
  ProjectReflection,
  ContainerReflection,
  DeclarationReflection,
  SignatureReflection,
  RenderTemplate,
  UrlMapping,
  RendererEvent,
  Logger,
  PageEvent,
} from "typedoc";
import { JSX } from "./jsx/index.js";
import type { Renderer } from "typedoc";

import { MarkedPlugin } from "typedoc/dist/lib/output/themes/MarkedPlugin";
import { toStyleClass } from "./lib";
import { GjsifyThemeRenderContext } from "./theme-render-context";
import { AssetService } from "./services/asset.service";
import { writeFileSync } from "./utils";
import { join } from "path";

/**
 * Defines a mapping of a {@link Models.Kind} to a template file.
 *
 * Used by {@link GjsifyTheme} to map reflections to output files.
 */
interface TemplateMapping {
  /**
   * {@link DeclarationReflection.kind} this rule applies to.
   */
  kind: ReflectionKind[];

  /**
   * The name of the directory the output files should be written to.
   */
  directory: string;

  /**
   * The name of the template that should be used to render the reflection.
   */
  template: RenderTemplate<PageEvent<any>>;
}

/**
 * Default theme implementation of TypeDoc. If a theme does not provide a custom
 * {@link Theme} implementation, this theme class will be used.
 */
export class GjsifyTheme extends Theme {
  /** @internal */
  markedPlugin: MarkedPlugin;

  assets = new AssetService();

  logger = new Logger();

  getRenderContext(pageEvent: PageEvent<Reflection>) {
    return new GjsifyThemeRenderContext(
      this,
      pageEvent,
      this.application.options
    );
  }

  reflectionTemplate = (pageEvent: PageEvent<ContainerReflection>) => {
    return this.getRenderContext(pageEvent).reflectionTemplate(pageEvent);
  };
  indexTemplate = (pageEvent: PageEvent<ProjectReflection>) => {
    return this.getRenderContext(pageEvent).indexTemplate(pageEvent);
  };
  defaultLayoutTemplate = (
    pageEvent: PageEvent<Reflection>,
    template: RenderTemplate<PageEvent<Reflection>>
  ) => {
    return this.getRenderContext(pageEvent).defaultLayout(template, pageEvent);
  };

  getReflectionClasses(reflection: DeclarationReflection | Reflection) {
    const filters = this.application.options.getValue(
      "visibilityFilters"
    ) as Record<string, boolean>;
    return getReflectionClasses(reflection, filters);
  }

  /**
   * Mappings of reflections kinds to templates used by this theme.
   */
  private mappings: TemplateMapping[] = [
    {
      kind: [ReflectionKind.Class],
      directory: "classes",
      template: this.reflectionTemplate,
    },
    {
      kind: [ReflectionKind.Interface],
      directory: "interfaces",
      template: this.reflectionTemplate,
    },
    {
      kind: [ReflectionKind.Enum],
      directory: "enums",
      template: this.reflectionTemplate,
    },
    {
      kind: [ReflectionKind.Namespace, ReflectionKind.Module],
      directory: "modules",
      template: this.reflectionTemplate,
    },
    {
      kind: [ReflectionKind.TypeAlias],
      directory: "types",
      template: this.reflectionTemplate,
    },
    {
      kind: [ReflectionKind.Function],
      directory: "functions",
      template: this.reflectionTemplate,
    },
    {
      kind: [ReflectionKind.Variable],
      directory: "variables",
      template: this.reflectionTemplate,
    },
  ];

  static URL_PREFIX = /^(http|ftp)s?:\/\//;

  /**
   * Create a new GjsifyTheme instance.
   *
   * @param renderer  The renderer this theme is attached to.
   * @param basePath  The base path of this theme.
   */
  constructor(renderer: Renderer) {
    super(renderer);
    this.markedPlugin = renderer.getComponent("marked") as MarkedPlugin;

    this.listenTo(this.owner, {
      [PageEvent.END]: this.onPageEnd,
      [RendererEvent.END]: this.onRendererEnd,
    });
  }

  onPageEnd(page: PageEvent<Reflection>) {
    this.logger.info(`[GjsifyTheme] Render page "${page.url}"...`);
    if (page.url === "index.html") {
      this.onPageHomeEnd(page);
    }
  }

  onPageHomeEnd(page: PageEvent<Reflection>) {
    this.writeModulesJsonFile(page);
  }

  onRendererEnd(event: RendererEvent) {
    this.logger.info("[GjsifyTheme] onRendererEnd");
    this.assets.copyAssetsRecursively(null, event.outputDirectory, [
      "favicon",
      "logo_raw.svg",
    ]);

    this.assets.copyAssetsRecursively("favicon", event.outputDirectory);

    // this.assets.copyAssets(
    //   [
    //     "logo.svg",
    //     "logo-light.svg",
    //     "main.bundle.js",
    //     "main.css",
    //     "vendors.bundle.js",
    //   ],
    //   event.outputDirectory
    // );
    // this.assets.copyFavicons(event.outputDirectory);
    // this.assets.copyIconset(event.outputDirectory);
  }

  /**
   * Map the models of the given project to the desired output files.
   *
   * @param project  The project whose urls should be generated.
   * @returns        A list of {@link UrlMapping} instances defining which models
   *                 should be rendered to which files.
   */
  getUrls(project: ProjectReflection): UrlMapping[] {
    const urls: UrlMapping[] = [];

    if (false == hasReadme(this.application.options.getValue("readme"))) {
      project.url = "index.html";
      urls.push(
        new UrlMapping<ContainerReflection>(
          "index.html",
          project,
          this.reflectionTemplate
        )
      );
    } else if (
      project.children?.every((child) => child.kindOf(ReflectionKind.Module))
    ) {
      // If there are no non-module children, then there's no point in having a modules page since there
      // will be nothing on it besides the navigation, so redirect the module page to the readme page
      project.url = "index.html";
      urls.push(new UrlMapping("index.html", project, this.indexTemplate));
    } else {
      project.url = "modules.html";
      urls.push(
        new UrlMapping<ContainerReflection>(
          "modules.html",
          project,
          this.reflectionTemplate
        )
      );
      urls.push(new UrlMapping("index.html", project, this.indexTemplate));
    }

    project.children?.forEach((child: Reflection) => {
      if (child instanceof DeclarationReflection) {
        this.buildUrls(child, urls);
      }
    });

    return urls;
  }

  /**
   * Return a url for the given reflection.
   *
   * @param reflection  The reflection the url should be generated for.
   * @param relative    The parent reflection the url generation should stop on.
   * @param separator   The separator used to generate the url.
   * @returns           The generated url.
   */
  static getUrl(
    reflection: Reflection,
    relative?: Reflection,
    separator = "."
  ): string {
    let url = reflection.getAlias();

    if (
      reflection.parent &&
      reflection.parent !== relative &&
      !(reflection.parent instanceof ProjectReflection)
    ) {
      url =
        GjsifyTheme.getUrl(reflection.parent, relative, separator) +
        separator +
        url;
    }

    return url;
  }

  /**
   * Return the template mapping for the given reflection.
   *
   * @param reflection  The reflection whose mapping should be resolved.
   * @returns           The found mapping or undefined if no mapping could be found.
   */
  private getMapping(
    reflection: DeclarationReflection
  ): TemplateMapping | undefined {
    return this.mappings.find((mapping) => reflection.kindOf(mapping.kind));
  }

  /**
   * Build the url for the the given reflection and all of its children.
   *
   * @param reflection  The reflection the url should be created for.
   * @param urls        The array the url should be appended to.
   * @returns           The altered urls array.
   */
  buildUrls(
    reflection: DeclarationReflection,
    urls: UrlMapping[]
  ): UrlMapping[] {
    const mapping = this.getMapping(reflection);
    if (mapping) {
      if (!reflection.url || !GjsifyTheme.URL_PREFIX.test(reflection.url)) {
        const url = [
          mapping.directory,
          GjsifyTheme.getUrl(reflection) + ".html",
        ].join("/");
        urls.push(new UrlMapping(url, reflection, mapping.template));

        reflection.url = url;
        reflection.hasOwnDocument = true;
      }

      reflection.traverse((child) => {
        if (child instanceof DeclarationReflection) {
          this.buildUrls(child, urls);
        } else {
          GjsifyTheme.applyAnchorUrl(child, reflection);
        }
        return true;
      });
    } else if (reflection.parent) {
      GjsifyTheme.applyAnchorUrl(reflection, reflection.parent);
    }

    return urls;
  }

  writeModulesJsonFile(page: PageEvent<Reflection>) {
    const filename = "modules.json";
    this.logger.info(`[GjsifyTheme] Generate ${filename}...`);
    const context = this.getRenderContext(page);
    const outputDirectory = this.application.options.getValue("out");

    const target = join(outputDirectory, "assets", filename);

    const modules = context.getModules(page);
    writeFileSync(target, JSON.stringify(modules, null, 0));
  }

  render(
    page: PageEvent<Reflection>,
    template: RenderTemplate<PageEvent<Reflection>>
  ): string {
    const templateOutput = this.defaultLayoutTemplate(page, template);
    return "<!DOCTYPE html>" + JSX.renderElement(templateOutput);
  }

  /**
   * Generate an anchor url for the given reflection and all of its children.
   *
   * @param reflection  The reflection an anchor url should be created for.
   * @param container   The nearest reflection having an own document.
   */
  static applyAnchorUrl(reflection: Reflection, container: Reflection) {
    if (
      !(reflection instanceof DeclarationReflection) &&
      !(reflection instanceof SignatureReflection)
    ) {
      return;
    }

    if (!reflection.url || !GjsifyTheme.URL_PREFIX.test(reflection.url)) {
      const anchor = GjsifyTheme.getUrl(reflection, container, ".");

      reflection.url = container.url + "#" + anchor;
      reflection.anchor = anchor;
      reflection.hasOwnDocument = false;
    }

    reflection.traverse((child) => {
      GjsifyTheme.applyAnchorUrl(child, container);
      return true;
    });
  }
}

function hasReadme(readme: string) {
  return !readme.endsWith("none");
}

function getReflectionClasses(
  reflection: DeclarationReflection | Reflection,
  filters: Record<string, boolean>
) {
  const classes: string[] = [];

  // Filter classes should match up with the settings function in
  // partials/navigation.tsx.
  for (const key of Object.keys(filters)) {
    if (key === "inherited") {
      if ((reflection as DeclarationReflection).inheritedFrom) {
        classes.push("tsd-is-inherited");
      }
    } else if (key === "protected") {
      if (reflection.flags.isProtected) {
        classes.push("tsd-is-protected");
      }
    } else if (key === "private") {
      if (reflection.flags.isPrivate) {
        classes.push("tsd-is-private");
      }
    } else if (key === "external") {
      if (reflection.flags.isExternal) {
        classes.push("tsd-is-external");
      }
    } else if (key.startsWith("@")) {
      if (key === "@deprecated") {
        if (reflection.isDeprecated()) {
          classes.push(toStyleClass(`tsd-is-${key.substring(1)}`));
        }
      } else if (
        reflection.comment?.hasModifier(key as `@${string}`) ||
        reflection.comment?.getTag(key as `@${string}`)
      ) {
        classes.push(toStyleClass(`tsd-is-${key.substring(1)}`));
      }
    }
  }

  return classes.join(" ");
}
