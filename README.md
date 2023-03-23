# doc
Gjs and node-gtk Typescript API documentation

## Submodules

This repository has submodules, so you need to clone this repository including this submodules:

```bash
git clone --recursive https://github.com/gjsify/doc.git
```

You can also clone the submodules afterwards:

```bash
git clone https://github.com/gjsify/doc.git
cd doc
git submodule update --init --recursive
```

If you want to pull updates from this repository you should also pull the submodules:

```bash
git pull --recurse-submodules
```

## Generate documentations

Simply execute:

```bash
yarn install
yarn run build
yarn run start
```

## TODO

Get images from https://gitlab.gnome.org/GNOME/gtk/-/tree/main/docs/reference/gtk/images

## FAQ

Problem: I get the following error:

```
FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory
```

Solution:

```bash
sudo sysctl -w vm.max_map_count=262144
NODE_OPTIONS=--max-old-space-size=25600 yarn run start
```
