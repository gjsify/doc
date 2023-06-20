/**
 * @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/utils/fs.ts
 */

import { existsSync, mkdirSync, statSync, readdirSync, copyFileSync } from "fs";
import { promises as fsp } from "fs";
import { dirname, join, basename } from "path";

import { normalizePath } from "./path";

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

export function copySync(
  src: string,
  dest: string,
  excludeNames: string[] = []
): void {
  const srcBaseName = basename(src);
  if (excludeNames.includes(srcBaseName)) {
    return;
  }
  const stat = statSync(src);

  if (stat.isDirectory()) {
    const contained = readdirSync(src).filter(
      (file) => !excludeNames.includes(file)
    );
    contained.map((file) => copySync(join(src, file), join(dest, file)));
  } else if (stat.isFile()) {
    mkdirSync(dirname(dest), { recursive: true });
    copyFileSync(src, dest);
  } else {
    // Do nothing for FIFO, special devices.
  }
}

/**
 * Write a file to disc.
 *
 * If the containing directory does not exist it will be created.
 *
 * @param fileName  The name of the file that should be written.
 * @param data  The contents of the file.
 */
export function writeFileSync(fileName: string, data: string) {
  mkdirSync(dirname(normalizePath(fileName)), { recursive: true });
  writeFileSync(normalizePath(fileName), data);
}
