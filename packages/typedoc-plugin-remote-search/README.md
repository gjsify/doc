# Typedoc Remote Search Plugin

A plugin for TypeDoc that moves the API search to the server.

## Why?

This is useful when the API documentation is very large. This can lead to the `search.js` becoming several hundred MB in size and thus unusable on the client side.

## Install

```bash
npm install @gjsify/typedoc-plugin-remote-search
```

## Usage

Usage is the same as documented at [TypeDoc](https://typedoc.org/guides/installation/#command-line-interface):

```bash
typedoc --plugin @gjsify/typedoc-plugin-remote-search
```

```js
const typeDocOptions = {
  plugin: [
    require.resolve("@gjsify/typedoc-plugin-remote-search"),
  ],
};
```

### Plugin Arguments

```bash
$typedoc --plugin @gjsify/typedoc-plugin-remote-search --help

Options:
 --compressLevel             [Remote Search] The compression level 0-9, 0 is no compression, 1 the fastest and 9 the highest
 --hostname                  [Remote Search] A domain name or IP address of the search server
 --noCompress                [Remote Search] Disables the compression of the search.json
 --noReplaceElement          [Remote Search] Do not replace the search element with a custom element for out of the box working remote search
 --noScript                  [Remote Search] Do not insert client-side javascript into the theme (this way the search will not work without manual adjustments)
 --pack                      [Remote Search] If true, additional compression is performed by jsonpack. Disabled by default because this can take a long time with large files
 --port                      [Remote Search] Port of remote search server
```

## Cli

This plugin also contains its own CLI with which the search server can be started or the search can be converted or converted back without the plugin.

### Serve

Build in web server to run the search on the server side:

```bash
typedoc-server serve --doc-dir ./doc/my-docs --port 3000
```

Possible arguments: 

```
$typedoc-server serve --help

typedoc-server serve [doc-dir]

serves the documentation and starts the search server

Options:
  -d, --doc-dir        The directory in which your rendered typedoc
                       documentation is located              [string] [required]
      --port           Port of the search server        [number] [default: 3024]
      --hostname       A domain name or IP address of the search server
                                                 [string] [default: "localhost"]
      --serve          Remain this value if the generated documentation should
                       be served                        [string] [default: true]
      --no-serve       Disables the serve option                        [string]
      --limit          Limit of the search result (there is no limit when the
                       value is 0)                        [number] [default: 10]
      --decompress     This option should remain true if you have compressed the
                       json file                        [string] [default: true]
      --no-decompress  Disables the decompress option                   [string]
      --unpack         This value must be true if you have packed the json file
                       before                          [string] [default: false]
```


To see how the search works on the web server you can open the following URL with `any search term` in your browser: [localhost:3024/search/any search term](http://localhost:3024/search/any%20search%20term).

### Other Commands

There are more commands, for example to convert the search.js by hand

```bash
$typedoc-server --help

Commands:
  typedoc-server serve       serves the documentation and starts the search
                             server
  typedoc-server compress    Compresses the search.json, since this can take
                             some time, this can also be done afterwards with
                             this command
  typedoc-server decompress  Decompresses the search.json.7z, this may be useful
                             to compare the files to see how much memory the
                             compression has saved
  typedoc-server convert     Convert the search.js to search.json or
                             search.json.7z, in this way this can also be done
                             by hand without having to use the plugin for it
  typedoc-server revert      Reverts the search.json(.z7) to the original
                             search.js

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

### Compress

```bash
$typedoc-server compress --help

typedoc-server compress [source]

Compresses the search.json, since this can take some time, this can also be done
afterwards with this command

Options:
  --version   Show version number                                      [boolean]
  --help      Show help                                                [boolean]
  --source    The source file path. E.g ./docs/assets/search.json
                                                             [string] [required]
  --target    The destination file path. E.g ./docs/assets/search.json.7z
                                                             [string] [required]
  --compress  The compression level 0-9, 0 is no compression, 1 the fastest and
              9 the highest                                [number] [default: 9]
  --pack      If true, additional compression is performed by jsonpack. Disabled
              by default because this can take a long time with large files
                                                       [string] [default: false]
```

### Decompress

```bash
$typedoc-server decompress --help

typedoc-server decompress [source]

Decompresses the search.json.7z, this may be useful to compare the files to see
how much memory the compression has saved

Options:
  --source   The source file path. E.g ./docs/assets/search.json.7z
                                                             [string] [required]
  --target   The destination file path. E.g ./docs/assets/search.json
                                                             [string] [required]
  --unpack   This value must be true if you have packed the json file before
                                                       [string] [default: false]
```

### Convert

```bash
$typedoc-server convert --help

typedoc-server convert [source]

Convert the search.js to search.json or search.json.7z, in this way this can
also be done by hand without having to use the plugin for it

Options:
  --source            The source file path. E.g ./docs/assets/search.js
                                                             [string] [required]
  --delete-source     If true the source file will be deleted after conversion
                                                        [string] [default: true]
  --no-delete-source  If true the source file will NOT be deleted after
                      conversion                                        [string]
  --target            The destination file path. E.g
                      ./docs/assets/search.json.7z           [string] [required]
  --compress          The compression level 0-9, 0 is no compression, 1 the
                      fastest and 9 the highest            [number] [default: 9]
  --pack              If true, additional compression is performed by jsonpack.
                      Disabled by default because this can take a long time with
                      large files                      [string] [default: false]
```

### Revert

```bash
$typedoc-server revert --help

typedoc-server revert [source]

Reverts the search.json(.z7) to the original search.js

Options:
  --source            The source file path. E.g ./docs/assets/search.json.7z
                                                             [string] [required]
  --delete-source     If true the source file will be deleted after conversion
                                                        [string] [default: true]
  --no-delete-source  If true the source file will NOT be deleted after
                      conversion                                        [string]
  --target            The destination file path. E.g ./docs/assets/search.json
                                                             [string] [required]
  --decompress        This option should remain true if you have compressed the
                      json file                         [string] [default: true]
  --no-decompress     Disables the decompress option                    [string]
  --unpack            This value must be true if you have packed the json file
                      before                           [string] [default: false]
```

## Theme Integration

You have several ways to integrate the remote search into your theme.

### Replace automatically

This is the easiest way and the default. The search input is replaced with the custom element provided by this plugin. This makes the most sense if you use the default theme directly or a theme with the same search element.

### Replace manually
You insert the custom element provided by this plugin into the HTML code yourself.

For this you can set the `--noReplaceElement` option of the plugin.

```jsx
<tsd-search id="tsd-search" class="table-cell ready" base={context.relativeURL("./") + "/"}></tsd-search>
```

You can also override the child html of the custom element to make adjustments to the style for the search input.

```jsx
<tsd-search id="tsd-search" class="table-cell ready" base={context.relativeURL("./") + "/"} hostname="localhost" port="3024">
    <div class="field">
        <label for="tsd-search-field" class="tsd-widget search no-caption">
            Search
        </label>
        <input type="text" id="tsd-search-field" />
    </div>
    
    <ul class="results">
        <li class="state loading">Preparing remote search server...</li>
        <li class="state failure">The remote search server is not available</li>
    </ul>
    <a href="../index.html" class="title">My API</a>
</tsd-search>
```

### Build yourself

Of course you can also build your own search. If you want you can use the [search from this plugin](../../packages/typedoc-plugin-remote-search/src/client/search-component.ts) as template.

For this it is recommended to set the `--noScript` option of the plugin.

```ts
    export interface Result {
        classes: string;
        url: string;
        name: string;
    }

    export interface Options {
        /** Port of the search server */
        port: number;
        /** A domain name or IP address of the search server */
        hostname: string;
    }


    const options: Options = window.remoteSearchOptions;
    const url = new URL(window.location.toString());
    url.hostname = options.hostname;
    url.port = options.port.toString();
    url.pathname = `search/*${searchText}*`; // Perform a wildcard search

    const response = await fetch(url.toString());
    const results: Result[] = await response.json();
    ...
```

## Examples

An example contains this plugin itself, so checkout this repository and run inside this package

```bash
yarn run example
```