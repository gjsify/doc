/**
 * @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/utils/array.ts
 */

export function partition<T,>(
  iter: Iterable<T>,
  predicate: (item: T) => boolean
): [T[], T[]] {
  const left: T[] = [];
  const right: T[] = [];

  for (const item of iter) {
    if (predicate(item)) {
      left.push(item);
    } else {
      right.push(item);
    }
  }

  return [left, right];
}
