import type { RenderTemplate } from "typedoc";
import type { Reflection } from "typedoc";
import { JSX, Raw } from "../jsx/index.js";
import type { PageEvent } from "typedoc";
import { getDisplayName } from "../lib";
import type { GjsifyThemeRenderContext } from "../theme-render-context";

export const defaultLayout = (
  context: GjsifyThemeRenderContext,
  template: RenderTemplate<PageEvent<Reflection>>,
  props: PageEvent<Reflection>
) => (
  <html class="default" lang={context.options.getValue("htmlLang")}>
    <head>
      <meta charSet="utf-8" />
      {context.hook("head.begin")}
      <meta http-equiv="x-ua-compatible" content="IE=edge" />
      <title>
        {props.model.isProject()
          ? getDisplayName(props.model)
          : `${getDisplayName(props.model)} | ${getDisplayName(props.project)}`}
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
        href={context.relativeURL("assets/main.css", true)}
      />
      {context.options.getValue("customCss") && (
        <link
          rel="stylesheet"
          href={context.relativeURL("assets/custom.css", true)}
        />
      )}
      <script
        async
        src={context.relativeURL("assets/main.bundle.js", true)}
      ></script>
      <script
        async
        src={context.relativeURL("assets/search.js", true)}
        id="tsd-search-script"
      ></script>
      {context.hook("head.end")}
    </head>
    <body>
      {context.hook("body.begin")}
      <script>
        <Raw html='document.documentElement.dataset.theme = localStorage.getItem("tsd-theme") || "os"' />
      </script>
      {context.toolbar(props)}

      <div class="container container-main">
        <div class="col-content">
          {context.hook("content.begin")}
          {context.header(props)}
          {template(props)}
          {context.hook("content.end")}
        </div>
        <div class="col-sidebar">
          <div class="page-menu">
            {context.hook("pageSidebar.begin")}
            {context.pageSidebar(props)}
            {context.hook("pageSidebar.end")}
          </div>
          <div class="site-menu">
            {context.hook("sidebar.begin")}
            {context.sidebar(props)}
            {context.hook("sidebar.end")}
          </div>
        </div>
      </div>

      {context.footer()}

      <div class="overlay"></div>

      {context.analytics()}
      {context.hook("body.end")}
    </body>
  </html>
);
