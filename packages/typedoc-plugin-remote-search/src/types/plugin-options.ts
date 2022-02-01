export interface PluginOptions {
  /** Port of the search server */
  port: number;
  /** A domain name or IP address of the search server */
  hostname: string;
  /** Replace the search element with a custom element for out of the box working remote search */
  replaceElement: boolean;
  /** Insert client-side javascript into the theme */
  script: boolean;
}
