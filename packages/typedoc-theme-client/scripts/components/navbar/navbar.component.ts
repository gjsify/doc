import { Component, TemplateFunction } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils";
import template from "./navbar.component.pug";

import type { NavbarComponentScope } from "../../types";

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
