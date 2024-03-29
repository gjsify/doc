#!/usr/bin/env node

// See https://github.com/TypeStrong/typedoc/issues/1403
import { Application, TSConfigReader, TypeDocOptions, LogLevel } from "typedoc";
import { resolve } from "node:path";
import { mkdirSync } from "node:fs";
import { readFile } from "node:fs/promises";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { ConsoleLogger } from "./logger.js";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const logger = new ConsoleLogger();
logger.level = LogLevel.Verbose;

interface Options {
  typedoc?: string;
  ignoreErrors?: boolean;
}

const readJson = async (path: string) => {
  const file = await readFile(path, "utf8");
  return JSON.parse(file);
};

const loadConfigFile = async (typedoc?: string) => {
  let config: Partial<TypeDocOptions> = {};
  if (typedoc) {
    typedoc = resolve(".", typedoc);
    const file = await readJson(typedoc);
    if (file?.default?.default) {
      config = file.default.default;
    } else if (file?.default) {
      config = file.default;
    } else if (file) {
      config = file;
    }
  }
  return config;
};

async function generate(
  { typedoc, ignoreErrors = false }: Options,
  typeDocOptions: Partial<TypeDocOptions> = {}
) {
  const app = new Application();

  const typedocConfigFile = await loadConfigFile(typedoc);

  const entryPoints = [
    ...(typedocConfigFile.entryPoints || []),
    ...(typeDocOptions.entryPoints || []),
  ];

  typeDocOptions = { ...typedocConfigFile, ...typeDocOptions, entryPoints };
  typeDocOptions.plugin = [
    ...(typeDocOptions.plugin || []),
    require.resolve("@gjsify/typedoc-theme"),
    require.resolve("@gjsify/typedoc-plugin-remote-search"),
  ];

  // If you want TypeDoc to load tsconfig.json file
  app.options.addReader(new TSConfigReader());

  logger.info("Start typedoc using custom cli...");

  app.bootstrap(typeDocOptions);

  logger.info("Start parsing types...");
  const project = ignoreErrors
    ? app.converter.convert(app.getEntryPoints() ?? [])
    : app.convert();

  // Run Garbage Collector if node was started with `--expose-gc`
  if (global.gc) {
    logger.info("Run Garbage Collector...");
    global.gc();
    global.gc();
  }

  if (project && typeDocOptions.out) {
    mkdirSync(typeDocOptions.out, { recursive: true });
    logger.info("Start generating the docs...");
    await app.generateDocs(project, typeDocOptions.out);
    logger.info("Done");
  }
}

async function start() {
  const argv = await yargs(hideBin(process.argv))
    .scriptName("gjsify-doc")
    .usage("$0 [args]")
    .option("options", {
      type: "string",
      normalize: true,
      describe:
        "Specify a json option file that should be loaded. If not specified TypeDoc will look for json and js in the current directory. E.g. gjs.js",
    })
    .option("ignoreErrors", {
      type: "boolean",
      normalize: true,
      describe: "Ignore errors",
    })
    .help().argv;

  await generate(
    {
      typedoc: argv.options,
      ignoreErrors: argv.ignoreErrors,
    },
    {}
  );
}

start().catch(console.error);
