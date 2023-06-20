import { SearchDocument } from "./search-document";
import type { Index } from "lunr";

export interface SearchData {
  // kinds: { [kind: number]: string };
  rows: SearchDocument[];
  index: Index;
}
