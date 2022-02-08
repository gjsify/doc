/**
 * @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/utils/fs.ts
 */

import { existsSync, mkdirSync } from "fs";
import { promises as fsp } from "fs";
import { dirname, join } from "path";

export function mkdir(dir: string) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

/**
 * Copy a file or directory recursively.
 */
export async function copy(src: string, dest: string): Promise<void> {
  const stat = await fsp.stat(src);

  if (stat.isDirectory()) {
    const contained = await fsp.readdir(src);
    await Promise.all(
      contained.map((file) => copy(join(src, file), join(dest, file)))
    );
  } else if (stat.isFile()) {
    await fsp.mkdir(dirname(dest), { recursive: true });
    await fsp.copyFile(src, dest);
  } else {
    // Do nothing for FIFO, special devices.
  }
}
