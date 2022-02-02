exports.default = {
    out: "../../docs/node-gtk/",
    readme: "none",
    includes: "../../@types/node-gtk/",
    tsconfig: "./tsconfig.node.json",
    entryPointStrategy: "resolve",
    exclude: ["index.d.ts"],
    noScript: true,
};
