# typedoc-plugin-remote-search

This plugin is especially useful when the API documentation is very large. This can lead to the `search.js` becoming several hundred MB in size and thus unusable.

## Install

```bash
npm install typedoc-plugin-remote-search
```

## Usage

### Plugin

Usage is the same as documented at [TypeDoc](https://typedoc.org/guides/installation/#command-line-interface):

```bash
typedoc --plugin typedoc-plugin-remote-search
```

**Arguments**

```bash
$typedoc --plugin typedoc-plugin-remote-search --help

Options:
 --hostname                  [Remote Search] A domain name or IP address of the search server
 --noReplaceElement          [Remote Search] Do not replace the search element with a custom element for out of the box working remote search
 --noScript                  [Remote Search] Do not insert client-side javascript into the theme (this way the search will not work without manual adjustments)
 --port                      [Remote Search] Port of remote search server
```

### Server
This plugin has a build in web server to run the search on the server side:

```bash
typedoc-server --doc-dir ./doc/my-docs --port 3000
```

**Arguments**

```bash
$typedoc-server --help

typedoc-server [args]

Options:
      --version   Show version number                                  [boolean]
  -d, --doc-dir   The directory in which your rendered typedoc documentation is
                  located                                    [string] [required]
      --port      Port of the search server             [number] [default: 3024]
      --hostname  A domain name or IP address of the search server
                                                 [string] [default: "localhost"]
      --noServe   Set this value to true if the generated documentation should
                  not be served                        [string] [default: false]
      --help      Show help  
```

To see how the search works on the web server you can open the following URL with `any search term` in your browser: [localhost:3024/search/any search term](http://localhost:3024/search/any%20search%20term).


## Theme Integration

You have several ways to integrate the remote search into your theme.

### Replace automatically

This is the easiest way and the default. The search input is replaced with the custom element provided by this plugin. This makes the most sense if you use the default theme directly or a theme with the same search element.

### Replace manually
You insert the custom element provided by this plugin into the HTML code yourself.

For this you can set the `--noReplaceElement` option of the plugin.

```jsx
<tsd-search id="tsd-search" class="table-cell ready" base={context.relativeURL("./") + "/"} hostname="localhost" port="3024"></tsd-search>
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

```js
    const options = window.remoteSearchOptions;
    const url = new URL(window.location.toString());
    url.hostname = options.hostname;
    url.port = options.port.toString();
    url.pathname = `search/*${searchText}*`; // Perform a wildcard search

    const response = await fetch(url.toString());
    const results = await response.json();
    ...
```