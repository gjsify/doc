import * as fs from "fs";
import { dirname } from "path";

import { normalizePath } from "./path";

/**
 * Write a file to disc.
 *
 * If the containing directory does not exist it will be created.
 *
 * @param fileName  The name of the file that should be written.
 * @param data  The contents of the file.
 */
export function writeFileSync(fileName: string, data: string) {
  fs.mkdirSync(dirname(normalizePath(fileName)), { recursive: true });
  fs.writeFileSync(normalizePath(fileName), data);
}
