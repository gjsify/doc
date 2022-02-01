#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { SearchServer } from "./search-server";

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
    .option("noServe", {
      type: "boolean",
      normalize: true,
      default: false,
      describe:
        "Set this value to true if the generated documentation should not be served",
    })
    .help().argv;

  new SearchServer({
    docDir: argv.docDir,
    port: argv.port,
    hostname: argv.hostname,
    serve: !argv.noServe,
  });
}

start().catch(console.error);
