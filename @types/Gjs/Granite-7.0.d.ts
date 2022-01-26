/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Granite-7.0
 */

import type * as Gjs from './Gjs';
import type Pango from './Pango-1.0';
import type cairo from './cairo-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gtk from './Gtk-4.0';
import type Gsk from './Gsk-4.0';
import type Graphene from './Graphene-1.0';
import type Gdk from './Gdk-4.0';
import type PangoCairo from './PangoCairo-1.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Gee from './Gee-0.8';

export namespace Granite {

enum ServicesLogLevel {
    DEBUG,
    INFO,
    NOTIFY,
    WARN,
    ERROR,
    FATAL,
}
enum ServicesContractorError {
    SERVICE_NOT_AVAILABLE,
}
enum WidgetsDynamicNotebookTabBarBehavior {
    ALWAYS,
    SINGLE,
    NEVER,
}
enum SettingsPageStatusType {
    ERROR,
    OFFLINE,
    SUCCESS,
    WARNING,
    NONE,
}
enum SettingsColorScheme {
    NO_PREFERENCE,
    DARK,
    LIGHT,
}
const STYLE_CLASS_ACCENT: string
const STYLE_CLASS_BACK_BUTTON: string
const STYLE_CLASS_BADGE: string
const STYLE_CLASS_CARD: string
const STYLE_CLASS_CHECKERBOARD: string
const STYLE_CLASS_COLOR_BUTTON: string
const STYLE_CLASS_DEFAULT_DECORATION: string
const STYLE_CLASS_DESTRUCTIVE_ACTION: string
const STYLE_CLASS_DIALOG_CONTENT_AREA: string
const STYLE_CLASS_H1_LABEL: string
const STYLE_CLASS_H2_LABEL: string
const STYLE_CLASS_H3_LABEL: string
const STYLE_CLASS_H4_LABEL: string
const STYLE_CLASS_KEYCAP: string
const STYLE_CLASS_MODE_SWITCH: string
const STYLE_CLASS_OVERLAY_BAR: string
const STYLE_CLASS_ROUNDED: string
const STYLE_CLASS_SEEKBAR: string
const STYLE_CLASS_SMALL_LABEL: string
const STYLE_CLASS_SOURCE_LIST: string
const STYLE_CLASS_TERMINAL: string
const STYLE_CLASS_TITLE_LABEL: string
const STYLE_CLASS_WARMTH: string
const STYLE_CLASS_TEMPERATURE: string
const STYLE_CLASS_LINKED: string
const STYLE_CLASS_MENU: string
const STYLE_CLASS_MENUITEM: string
const STYLE_CLASS_DIM_LABEL: string
const STYLE_CLASS_ERROR: string
const STYLE_CLASS_FLAT: string
const STYLE_CLASS_MESSAGE_DIALOG: string
const STYLE_CLASS_SUGGESTED_ACTION: string
const STYLE_CLASS_VIEW: string
const STYLE_CLASS_WARNING: string
const TRANSITION_DURATION_CLOSE: number
const TRANSITION_DURATION_IN_PLACE: number
const TRANSITION_DURATION_OPEN: number
const TOOLTIP_SECONDARY_TEXT_MARKUP: string
function date_time_get_default_time_format(is_12h: boolean, with_second: boolean): string
function date_time_get_relative_datetime(date_time: GLib.DateTime): string
function date_time_is_same_day(day1: GLib.DateTime, day2: GLib.DateTime): boolean
function date_time_get_default_date_format(with_weekday: boolean, with_day: boolean, with_year: boolean): string
function date_time_seconds_to_time(seconds: number): string
function services_application_set_badge(count: number, _callback_?: Gio.AsyncReadyCallback | null): void
function services_application_set_badge_finish(_res_: Gio.AsyncResult): boolean
function services_application_set_badge_visible(visible: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
function services_application_set_badge_visible_finish(_res_: Gio.AsyncResult): boolean
function services_application_set_progress(progress: number, _callback_?: Gio.AsyncReadyCallback | null): void
function services_application_set_progress_finish(_res_: Gio.AsyncResult): boolean
function services_application_set_progress_visible(visible: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
function services_application_set_progress_visible_finish(_res_: Gio.AsyncResult): boolean
function widgets_utils_set_color_primary(window: Gtk.Widget, color: Gdk.RGBA, priority: number): Gtk.CssProvider | null
function accel_to_string(accel?: string | null): string
function markup_accel_tooltip(accels: string[] | null, description?: string | null): string
function contrasting_foreground_color(bg_color: Gdk.RGBA): /* result */ Gdk.RGBA
interface WidgetsDroppedDelegate {
    (): void
}
interface ServicesContract_ConstructProps extends GObject.Object_ConstructProps {
}
class ServicesContract {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.ServicesContract */
    get_display_name(): string
    get_description(): string
    get_icon(): Gio.Icon
    execute_with_file(file: Gio.File): void
    execute_with_files(files: Gio.File[]): void
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
    /* Virtual methods of Granite-7.0.Granite.ServicesContract */
    vfunc_get_display_name(): string
    vfunc_get_description(): string
    vfunc_get_icon(): Gio.Icon
    vfunc_execute_with_file(file: Gio.File): void
    vfunc_execute_with_files(files: Gio.File[]): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServicesContract, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServicesContract, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServicesContract_ConstructProps)
    _init (config?: ServicesContract_ConstructProps): void
    static $gtype: GObject.Type
}
interface ServicesSettingsSerializable_ConstructProps extends GObject.Object_ConstructProps {
}
class ServicesSettingsSerializable {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.ServicesSettingsSerializable */
    settings_serialize(): string
    settings_deserialize(s: string): void
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
    /* Virtual methods of Granite-7.0.Granite.ServicesSettingsSerializable */
    vfunc_settings_serialize(): string
    vfunc_settings_deserialize(s: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServicesSettingsSerializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServicesSettingsSerializable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServicesSettingsSerializable_ConstructProps)
    _init (config?: ServicesSettingsSerializable_ConstructProps): void
    static $gtype: GObject.Type
}
interface DrawingBufferSurface_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.DrawingBufferSurface */
    surface?: cairo.Surface
    width?: number
    height?: number
}
class DrawingBufferSurface {
    /* Properties of Granite-7.0.Granite.DrawingBufferSurface */
    surface: cairo.Surface
    width: number
    height: number
    readonly context: cairo.Context
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.DrawingBufferSurface */
    get_surface(): cairo.Surface
    get_width(): number
    get_height(): number
    get_context(): cairo.Context
    clear(): void
    load_to_pixbuf(): GdkPixbuf.Pixbuf
    average_color(): DrawingColor
    fast_blur(radius: number, process_count: number): void
    exponential_blur(radius: number): void
    gaussian_blur(radius: number): void
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
    connect(sigName: "notify", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::surface", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::context", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DrawingBufferSurface_ConstructProps)
    _init (config?: DrawingBufferSurface_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number): DrawingBufferSurface
    static with_surface(width: number, height: number, model: cairo.Surface): DrawingBufferSurface
    static with_buffer_surface(width: number, height: number, model: DrawingBufferSurface): DrawingBufferSurface
    static $gtype: GObject.Type
}
interface DrawingColor_ConstructProps extends GObject.Object_ConstructProps {
}
class DrawingColor {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.DrawingColor */
    set_hue(hue: number): DrawingColor
    set_sat(sat: number): DrawingColor
    set_val(val: number): DrawingColor
    set_alpha(alpha: number): DrawingColor
    get_hue(): number
    get_sat(): number
    get_val(): number
    add_hue(val: number): DrawingColor
    set_min_sat(sat: number): DrawingColor
    set_min_value(val: number): DrawingColor
    set_max_sat(sat: number): DrawingColor
    set_max_val(val: number): DrawingColor
    multiply_sat(amount: number): DrawingColor
    brighten_val(amount: number): DrawingColor
    darken_val(amount: number): DrawingColor
    darken_by_sat(amount: number): DrawingColor
    to_string(): string
    to_int(): number
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
    connect(sigName: "notify", callback: (($obj: DrawingColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DrawingColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DrawingColor_ConstructProps)
    _init (config?: DrawingColor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(R: number, G: number, B: number, A: number): DrawingColor
    static from_rgba(color: Gdk.RGBA): DrawingColor
    static from_string(color: string): DrawingColor
    static from_int(color: number): DrawingColor
    static alpha_from_int(color: number): number
    static red_from_int(color: number): number
    static green_from_int(color: number): number
    static blue_from_int(color: number): number
    static $gtype: GObject.Type
}
interface DrawingUtilities_ConstructProps extends GObject.Object_ConstructProps {
}
class DrawingUtilities {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: DrawingUtilities, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DrawingUtilities, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DrawingUtilities_ConstructProps)
    _init (config?: DrawingUtilities_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DrawingUtilities
    static cairo_rounded_rectangle(cr: cairo.Context, x: number, y: number, width: number, height: number, radius: number): void
    static average_color(source: GdkPixbuf.Pixbuf): DrawingColor
    static $gtype: GObject.Type
}
interface ServicesContractorProxy_ConstructProps extends GObject.Object_ConstructProps {
}
class ServicesContractorProxy {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
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
    /* Signals of Granite-7.0.Granite.ServicesContractorProxy */
    connect(sigName: "contracts-changed", callback: (($obj: ServicesContractorProxy) => void)): number
    connect_after(sigName: "contracts-changed", callback: (($obj: ServicesContractorProxy) => void)): number
    emit(sigName: "contracts-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServicesContractorProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServicesContractorProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServicesContractorProxy_ConstructProps)
    _init (config?: ServicesContractorProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_instance(): any
    static get_all_contracts(): Gee.List
    static get_contracts_by_mime(mime_type: string): Gee.List
    static get_contracts_by_mimelist(mime_types: string[]): Gee.List
    static get_contracts_for_file(file: Gio.File): Gee.List
    static get_contracts_for_files(files: Gio.File[]): Gee.List
    static $gtype: GObject.Type
}
interface ServicesLogger_ConstructProps extends GObject.Object_ConstructProps {
}
class ServicesLogger {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: ServicesLogger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServicesLogger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServicesLogger_ConstructProps)
    _init (config?: ServicesLogger_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ServicesLogger
    static get_DisplayLevel(): any
    static set_DisplayLevel(value: any): void
    static initialize(app_name: string): void
    static notification(msg: string): void
    static $gtype: GObject.Type
}
interface ServicesSystem_ConstructProps extends GObject.Object_ConstructProps {
}
class ServicesSystem {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: ServicesSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServicesSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServicesSystem_ConstructProps)
    _init (config?: ServicesSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ServicesSystem
    static history_is_enabled(): boolean
    static $gtype: GObject.Type
}
interface WidgetsTab_ConstructProps extends Gtk.Box_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.WidgetsTab */
    label?: string
    tooltip?: string
    pinned?: boolean
    pinnable?: boolean
    restore_data?: string
    close_tab_label?: AccelLabel
    duplicate_tab_label?: AccelLabel
    new_window_label?: AccelLabel
    page?: Gtk.Widget
    icon?: Gio.Icon
    working?: boolean
    ellipsize_mode?: Pango.EllipsizeMode
    menu?: Gtk.PopoverMenu
}
class WidgetsTab {
    /* Properties of Granite-7.0.Granite.WidgetsTab */
    label: string
    tooltip: string
    pinned: boolean
    pinnable: boolean
    restore_data: string
    page: Gtk.Widget
    icon: Gio.Icon
    working: boolean
    ellipsize_mode: Pango.EllipsizeMode
    menu: Gtk.PopoverMenu
    /* Properties of Gtk-4.0.Gtk.Box */
    baseline_position: Gtk.BaselinePosition
    homogeneous: boolean
    spacing: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Box */
    readonly parent_instance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.WidgetsTab */
    get_label(): string
    set_label(value: string): void
    set_tooltip(value: string): void
    get_pinned(): boolean
    set_pinned(value: boolean): void
    get_pinnable(): boolean
    set_pinnable(value: boolean): void
    get_restore_data(): string
    set_restore_data(value: string): void
    get_close_tab_label(): AccelLabel | null
    get_duplicate_tab_label(): AccelLabel | null
    get_new_window_label(): AccelLabel | null
    get_page(): Gtk.Widget
    set_page(value: Gtk.Widget): void
    get_icon(): Gio.Icon | null
    set_icon(value?: Gio.Icon | null): void
    get_working(): boolean
    set_working(value: boolean): void
    get_ellipsize_mode(): Pango.EllipsizeMode
    set_ellipsize_mode(value: Pango.EllipsizeMode): void
    get_menu(): Gtk.PopoverMenu
    set_menu(value: Gtk.PopoverMenu): void
    close(): void
    /* Methods of Gtk-4.0.Gtk.Box */
    append(child: Gtk.Widget): void
    get_baseline_position(): Gtk.BaselinePosition
    get_homogeneous(): boolean
    get_spacing(): number
    insert_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    reorder_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    set_baseline_position(position: Gtk.BaselinePosition): void
    set_homogeneous(homogeneous: boolean): void
    set_spacing(spacing: number): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: WidgetsTab) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WidgetsTab) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: WidgetsTab, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WidgetsTab, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: WidgetsTab) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WidgetsTab) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: WidgetsTab, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WidgetsTab, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: WidgetsTab) => void)): number
    connect_after(sigName: "map", callback: (($obj: WidgetsTab) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: WidgetsTab, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WidgetsTab, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: WidgetsTab, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WidgetsTab, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: WidgetsTab, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: WidgetsTab, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: WidgetsTab) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WidgetsTab) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: WidgetsTab) => void)): number
    connect_after(sigName: "show", callback: (($obj: WidgetsTab) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: WidgetsTab, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WidgetsTab, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: WidgetsTab) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WidgetsTab) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: WidgetsTab) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WidgetsTab) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pinned", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pinned", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pinnable", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pinnable", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restore-data", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restore-data", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::working", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::working", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ellipsize-mode", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize-mode", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::menu", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WidgetsTab_ConstructProps)
    _init (config?: WidgetsTab_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(label?: string | null, icon?: Gio.Icon | null, page?: Gtk.Widget | null): WidgetsTab
    /* Function overloads */
    static new(orientation: Gtk.Orientation, spacing: number): WidgetsTab
    static with_accellabels(label?: string | null, icon?: Gio.Icon | null, page?: Gtk.Widget | null, _close_tab_label?: AccelLabel | null, _duplicate_tab_label?: AccelLabel | null, _new_window_label?: AccelLabel | null): WidgetsTab
    static $gtype: GObject.Type
}
interface WidgetsDynamicNotebook_ConstructProps extends Gtk.Box_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.WidgetsDynamicNotebook */
    show_tabs?: boolean
    tabs_closable?: boolean
    allow_drag?: boolean
    allow_new_window?: boolean
    allow_duplication?: boolean
    allow_restoring?: boolean
    max_restorable_tabs?: number
    add_button_visible?: boolean
    allow_pinning?: boolean
    force_left?: boolean
    add_button_tooltip?: string
    new_tab_label?: AccelLabel
    restore_tab_label?: AccelLabel
    current?: WidgetsTab
    group_name?: string
    tab_bar_behavior?: WidgetsDynamicNotebookTabBarBehavior
    menu?: Gtk.PopoverMenu
}
class WidgetsDynamicNotebook {
    /* Properties of Granite-7.0.Granite.WidgetsDynamicNotebook */
    readonly n_tabs: number
    show_tabs: boolean
    tabs_closable: boolean
    allow_drag: boolean
    allow_new_window: boolean
    allow_duplication: boolean
    allow_restoring: boolean
    max_restorable_tabs: number
    add_button_visible: boolean
    allow_pinning: boolean
    force_left: boolean
    add_button_tooltip: string
    current: WidgetsTab
    readonly tabs: WidgetsTab[]
    group_name: string
    tab_bar_behavior: WidgetsDynamicNotebookTabBarBehavior
    menu: Gtk.PopoverMenu
    /* Properties of Gtk-4.0.Gtk.Box */
    baseline_position: Gtk.BaselinePosition
    homogeneous: boolean
    spacing: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Box */
    readonly parent_instance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.WidgetsDynamicNotebook */
    get_n_tabs(): number
    get_show_tabs(): boolean
    set_show_tabs(value: boolean): void
    get_tabs_closable(): boolean
    set_tabs_closable(value: boolean): void
    get_allow_drag(): boolean
    set_allow_drag(value: boolean): void
    get_allow_new_window(): boolean
    set_allow_new_window(value: boolean): void
    get_allow_duplication(): boolean
    set_allow_duplication(value: boolean): void
    get_allow_restoring(): boolean
    set_allow_restoring(value: boolean): void
    get_max_restorable_tabs(): number
    set_max_restorable_tabs(value: number): void
    get_add_button_visible(): boolean
    set_add_button_visible(value: boolean): void
    get_allow_pinning(): boolean
    set_allow_pinning(value: boolean): void
    get_force_left(): boolean
    set_force_left(value: boolean): void
    get_add_button_tooltip(): string
    set_add_button_tooltip(value: string): void
    get_new_tab_label(): AccelLabel
    get_restore_tab_label(): AccelLabel
    get_current(): WidgetsTab
    set_current(value: WidgetsTab): void
    get_tabs(): WidgetsTab[]
    get_group_name(): string
    set_group_name(value: string): void
    get_tab_bar_behavior(): WidgetsDynamicNotebookTabBarBehavior
    set_tab_bar_behavior(value: WidgetsDynamicNotebookTabBarBehavior): void
    get_menu(): Gtk.PopoverMenu
    remove_tab(tab: WidgetsTab): void
    next_page(): void
    previous_page(): void
    get_children(): Gtk.Widget[]
    get_tab_position(tab: WidgetsTab): number
    set_tab_position(tab: WidgetsTab, position: number): void
    get_tab_by_index(index: number): WidgetsTab | null
    get_tab_by_widget(widget: Gtk.Widget): WidgetsTab | null
    get_nth_page(index: number): Gtk.Widget
    insert_tab(tab: WidgetsTab, index: number): number
    /* Methods of Gtk-4.0.Gtk.Box */
    append(child: Gtk.Widget): void
    get_baseline_position(): Gtk.BaselinePosition
    get_homogeneous(): boolean
    get_spacing(): number
    insert_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    reorder_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    set_baseline_position(position: Gtk.BaselinePosition): void
    set_homogeneous(homogeneous: boolean): void
    set_spacing(spacing: number): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Granite-7.0.Granite.WidgetsDynamicNotebook */
    connect(sigName: "tab-added", callback: (($obj: WidgetsDynamicNotebook, tab: WidgetsTab) => void)): number
    connect_after(sigName: "tab-added", callback: (($obj: WidgetsDynamicNotebook, tab: WidgetsTab) => void)): number
    emit(sigName: "tab-added", tab: WidgetsTab): void
    connect(sigName: "tab-removed", callback: (($obj: WidgetsDynamicNotebook, tab: WidgetsTab) => void)): number
    connect_after(sigName: "tab-removed", callback: (($obj: WidgetsDynamicNotebook, tab: WidgetsTab) => void)): number
    emit(sigName: "tab-removed", tab: WidgetsTab): void
    connect(sigName: "tab-switched", callback: (($obj: WidgetsDynamicNotebook, old_tab: WidgetsTab | null, new_tab: WidgetsTab) => void)): number
    connect_after(sigName: "tab-switched", callback: (($obj: WidgetsDynamicNotebook, old_tab: WidgetsTab | null, new_tab: WidgetsTab) => void)): number
    emit(sigName: "tab-switched", old_tab: WidgetsTab | null, new_tab: WidgetsTab): void
    connect(sigName: "tab-reordered", callback: (($obj: WidgetsDynamicNotebook, tab: WidgetsTab, new_pos: number) => void)): number
    connect_after(sigName: "tab-reordered", callback: (($obj: WidgetsDynamicNotebook, tab: WidgetsTab, new_pos: number) => void)): number
    emit(sigName: "tab-reordered", tab: WidgetsTab, new_pos: number): void
    connect(sigName: "tab-moved", callback: (($obj: WidgetsDynamicNotebook, tab: WidgetsTab, x: number, y: number) => void)): number
    connect_after(sigName: "tab-moved", callback: (($obj: WidgetsDynamicNotebook, tab: WidgetsTab, x: number, y: number) => void)): number
    emit(sigName: "tab-moved", tab: WidgetsTab, x: number, y: number): void
    connect(sigName: "tab-duplicated", callback: (($obj: WidgetsDynamicNotebook, duplicated_tab: WidgetsTab) => void)): number
    connect_after(sigName: "tab-duplicated", callback: (($obj: WidgetsDynamicNotebook, duplicated_tab: WidgetsTab) => void)): number
    emit(sigName: "tab-duplicated", duplicated_tab: WidgetsTab): void
    connect(sigName: "tab-restored", callback: (($obj: WidgetsDynamicNotebook, label: string, data: string, icon?: Gio.Icon | null) => void)): number
    connect_after(sigName: "tab-restored", callback: (($obj: WidgetsDynamicNotebook, label: string, data: string, icon?: Gio.Icon | null) => void)): number
    emit(sigName: "tab-restored", label: string, data: string, icon?: Gio.Icon | null): void
    connect(sigName: "new-tab-requested", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    connect_after(sigName: "new-tab-requested", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    emit(sigName: "new-tab-requested"): void
    connect(sigName: "close-tab-requested", callback: (($obj: WidgetsDynamicNotebook, tab: WidgetsTab) => boolean)): number
    connect_after(sigName: "close-tab-requested", callback: (($obj: WidgetsDynamicNotebook, tab: WidgetsTab) => boolean)): number
    emit(sigName: "close-tab-requested", tab: WidgetsTab): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: WidgetsDynamicNotebook, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WidgetsDynamicNotebook, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: WidgetsDynamicNotebook, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WidgetsDynamicNotebook, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    connect_after(sigName: "map", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: WidgetsDynamicNotebook, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WidgetsDynamicNotebook, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: WidgetsDynamicNotebook, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WidgetsDynamicNotebook, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: WidgetsDynamicNotebook, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: WidgetsDynamicNotebook, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    connect_after(sigName: "show", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: WidgetsDynamicNotebook, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WidgetsDynamicNotebook, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WidgetsDynamicNotebook) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::n-tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tabs-closable", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs-closable", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-drag", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-drag", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-new-window", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-new-window", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-duplication", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-duplication", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-restoring", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-restoring", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-restorable-tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-restorable-tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::add-button-visible", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-button-visible", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-pinning", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-pinning", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::force-left", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force-left", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::add-button-tooltip", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-button-tooltip", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::group-name", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tab-bar-behavior", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-bar-behavior", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::menu", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WidgetsDynamicNotebook_ConstructProps)
    _init (config?: WidgetsDynamicNotebook_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WidgetsDynamicNotebook
    /* Function overloads */
    static new(orientation: Gtk.Orientation, spacing: number): WidgetsDynamicNotebook
    static with_accellabels(new_tab_label: AccelLabel, restore_tab_label: AccelLabel): WidgetsDynamicNotebook
    static $gtype: GObject.Type
}
interface WidgetsOverlayBar_ConstructProps extends Gtk.Box_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.WidgetsOverlayBar */
    overlay?: Gtk.Overlay
    label?: string
    active?: boolean
}
class WidgetsOverlayBar {
    /* Properties of Granite-7.0.Granite.WidgetsOverlayBar */
    label: string
    active: boolean
    /* Properties of Gtk-4.0.Gtk.Box */
    baseline_position: Gtk.BaselinePosition
    homogeneous: boolean
    spacing: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Box */
    readonly parent_instance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.WidgetsOverlayBar */
    get_overlay(): Gtk.Overlay | null
    get_label(): string
    set_label(value: string): void
    get_active(): boolean
    set_active(value: boolean): void
    /* Methods of Gtk-4.0.Gtk.Box */
    append(child: Gtk.Widget): void
    get_baseline_position(): Gtk.BaselinePosition
    get_homogeneous(): boolean
    get_spacing(): number
    insert_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    reorder_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    set_baseline_position(position: Gtk.BaselinePosition): void
    set_homogeneous(homogeneous: boolean): void
    set_spacing(spacing: number): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: WidgetsOverlayBar) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WidgetsOverlayBar) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: WidgetsOverlayBar, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WidgetsOverlayBar, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: WidgetsOverlayBar) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WidgetsOverlayBar) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: WidgetsOverlayBar, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WidgetsOverlayBar, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: WidgetsOverlayBar) => void)): number
    connect_after(sigName: "map", callback: (($obj: WidgetsOverlayBar) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: WidgetsOverlayBar, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WidgetsOverlayBar, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: WidgetsOverlayBar, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WidgetsOverlayBar, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: WidgetsOverlayBar, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: WidgetsOverlayBar, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: WidgetsOverlayBar) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WidgetsOverlayBar) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: WidgetsOverlayBar) => void)): number
    connect_after(sigName: "show", callback: (($obj: WidgetsOverlayBar) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: WidgetsOverlayBar, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WidgetsOverlayBar, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: WidgetsOverlayBar) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WidgetsOverlayBar) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: WidgetsOverlayBar) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WidgetsOverlayBar) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WidgetsOverlayBar_ConstructProps)
    _init (config?: WidgetsOverlayBar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(overlay?: Gtk.Overlay | null): WidgetsOverlayBar
    /* Function overloads */
    static new(orientation: Gtk.Orientation, spacing: number): WidgetsOverlayBar
    static $gtype: GObject.Type
}
interface WidgetsToast_ConstructProps extends Gtk.Box_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.WidgetsToast */
    title?: string
}
class WidgetsToast {
    /* Properties of Granite-7.0.Granite.WidgetsToast */
    title: string
    /* Properties of Gtk-4.0.Gtk.Box */
    baseline_position: Gtk.BaselinePosition
    homogeneous: boolean
    spacing: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Box */
    readonly parent_instance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.WidgetsToast */
    get_title(): string
    set_title(value: string): void
    set_default_action(label?: string | null): void
    send_notification(): void
    /* Methods of Gtk-4.0.Gtk.Box */
    append(child: Gtk.Widget): void
    get_baseline_position(): Gtk.BaselinePosition
    get_homogeneous(): boolean
    get_spacing(): number
    insert_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    reorder_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    set_baseline_position(position: Gtk.BaselinePosition): void
    set_homogeneous(homogeneous: boolean): void
    set_spacing(spacing: number): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Granite-7.0.Granite.WidgetsToast */
    connect(sigName: "closed", callback: (($obj: WidgetsToast) => void)): number
    connect_after(sigName: "closed", callback: (($obj: WidgetsToast) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "default-action", callback: (($obj: WidgetsToast) => void)): number
    connect_after(sigName: "default-action", callback: (($obj: WidgetsToast) => void)): number
    emit(sigName: "default-action"): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: WidgetsToast) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WidgetsToast) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: WidgetsToast, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WidgetsToast, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: WidgetsToast) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WidgetsToast) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: WidgetsToast, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WidgetsToast, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: WidgetsToast) => void)): number
    connect_after(sigName: "map", callback: (($obj: WidgetsToast) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: WidgetsToast, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WidgetsToast, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: WidgetsToast, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WidgetsToast, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: WidgetsToast, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: WidgetsToast, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: WidgetsToast) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WidgetsToast) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: WidgetsToast) => void)): number
    connect_after(sigName: "show", callback: (($obj: WidgetsToast) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: WidgetsToast, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WidgetsToast, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: WidgetsToast) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WidgetsToast) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: WidgetsToast) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WidgetsToast) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::title", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WidgetsToast_ConstructProps)
    _init (config?: WidgetsToast_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string): WidgetsToast
    /* Function overloads */
    static new(orientation: Gtk.Orientation, spacing: number): WidgetsToast
    static $gtype: GObject.Type
}
interface SettingsPage_ConstructProps extends Gtk.Box_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.SettingsPage */
    status_type?: SettingsPageStatusType
    display_widget?: Gtk.Widget
    header?: string
    status?: string
    icon_name?: string
    title?: string
    child?: Gtk.Widget
}
class SettingsPage {
    /* Properties of Granite-7.0.Granite.SettingsPage */
    status_type: SettingsPageStatusType
    status: string
    icon_name: string
    title: string
    child: Gtk.Widget
    /* Properties of Gtk-4.0.Gtk.Box */
    baseline_position: Gtk.BaselinePosition
    homogeneous: boolean
    spacing: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Box */
    readonly parent_instance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.SettingsPage */
    get_status_type(): SettingsPageStatusType
    set_status_type(value: SettingsPageStatusType): void
    get_display_widget(): Gtk.Widget | null
    get_header(): string | null
    get_status(): string
    set_status(value: string): void
    get_icon_name(): string | null
    set_icon_name(value?: string | null): void
    get_title(): string
    set_title(value: string): void
    get_child(): Gtk.Widget
    set_child(value: Gtk.Widget): void
    /* Methods of Gtk-4.0.Gtk.Box */
    append(child: Gtk.Widget): void
    get_baseline_position(): Gtk.BaselinePosition
    get_homogeneous(): boolean
    get_spacing(): number
    insert_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    reorder_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    set_baseline_position(position: Gtk.BaselinePosition): void
    set_homogeneous(homogeneous: boolean): void
    set_spacing(spacing: number): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: SettingsPage) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: SettingsPage) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: SettingsPage, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: SettingsPage, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: SettingsPage) => void)): number
    connect_after(sigName: "hide", callback: (($obj: SettingsPage) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: SettingsPage, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: SettingsPage, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: SettingsPage) => void)): number
    connect_after(sigName: "map", callback: (($obj: SettingsPage) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: SettingsPage, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: SettingsPage, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: SettingsPage, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: SettingsPage, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: SettingsPage, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: SettingsPage, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: SettingsPage) => void)): number
    connect_after(sigName: "realize", callback: (($obj: SettingsPage) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: SettingsPage) => void)): number
    connect_after(sigName: "show", callback: (($obj: SettingsPage) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: SettingsPage, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: SettingsPage, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: SettingsPage) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: SettingsPage) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: SettingsPage) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: SettingsPage) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::status-type", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-type", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingsPage_ConstructProps)
    _init (config?: SettingsPage_ConstructProps): void
    static $gtype: GObject.Type
}
interface SimpleSettingsPage_ConstructProps extends SettingsPage_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.SimpleSettingsPage */
    action_area?: Gtk.Box
    content_area?: Gtk.Grid
    status_switch?: Gtk.Switch
    activatable?: boolean
    description?: string
}
class SimpleSettingsPage {
    /* Properties of Granite-7.0.Granite.SimpleSettingsPage */
    description: string
    /* Properties of Granite-7.0.Granite.SettingsPage */
    status_type: SettingsPageStatusType
    status: string
    icon_name: string
    title: string
    child: Gtk.Widget
    /* Properties of Gtk-4.0.Gtk.Box */
    baseline_position: Gtk.BaselinePosition
    homogeneous: boolean
    spacing: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Granite-7.0.Granite.SettingsPage */
    readonly _icon_name: string
    readonly _title: string
    /* Fields of Gtk-4.0.Gtk.Box */
    readonly parent_instance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.SimpleSettingsPage */
    get_action_area(): Gtk.Box
    get_content_area(): Gtk.Grid
    get_status_switch(): Gtk.Switch | null
    get_activatable(): boolean
    get_description(): string
    set_description(value: string): void
    /* Methods of Granite-7.0.Granite.SettingsPage */
    get_status_type(): SettingsPageStatusType
    set_status_type(value: SettingsPageStatusType): void
    get_display_widget(): Gtk.Widget | null
    get_header(): string | null
    get_status(): string
    set_status(value: string): void
    get_icon_name(): string | null
    set_icon_name(value?: string | null): void
    get_title(): string
    set_title(value: string): void
    get_child(): Gtk.Widget
    set_child(value: Gtk.Widget): void
    /* Methods of Gtk-4.0.Gtk.Box */
    append(child: Gtk.Widget): void
    get_baseline_position(): Gtk.BaselinePosition
    get_homogeneous(): boolean
    get_spacing(): number
    insert_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    reorder_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    set_baseline_position(position: Gtk.BaselinePosition): void
    set_homogeneous(homogeneous: boolean): void
    set_spacing(spacing: number): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: SimpleSettingsPage) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: SimpleSettingsPage) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: SimpleSettingsPage, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: SimpleSettingsPage, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: SimpleSettingsPage) => void)): number
    connect_after(sigName: "hide", callback: (($obj: SimpleSettingsPage) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: SimpleSettingsPage, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: SimpleSettingsPage, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: SimpleSettingsPage) => void)): number
    connect_after(sigName: "map", callback: (($obj: SimpleSettingsPage) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: SimpleSettingsPage, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: SimpleSettingsPage, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: SimpleSettingsPage, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: SimpleSettingsPage, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: SimpleSettingsPage, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: SimpleSettingsPage, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: SimpleSettingsPage) => void)): number
    connect_after(sigName: "realize", callback: (($obj: SimpleSettingsPage) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: SimpleSettingsPage) => void)): number
    connect_after(sigName: "show", callback: (($obj: SimpleSettingsPage) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: SimpleSettingsPage, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: SimpleSettingsPage, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: SimpleSettingsPage) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: SimpleSettingsPage) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: SimpleSettingsPage) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: SimpleSettingsPage) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status-type", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-type", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleSettingsPage_ConstructProps)
    _init (config?: SimpleSettingsPage_ConstructProps): void
    static $gtype: GObject.Type
}
interface AccelLabel_ConstructProps extends Gtk.Box_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.AccelLabel */
    action_name?: string
    accel_string?: string
    label?: string
}
class AccelLabel {
    /* Properties of Granite-7.0.Granite.AccelLabel */
    action_name: string
    accel_string: string
    label: string
    /* Properties of Gtk-4.0.Gtk.Box */
    baseline_position: Gtk.BaselinePosition
    homogeneous: boolean
    spacing: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Box */
    readonly parent_instance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.AccelLabel */
    get_action_name(): string
    set_action_name(value: string): void
    get_accel_string(): string | null
    set_accel_string(value?: string | null): void
    get_label(): string
    set_label(value: string): void
    /* Methods of Gtk-4.0.Gtk.Box */
    append(child: Gtk.Widget): void
    get_baseline_position(): Gtk.BaselinePosition
    get_homogeneous(): boolean
    get_spacing(): number
    insert_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    reorder_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    set_baseline_position(position: Gtk.BaselinePosition): void
    set_homogeneous(homogeneous: boolean): void
    set_spacing(spacing: number): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: AccelLabel) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: AccelLabel) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: AccelLabel, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: AccelLabel, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: AccelLabel) => void)): number
    connect_after(sigName: "hide", callback: (($obj: AccelLabel) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: AccelLabel, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: AccelLabel, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: AccelLabel) => void)): number
    connect_after(sigName: "map", callback: (($obj: AccelLabel) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: AccelLabel, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: AccelLabel, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: AccelLabel, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: AccelLabel, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: AccelLabel, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: AccelLabel, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: AccelLabel) => void)): number
    connect_after(sigName: "realize", callback: (($obj: AccelLabel) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: AccelLabel) => void)): number
    connect_after(sigName: "show", callback: (($obj: AccelLabel) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: AccelLabel, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: AccelLabel, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: AccelLabel) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: AccelLabel) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: AccelLabel) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: AccelLabel) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::action-name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accel-string", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-string", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AccelLabel_ConstructProps)
    _init (config?: AccelLabel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(label: string, accel_string?: string | null): AccelLabel
    /* Function overloads */
    static new(orientation: Gtk.Orientation, spacing: number): AccelLabel
    static from_action_name(label: string, action_name: string): AccelLabel
    static $gtype: GObject.Type
}
interface DatePicker_ConstructProps extends Gtk.Entry_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.DatePicker */
    format?: string
    date?: GLib.DateTime
}
class DatePicker {
    /* Properties of Granite-7.0.Granite.DatePicker */
    date: GLib.DateTime
    /* Properties of Gtk-4.0.Gtk.Entry */
    activates_default: boolean
    attributes: Pango.AttrList
    buffer: Gtk.EntryBuffer
    completion: Gtk.EntryCompletion
    enable_emoji_completion: boolean
    extra_menu: Gio.MenuModel
    has_frame: boolean
    im_module: string
    input_hints: Gtk.InputHints
    input_purpose: Gtk.InputPurpose
    invisible_char: number
    invisible_char_set: boolean
    max_length: number
    overwrite_mode: boolean
    placeholder_text: string
    primary_icon_activatable: boolean
    primary_icon_gicon: Gio.Icon
    primary_icon_name: string
    primary_icon_paintable: Gdk.Paintable
    primary_icon_sensitive: boolean
    readonly primary_icon_storage_type: Gtk.ImageType
    primary_icon_tooltip_markup: string
    primary_icon_tooltip_text: string
    progress_fraction: number
    progress_pulse_step: number
    readonly scroll_offset: number
    secondary_icon_activatable: boolean
    secondary_icon_gicon: Gio.Icon
    secondary_icon_name: string
    secondary_icon_paintable: Gdk.Paintable
    secondary_icon_sensitive: boolean
    readonly secondary_icon_storage_type: Gtk.ImageType
    secondary_icon_tooltip_markup: string
    secondary_icon_tooltip_text: string
    show_emoji_icon: boolean
    tabs: Pango.TabArray
    readonly text_length: number
    truncate_multiline: boolean
    visibility: boolean
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.DatePicker */
    get_format(): string
    get_date(): GLib.DateTime
    set_date(value: GLib.DateTime): void
    /* Methods of Gtk-4.0.Gtk.Entry */
    get_activates_default(): boolean
    get_alignment(): number
    get_attributes(): Pango.AttrList | null
    get_buffer(): Gtk.EntryBuffer
    get_completion(): Gtk.EntryCompletion | null
    get_current_icon_drag_source(): number
    get_extra_menu(): Gio.MenuModel | null
    get_has_frame(): boolean
    get_icon_activatable(icon_pos: Gtk.EntryIconPosition): boolean
    get_icon_area(icon_pos: Gtk.EntryIconPosition): /* icon_area */ Gdk.Rectangle
    get_icon_at_pos(x: number, y: number): number
    get_icon_gicon(icon_pos: Gtk.EntryIconPosition): Gio.Icon | null
    get_icon_name(icon_pos: Gtk.EntryIconPosition): string | null
    get_icon_paintable(icon_pos: Gtk.EntryIconPosition): Gdk.Paintable | null
    get_icon_sensitive(icon_pos: Gtk.EntryIconPosition): boolean
    get_icon_storage_type(icon_pos: Gtk.EntryIconPosition): Gtk.ImageType
    get_icon_tooltip_markup(icon_pos: Gtk.EntryIconPosition): string | null
    get_icon_tooltip_text(icon_pos: Gtk.EntryIconPosition): string | null
    get_input_hints(): Gtk.InputHints
    get_input_purpose(): Gtk.InputPurpose
    get_invisible_char(): number
    get_max_length(): number
    get_overwrite_mode(): boolean
    get_placeholder_text(): string | null
    get_progress_fraction(): number
    get_progress_pulse_step(): number
    get_tabs(): Pango.TabArray | null
    get_text_length(): number
    get_visibility(): boolean
    grab_focus_without_selecting(): boolean
    progress_pulse(): void
    reset_im_context(): void
    set_activates_default(setting: boolean): void
    set_alignment(xalign: number): void
    set_attributes(attrs: Pango.AttrList): void
    set_buffer(buffer: Gtk.EntryBuffer): void
    set_completion(completion?: Gtk.EntryCompletion | null): void
    set_extra_menu(model?: Gio.MenuModel | null): void
    set_has_frame(setting: boolean): void
    set_icon_activatable(icon_pos: Gtk.EntryIconPosition, activatable: boolean): void
    set_icon_drag_source(icon_pos: Gtk.EntryIconPosition, provider: Gdk.ContentProvider, actions: Gdk.DragAction): void
    set_icon_from_gicon(icon_pos: Gtk.EntryIconPosition, icon?: Gio.Icon | null): void
    set_icon_from_icon_name(icon_pos: Gtk.EntryIconPosition, icon_name?: string | null): void
    set_icon_from_paintable(icon_pos: Gtk.EntryIconPosition, paintable?: Gdk.Paintable | null): void
    set_icon_sensitive(icon_pos: Gtk.EntryIconPosition, sensitive: boolean): void
    set_icon_tooltip_markup(icon_pos: Gtk.EntryIconPosition, tooltip?: string | null): void
    set_icon_tooltip_text(icon_pos: Gtk.EntryIconPosition, tooltip?: string | null): void
    set_input_hints(hints: Gtk.InputHints): void
    set_input_purpose(purpose: Gtk.InputPurpose): void
    set_invisible_char(ch: number): void
    set_max_length(max: number): void
    set_overwrite_mode(overwrite: boolean): void
    set_placeholder_text(text?: string | null): void
    set_progress_fraction(fraction: number): void
    set_progress_pulse_step(fraction: number): void
    set_tabs(tabs?: Pango.TabArray | null): void
    set_visibility(visible: boolean): void
    unset_invisible_char(): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Buildable */
    get_buildable_id(): string | null
    /* Virtual methods of Granite-7.0.Granite.DatePicker */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk-4.0.Gtk.Entry */
    vfunc_activate(): void
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Granite-7.0.Granite.DatePicker */
    connect(sigName: "date-changed", callback: (($obj: DatePicker) => void)): number
    connect_after(sigName: "date-changed", callback: (($obj: DatePicker) => void)): number
    emit(sigName: "date-changed"): void
    /* Signals of Gtk-4.0.Gtk.Entry */
    connect(sigName: "activate", callback: (($obj: DatePicker) => void)): number
    connect_after(sigName: "activate", callback: (($obj: DatePicker) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "icon-press", callback: (($obj: DatePicker, icon_pos: Gtk.EntryIconPosition) => void)): number
    connect_after(sigName: "icon-press", callback: (($obj: DatePicker, icon_pos: Gtk.EntryIconPosition) => void)): number
    emit(sigName: "icon-press", icon_pos: Gtk.EntryIconPosition): void
    connect(sigName: "icon-release", callback: (($obj: DatePicker, icon_pos: Gtk.EntryIconPosition) => void)): number
    connect_after(sigName: "icon-release", callback: (($obj: DatePicker, icon_pos: Gtk.EntryIconPosition) => void)): number
    emit(sigName: "icon-release", icon_pos: Gtk.EntryIconPosition): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: DatePicker) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: DatePicker) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: DatePicker, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: DatePicker, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: DatePicker) => void)): number
    connect_after(sigName: "hide", callback: (($obj: DatePicker) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: DatePicker, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: DatePicker, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: DatePicker) => void)): number
    connect_after(sigName: "map", callback: (($obj: DatePicker) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: DatePicker, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: DatePicker, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: DatePicker, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: DatePicker, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: DatePicker, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: DatePicker, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: DatePicker) => void)): number
    connect_after(sigName: "realize", callback: (($obj: DatePicker) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: DatePicker) => void)): number
    connect_after(sigName: "show", callback: (($obj: DatePicker) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: DatePicker, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: DatePicker, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: DatePicker) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: DatePicker) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: DatePicker) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: DatePicker) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::date", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::activates-default", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::completion", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extra-menu", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-frame", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-module", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-hints", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-purpose", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::invisible-char", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::invisible-char-set", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-length", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overwrite-mode", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::placeholder-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-paintable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-paintable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-fraction", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scroll-offset", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-paintable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-paintable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tabs", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-length", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::truncate-multiline", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DatePicker_ConstructProps)
    _init (config?: DatePicker_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static with_format(format: string): DatePicker
    static new(): DatePicker
    /* Function overloads */
    static new(): DatePicker
    static $gtype: GObject.Type
}
interface Dialog_ConstructProps extends Gtk.Dialog_ConstructProps {
}
class Dialog {
    /* Properties of Gtk-4.0.Gtk.Window */
    application: Gtk.Application
    child: Gtk.Widget
    decorated: boolean
    default_height: number
    default_widget: Gtk.Widget
    default_width: number
    deletable: boolean
    destroy_with_parent: boolean
    display: Gdk.Display
    focus_visible: boolean
    focus_widget: Gtk.Widget
    fullscreened: boolean
    handle_menubar_accel: boolean
    hide_on_close: boolean
    icon_name: string
    readonly is_active: boolean
    maximized: boolean
    mnemonics_visible: boolean
    modal: boolean
    resizable: boolean
    startup_id: string
    title: string
    titlebar: Gtk.Widget
    transient_for: Gtk.Window
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Dialog */
    readonly parent_instance: Gtk.Window
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gtk-4.0.Gtk.Dialog */
    add_action_widget(child: Gtk.Widget, response_id: number): void
    add_button(button_text: string, response_id: number): Gtk.Widget
    get_content_area(): Gtk.Box
    get_header_bar(): Gtk.HeaderBar
    get_response_for_widget(widget: Gtk.Widget): number
    get_widget_for_response(response_id: number): Gtk.Widget | null
    response(response_id: number): void
    set_default_response(response_id: number): void
    set_response_sensitive(response_id: number, setting: boolean): void
    /* Methods of Gtk-4.0.Gtk.Window */
    close(): void
    destroy(): void
    fullscreen(): void
    fullscreen_on_monitor(monitor: Gdk.Monitor): void
    get_application(): Gtk.Application | null
    get_child(): Gtk.Widget | null
    get_decorated(): boolean
    get_default_size(): [ /* width */ number | null, /* height */ number | null ]
    get_default_widget(): Gtk.Widget | null
    get_deletable(): boolean
    get_destroy_with_parent(): boolean
    get_focus(): Gtk.Widget | null
    get_focus_visible(): boolean
    get_group(): Gtk.WindowGroup
    get_handle_menubar_accel(): boolean
    get_hide_on_close(): boolean
    get_icon_name(): string | null
    get_mnemonics_visible(): boolean
    get_modal(): boolean
    get_resizable(): boolean
    get_title(): string | null
    get_titlebar(): Gtk.Widget | null
    get_transient_for(): Gtk.Window | null
    has_group(): boolean
    is_fullscreen(): boolean
    is_maximized(): boolean
    maximize(): void
    minimize(): void
    present(): void
    present_with_time(timestamp: number): void
    set_application(application?: Gtk.Application | null): void
    set_child(child?: Gtk.Widget | null): void
    set_decorated(setting: boolean): void
    set_default_size(width: number, height: number): void
    set_default_widget(default_widget?: Gtk.Widget | null): void
    set_deletable(setting: boolean): void
    set_destroy_with_parent(setting: boolean): void
    set_display(display: Gdk.Display): void
    set_focus(focus?: Gtk.Widget | null): void
    set_focus_visible(setting: boolean): void
    set_handle_menubar_accel(handle_menubar_accel: boolean): void
    set_hide_on_close(setting: boolean): void
    set_icon_name(name?: string | null): void
    set_mnemonics_visible(setting: boolean): void
    set_modal(modal: boolean): void
    set_resizable(resizable: boolean): void
    set_startup_id(startup_id: string): void
    set_title(title?: string | null): void
    set_titlebar(titlebar?: Gtk.Widget | null): void
    set_transient_for(parent?: Gtk.Window | null): void
    unfullscreen(): void
    unmaximize(): void
    unminimize(): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Dialog */
    vfunc_close(): void
    vfunc_response(response_id: number): void
    /* Virtual methods of Gtk-4.0.Gtk.Window */
    vfunc_activate_default(): void
    vfunc_activate_focus(): void
    vfunc_close_request(): boolean
    vfunc_enable_debugging(toggle: boolean): boolean
    vfunc_keys_changed(): void
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.Dialog */
    connect(sigName: "close", callback: (($obj: Dialog) => void)): number
    connect_after(sigName: "close", callback: (($obj: Dialog) => void)): number
    emit(sigName: "close"): void
    connect(sigName: "response", callback: (($obj: Dialog, response_id: number) => void)): number
    connect_after(sigName: "response", callback: (($obj: Dialog, response_id: number) => void)): number
    emit(sigName: "response", response_id: number): void
    /* Signals of Gtk-4.0.Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: Dialog) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: Dialog) => void)): number
    emit(sigName: "activate-default"): void
    connect(sigName: "activate-focus", callback: (($obj: Dialog) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: Dialog) => void)): number
    emit(sigName: "activate-focus"): void
    connect(sigName: "close-request", callback: (($obj: Dialog) => boolean)): number
    connect_after(sigName: "close-request", callback: (($obj: Dialog) => boolean)): number
    emit(sigName: "close-request"): void
    connect(sigName: "enable-debugging", callback: (($obj: Dialog, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: Dialog, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    connect(sigName: "keys-changed", callback: (($obj: Dialog) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: Dialog) => void)): number
    emit(sigName: "keys-changed"): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Dialog) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Dialog) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Dialog, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Dialog, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Dialog) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Dialog) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Dialog, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Dialog, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Dialog) => void)): number
    connect_after(sigName: "map", callback: (($obj: Dialog) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Dialog, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Dialog, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Dialog, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Dialog, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Dialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Dialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Dialog) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Dialog) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Dialog) => void)): number
    connect_after(sigName: "show", callback: (($obj: Dialog) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Dialog, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Dialog, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Dialog) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Dialog) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Dialog) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Dialog) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-height", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-widget", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-width", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-widget", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fullscreened", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::handle-menubar-accel", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-menubar-accel", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hide-on-close", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-active", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maximized", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::titlebar", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::titlebar", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Dialog_ConstructProps)
    _init (config?: Dialog_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Dialog
    /* Function overloads */
    static new(): Dialog
    static new(): Dialog
    static $gtype: GObject.Type
}
interface HeaderLabel_ConstructProps extends Gtk.Widget_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.HeaderLabel */
    label?: string
}
class HeaderLabel {
    /* Properties of Granite-7.0.Granite.HeaderLabel */
    label: string
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.HeaderLabel */
    get_label(): string
    set_label(value: string): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: HeaderLabel) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: HeaderLabel) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: HeaderLabel, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: HeaderLabel, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: HeaderLabel) => void)): number
    connect_after(sigName: "hide", callback: (($obj: HeaderLabel) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: HeaderLabel, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: HeaderLabel, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: HeaderLabel) => void)): number
    connect_after(sigName: "map", callback: (($obj: HeaderLabel) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: HeaderLabel, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: HeaderLabel, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: HeaderLabel, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: HeaderLabel, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: HeaderLabel, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: HeaderLabel, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: HeaderLabel) => void)): number
    connect_after(sigName: "realize", callback: (($obj: HeaderLabel) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: HeaderLabel) => void)): number
    connect_after(sigName: "show", callback: (($obj: HeaderLabel) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: HeaderLabel, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: HeaderLabel, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: HeaderLabel) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: HeaderLabel) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: HeaderLabel) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: HeaderLabel) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HeaderLabel_ConstructProps)
    _init (config?: HeaderLabel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(label: string): HeaderLabel
    static $gtype: GObject.Type
}
interface HyperTextView_ConstructProps extends Gtk.TextView_ConstructProps {
}
class HyperTextView {
    /* Properties of Gtk-4.0.Gtk.TextView */
    accepts_tab: boolean
    bottom_margin: number
    buffer: Gtk.TextBuffer
    cursor_visible: boolean
    editable: boolean
    extra_menu: Gio.MenuModel
    im_module: string
    indent: number
    input_hints: Gtk.InputHints
    input_purpose: Gtk.InputPurpose
    justification: Gtk.Justification
    left_margin: number
    monospace: boolean
    overwrite: boolean
    pixels_above_lines: number
    pixels_below_lines: number
    pixels_inside_wrap: number
    right_margin: number
    tabs: Pango.TabArray
    top_margin: number
    wrap_mode: Gtk.WrapMode
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.TextView */
    readonly parent_instance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gtk-4.0.Gtk.TextView */
    add_child_at_anchor(child: Gtk.Widget, anchor: Gtk.TextChildAnchor): void
    add_overlay(child: Gtk.Widget, xpos: number, ypos: number): void
    backward_display_line(iter: Gtk.TextIter): boolean
    backward_display_line_start(iter: Gtk.TextIter): boolean
    buffer_to_window_coords(win: Gtk.TextWindowType, buffer_x: number, buffer_y: number): [ /* window_x */ number | null, /* window_y */ number | null ]
    forward_display_line(iter: Gtk.TextIter): boolean
    forward_display_line_end(iter: Gtk.TextIter): boolean
    get_accepts_tab(): boolean
    get_bottom_margin(): number
    get_buffer(): Gtk.TextBuffer
    get_cursor_locations(iter?: Gtk.TextIter | null): [ /* strong */ Gdk.Rectangle | null, /* weak */ Gdk.Rectangle | null ]
    get_cursor_visible(): boolean
    get_editable(): boolean
    get_extra_menu(): Gio.MenuModel
    get_gutter(win: Gtk.TextWindowType): Gtk.Widget | null
    get_indent(): number
    get_input_hints(): Gtk.InputHints
    get_input_purpose(): Gtk.InputPurpose
    get_iter_at_location(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    get_iter_at_position(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter, /* trailing */ number | null ]
    get_iter_location(iter: Gtk.TextIter): /* location */ Gdk.Rectangle
    get_justification(): Gtk.Justification
    get_left_margin(): number
    get_line_at_y(y: number): [ /* target_iter */ Gtk.TextIter, /* line_top */ number ]
    get_line_yrange(iter: Gtk.TextIter): [ /* y */ number, /* height */ number ]
    get_ltr_context(): Pango.Context
    get_monospace(): boolean
    get_overwrite(): boolean
    get_pixels_above_lines(): number
    get_pixels_below_lines(): number
    get_pixels_inside_wrap(): number
    get_right_margin(): number
    get_rtl_context(): Pango.Context
    get_tabs(): Pango.TabArray | null
    get_top_margin(): number
    get_visible_rect(): /* visible_rect */ Gdk.Rectangle
    get_wrap_mode(): Gtk.WrapMode
    im_context_filter_keypress(event: Gdk.Event): boolean
    move_mark_onscreen(mark: Gtk.TextMark): boolean
    move_overlay(child: Gtk.Widget, xpos: number, ypos: number): void
    move_visually(iter: Gtk.TextIter, count: number): boolean
    place_cursor_onscreen(): boolean
    remove(child: Gtk.Widget): void
    reset_cursor_blink(): void
    reset_im_context(): void
    scroll_mark_onscreen(mark: Gtk.TextMark): void
    scroll_to_iter(iter: Gtk.TextIter, within_margin: number, use_align: boolean, xalign: number, yalign: number): boolean
    scroll_to_mark(mark: Gtk.TextMark, within_margin: number, use_align: boolean, xalign: number, yalign: number): void
    set_accepts_tab(accepts_tab: boolean): void
    set_bottom_margin(bottom_margin: number): void
    set_buffer(buffer?: Gtk.TextBuffer | null): void
    set_cursor_visible(setting: boolean): void
    set_editable(setting: boolean): void
    set_extra_menu(model?: Gio.MenuModel | null): void
    set_gutter(win: Gtk.TextWindowType, widget?: Gtk.Widget | null): void
    set_indent(indent: number): void
    set_input_hints(hints: Gtk.InputHints): void
    set_input_purpose(purpose: Gtk.InputPurpose): void
    set_justification(justification: Gtk.Justification): void
    set_left_margin(left_margin: number): void
    set_monospace(monospace: boolean): void
    set_overwrite(overwrite: boolean): void
    set_pixels_above_lines(pixels_above_lines: number): void
    set_pixels_below_lines(pixels_below_lines: number): void
    set_pixels_inside_wrap(pixels_inside_wrap: number): void
    set_right_margin(right_margin: number): void
    set_tabs(tabs: Pango.TabArray): void
    set_top_margin(top_margin: number): void
    set_wrap_mode(wrap_mode: Gtk.WrapMode): void
    starts_display_line(iter: Gtk.TextIter): boolean
    window_to_buffer_coords(win: Gtk.TextWindowType, window_x: number, window_y: number): [ /* buffer_x */ number | null, /* buffer_y */ number | null ]
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.TextView */
    vfunc_backspace(): void
    vfunc_copy_clipboard(): void
    vfunc_cut_clipboard(): void
    vfunc_delete_from_cursor(type: Gtk.DeleteType, count: number): void
    vfunc_extend_selection(granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): boolean
    vfunc_insert_at_cursor(str: string): void
    vfunc_insert_emoji(): void
    vfunc_move_cursor(step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    vfunc_paste_clipboard(): void
    vfunc_set_anchor(): void
    vfunc_snapshot_layer(layer: Gtk.TextViewLayer, snapshot: Gtk.Snapshot): void
    vfunc_toggle_overwrite(): void
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.TextView */
    connect(sigName: "backspace", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "backspace", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "backspace"): void
    connect(sigName: "copy-clipboard", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "copy-clipboard", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "copy-clipboard"): void
    connect(sigName: "cut-clipboard", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "cut-clipboard", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "cut-clipboard"): void
    connect(sigName: "delete-from-cursor", callback: (($obj: HyperTextView, type: Gtk.DeleteType, count: number) => void)): number
    connect_after(sigName: "delete-from-cursor", callback: (($obj: HyperTextView, type: Gtk.DeleteType, count: number) => void)): number
    emit(sigName: "delete-from-cursor", type: Gtk.DeleteType, count: number): void
    connect(sigName: "extend-selection", callback: (($obj: HyperTextView, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    connect_after(sigName: "extend-selection", callback: (($obj: HyperTextView, granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    emit(sigName: "extend-selection", granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "insert-at-cursor", callback: (($obj: HyperTextView, string: string) => void)): number
    connect_after(sigName: "insert-at-cursor", callback: (($obj: HyperTextView, string: string) => void)): number
    emit(sigName: "insert-at-cursor", string: string): void
    connect(sigName: "insert-emoji", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "insert-emoji", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "insert-emoji"): void
    connect(sigName: "move-cursor", callback: (($obj: HyperTextView, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): number
    connect_after(sigName: "move-cursor", callback: (($obj: HyperTextView, step: Gtk.MovementStep, count: number, extend_selection: boolean) => void)): number
    emit(sigName: "move-cursor", step: Gtk.MovementStep, count: number, extend_selection: boolean): void
    connect(sigName: "move-viewport", callback: (($obj: HyperTextView, step: Gtk.ScrollStep, count: number) => void)): number
    connect_after(sigName: "move-viewport", callback: (($obj: HyperTextView, step: Gtk.ScrollStep, count: number) => void)): number
    emit(sigName: "move-viewport", step: Gtk.ScrollStep, count: number): void
    connect(sigName: "paste-clipboard", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "paste-clipboard", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "paste-clipboard"): void
    connect(sigName: "preedit-changed", callback: (($obj: HyperTextView, preedit: string) => void)): number
    connect_after(sigName: "preedit-changed", callback: (($obj: HyperTextView, preedit: string) => void)): number
    emit(sigName: "preedit-changed", preedit: string): void
    connect(sigName: "select-all", callback: (($obj: HyperTextView, select: boolean) => void)): number
    connect_after(sigName: "select-all", callback: (($obj: HyperTextView, select: boolean) => void)): number
    emit(sigName: "select-all", select: boolean): void
    connect(sigName: "set-anchor", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "set-anchor", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "set-anchor"): void
    connect(sigName: "toggle-cursor-visible", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "toggle-cursor-visible", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "toggle-cursor-visible"): void
    connect(sigName: "toggle-overwrite", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "toggle-overwrite", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "toggle-overwrite"): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: HyperTextView, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: HyperTextView, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "hide", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: HyperTextView, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: HyperTextView, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "map", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: HyperTextView, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: HyperTextView, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: HyperTextView, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: HyperTextView, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: HyperTextView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: HyperTextView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "realize", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "show", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: HyperTextView, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: HyperTextView, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: HyperTextView) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: HyperTextView) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accepts-tab", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bottom-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor-visible", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editable", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extra-menu", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-module", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-hints", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-purpose", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::justification", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::left-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::monospace", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overwrite", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::right-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tabs", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::top-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap-mode", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HyperTextView_ConstructProps)
    _init (config?: HyperTextView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HyperTextView
    /* Function overloads */
    static new(): HyperTextView
    static $gtype: GObject.Type
}
interface MessageDialog_ConstructProps extends Dialog_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.MessageDialog */
    primary_text?: string
    secondary_text?: string
    image_icon?: Gio.Icon
    badge_icon?: Gio.Icon
    primary_label?: Gtk.Label
    secondary_label?: Gtk.Label
    buttons?: Gtk.ButtonsType
    custom_bin?: Gtk.Box
}
class MessageDialog {
    /* Properties of Granite-7.0.Granite.MessageDialog */
    primary_text: string
    secondary_text: string
    image_icon: Gio.Icon
    badge_icon: Gio.Icon
    /* Properties of Gtk-4.0.Gtk.Window */
    application: Gtk.Application
    child: Gtk.Widget
    decorated: boolean
    default_height: number
    default_widget: Gtk.Widget
    default_width: number
    deletable: boolean
    destroy_with_parent: boolean
    display: Gdk.Display
    focus_visible: boolean
    focus_widget: Gtk.Widget
    fullscreened: boolean
    handle_menubar_accel: boolean
    hide_on_close: boolean
    icon_name: string
    readonly is_active: boolean
    maximized: boolean
    mnemonics_visible: boolean
    modal: boolean
    resizable: boolean
    startup_id: string
    title: string
    titlebar: Gtk.Widget
    transient_for: Gtk.Window
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Dialog */
    readonly parent_instance: Gtk.Window
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.MessageDialog */
    get_primary_text(): string
    set_primary_text(value: string): void
    get_secondary_text(): string
    set_secondary_text(value: string): void
    get_image_icon(): Gio.Icon
    set_image_icon(value: Gio.Icon): void
    get_badge_icon(): Gio.Icon
    set_badge_icon(value: Gio.Icon): void
    get_primary_label(): Gtk.Label
    get_secondary_label(): Gtk.Label
    get_custom_bin(): Gtk.Box
    show_error_details(error_message: string): void
    /* Methods of Gtk-4.0.Gtk.Dialog */
    add_action_widget(child: Gtk.Widget, response_id: number): void
    add_button(button_text: string, response_id: number): Gtk.Widget
    get_content_area(): Gtk.Box
    get_header_bar(): Gtk.HeaderBar
    get_response_for_widget(widget: Gtk.Widget): number
    get_widget_for_response(response_id: number): Gtk.Widget | null
    response(response_id: number): void
    set_default_response(response_id: number): void
    set_response_sensitive(response_id: number, setting: boolean): void
    /* Methods of Gtk-4.0.Gtk.Window */
    close(): void
    destroy(): void
    fullscreen(): void
    fullscreen_on_monitor(monitor: Gdk.Monitor): void
    get_application(): Gtk.Application | null
    get_child(): Gtk.Widget | null
    get_decorated(): boolean
    get_default_size(): [ /* width */ number | null, /* height */ number | null ]
    get_default_widget(): Gtk.Widget | null
    get_deletable(): boolean
    get_destroy_with_parent(): boolean
    get_focus(): Gtk.Widget | null
    get_focus_visible(): boolean
    get_group(): Gtk.WindowGroup
    get_handle_menubar_accel(): boolean
    get_hide_on_close(): boolean
    get_icon_name(): string | null
    get_mnemonics_visible(): boolean
    get_modal(): boolean
    get_resizable(): boolean
    get_title(): string | null
    get_titlebar(): Gtk.Widget | null
    get_transient_for(): Gtk.Window | null
    has_group(): boolean
    is_fullscreen(): boolean
    is_maximized(): boolean
    maximize(): void
    minimize(): void
    present(): void
    present_with_time(timestamp: number): void
    set_application(application?: Gtk.Application | null): void
    set_child(child?: Gtk.Widget | null): void
    set_decorated(setting: boolean): void
    set_default_size(width: number, height: number): void
    set_default_widget(default_widget?: Gtk.Widget | null): void
    set_deletable(setting: boolean): void
    set_destroy_with_parent(setting: boolean): void
    set_display(display: Gdk.Display): void
    set_focus(focus?: Gtk.Widget | null): void
    set_focus_visible(setting: boolean): void
    set_handle_menubar_accel(handle_menubar_accel: boolean): void
    set_hide_on_close(setting: boolean): void
    set_icon_name(name?: string | null): void
    set_mnemonics_visible(setting: boolean): void
    set_modal(modal: boolean): void
    set_resizable(resizable: boolean): void
    set_startup_id(startup_id: string): void
    set_title(title?: string | null): void
    set_titlebar(titlebar?: Gtk.Widget | null): void
    set_transient_for(parent?: Gtk.Window | null): void
    unfullscreen(): void
    unmaximize(): void
    unminimize(): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Dialog */
    vfunc_close(): void
    vfunc_response(response_id: number): void
    /* Virtual methods of Gtk-4.0.Gtk.Window */
    vfunc_activate_default(): void
    vfunc_activate_focus(): void
    vfunc_close_request(): boolean
    vfunc_enable_debugging(toggle: boolean): boolean
    vfunc_keys_changed(): void
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.Dialog */
    connect(sigName: "close", callback: (($obj: MessageDialog) => void)): number
    connect_after(sigName: "close", callback: (($obj: MessageDialog) => void)): number
    emit(sigName: "close"): void
    connect(sigName: "response", callback: (($obj: MessageDialog, response_id: number) => void)): number
    connect_after(sigName: "response", callback: (($obj: MessageDialog, response_id: number) => void)): number
    emit(sigName: "response", response_id: number): void
    /* Signals of Gtk-4.0.Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: MessageDialog) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: MessageDialog) => void)): number
    emit(sigName: "activate-default"): void
    connect(sigName: "activate-focus", callback: (($obj: MessageDialog) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: MessageDialog) => void)): number
    emit(sigName: "activate-focus"): void
    connect(sigName: "close-request", callback: (($obj: MessageDialog) => boolean)): number
    connect_after(sigName: "close-request", callback: (($obj: MessageDialog) => boolean)): number
    emit(sigName: "close-request"): void
    connect(sigName: "enable-debugging", callback: (($obj: MessageDialog, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: MessageDialog, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    connect(sigName: "keys-changed", callback: (($obj: MessageDialog) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: MessageDialog) => void)): number
    emit(sigName: "keys-changed"): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: MessageDialog) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: MessageDialog) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: MessageDialog, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: MessageDialog, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: MessageDialog) => void)): number
    connect_after(sigName: "hide", callback: (($obj: MessageDialog) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: MessageDialog, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: MessageDialog, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: MessageDialog) => void)): number
    connect_after(sigName: "map", callback: (($obj: MessageDialog) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: MessageDialog, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: MessageDialog, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: MessageDialog, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: MessageDialog, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: MessageDialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: MessageDialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: MessageDialog) => void)): number
    connect_after(sigName: "realize", callback: (($obj: MessageDialog) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: MessageDialog) => void)): number
    connect_after(sigName: "show", callback: (($obj: MessageDialog) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: MessageDialog, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: MessageDialog, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: MessageDialog) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: MessageDialog) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: MessageDialog) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: MessageDialog) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::primary-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::badge-icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::badge-icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-height", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-widget", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-width", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-widget", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fullscreened", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::handle-menubar-accel", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-menubar-accel", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hide-on-close", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-active", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maximized", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::titlebar", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::titlebar", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MessageDialog_ConstructProps)
    _init (config?: MessageDialog_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(primary_text: string, secondary_text: string, image_icon: Gio.Icon, buttons: Gtk.ButtonsType): MessageDialog
    /* Function overloads */
    static new(): MessageDialog
    static new(): MessageDialog
    static new(): MessageDialog
    static with_image_from_icon_name(primary_text: string, secondary_text: string, image_icon_name: string, buttons: Gtk.ButtonsType): MessageDialog
    static $gtype: GObject.Type
}
interface ModeSwitch_ConstructProps extends Gtk.Box_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.ModeSwitch */
    active?: boolean
    primary_icon_gicon?: Gio.Icon
    primary_icon_name?: string
    primary_icon_tooltip_text?: string
    secondary_icon_gicon?: Gio.Icon
    secondary_icon_name?: string
    secondary_icon_tooltip_text?: string
}
class ModeSwitch {
    /* Properties of Granite-7.0.Granite.ModeSwitch */
    active: boolean
    primary_icon_gicon: Gio.Icon
    primary_icon_name: string
    primary_icon_tooltip_text: string
    secondary_icon_gicon: Gio.Icon
    secondary_icon_name: string
    secondary_icon_tooltip_text: string
    /* Properties of Gtk-4.0.Gtk.Box */
    baseline_position: Gtk.BaselinePosition
    homogeneous: boolean
    spacing: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Box */
    readonly parent_instance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.ModeSwitch */
    get_active(): boolean
    set_active(value: boolean): void
    get_primary_icon_gicon(): Gio.Icon
    set_primary_icon_gicon(value: Gio.Icon): void
    get_primary_icon_name(): string
    set_primary_icon_name(value: string): void
    get_primary_icon_tooltip_text(): string
    set_primary_icon_tooltip_text(value: string): void
    get_secondary_icon_gicon(): Gio.Icon
    set_secondary_icon_gicon(value: Gio.Icon): void
    get_secondary_icon_name(): string
    set_secondary_icon_name(value: string): void
    get_secondary_icon_tooltip_text(): string
    set_secondary_icon_tooltip_text(value: string): void
    /* Methods of Gtk-4.0.Gtk.Box */
    append(child: Gtk.Widget): void
    get_baseline_position(): Gtk.BaselinePosition
    get_homogeneous(): boolean
    get_spacing(): number
    insert_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    reorder_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    set_baseline_position(position: Gtk.BaselinePosition): void
    set_homogeneous(homogeneous: boolean): void
    set_spacing(spacing: number): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: ModeSwitch) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ModeSwitch) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: ModeSwitch, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: ModeSwitch, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: ModeSwitch) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ModeSwitch) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: ModeSwitch, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: ModeSwitch, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: ModeSwitch) => void)): number
    connect_after(sigName: "map", callback: (($obj: ModeSwitch) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: ModeSwitch, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: ModeSwitch, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: ModeSwitch, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: ModeSwitch, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: ModeSwitch, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: ModeSwitch, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: ModeSwitch) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ModeSwitch) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: ModeSwitch) => void)): number
    connect_after(sigName: "show", callback: (($obj: ModeSwitch) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: ModeSwitch, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: ModeSwitch, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: ModeSwitch) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: ModeSwitch) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: ModeSwitch) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ModeSwitch) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ModeSwitch_ConstructProps)
    _init (config?: ModeSwitch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(primary_icon_gicon: Gio.Icon, secondary_icon_gicon: Gio.Icon): ModeSwitch
    /* Function overloads */
    static new(orientation: Gtk.Orientation, spacing: number): ModeSwitch
    static from_icon_name(primary_icon_name: string, secondary_icon_name: string): ModeSwitch
    static $gtype: GObject.Type
}
interface Placeholder_ConstructProps extends Gtk.Widget_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.Placeholder */
    title?: string
    description?: string
    icon?: Gio.Icon
}
class Placeholder {
    /* Properties of Granite-7.0.Granite.Placeholder */
    title: string
    description: string
    icon: Gio.Icon
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.Placeholder */
    get_title(): string
    set_title(value: string): void
    get_description(): string
    set_description(value: string): void
    get_icon(): Gio.Icon
    set_icon(value: Gio.Icon): void
    append_button(icon: Gio.Icon, label: string, description: string): Gtk.Button
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Placeholder) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Placeholder) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Placeholder, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Placeholder, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Placeholder) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Placeholder) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Placeholder, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Placeholder, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Placeholder) => void)): number
    connect_after(sigName: "map", callback: (($obj: Placeholder) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Placeholder, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Placeholder, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Placeholder, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Placeholder, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Placeholder, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Placeholder, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Placeholder) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Placeholder) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Placeholder) => void)): number
    connect_after(sigName: "show", callback: (($obj: Placeholder) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Placeholder, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Placeholder, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Placeholder) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Placeholder) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Placeholder) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Placeholder) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::title", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Placeholder_ConstructProps)
    _init (config?: Placeholder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string): Placeholder
    static $gtype: GObject.Type
}
interface SettingsSidebar_ConstructProps extends Gtk.Box_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.SettingsSidebar */
    stack?: Gtk.Stack
    visible_child_name?: string
}
class SettingsSidebar {
    /* Properties of Granite-7.0.Granite.SettingsSidebar */
    visible_child_name: string
    /* Properties of Gtk-4.0.Gtk.Box */
    baseline_position: Gtk.BaselinePosition
    homogeneous: boolean
    spacing: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Box */
    readonly parent_instance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.SettingsSidebar */
    get_stack(): Gtk.Stack
    get_visible_child_name(): string | null
    set_visible_child_name(value?: string | null): void
    /* Methods of Gtk-4.0.Gtk.Box */
    append(child: Gtk.Widget): void
    get_baseline_position(): Gtk.BaselinePosition
    get_homogeneous(): boolean
    get_spacing(): number
    insert_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    reorder_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    set_baseline_position(position: Gtk.BaselinePosition): void
    set_homogeneous(homogeneous: boolean): void
    set_spacing(spacing: number): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: SettingsSidebar) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: SettingsSidebar) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: SettingsSidebar, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: SettingsSidebar, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: SettingsSidebar) => void)): number
    connect_after(sigName: "hide", callback: (($obj: SettingsSidebar) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: SettingsSidebar, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: SettingsSidebar, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: SettingsSidebar) => void)): number
    connect_after(sigName: "map", callback: (($obj: SettingsSidebar) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: SettingsSidebar, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: SettingsSidebar, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: SettingsSidebar, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: SettingsSidebar, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: SettingsSidebar, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: SettingsSidebar, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: SettingsSidebar) => void)): number
    connect_after(sigName: "realize", callback: (($obj: SettingsSidebar) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: SettingsSidebar) => void)): number
    connect_after(sigName: "show", callback: (($obj: SettingsSidebar) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: SettingsSidebar, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: SettingsSidebar, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: SettingsSidebar) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: SettingsSidebar) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: SettingsSidebar) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: SettingsSidebar) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::visible-child-name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child-name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingsSidebar_ConstructProps)
    _init (config?: SettingsSidebar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stack: Gtk.Stack): SettingsSidebar
    /* Function overloads */
    static new(orientation: Gtk.Orientation, spacing: number): SettingsSidebar
    static $gtype: GObject.Type
}
interface Settings_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.Settings */
    prefers_color_scheme?: SettingsColorScheme
}
class Settings {
    /* Properties of Granite-7.0.Granite.Settings */
    prefers_color_scheme: SettingsColorScheme
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.Settings */
    get_prefers_color_scheme(): SettingsColorScheme
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
    connect(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::prefers-color-scheme", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefers-color-scheme", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Settings_ConstructProps)
    _init (config?: Settings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Settings
    static $gtype: GObject.Type
}
interface SwitchModelButton_ConstructProps extends Gtk.ToggleButton_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.SwitchModelButton */
    text?: string
    description?: string
}
class SwitchModelButton {
    /* Properties of Granite-7.0.Granite.SwitchModelButton */
    text: string
    description: string
    /* Properties of Gtk-4.0.Gtk.ToggleButton */
    active: boolean
    group: Gtk.ToggleButton
    /* Properties of Gtk-4.0.Gtk.Button */
    child: Gtk.Widget
    has_frame: boolean
    icon_name: string
    label: string
    use_underline: boolean
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.SwitchModelButton */
    get_text(): string
    set_text(value: string): void
    get_description(): string | null
    set_description(value?: string | null): void
    /* Methods of Gtk-4.0.Gtk.ToggleButton */
    get_active(): boolean
    set_active(is_active: boolean): void
    set_group(group?: Gtk.ToggleButton | null): void
    toggled(): void
    /* Methods of Gtk-4.0.Gtk.Button */
    get_child(): Gtk.Widget | null
    get_has_frame(): boolean
    get_icon_name(): string | null
    get_label(): string | null
    get_use_underline(): boolean
    set_child(child?: Gtk.Widget | null): void
    set_has_frame(has_frame: boolean): void
    set_icon_name(icon_name: string): void
    set_label(label: string): void
    set_use_underline(use_underline: boolean): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.ToggleButton */
    vfunc_toggled(): void
    /* Virtual methods of Gtk-4.0.Gtk.Button */
    vfunc_activate(): void
    vfunc_clicked(): void
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.ToggleButton */
    connect(sigName: "toggled", callback: (($obj: SwitchModelButton) => void)): number
    connect_after(sigName: "toggled", callback: (($obj: SwitchModelButton) => void)): number
    emit(sigName: "toggled"): void
    /* Signals of Gtk-4.0.Gtk.Button */
    connect(sigName: "activate", callback: (($obj: SwitchModelButton) => void)): number
    connect_after(sigName: "activate", callback: (($obj: SwitchModelButton) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "clicked", callback: (($obj: SwitchModelButton) => void)): number
    connect_after(sigName: "clicked", callback: (($obj: SwitchModelButton) => void)): number
    emit(sigName: "clicked"): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: SwitchModelButton) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: SwitchModelButton) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: SwitchModelButton, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: SwitchModelButton, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: SwitchModelButton) => void)): number
    connect_after(sigName: "hide", callback: (($obj: SwitchModelButton) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: SwitchModelButton, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: SwitchModelButton, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: SwitchModelButton) => void)): number
    connect_after(sigName: "map", callback: (($obj: SwitchModelButton) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: SwitchModelButton, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: SwitchModelButton, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: SwitchModelButton, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: SwitchModelButton, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: SwitchModelButton, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: SwitchModelButton, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: SwitchModelButton) => void)): number
    connect_after(sigName: "realize", callback: (($obj: SwitchModelButton) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: SwitchModelButton) => void)): number
    connect_after(sigName: "show", callback: (($obj: SwitchModelButton) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: SwitchModelButton, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: SwitchModelButton, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: SwitchModelButton) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: SwitchModelButton) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: SwitchModelButton) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: SwitchModelButton) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::text", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::group", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-frame", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-underline", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SwitchModelButton_ConstructProps)
    _init (config?: SwitchModelButton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(text: string): SwitchModelButton
    /* Function overloads */
    static new(): SwitchModelButton
    static new(): SwitchModelButton
    static new_with_label(label: string): SwitchModelButton
    /* Function overloads */
    static new_with_label(label: string): SwitchModelButton
    static new_with_mnemonic(label: string): SwitchModelButton
    /* Function overloads */
    static new_with_mnemonic(label: string): SwitchModelButton
    static $gtype: GObject.Type
}
interface TimePicker_ConstructProps extends Gtk.Entry_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.TimePicker */
    format_12?: string
    format_24?: string
    time?: GLib.DateTime
}
class TimePicker {
    /* Properties of Granite-7.0.Granite.TimePicker */
    time: GLib.DateTime
    /* Properties of Gtk-4.0.Gtk.Entry */
    activates_default: boolean
    attributes: Pango.AttrList
    buffer: Gtk.EntryBuffer
    completion: Gtk.EntryCompletion
    enable_emoji_completion: boolean
    extra_menu: Gio.MenuModel
    has_frame: boolean
    im_module: string
    input_hints: Gtk.InputHints
    input_purpose: Gtk.InputPurpose
    invisible_char: number
    invisible_char_set: boolean
    max_length: number
    overwrite_mode: boolean
    placeholder_text: string
    primary_icon_activatable: boolean
    primary_icon_gicon: Gio.Icon
    primary_icon_name: string
    primary_icon_paintable: Gdk.Paintable
    primary_icon_sensitive: boolean
    readonly primary_icon_storage_type: Gtk.ImageType
    primary_icon_tooltip_markup: string
    primary_icon_tooltip_text: string
    progress_fraction: number
    progress_pulse_step: number
    readonly scroll_offset: number
    secondary_icon_activatable: boolean
    secondary_icon_gicon: Gio.Icon
    secondary_icon_name: string
    secondary_icon_paintable: Gdk.Paintable
    secondary_icon_sensitive: boolean
    readonly secondary_icon_storage_type: Gtk.ImageType
    secondary_icon_tooltip_markup: string
    secondary_icon_tooltip_text: string
    show_emoji_icon: boolean
    tabs: Pango.TabArray
    readonly text_length: number
    truncate_multiline: boolean
    visibility: boolean
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.TimePicker */
    get_format_12(): string
    get_format_24(): string
    get_time(): GLib.DateTime
    set_time(value: GLib.DateTime): void
    /* Methods of Gtk-4.0.Gtk.Entry */
    get_activates_default(): boolean
    get_alignment(): number
    get_attributes(): Pango.AttrList | null
    get_buffer(): Gtk.EntryBuffer
    get_completion(): Gtk.EntryCompletion | null
    get_current_icon_drag_source(): number
    get_extra_menu(): Gio.MenuModel | null
    get_has_frame(): boolean
    get_icon_activatable(icon_pos: Gtk.EntryIconPosition): boolean
    get_icon_area(icon_pos: Gtk.EntryIconPosition): /* icon_area */ Gdk.Rectangle
    get_icon_at_pos(x: number, y: number): number
    get_icon_gicon(icon_pos: Gtk.EntryIconPosition): Gio.Icon | null
    get_icon_name(icon_pos: Gtk.EntryIconPosition): string | null
    get_icon_paintable(icon_pos: Gtk.EntryIconPosition): Gdk.Paintable | null
    get_icon_sensitive(icon_pos: Gtk.EntryIconPosition): boolean
    get_icon_storage_type(icon_pos: Gtk.EntryIconPosition): Gtk.ImageType
    get_icon_tooltip_markup(icon_pos: Gtk.EntryIconPosition): string | null
    get_icon_tooltip_text(icon_pos: Gtk.EntryIconPosition): string | null
    get_input_hints(): Gtk.InputHints
    get_input_purpose(): Gtk.InputPurpose
    get_invisible_char(): number
    get_max_length(): number
    get_overwrite_mode(): boolean
    get_placeholder_text(): string | null
    get_progress_fraction(): number
    get_progress_pulse_step(): number
    get_tabs(): Pango.TabArray | null
    get_text_length(): number
    get_visibility(): boolean
    grab_focus_without_selecting(): boolean
    progress_pulse(): void
    reset_im_context(): void
    set_activates_default(setting: boolean): void
    set_alignment(xalign: number): void
    set_attributes(attrs: Pango.AttrList): void
    set_buffer(buffer: Gtk.EntryBuffer): void
    set_completion(completion?: Gtk.EntryCompletion | null): void
    set_extra_menu(model?: Gio.MenuModel | null): void
    set_has_frame(setting: boolean): void
    set_icon_activatable(icon_pos: Gtk.EntryIconPosition, activatable: boolean): void
    set_icon_drag_source(icon_pos: Gtk.EntryIconPosition, provider: Gdk.ContentProvider, actions: Gdk.DragAction): void
    set_icon_from_gicon(icon_pos: Gtk.EntryIconPosition, icon?: Gio.Icon | null): void
    set_icon_from_icon_name(icon_pos: Gtk.EntryIconPosition, icon_name?: string | null): void
    set_icon_from_paintable(icon_pos: Gtk.EntryIconPosition, paintable?: Gdk.Paintable | null): void
    set_icon_sensitive(icon_pos: Gtk.EntryIconPosition, sensitive: boolean): void
    set_icon_tooltip_markup(icon_pos: Gtk.EntryIconPosition, tooltip?: string | null): void
    set_icon_tooltip_text(icon_pos: Gtk.EntryIconPosition, tooltip?: string | null): void
    set_input_hints(hints: Gtk.InputHints): void
    set_input_purpose(purpose: Gtk.InputPurpose): void
    set_invisible_char(ch: number): void
    set_max_length(max: number): void
    set_overwrite_mode(overwrite: boolean): void
    set_placeholder_text(text?: string | null): void
    set_progress_fraction(fraction: number): void
    set_progress_pulse_step(fraction: number): void
    set_tabs(tabs?: Pango.TabArray | null): void
    set_visibility(visible: boolean): void
    unset_invisible_char(): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Entry */
    vfunc_activate(): void
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Granite-7.0.Granite.TimePicker */
    connect(sigName: "time-changed", callback: (($obj: TimePicker) => void)): number
    connect_after(sigName: "time-changed", callback: (($obj: TimePicker) => void)): number
    emit(sigName: "time-changed"): void
    /* Signals of Gtk-4.0.Gtk.Entry */
    connect(sigName: "activate", callback: (($obj: TimePicker) => void)): number
    connect_after(sigName: "activate", callback: (($obj: TimePicker) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "icon-press", callback: (($obj: TimePicker, icon_pos: Gtk.EntryIconPosition) => void)): number
    connect_after(sigName: "icon-press", callback: (($obj: TimePicker, icon_pos: Gtk.EntryIconPosition) => void)): number
    emit(sigName: "icon-press", icon_pos: Gtk.EntryIconPosition): void
    connect(sigName: "icon-release", callback: (($obj: TimePicker, icon_pos: Gtk.EntryIconPosition) => void)): number
    connect_after(sigName: "icon-release", callback: (($obj: TimePicker, icon_pos: Gtk.EntryIconPosition) => void)): number
    emit(sigName: "icon-release", icon_pos: Gtk.EntryIconPosition): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: TimePicker) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: TimePicker) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: TimePicker, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: TimePicker, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: TimePicker) => void)): number
    connect_after(sigName: "hide", callback: (($obj: TimePicker) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: TimePicker, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: TimePicker, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: TimePicker) => void)): number
    connect_after(sigName: "map", callback: (($obj: TimePicker) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: TimePicker, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: TimePicker, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: TimePicker, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: TimePicker, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: TimePicker, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: TimePicker, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: TimePicker) => void)): number
    connect_after(sigName: "realize", callback: (($obj: TimePicker) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: TimePicker) => void)): number
    connect_after(sigName: "show", callback: (($obj: TimePicker) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: TimePicker, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: TimePicker, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: TimePicker) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: TimePicker) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: TimePicker) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: TimePicker) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::time", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::activates-default", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::completion", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extra-menu", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-frame", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-module", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-hints", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-purpose", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::invisible-char", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::invisible-char-set", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-length", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overwrite-mode", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::placeholder-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-paintable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-paintable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-fraction", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scroll-offset", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-paintable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-paintable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tabs", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-length", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::truncate-multiline", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimePicker_ConstructProps)
    _init (config?: TimePicker_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static with_format(format_12: string, format_24: string): TimePicker
    static new(): TimePicker
    /* Function overloads */
    static new(): TimePicker
    static $gtype: GObject.Type
}
interface ValidatedEntry_ConstructProps extends Gtk.Entry_ConstructProps {
    /* Constructor properties of Granite-7.0.Granite.ValidatedEntry */
    is_valid?: boolean
    min_length?: number
    regex?: GLib.Regex
}
class ValidatedEntry {
    /* Properties of Granite-7.0.Granite.ValidatedEntry */
    is_valid: boolean
    min_length: number
    regex: GLib.Regex
    /* Properties of Gtk-4.0.Gtk.Entry */
    activates_default: boolean
    attributes: Pango.AttrList
    buffer: Gtk.EntryBuffer
    completion: Gtk.EntryCompletion
    enable_emoji_completion: boolean
    extra_menu: Gio.MenuModel
    has_frame: boolean
    im_module: string
    input_hints: Gtk.InputHints
    input_purpose: Gtk.InputPurpose
    invisible_char: number
    invisible_char_set: boolean
    max_length: number
    overwrite_mode: boolean
    placeholder_text: string
    primary_icon_activatable: boolean
    primary_icon_gicon: Gio.Icon
    primary_icon_name: string
    primary_icon_paintable: Gdk.Paintable
    primary_icon_sensitive: boolean
    readonly primary_icon_storage_type: Gtk.ImageType
    primary_icon_tooltip_markup: string
    primary_icon_tooltip_text: string
    progress_fraction: number
    progress_pulse_step: number
    readonly scroll_offset: number
    secondary_icon_activatable: boolean
    secondary_icon_gicon: Gio.Icon
    secondary_icon_name: string
    secondary_icon_paintable: Gdk.Paintable
    secondary_icon_sensitive: boolean
    readonly secondary_icon_storage_type: Gtk.ImageType
    secondary_icon_tooltip_markup: string
    secondary_icon_tooltip_text: string
    show_emoji_icon: boolean
    tabs: Pango.TabArray
    readonly text_length: number
    truncate_multiline: boolean
    visibility: boolean
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Granite-7.0.Granite.ValidatedEntry */
    get_is_valid(): boolean
    set_is_valid(value: boolean): void
    get_min_length(): number
    set_min_length(value: number): void
    get_regex(): GLib.Regex
    set_regex(value: GLib.Regex): void
    /* Methods of Gtk-4.0.Gtk.Entry */
    get_activates_default(): boolean
    get_alignment(): number
    get_attributes(): Pango.AttrList | null
    get_buffer(): Gtk.EntryBuffer
    get_completion(): Gtk.EntryCompletion | null
    get_current_icon_drag_source(): number
    get_extra_menu(): Gio.MenuModel | null
    get_has_frame(): boolean
    get_icon_activatable(icon_pos: Gtk.EntryIconPosition): boolean
    get_icon_area(icon_pos: Gtk.EntryIconPosition): /* icon_area */ Gdk.Rectangle
    get_icon_at_pos(x: number, y: number): number
    get_icon_gicon(icon_pos: Gtk.EntryIconPosition): Gio.Icon | null
    get_icon_name(icon_pos: Gtk.EntryIconPosition): string | null
    get_icon_paintable(icon_pos: Gtk.EntryIconPosition): Gdk.Paintable | null
    get_icon_sensitive(icon_pos: Gtk.EntryIconPosition): boolean
    get_icon_storage_type(icon_pos: Gtk.EntryIconPosition): Gtk.ImageType
    get_icon_tooltip_markup(icon_pos: Gtk.EntryIconPosition): string | null
    get_icon_tooltip_text(icon_pos: Gtk.EntryIconPosition): string | null
    get_input_hints(): Gtk.InputHints
    get_input_purpose(): Gtk.InputPurpose
    get_invisible_char(): number
    get_max_length(): number
    get_overwrite_mode(): boolean
    get_placeholder_text(): string | null
    get_progress_fraction(): number
    get_progress_pulse_step(): number
    get_tabs(): Pango.TabArray | null
    get_text_length(): number
    get_visibility(): boolean
    grab_focus_without_selecting(): boolean
    progress_pulse(): void
    reset_im_context(): void
    set_activates_default(setting: boolean): void
    set_alignment(xalign: number): void
    set_attributes(attrs: Pango.AttrList): void
    set_buffer(buffer: Gtk.EntryBuffer): void
    set_completion(completion?: Gtk.EntryCompletion | null): void
    set_extra_menu(model?: Gio.MenuModel | null): void
    set_has_frame(setting: boolean): void
    set_icon_activatable(icon_pos: Gtk.EntryIconPosition, activatable: boolean): void
    set_icon_drag_source(icon_pos: Gtk.EntryIconPosition, provider: Gdk.ContentProvider, actions: Gdk.DragAction): void
    set_icon_from_gicon(icon_pos: Gtk.EntryIconPosition, icon?: Gio.Icon | null): void
    set_icon_from_icon_name(icon_pos: Gtk.EntryIconPosition, icon_name?: string | null): void
    set_icon_from_paintable(icon_pos: Gtk.EntryIconPosition, paintable?: Gdk.Paintable | null): void
    set_icon_sensitive(icon_pos: Gtk.EntryIconPosition, sensitive: boolean): void
    set_icon_tooltip_markup(icon_pos: Gtk.EntryIconPosition, tooltip?: string | null): void
    set_icon_tooltip_text(icon_pos: Gtk.EntryIconPosition, tooltip?: string | null): void
    set_input_hints(hints: Gtk.InputHints): void
    set_input_purpose(purpose: Gtk.InputPurpose): void
    set_invisible_char(ch: number): void
    set_max_length(max: number): void
    set_overwrite_mode(overwrite: boolean): void
    set_placeholder_text(text?: string | null): void
    set_progress_fraction(fraction: number): void
    set_progress_pulse_step(fraction: number): void
    set_tabs(tabs?: Pango.TabArray | null): void
    set_visibility(visible: boolean): void
    unset_invisible_char(): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Virtual methods of Gtk-4.0.Gtk.Entry */
    vfunc_activate(): void
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.Entry */
    connect(sigName: "activate", callback: (($obj: ValidatedEntry) => void)): number
    connect_after(sigName: "activate", callback: (($obj: ValidatedEntry) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "icon-press", callback: (($obj: ValidatedEntry, icon_pos: Gtk.EntryIconPosition) => void)): number
    connect_after(sigName: "icon-press", callback: (($obj: ValidatedEntry, icon_pos: Gtk.EntryIconPosition) => void)): number
    emit(sigName: "icon-press", icon_pos: Gtk.EntryIconPosition): void
    connect(sigName: "icon-release", callback: (($obj: ValidatedEntry, icon_pos: Gtk.EntryIconPosition) => void)): number
    connect_after(sigName: "icon-release", callback: (($obj: ValidatedEntry, icon_pos: Gtk.EntryIconPosition) => void)): number
    emit(sigName: "icon-release", icon_pos: Gtk.EntryIconPosition): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: ValidatedEntry) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ValidatedEntry) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: ValidatedEntry, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: ValidatedEntry, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: ValidatedEntry) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ValidatedEntry) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: ValidatedEntry, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: ValidatedEntry, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: ValidatedEntry) => void)): number
    connect_after(sigName: "map", callback: (($obj: ValidatedEntry) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: ValidatedEntry, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: ValidatedEntry, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: ValidatedEntry, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: ValidatedEntry, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: ValidatedEntry, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: ValidatedEntry, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: ValidatedEntry) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ValidatedEntry) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: ValidatedEntry) => void)): number
    connect_after(sigName: "show", callback: (($obj: ValidatedEntry) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: ValidatedEntry, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: ValidatedEntry, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: ValidatedEntry) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: ValidatedEntry) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: ValidatedEntry) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ValidatedEntry) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-valid", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-valid", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::regex", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::regex", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::activates-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::completion", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extra-menu", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-frame", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-module", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-hints", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-purpose", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::invisible-char", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::invisible-char-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overwrite-mode", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::placeholder-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-paintable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-paintable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-fraction", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scroll-offset", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-paintable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-paintable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tabs", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::truncate-multiline", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ValidatedEntry_ConstructProps)
    _init (config?: ValidatedEntry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_regex(regex_arg: GLib.Regex): ValidatedEntry
    static new(): ValidatedEntry
    /* Function overloads */
    static new(): ValidatedEntry
    static $gtype: GObject.Type
}
abstract class DrawingBufferSurfaceClass {
    static name: string
}
class DrawingBufferSurfacePrivate {
    static name: string
}
abstract class DrawingColorClass {
    static name: string
}
class DrawingColorPrivate {
    static name: string
}
abstract class DrawingUtilitiesClass {
    static name: string
}
class DrawingUtilitiesPrivate {
    static name: string
}
abstract class ServicesContractorProxyClass {
    static name: string
}
class ServicesContractorProxyPrivate {
    static name: string
}
abstract class ServicesLoggerClass {
    static name: string
}
class ServicesLoggerPrivate {
    static name: string
}
abstract class ServicesSystemClass {
    static name: string
}
class ServicesSystemPrivate {
    static name: string
}
abstract class ServicesContractIface {
    /* Fields of Granite-7.0.Granite.ServicesContractIface */
    readonly get_display_name: (self: any) => string
    readonly get_description: (self: any) => string
    readonly get_icon: (self: any) => Gio.Icon
    readonly execute_with_file: (self: any, file: Gio.File) => void
    readonly execute_with_files: (self: any, files: Gio.File[]) => void
    static name: string
}
abstract class ServicesSettingsSerializableIface {
    /* Fields of Granite-7.0.Granite.ServicesSettingsSerializableIface */
    readonly settings_serialize: (self: any) => string
    readonly settings_deserialize: (self: any, s: string) => void
    static name: string
}
abstract class WidgetsTabClass {
    static name: string
}
class WidgetsTabPrivate {
    static name: string
}
abstract class WidgetsDynamicNotebookClass {
    static name: string
}
class WidgetsDynamicNotebookPrivate {
    static name: string
}
abstract class WidgetsOverlayBarClass {
    static name: string
}
class WidgetsOverlayBarPrivate {
    static name: string
}
abstract class WidgetsToastClass {
    static name: string
}
class WidgetsToastPrivate {
    static name: string
}
abstract class SettingsPageClass {
    static name: string
}
class SettingsPagePrivate {
    static name: string
}
abstract class SimpleSettingsPageClass {
    static name: string
}
class SimpleSettingsPagePrivate {
    static name: string
}
abstract class AccelLabelClass {
    static name: string
}
class AccelLabelPrivate {
    static name: string
}
abstract class DatePickerClass {
    static name: string
}
class DatePickerPrivate {
    static name: string
}
abstract class DialogClass {
    static name: string
}
class DialogPrivate {
    static name: string
}
abstract class HeaderLabelClass {
    static name: string
}
class HeaderLabelPrivate {
    static name: string
}
abstract class HyperTextViewClass {
    static name: string
}
class HyperTextViewPrivate {
    static name: string
}
abstract class MessageDialogClass {
    static name: string
}
class MessageDialogPrivate {
    static name: string
}
abstract class ModeSwitchClass {
    static name: string
}
class ModeSwitchPrivate {
    static name: string
}
abstract class PlaceholderClass {
    static name: string
}
class PlaceholderPrivate {
    static name: string
}
abstract class SettingsSidebarClass {
    static name: string
}
class SettingsSidebarPrivate {
    static name: string
}
abstract class SettingsClass {
    static name: string
}
class SettingsPrivate {
    static name: string
}
abstract class SwitchModelButtonClass {
    static name: string
}
class SwitchModelButtonPrivate {
    static name: string
}
abstract class TimePickerClass {
    static name: string
}
class TimePickerPrivate {
    static name: string
}
abstract class ValidatedEntryClass {
    static name: string
}
class ValidatedEntryPrivate {
    static name: string
}
}
export default Granite;