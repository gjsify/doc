/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * cairo-1.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';

export namespace cairo {

enum Status {
    SUCCESS,
    NO_MEMORY,
    INVALID_RESTORE,
    INVALID_POP_GROUP,
    NO_CURRENT_POINT,
    INVALID_MATRIX,
    INVALID_STATUS,
    NULL_POINTER,
    INVALID_STRING,
    INVALID_PATH_DATA,
    READ_ERROR,
    WRITE_ERROR,
    SURFACE_FINISHED,
    SURFACE_TYPE_MISMATCH,
    PATTERN_TYPE_MISMATCH,
    INVALID_CONTENT,
    INVALID_FORMAT,
    INVALID_VISUAL,
    FILE_NOT_FOUND,
    INVALID_DASH,
    INVALID_DSC_COMMENT,
    INVALID_INDEX,
    CLIP_NOT_REPRESENTABLE,
    TEMP_FILE_ERROR,
    INVALID_STRIDE,
    FONT_TYPE_MISMATCH,
    USER_FONT_IMMUTABLE,
    USER_FONT_ERROR,
    NEGATIVE_COUNT,
    INVALID_CLUSTERS,
    INVALID_SLANT,
    INVALID_WEIGHT,
    INVALID_SIZE,
    USER_FONT_NOT_IMPLEMENTED,
    DEVICE_TYPE_MISMATCH,
    DEVICE_ERROR,
    INVALID_MESH_CONSTRUCTION,
    DEVICE_FINISHED,
    JBIG2_GLOBAL_MISSING,
}
enum Content {
    COLOR,
    ALPHA,
    COLOR_ALPHA,
}
enum Operator {
    CLEAR,
    SOURCE,
    OVER,
    IN,
    OUT,
    ATOP,
    DEST,
    DEST_OVER,
    DEST_IN,
    DEST_OUT,
    DEST_ATOP,
    XOR,
    ADD,
    SATURATE,
    MULTIPLY,
    SCREEN,
    OVERLAY,
    DARKEN,
    LIGHTEN,
    COLOR_DODGE,
    COLOR_BURN,
    HARD_LIGHT,
    SOFT_LIGHT,
    DIFFERENCE,
    EXCLUSION,
    HSL_HUE,
    HSL_SATURATION,
    HSL_COLOR,
    HSL_LUMINOSITY,
}
enum Antialias {
    DEFAULT,
    NONE,
    GRAY,
    SUBPIXEL,
    FAST,
    GOOD,
    BEST,
}
enum FillRule {
    WINDING,
    EVEN_ODD,
}
enum LineCap {
    BUTT,
    ROUND,
    SQUARE,
}
enum LineJoin {
    MITER,
    ROUND,
    BEVEL,
}
enum TextClusterFlags {
    BACKWARD,
}
enum FontSlant {
    NORMAL,
    ITALIC,
    OBLIQUE,
}
enum FontWeight {
    NORMAL,
    BOLD,
}
enum SubpixelOrder {
    DEFAULT,
    RGB,
    BGR,
    VRGB,
    VBGR,
}
enum HintStyle {
    DEFAULT,
    NONE,
    SLIGHT,
    MEDIUM,
    FULL,
}
enum HintMetrics {
    DEFAULT,
    OFF,
    ON,
}
enum FontType {
    TOY,
    FT,
    WIN32,
    QUARTZ,
    USER,
}
enum PathDataType {
    MOVE_TO,
    LINE_TO,
    CURVE_TO,
    CLOSE_PATH,
}
enum DeviceType {
    DRM,
    GL,
    SCRIPT,
    XCB,
    XLIB,
    XML,
    COGL,
    WIN32,
    INVALID,
}
enum SurfaceType {
    IMAGE,
    PDF,
    PS,
    XLIB,
    XCB,
    GLITZ,
    QUARTZ,
    WIN32,
    BEOS,
    DIRECTFB,
    SVG,
    OS2,
    WIN32_PRINTING,
    QUARTZ_IMAGE,
    SCRIPT,
    QT,
    RECORDING,
    VG,
    GL,
    DRM,
    TEE,
    XML,
    SKIA,
    SUBSURFACE,
    COGL,
}
enum Format {
    INVALID,
    ARGB32,
    RGB24,
    A8,
    A1,
    RGB16_565,
    RGB30,
}
enum PatternType {
    SOLID,
    SURFACE,
    LINEAR,
    RADIAL,
    MESH,
    RASTER_SOURCE,
}
enum Extend {
    NONE,
    REPEAT,
    REFLECT,
    PAD,
}
enum Filter {
    FAST,
    GOOD,
    BEST,
    NEAREST,
    BILINEAR,
    GAUSSIAN,
}
enum RegionOverlap {
    IN,
    OUT,
    PART,
}
function image_surface_create(): void
class Context {
    static name: string
}
class Device {
    static name: string
}
class Surface {
    static name: string
}
class Matrix {
    static name: string
}
class Pattern {
    static name: string
}
class Region {
    static name: string
}
class FontOptions {
    static name: string
}
class FontFace {
    static name: string
}
class ScaledFont {
    static name: string
}
class Path {
    static name: string
}
class Rectangle {
    /* Fields of cairo-1.0.cairo.Rectangle */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    static name: string
}
class RectangleInt {
    /* Fields of cairo-1.0.cairo.RectangleInt */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    static name: string
}
}
export default cairo;