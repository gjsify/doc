# TypeDoc Build Docs

This package contains the config files for generating the documentations using TypeDoc.

For some reason the standard CLI of TypeDoc crashes with the types for Node-GTK, for this reason this package contains a simple CLI wrapper for TypeDoc with which the documentation generation works.

To switch between the original TypeDoc CLI and the custom TypeDoc CLI you can replace `start:typedoc-cli` with `start:custom-cli` and vice versa in the `scripts` section of the `package.json`.