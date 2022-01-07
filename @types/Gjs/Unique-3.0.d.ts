/**
 * Unique-3.0
 */

import type * as Gjs from './Gjs';
import type xlib from './xlib-2.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gtk from './Gtk-3.0';
import type Gdk from './Gdk-3.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

export namespace Unique {

enum Command {
    INVALID,
    ACTIVATE,
    NEW,
    OPEN,
    CLOSE,
}
enum Response {
    INVALID,
    OK,
    CANCEL,
    FAIL,
    PASSTHROUGH,
}
export interface App_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    screen?: Gdk.Screen
    startup_id?: string
}
class App {
    /* Properties of Unique-3.0.Unique.App */
    readonly is_running: boolean
    screen: Gdk.Screen
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unique-3.0.Unique.App */
    add_command(command_name: string, command_id: number): void
    send_message(command_id: number, message_data?: MessageData | null): Response
    watch_window(window: Gtk.Window): void
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
    /* Virtual methods of Unique-3.0.Unique.App */
    vfunc_message_received(command: number, message_data: MessageData, time_: number): Response
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Unique-3.0.Unique.App */
    connect(sigName: "message-received", callback: (($obj: App, command: number, message_data: MessageData, time_: number) => Response)): number
    connect_after(sigName: "message-received", callback: (($obj: App, command: number, message_data: MessageData, time_: number) => Response)): number
    emit(sigName: "message-received", command: number, message_data: MessageData, time_: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-running", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-running", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screen", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: App_ConstructProps)
    _init (config?: App_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, startup_id?: string | null): App
    static $gtype: GObject.Type
}
export interface Backend_ConstructProps extends GObject.Object_ConstructProps {
}
class Backend {
    /* Fields of Unique-3.0.Unique.Backend */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Unique-3.0.Unique.Backend */
    get_name(): string
    get_screen(): Gdk.Screen
    get_startup_id(): string
    get_workspace(): number
    request_name(): boolean
    send_message(command_id: number, message_data: MessageData, time_: number): Response
    set_name(name: string): void
    set_screen(screen: Gdk.Screen): void
    set_startup_id(startup_id: string): void
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
    /* Virtual methods of Unique-3.0.Unique.Backend */
    vfunc_request_name(): boolean
    vfunc_send_message(command_id: number, message_data: MessageData, time_: number): Response
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Backend_ConstructProps)
    _init (config?: Backend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(): Backend
    static $gtype: GObject.Type
}
abstract class AppClass {
    /* Fields of Unique-3.0.Unique.AppClass */
    message_received: (app: App, command: number, message_data: MessageData, time_: number) => Response
    static name: string
}
class AppPrivate {
    static name: string
}
abstract class BackendClass {
    /* Fields of Unique-3.0.Unique.BackendClass */
    request_name: (backend: Backend) => boolean
    send_message: (backend: Backend, command_id: number, message_data: MessageData, time_: number) => Response
    static name: string
}
class MessageData {
    /* Methods of Unique-3.0.Unique.MessageData */
    copy(): MessageData
    free(): void
    get(): [ /* returnType */ number, /* length */ number ]
    get_filename(): string
    get_screen(): Gdk.Screen
    get_startup_id(): string
    get_text(): string
    get_uris(): string[]
    get_workspace(): number
    set(data: number | null, length: number): void
    set_filename(filename: string): void
    set_text(str: string, length: number): boolean
    set_uris(uris: string[]): boolean
    static name: string
    static new(): MessageData
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageData
}
}
export default Unique;