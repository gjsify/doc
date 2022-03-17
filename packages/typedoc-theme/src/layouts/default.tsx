import type { Reflection, PageEvent } from "typedoc";
import type { GjsifyThemeContext } from "../context";
import * as JSX from "../jsx";

export const defaultLayout = (
  context: GjsifyThemeContext,
  props: PageEvent<Reflection>
) => (
  <html class="default">
    <head>
      <meta charSet="utf-8" />
      {context.hook("head.begin")}
      <meta http-equiv="x-ua-compatible" content="IE=edge" />
      <title>
        {props.model.name === props.project.name
          ? props.project.name
          : `${props.model.name} | ${props.project.name}`}
      </title>
      <meta
        name="description"
        content={"Documentation for " + props.project.name}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* The page supports both light and dark color schemes, with light being default */}
      <meta name="color-scheme" content="light dark" />

      {/* Meta Theme Color is also supported on Safari and Chrome */}
      <meta
        name="theme-color"
        content="#ffffff"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#eeeeee"
        media="(prefers-color-scheme: dark)"
      />

      <meta name="msapplication-TileColor" content="#4a86cf" />

      <link
        rel="shortcut icon"
        href={context.relativeURL("assets/favicon.ico")}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={context.relativeURL("assets/apple-touch-icon.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={context.relativeURL("assets/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={context.relativeURL("assets/favicon-16x16.png")}
      />
      <link
        rel="manifest"
        href={context.relativeURL("assets/site.webmanifest")}
      />
      <link
        rel="mask-icon"
        href={context.relativeURL("assets/safari-pinned-tab.svg")}
        color="#4a86cf"
      />

      <link
        rel="stylesheet"
        href={context.relativeURL("assets/highlight.css")}
      />
      <link rel="stylesheet" href={context.relativeURL("assets/main.css")} />
      {context.options.getValue("customCss") && (
        <link
          rel="stylesheet"
          href={context.relativeURL("assets/custom.css")}
        />
      )}
      {/* The search is too big to use client-side <script async src={context.relativeURL("assets/search.js")} id="search-script"></script> */}
      {context.hook("head.end")}
    </head>
    <body>
      {context.hook("body.begin")}
      <script>
        <JSX.Raw html='document.documentElement.classList.add(localStorage.getItem("bs5-theme") || "theme-os")' />
      </script>
      {context.sidebar(props)}
      {context.navbar(props)}

      <router-view id="main" listen-all-links="true">
        <div>
          <div class="container-main">
            {context.header(props)}
            <div class="container">
              <div class="row">
                <div class="col-12">{props.template(props)}</div>
              </div>
            </div>
          </div>

          {context.footer(props)}

          <template id="tsd-navigation-primary-template">
            {context.primaryNavigation(props)}
          </template>

          <template id="tsd-navigation-secondary-template">
            {context.secondaryNavigation(props)}
          </template>
        </div>

      </router-view>

      <script src={context.relativeURL("assets/vendors.bundle.js")}></script>
      <script src={context.relativeURL("assets/main.bundle.js")}></script>

      {context.hook("body.end")}
    </body>
  </html>
);
