/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Notify-0.7
 */

import type * as Gjs from './Gjs';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace Notify {

enum Urgency {
    LOW,
    NORMAL,
    CRITICAL,
}
const EXPIRES_DEFAULT: number
const EXPIRES_NEVER: number
const VERSION_MAJOR: number
const VERSION_MICRO: number
const VERSION_MINOR: number
function get_app_name(): string
function get_server_caps(): string[]
function get_server_info(): [ /* returnType */ boolean, /* ret_name */ string | null, /* ret_vendor */ string | null, /* ret_version */ string | null, /* ret_spec_version */ string | null ]
function init(app_name: string): boolean
function is_initted(): boolean
function set_app_name(app_name: string): void
function uninit(): void
interface ActionCallback {
    (notification: Notification, action: string): void
}
interface Notification_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Notify-0.7.Notify.Notification */
    app_name?: string
    body?: string
    icon_name?: string
    id?: number
    summary?: string
}
class Notification {
    /* Properties of Notify-0.7.Notify.Notification */
    app_name: string
    body: string
    readonly closed_reason: number
    icon_name: string
    id: number
    summary: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Notify-0.7.Notify.Notification */
    add_action(action: string, label: string, callback: ActionCallback): void
    clear_actions(): void
    clear_hints(): void
    close(): boolean
    get_closed_reason(): number
    set_app_name(app_name: string): void
    set_category(category: string): void
    set_hint(key: string, value?: GLib.Variant | null): void
    set_hint_byte(key: string, value: number): void
    set_hint_byte_array(key: string, value: Uint8Array): void
    set_hint_double(key: string, value: number): void
    set_hint_int32(key: string, value: number): void
    set_hint_string(key: string, value: string): void
    set_hint_uint32(key: string, value: number): void
    set_icon_from_pixbuf(icon: GdkPixbuf.Pixbuf): void
    set_image_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    set_timeout(timeout: number): void
    set_urgency(urgency: Urgency): void
    show(): boolean
    update(summary: string, body?: string | null, icon?: string | null): boolean
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
    /* Virtual methods of Notify-0.7.Notify.Notification */
    vfunc_closed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Notify-0.7.Notify.Notification */
    connect(sigName: "closed", callback: (($obj: Notification) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Notification) => void)): number
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-name", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-name", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::body", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed-reason", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed-reason", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Notification_ConstructProps)
    _init (config?: Notification_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(summary: string, body?: string | null, icon?: string | null): Notification
    static $gtype: GObject.Type
}
abstract class NotificationClass {
    /* Fields of Notify-0.7.Notify.NotificationClass */
    readonly parent_class: GObject.ObjectClass
    readonly closed: (notification: Notification) => void
    static name: string
}
class NotificationPrivate {
    static name: string
}
}
export default Notify;