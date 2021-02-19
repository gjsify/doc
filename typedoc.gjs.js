module.exports = {
    out: './docs/gjs/',
    readme: 'none',
    includes: './@types/Gjs',
    exclude: [
        // TODO fix duplicate identifiers
        '@types/Gjs/index.d.ts',
        
        // Has errors
        '@types/Gjs/Clutter-1.0.d.ts',
        '@types/Gjs/Champlain-0.12.d.ts',
        '@types/Gjs/Dazzle-1.0.d.ts',
        '@types/Gjs/Gdaui-6.0.d.ts',
        '@types/Gjs/Gitg-1.0.d.ts',
        '@types/Gjs/Mx-2.0.d.ts'
    ],
}
