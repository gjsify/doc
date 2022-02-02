#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { SearchServer } from "./search-server";
import type { ServerOptions } from "../types";

async function start() {
  const argv = await yargs(hideBin(process.argv))
    .scriptName("typedoc-server")
    .usage("$0 [args]")
    .option("doc-dir", {
      alias: "d",
      type: "string",
      normalize: true,
      demandOption: true,
      describe:
        "The directory in which your rendered typedoc documentation is located",
    })
    .option("port", {
      type: "number",
      normalize: true,
      default: 3024,
      describe: "Port of the search server",
    })
    .option("hostname", {
      type: "string",
      normalize: true,
      default: "localhost",
      describe: "A domain name or IP address of the search server",
    })
    .option("serve", {
      type: "boolean",
      normalize: true,
      default: true,
      describe:
        "Remain this value if the generated documentation should be served",
    })
    .option("no-serve", {
      type: "boolean",
      normalize: true,
      describe: "Disables the serve option",
    })
    .option("limit", {
      type: "number",
      normalize: true,
      default: 10,
      describe:
        "Limit of the search result (there is no limit when the value is 0)",
    })
    .option("decompress", {
      type: "boolean",
      normalize: true,
      default: true,
      describe:
        "This option should remain true if you have compressed the json file",
    })
    .option("no-decompress", {
      type: "boolean",
      normalize: true,
      describe: "Disables the decompress option",
    })
    .help().argv;

  const serverOptions: ServerOptions = {
    docDir: argv.docDir,
    port: argv.port,
    hostname: argv.hostname,
    serve: argv.serve,
    limit: argv.limit,
    decompress: argv.decompress,
  };

  new SearchServer(serverOptions);
}

start().catch(console.error);
