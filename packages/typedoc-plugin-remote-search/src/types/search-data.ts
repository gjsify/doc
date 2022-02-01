import { SearchDocument } from "./search-document";

export interface SearchData {
  kinds: { [kind: number]: string };
  rows: SearchDocument[];
  index: object;
}
