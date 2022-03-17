(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/client/debounce.ts
  var debounce;
  var init_debounce = __esm({
    "src/client/debounce.ts"() {
      debounce = (fn, wait = 100) => {
        let timeout;
        return (...args) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => fn(args), wait);
        };
      };
    }
  });

  // src/client/has-child.ts
  var hasChild;
  var init_has_child = __esm({
    "src/client/has-child.ts"() {
      hasChild = (el) => {
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
    }
  });

  // src/client/search-component.ts
  var Search;
  var init_search_component = __esm({
    "src/client/search-component.ts"() {
      init_debounce();
      init_has_child();
      Search = class extends HTMLElement {
        constructor() {
          super();
          this.serverBaseUrl = window.location.href;
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
            if (this.serverBaseUrl === window.location.href && window.remoteSearchOptions.serverBaseUrl) {
              this.serverBaseUrl = window.remoteSearchOptions.serverBaseUrl;
            }
          }
        }
        attributeChangedCallback(name, oldValue, newValue) {
          switch (name) {
            case "server-base-url":
              return this.serverBaseUrlChangedCallback(oldValue, newValue);
            default:
              break;
          }
        }
        serverBaseUrlChangedCallback(oldValue, newValue) {
          this.serverBaseUrl = newValue;
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
          }, 500));
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
          results.textContent = "";
          const searchText = query.value.trim();
          if (searchText.length < 2) {
            return;
          }
          this.classList.add("loading");
          const url = new URL(this.serverBaseUrl);
          const separator = url.pathname.endsWith("/") ? "" : "/";
          url.pathname += `${separator}search/*${searchText}*`;
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
          for (const row of res) {
            const item = document.createElement("li");
            item.classList.value = row.classes;
            const anchor = document.createElement("a");
            const separator2 = this.serverBaseUrl.endsWith("/") ? "" : "/";
            anchor.href = this.serverBaseUrl + separator2 + row.url;
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
    }
  });

  // src/client/ready.ts
  var ready;
  var init_ready = __esm({
    "src/client/ready.ts"() {
      ready = (callback) => {
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
    }
  });

  // src/client/main.ts
  var require_main = __commonJS({
    "src/client/main.ts"() {
      init_search_component();
      init_ready();
      var main = () => {
        var _a, _b;
        const originalSearchEl = document.getElementById("tsd-search");
        const options = window.remoteSearchOptions || {};
        if (!originalSearchEl || !options.replaceElement) {
          return;
        }
        const titleEl = originalSearchEl.getElementsByClassName("title");
        const tsdSearch = document.createElement("tsd-search");
        tsdSearch.id = "tsd-search";
        tsdSearch.classList.add("table-cell");
        if (options.serverBaseUrl)
          tsdSearch.setAttribute("server-base-url", options.serverBaseUrl);
        (_a = originalSearchEl.parentNode) == null ? void 0 : _a.replaceChild(tsdSearch, originalSearchEl);
        if (titleEl.length > 0) {
          tsdSearch.innerHTML += (_b = titleEl.item(0)) == null ? void 0 : _b.outerHTML;
        }
      };
      ready(() => {
        customElements.define("tsd-search", Search);
        main();
      });
    }
  });
  require_main();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NsaWVudC9kZWJvdW5jZS50cyIsICIuLi9zcmMvY2xpZW50L2hhcy1jaGlsZC50cyIsICIuLi9zcmMvY2xpZW50L3NlYXJjaC1jb21wb25lbnQudHMiLCAiLi4vc3JjL2NsaWVudC9yZWFkeS50cyIsICIuLi9zcmMvY2xpZW50L21haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmbjogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnksIHdhaXQgPSAxMDApID0+IHtcbiAgbGV0IHRpbWVvdXQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGZuKGFyZ3MpLCB3YWl0KTtcbiAgfTtcbn07XG4iLCAiLyoqXG4gKiBDYWxscyBlbC5oYXNDaGlsZE5vZGVzIGJ1dCBpZ25vcmVzIGVtcHR5IHN0cmluZ3MsIHRoZSBkZWZhdWx0IGhhc0NoaWxkTm9kZXMgd291bGQgcmV0dXJuIHRydWUgb24gYDxkaXY+IDwvZGl2PmAuXG4gKiBWZXJ5IHVzZWZ1bCB0byBjaGVjayB3aXRoaW4gYSBjb21wb25lbnQgaWYgdGhlIGNvbXBvbmVudCBoYXMgc2V0IGNoaWxkIGVsZW1lbnRzIHRvIGxvYWQgb3Igb3ZlcndyaXRlIHRoZSBjb21wb25lbnQgdGVtcGxhdGVcbiAqIEBwYXJhbSBlbFxuICovXG5leHBvcnQgY29uc3QgaGFzQ2hpbGQgPSAoZWw6IEhUTUxVbmtub3duRWxlbWVudCkgPT4ge1xuICBpZiAoIWVsLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBjaGlsZE5vZGVzID0gZWwuY2hpbGROb2RlcztcbiAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID09PSAxICYmIGNoaWxkTm9kZXNbMF0ubm9kZVR5cGUgPT09IDMpIHtcbiAgICBpZiAoIWNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlIHx8IGNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlPy50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwgIi8qKlxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL1R5cGVTdHJvbmcvdHlwZWRvYy9ibG9iL21hc3Rlci9zcmMvbGliL291dHB1dC90aGVtZXMvZGVmYXVsdC9hc3NldHMvdHlwZWRvYy9jb21wb25lbnRzL1NlYXJjaC50c1xuICovXG5cbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgaGFzQ2hpbGQgfSBmcm9tIFwiLi9oYXMtY2hpbGRcIjtcbmltcG9ydCBcIi4vZ2xvYmFsXCI7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIHNlcnZlckJhc2VVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZ2V0T3B0aW9uc0Zyb21XaW5kb3dPYmplY3QoKTtcbiAgICAgIHRoaXMuc2V0VGVtcGxhdGUoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmluaXRTZWFyY2goKTtcbiAgICAgIH0sIDApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igb24gY3JlYXRlIGluc3RhbmNlIG9mIFNlYXJjaFwiKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGdldE9wdGlvbnNGcm9tV2luZG93T2JqZWN0KCkge1xuICAgIGlmICh3aW5kb3cucmVtb3RlU2VhcmNoT3B0aW9ucykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnNlcnZlckJhc2VVcmwgPT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmICYmXG4gICAgICAgIHdpbmRvdy5yZW1vdGVTZWFyY2hPcHRpb25zLnNlcnZlckJhc2VVcmxcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNlcnZlckJhc2VVcmwgPSB3aW5kb3cucmVtb3RlU2VhcmNoT3B0aW9ucy5zZXJ2ZXJCYXNlVXJsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcsIG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgXCJzZXJ2ZXItYmFzZS11cmxcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVyQmFzZVVybENoYW5nZWRDYWxsYmFjayhvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2VydmVyQmFzZVVybENoYW5nZWRDYWxsYmFjayhvbGRWYWx1ZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXJ2ZXJCYXNlVXJsID0gbmV3VmFsdWU7XG4gIH1cblxuICBpbml0U2VhcmNoKCkge1xuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiaW5wdXRcIik7XG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIucmVzdWx0c1wiKTtcblxuICAgIGlmICghZmllbGQgfHwgIXJlc3VsdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJUaGUgaW5wdXQgZmllbGQgb3IgdGhlIHJlc3VsdCBsaXN0IHdyYXBwZXIgd2FzIG5vdCBmb3VuZFwiXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRDbGlja2VkID0gZmFsc2U7XG4gICAgcmVzdWx0cy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IChyZXN1bHRDbGlja2VkID0gdHJ1ZSkpO1xuICAgIHJlc3VsdHMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xuICAgICAgcmVzdWx0Q2xpY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLWZvY3VzXCIpO1xuICAgIH0pO1xuXG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHRoaXMuY2xhc3NMaXN0LmFkZChcImhhcy1mb2N1c1wiKSk7XG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFyZXN1bHRDbGlja2VkKSB7XG4gICAgICAgIHJlc3VsdENsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLWZvY3VzXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5iaW5kRXZlbnRzKHJlc3VsdHMsIGZpZWxkKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMocmVzdWx0czogSFRNTEVsZW1lbnQsIGZpZWxkOiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiaW5wdXRcIixcbiAgICAgIGRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVSZXN1bHRzKHJlc3VsdHMsIGZpZWxkKTtcbiAgICAgIH0sIDUwMClcbiAgICApO1xuXG4gICAgbGV0IHByZXZlbnRQcmVzcyA9IGZhbHNlO1xuICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBwcmV2ZW50UHJlc3MgPSB0cnVlO1xuICAgICAgaWYgKGUua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICB0aGlzLmdvdG9DdXJyZW50UmVzdWx0KHJlc3VsdHMsIGZpZWxkKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCJFc2NhcGVcIikge1xuICAgICAgICBmaWVsZC5ibHVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFJlc3VsdChyZXN1bHRzLCAtMSk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFJlc3VsdChyZXN1bHRzLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZlbnRQcmVzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKHByZXZlbnRQcmVzcykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU3RhcnQgc2VhcmNoaW5nIGJ5IHByZXNzaW5nIHNsYXNoLlxuICAgICAqL1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmFsdEtleSB8fCBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSByZXR1cm47XG4gICAgICBpZiAoIWZpZWxkLm1hdGNoZXMoXCI6Zm9jdXNcIikgJiYgZS5rZXkgPT09IFwiL1wiKSB7XG4gICAgICAgIGZpZWxkLmZvY3VzKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVJlc3VsdHMocmVzdWx0czogSFRNTEVsZW1lbnQsIHF1ZXJ5OiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgcmVzdWx0cy50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gcXVlcnkudmFsdWUudHJpbSgpO1xuICAgIGlmIChzZWFyY2hUZXh0Lmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xuXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh0aGlzLnNlcnZlckJhc2VVcmwpO1xuICAgIGNvbnN0IHNlcGFyYXRvciA9IHVybC5wYXRobmFtZS5lbmRzV2l0aChcIi9cIikgPyBcIlwiIDogXCIvXCI7XG5cbiAgICAvLyBQZXJmb3JtIGEgd2lsZGNhcmQgc2VhcmNoXG4gICAgdXJsLnBhdGhuYW1lICs9IGAke3NlcGFyYXRvcn1zZWFyY2gvKiR7c2VhcmNoVGV4dH0qYDtcblxuICAgIGNvbnN0IHJlczogU2VhcmNoUmVzdWx0W10gPSBbXTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpKTtcbiAgICAgIHJlcy5wdXNoKC4uLihhd2FpdCByZXNwb25zZS5qc29uKCkpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWFkeVwiKTtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJmYWlsdXJlXCIpO1xuICAgIH1cblxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcInJlYWR5XCIpO1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XG5cbiAgICBmb3IgKGNvbnN0IHJvdyBvZiByZXMpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBpdGVtLmNsYXNzTGlzdC52YWx1ZSA9IHJvdy5jbGFzc2VzO1xuXG4gICAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHRoaXMuc2VydmVyQmFzZVVybC5lbmRzV2l0aChcIi9cIikgPyBcIlwiIDogXCIvXCI7XG4gICAgICBhbmNob3IuaHJlZiA9IHRoaXMuc2VydmVyQmFzZVVybCArIHNlcGFyYXRvciArIHJvdy51cmw7XG4gICAgICBhbmNob3IuY2xhc3NMaXN0LmFkZChcInRzZC1raW5kLWljb25cIik7XG4gICAgICBhbmNob3IuaW5uZXJIVE1MID0gcm93Lm5hbWU7XG4gICAgICBpdGVtLmFwcGVuZChhbmNob3IpO1xuXG4gICAgICByZXN1bHRzLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoZSBoaWdobGlnaHQgd2l0aGluIHRoZSByZXN1bHQgc2V0LlxuICAgKi9cbiAgc2V0Q3VycmVudFJlc3VsdChyZXN1bHRzOiBIVE1MRWxlbWVudCwgZGlyOiBudW1iZXIpIHtcbiAgICBsZXQgY3VycmVudCA9IHJlc3VsdHMucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50XCIpO1xuICAgIGlmICghY3VycmVudCkge1xuICAgICAgY3VycmVudCA9IHJlc3VsdHMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgZGlyID09IDEgPyBcImxpOmZpcnN0LWNoaWxkXCIgOiBcImxpOmxhc3QtY2hpbGRcIlxuICAgICAgKTtcbiAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZWw6IEVsZW1lbnQgfCB1bmRlZmluZWQgPSBjdXJyZW50O1xuICAgICAgLy8gVHJpY2t5OiBXZSBoYXZlIHRvIGNoZWNrIHRoYXQgcmVsIGhhcyBhbiBvZmZzZXRQYXJlbnQgc28gdGhhdCB1c2VycyBjYW4ndCBtYXJrIGEgaGlkZGVuIHJlc3VsdCBhc1xuICAgICAgLy8gY3VycmVudCB3aXRoIHRoZSBhcnJvdyBrZXlzLlxuICAgICAgaWYgKGRpciA9PT0gMSkge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgcmVsID0gcmVsLm5leHRFbGVtZW50U2libGluZyB8fCB1bmRlZmluZWQ7XG4gICAgICAgIH0gd2hpbGUgKHJlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHJlbC5vZmZzZXRQYXJlbnQgPT0gbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgcmVsID0gcmVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgfHwgdW5kZWZpbmVkO1xuICAgICAgICB9IHdoaWxlIChyZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiByZWwub2Zmc2V0UGFyZW50ID09IG51bGwpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVsKSB7XG4gICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XG4gICAgICAgIHJlbC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGUgdG8gdGhlIGhpZ2hsaWdodGVkIHJlc3VsdC5cbiAgICovXG4gIGdvdG9DdXJyZW50UmVzdWx0KHJlc3VsdHM6IEhUTUxFbGVtZW50LCBmaWVsZDogSFRNTElucHV0RWxlbWVudCkge1xuICAgIGxldCBjdXJyZW50ID0gcmVzdWx0cy5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRcIik7XG5cbiAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgIGN1cnJlbnQgPSByZXN1bHRzLnF1ZXJ5U2VsZWN0b3IoXCJsaTpmaXJzdC1jaGlsZFwiKTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudCkge1xuICAgICAgY29uc3QgbGluayA9IGN1cnJlbnQucXVlcnlTZWxlY3RvcihcImFcIik7XG4gICAgICBpZiAobGluaykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxpbmsuaHJlZjtcbiAgICAgIH1cbiAgICAgIGZpZWxkLmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICBzZXRUZW1wbGF0ZSgpIHtcbiAgICAvLyBTaW1pbGFyIHRlbXBsYXRlIGFzIGluIGRlZmF1bHQgdGhlbWVcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgIDxsYWJlbCBmb3I9XCJ0c2Qtc2VhcmNoLWZpZWxkXCIgY2xhc3M9XCJ0c2Qtd2lkZ2V0IHNlYXJjaCBuby1jYXB0aW9uXCI+XG4gICAgICAgIFNlYXJjaFxuICAgIDwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0c2Qtc2VhcmNoLWZpZWxkXCIgLz5cbjwvZGl2PlxuXG48dWwgY2xhc3M9XCJyZXN1bHRzXCI+XG4gICAgPGxpIGNsYXNzPVwic3RhdGUgbG9hZGluZ1wiPlByZXBhcmluZyByZW1vdGUgc2VhcmNoIHNlcnZlci4uLjwvbGk+XG4gICAgPGxpIGNsYXNzPVwic3RhdGUgZmFpbHVyZVwiPlRoZSByZW1vdGUgc2VhcmNoIHNlcnZlciBpcyBub3QgYXZhaWxhYmxlPC9saT5cbjwvdWw+XG4gICAgYDtcblxuICAgIGlmICghaGFzQ2hpbGQodGhpcykpIHtcbiAgICAgIHRoaXMuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgfVxuICB9XG59XG4iLCAiLyoqXG4gKiBDcm9zcy1icm93c2VyIERvY3VtZW50IFJlYWR5IGNoZWNrXG4gKiBAc2VlIGh0dHBzOi8vd3d3LmNvbXBldGEuY29tL2Jsb2cvY3Jvc3MtYnJvd3Nlci1kb2N1bWVudC1yZWFkeS13aXRoLXZhbmlsbGEtamF2YXNjcmlwdC9cbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5leHBvcnQgY29uc3QgcmVhZHkgPSAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHtcbiAgaWYgKCFjYWxsYmFjayB8fCB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJUaGUgY2FsbGJhY2sgaXMgcmVxdWlyZWQhXCIpO1xuICB9XG5cbiAgY29uc3QgY2hlY2tSZWFkeSA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICBpZiAoKGRvY3VtZW50IGFzIGFueSkuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgKGRvY3VtZW50IGFzIGFueSkuZGV0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tSZWFkeSk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja1JlYWR5KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKChkb2N1bWVudCBhcyBhbnkpLmF0dGFjaEV2ZW50KSB7XG4gICAgKGRvY3VtZW50IGFzIGFueSkuYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tSZWFkeSk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja1JlYWR5KTtcbiAgfVxuICBjaGVja1JlYWR5KCk7XG59O1xuIiwgImltcG9ydCB7IFNlYXJjaCB9IGZyb20gXCIuL3NlYXJjaC1jb21wb25lbnRcIjtcbmltcG9ydCB7IHJlYWR5IH0gZnJvbSBcIi4vcmVhZHlcIjtcbmltcG9ydCB7IENsaWVudE9wdGlvbnMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBcIi4vZ2xvYmFsXCI7XG5cbi8qKlxuICogUmVwbGFjZSB0aGUgc2VhcmNoIGVsZW1lbnQgZnJvbSB0aGUgZGVmYXVsdCB0aGVtZSB3aXRoIG91ciBvd24gY3VzdG9tIGVsZW1lbnQgaWYgZm91bmRcbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG9yaWdpbmFsU2VhcmNoRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRzZC1zZWFyY2hcIik7XG4gIGNvbnN0IG9wdGlvbnM6IENsaWVudE9wdGlvbnMgfCBSZWNvcmQ8c3RyaW5nLCBuZXZlcj4gPVxuICAgIHdpbmRvdy5yZW1vdGVTZWFyY2hPcHRpb25zIHx8IHt9O1xuICBpZiAoIW9yaWdpbmFsU2VhcmNoRWwgfHwgIW9wdGlvbnMucmVwbGFjZUVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gVGhlIHRpdGxlIGlzIGEga2luZCBvZiBzZWFyY2ggZWxlbWVudCBpbiB0aGUgZGVmYXVsdCB0aGVtZVxuICBjb25zdCB0aXRsZUVsID0gb3JpZ2luYWxTZWFyY2hFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGl0bGVcIik7XG4gIGNvbnN0IHRzZFNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0c2Qtc2VhcmNoXCIpOyAvLyBUaGUgY3VzdG9tIGVsZW1lbnRcbiAgdHNkU2VhcmNoLmlkID0gXCJ0c2Qtc2VhcmNoXCI7XG4gIHRzZFNlYXJjaC5jbGFzc0xpc3QuYWRkKFwidGFibGUtY2VsbFwiKTtcbiAgaWYgKG9wdGlvbnMuc2VydmVyQmFzZVVybClcbiAgICB0c2RTZWFyY2guc2V0QXR0cmlidXRlKFwic2VydmVyLWJhc2UtdXJsXCIsIG9wdGlvbnMuc2VydmVyQmFzZVVybCk7XG5cbiAgLy8gUmVwbGFjZSBvcmlnaW5hbCBzZWFyY2ggZWxlbWVudCB3aXRoIG9yIGN1c3RvbSBlbGVtZW50XG4gIG9yaWdpbmFsU2VhcmNoRWwucGFyZW50Tm9kZT8ucmVwbGFjZUNoaWxkKHRzZFNlYXJjaCwgb3JpZ2luYWxTZWFyY2hFbCk7XG4gIC8vIFJlYWRkIHRoZSB0aXRsZVxuICBpZiAodGl0bGVFbC5sZW5ndGggPiAwKSB7XG4gICAgdHNkU2VhcmNoLmlubmVySFRNTCArPSB0aXRsZUVsLml0ZW0oMCk/Lm91dGVySFRNTDtcbiAgfVxufTtcblxucmVhZHkoKCkgPT4ge1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ0c2Qtc2VhcmNoXCIsIFNlYXJjaCk7IC8vIERlZmluZSBjdXN0b20gZWxlbWVudFxuICBtYWluKCk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFBQSxNQUFhO0FBQWI7QUFBQTtBQUFPLE1BQU0sV0FBVyxDQUFDLElBQTZCLE9BQU8sUUFBUTtBQUNuRSxZQUFJO0FBQ0osZUFBTyxJQUFJLFNBQWdCO0FBQ3pCLHVCQUFhLE9BQU87QUFDcEIsb0JBQVUsV0FBVyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFBQSxRQUMzQztBQUFBLE1BQ0Y7QUFBQTtBQUFBOzs7QUNOQSxNQUthO0FBTGI7QUFBQTtBQUtPLE1BQU0sV0FBVyxDQUFDLE9BQTJCO0FBTHBEO0FBTUUsWUFBSSxDQUFDLEdBQUcsY0FBYyxHQUFHO0FBQ3ZCLGlCQUFPO0FBQUEsUUFDVDtBQUNBLGNBQU0sYUFBYSxHQUFHO0FBQ3RCLFlBQUksV0FBVyxXQUFXLEtBQUssV0FBVyxHQUFHLGFBQWEsR0FBRztBQUMzRCxjQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsa0JBQVcsR0FBRyxjQUFkLG1CQUF5QixZQUFXLElBQUk7QUFDdEUsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUNBLGVBQU87QUFBQSxNQUNUO0FBQUE7QUFBQTs7O0FDaEJBLE1BU087QUFUUDtBQUFBO0FBS0E7QUFDQTtBQUdPLDZCQUFxQixZQUFZO0FBQUEsUUFHdEMsY0FBYztBQUNaLGdCQUFNO0FBSFIsK0JBQWdCLE9BQU8sU0FBUztBQUFBLFFBSWhDO0FBQUEsUUFFQSxvQkFBb0I7QUFDbEIsY0FBSTtBQUNGLGlCQUFLLDJCQUEyQjtBQUNoQyxpQkFBSyxZQUFZO0FBQ2pCLHVCQUFXLE1BQU07QUFDZixtQkFBSyxXQUFXO0FBQUEsWUFDbEIsR0FBRyxDQUFDO0FBQUEsVUFDTixTQUFTLE9BQVA7QUFDQSxvQkFBUSxNQUFNLG9DQUFvQztBQUNsRCxvQkFBUSxNQUFNLEtB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
