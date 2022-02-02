/**
 * @see https://github.com/stonkpunk/my-npm-modules/blob/main/json-shrink/index.js
 */

import { pack, unpack } from "jsonpack";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lzma: any = require("lzma");

export function shrink(obj: any, outputAsString = false, doPack = true) {
  const theObj = doPack ? pack(obj) : obj;
  const input_str = doPack ? theObj : JSON.stringify(theObj);
  const buf = Buffer.from(lzma.compress(input_str, 9));
  return outputAsString ? buf.toString("base64") : buf;
}

export function unshrink(compressed_obj: Buffer | string, doUnPack = true) {
  compressed_obj = Buffer.isBuffer(compressed_obj)
    ? compressed_obj
    : Buffer.from(compressed_obj, "base64"); //convert to buffer if it starts off as a string
  const res = doUnPack
    ? unpack(lzma.decompress(compressed_obj))
    : JSON.parse(lzma.decompress(compressed_obj)); //json unpack apparently parses...
  return res;
}
