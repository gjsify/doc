export interface IComponentOptions {
  el: HTMLElement;
}

/**
 * TypeDoc component class.
 * @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/default/assets/typedoc/Component.ts
 */
export class Component {
  protected el: HTMLElement;

  constructor(options: IComponentOptions) {
    this.el = options.el;
  }
}
