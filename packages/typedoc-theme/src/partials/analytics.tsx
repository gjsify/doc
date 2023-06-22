import type { GjsifyThemeRenderContext } from "../theme-render-context";
import { JSX } from "../jsx/index.js";

export function analytics(context: GjsifyThemeRenderContext) {
  const gaID = context.options.getValue("gaID");
  if (!gaID) return;

  const script = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaID}');
`.trim();

  return (
    <>
      <script
        async
        src={"https://www.googletagmanager.com/gtag/js?id=" + gaID}
      ></script>
      <script>
        <JSX.Raw html={script} />
      </script>
    </>
  );
}
