/**
 * GoVirt-1.0
 */

import type * as Gjs from './Gjs';
import type Rest from './Rest-0.7';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GoVirt {

enum ProxyError {
    PARSING_FAILED,
    ACTION_FAILED,
    FAULT,
}
enum RestCallError {
    XML,
}
enum VmDisplayType {
    SPICE,
    VNC,
}
enum VmState {
    DOWN,
    UP,
    REBOOTING,
}
function proxy_error_quark(): GLib.Quark
function rest_call_error_quark(): GLib.Quark
export interface Proxy_ConstructProps extends Rest.Proxy_ConstructProps {
    admin?: boolean
    ca_cert?: object[]
}
class Proxy {
    /* Properties of GoVirt-1.0.GoVirt.Proxy */
    admin: boolean
    ca_cert: object[]
    /* Properties of Rest-0.7.Rest.Proxy */
    binding_required: boolean
    password: string
    ssl_ca_file: string
    ssl_strict: boolean
    url_format: string
    user_agent: string
    username: string
    /* Fields of GoVirt-1.0.GoVirt.Proxy */
    parent: Rest.Proxy
    priv: ProxyPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GoVirt-1.0.GoVirt.Proxy */
    fetch_ca_certificate(): boolean
    fetch_ca_certificate_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetch_ca_certificate_finish(result: Gio.AsyncResult): Uint8Array[]
    fetch_vms(): boolean
    fetch_vms_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetch_vms_finish(result: Gio.AsyncResult): Vm[]
    get_vms(): Vm[]
    lookup_vm(vm_name: string): Vm
    /* Methods of Rest-0.7.Rest.Proxy */
    add_soup_feature(feature: Soup.SessionFeature): void
    get_user_agent(): string
    new_call(): Rest.ProxyCall
    set_user_agent(user_agent: string): void
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
    /* Virtual methods of Rest-0.7.Rest.Proxy */
    vfunc_authenticate(auth: Rest.ProxyAuth, retrying: boolean): boolean
    vfunc_new_call(): Rest.ProxyCall
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Rest-0.7.Rest.Proxy */
    connect(sigName: "authenticate", callback: (($obj: Proxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: Proxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    emit(sigName: "authenticate", auth: Rest.ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::admin", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::admin", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ca-cert", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca-cert", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::binding-required", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url-format", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Proxy_ConstructProps)
    _init (config?: Proxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): Proxy
    static new(url_format: string, binding_required: boolean): Proxy
    static $gtype: GObject.Type
}
export interface Vm_ConstructProps extends GObject.Object_ConstructProps {
    display?: VmDisplay
    href?: string
    name?: string
    state?: VmState
    uuid?: string
}
class Vm {
    /* Properties of GoVirt-1.0.GoVirt.Vm */
    display: VmDisplay
    href: string
    name: string
    state: VmState
    uuid: string
    /* Fields of GoVirt-1.0.GoVirt.Vm */
    parent: GObject.Object
    priv: VmPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GoVirt-1.0.GoVirt.Vm */
    get_ticket(proxy: Proxy): boolean
    get_ticket_async(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_ticket_finish(result: Gio.AsyncResult): boolean
    start(proxy: Proxy): boolean
    start_async(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    start_finish(result: Gio.AsyncResult): boolean
    stop(proxy: Proxy): boolean
    stop_async(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    stop_finish(result: Gio.AsyncResult): boolean
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
    connect(sigName: "notify", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::href", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::href", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Vm_ConstructProps)
    _init (config?: Vm_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Vm
    static $gtype: GObject.Type
}
export interface VmDisplay_ConstructProps extends GObject.Object_ConstructProps {
    address?: string
    expiry?: number
    monitor_count?: number
    port?: number
    secure_port?: number
    ticket?: string
    type?: VmDisplayType
}
class VmDisplay {
    /* Properties of GoVirt-1.0.GoVirt.VmDisplay */
    address: string
    expiry: number
    monitor_count: number
    port: number
    secure_port: number
    ticket: string
    type: VmDisplayType
    /* Fields of GoVirt-1.0.GoVirt.VmDisplay */
    parent: GObject.Object
    priv: VmDisplayPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expiry", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expiry", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::monitor-count", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor-count", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secure-port", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secure-port", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ticket", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticket", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VmDisplay_ConstructProps)
    _init (config?: VmDisplay_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VmDisplay
    static $gtype: GObject.Type
}
abstract class ProxyClass {
    /* Fields of GoVirt-1.0.GoVirt.ProxyClass */
    parent_class: Rest.ProxyClass
    static name: string
}
class ProxyPrivate {
    static name: string
}
abstract class VmClass {
    /* Fields of GoVirt-1.0.GoVirt.VmClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
abstract class VmDisplayClass {
    /* Fields of GoVirt-1.0.GoVirt.VmDisplayClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
class VmDisplayPrivate {
    static name: string
}
class VmPrivate {
    static name: string
}
}
export default GoVirt;