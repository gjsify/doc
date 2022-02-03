#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { SearchServer } from "./search-server";
import { Converter } from "../converter";

import type { Options } from "yargs";
import type { ServerOptions } from "../types";
import { LogLevel } from "typedoc";
import { ConsoleLogger } from "../logger";

const options = {
  deleteSource: {
    name: "delete-source",
    type: "string",
    normalize: true,
    default: true,
    describe: "If true the source file will be deleted after conversion",
  } as Options & { name: string },
  noDeleteSource: {
    name: "no-delete-source",
    type: "string",
    normalize: true,
    describe: "If true the source file will NOT be deleted after conversion",
  } as Options & { name: string },
  convertSource: {
    name: "source",
    type: "string",
    normalize: true,
    demandOption: true,
    describe: "The source file path. E.g ./docs/assets/search.js",
  } as Options & { name: string },
  compressSource: {
    name: "source",
    type: "string",
    normalize: true,
    demandOption: true,
    describe: "The source file path. E.g ./docs/assets/search.json",
  } as Options & { name: string },
  compressTarget: {
    name: "target",
    type: "string",
    normalize: true,
    demandOption: true,
    describe: "The destination file path. E.g ./docs/assets/search.json.7z",
  } as Options & { name: string },
  decompressSource: {
    name: "source",
    type: "string",
    normalize: true,
    demandOption: true,
    describe: "The source file path. E.g ./docs/assets/search.json.7z",
  } as Options & { name: string },
  decompressTarget: {
    name: "target",
    type: "string",
    normalize: true,
    demandOption: true,
    describe: "The destination file path. E.g ./docs/assets/search.json",
  } as Options & { name: string },
  compress: {
    name: "compress",
    type: "number",
    normalize: true,
    default: 6,
    describe:
      "The compression level 0-9, 0 is no compression, 1 the fastest and 9 the highest",
  } as Options & { name: string },
  pack: {
    name: "pack",
    type: "boolean",
    normalize: true,
    default: false,
    describe:
      "If true, additional compression is performed by jsonpack. Disabled by default because this can take a long time with large files",
  } as Options & { name: string },
  unpack: {
    name: "unpack",
    type: "boolean",
    normalize: true,
    default: false,
    describe: "This value must be true if you have packed the json file before",
  } as Options & { name: string },
  docDir: {
    name: "doc-dir",
    alias: "d",
    type: "string",
    normalize: true,
    demandOption: true,
    describe:
      "The directory in which your rendered typedoc documentation is located",
  } as Options & { name: string },
  port: {
    name: "port",
    type: "number",
    normalize: true,
    default: 3024,
    describe: "Port of the search server",
  } as Options & { name: string },
  hostname: {
    name: "hostname",
    type: "string",
    normalize: true,
    default: "localhost",
    describe: "A domain name or IP address of the search server",
  } as Options & { name: string },
  serve: {
    name: "serve",
    type: "boolean",
    normalize: true,
    default: true,
    describe:
      "Remain this value if the generated documentation should be served",
  } as Options & { name: string },
  noServe: {
    name: "no-serve",
    type: "boolean",
    normalize: true,
    describe: "Disables the serve option",
  } as Options & { name: string },
  limit: {
    name: "limit",
    type: "number",
    normalize: true,
    default: 10,
    describe:
      "Limit of the search result (there is no limit when the value is 0)",
  } as Options & { name: string },
  decompress: {
    name: "decompress",
    type: "boolean",
    normalize: true,
    default: true,
    describe:
      "This option should remain true if you have compressed the json file",
  } as Options & { name: string },
  noDecompress: {
    name: "no-decompress",
    type: "boolean",
    normalize: true,
    describe: "Disables the decompress option",
  } as Options & { name: string },
};

async function start() {
  const logger = new ConsoleLogger();
  logger.level = LogLevel.Verbose;
  await yargs(hideBin(process.argv))
    .scriptName("typedoc-server")
    .usage("$0 <cmd> [args]")
    .command(
      "serve [doc-dir]",
      "serves the documentation and starts the search server",
      (yargs) => {
        yargs
          .option(options.docDir.name, options.docDir)
          .option(options.port.name, options.port)
          .option(options.hostname.name, options.hostname)
          .option(options.serve.name, options.serve)
          .option(options.noServe.name, options.noServe)
          .option(options.limit.name, options.limit)
          .option(options.decompress.name, options.decompress)
          .option(options.noDecompress.name, options.noDecompress)
          .option(options.unpack.name, options.unpack);
      },
      async (yargs) => {
        logger.info("Start serve...");
        const serverOptions: ServerOptions = {
          docDir: yargs.docDir as string,
          port: yargs.port as number,
          hostname: yargs.hostname as string,
          serve: yargs.serve as boolean,
          limit: yargs.limit as number,
          decompress: yargs.decompress as boolean,
          unpack: yargs.unpack as boolean,
        };

        const server = new SearchServer(serverOptions);
        await server.start();
      }
    )
    .command(
      "compress [source]",
      "Compresses the search.json, since this can take some time, this can also be done afterwards with this command",
      (yargs) => {
        yargs.option(options.compressSource.name, options.compressSource);
        yargs.option(options.compressTarget.name, options.compressTarget);
        yargs.option(options.compress.name, options.compress);
        yargs.option(options.pack.name, options.pack);
      },
      async (yargs) => {
        logger.info("Start compression...");
        const converter = new Converter(logger);
        const source = yargs.source as string;
        const target = yargs.target as string;
        const compress = yargs.compress as number;
        const pack = yargs.pack as boolean;
        const data = await converter.load<any>(source, false, false);
        await converter.write(data, target, compress, pack);
      }
    )
    .command(
      "decompress [source]",
      "Decompresses the search.json.7z, this may be useful to compare the files to see how much memory the compression has saved",
      (yargs) => {
        yargs.option(options.decompressSource.name, options.decompressSource);
        yargs.option(options.decompressTarget.name, options.decompressTarget);
        yargs.option(options.unpack.name, options.unpack);
      },
      async (yargs) => {
        logger.info("Start decompression...");
        const converter = new Converter(logger);
        const source = yargs.source as string;
        const target = yargs.target as string;
        const unpack = yargs.unpack as boolean;
        const data = await converter.load(source, true, unpack);
        await converter.write(data, target, 0, false);
      }
    )
    .command(
      "convert [source]",
      "Convert the search.js to search.json or search.json.7z, in this way this can also be done by hand without having to use the plugin for it",
      (yargs) => {
        yargs.option(options.convertSource.name, options.convertSource);
        yargs.option(options.deleteSource.name, options.deleteSource);
        yargs.option(options.noDeleteSource.name, options.noDeleteSource);
        yargs.option(options.compressTarget.name, options.compressTarget);
        yargs.option(options.compress.name, options.compress);
        yargs.option(options.pack.name, options.pack);
      },
      async (yargs) => {
        logger.info("Start conversion...");
        const converter = new Converter(logger);
        const source = yargs.source as string;
        const target = yargs.target as string;
        const compress = yargs.compress as number;
        const pack = yargs.pack as boolean;
        const deleteSource = yargs.deleteSource as boolean;
        await converter.convertSearch(
          source,
          target,
          deleteSource,
          compress,
          pack
        );
      }
    )
    .command(
      "revert [source]",
      "Reverts the search.json(.z7) to the original search.js",
      (yargs) => {
        yargs.option(options.decompressSource.name, options.decompressSource);
        yargs.option(options.deleteSource.name, options.deleteSource);
        yargs.option(options.noDeleteSource.name, options.noDeleteSource);
        yargs.option(options.decompressTarget.name, options.decompressTarget);
        yargs.option(options.decompress.name, options.decompress);
        yargs.option(options.noDecompress.name, options.noDecompress);
        yargs.option(options.unpack.name, options.unpack);
      },
      async (yargs) => {
        logger.info("Start reversion...");
        const converter = new Converter(logger);
        const source = yargs.source as string;
        const target = yargs.target as string;
        const decompress = yargs.decompress as boolean;
        const unpack = yargs.unpack as boolean;
        const deleteSource = yargs.deleteSource as boolean;
        await converter.revertSearch(
          source,
          target,
          deleteSource,
          decompress,
          unpack
        );
      }
    )
    .help().argv;
}

start().catch(console.error);
