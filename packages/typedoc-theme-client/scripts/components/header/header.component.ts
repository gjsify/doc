import { Component, TemplateFunction } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils";
import template from "./header.component.pug";

import type { HeaderComponentScope } from "../../types";

export class HeaderComponent extends Component {
  public static tagName = "tsd-header";

  static get observedAttributes() {
    return [];
  }

  public scope: HeaderComponentScope = {};

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(HeaderComponent.observedAttributes);
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.initHeader();
  }

  initHeader() {
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
