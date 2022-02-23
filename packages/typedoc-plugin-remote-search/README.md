# Typedoc Remote Search Plugin

A plugin for TypeDoc that moves the API search to the server.

## Why?

This is useful when the API documentation is very large. This can lead to the `search.js` becoming very large and becomes unusable on the client side.

## How?

This package contains a CLI with which a webserver can be started. This webserver loads the `search.json` or `search.7z` which contains the prepared data for [lunr](https://lunrjs.com/). The default theme of Typedoc uses lunr for the client-side full-text search, but lunr can also be used in node.js. The build-in webserver does just that and runs very similar code with lunr for the search and wraps it in a REST API endpoint. The plugin now only needs to customize the client-side search field by using the API endpoint instead of running the search client-side. With this we have moved the execution of the search to the webserver.

## Install

```bash
npm install @gjsify/typedoc-plugin-remote-search
```

## Usage

Usage is the same as documented at [TypeDoc](https://typedoc.org/guides/installation/#command-line-interface):

```bash
typedoc --plugin @gjsify/typedoc-plugin-remote-search
```

Or via the config file:

```js
const typeDocOptions = {
  plugin: [
    require.resolve("@gjsify/typedoc-plugin-remote-search"),
  ],
};
```

This will create your documentation as usual. Now you start the web server:

```bash
typedoc-server serve ./doc
```

### Plugin Arguments

To see what arguments there are for this plugin you can run:

```bash
$typedoc --plugin @gjsify/typedoc-plugin-remote-search --help

Options:
 --compressLevel             [Remote Search] The compression level 0-9, 0 is no compression, 1 the fastest and 9 the highest
 --hostname                  [Remote Search] A domain name or IP address of the search server
 --noCompress                [Remote Search] Disables the compression of the search.json
 --noReplaceElement          [Remote Search] Do not replace the search element with a custom element for out of the box working remote search
 --noScript                  [Remote Search] Do not insert client-side javascript into the theme (this way the search will not work without manual adjustments)
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
```

## REST API

### GET `search/:query`

This endpoint performs the search with lunr, you have the same features as lunr like wildcards. For example, the following will match all documents with words beginning or ending with `foo`:

```ts
fetch(`${baseUrl}/search/*foo*`);
```

But lunr has even more cool features, for more see the [search guide of lunr](https://lunrjs.com/guides/searching.html).


## Theme Integration

You have several ways to integrate the remote search into your theme.

### Replace automatically

This is the easiest way and the default. The search input is replaced with the custom element provided by this plugin. This makes the most sense if you use the default theme or a theme with a compatible search field.

### Replace manually

You can insert the custom element provided by this plugin into the HTML code yourself.

For this you can set the `--noReplaceElement` option of the plugin to prevent the automatic replace. Now you can change the HTML of your theme to use the custom element:

```jsx
<tsd-search id="tsd-search" class="table-cell ready" base={context.relativeURL("./") + "/"}></tsd-search>
```

You can also override the child html of the custom element to make adjustments to the the search:

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

Of course you can also build your own search. If you want you can use the [search from this plugin](../../packages/typedoc-plugin-remote-search/src/client/search-component.ts) as a template.

If you implement your own search it is recommended to set the `--noScript` option of the plugin so that the javascript from this plugin is not included.

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

The example generates the typedoc documentation from and using this plugin itself, to execute the example checkout this repository and run:

```bash
cd packages/typedoc-plugin-remote-search
yarn run example
```