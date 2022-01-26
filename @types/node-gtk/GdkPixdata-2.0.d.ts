/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GdkPixdata-2.0
 */

import type GdkPixbuf from './GdkPixbuf-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GdkPixdata {

enum PixdataDumpType {
    PIXDATA_STREAM,
    PIXDATA_STRUCT,
    MACROS,
    GTYPES,
    CTYPES,
    STATIC,
    CONST,
    RLE_DECODER,
}
enum PixdataType {
    COLOR_TYPE_RGB,
    COLOR_TYPE_RGBA,
    COLOR_TYPE_MASK,
    SAMPLE_WIDTH_8,
    SAMPLE_WIDTH_MASK,
    ENCODING_RAW,
    ENCODING_RLE,
    ENCODING_MASK,
}
const PIXBUF_MAGIC_NUMBER: number
const PIXDATA_HEADER_LENGTH: number
function pixbufFromPixdata(pixdata: Pixdata, copyPixels: boolean): GdkPixbuf.Pixbuf
class Pixdata {
    /* Fields of GdkPixdata-2.0.GdkPixdata.Pixdata */
    readonly magic: number
    readonly length: number
    readonly pixdataType: number
    readonly rowstride: number
    readonly width: number
    readonly height: number
    readonly pixelData: Uint8Array
    /* Methods of GdkPixdata-2.0.GdkPixdata.Pixdata */
    deserialize(stream: Uint8Array): boolean
    serialize(): Uint8Array
    toCsource(name: string, dumpType: PixdataDumpType): GLib.String
    static name: string
}
}
export default GdkPixdata;