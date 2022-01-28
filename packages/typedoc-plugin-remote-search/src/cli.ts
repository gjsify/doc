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
      describe:
        "Specifies the location where *.ts files are placed. E.g. @types/Gjs",
    })
    .help().argv;

  new SearchServer({
    docDir: argv.docDir,
    port: argv.port,
  });
}

start().catch(console.error);
