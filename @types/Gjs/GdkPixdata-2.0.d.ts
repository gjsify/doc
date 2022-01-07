/**
 * GdkPixdata-2.0
 */

import type * as Gjs from './Gjs';
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
export const PIXBUF_MAGIC_NUMBER: number
export const PIXDATA_HEADER_LENGTH: number
function pixbuf_from_pixdata(pixdata: Pixdata, copy_pixels: boolean): GdkPixbuf.Pixbuf
class Pixdata {
    /* Fields of GdkPixdata-2.0.GdkPixdata.Pixdata */
    magic: number
    length: number
    pixdata_type: number
    rowstride: number
    width: number
    height: number
    pixel_data: Uint8Array[]
    /* Methods of GdkPixdata-2.0.GdkPixdata.Pixdata */
    deserialize(stream: Uint8Array[]): boolean
    serialize(): Uint8Array[]
    to_csource(name: string, dump_type: PixdataDumpType): GLib.String
    static name: string
}
}
export default GdkPixdata;