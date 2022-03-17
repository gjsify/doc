export function bind<F, L extends any[], R,>(
  fn: (f: F, ...a: L) => R,
  first: F
) {
  return (...r: L) => fn(first, ...r);
}
