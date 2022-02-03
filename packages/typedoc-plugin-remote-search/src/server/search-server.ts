import Koa from "koa";
import serve from "koa-static";
import compress from "koa-compress";
import Router from "@koa/router";
import { join } from "path";
import { Converter } from "../converter";
import { ServerOptions, SearchState, SearchResult } from "../types";
import { ConsoleLogger } from "../logger";
import type { Logger } from "typedoc";

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
  state?: SearchState;
  app: Koa<Koa.DefaultState, Koa.DefaultContext>;
  router: Router<Koa.DefaultState, Koa.DefaultContext>;
  converter: Converter;
  logger: Logger;

  constructor(readonly options: ServerOptions, logger?: Logger) {
    this.app = new Koa();
    this.router = new Router();
    this.logger = logger || new ConsoleLogger();
    this.converter = new Converter(this.logger);

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
  }

  public async start() {
    this.state = await this.loadIndex();
    console.info(
      `Start typedoc server, visit http://${this.options.hostname}:${this.options.port}`
    );
    this.app.listen(this.options.port, this.options.hostname);
  }

  async loadIndex() {
    const filename = this.options.decompress ? "search.json.7z" : "search.json";
    const filePath = join(this.options.docDir, "assets", filename);
    return await this.converter.loadSearch(
      filePath,
      this.options.decompress,
      this.options.unpack
    );
  }

  getResults(searchQuery: string) {
    // Remove wildcard search
    const searchText = searchQuery.replace(/\*/g, "");
    const results: SearchResult[] = [];

    if (!this.state) {
      this.logger.error(`State is\n${JSON.stringify(this.state, null, 2)}`);
      throw new Error(
        "state not set, forgotten to call this.loadIndex() before?"
      );
    }

    if (searchText.length < 2) {
      console.warn(`Search text to small: "${searchText}"`);
      return results;
    }

    if (!this.state.index || !this.state.data) return results;

    const res = this.state.index.search(searchQuery);

    const count =
      this.options.limit > 0
        ? Math.min(this.options.limit, res.length)
        : res.length;

    for (let i = 0; i < count; i++) {
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
