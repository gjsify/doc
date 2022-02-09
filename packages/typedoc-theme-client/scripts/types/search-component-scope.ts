import type { SearchResult } from ".";
import type { SearchComponent } from "../components/search/search.component";

export interface SearchComponentScope {
  /** Port of the search server */
  port: number;
  /** A domain name or IP address of the search server */
  hostname: string;
  /** Base url */
  base: string;
  /** `true` as log as we are waiting for the search response */
  isLoading: boolean;
  /** `true` if the search response has an error */
  hasFailure: boolean;
  /** `true` if the result is ready (is not loading and has no failure) */
  isReady: boolean;
  /** Array of the the search result items */
  results: SearchResult[];
  /** The search query */
  query: string;
  preventPress: boolean;
  // TODO remove
  fieldEl?: HTMLInputElement;
  // TODO remove
  resultsEl?: HTMLElement;
  setFocus: SearchComponent["setFocus"];
  onFocus: SearchComponent["onFocus"];
  onBlur: SearchComponent["onBlur"];
  onInput: SearchComponent["onInput"];
  onKeydown: SearchComponent["onKeydown"];
  onKeypress: SearchComponent["onKeypress"];
}
