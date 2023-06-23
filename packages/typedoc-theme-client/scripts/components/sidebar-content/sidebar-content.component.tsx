import { Component, TemplateFunction } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils";
import { EventDispatcher } from "@ribajs/events";

import type { SidebarContentComponentScope } from "../../types/index.js";

export class SidebarContentComponent extends Component {
  public static tagName = "tsd-sidebar-content";

  static get observedAttributes() {
    return [];
  }

  protected routerEvents = new EventDispatcher("main");

  public scope: SidebarContentComponentScope = {};

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(SidebarContentComponent.observedAttributes);
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.addEventListeners();
  }

  protected addEventListeners() {
    this.routerEvents.on("transitionCompleted", this.onNewPage, this);
  }

  protected onNewPage() {
    const templateEl = document.getElementById(
      "tsd-sidebar-content-template"
    ) as HTMLTemplateElement | null;
    if (!templateEl) {
      console.warn("[SidebarContentComponent] No template found!");
      return;
    }
    this.scope.template = templateEl.innerHTML;
  }

  protected template(): ReturnType<TemplateFunction> {
    if (hasChildNodesTrim(this)) {
      this.scope.template = this.innerHTML;
    }
    return <div rv-template="template"></div>;
  }
}
