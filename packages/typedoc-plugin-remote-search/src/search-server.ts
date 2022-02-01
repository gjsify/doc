import Koa from "koa";
import serve from "koa-static";
import compress from "koa-compress";
import Router from "@koa/router";
import { Index } from "lunr";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { ServerOptions, SearchState, SearchData, SearchResult } from "./types";

const SPECIAL_HTML = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#039;",
  '"': "&quot;",
} as const;

/**
 * The search processing is based ob the original client side code
 * @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/assets/typedoc/components/Search.ts
 */
export class SearchServer {
  state: SearchState;
  app: Koa<Koa.DefaultState, Koa.DefaultContext>;
  router: Router<Koa.DefaultState, Koa.DefaultContext>;

  constructor(readonly options: ServerOptions) {
    this.app = new Koa();
    this.router = new Router();

    this.state = this.loadIndex();

    this.router.get("/search/:text", (ctx, next) => {
      console.info(`Search for ${ctx.params.text}`);
      const result = this.getResults(ctx.params.text);
      ctx.body = result;
      return result;
    });

    this.app.use(compress());
    if (options.serve) this.app.use(serve(options.docDir, {}));
    this.app.use(this.router.routes());
    this.app.use(this.router.allowedMethods());

    console.info(
      `Start typedoc server, visit http://${options.hostname}:${options.port}`
    );
    this.app.listen(options.port, options.hostname);
  }

  loadIndex() {
    const filePath = join(this.options.docDir, "assets", "search.json");
    if (!existsSync) {
      throw new Error(`File not found "${filePath}"`);
    }
    const jsonStr = readFileSync(filePath, "utf8");
    const data: SearchData = JSON.parse(jsonStr);
    const state: SearchState = {
      data,
      index: Index.load(data.index),
    };
    return state;
  }

  getResults(searchQuery: string) {
    // Remove wildcard search
    const searchText = searchQuery.replace(/\*/g, "");

    // Don't clear results if loading state is not ready,
    // because loading or error message can be removed.
    if (!this.state.index || !this.state.data) return;

    const results: SearchResult[] = [];

    const res = this.state.index.search(searchQuery);

    for (let i = 0, c = Math.min(10, res.length); i < c; i++) {
      const row = this.state.data.rows[Number(res[i].ref)];

      // Bold the matched part of the query in the search results
      let name = this.boldMatches(row.name, searchText);
      if (row.parent) {
        name = `<span class="parent">${this.boldMatches(
          row.parent,
          searchText
        )}.</span>${name}`;
      }

      results.push({
        classes: row.classes,
        url: row.url,
        name,
      });
    }
    return results;
  }

  boldMatches(text: string, search: string) {
    if (search === "") {
      return text;
    }

    const lowerText = text.toLocaleLowerCase();
    const lowerSearch = search.toLocaleLowerCase();

    const parts = [];
    let lastIndex = 0;
    let index = lowerText.indexOf(lowerSearch);
    while (index != -1) {
      parts.push(
        this.escapeHtml(text.substring(lastIndex, index)),
        `<b>${this.escapeHtml(
          text.substring(index, index + lowerSearch.length)
        )}</b>`
      );

      lastIndex = index + lowerSearch.length;
      index = lowerText.indexOf(lowerSearch, lastIndex);
    }

    parts.push(this.escapeHtml(text.substring(lastIndex)));

    return parts.join("");
  }

  escapeHtml(text: string) {
    return text.replace(
      /[&<>"'"]/g,
      (match) => SPECIAL_HTML[match as keyof typeof SPECIAL_HTML]
    );
  }
}
