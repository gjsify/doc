exports.default = {
    out: "../../docs/try/",
    readme: "none",
    includes: ".../../@types/Gjs/",
    entryPoints: ["../../@types/Gjs/Zeitgeist-2.0.d.ts"],
    tsconfig: "./tsconfig.try.json",
    entryPointStrategy: "resolve",
    exclude: ["index.d.ts"],
    disableSources: false,
    serverBaseUrl: "https://try-docs.gjsify.org/",
    name: "GJS API Reference",
};
