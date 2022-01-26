/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnP-1.0
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GSSDP from './GSSDP-1.0';

export namespace GUPnP {

enum ControlError {
    INVALID_ACTION,
    INVALID_ARGS,
    OUT_OF_SYNC,
    ACTION_FAILED,
}
enum EventingError {
    SUBSCRIPTION_FAILED,
    SUBSCRIPTION_LOST,
    NOTIFY_FAILED,
}
enum ServerError {
    INTERNAL_SERVER_ERROR,
    NOT_FOUND,
    NOT_IMPLEMENTED,
    INVALID_RESPONSE,
    INVALID_URL,
    OTHER,
}
enum ServiceActionArgDirection {
    IN,
    OUT,
}
enum XMLError {
    PARSE,
    NO_NODE,
    EMPTY_NODE,
    INVALID_ATTRIBUTE,
    OTHER,
}
function control_error_quark(): GLib.Quark
function eventing_error_quark(): GLib.Quark
function get_uuid(): string
function server_error_quark(): GLib.Quark
function xml_error_quark(): GLib.Quark
interface ServiceIntrospectionCallback {
    (info: ServiceInfo, introspection: ServiceIntrospection, error: GLib.Error): void
}
interface ServiceProxyActionCallback {
    (proxy: ServiceProxy, action: ServiceProxyAction): void
}
interface ServiceProxyNotifyCallback {
    (proxy: ServiceProxy, variable: string, value: any): void
}
class Acl {
    /* Methods of GUPnP-1.0.GUPnP.Acl */
    can_sync(): boolean
    is_allowed(device: object | null, service: object | null, path: string, address: string, agent?: string | null): boolean
    is_allowed_async(device: object | null, service: object | null, path: string, address: string, agent?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    is_allowed_finish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GUPnP-1.0.GUPnP.Acl */
    vfunc_can_sync(): boolean
    vfunc_is_allowed(device: object | null, service: object | null, path: string, address: string, agent?: string | null): boolean
    vfunc_is_allowed_async(device: object | null, service: object | null, path: string, address: string, agent?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_is_allowed_finish(res: Gio.AsyncResult): boolean
    static name: string
}
interface Context_ConstructProps extends GSSDP.Client_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.Context */
    acl?: Acl
    default_language?: string
    port?: number
    subscription_timeout?: number
}
class Context {
    /* Properties of GUPnP-1.0.GUPnP.Context */
    acl: Acl
    default_language: string
    readonly server: Soup.Server
    readonly session: Soup.Session
    /* Properties of GSSDP-1.0.GSSDP.Client */
    active: boolean
    host_ip: string
    network: string
    server_id: string
    /* Fields of GSSDP-1.0.GSSDP.Client */
    readonly parent: GObject.Object
    readonly priv: GSSDP.ClientPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.Context */
    add_server_handler(use_acl: boolean, path: string, callback: Soup.ServerCallback): void
    get_acl(): Acl
    get_default_language(): string
    get_host_ip(): string
    get_port(): number
    get_server(): Soup.Server
    get_session(): Soup.Session
    get_subscription_timeout(): number
    host_path(local_path: string, server_path: string): void
    host_path_for_agent(local_path: string, server_path: string, user_agent: GLib.Regex): boolean
    remove_server_handler(path: string): void
    set_acl(acl?: Acl | null): void
    set_default_language(language: string): void
    set_subscription_timeout(timeout: number): void
    unhost_path(server_path: string): void
    /* Methods of GSSDP-1.0.GSSDP.Client */
    add_cache_entry(ip_address: string, user_agent: string): void
    append_header(name: string, value: string): void
    clear_headers(): void
    get_active(): boolean
    get_interface(): string
    get_main_context(): GLib.MainContext
    get_network(): string
    get_server_id(): string
    guess_user_agent(ip_address: string): string
    remove_header(name: string): void
    set_network(network: string): void
    set_server_id(server_id: string): void
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
    /* Virtual methods of GUPnP-1.0.GUPnP.Context */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GSSDP-1.0.GSSDP.Client */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GSSDP-1.0.GSSDP.Client */
    connect(sigName: "message-received", callback: (($obj: Context, from_ip: string, from_port: number, type: number, headers: Soup.MessageHeaders) => void)): number
    connect_after(sigName: "message-received", callback: (($obj: Context, from_ip: string, from_port: number, type: number, headers: Soup.MessageHeaders) => void)): number
    emit(sigName: "message-received", from_ip: string, from_port: number, type: number, headers: Soup.MessageHeaders): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::acl", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acl", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-language", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-language", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::server", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host-ip", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-ip", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::server-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(main_context: GLib.MainContext | null, iface: string | null, port: number): Context
    /* Function overloads */
    static new(main_context?: GLib.MainContext | null, iface?: string | null): Context
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ContextManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.ContextManager */
    main_context?: object
    port?: number
}
class ContextManager {
    /* Properties of GUPnP-1.0.GUPnP.ContextManager */
    readonly white_list: WhiteList
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.ContextManager */
    get_port(): number
    get_white_list(): WhiteList
    manage_control_point(control_point: ControlPoint): void
    manage_root_device(root_device: RootDevice): void
    rescan_control_points(): void
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
    /* Signals of GUPnP-1.0.GUPnP.ContextManager */
    connect(sigName: "context-available", callback: (($obj: ContextManager, context: Context) => void)): number
    connect_after(sigName: "context-available", callback: (($obj: ContextManager, context: Context) => void)): number
    emit(sigName: "context-available", context: Context): void
    connect(sigName: "context-unavailable", callback: (($obj: ContextManager, context: Context) => void)): number
    connect_after(sigName: "context-unavailable", callback: (($obj: ContextManager, context: Context) => void)): number
    emit(sigName: "context-unavailable", context: Context): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::white-list", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::white-list", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContextManager_ConstructProps)
    _init (config?: ContextManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(main_context: GLib.MainContext | null, port: number): ContextManager
    static create(port: number): ContextManager
    static $gtype: GObject.Type
}
interface ControlPoint_ConstructProps extends GSSDP.ResourceBrowser_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.ControlPoint */
    resource_factory?: ResourceFactory
}
class ControlPoint {
    /* Properties of GSSDP-1.0.GSSDP.ResourceBrowser */
    active: boolean
    mx: number
    target: string
    /* Fields of GSSDP-1.0.GSSDP.ResourceBrowser */
    readonly parent: GObject.Object
    readonly priv: GSSDP.ResourceBrowserPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.ControlPoint */
    get_context(): Context
    get_resource_factory(): ResourceFactory
    list_device_proxies(): DeviceProxy[]
    list_service_proxies(): ServiceProxy[]
    /* Methods of GSSDP-1.0.GSSDP.ResourceBrowser */
    get_active(): boolean
    get_client(): GSSDP.Client
    get_mx(): number
    get_target(): string
    rescan(): boolean
    set_active(active: boolean): void
    set_mx(mx: number): void
    set_target(target: string): void
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
    /* Virtual methods of GUPnP-1.0.GUPnP.ControlPoint */
    vfunc_device_proxy_available(proxy: DeviceProxy): void
    vfunc_device_proxy_unavailable(proxy: DeviceProxy): void
    vfunc_service_proxy_available(proxy: ServiceProxy): void
    vfunc_service_proxy_unavailable(proxy: ServiceProxy): void
    /* Virtual methods of GSSDP-1.0.GSSDP.ResourceBrowser */
    vfunc_resource_unavailable(usn: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP-1.0.GUPnP.ControlPoint */
    connect(sigName: "device-proxy-available", callback: (($obj: ControlPoint, proxy: DeviceProxy) => void)): number
    connect_after(sigName: "device-proxy-available", callback: (($obj: ControlPoint, proxy: DeviceProxy) => void)): number
    emit(sigName: "device-proxy-available", proxy: DeviceProxy): void
    connect(sigName: "device-proxy-unavailable", callback: (($obj: ControlPoint, proxy: DeviceProxy) => void)): number
    connect_after(sigName: "device-proxy-unavailable", callback: (($obj: ControlPoint, proxy: DeviceProxy) => void)): number
    emit(sigName: "device-proxy-unavailable", proxy: DeviceProxy): void
    connect(sigName: "service-proxy-available", callback: (($obj: ControlPoint, proxy: ServiceProxy) => void)): number
    connect_after(sigName: "service-proxy-available", callback: (($obj: ControlPoint, proxy: ServiceProxy) => void)): number
    emit(sigName: "service-proxy-available", proxy: ServiceProxy): void
    connect(sigName: "service-proxy-unavailable", callback: (($obj: ControlPoint, proxy: ServiceProxy) => void)): number
    connect_after(sigName: "service-proxy-unavailable", callback: (($obj: ControlPoint, proxy: ServiceProxy) => void)): number
    emit(sigName: "service-proxy-unavailable", proxy: ServiceProxy): void
    /* Signals of GSSDP-1.0.GSSDP.ResourceBrowser */
    connect(sigName: "resource-available", callback: (($obj: ControlPoint, usn: string, locations: string[]) => void)): number
    connect_after(sigName: "resource-available", callback: (($obj: ControlPoint, usn: string, locations: string[]) => void)): number
    emit(sigName: "resource-available", usn: string, locations: string[]): void
    connect(sigName: "resource-unavailable", callback: (($obj: ControlPoint, usn: string) => void)): number
    connect_after(sigName: "resource-unavailable", callback: (($obj: ControlPoint, usn: string) => void)): number
    emit(sigName: "resource-unavailable", usn: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mx", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mx", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::target", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ControlPoint_ConstructProps)
    _init (config?: ControlPoint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context, target: string): ControlPoint
    /* Function overloads */
    static new(client: GSSDP.Client, target: string): ControlPoint
    static new_full(context: Context, factory: ResourceFactory, target: string): ControlPoint
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends DeviceInfo_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.Device */
    root_device?: RootDevice
}
class Device {
    /* Fields of GUPnP-1.0.GUPnP.DeviceInfo */
    readonly parent: GObject.Object
    readonly priv: DeviceInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.DeviceInfo */
    get_context(): Context
    get_description_value(element: string): string
    get_device(type: string): DeviceInfo | null
    get_device_type(): string
    get_friendly_name(): string
    get_icon_url(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean): [ /* returnType */ string, /* mime_type */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    get_location(): string
    get_manufacturer(): string
    get_manufacturer_url(): string
    get_model_description(): string
    get_model_name(): string
    get_model_number(): string
    get_model_url(): string
    get_presentation_url(): string
    get_resource_factory(): ResourceFactory
    get_serial_number(): string
    get_service(type: string): ServiceInfo
    get_udn(): string
    get_upc(): string
    get_url_base(): Soup.URI
    list_device_types(): string[]
    list_devices(): DeviceInfo[]
    list_dlna_capabilities(): string[]
    list_dlna_device_class_identifier(): string[]
    list_service_types(): string[]
    list_services(): ServiceInfo[]
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
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    static $gtype: GObject.Type
}
interface DeviceInfo_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.DeviceInfo */
    context?: Context
    device_type?: string
    document?: XMLDoc
    element?: object
    location?: string
    resource_factory?: ResourceFactory
    udn?: string
    url_base?: Soup.URI
}
class DeviceInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.DeviceInfo */
    get_context(): Context
    get_description_value(element: string): string
    get_device(type: string): DeviceInfo | null
    get_device_type(): string
    get_friendly_name(): string
    get_icon_url(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean): [ /* returnType */ string, /* mime_type */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    get_location(): string
    get_manufacturer(): string
    get_manufacturer_url(): string
    get_model_description(): string
    get_model_name(): string
    get_model_number(): string
    get_model_url(): string
    get_presentation_url(): string
    get_resource_factory(): ResourceFactory
    get_serial_number(): string
    get_service(type: string): ServiceInfo
    get_udn(): string
    get_upc(): string
    get_url_base(): Soup.URI
    list_device_types(): string[]
    list_devices(): DeviceInfo[]
    list_dlna_capabilities(): string[]
    list_dlna_device_class_identifier(): string[]
    list_service_types(): string[]
    list_services(): ServiceInfo[]
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
    connect(sigName: "notify", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceInfo_ConstructProps)
    _init (config?: DeviceInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface DeviceProxy_ConstructProps extends DeviceInfo_ConstructProps {
}
class DeviceProxy {
    /* Fields of GUPnP-1.0.GUPnP.DeviceInfo */
    readonly parent: GObject.Object
    readonly priv: DeviceInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.DeviceInfo */
    get_context(): Context
    get_description_value(element: string): string
    get_device(type: string): DeviceInfo | null
    get_device_type(): string
    get_friendly_name(): string
    get_icon_url(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean): [ /* returnType */ string, /* mime_type */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    get_location(): string
    get_manufacturer(): string
    get_manufacturer_url(): string
    get_model_description(): string
    get_model_name(): string
    get_model_number(): string
    get_model_url(): string
    get_presentation_url(): string
    get_resource_factory(): ResourceFactory
    get_serial_number(): string
    get_service(type: string): ServiceInfo
    get_udn(): string
    get_upc(): string
    get_url_base(): Soup.URI
    list_device_types(): string[]
    list_devices(): DeviceInfo[]
    list_dlna_capabilities(): string[]
    list_dlna_device_class_identifier(): string[]
    list_service_types(): string[]
    list_services(): ServiceInfo[]
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
    connect(sigName: "notify", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceProxy_ConstructProps)
    _init (config?: DeviceProxy_ConstructProps): void
    static $gtype: GObject.Type
}
interface ResourceFactory_ConstructProps extends GObject.Object_ConstructProps {
}
class ResourceFactory {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.ResourceFactory */
    register_resource_proxy_type(upnp_type: string, type: GObject.Type): void
    register_resource_type(upnp_type: string, type: GObject.Type): void
    unregister_resource_proxy_type(upnp_type: string): boolean
    unregister_resource_type(upnp_type: string): boolean
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
    connect(sigName: "notify", callback: (($obj: ResourceFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResourceFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ResourceFactory_ConstructProps)
    _init (config?: ResourceFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ResourceFactory
    static get_default(): ResourceFactory
    static $gtype: GObject.Type
}
interface RootDevice_ConstructProps extends Device_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.RootDevice */
    available?: boolean
    description_dir?: string
    description_doc?: XMLDoc
    description_path?: string
}
class RootDevice {
    /* Properties of GUPnP-1.0.GUPnP.RootDevice */
    available: boolean
    /* Fields of GUPnP-1.0.GUPnP.Device */
    readonly parent: DeviceInfo
    readonly priv: DevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.RootDevice */
    get_available(): boolean
    get_description_dir(): string
    get_description_path(): string
    get_relative_location(): string
    get_ssdp_resource_group(): GSSDP.ResourceGroup
    set_available(available: boolean): void
    /* Methods of GUPnP-1.0.GUPnP.DeviceInfo */
    get_context(): Context
    get_description_value(element: string): string
    get_device(type: string): DeviceInfo | null
    get_device_type(): string
    get_friendly_name(): string
    get_icon_url(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean): [ /* returnType */ string, /* mime_type */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    get_location(): string
    get_manufacturer(): string
    get_manufacturer_url(): string
    get_model_description(): string
    get_model_name(): string
    get_model_number(): string
    get_model_url(): string
    get_presentation_url(): string
    get_resource_factory(): ResourceFactory
    get_serial_number(): string
    get_service(type: string): ServiceInfo
    get_udn(): string
    get_upc(): string
    get_url_base(): Soup.URI
    list_device_types(): string[]
    list_devices(): DeviceInfo[]
    list_dlna_capabilities(): string[]
    list_dlna_device_class_identifier(): string[]
    list_service_types(): string[]
    list_services(): ServiceInfo[]
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
    connect(sigName: "notify", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RootDevice_ConstructProps)
    _init (config?: RootDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context, description_path: string, description_dir: string): RootDevice
    static new_full(context: Context, factory: ResourceFactory, description_doc: XMLDoc, description_path: string, description_dir: string): RootDevice
    static $gtype: GObject.Type
}
interface Service_ConstructProps extends ServiceInfo_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.Service */
    root_device?: RootDevice
}
class Service {
    /* Fields of GUPnP-1.0.GUPnP.ServiceInfo */
    readonly parent: GObject.Object
    readonly priv: ServiceInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.Service */
    freeze_notify(): void
    notify_value(variable: string, value: any): void
    signals_autoconnect(user_data?: object | null): void
    thaw_notify(): void
    /* Methods of GUPnP-1.0.GUPnP.ServiceInfo */
    get_context(): Context
    get_control_url(): string
    get_event_subscription_url(): string
    get_id(): string
    get_introspection(): ServiceIntrospection
    get_introspection_async(callback: ServiceIntrospectionCallback): void
    get_introspection_async_full(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    get_location(): string
    get_scpd_url(): string
    get_service_type(): string
    get_udn(): string
    get_url_base(): Soup.URI
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
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
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GUPnP-1.0.GUPnP.Service */
    vfunc_action_invoked(action: ServiceAction): void
    vfunc_query_variable(variable: string, value: any): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP-1.0.GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: Service, action: ServiceAction) => void)): number
    connect_after(sigName: "action-invoked", callback: (($obj: Service, action: ServiceAction) => void)): number
    emit(sigName: "action-invoked", action: ServiceAction): void
    connect(sigName: "notify-failed", callback: (($obj: Service, callback_url: Soup.URI[], reason: GLib.Error) => void)): number
    connect_after(sigName: "notify-failed", callback: (($obj: Service, callback_url: Soup.URI[], reason: GLib.Error) => void)): number
    emit(sigName: "notify-failed", callback_url: Soup.URI[], reason: GLib.Error): void
    connect(sigName: "query-variable", callback: (($obj: Service, variable: string, value: any) => void)): number
    connect_after(sigName: "query-variable", callback: (($obj: Service, variable: string, value: any) => void)): number
    emit(sigName: "query-variable", variable: string, value: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    static $gtype: GObject.Type
}
interface ServiceInfo_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.ServiceInfo */
    context?: Context
    document?: XMLDoc
    element?: object
    location?: string
    service_type?: string
    udn?: string
    url_base?: Soup.URI
}
class ServiceInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.ServiceInfo */
    get_context(): Context
    get_control_url(): string
    get_event_subscription_url(): string
    get_id(): string
    get_introspection(): ServiceIntrospection
    get_introspection_async(callback: ServiceIntrospectionCallback): void
    get_introspection_async_full(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    get_location(): string
    get_scpd_url(): string
    get_service_type(): string
    get_udn(): string
    get_url_base(): Soup.URI
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
    connect(sigName: "notify", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServiceInfo_ConstructProps)
    _init (config?: ServiceInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface ServiceIntrospection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.ServiceIntrospection */
    scpd?: object
}
class ServiceIntrospection {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.ServiceIntrospection */
    get_action(action_name: string): ServiceActionInfo
    get_state_variable(variable_name: string): ServiceStateVariableInfo
    list_action_names(): string[]
    list_actions(): ServiceActionInfo[]
    list_state_variable_names(): string[]
    list_state_variables(): ServiceStateVariableInfo[]
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
    connect(sigName: "notify", callback: (($obj: ServiceIntrospection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServiceIntrospection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServiceIntrospection_ConstructProps)
    _init (config?: ServiceIntrospection_ConstructProps): void
    static $gtype: GObject.Type
}
interface ServiceProxy_ConstructProps extends ServiceInfo_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.ServiceProxy */
    subscribed?: boolean
}
class ServiceProxy {
    /* Properties of GUPnP-1.0.GUPnP.ServiceProxy */
    subscribed: boolean
    /* Fields of GUPnP-1.0.GUPnP.ServiceInfo */
    readonly parent: GObject.Object
    readonly priv: ServiceInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.ServiceProxy */
    add_notify(variable: string, type: GObject.Type, callback: ServiceProxyNotifyCallback): boolean
    add_raw_notify(callback: ServiceProxyNotifyCallback): boolean
    begin_action_list(action: string, in_names: string[], in_values: any[], callback: ServiceProxyActionCallback): ServiceProxyAction
    cancel_action(action: ServiceProxyAction): void
    end_action_hash(action: ServiceProxyAction, hash: GLib.HashTable): [ /* returnType */ boolean, /* hash */ GLib.HashTable ]
    end_action_list(action: ServiceProxyAction, out_names: string[], out_types: GObject.Type[]): [ /* returnType */ boolean, /* out_values */ any[] ]
    get_subscribed(): boolean
    remove_notify(variable: string, callback: ServiceProxyNotifyCallback): boolean
    remove_raw_notify(callback: ServiceProxyNotifyCallback): boolean
    send_action_list(action: string, in_names: string[], in_values: any[], out_names: string[], out_types: GObject.Type[]): [ /* returnType */ boolean, /* out_values */ any[] ]
    set_subscribed(subscribed: boolean): void
    /* Methods of GUPnP-1.0.GUPnP.ServiceInfo */
    get_context(): Context
    get_control_url(): string
    get_event_subscription_url(): string
    get_id(): string
    get_introspection(): ServiceIntrospection
    get_introspection_async(callback: ServiceIntrospectionCallback): void
    get_introspection_async_full(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    get_location(): string
    get_scpd_url(): string
    get_service_type(): string
    get_udn(): string
    get_url_base(): Soup.URI
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
    /* Virtual methods of GUPnP-1.0.GUPnP.ServiceProxy */
    vfunc_subscription_lost(reason: GLib.Error): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP-1.0.GUPnP.ServiceProxy */
    connect(sigName: "subscription-lost", callback: (($obj: ServiceProxy, error: GLib.Error) => void)): number
    connect_after(sigName: "subscription-lost", callback: (($obj: ServiceProxy, error: GLib.Error) => void)): number
    emit(sigName: "subscription-lost", error: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::subscribed", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subscribed", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServiceProxy_ConstructProps)
    _init (config?: ServiceProxy_ConstructProps): void
    static $gtype: GObject.Type
}
interface WhiteList_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.WhiteList */
    enabled?: boolean
    entries?: string[]
}
class WhiteList {
    /* Properties of GUPnP-1.0.GUPnP.WhiteList */
    enabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.WhiteList */
    add_entry(entry: string): boolean
    add_entryv(entries: string[]): void
    check_context(context: Context): boolean
    clear(): void
    get_enabled(): boolean
    get_entries(): string[]
    is_empty(): boolean
    remove_entry(entry: string): boolean
    set_enabled(enable: boolean): void
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
    connect(sigName: "notify", callback: (($obj: WhiteList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WhiteList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: (($obj: WhiteList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: WhiteList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WhiteList_ConstructProps)
    _init (config?: WhiteList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WhiteList
    static $gtype: GObject.Type
}
interface XMLDoc_ConstructProps extends GObject.Object_ConstructProps {
}
class XMLDoc {
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
    connect(sigName: "notify", callback: (($obj: XMLDoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XMLDoc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XMLDoc_ConstructProps)
    _init (config?: XMLDoc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(xml_doc: libxml2.Doc): XMLDoc
    static new_from_path(path: string): XMLDoc
    static $gtype: GObject.Type
}
abstract class AclInterface {
    /* Fields of GUPnP-1.0.GUPnP.AclInterface */
    readonly parent: GObject.TypeInterface
    readonly is_allowed: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent?: string | null) => boolean
    readonly is_allowed_async: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly is_allowed_finish: (self: Acl, res: Gio.AsyncResult) => boolean
    readonly can_sync: (self: Acl) => boolean
    static name: string
}
abstract class ContextClass {
    /* Fields of GUPnP-1.0.GUPnP.ContextClass */
    readonly parent_class: GSSDP.ClientClass
    static name: string
}
abstract class ContextManagerClass {
    /* Fields of GUPnP-1.0.GUPnP.ContextManagerClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class ContextManagerPrivate {
    static name: string
}
class ContextPrivate {
    static name: string
}
abstract class ControlPointClass {
    /* Fields of GUPnP-1.0.GUPnP.ControlPointClass */
    readonly parent_class: GSSDP.ResourceBrowserClass
    readonly device_proxy_available: (control_point: ControlPoint, proxy: DeviceProxy) => void
    readonly device_proxy_unavailable: (control_point: ControlPoint, proxy: DeviceProxy) => void
    readonly service_proxy_available: (control_point: ControlPoint, proxy: ServiceProxy) => void
    readonly service_proxy_unavailable: (control_point: ControlPoint, proxy: ServiceProxy) => void
    static name: string
}
class ControlPointPrivate {
    static name: string
}
abstract class DeviceClass {
    /* Fields of GUPnP-1.0.GUPnP.DeviceClass */
    readonly parent_class: DeviceInfoClass
    static name: string
}
abstract class DeviceInfoClass {
    /* Fields of GUPnP-1.0.GUPnP.DeviceInfoClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class DeviceInfoPrivate {
    static name: string
}
class DevicePrivate {
    static name: string
}
abstract class DeviceProxyClass {
    /* Fields of GUPnP-1.0.GUPnP.DeviceProxyClass */
    readonly parent_class: DeviceInfoClass
    static name: string
}
class DeviceProxyPrivate {
    static name: string
}
abstract class ResourceFactoryClass {
    /* Fields of GUPnP-1.0.GUPnP.ResourceFactoryClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class ResourceFactoryPrivate {
    static name: string
}
abstract class RootDeviceClass {
    /* Fields of GUPnP-1.0.GUPnP.RootDeviceClass */
    readonly parent_class: DeviceClass
    static name: string
}
class RootDevicePrivate {
    static name: string
}
class ServiceAction {
    /* Methods of GUPnP-1.0.GUPnP.ServiceAction */
    get_argument_count(): number
    get_value(argument: string, type: GObject.Type): any
    get_locales(): string[]
    get_message(): Soup.Message
    get_name(): string
    get_values(arg_names: string[], arg_types: GObject.Type[]): any[]
    return(): void
    return_error(error_code: number, error_description: string): void
    set_value(argument: string, value: any): void
    set_values(arg_names: string[], arg_values: any[]): void
    static name: string
}
class ServiceActionArgInfo {
    /* Fields of GUPnP-1.0.GUPnP.ServiceActionArgInfo */
    readonly name: string
    readonly direction: ServiceActionArgDirection
    readonly related_state_variable: string
    readonly retval: boolean
    static name: string
}
class ServiceActionInfo {
    /* Fields of GUPnP-1.0.GUPnP.ServiceActionInfo */
    readonly name: string
    readonly arguments_: ServiceActionArgInfo[]
    static name: string
}
abstract class ServiceClass {
    /* Fields of GUPnP-1.0.GUPnP.ServiceClass */
    readonly parent_class: ServiceInfoClass
    readonly action_invoked: (service: Service, action: ServiceAction) => void
    readonly query_variable: (service: Service, variable: string, value: any) => void
    static name: string
}
abstract class ServiceInfoClass {
    /* Fields of GUPnP-1.0.GUPnP.ServiceInfoClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class ServiceInfoPrivate {
    static name: string
}
abstract class ServiceIntrospectionClass {
    /* Fields of GUPnP-1.0.GUPnP.ServiceIntrospectionClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class ServiceIntrospectionPrivate {
    static name: string
}
class ServicePrivate {
    static name: string
}
class ServiceProxyAction {
    static name: string
}
abstract class ServiceProxyClass {
    /* Fields of GUPnP-1.0.GUPnP.ServiceProxyClass */
    readonly parent_class: ServiceInfoClass
    readonly subscription_lost: (proxy: ServiceProxy, reason: GLib.Error) => void
    static name: string
}
class ServiceProxyPrivate {
    static name: string
}
class ServiceStateVariableInfo {
    /* Fields of GUPnP-1.0.GUPnP.ServiceStateVariableInfo */
    readonly name: string
    readonly send_events: boolean
    readonly is_numeric: boolean
    readonly type: GObject.Type
    readonly default_value: any
    readonly minimum: any
    readonly maximum: any
    readonly step: any
    readonly allowed_values: string[]
    static name: string
}
abstract class WhiteListClass {
    /* Fields of GUPnP-1.0.GUPnP.WhiteListClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class WhiteListPrivate {
    static name: string
}
abstract class XMLDocClass {
    /* Fields of GUPnP-1.0.GUPnP.XMLDocClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
}
export default GUPnP;