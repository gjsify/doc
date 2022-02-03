import { pack, unpack } from "jsonpack";
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const lzma: any = require("lzma");
import lzma, { Preset } from "lzma-native";

import { readFileSync, existsSync, unlinkSync, writeFileSync } from "fs";
import { SearchState, SearchData } from "./types";
import { Index } from "lunr";
import { Logger } from "typedoc";
import { basename } from "path/posix";

export class Converter {
  logger: Logger;
  constructor(logger?: Logger) {
    if (logger) {
      this.logger = logger;
    } else {
      this.logger = new Logger();
    }
  }

  async load<T>(filepath: string, decompress: boolean, unpack: boolean) {
    if (!existsSync(filepath)) {
      throw new Error(`File not found "${filepath}"`);
    }
    const jsonBuf = readFileSync(filepath);
    let data: T;
    if (decompress) {
      data = await this.unshrink<T>(jsonBuf, unpack);
    } else {
      data = JSON.parse(jsonBuf.toString());
    }
    return data;
  }

  async loadSearch(filepath: string, decompress: boolean, unpack: boolean) {
    const data = await this.load<SearchData>(filepath, decompress, unpack);
    const state: SearchState = {
      data,
      index: Index.load(data.index),
    };
    return state;
  }

  /**
   * Instead of a search.js, we are using a search.json to load them more easily with node.js.
   * For this we need to convert the search.js to a search.json.
   * @param source E.g. ./docs/assets/search.js
   * @param target E.g. ./docs/assets/search.json.7z
   * @param deleteSource if true the source file will be deleted after conversion
   * @param compress Compression level 0-9, 0 is no compression, 1 the fastest and 9 the highest
   * @param pack If true, additional compression is performed by jsonpack
   * @returns
   */
  async convertSearch(
    source: string,
    target: string,
    deleteSource: boolean,
    compress: number,
    pack: boolean
  ) {
    const removeStart = 'window.searchData = JSON.parse("';
    const removeEnd = '");';

    if (!existsSync(source)) {
      this.logger.error(`[RemoteSearch] File not found "${source}"!`);
      return;
    }

    this.logger.info("[RemoteSearch] Load original search.js file...");
    let searchData = readFileSync(source, "utf8");

    this.logger.info(
      `[RemoteSearch] Convert original search.js file to ${basename(target)}...`
    );

    const logInterval = setInterval(() => {
      this.logger.info(
        `[RemoteSearch] Convert original search.js file to ${basename(
          target
        )}...`
      );
    }, 5000);

    searchData = searchData
      .substring(removeStart.length, searchData.length - removeEnd.length)
      .replace(/\\"/g, '"');

    await this.write(searchData, target, compress, pack);

    clearInterval(logInterval);

    if (deleteSource) {
      this.logger.info(`[RemoteSearch] Delete ${basename(source)} file...`);
      unlinkSync(source);
    }
  }

  async revertSearch(
    source: string,
    target: string,
    deleteSource: boolean,
    decompress: boolean,
    unpack: boolean
  ) {
    const data = await this.load<SearchData>(source, decompress, unpack);
    const jsSource = `window.searchData = JSON.parse("${JSON.stringify(
      data
    )}");`;
    writeFileSync(target, jsSource);
    if (deleteSource) {
      this.logger.info(`[RemoteSearch] Delete ${basename(source)} file...`);
      unlinkSync(source);
    }
  }

  /**
   * Compress and write the resulting data to the filesystem
   * @param data The data to be stored compressed (or uncompressed)
   * @param target Path of the destination file
   * @param compress Compression level 0-9, 0 is no compression, 1 the fastest and 9 the highest
   * @param pack If true, additional compression is performed by jsonpack
   */
  async write(data: any, target: string, compress: number, pack: boolean) {
    if (compress > 0) {
      data = await this.shrink(
        JSON.parse(data.toString()),
        false,
        pack,
        compress
      );
    }
    writeFileSync(target, data);
  }

  /**
   * Shrink objects / json with LZMA (7-zip) compression + optional jsonpack
   * @see https://github.com/stonkpunk/my-npm-modules/blob/main/json-shrink/index.js
   * @param obj Your object you want to compress
   * @param outputAsString If true return value is of type `string`, otherwise of type `Buffer`
   * @param doPack If true the json will be also compressed using jsonpack, see https://github.com/rgcl/jsonpack
   * @param compressMode lzma compression mode, can be 1-9 (1 is fast and pretty good; 9 is slower and probably much better).
   * @returns the string or buffer of the compressed json
   */
  _shrink(
    obj: any,
    outputAsString = false,
    doPack = true,
    compressLevel = 1,
    cb: (result: Buffer | string) => void
  ) {
    if (doPack) this.logger.verbose("[shrink] Pack object...");
    const theObj = doPack ? pack(obj) : obj;
    if (!doPack) this.logger.verbose("[shrink] Stringify object...");
    const input_str: string = doPack ? theObj : JSON.stringify(theObj);
    this.logger.verbose("[shrink] Compress object...");
    lzma.compress(
      input_str,
      {
        preset: compressLevel as Preset,
      },
      (buf) => {
        this.logger.verbose("[shrink] Done");
        const output = outputAsString ? buf.toString("base64") : buf;
        cb(output);
      }
    );
  }

  shrink(obj: any, outputAsString = false, doPack = true, compressLevel = 1) {
    return new Promise((resolve, reject) => {
      try {
        this._shrink(obj, outputAsString, doPack, compressLevel, resolve);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Unshrink objects / json with LZMA (7-zip) compression + optional jsonpack unpack
   * @see https://github.com/stonkpunk/my-npm-modules/blob/main/json-shrink/index.js
   * @param compressed_obj The compressed object (using `shrink`)
   * @param doUnPack This value must be true if you have packed the object before, see https://github.com/rgcl/jsonpack
   * @returns The uncompressed string or buffer
   */
  _unshrink<T = any>(
    compressed_obj: Buffer | string,
    doUnPack = true,
    cb: (result: T) => void
  ) {
    compressed_obj = Buffer.isBuffer(compressed_obj)
      ? compressed_obj
      : Buffer.from(compressed_obj, "base64"); //convert to buffer if it starts off as a string

    lzma.decompress(compressed_obj, {}, (compBuf: Buffer) => {
      const res = doUnPack
        ? unpack<T>(compBuf.toString())
        : JSON.parse(compBuf.toString()); //json unpack apparently parses..
      cb(res as T);
    });
  }

  unshrink<T = any>(compressed_obj: Buffer | string, doUnPack = true) {
    return new Promise<T>((resolve, reject) => {
      try {
        this._unshrink(compressed_obj, doUnPack, resolve);
      } catch (error) {
        reject(error);
      }
    });
  }
}
