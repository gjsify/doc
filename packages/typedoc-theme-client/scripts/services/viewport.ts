import { EventTarget } from "./event-target";
import { throttle } from "@ribajs/utils";

/**
 * A global service that monitors the window size and scroll position.
 * @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/assets/typedoc/services/Viewport.ts
 */
export class Viewport extends EventTarget {
  public static readonly instance = new Viewport();

  /**
   * The current scroll position.
   */
  scrollTop = 0;

  /**
   * The previous scrollTop.
   */
  lastY = 0;

  /**
   * The width of the window.
   */
  width = 0;

  /**
   * The height of the window.
   */
  height = 0;

  /**
   * The toolbar (contains the search input).
   */
  toolbar?: HTMLDivElement;

  /**
   * Boolean indicating whether the toolbar is shown.
   */
  showToolbar = true;

  /**
   * The sticky side nav that contains members of the current page.
   * Might not present on the home page if the project uses `entryPointStrategy` set to `Expand`.
   */
  secondaryNav?: HTMLElement;

  /**
   * Create new Viewport instance.
   */
  constructor() {
    super();

    this.onScroll = throttle(() => this.onScroll, 10);
    this.onResize = throttle(() => this.onResize, 10);

    this.toolbar = document.querySelector<HTMLDivElement>(".tsd-page-toolbar") || undefined;
    this.secondaryNav = 
      document.querySelector<HTMLElement>(".tsd-navigation.secondary") || undefined;

    window.addEventListener(
      "scroll",
      this.onScroll
    );

    window.addEventListener(
      "resize",
      this.onResize
    );

    this.onResize();
    this.onScroll();
  }

  /**
   * Trigger a resize event.
   */
  triggerResize() {
    const event = new CustomEvent("resize", {
      detail: {
        width: this.width,
        height: this.height,
      }
    });

    this.dispatchEvent(event);
  }

  /**
   * Triggered when the size of the window has changed.
   */
  onResize() {
    this.width = window.innerWidth || 0;
    this.height = window.innerHeight || 0;

    const event = new CustomEvent("resize", {
      detail: {
        width: this.width,
        height: this.height,
      },
    });

    this.dispatchEvent(event);
  }

  /**
   * Triggered when the user scrolled the viewport.
   */
  onScroll() {
    this.scrollTop = window.scrollY || 0;

    const event = new CustomEvent("scroll", {
      detail: {
        scrollTop: this.scrollTop,
      },
    });

    this.dispatchEvent(event);
  }
}
