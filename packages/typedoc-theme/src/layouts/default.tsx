import type { Reflection, PageEvent } from "typedoc";
import type { GjsifyThemeContext } from "../context";
import * as JSX from "../jsx/jsx";

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
      <link rel="manifest" href={context.relativeURL("site.webmanifest")} />
      <link
        rel="mask-icon"
        href={context.relativeURL("safari-pinned-tab.svg")}
        color="#4a86cf"
      />
      <meta name="msapplication-TileColor" content="#4a86cf" />
      <meta name="theme-color" content="#ffffff" />

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
        <JSX.Raw html='document.body.classList.add(localStorage.getItem("tsd-theme") || "os")' />
      </script>
      {context.header(props)}

      <router-view id="main" listen-all-links="true">
        <div class="container container-main">
          <div class="row">
            <div class="col-8 col-content">{props.template(props)}</div>
            <div class="col-4 col-menu menu-sticky-wrap menu-highlight">
              {context.navigation(props)}
            </div>
          </div>
        </div>
      </router-view>

      {context.footer(props)}

      <div class="overlay"></div>
      <script src={context.relativeURL("assets/vendors.bundle.js")}></script>
      <script src={context.relativeURL("assets/main.bundle.js")}></script>

      {context.hook("body.end")}
    </body>
  </html>
);
