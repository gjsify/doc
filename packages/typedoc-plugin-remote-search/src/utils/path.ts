/**
 * Normalize the given path.
 *
 * @param path  The path that should be normalized.
 * @returns The normalized path.
 */
export function normalizePath(path: string) {
  return path.replace(/\\/g, "/");
}
