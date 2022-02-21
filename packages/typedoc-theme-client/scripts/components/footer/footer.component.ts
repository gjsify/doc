import { Component, TemplateFunction } from "@ribajs/core";

import type { FooterComponentScope } from "../../types";

export class FooterComponent extends Component {
  public static tagName = "tsd-footer";

  static get observedAttributes() {
    return [];
  }

  public scope: FooterComponentScope = {};

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(FooterComponent.observedAttributes);
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.initFooter();
  }

  initFooter() {
    //
  }

  protected template(): ReturnType<TemplateFunction> {
    return null;
  }
}
