/**
 * PolkitAgent-1.0
 */

import type * as Gjs from './Gjs';
import type Polkit from './Polkit-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace PolkitAgent {

enum RegisterFlags {
    NONE,
    RUN_IN_THREAD,
}
function register_listener(listener: Listener, subject: Polkit.Subject, object_path: string): boolean
export interface Listener_ConstructProps extends GObject.Object_ConstructProps {
}
class Listener {
    /* Fields of PolkitAgent-1.0.PolkitAgent.Listener */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PolkitAgent-1.0.PolkitAgent.Listener */
    initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initiate_authentication_finish(res: Gio.AsyncResult): boolean
    register(flags: RegisterFlags, subject: Polkit.Subject, object_path: string, cancellable?: Gio.Cancellable | null): object | null
    register_with_options(flags: RegisterFlags, subject: Polkit.Subject, object_path: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): object | null
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
    /* Virtual methods of PolkitAgent-1.0.PolkitAgent.Listener */
    vfunc_initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_initiate_authentication_finish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Listener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Listener, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Listener_ConstructProps)
    _init (config?: Listener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static unregister(registration_handle?: object | null): void
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
    cookie?: string
    identity?: Polkit.Identity
}
class Session {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PolkitAgent-1.0.PolkitAgent.Session */
    cancel(): void
    initiate(): void
    response(response: string): void
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
    /* Signals of PolkitAgent-1.0.PolkitAgent.Session */
    connect(sigName: "completed", callback: (($obj: Session, gained_authorization: boolean) => void)): number
    connect_after(sigName: "completed", callback: (($obj: Session, gained_authorization: boolean) => void)): number
    emit(sigName: "completed", gained_authorization: boolean): void
    connect(sigName: "request", callback: (($obj: Session, request: string, echo_on: boolean) => void)): number
    connect_after(sigName: "request", callback: (($obj: Session, request: string, echo_on: boolean) => void)): number
    emit(sigName: "request", request: string, echo_on: boolean): void
    connect(sigName: "show-error", callback: (($obj: Session, text: string) => void)): number
    connect_after(sigName: "show-error", callback: (($obj: Session, text: string) => void)): number
    emit(sigName: "show-error", text: string): void
    connect(sigName: "show-info", callback: (($obj: Session, text: string) => void)): number
    connect_after(sigName: "show-info", callback: (($obj: Session, text: string) => void)): number
    emit(sigName: "show-info", text: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(identity: Polkit.Identity, cookie: string): Session
    static $gtype: GObject.Type
}
export interface TextListener_ConstructProps extends Listener_ConstructProps {
}
class TextListener {
    /* Fields of PolkitAgent-1.0.PolkitAgent.Listener */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PolkitAgent-1.0.PolkitAgent.Listener */
    initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initiate_authentication_finish(res: Gio.AsyncResult): boolean
    register(flags: RegisterFlags, subject: Polkit.Subject, object_path: string, cancellable?: Gio.Cancellable | null): object | null
    register_with_options(flags: RegisterFlags, subject: Polkit.Subject, object_path: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): object | null
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
    /* Virtual methods of PolkitAgent-1.0.PolkitAgent.TextListener */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of PolkitAgent-1.0.PolkitAgent.Listener */
    vfunc_initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_initiate_authentication_finish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextListener, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextListener_ConstructProps)
    _init (config?: TextListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable?: Gio.Cancellable | null): TextListener
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class ListenerClass {
    /* Fields of PolkitAgent-1.0.PolkitAgent.ListenerClass */
    parent_class: GObject.ObjectClass
    initiate_authentication: (listener: Listener, action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    initiate_authentication_finish: (listener: Listener, res: Gio.AsyncResult) => boolean
    static name: string
}
abstract class SessionClass {
    static name: string
}
}
export default PolkitAgent;