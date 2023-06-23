import { Component, HttpService, TemplateFunction } from "@ribajs/core";
import { EventDispatcher } from "@ribajs/events";
import { Dropdown } from "@ribajs/bs5";
import { Pjax } from "@ribajs/router";
import type {} from "@ribajs/fuse";

import type {
  ModuleMenuScope,
  Module,
  JsxTsdModuleMenuProps,
  Dataset,
} from "../../types/index.js";

export class ModuleMenuComponent extends Component {
  public static tagName = "tsd-module-menu";

  static get observedAttributes(): (keyof JsxTsdModuleMenuProps)[] {
    return [];
  }

  protected requiredAttributes(): (keyof JsxTsdModuleMenuProps)[] {
    return [];
  }

  protected routerEvents = new EventDispatcher("main");

  public scope: ModuleMenuScope = {
    selectedModule: "Modules",
    onModuleSelect: this.onModuleSelect,
  };

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(ModuleMenuComponent.observedAttributes);
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.addEventListeners();
    await this.fetchData();
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

  public onModuleSelect(mod: Module) {
    console.debug("onModuleSelect");
    this.scope.selectedModule = mod.name;
    const pjax = Pjax.getInstance("main");
    if (!pjax || !mod.url) {
      console.warn("No module with href or no pjax instance found!");
      return;
    }
    Dropdown.hideAll();
    pjax.goTo(mod.url);
  }

  protected setSelectedModule(dataset: Dataset) {
    let selectedModule =
      this.scope.$root?.dataset?.module?.parent?.name ||
      this.scope.$root?.dataset?.module?.name ||
      "Modules";
    if (selectedModule === dataset.projectName) {
      selectedModule = this.scope.$root?.dataset?.module?.name || "Modules";
    }
    this.scope.selectedModule = selectedModule;
  }

  protected async fetchData() {
    const data = await HttpService.getJSON<Module[]>("/assets/modules.json");
    this.scope.modules = data.body;
    console.debug("ModuleMenu", this.scope.modules);
  }

  protected template(): ReturnType<TemplateFunction> {
    return (
      <div class="dropdown">
        <button
          rv-bs5-dropdown=""
          class="btn btn-outline-primary dropdown-toggle d-flex justify-content-between align-items-center"
          id="dropdownMenuModules"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span rv-text="selectedModule">Modules</span>{" "}
          <bs5-icon
            src="/assets/iconset/svg/arrow_carrot_thin.svg"
            size={16}
            direction="down"
          ></bs5-icon>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuModules">
          <fuse-search
            rv-parent
            rv-co-items="modules"
            options="{'keys': ['name', 'packageName']}"
          >
            <div class="mx-2 mb-2">
              <input
                type="search"
                class="form-control"
                placeholder="Filter..."
                aria-label="Filter"
                rv-value="searchPattern"
                rv-on-input="search"
                rv-on-cut="search"
                rv-on-paste="search"
              />
            </div>
            <div class="scrollbar-y-scroll scrollbar-primary">
              <div class="dropdown-header">Modules</div>
              <div rv-show="searchPattern | size" rv-each-result="results">
                <div
                  class="dropdown-item cursor-pointer"
                  rv-add-class="result.item.classNames"
                  rv-route-class-active="result.item.url"
                  rv-route-class-parent-active="result.item.url"
                  rv-on-click="$parent.$parent.onModuleSelect | args result.item"
                >
                  <a rv-href="result.item.url" rv-text="result.item.name"></a>
                </div>
              </div>
              <div rv-if="results | size | eq 0" rv-show="searchPattern | size">
                <div class="dropdown-item">No result</div>
              </div>
              <div rv-hide="searchPattern | size" rv-each-item="items">
                <div
                  class="dropdown-item cursor-pointer"
                  rv-route-class-active="item.url"
                  rv-on-click="$parent.$parent.onModuleSelect | args item"
                >
                  <a rv-href="item.url" rv-text="item.name"></a>
                </div>
              </div>
            </div>
          </fuse-search>
        </div>
      </div>
    );
  }
}
