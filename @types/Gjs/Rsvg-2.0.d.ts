/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Rsvg-2.0
 */

import type * as Gjs from './Gjs';
import type cairo from './cairo-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace Rsvg {

enum Error {
    FAILED,
}
enum Unit {
    PERCENT,
    PX,
    EM,
    EX,
    IN,
    CM,
    MM,
    PT,
    PC,
}
enum HandleFlags {
    FLAGS_NONE,
    FLAG_UNLIMITED,
    FLAG_KEEP_IMAGE_DATA,
}
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const VERSION: string
function cleanup(): void
function error_quark(): GLib.Quark
function set_default_dpi(dpi: number): void
function set_default_dpi_x_y(dpi_x: number, dpi_y: number): void
interface Handle_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Rsvg-2.0.Rsvg.Handle */
    base_uri?: string
    dpi_x?: number
    dpi_y?: number
    flags?: HandleFlags
}
class Handle {
    /* Properties of Rsvg-2.0.Rsvg.Handle */
    base_uri: string
    readonly desc: string
    dpi_x: number
    dpi_y: number
    readonly em: number
    readonly ex: number
    readonly height: number
    readonly metadata: string
    readonly title: string
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Rsvg-2.0.Rsvg.Handle */
    close(): boolean
    get_base_uri(): string
    get_dimensions(): /* dimension_data */ DimensionData
    get_dimensions_sub(id?: string | null): [ /* returnType */ boolean, /* dimension_data */ DimensionData ]
    get_geometry_for_element(id?: string | null): [ /* returnType */ boolean, /* out_ink_rect */ Rectangle | null, /* out_logical_rect */ Rectangle | null ]
    get_geometry_for_layer(id: string | null, viewport: Rectangle): [ /* returnType */ boolean, /* out_ink_rect */ Rectangle | null, /* out_logical_rect */ Rectangle | null ]
    get_intrinsic_dimensions(): [ /* out_has_width */ boolean | null, /* out_width */ Length | null, /* out_has_height */ boolean | null, /* out_height */ Length | null, /* out_has_viewbox */ boolean | null, /* out_viewbox */ Rectangle | null ]
    get_intrinsic_size_in_pixels(): [ /* returnType */ boolean, /* out_width */ number | null, /* out_height */ number | null ]
    get_pixbuf(): GdkPixbuf.Pixbuf | null
    get_pixbuf_sub(id?: string | null): GdkPixbuf.Pixbuf | null
    get_position_sub(id?: string | null): [ /* returnType */ boolean, /* position_data */ PositionData ]
    has_sub(id: string): boolean
    internal_set_testing(testing: boolean): void
    read_stream_sync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    render_cairo(cr: cairo.Context): boolean
    render_cairo_sub(cr: cairo.Context, id?: string | null): boolean
    render_document(cr: cairo.Context, viewport: Rectangle): boolean
    render_element(cr: cairo.Context, id: string | null, element_viewport: Rectangle): boolean
    render_layer(cr: cairo.Context, id: string | null, viewport: Rectangle): boolean
    set_base_gfile(base_file: Gio.File): void
    set_base_uri(base_uri: string): void
    set_dpi(dpi: number): void
    set_dpi_x_y(dpi_x: number, dpi_y: number): void
    set_stylesheet(css: Uint8Array): boolean
    write(buf: Uint8Array): boolean
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-uri", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::desc", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desc", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dpi-x", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpi-x", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dpi-y", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpi-y", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::em", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::em", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ex", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ex", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::metadata", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Handle_ConstructProps)
    _init (config?: Handle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Handle
    static new_from_data(data: Uint8Array): Handle
    static new_from_file(filename: string): Handle
    static new_from_gfile_sync(file: Gio.File, flags: HandleFlags, cancellable?: Gio.Cancellable | null): Handle
    static new_from_stream_sync(input_stream: Gio.InputStream, base_file: Gio.File | null, flags: HandleFlags, cancellable?: Gio.Cancellable | null): Handle
    static new_with_flags(flags: HandleFlags): Handle
    static $gtype: GObject.Type
}
class DimensionData {
    /* Fields of Rsvg-2.0.Rsvg.DimensionData */
    readonly width: number
    readonly height: number
    readonly em: number
    readonly ex: number
    static name: string
}
abstract class HandleClass {
    /* Fields of Rsvg-2.0.Rsvg.HandleClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
class Length {
    /* Fields of Rsvg-2.0.Rsvg.Length */
    readonly length: number
    readonly unit: Unit
    static name: string
}
class PositionData {
    /* Fields of Rsvg-2.0.Rsvg.PositionData */
    readonly x: number
    readonly y: number
    static name: string
}
class Rectangle {
    /* Fields of Rsvg-2.0.Rsvg.Rectangle */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    static name: string
}
}
export default Rsvg;