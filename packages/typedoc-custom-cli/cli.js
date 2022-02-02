#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// See https://github.com/TypeStrong/typedoc/issues/1403
const typedoc_1 = require("typedoc");
const path_1 = require("path");
const fs_1 = require("fs");
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
// import minimatch from 'minimatch'
const app_root_path_1 = __importDefault(require("app-root-path"));
const appRoot = app_root_path_1.default.toString();
const getEntryPoints = (dir, exclude = []) => {
    const entryPoints = [];
    const directoryPath = (0, path_1.resolve)(appRoot, dir);
    const files = (0, fs_1.readdirSync)(directoryPath);
    for (const file of files) {
        if (file.endsWith(".d.ts")) {
            // TODO use minimatch like typedoc: https://github.com/isaacs/minimatch
            if (!exclude.includes(file)) {
                entryPoints.push((0, path_1.resolve)(directoryPath, file));
            }
        }
    }
    return entryPoints;
};
const loadConfigFile = async (typedoc) => {
    let config = {};
    if (typedoc) {
        typedoc = (0, path_1.resolve)(appRoot, typedoc);
        console.debug("typedoc", typedoc);
        const file = await Promise.resolve().then(() => __importStar(require(typedoc)));
        if (file?.default?.default) {
            config = file.default.default;
        }
        else if (file?.default) {
            config = file.default;
        }
        else if (file) {
            config = file;
        }
    }
    return config;
};
async function generate({ entryPoints = [], inDir, outDir, typedoc, ignoreErrors = false }, typeDocOptions = {}) {
    const app = new typedoc_1.Application();
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
        typeDocOptions.entryPoints.push(...getEntryPoints(inDir, typeDocOptions.exclude));
    }
    // If you want TypeDoc to load tsconfig.json file
    app.options.addReader(new typedoc_1.TSConfigReader());
    console.debug("typeDocOptions", typeDocOptions);
    app.bootstrap(typeDocOptions);
    console.info("Start parsing types...");
    const project = ignoreErrors
        ? app.converter.convert(app.getEntryPoints() ?? [])
        : app.convert();
    if (project && typeDocOptions.out) {
        (0, fs_1.mkdirSync)(typeDocOptions.out, { recursive: true });
        console.info("Start generating the docs...");
        await app.generateDocs(project, typeDocOptions.out);
        console.info("Done");
    }
}
async function start() {
    const argv = await (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
        .scriptName("gjsify-doc")
        .usage("$0 [args]")
        .option("in", {
        type: "string",
        normalize: true,
        describe: "Specifies the location where *.ts files are placed. E.g. @types/Gjs",
    })
        .option("out", {
        type: "string",
        normalize: true,
        describe: "Specifies the location the html documentation should be written to. E.g.: docs/gjs",
    })
        .option("options", {
        type: "string",
        normalize: true,
        describe: "Specify a json option file that should be loaded. If not specified TypeDoc will look for json and js in the current directory. E.g. gjs.js",
    })
        .option("tsconfig", {
        type: "string",
        normalize: true,
        describe: "Specify a tsconfig.json file that options should be read from. If not specified TypeDoc will look for tsconfig.json in the current directory and parent directories like tsc does.",
    })
        .option("ignoreErrors", {
        type: "boolean",
        normalize: true,
        describe: "Ignore errors",
    })
        .help().argv;
    await generate({
        inDir: argv.in,
        outDir: argv.out,
        typedoc: argv.options,
        ignoreErrors: argv.ignoreErrors,
    }, {});
}
start().catch(console.error);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSx3REFBd0Q7QUFDeEQscUNBQXNFO0FBQ3RFLCtCQUErQjtBQUMvQiwyQkFBNEM7QUFDNUMsa0RBQTBCO0FBQzFCLDJDQUF3QztBQUN4QyxvQ0FBb0M7QUFDcEMsa0VBQXFDO0FBQ3JDLE1BQU0sT0FBTyxHQUFHLHVCQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFcEMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxHQUFXLEVBQUUsVUFBb0IsRUFBRSxFQUFFLEVBQUU7SUFDN0QsTUFBTSxXQUFXLEdBQWEsRUFBRSxDQUFDO0lBQ2pDLE1BQU0sYUFBYSxHQUFHLElBQUEsY0FBTyxFQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFBLGdCQUFXLEVBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7UUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzFCLHVFQUF1RTtZQUN2RSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDM0IsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFBLGNBQU8sRUFBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNoRDtTQUNGO0tBQ0Y7SUFDRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFVRixNQUFNLGNBQWMsR0FBRyxLQUFLLEVBQUUsT0FBZ0IsRUFBRSxFQUFFO0lBQ2hELElBQUksTUFBTSxHQUE0QixFQUFFLENBQUM7SUFDekMsSUFBSSxPQUFPLEVBQUU7UUFDWCxPQUFPLEdBQUcsSUFBQSxjQUFPLEVBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLE9BQU8s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