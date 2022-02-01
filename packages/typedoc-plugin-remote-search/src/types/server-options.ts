export interface ServerOptions {
  /** The directory in which your rendered typedoc documentation is located */
  docDir: string;
  /** Port of the search server */
  port: number;
  /** A domain name or IP address of the search server */
  hostname: string;
  /** `true` if the generated documentation should be served */
  serve: boolean;
}
