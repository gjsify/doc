import { ready } from "@ribajs/utils";
import { Riba, coreModule } from "@ribajs/core";
import { routerModule, FadeTransition } from "@ribajs/router";
import { bs5Module, ThemeService } from "@ribajs/bs5";
import { fuseModule } from "@ribajs/fuse";
import { typedocModule } from "@ribajs/typedoc";
import { gjsifyTypedocModule } from "./module";

declare global {
  interface Window {
    model: any;
  }
}

const bootstrap = () => {
  const riba = new Riba();
  window.model = {};

  riba.configure({
    prefix: ["rv", "csr-rv"],
    blockUnknownCustomElements: false,
    templateDelimiters: ["{", "}"],
  });

  // Register modules
  riba.module.register(coreModule.init());
  riba.module.register(
    routerModule.init({
      defaultTransition: new FadeTransition(),
    })
  );
  riba.module.register(bs5Module.init());
  riba.module.register(fuseModule.init());
  riba.module.register(typedocModule.init());
  riba.module.register(gjsifyTypedocModule.init());

  const theme = ThemeService.getSingleton();
  const view = riba.bind(document.body, window.model);

  view.registerComponents();

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
