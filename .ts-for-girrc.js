exports.default = {
    modules: ['*'],
    ignore: [
        'Colorhug-1.0', // Duplicate of ColorHug-1.0
        'GUPnP-DLNA-1.0', // Same namespace as GUPnP-1.0.gir, is this a bug or should we merge the type definitions?
    ],
    girDirectories: [
        './vala-girs/gir-1.0',
        './girs',
        "/usr/local/share/gir-1.0",
        "/usr/share/gir-1.0",
        "/usr/share/gnome-shell",
        "/usr/share/gnome-shell/gir-1.0",
        "/usr/lib64/mutter-10",
        "/usr/lib64/mutter-11",
        "/usr/lib/x86_64-linux-gnu/mutter-10",
        "/usr/lib/x86_64-linux-gnu/mutter-11",
    ],
    ignoreVersionConflicts: true,
    moduleType: 'esm',
    package: true,
}
