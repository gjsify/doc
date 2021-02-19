// See https://github.com/TypeStrong/typedoc/issues/1403
const td = require('typedoc');
const ts = require('typescript');

const typedocJson = require('./typedoc.gjs');

/**
 * @param {Object} options
 *  @param {string} options.entryPoint
 *  @param {string} options.outDir
 * @param {Partial<import('typedoc').TypeDocOptions>} [typeDocOptions]
 */
const createTypeScriptApiDocs = async ({ entryPoint }, typeDocOptions) => {
  const app = new td.Application();
  app.options.addReader(new td.TSConfigReader());

  app.bootstrap({
    ...typedocJson,
    entryPoints: [entryPoint],
    tsconfig: 'tsconfig.json',
    ...typeDocOptions,
  });

  const program = ts.createProgram(
    app.options.getFileNames(),
    app.options.getCompilerOptions()
  );

  const project = app.converter.convert(
    app.expandInputFiles(app.options.getValue('entryPoints')),
    program
  );

  if (project) {
    await app.generateDocs(project, typedocJson.out);
  } else {
    throw new Error(`Error creating the TypeScript API docs for ${entryPoint}.`);
  }
};

createTypeScriptApiDocs({entryPoint: './@types/Gjs'}, {});