// See https://github.com/TypeStrong/typedoc/issues/1403
const td = require('typedoc');
const path = require('path');
const fs = require('fs');

const typedocJson = require('./typedoc.gjs.js');

const getEntryPoints = (dir) => {
  const entryPoints = [];
  const directoryPath = path.resolve(__dirname, dir);
  console.log("directoryPath", directoryPath);
  const files = fs.readdirSync(directoryPath);
  for (const file of files) {
    if (file.endsWith('.ts')) {
      entryPoints.push(path.join(dir, file))
    }
  }
  return entryPoints;
}

/**
 * @param {Object} options
 *  @param {string} options.entryPoint
 *  @param {string} options.outDir
 * @param {Partial<import('typedoc').TypeDocOptions>} [typeDocOptions]
 */
const createTypeScriptApiDocs = async ({ entryPoints, outDir }, typeDocOptions) => {
  const app = new td.Application();
  app.options.addReader(new td.TSConfigReader());

  app.bootstrap({
    ...typedocJson,
    entryPoints: entryPoints,
    tsconfig: 'tsconfig.json',
    ...typeDocOptions,
  });

  // This is the part that seems to skip compile errors
  // (normally we would call `app.convert()` here)
  const project = app.converter.convert(app.getEntryPoints() ?? []);
  // const project = app.converter.convert(app.convert());

  if (project) {
    await app.generateDocs(project, typedocJson.out || outDir);
  } else {
    throw new Error(`Error creating the TypeScript API docs for ${entryPoint}.`);
  }
};

const entryPoints = getEntryPoints('./@types/Gjs');
createTypeScriptApiDocs({entryPoints, outDir: './docs/gjs/'}, {});

