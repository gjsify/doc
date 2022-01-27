import { Component } from "@ribajs/core";

export interface Scope {}

export class HomePageComponent extends Component {
  public static tagName = "home-page";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(HomePageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected template() {
    return null;
  }
}
