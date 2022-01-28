# typedoc-plugin-remote-search

## Install

```bash
npm install typedoc-plugin-remote-search
```

## Usage

Usage is the same as documented at [TypeDoc](https://typedoc.org/guides/installation/#command-line-interface):

```bash
typedoc --plugin typedoc-plugin-remote-search
```

This plugin has a build in web server to run the search on the server side:

```bash
typedoc-server --doc-dir ./doc/my-docs --port 3000
```

To see how the search works on the web server you can open the following URL with any search term in your browser: [localhost:3024/search/any search term](http://localhost:3024/search/any%20search%20term).