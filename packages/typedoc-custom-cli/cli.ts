#!/usr/bin/env node

// See https://github.com/TypeStrong/typedoc/issues/1403
import { Application, TSConfigReader, TypeDocOptions, LogLevel } from "typedoc";
import { resolve } from "path";
import { readdirSync, mkdirSync } from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
// import minimatch from 'minimatch'
import _appRoot from "app-root-path";
import { ConsoleLogger } from "./logger";
const appRoot = _appRoot.toString();
const logger = new ConsoleLogger();
logger.level = LogLevel.Verbose;

const getEntryPoints = (dir: string, exclude: string[] = []) => {
  const entryPoints: string[] = [];
  const directoryPath = resolve(appRoot, dir);
  const files = readdirSync(directoryPath);
  for (const file of files) {
    if (file.endsWith(".d.ts")) {
      // TODO use minimatch like typedoc: https://github.com/isaacs/minimatch
      if (!exclude.includes(file)) {
        entryPoints.push(resolve(directoryPath, file));
      }
    }
  }
  return entryPoints;
};

interface Options {
  entryPoints?: string[];
  inDir?: string;
  outDir?: string;
  typedoc?: string;
  ignoreErrors?: boolean;
}

const loadConfigFile = async (typedoc?: string) => {
  let config: Partial<TypeDocOptions> = {};
  if (typedoc) {
    typedoc = resolve(appRoot, typedoc);
    const file = await import(typedoc);
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
  { entryPoints = [], inDir, outDir, typedoc, ignoreErrors = false }: Options,
  typeDocOptions: Partial<TypeDocOptions> = {}
) {
  const app = new Application();

  const typedocConfigFile = await loadConfigFile(typedoc);

  typeDocOptions = { ...typedocConfigFile, ...typeDocOptions };
  typeDocOptions.out = outDir || typeDocOptions.out || "docs";
  typeDocOptions.entryPoints = typeDocOptions.entryPoints || [];
  typeDocOptions.entryPoints.push(...entryPoints);
  typeDocOptions.plugin = [
    require.resolve("@gjsify/typedoc-theme"),
    require.resolve("@gjsify/typedoc-plugin-remote-search"),
  ];
  typeDocOptions.theme = "gjsify";

  if (inDir) {
    typeDocOptions.entryPoints.push(
      ...getEntryPoints(inDir, typeDocOptions.exclude)
    );
  }

  // If you want TypeDoc to load tsconfig.json file
  app.options.addReader(new TSConfigReader());

  app.bootstrap(typeDocOptions);

  logger.info("Start parsing types...");
  const project = ignoreErrors
    ? app.converter.convert(app.getEntryPoints() ?? [])
    : app.convert();

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
    .option("in", {
      type: "string",
      normalize: true,
      describe:
        "Specifies the location where *.ts files are placed. E.g. @types/Gjs",
    })
    .option("out", {
      type: "string",
      normalize: true,
      describe:
        "Specifies the location the html documentation should be written to. E.g.: docs/gjs",
    })
    .option("options", {
      type: "string",
      normalize: true,
      describe:
        "Specify a json option file that should be loaded. If not specified TypeDoc will look for json and js in the current directory. E.g. gjs.js",
    })
    .option("tsconfig", {
      type: "string",
      normalize: true,
      describe:
        "Specify a tsconfig.json file that options should be read from. If not specified TypeDoc will look for tsconfig.json in the current directory and parent directories like tsc does.",
    })
    .option("ignoreErrors", {
      type: "boolean",
      normalize: true,
      describe: "Ignore errors",
    })
    .help().argv;

  await generate(
    {
      inDir: argv.in,
      outDir: argv.out,
      typedoc: argv.options,
      ignoreErrors: argv.ignoreErrors,
    },
    {}
  );
}

start().catch(console.error);
