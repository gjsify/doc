/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GdkPixbuf-2.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GdkPixbuf {

enum Colorspace {
    RGB,
}
enum InterpType {
    NEAREST,
    TILES,
    BILINEAR,
    HYPER,
}
enum PixbufAlphaMode {
    BILEVEL,
    FULL,
}
enum PixbufError {
    CORRUPT_IMAGE,
    INSUFFICIENT_MEMORY,
    BAD_OPTION,
    UNKNOWN_TYPE,
    UNSUPPORTED_OPERATION,
    FAILED,
    INCOMPLETE_ANIMATION,
}
enum PixbufRotation {
    NONE,
    COUNTERCLOCKWISE,
    UPSIDEDOWN,
    CLOCKWISE,
}
enum PixbufFormatFlags {
    WRITABLE,
    SCALABLE,
    THREADSAFE,
}
const PIXBUF_MAJOR: number
const PIXBUF_MICRO: number
const PIXBUF_MINOR: number
const PIXBUF_VERSION: string
function pixbuf_error_quark(): GLib.Quark
interface PixbufDestroyNotify {
    (pixels: Uint8Array): void
}
interface PixbufModuleFillInfoFunc {
    (info: PixbufFormat): void
}
interface PixbufModuleFillVtableFunc {
    (module: PixbufModule): void
}
interface PixbufModulePreparedFunc {
    (pixbuf: Pixbuf, anim: PixbufAnimation): void
}
interface PixbufModuleSizeFunc {
    (width: number, height: number): void
}
interface PixbufModuleUpdatedFunc {
    (pixbuf: Pixbuf, x: number, y: number, width: number, height: number): void
}
interface PixbufSaveFunc {
    (buf: Uint8Array): boolean
}
interface Pixbuf_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GdkPixbuf-2.0.GdkPixbuf.Pixbuf */
    bits_per_sample?: number
    colorspace?: Colorspace
    has_alpha?: boolean
    height?: number
    n_channels?: number
    pixel_bytes?: GLib.Bytes
    pixels?: object
    rowstride?: number
    width?: number
}
class Pixbuf {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.Pixbuf */
    add_alpha(substitute_color: boolean, r: number, g: number, b: number): Pixbuf
    apply_embedded_orientation(): Pixbuf | null
    composite(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number): void
    composite_color(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number, check_x: number, check_y: number, check_size: number, color1: number, color2: number): void
    composite_color_simple(dest_width: number, dest_height: number, interp_type: InterpType, overall_alpha: number, check_size: number, color1: number, color2: number): Pixbuf | null
    copy(): Pixbuf | null
    copy_area(src_x: number, src_y: number, width: number, height: number, dest_pixbuf: Pixbuf, dest_x: number, dest_y: number): void
    copy_options(dest_pixbuf: Pixbuf): boolean
    fill(pixel: number): void
    flip(horizontal: boolean): Pixbuf | null
    get_bits_per_sample(): number
    get_byte_length(): number
    get_colorspace(): Colorspace
    get_has_alpha(): boolean
    get_height(): number
    get_n_channels(): number
    get_option(key: string): string | null
    get_options(): GLib.HashTable
    get_pixels(): Uint8Array
    get_rowstride(): number
    get_width(): number
    new_subpixbuf(src_x: number, src_y: number, width: number, height: number): Pixbuf
    read_pixel_bytes(): GLib.Bytes
    read_pixels(): number
    remove_option(key: string): boolean
    rotate_simple(angle: PixbufRotation): Pixbuf | null
    saturate_and_pixelate(dest: Pixbuf, saturation: number, pixelate: boolean): void
    save_to_bufferv(type: string, option_keys?: string[] | null, option_values?: string[] | null): [ /* returnType */ boolean, /* buffer */ Uint8Array ]
    save_to_callbackv(save_func: PixbufSaveFunc, type: string, option_keys?: string[] | null, option_values?: string[] | null): boolean
    save_to_streamv(stream: Gio.OutputStream, type: string, option_keys?: string[] | null, option_values?: string[] | null, cancellable?: Gio.Cancellable | null): boolean
    save_to_streamv_async(stream: Gio.OutputStream, type: string, option_keys?: string[] | null, option_values?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    savev(filename: string, type: string, option_keys?: string[] | null, option_values?: string[] | null): boolean
    scale(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType): void
    scale_simple(dest_width: number, dest_height: number, interp_type: InterpType): Pixbuf | null
    set_option(key: string, value: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Icon */
    equal(icon2?: Gio.Icon | null): boolean
    serialize(): GLib.Variant | null
    to_string(): string | null
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of GdkPixbuf-2.0.GdkPixbuf.Pixbuf */
    vfunc_equal(icon2?: Gio.Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant | null
    vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    vfunc_load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pixbuf_ConstructProps)
    _init (config?: Pixbuf_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number): Pixbuf
    static new_from_bytes(data: GLib.Bytes, colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number): Pixbuf
    static new_from_data(data: Uint8Array, colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number, destroy_fn?: PixbufDestroyNotify | null): Pixbuf
    static new_from_file(filename: string): Pixbuf
    static new_from_file_at_scale(filename: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf
    static new_from_file_at_size(filename: string, width: number, height: number): Pixbuf
    static new_from_inline(data: Uint8Array, copy_pixels: boolean): Pixbuf
    static new_from_resource(resource_path: string): Pixbuf
    static new_from_resource_at_scale(resource_path: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf
    static new_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): Pixbuf
    static new_from_stream_at_scale(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable?: Gio.Cancellable | null): Pixbuf
    static new_from_stream_finish(async_result: Gio.AsyncResult): Pixbuf
    static new_from_xpm_data(data: string[]): Pixbuf
    static calculate_rowstride(colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number): number
    static get_file_info(filename: string): [ /* returnType */ PixbufFormat | null, /* width */ number | null, /* height */ number | null ]
    static get_file_info_async(filename: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static get_file_info_finish(async_result: Gio.AsyncResult): [ /* returnType */ PixbufFormat | null, /* width */ number, /* height */ number ]
    static get_formats(): PixbufFormat[]
    static init_modules(path: string): boolean
    static new_from_stream_async(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_from_stream_at_scale_async(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static save_to_stream_finish(async_result: Gio.AsyncResult): boolean
    static deserialize(value: GLib.Variant): Gio.Icon | null
    static hash(icon: object): number
    static new_for_string(str: string): Gio.Icon
    static $gtype: GObject.Type
}
interface PixbufAnimation_ConstructProps extends GObject.Object_ConstructProps {
}
class PixbufAnimation {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    get_height(): number
    get_iter(start_time?: GLib.TimeVal | null): PixbufAnimationIter
    get_static_image(): Pixbuf
    get_width(): number
    is_static_image(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    vfunc_get_iter(start_time?: GLib.TimeVal | null): PixbufAnimationIter
    vfunc_get_size(width: number, height: number): void
    vfunc_get_static_image(): Pixbuf
    vfunc_is_static_image(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufAnimation_ConstructProps)
    _init (config?: PixbufAnimation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_file(filename: string): PixbufAnimation
    static new_from_resource(resource_path: string): PixbufAnimation
    static new_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): PixbufAnimation
    static new_from_stream_finish(async_result: Gio.AsyncResult): PixbufAnimation
    static new_from_stream_async(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
interface PixbufAnimationIter_ConstructProps extends GObject.Object_ConstructProps {
}
class PixbufAnimationIter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    advance(current_time?: GLib.TimeVal | null): boolean
    get_delay_time(): number
    get_pixbuf(): Pixbuf
    on_currently_loading_frame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    vfunc_advance(current_time?: GLib.TimeVal | null): boolean
    vfunc_get_delay_time(): number
    vfunc_get_pixbuf(): Pixbuf
    vfunc_on_currently_loading_frame(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufAnimationIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufAnimationIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufAnimationIter_ConstructProps)
    _init (config?: PixbufAnimationIter_ConstructProps): void
    static $gtype: GObject.Type
}
interface PixbufLoader_ConstructProps extends GObject.Object_ConstructProps {
}
class PixbufLoader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufLoader */
    close(): boolean
    get_animation(): PixbufAnimation | null
    get_format(): PixbufFormat | null
    get_pixbuf(): Pixbuf | null
    set_size(width: number, height: number): void
    write(buf: Uint8Array): boolean
    write_bytes(buffer: GLib.Bytes): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GdkPixbuf-2.0.GdkPixbuf.PixbufLoader */
    vfunc_area_prepared(): void
    vfunc_area_updated(x: number, y: number, width: number, height: number): void
    vfunc_closed(): void
    vfunc_size_prepared(width: number, height: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GdkPixbuf-2.0.GdkPixbuf.PixbufLoader */
    connect(sigName: "area-prepared", callback: (($obj: PixbufLoader) => void)): number
    connect_after(sigName: "area-prepared", callback: (($obj: PixbufLoader) => void)): number
    emit(sigName: "area-prepared"): void
    connect(sigName: "area-updated", callback: (($obj: PixbufLoader, x: number, y: number, width: number, height: number) => void)): number
    connect_after(sigName: "area-updated", callback: (($obj: PixbufLoader, x: number, y: number, width: number, height: number) => void)): number
    emit(sigName: "area-updated", x: number, y: number, width: number, height: number): void
    connect(sigName: "closed", callback: (($obj: PixbufLoader) => void)): number
    connect_after(sigName: "closed", callback: (($obj: PixbufLoader) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "size-prepared", callback: (($obj: PixbufLoader, width: number, height: number) => void)): number
    connect_after(sigName: "size-prepared", callback: (($obj: PixbufLoader, width: number, height: number) => void)): number
    emit(sigName: "size-prepared", width: number, height: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufLoader_ConstructProps)
    _init (config?: PixbufLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PixbufLoader
    static new_with_mime_type(mime_type: string): PixbufLoader
    static new_with_type(image_type: string): PixbufLoader
    static $gtype: GObject.Type
}
interface PixbufNonAnim_ConstructProps extends PixbufAnimation_ConstructProps {
}
class PixbufNonAnim {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    get_height(): number
    get_iter(start_time?: GLib.TimeVal | null): PixbufAnimationIter
    get_static_image(): Pixbuf
    get_width(): number
    is_static_image(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    vfunc_get_iter(start_time?: GLib.TimeVal | null): PixbufAnimationIter
    vfunc_get_size(width: number, height: number): void
    vfunc_get_static_image(): Pixbuf
    vfunc_is_static_image(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufNonAnim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufNonAnim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufNonAnim_ConstructProps)
    _init (config?: PixbufNonAnim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(pixbuf: Pixbuf): PixbufNonAnim
    static $gtype: GObject.Type
}
interface PixbufSimpleAnim_ConstructProps extends PixbufAnimation_ConstructProps {
    /* Constructor properties of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    loop?: boolean
}
class PixbufSimpleAnim {
    /* Properties of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    loop: boolean
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    add_frame(pixbuf: Pixbuf): void
    get_loop(): boolean
    set_loop(loop: boolean): void
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    get_height(): number
    get_iter(start_time?: GLib.TimeVal | null): PixbufAnimationIter
    get_static_image(): Pixbuf
    get_width(): number
    is_static_image(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    vfunc_get_iter(start_time?: GLib.TimeVal | null): PixbufAnimationIter
    vfunc_get_size(width: number, height: number): void
    vfunc_get_static_image(): Pixbuf
    vfunc_is_static_image(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::loop", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufSimpleAnim_ConstructProps)
    _init (config?: PixbufSimpleAnim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number, rate: number): PixbufSimpleAnim
    static $gtype: GObject.Type
}
interface PixbufSimpleAnimIter_ConstructProps extends PixbufAnimationIter_ConstructProps {
}
class PixbufSimpleAnimIter {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    advance(current_time?: GLib.TimeVal | null): boolean
    get_delay_time(): number
    get_pixbuf(): Pixbuf
    on_currently_loading_frame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    vfunc_advance(current_time?: GLib.TimeVal | null): boolean
    vfunc_get_delay_time(): number
    vfunc_get_pixbuf(): Pixbuf
    vfunc_on_currently_loading_frame(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PixbufSimpleAnimIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufSimpleAnimIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufSimpleAnimIter_ConstructProps)
    _init (config?: PixbufSimpleAnimIter_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class PixbufAnimationClass {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationClass */
    readonly parent_class: GObject.ObjectClass
    readonly is_static_image: (animation: PixbufAnimation) => boolean
    readonly get_static_image: (animation: PixbufAnimation) => Pixbuf
    readonly get_size: (animation: PixbufAnimation, width: number, height: number) => void
    readonly get_iter: (animation: PixbufAnimation, start_time?: GLib.TimeVal | null) => PixbufAnimationIter
    static name: string
}
abstract class PixbufAnimationIterClass {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIterClass */
    readonly parent_class: GObject.ObjectClass
    readonly get_delay_time: (iter: PixbufAnimationIter) => number
    readonly get_pixbuf: (iter: PixbufAnimationIter) => Pixbuf
    readonly on_currently_loading_frame: (iter: PixbufAnimationIter) => boolean
    readonly advance: (iter: PixbufAnimationIter, current_time?: GLib.TimeVal | null) => boolean
    static name: string
}
class PixbufFormat {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufFormat */
    readonly name: string
    readonly signature: PixbufModulePattern
    readonly domain: string
    readonly description: string
    readonly mime_types: string[]
    readonly extensions: string[]
    readonly flags: number
    readonly disabled: boolean
    readonly license: string
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufFormat */
    copy(): PixbufFormat
    free(): void
    get_description(): string
    get_extensions(): string[]
    get_license(): string
    get_mime_types(): string[]
    get_name(): string
    is_disabled(): boolean
    is_save_option_supported(option_key: string): boolean
    is_scalable(): boolean
    is_writable(): boolean
    set_disabled(disabled: boolean): void
    static name: string
}
abstract class PixbufLoaderClass {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufLoaderClass */
    readonly parent_class: GObject.ObjectClass
    readonly size_prepared: (loader: PixbufLoader, width: number, height: number) => void
    readonly area_prepared: (loader: PixbufLoader) => void
    readonly area_updated: (loader: PixbufLoader, x: number, y: number, width: number, height: number) => void
    readonly closed: (loader: PixbufLoader) => void
    static name: string
}
class PixbufModule {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufModule */
    readonly module_name: string
    readonly module_path: string
    readonly module: GModule.Module
    readonly info: PixbufFormat
    readonly stop_load: (context: object) => boolean
    readonly load_increment: (context: object, buf: number, size: number) => boolean
    readonly save: (f: object, pixbuf: Pixbuf, param_keys: string, param_values: string) => boolean
    readonly is_save_option_supported: (option_key: string) => boolean
    static name: string
}
class PixbufModulePattern {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufModulePattern */
    readonly prefix: string
    readonly mask: string
    readonly relevance: number
    static name: string
}
abstract class PixbufSimpleAnimClass {
    static name: string
}
}
export default GdkPixbuf;