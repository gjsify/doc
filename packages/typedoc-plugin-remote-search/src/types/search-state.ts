import type { Index } from "lunr";
import type { SearchData } from "./search-data";

export interface SearchState {
  // base: string;
  data?: SearchData;
  index?: Index;
}
