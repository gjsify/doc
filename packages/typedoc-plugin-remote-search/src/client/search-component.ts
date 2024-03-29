/**
 * Based on https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/assets/typedoc/components/Search.ts
 */

import { SearchResult } from "../types";
import { debounce } from "./debounce";
import { hasChild } from "./has-child";
import "./global";

export class Search extends HTMLElement {
  serverBaseUrl = window.location.href;

  constructor() {
    super();
  }

  connectedCallback() {
    try {
      this.getOptionsFromWindowObject();
      this.setTemplate();
      setTimeout(() => {
        this.initSearch();
      }, 0);
    } catch (error) {
      console.error("Error on create instance of Search");
      console.error(error);
    }
  }

  getOptionsFromWindowObject() {
    if (window.remoteSearchOptions) {
      if (
        this.serverBaseUrl === window.location.href &&
        window.remoteSearchOptions.serverBaseUrl
      ) {
        this.serverBaseUrl = window.remoteSearchOptions.serverBaseUrl;
      }
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case "server-base-url":
        return this.serverBaseUrlChangedCallback(oldValue, newValue);
      default:
        break;
    }
  }

  serverBaseUrlChangedCallback(oldValue: string, newValue: string) {
    this.serverBaseUrl = newValue;
  }

  initSearch() {
    const field = this.querySelector<HTMLInputElement>("input");
    const results = this.querySelector<HTMLElement>(".results");

    if (!field || !results) {
      throw new Error(
        "The input field or the result list wrapper was not found"
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
      debounce(() => {
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

    const url = new URL(this.serverBaseUrl);
    const separator = url.pathname.endsWith("/") ? "" : "/";

    // Perform a wildcard search
    url.pathname += `${separator}search/*${searchText}*`;

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

    for (const row of res) {
      const item = document.createElement("li");
      item.classList.value = row.classes;

      const anchor = document.createElement("a");
      const separator = this.serverBaseUrl.endsWith("/") ? "" : "/";
      anchor.href = this.serverBaseUrl + separator + row.url;
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

  setTemplate() {
    // Similar template as in default theme
    const template = `
<div class="field">
    <label for="tsd-search-field" class="tsd-widget search no-caption">
        Search
    </label>
    <input type="text" id="tsd-search-field" />
</div>

<ul class="results">
    <li class="state loading">Preparing remote search server...</li>
    <li class="state failure">The remote search server is not available</li>
</ul>
    `;

    if (!hasChild(this)) {
      this.innerHTML = template;
    }
  }
}
