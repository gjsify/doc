export default {
    out: 'docs/gjs/',
    readme: 'none',
    includes: '@types/Gjs/',
    tsconfig: 'tsconfig.gjs.json',
    entryPointStrategy: 'resolve',
    exclude: [
        'index.d.ts'
    ],
}
