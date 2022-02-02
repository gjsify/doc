import { Search } from "./search-component";
import { ready } from "./ready";
import type { PluginOptions } from "../types";

declare global {
  interface Window {
    remoteSearchOptions?: Partial<PluginOptions>;
  }
}

/**
 * Replace the search element from the default theme with our own custom element if found
 * @returns
 */
const main = () => {
  const originalSearchEl = document.getElementById("tsd-search");
  const options = window.remoteSearchOptions || {};
  if (!originalSearchEl || !options.replaceElement) {
    return;
  }
  // The title is a kind of search element in the default theme
  const titleEl = originalSearchEl.getElementsByClassName("title");
  const base = originalSearchEl.dataset["base"] + "/";
  const tsdSearch = document.createElement("tsd-search"); // The custom element
  tsdSearch.id = "tsd-search";
  tsdSearch.classList.add("table-cell");
  tsdSearch.setAttribute("base", base);
  if (options.hostname) tsdSearch.setAttribute("hostname", options.hostname);
  if (options.port) tsdSearch.setAttribute("port", options.port.toString());

  // Replace original search element with or custom element
  originalSearchEl.parentNode?.replaceChild(tsdSearch, originalSearchEl);
  // Readd the title
  if (titleEl.length > 0) {
    tsdSearch.innerHTML += titleEl.item(0)?.outerHTML;
  }
};

ready(() => {
  customElements.define("tsd-search", Search); // Define custom element
  main();
});
