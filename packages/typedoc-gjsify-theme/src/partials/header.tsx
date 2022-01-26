import { PageEvent, DefaultThemeRenderContext, Reflection, JSX } from "typedoc";

export const header = (context: DefaultThemeRenderContext, props: PageEvent<Reflection>): JSX.Element => (
    <header>
        <h1>Hello World!</h1>
    </header>
)