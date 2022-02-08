import { Component, TemplateFunction } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils";
import template from "./navbar.component.pug";

import type { NavbarComponentScope } from "../../types";
import type { Bs5SidebarComponent } from "@ribajs/bs5";

export class NavbarComponent extends Component {
  public static tagName = "tsd-navbar";

  static get observedAttributes() {
    return [];
  }

  public scope: NavbarComponentScope = {};

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(NavbarComponent.observedAttributes);
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.initNavbar();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected async afterAllBind() {
    const sidebarEls = document.getElementsByTagName(
      "bs5-sidebar"
    ) as HTMLCollectionOf<Bs5SidebarComponent>;
    const sidebar = sidebarEls.item(0);
    if (sidebar) {
      sidebar.style.marginTop = this.offsetHeight + "px";
      sidebar.style.maxHeight = `calc(100vh - ${this.offsetHeight}px)`;
    }
  }

  initNavbar() {
    //
  }

  protected template(): ReturnType<TemplateFunction> {
    if (!hasChildNodesTrim(this)) {
      return template(this.scope);
    } else {
      return null;
    }
  }
}
