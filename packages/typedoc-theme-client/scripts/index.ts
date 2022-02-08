import { ready } from "@ribajs/utils/src/dom";
import { Riba, View, coreModule } from "@ribajs/core";
import { routerModule, FadeTransition } from "@ribajs/router";
import { bs5Module } from "@ribajs/bs5";
import { SearchOptions } from "./types";

// Own
import * as components from "./components";
import * as pages from "./pages";
import * as binders from "./binders";
import * as formatters from "./formatters";

// From typedoc default theme
import { typedocBootstrap } from "./typedoc-bootstrap";
import { EventDispatcher } from "@ribajs/events";

import type { Application } from "./typedoc-app";

declare global {
  interface Window {
    remoteSearchOptions?: Partial<SearchOptions>;
    app: Application;
  }
}

export class CSRApp {
  protected view?: View;
  protected riba = new Riba();
  protected model: any = {};
  protected routerEvents: EventDispatcher;

  constructor() {
    this.riba.configure({
      prefix: ["rv", "csr-rv"],
    });

    // Regist custom components
    this.riba.module.component.regists({
      ...components,
      ...pages,
    });
    this.riba.module.binder.regists({ ...binders });
    this.riba.module.formatter.regists({ ...formatters });

    // Regist modules
    this.riba.module.regist(coreModule.init());
    this.riba.module.regist(
      routerModule.init({
        defaultTransition: new FadeTransition(),
      })
    );
    this.riba.module.regist(bs5Module.init());

    this.view = this.riba.bind(document.body, this.model);

    this.view.registComponents();

    this.riba.lifecycle.events.on(
      "ComponentLifecycle:error",
      (error: Error) => {
        console.error(error);
      }
    );

    this.routerEvents = new EventDispatcher("main");

    this.routerEvents.on("newPageReady", () => {
      typedocBootstrap();
    });
    typedocBootstrap();
  }
}

ready(() => {
  new CSRApp();
});
