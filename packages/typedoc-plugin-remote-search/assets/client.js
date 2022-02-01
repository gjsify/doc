(() => {
  // src/client/debounce.ts
  var debounce = (fn, wait = 100) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(args), wait);
    };
  };

  // src/client/has-child.ts
  var hasChild = (el) => {
    var _a;
    if (!el.hasChildNodes()) {
      return false;
    }
    const childNodes = el.childNodes;
    if (childNodes.length === 1 && childNodes[0].nodeType === 3) {
      if (!childNodes[0].nodeValue || ((_a = childNodes[0].nodeValue) == null ? void 0 : _a.trim()) === "") {
        return false;
      }
    }
    return true;
  };

  // src/client/search-component.ts
  var Search = class extends HTMLElement {
    constructor() {
      super();
      this.base = "/";
      this.port = 3024;
      this.hostname = "localhost";
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
        if (window.remoteSearchOptions.hostname)
          this.hostname = window.remoteSearchOptions.hostname;
        if (window.remoteSearchOptions.port)
          this.port = window.remoteSearchOptions.port;
      }
    }
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "base":
          return this.baseChangedCallback(oldValue, newValue);
        case "port":
          return this.portChangedCallback(oldValue, newValue);
        case "hostname":
          return this.hostChangedCallback(oldValue, newValue);
        default:
          break;
      }
    }
    baseChangedCallback(oldValue, newValue) {
      this.base = newValue;
    }
    portChangedCallback(oldValue, newValue) {
      const port = Number(newValue);
      if (!isNaN(port)) {
        this.port = port;
      }
    }
    hostChangedCallback(oldValue, newValue) {
      this.hostname = newValue;
    }
    initSearch() {
      const field = this.querySelector("input");
      const results = this.querySelector(".results");
      if (!field || !results) {
        throw new Error("The input field or the result list wrapper was not found");
      }
      let resultClicked = false;
      results.addEventListener("mousedown", () => resultClicked = true);
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
    bindEvents(results, field) {
      field.addEventListener("input", debounce(() => {
        this.updateResults(results, field);
      }, 200));
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
        if (preventPress)
          e.preventDefault();
      });
      document.body.addEventListener("keydown", (e) => {
        if (e.altKey || e.ctrlKey || e.metaKey)
          return;
        if (!field.matches(":focus") && e.key === "/") {
          field.focus();
          e.preventDefault();
        }
      });
    }
    async updateResults(results, query) {
      this.classList.add("loading");
      results.textContent = "";
      const searchText = query.value.trim();
      const url = new URL(window.location.toString());
      url.hostname = this.hostname;
      url.port = this.port.toString();
      url.pathname = `search/*${searchText}*`;
      const res = [];
      try {
        const response = await fetch(url.toString());
        res.push(...await response.json());
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
        anchor.href = this.base + row.url;
        anchor.classList.add("tsd-kind-icon");
        anchor.innerHTML = row.name;
        item.append(anchor);
        results.appendChild(item);
      }
    }
    setCurrentResult(results, dir) {
      let current = results.querySelector(".current");
      if (!current) {
        current = results.querySelector(dir == 1 ? "li:first-child" : "li:last-child");
        if (current) {
          current.classList.add("current");
        }
      } else {
        let rel = current;
        if (dir === 1) {
          do {
            rel = rel.nextElementSibling || void 0;
          } while (rel instanceof HTMLElement && rel.offsetParent == null);
        } else {
          do {
            rel = rel.previousElementSibling || void 0;
          } while (rel instanceof HTMLElement && rel.offsetParent == null);
        }
        if (rel) {
          current.classList.remove("current");
          rel.classList.add("current");
        }
      }
    }
    gotoCurrentResult(results, field) {
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
    relativeURL(url) {
      return this.base + url;
    }
    setTemplate() {
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
  };

  // src/client/ready.ts
  var ready = (callback) => {
    if (!callback || typeof callback !== "function") {
      return new Error("The callback is required!");
    }
    const checkReady = () => {
      if (document.readyState !== "loading") {
        callback();
        if (document.attachEvent) {
          document.detachEvent("onreadystatechange", checkReady);
        }
        document.removeEventListener("DOMContentLoaded", checkReady);
      }
    };
    if (document.attachEvent) {
      document.attachEvent("onreadystatechange", checkReady);
    }
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", checkReady);
    }
    checkReady();
  };

  // src/client/client.ts
  var main = () => {
    var _a, _b;
    const originalSearchEl = document.getElementById("tsd-search");
    const options = window.remoteSearchOptions || {};
    if (!originalSearchEl || !options.replaceElement) {
      return;
    }
    const titleEl = originalSearchEl.getElementsByClassName("title");
    const base = originalSearchEl.dataset["base"] + "/";
    const tsdSearch = document.createElement("tsd-search");
    tsdSearch.id = "tsd-search";
    tsdSearch.classList.add("table-cell");
    tsdSearch.setAttribute("base", base);
    if (options.hostname)
      tsdSearch.setAttribute("hostname", options.hostname);
    if (options.port)
      tsdSearch.setAttribute("port", options.port.toString());
    (_a = originalSearchEl.parentNode) == null ? void 0 : _a.replaceChild(tsdSearch, originalSearchEl);
    if (titleEl.length > 0) {
      tsdSearch.innerHTML += (_b = titleEl.item(0)) == null ? void 0 : _b.outerHTML;
    }
  };
  ready(() => {
    customElements.define("tsd-search", Search);
    main();
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NsaWVudC9kZWJvdW5jZS50cyIsICIuLi9zcmMvY2xpZW50L2hhcy1jaGlsZC50cyIsICIuLi9zcmMvY2xpZW50L3NlYXJjaC1jb21wb25lbnQudHMiLCAiLi4vc3JjL2NsaWVudC9yZWFkeS50cyIsICIuLi9zcmMvY2xpZW50L2NsaWVudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZuOiAoLi4uYXJnczogYW55W10pID0+IGFueSwgd2FpdCA9IDEwMCkgPT4ge1xuICBsZXQgdGltZW91dDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG4gIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZm4oYXJncyksIHdhaXQpO1xuICB9O1xufTtcbiIsICIvKipcbiAqIENhbGxzIGVsLmhhc0NoaWxkTm9kZXMgYnV0IGlnbm9yZXMgZW1wdHkgc3RyaW5ncywgdGhlIGRlZmF1bHQgaGFzQ2hpbGROb2RlcyB3b3VsZCByZXR1cm4gdHJ1ZSBvbiBgPGRpdj4gPC9kaXY+YC5cbiAqIFZlcnkgdXNlZnVsIHRvIGNoZWNrIHdpdGhpbiBhIGNvbXBvbmVudCBpZiB0aGUgY29tcG9uZW50IGhhcyBzZXQgY2hpbGQgZWxlbWVudHMgdG8gbG9hZCBvciBvdmVyd3JpdGUgdGhlIGNvbXBvbmVudCB0ZW1wbGF0ZVxuICogQHBhcmFtIGVsXG4gKi9cbmV4cG9ydCBjb25zdCBoYXNDaGlsZCA9IChlbDogSFRNTFVua25vd25FbGVtZW50KSA9PiB7XG4gIGlmICghZWwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBlbC5jaGlsZE5vZGVzO1xuICBpZiAoY2hpbGROb2Rlcy5sZW5ndGggPT09IDEgJiYgY2hpbGROb2Rlc1swXS5ub2RlVHlwZSA9PT0gMykge1xuICAgIGlmICghY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUgfHwgY2hpbGROb2Rlc1swXS5ub2RlVmFsdWU/LnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCAiLyoqXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vVHlwZVN0cm9uZy90eXBlZG9jL2Jsb2IvbWFzdGVyL3NyYy9saWIvb3V0cHV0L3RoZW1lcy9kZWZhdWx0L2Fzc2V0cy90eXBlZG9jL2NvbXBvbmVudHMvU2VhcmNoLnRzXG4gKi9cblxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBoYXNDaGlsZCB9IGZyb20gXCIuL2hhcy1jaGlsZFwiO1xuXG5lbnVtIFN0YXRlQ1NTQ2xhc3Mge1xuICBMT0FETElORyA9IFwibG9hZGluZ1wiLFxuICBSRUFEWSA9IFwicmVhZHlcIixcbiAgRkFJTFVSRSA9IFwiZmFpbHVyZVwiLFxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBiYXNlID0gXCIvXCI7XG4gIHBvcnQgPSAzMDI0O1xuICBob3N0bmFtZSA9IFwibG9jYWxob3N0XCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmdldE9wdGlvbnNGcm9tV2luZG93T2JqZWN0KCk7XG4gICAgICB0aGlzLnNldFRlbXBsYXRlKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0U2VhcmNoKCk7XG4gICAgICB9LCAwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIG9uIGNyZWF0ZSBpbnN0YW5jZSBvZiBTZWFyY2hcIik7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBnZXRPcHRpb25zRnJvbVdpbmRvd09iamVjdCgpIHtcbiAgICBpZiAod2luZG93LnJlbW90ZVNlYXJjaE9wdGlvbnMpIHtcbiAgICAgIGlmICh3aW5kb3cucmVtb3RlU2VhcmNoT3B0aW9ucy5ob3N0bmFtZSlcbiAgICAgICAgdGhpcy5ob3N0bmFtZSA9IHdpbmRvdy5yZW1vdGVTZWFyY2hPcHRpb25zLmhvc3RuYW1lO1xuICAgICAgaWYgKHdpbmRvdy5yZW1vdGVTZWFyY2hPcHRpb25zLnBvcnQpXG4gICAgICAgIHRoaXMucG9ydCA9IHdpbmRvdy5yZW1vdGVTZWFyY2hPcHRpb25zLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZywgbmV3VmFsdWU6IHN0cmluZykge1xuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSBcImJhc2VcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUNoYW5nZWRDYWxsYmFjayhvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgY2FzZSBcInBvcnRcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMucG9ydENoYW5nZWRDYWxsYmFjayhvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgY2FzZSBcImhvc3RuYW1lXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmhvc3RDaGFuZ2VkQ2FsbGJhY2sob2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGJhc2VDaGFuZ2VkQ2FsbGJhY2sob2xkVmFsdWU6IHN0cmluZywgbmV3VmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuYmFzZSA9IG5ld1ZhbHVlO1xuICB9XG5cbiAgcG9ydENoYW5nZWRDYWxsYmFjayhvbGRWYWx1ZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgcG9ydCA9IE51bWJlcihuZXdWYWx1ZSk7XG4gICAgaWYgKCFpc05hTihwb3J0KSkge1xuICAgICAgdGhpcy5wb3J0ID0gcG9ydDtcbiAgICB9XG4gIH1cblxuICBob3N0Q2hhbmdlZENhbGxiYWNrKG9sZFZhbHVlOiBzdHJpbmcsIG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmhvc3RuYW1lID0gbmV3VmFsdWU7XG4gIH1cblxuICBpbml0U2VhcmNoKCkge1xuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiaW5wdXRcIik7XG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIucmVzdWx0c1wiKTtcblxuICAgIGlmICghZmllbGQgfHwgIXJlc3VsdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJUaGUgaW5wdXQgZmllbGQgb3IgdGhlIHJlc3VsdCBsaXN0IHdyYXBwZXIgd2FzIG5vdCBmb3VuZFwiXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRDbGlja2VkID0gZmFsc2U7XG4gICAgcmVzdWx0cy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IChyZXN1bHRDbGlja2VkID0gdHJ1ZSkpO1xuICAgIHJlc3VsdHMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xuICAgICAgcmVzdWx0Q2xpY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLWZvY3VzXCIpO1xuICAgIH0pO1xuXG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHRoaXMuY2xhc3NMaXN0LmFkZChcImhhcy1mb2N1c1wiKSk7XG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFyZXN1bHRDbGlja2VkKSB7XG4gICAgICAgIHJlc3VsdENsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLWZvY3VzXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5iaW5kRXZlbnRzKHJlc3VsdHMsIGZpZWxkKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMocmVzdWx0czogSFRNTEVsZW1lbnQsIGZpZWxkOiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiaW5wdXRcIixcbiAgICAgIGRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVSZXN1bHRzKHJlc3VsdHMsIGZpZWxkKTtcbiAgICAgIH0sIDIwMClcbiAgICApO1xuXG4gICAgbGV0IHByZXZlbnRQcmVzcyA9IGZhbHNlO1xuICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBwcmV2ZW50UHJlc3MgPSB0cnVlO1xuICAgICAgaWYgKGUua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICB0aGlzLmdvdG9DdXJyZW50UmVzdWx0KHJlc3VsdHMsIGZpZWxkKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCJFc2NhcGVcIikge1xuICAgICAgICBmaWVsZC5ibHVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFJlc3VsdChyZXN1bHRzLCAtMSk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFJlc3VsdChyZXN1bHRzLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZlbnRQcmVzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKHByZXZlbnRQcmVzcykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU3RhcnQgc2VhcmNoaW5nIGJ5IHByZXNzaW5nIHNsYXNoLlxuICAgICAqL1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmFsdEtleSB8fCBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSByZXR1cm47XG4gICAgICBpZiAoIWZpZWxkLm1hdGNoZXMoXCI6Zm9jdXNcIikgJiYgZS5rZXkgPT09IFwiL1wiKSB7XG4gICAgICAgIGZpZWxkLmZvY3VzKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVJlc3VsdHMocmVzdWx0czogSFRNTEVsZW1lbnQsIHF1ZXJ5OiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ1wiKTtcbiAgICByZXN1bHRzLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IHNlYXJjaFRleHQgPSBxdWVyeS52YWx1ZS50cmltKCk7XG5cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKTtcbiAgICB1cmwuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lO1xuICAgIHVybC5wb3J0ID0gdGhpcy5wb3J0LnRvU3RyaW5nKCk7XG4gICAgLy8gUGVyZm9ybSBhIHdpbGRjYXJkIHNlYXJjaFxuICAgIHVybC5wYXRobmFtZSA9IGBzZWFyY2gvKiR7c2VhcmNoVGV4dH0qYDtcbiAgICBjb25zdCByZXM6IFNlYXJjaFJlc3VsdFtdID0gW107XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwudG9TdHJpbmcoKSk7XG4gICAgICByZXMucHVzaCguLi4oYXdhaXQgcmVzcG9uc2UuanNvbigpKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwicmVhZHlcIik7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpO1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiZmFpbHVyZVwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJyZWFkeVwiKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGMgPSBNYXRoLm1pbigxMCwgcmVzLmxlbmd0aCk7IGkgPCBjOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IHJlc1tpXTtcblxuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnZhbHVlID0gcm93LmNsYXNzZXM7XG5cbiAgICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgYW5jaG9yLmhyZWYgPSB0aGlzLmJhc2UgKyByb3cudXJsO1xuICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoXCJ0c2Qta2luZC1pY29uXCIpO1xuICAgICAgYW5jaG9yLmlubmVySFRNTCA9IHJvdy5uYW1lO1xuICAgICAgaXRlbS5hcHBlbmQoYW5jaG9yKTtcblxuICAgICAgcmVzdWx0cy5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgaGlnaGxpZ2h0IHdpdGhpbiB0aGUgcmVzdWx0IHNldC5cbiAgICovXG4gIHNldEN1cnJlbnRSZXN1bHQocmVzdWx0czogSFRNTEVsZW1lbnQsIGRpcjogbnVtYmVyKSB7XG4gICAgbGV0IGN1cnJlbnQgPSByZXN1bHRzLnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudFwiKTtcbiAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgIGN1cnJlbnQgPSByZXN1bHRzLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGRpciA9PSAxID8gXCJsaTpmaXJzdC1jaGlsZFwiIDogXCJsaTpsYXN0LWNoaWxkXCJcbiAgICAgICk7XG4gICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcmVsOiBFbGVtZW50IHwgdW5kZWZpbmVkID0gY3VycmVudDtcbiAgICAgIC8vIFRyaWNreTogV2UgaGF2ZSB0byBjaGVjayB0aGF0IHJlbCBoYXMgYW4gb2Zmc2V0UGFyZW50IHNvIHRoYXQgdXNlcnMgY2FuJ3QgbWFyayBhIGhpZGRlbiByZXN1bHQgYXNcbiAgICAgIC8vIGN1cnJlbnQgd2l0aCB0aGUgYXJyb3cga2V5cy5cbiAgICAgIGlmIChkaXIgPT09IDEpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIHJlbCA9IHJlbC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgdW5kZWZpbmVkO1xuICAgICAgICB9IHdoaWxlIChyZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiByZWwub2Zmc2V0UGFyZW50ID09IG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIHJlbCA9IHJlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfSB3aGlsZSAocmVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgcmVsLm9mZnNldFBhcmVudCA9PSBudWxsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbCkge1xuICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xuICAgICAgICByZWwuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlIHRvIHRoZSBoaWdobGlnaHRlZCByZXN1bHQuXG4gICAqL1xuICBnb3RvQ3VycmVudFJlc3VsdChyZXN1bHRzOiBIVE1MRWxlbWVudCwgZmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICBsZXQgY3VycmVudCA9IHJlc3VsdHMucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50XCIpO1xuXG4gICAgaWYgKCFjdXJyZW50KSB7XG4gICAgICBjdXJyZW50ID0gcmVzdWx0cy5xdWVyeVNlbGVjdG9yKFwibGk6Zmlyc3QtY2hpbGRcIik7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBjdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO1xuICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rLmhyZWY7XG4gICAgICB9XG4gICAgICBmaWVsZC5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVsYXRpdmVVUkwodXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5iYXNlICsgdXJsO1xuICB9XG5cbiAgc2V0VGVtcGxhdGUoKSB7XG4gICAgLy8gU2ltaWxhciB0ZW1wbGF0ZSBhcyBpbiBkZWZhdWx0IHRoZW1lXG4gICAgY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICA8bGFiZWwgZm9yPVwidHNkLXNlYXJjaC1maWVsZFwiIGNsYXNzPVwidHNkLXdpZGdldCBzZWFyY2ggbm8tY2FwdGlvblwiPlxuICAgICAgICBTZWFyY2hcbiAgICA8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidHNkLXNlYXJjaC1maWVsZFwiIC8+XG48L2Rpdj5cblxuPHVsIGNsYXNzPVwicmVzdWx0c1wiPlxuICAgIDxsaSBjbGFzcz1cInN0YXRlIGxvYWRpbmdcIj5QcmVwYXJpbmcgcmVtb3RlIHNlYXJjaCBzZXJ2ZXIuLi48L2xpPlxuICAgIDxsaSBjbGFzcz1cInN0YXRlIGZhaWx1cmVcIj5UaGUgcmVtb3RlIHNlYXJjaCBzZXJ2ZXIgaXMgbm90IGF2YWlsYWJsZTwvbGk+XG48L3VsPlxuICAgIGA7XG5cbiAgICBpZiAoIWhhc0NoaWxkKHRoaXMpKSB7XG4gICAgICB0aGlzLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIH1cbiAgfVxufVxuIiwgIi8qKlxuICogQ3Jvc3MtYnJvd3NlciBEb2N1bWVudCBSZWFkeSBjaGVja1xuICogQHNlZSBodHRwczovL3d3dy5jb21wZXRhLmNvbS9ibG9nL2Nyb3NzLWJyb3dzZXItZG9jdW1lbnQtcmVhZHktd2l0aC12YW5pbGxhLWphdmFzY3JpcHQvXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWR5ID0gKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGlmICghY2FsbGJhY2sgfHwgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiVGhlIGNhbGxiYWNrIGlzIHJlcXVpcmVkIVwiKTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrUmVhZHkgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgaWYgKChkb2N1bWVudCBhcyBhbnkpLmF0dGFjaEV2ZW50KSB7XG4gICAgICAgIChkb2N1bWVudCBhcyBhbnkpLmRldGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrUmVhZHkpO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tSZWFkeSk7XG4gICAgfVxuICB9O1xuXG4gIGlmICgoZG9jdW1lbnQgYXMgYW55KS5hdHRhY2hFdmVudCkge1xuICAgIChkb2N1bWVudCBhcyBhbnkpLmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrUmVhZHkpO1xuICB9XG4gIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tSZWFkeSk7XG4gIH1cbiAgY2hlY2tSZWFkeSgpO1xufTtcbiIsICJpbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwiLi9zZWFyY2gtY29tcG9uZW50XCI7XG5pbXBvcnQgeyByZWFkeSB9IGZyb20gXCIuL3JlYWR5XCI7XG5pbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbnMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZW1vdGVTZWFyY2hPcHRpb25zPzogUGFydGlhbDxQbHVnaW5PcHRpb25zPjtcbiAgfVxufVxuXG4vKipcbiAqIFJlcGxhY2UgdGhlIHNlYXJjaCBlbGVtZW50IGZyb20gdGhlIGRlZmF1bHQgdGhlbWUgd2l0aCBvdXIgb3duIGN1c3RvbSBlbGVtZW50IGlmIGZvdW5kXG4gKiBAcmV0dXJuc1xuICovXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBvcmlnaW5hbFNlYXJjaEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0c2Qtc2VhcmNoXCIpO1xuICBjb25zdCBvcHRpb25zID0gd2luZG93LnJlbW90ZVNlYXJjaE9wdGlvbnMgfHwge307XG4gIGlmICghb3JpZ2luYWxTZWFyY2hFbCB8fCAhb3B0aW9ucy5yZXBsYWNlRWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBUaGUgdGl0bGUgaXMgYSBraW5kIG9mIHNlYXJjaCBlbGVtZW50IGluIHRoZSBkZWZhdWx0IHRoZW1lXG4gIGNvbnN0IHRpdGxlRWwgPSBvcmlnaW5hbFNlYXJjaEVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aXRsZVwiKTtcbiAgY29uc3QgYmFzZSA9IG9yaWdpbmFsU2VhcmNoRWwuZGF0YXNldFtcImJhc2VcIl0gKyBcIi9cIjtcbiAgY29uc3QgdHNkU2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRzZC1zZWFyY2hcIik7IC8vIFRoZSBjdXN0b20gZWxlbWVudFxuICB0c2RTZWFyY2guaWQgPSBcInRzZC1zZWFyY2hcIjtcbiAgdHNkU2VhcmNoLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZS1jZWxsXCIpO1xuICB0c2RTZWFyY2guc2V0QXR0cmlidXRlKFwiYmFzZVwiLCBiYXNlKTtcbiAgaWYgKG9wdGlvbnMuaG9zdG5hbWUpIHRzZFNlYXJjaC5zZXRBdHRyaWJ1dGUoXCJob3N0bmFtZVwiLCBvcHRpb25zLmhvc3RuYW1lKTtcbiAgaWYgKG9wdGlvbnMucG9ydCkgdHNkU2VhcmNoLnNldEF0dHJpYnV0ZShcInBvcnRcIiwgb3B0aW9ucy5wb3J0LnRvU3RyaW5nKCkpO1xuXG4gIC8vIFJlcGxhY2Ugb3JpZ2luYWwgc2VhcmNoIGVsZW1lbnQgd2l0aCBvciBjdXN0b20gZWxlbWVudFxuICBvcmlnaW5hbFNlYXJjaEVsLnBhcmVudE5vZGU/LnJlcGxhY2VDaGlsZCh0c2RTZWFyY2gsIG9yaWdpbmFsU2VhcmNoRWwpO1xuICAvLyBSZWFkZCB0aGUgdGl0bGVcbiAgaWYgKHRpdGxlRWwubGVuZ3RoID4gMCkge1xuICAgIHRzZFNlYXJjaC5pbm5lckhUTUwgKz0gdGl0bGVFbC5pdGVtKDApPy5vdXRlckhUTUw7XG4gIH1cbn07XG5cbnJlYWR5KCgpID0+IHtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidHNkLXNlYXJjaFwiLCBTZWFyY2gpOyAvLyBEZWZpbmUgY3VzdG9tIGVsZW1lbnRcbiAgbWFpbigpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOztBQUFPLE1BQU0sV0FBVyxDQUFDLElBQTZCLE9BQU8sUUFBUTtBQUNuRSxRQUFJO0FBQ0osV0FBTyxJQUFJLFNBQWdCO0FBQ3pCLG1CQUFhO0FBQ2IsZ0JBQVUsV0FBVyxNQUFNLEdBQUcsT0FBTztBQUFBO0FBQUE7OztBQ0NsQyxNQUFNLFdBQVcsQ0FBQyxPQUEyQjtBQUxwRDtBQU1FLFFBQUksQ0FBQyxHQUFHLGlCQUFpQjtBQUN2QixhQUFPO0FBQUE7QUFFVCxVQUFNLGFBQWEsR0FBRztBQUN0QixRQUFJLFdBQVcsV0FBVyxLQUFLLFdBQVcsR0FBRyxhQUFhLEdBQUc7QUFDM0QsVUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLGtCQUFXLEdBQUcsY0FBZCxtQkFBeUIsWUFBVyxJQUFJO0FBQ3RFLGVBQU87QUFBQTtBQUFBO0FBR1gsV0FBTztBQUFBOzs7QUNERiw2QkFBcUIsWUFBWTtBQUFBLElBS3RDLGNBQWM7QUFDWjtBQUxGLGtCQUFPO0FBQ1Asa0JBQU87QUFDUCxzQkFBVztBQUFBO0FBQUEsSUFNWCxvQkFBb0I7QUFDbEIsVUFBSTtBQUNGLGFBQUs7QUFDTCxhQUFLO0FBQ0wsbUJBQVcsTUFBTTtBQUNmLGVBQUs7QUFBQSxXQUNKO0FBQUEsZUFDSSxPQUFQO0FBQ0EsZ0JBQVEsTUFBTTtBQUNkLGdCQUFRLE1BQU07QUFBQTtBQUFBO0FBQUEsSUFJbEIsNkJBQTZCO0FBQzNCLFVBQUksT0FBTyxxQkFBcUI7QUFDOUIsWUFBSSxPQUFPLG9CQUFvQjtBQUM3QixlQUFLLFdBQVcsT0FBTyxvQkFBb0I7QUFDN0MsWUFBSSxPQUFPLG9CQUFvQjtBQUM3QixlQUFLLE9BQU8sT0FBTyxvQkFBb0I7QUFBQTtBQUFBO0FBQUEsSUFJN0MseUJBQXlCLE1BQWMsVUFBa0IsVUFBa0I7QUFDekUsY0FBUTtBQUFBLGFBQ0Q7QUFDSCxpQkFBTyxLQUFLLG9CQUFvQixVQUFVO0FBQUEsYUFDdkM7QUFDSCxpQkFBTyxLQUFLLG9CQUFvQixVQUFVO0FBQUEsYUFDdkM7QUFDSCxpQkFBTyxLQUFLLG9CQUFvQixVQUFVO0FBQUE7QUFFMUM7QUFBQTtBQUFBO0FBQUEsSUFJTixvQkFBb0IsVUFBa0IsVUFBa0I7QUFDdEQsV0FBSyxPQUFPO0FBQUE7QUFBQSxJQUdkLG9CQUFvQixVQUFrQixVQUFrQjtBQUN0RCxZQUFNLE9BQU8sT0FBTztBQUNwQixVQUFJLENBQUMsTUFBTSxPQUFPO0FBQ2hCLGFBQUssT0FBTztBQUFBO0FBQUE7QUFBQSxJQUloQixvQkFBb0IsVUFBa0IsVUFBa0I7QUFDdEQsV0FBSyxXQUFXO0FBQUE7QUFBQSxJQUdsQixhQUFhO0FBQ1gsWUFBTSxRQUFRLEtBQUssY0FBZ0M7QUFDbkQsWUFBTSxVQUFVLEtBQUssY0FBMkI7QUFFaEQsVUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTO0FBQ3RCLGNBQU0sSUFBSSxNQUNSO0FBQUE7QUFJSixVQUFJLGdCQUFnQjtBQUNwQixjQUFRLGlCQUFpQixhQUFhLE1BQU8sZ0JBQWdCO0FBQzdELGNBQVEsaUJBQWlCLFdBQVcsTUFBTTtBQUN4Qyx3QkFBZ0I7QUFDaEIsYUFBSyxVQUFVLE9BQU87QUFBQTtBQUd4QixZQUFNLGlCQUFpQixTQUFTLE1BQU0sS0FBSyxVQUFVLElBQUk7QUFDekQsWUFBTSxpQkFBaUIsUUFBUSxNQUFNO0FBQ25DLFlBQUksQ0FBQyxlQUFlO0FBQ2xCLDBCQUFnQjtBQUNoQixlQUFLLFVBQVUsT0FBTztBQUFBO0FBQUE7QUFJMUIsV0FBSyxXQUFXLFNBQVM7QUFBQTtBQUFBLElBRzNCLFdBQVcsU0FBc0IsT0FBeUI7QUFDeEQsWUFBTSxpQkFDSixTQUNBLFNBQVMsTUFBTTtBQUNiLGFBQUssY0FBYyxTQUFTO0FBQUEsU0FDM0I7QUFHTCxVQUFJLGVBQWU7QUFDbkIsWUFBTSxpQkFBaUIsV0FBVyxDQUFDLE1BQU07QUFDdkMsdUJBQWU7QUFDZixZQUFJLEVBQUUsT0FBTyxTQUFTO0FBQ3BCLGVBQUssa0JBQWtCLFNBQVM7QUFBQSxtQkFDdkIsRUFBRSxPQUFPLFVBQVU7QUFDNUIsZ0JBQU07QUFBQSxtQkFDRyxFQUFFLE9BQU8sV0FBVztBQUM3QixlQUFLLGlCQUFpQixTQUFTO0FBQUEsbUJBQ3RCLEVBQUUsUUFBUSxhQUFhO0FBQ2hDLGVBQUssaUJBQWlCLFNBQVM7QUFBQSxlQUMxQjtBQUNMLHlCQUFlO0FBQUE7QUFBQTtBQUduQixZQUFNLGlCQUFpQixZQUFZLENBQUMsTUFBTTtBQUN4QyxZQUFJO0FBQWMsWUFBRTtBQUFBO0FBTXRCLGVBQVMsS0FBSyxpQkFBaUIsV0FBVyxDQUFDLE1BQU07QUFDL0MsWUFBSSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUU7QUFBUztBQUN4QyxZQUFJLENBQUMsTUFBTSxRQUFRLGFBQWEsRUFBRSxRQUFRLEtBQUs7QUFDN0MsZ0JBQU07QUFDTixZQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFLRixjQUFjLFNBQXNCLE9BQXlCO0FBQ2pFLFdBQUssVUFBVSxJQUFJO0FBQ25CLGNBQVEsY0FBYztBQUV0QixZQUFNLGFBQWEsTUFBTSxNQUFNO0FBRS9CLFlBQU0sTUFBTSxJQUFJLElBQUksT0FBTyxTQUFTO0FBQ3BDLFVBQUksV0FBVyxLQUFLO0FBQ3BCLFVBQUksT0FBTyxLQUFLLEtBQUs7QUFFckIsVUFBSSxXQUFXLFdBQVc7QUFDMUIsWUFBTSxNQUFzQjtBQUU1QixVQUFJO0FBQ0YsY0FBTSxXQUFXLE1BQU0sTUFBTSxJQUFJO0FBQ2pDLFlBQUksS0FBSyxHQUFJLE1BQU0sU0FBUztBQUFBLGVBQ3JCLE9BQVA7QUFDQSxnQkFBUSxNQUFNO0FBQ2QsYUFBSyxVQUFVLE9BQU87QUFDdEIsYUFBSyxVQUFVLE9BQU87QUFDdEIsYUFBSyxVQUFVLElBQUk7QUFBQTtBQUdyQixXQUFLLFVBQVUsSUFBSTtBQUNuQixXQUFLLFVBQVUsT0FBTztBQUV0QixlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLEdBQUcsS0FBSztBQUN4RCxjQUFNLE1BQU0sSUFBSTtBQUVoQixjQUFNLE9BQU8sU0FBUyxjQUFjO0FBQ3BDLGFBQUssVUFBVSxRQUFRLElBQUk7QUFFM0IsY0FBTSxTQUFTLFNBQVMsY0FBYztBQUN0QyxlQUFPLE9BQU8sS0FBSyxPQUFPLElBQUk7QUFDOUIsZUFBTyxVQUFVLElBQUk7QUFDckIsZUFBTyxZQUFZLElBQUk7QUFDdkIsYUFBSyxPQUFPO0FBRVosZ0JBQVEsWUFBWTtBQUFBO0FBQUE7QUFBQSxJQU94QixpQkFBaUIsU0FBc0IsS0FBYTtBQUNsRCxVQUFJLFVBQVUsUUFBUSxjQUFjO0FBQ3BDLFVBQUksQ0FBQyxTQUFTO0FBQ1osa0JBQVUsUUFBUSxjQUNoQixPQUFPLElBQUksbUJBQW1CO0FBRWhDLFlBQUksU0FBUztBQUNYLGtCQUFRLFVBQVUsSUFBSTtBQUFBO0FBQUEsYUFFbkI7QUFDTCxZQUFJLE1BQTJCO0FBRy9CLFlBQUksUUFBUSxHQUFHO0FBQ2IsYUFBRztBQUNELGtCQUFNLElBQUksc0JBQXNCO0FBQUEsbUJBQ3pCLGVBQWUsZUFBZSxJQUFJLGdCQUFnQjtBQUFBLGVBQ3REO0FBQ0wsYUFBRztBQUNELGtCQUFNLElBQUksMEJBQTBCO0FBQUEsbUJBQzdCLGVBQWUsZUFBZSxJQUFJLGdCQUFnQjtBQUFBO0FBRzdELFlBQUksS0FBSztBQUNQLGtCQUFRLFVBQVUsT0FBTztBQUN6QixjQUFJLFVBQVUsSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUXhCLGtCQUFrQixTQUFzQixPQUF5QjtBQUMvRCxVQUFJLFVBQVUsUUFBUSxjQUFjO0FBRXBDLFVBQUksQ0FBQyxTQUFTO0FBQ1osa0JBQVUsUUFBUSxjQUFjO0FBQUE7QUFHbEMsVUFBSSxTQUFTO0FBQ1gsY0FBTSxPQUFPLFFBQVEsY0FBYztBQUNuQyxZQUFJLE1BQU07QUFDUixpQkFBTyxTQUFTLE9BQU8sS0FBSztBQUFBO0FBRTlCLGNBQU07QUFBQTtBQUFBO0FBQUEsSUFJVixZQUFZLEtBQWE7QUFDdkIsYUFBTyxLQUFLLE9BQU87QUFBQTtBQUFBLElBR3JCLGNBQWM7QUFFWixZQUFNLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjakIsVUFBSSxDQUFDLFNBQVMsT0FBTztBQUNuQixhQUFLLFlBQVk7QUFBQTtBQUFBO0FBQUE7OztBQzFQaEIsTUFBTSxRQUFRLENBQUMsYUFBeUI7QUFDN0MsUUFBSSxDQUFDLFlBQVksT0FBTyxhQUFhLFlBQVk7QUFDL0MsYUFBTyxJQUFJLE1BQU07QUFBQTtBQUduQixVQUFNLGFBQWEsTUFBTTtBQUN2QixVQUFJLFNBQVMsZUFBZSxXQUFXO0FBQ3JDO0FBQ0EsWUFBSyxTQUFpQixhQUFhO0FBQ2pDLFVBQUMsU0FBaUIsWUFBWSxzQkFBc0I7QUFBQTtBQUV0RCxpQkFBUyxvQkFBb0Isb0JBQW9CO0FBQUE7QUFBQTtBQUlyRCxRQUFLLFNBQWlCLGFBQWE7QUFDakMsTUFBQyxTQUFpQixZQUFZLHNCQUFzQjtBQUFBO0FBRXRELFFBQUksU0FBUyxrQkFBa0I7QUFDN0IsZUFBUyxpQkFBaUIsb0JBQW9CO0FBQUE7QUFFaEQ7QUFBQTs7O0FDWkYsTUFBTSxPQUFPLE1BQU07QUFkbkI7QUFlRSxVQUFNLG1CQUFtQixTQUFTLGVBQWU7QUFDakQsVUFBTSxVQUFVLE9BQU8sdUJBQXVCO0FBQzlDLFFBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLGdCQUFnQjtBQUNoRDtBQUFBO0FBR0YsVUFBTSxVQUFVLGlCQUFpQix1QkFBdUI7QUFDeEQsVUFBTSxPQUFPLGlCQUFpQixRQUFRLFVBQVU7QUFDaEQsVUFBTSxZQUFZLFNBQVMsY0FBYztBQUN6QyxjQUFVLEtBQUs7QUFDZixjQUFVLFVBQVUsSUFBSTtBQUN4QixjQUFVLGFBQWEsUUFBUTtBQUMvQixRQUFJLFFBQVE7QUFBVSxnQkFBVSxhQUFhLFlBQVksUUFBUTtBQUNqRSxRQUFJLFFBQVE7QUFBTSxnQkFBVSxhQUFhLFFBQVEsUUFBUSxLQUFLO0FBRzlELDJCQUFpQixlQUFqQixtQkFBNkIsYUFBYSxXQUFXO0FBRXJELFFBQUksUUFBUSxTQUFTLEdBQUc7QUFDdEIsZ0JBQVUsYUFBYSxjQUFRLEtBQUssT0FBYixtQkFBaUI7QUFBQTtBQUFBO0FBSTVDLFFBQU0sTUFBTTtBQUNWLG1CQUFlLE9BQU8sY0FBYztBQUNwQztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
