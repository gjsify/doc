export interface PluginOptions {
  /** Port of the search server */
  port: number;
  /** A domain name or IP address of the search server */
  hostname: string;
  /** Replace the search element with a custom element for out of the box working remote search */
  replaceElement: boolean;
  /** Insert client-side javascript into the theme */
  script: boolean;
  /** Activates the compression of the search.json */
  compress: boolean;
  /** The compression level 0-9, 0 is no compression, 1 the fastest and 9 the highest */
  compressLevel: number;
  /** If true, additional compression is performed by jsonpack. Disabled by default because this can take a long time with large files */
  pack: boolean;
}
