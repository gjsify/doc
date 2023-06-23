import { ready } from "@ribajs/utils";
import { Riba, coreModule } from "@ribajs/core";
// import { EventDispatcher } from "@ribajs/events";
import { routerModule, FadeTransition } from "@ribajs/router";
import { bs5Module, ThemeService } from "@ribajs/bs5";
import { fuseModule } from "@ribajs/fuse";
import { gjsifyTypedocModule } from "./module";

// Import original typedoc bootstrap
import { bootstrap as bootstrapOriginal } from "./original/bootstrap.js";

declare global {
  interface Window {
    model: any;
  }
}

const bootstrap = () => {
  console.debug("bootstrap...");
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
  riba.module.register(gjsifyTypedocModule.init());

  const theme = ThemeService.getSingleton();
  const view = riba.bind(document.body, window.model);

  view.registerComponents();

  riba.lifecycle.events.on("ComponentLifecycle:error", (error: Error) => {
    console.error(error);
  });

  // EventDispatcher.getInstance("main").on("newPageReady", () => {
  //   bootstrapOriginal();
  // });
  bootstrapOriginal();

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
