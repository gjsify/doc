import type { ClientOptions } from "../types";

declare global {
  interface Window {
    remoteSearchOptions?: ClientOptions;
  }
}
