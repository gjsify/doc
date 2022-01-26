export default {
    out: 'docs/try/',
    readme: 'none',
    includes: '@types/Gjs/',
    entryPoints: ['@types/Gjs/Gtk-4.0.d.ts'],
    tsconfig: 'tsconfig.try.json',
    entryPointStrategy: 'resolve',
    exclude: [
        'index.d.ts'
    ],
}
