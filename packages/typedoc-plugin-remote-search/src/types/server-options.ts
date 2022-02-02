export interface ServerOptions {
  /** The directory in which your rendered typedoc documentation is located */
  docDir: string;
  /** Port of the search server */
  port: number;
  /** A domain name or IP address of the search server */
  hostname: string;
  /** `true` if the generated documentation should be served */
  serve: boolean;
  /** Limit of the search result (there is no limit when the value is 0) */
  limit: number;
}
