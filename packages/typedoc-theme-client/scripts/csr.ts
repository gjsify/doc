import { ready } from "@ribajs/utils";
import { Riba, coreModule } from "@ribajs/core";
import { routerModule, FadeTransition } from "@ribajs/router";
import { bs5Module, ThemeService } from "@ribajs/bs5";
import { typedocModule, SearchOptions } from "@ribajs/typedoc";
import { gjsifyTypedocModule } from "./module";

declare global {
  interface Window {
    remoteSearchOptions?: Partial<SearchOptions>;
  }
}

const bootstrap = () => {
  const riba = new Riba();
  const model: any = {};
  const theme = ThemeService.getSingleton();

  riba.configure({
    prefix: ["rv", "csr-rv"],
    blockUnknownCustomElements: false,
    templateDelimiters: ["{", "}"],
  });

  // Register modules
  riba.module.regist(coreModule.init());
  riba.module.regist(
    routerModule.init({
      defaultTransition: new FadeTransition(),
    })
  );
  riba.module.regist(bs5Module.init());
  riba.module.regist(typedocModule.init());
  riba.module.regist(gjsifyTypedocModule.init());

  const view = riba.bind(document.body, model);

  view.registComponents();

  riba.lifecycle.events.on("ComponentLifecycle:error", (error: Error) => {
    console.error(error);
  });

  // Also add theme class to body for TypeDoc Theme backward compatibility
  theme.onChange((data) => {
    document.body.classList.remove("os", "dark", "light");
    if (data.newValue.bySystem) {
      document.body.classList.add("os");
    }
    if (data.newValue.byUser) {
      if (data.newValue.isDark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.add("light");
      }
    }
  });
};

ready(() => {
  bootstrap();
});
