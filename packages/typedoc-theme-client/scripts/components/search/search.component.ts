import { Component, TemplateFunction } from "@ribajs/core";
import { hasChildNodesTrim, debounceCb } from "@ribajs/utils";
import template from "./search.component.pug";

import type { SearchComponentScope, SearchResult } from "../../types";

export class SearchComponent extends Component {
  public static tagName = "tsd-search";

  static get observedAttributes() {
    return ["base", "port", "hostname"];
  }

  public scope: SearchComponentScope = {
    port: 0,
    hostname: "localhost",
    base: "./",
  };

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(SearchComponent.observedAttributes);
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.initSettings();
    this.initSearch();
  }

  initSettings() {
    if (
      this.scope.hostname === "localhost" &&
      window.remoteSearchOptions?.hostname
    ) {
      this.scope.hostname = window.remoteSearchOptions.hostname;
    }
    if (!this.scope.port && window.remoteSearchOptions?.port) {
      this.scope.port = window.remoteSearchOptions.port;
    }
  }

  initSearch() {
    const field = this.querySelector<HTMLInputElement>("input");
    const results = this.querySelector<HTMLElement>(".results");
    console.debug("initSearch", field, results);

    if (!field || !results) {
      console.error(field, results);
      throw new Error(
        "[SearchComponent] The input field or the result list wrapper was not found"
      );
    }

    let resultClicked = false;
    results.addEventListener("mousedown", () => (resultClicked = true));
    results.addEventListener("mouseup", () => {
      resultClicked = false;
      this.classList.remove("has-focus");
    });

    field.addEventListener("focus", () => this.classList.add("has-focus"));
    field.addEventListener("blur", () => {
      if (!resultClicked) {
        resultClicked = false;
        this.classList.remove("has-focus");
      }
    });

    this.bindEvents(results, field);
  }

  bindEvents(results: HTMLElement, field: HTMLInputElement) {
    field.addEventListener(
      "input",
      debounceCb(() => {
        console.debug("input");
        this.updateResults(results, field);
      }, 500)
    );

    let preventPress = false;
    field.addEventListener("keydown", (e) => {
      preventPress = true;
      if (e.key == "Enter") {
        this.gotoCurrentResult(results, field);
      } else if (e.key == "Escape") {
        field.blur();
      } else if (e.key == "ArrowUp") {
        this.setCurrentResult(results, -1);
      } else if (e.key === "ArrowDown") {
        this.setCurrentResult(results, 1);
      } else {
        preventPress = false;
      }
    });
    field.addEventListener("keypress", (e) => {
      if (preventPress) e.preventDefault();
    });

    /**
     * Start searching by pressing slash.
     */
    document.body.addEventListener("keydown", (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      if (!field.matches(":focus") && e.key === "/") {
        field.focus();
        e.preventDefault();
      }
    });
  }

  async updateResults(results: HTMLElement, query: HTMLInputElement) {
    results.textContent = "";

    const searchText = query.value.trim();
    if (searchText.length < 2) {
      return;
    }

    this.classList.add("loading");

    const url = new URL(window.location.toString());
    url.hostname = this.scope.hostname;
    url.port = this.scope.port.toString();
    // Perform a wildcard search
    url.pathname = `search/*${searchText}*`;
    const res: SearchResult[] = [];

    try {
      const response = await fetch(url.toString());
      res.push(...(await response.json()));
    } catch (error) {
      console.error(error);
      this.classList.remove("ready");
      this.classList.remove("loading");
      this.classList.add("failure");
    }

    this.classList.add("ready");
    this.classList.remove("loading");

    for (let i = 0, c = Math.min(10, res.length); i < c; i++) {
      const row = res[i];

      const item = document.createElement("li");
      item.classList.value = row.classes;

      const anchor = document.createElement("a");
      anchor.href = this.scope.base + row.url;
      anchor.classList.add("tsd-kind-icon");
      anchor.innerHTML = row.name;
      item.append(anchor);

      results.appendChild(item);
    }
  }

  /**
   * Move the highlight within the result set.
   */
  setCurrentResult(results: HTMLElement, dir: number) {
    let current = results.querySelector(".current");
    if (!current) {
      current = results.querySelector(
        dir == 1 ? "li:first-child" : "li:last-child"
      );
      if (current) {
        current.classList.add("current");
      }
    } else {
      let rel: Element | undefined = current;
      // Tricky: We have to check that rel has an offsetParent so that users can't mark a hidden result as
      // current with the arrow keys.
      if (dir === 1) {
        do {
          rel = rel.nextElementSibling || undefined;
        } while (rel instanceof HTMLElement && rel.offsetParent == null);
      } else {
        do {
          rel = rel.previousElementSibling || undefined;
        } while (rel instanceof HTMLElement && rel.offsetParent == null);
      }

      if (rel) {
        current.classList.remove("current");
        rel.classList.add("current");
      }
    }
  }

  /**
   * Navigate to the highlighted result.
   */
  gotoCurrentResult(results: HTMLElement, field: HTMLInputElement) {
    let current = results.querySelector(".current");

    if (!current) {
      current = results.querySelector("li:first-child");
    }

    if (current) {
      const link = current.querySelector("a");
      if (link) {
        window.location.href = link.href;
      }
      field.blur();
    }
  }

  protected template(): ReturnType<TemplateFunction> {
    if (!hasChildNodesTrim(this)) {
      return template(this.scope);
    } else {
      return null;
    }
  }
}
