import { Component, HttpService, TemplateFunction } from "@ribajs/core";
import { EventDispatcher } from "@ribajs/events";
import { Dropdown } from "@ribajs/bs5";
import { Pjax } from "@ribajs/router";
import type {} from "@ribajs/fuse";

import type {
  ModuleNavigationScope,
  ModuleNavigation,
  JsxTsdModuleNavigationProps,
  Dataset,
  NavigationData,
} from "../../types/index.js";

export class ModuleNavigationComponent extends Component {
  public static tagName = "tsd-module-navigation";

  static get observedAttributes(): (keyof JsxTsdModuleNavigationProps)[] {
    return [];
  }

  protected requiredAttributes(): (keyof JsxTsdModuleNavigationProps)[] {
    return [];
  }

  protected routerEvents = new EventDispatcher("main");

  public scope: ModuleNavigationScope = {
    module: undefined,
    modules: [],
    navigation: undefined,
    subModules: [],
    subNamespaces: [],
    subReferences: [],
    onModuleSelect: this.onModuleSelect,
  };

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(ModuleNavigationComponent.observedAttributes);
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.addEventListeners();
    await this.fetchModuleNavigation();
    if (this.scope.$root?.dataset) {
      this.setSelectedModule(this.scope.$root?.dataset);
    }
  }

  protected async afterBind() {
    await super.afterBind();
    if (this.scope.$root?.dataset) {
      this.setSelectedModule(this.scope.$root?.dataset);
    }
  }

  protected addEventListeners() {
    this.routerEvents.on("newPageReady", this.onNewPage, this);
  }

  protected async onNewPage() {
    if (this.scope.$root?.dataset) {
      this.setSelectedModule(this.scope.$root?.dataset);
    }
  }

  public onModuleSelect(mod: ModuleNavigation, event: Event) {
    console.debug("onModuleSelect", mod, event);
    this.scope.module = mod;
    const pjax = Pjax.getInstance("main");
    if (!pjax || !mod.url) {
      console.warn("No module with href or no pjax instance found!");
      return;
    }
    Dropdown.hideAll(event);
    pjax.goTo(mod.url);
  }

  protected setSelectedModule(dataset: Dataset) {
    const selectedModuleTitle = dataset.module?.title;

    if (!this.scope.modules?.length) {
      throw new Error("No modules set!");
    }

    this.scope.module = this.scope.modules.find(
      (mod) => mod.title === selectedModuleTitle
    );

    if (!this.scope.module) {
      console.warn(`Module with title "${selectedModuleTitle}" not found!`);
      return;
    }

    this.fetchModuleChildNavigation(this.scope.module);
  }

  protected async fetchModuleNavigation() {
    const url = "/assets/navigation-modules.json";
    const data = await HttpService.getJSON<ModuleNavigation[]>(url);
    if (data.status >= 400) {
      if (data.status === 404) {
        throw new Error(`Navigation modules not found at ${url}`);
      } else {
        throw new Error(
          `Navigation modules could not be fetched from ${url}, status: ${data.status}`
        );
      }
    }
    this.scope.modules = data.body;
    console.debug("ModuleNavigation", this.scope.modules);
  }

  protected async fetchModuleChildNavigation(module: ModuleNavigation) {
    const url = "/assets/" + module.filename;
    const data = await HttpService.getJSON<NavigationData>(url);
    if (data.status >= 400) {
      if (data.status === 404) {
        throw new Error(`Navigation data not found at ${url}`);
      } else {
        throw new Error(
          `Navigation data could not be fetched from ${url}, status: ${data.status}`
        );
      }
    }
    this.scope.navigation = data.body;
    console.debug("NavigationData", this.scope.navigation);
    if (this.scope.navigation) {
      this.scope.subModules = this.getFirstLevelChildren(
        "Modules",
        this.scope.navigation.children
      );
      this.scope.subNamespaces = this.getFirstLevelChildren(
        "Namespaces",
        this.scope.navigation.children
      );
      this.scope.subReferences = this.getFirstLevelChildren(
        "References",
        this.scope.navigation.children
      );
    }
  }

  getFirstLevelChildren(
    type: "Modules" | "Namespaces" | "References",
    children: NavigationData[],
    level = 0,
    maxLevel = 2
  ) {
    const result: NavigationData[] = [];
    if (level > maxLevel) {
      return result;
    }
    for (const child of children) {
      // If children is a group and the title is `${type}`
      if (child.isGroup && child.title === type) {
        result.push(...child.children);
      }
      // If children is a group of Modules, also check it's children
      if (type !== "Modules" && child.isGroup && child.title === "Modules") {
        console.debug("check child modules", child);
        for (const child2 of child.children) {
          result.push(
            ...this.getFirstLevelChildren(type, child2.children, ++level)
          );
        }
      }
    }
    return result;
  }

  protected template(): ReturnType<TemplateFunction> {
    return (
      <div rv-show="navigation" class="list-group list-group-flush">
        <div class="list-group-item fw-bold">Modules</div>
        <a
          class="list-group-item list-group-item-action"
          rv-each-item="subModules"
          rv-href="item.url"
        >
          <span rv-html="item.title"></span>
        </a>

        <div class="list-group-item fw-bold">Namespaces</div>
        <a
          class="list-group-item list-group-item-action"
          rv-each-item="subNamespaces"
          rv-href="item.url"
        >
          <span rv-html="item.title"></span>
        </a>

        <div class="list-group-item fw-bold">References</div>
        <a
          class="list-group-item list-group-item-action"
          rv-each-item="subReferences"
          rv-href="item.url"
        >
          <span rv-html="item.title"></span>
        </a>
      </div>
    );
  }
}
