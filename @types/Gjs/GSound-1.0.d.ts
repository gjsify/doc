/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GSound-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GSound {

enum Error {
    NOTSUPPORTED,
    INVALID,
    STATE,
    OOM,
    NODRIVER,
    SYSTEM,
    CORRUPT,
    TOOBIG,
    NOTFOUND,
    DESTROYED,
    CANCELED,
    NOTAVAILABLE,
    ACCESS,
    IO,
    INTERNAL,
    DISABLED,
    FORKED,
    DISCONNECTED,
}
const ATTR_APPLICATION_ICON: string
const ATTR_APPLICATION_ICON_NAME: string
const ATTR_APPLICATION_ID: string
const ATTR_APPLICATION_LANGUAGE: string
const ATTR_APPLICATION_NAME: string
const ATTR_APPLICATION_PROCESS_BINARY: string
const ATTR_APPLICATION_PROCESS_HOST: string
const ATTR_APPLICATION_PROCESS_ID: string
const ATTR_APPLICATION_PROCESS_USER: string
const ATTR_APPLICATION_VERSION: string
const ATTR_CANBERRA_CACHE_CONTROL: string
const ATTR_CANBERRA_ENABLE: string
const ATTR_CANBERRA_FORCE_CHANNEL: string
const ATTR_CANBERRA_VOLUME: string
const ATTR_CANBERRA_XDG_THEME_NAME: string
const ATTR_CANBERRA_XDG_THEME_OUTPUT_PROFILE: string
const ATTR_EVENT_DESCRIPTION: string
const ATTR_EVENT_ID: string
const ATTR_EVENT_MOUSE_BUTTON: string
const ATTR_EVENT_MOUSE_HPOS: string
const ATTR_EVENT_MOUSE_VPOS: string
const ATTR_EVENT_MOUSE_X: string
const ATTR_EVENT_MOUSE_Y: string
const ATTR_MEDIA_ARTIST: string
const ATTR_MEDIA_FILENAME: string
const ATTR_MEDIA_ICON: string
const ATTR_MEDIA_ICON_NAME: string
const ATTR_MEDIA_LANGUAGE: string
const ATTR_MEDIA_NAME: string
const ATTR_MEDIA_ROLE: string
const ATTR_MEDIA_TITLE: string
const ATTR_WINDOW_DESKTOP: string
const ATTR_WINDOW_HEIGHT: string
const ATTR_WINDOW_HPOS: string
const ATTR_WINDOW_ICON: string
const ATTR_WINDOW_ICON_NAME: string
const ATTR_WINDOW_ID: string
const ATTR_WINDOW_NAME: string
const ATTR_WINDOW_VPOS: string
const ATTR_WINDOW_WIDTH: string
const ATTR_WINDOW_X: string
const ATTR_WINDOW_X11_DISPLAY: string
const ATTR_WINDOW_X11_MONITOR: string
const ATTR_WINDOW_X11_SCREEN: string
const ATTR_WINDOW_X11_XID: string
const ATTR_WINDOW_Y: string
function error_quark(): GLib.Quark
interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
class Context {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GSound-1.0.GSound.Context */
    cache(attrs: GLib.HashTable): boolean
    open(): boolean
    play_full_finish(result: Gio.AsyncResult): boolean
    play_full(attrs: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    play_simple(attrs: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    set_attributes(attrs: GLib.HashTable): boolean
    set_driver(driver: string): boolean
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GSound-1.0.GSound.Context */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable?: Gio.Cancellable | null): Context
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class ContextClass {
    static name: string
}
}
export default GSound;