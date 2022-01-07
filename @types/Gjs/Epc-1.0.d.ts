/**
 * Epc-1.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Epc {

enum AddressFamily {
    UNSPEC,
    IPV4,
    IPV6,
}
enum CollisionHandling {
    IGNORE,
    CHANGE_NAME,
    UNIQUE_SERVICE,
}
enum Protocol {
    UNKNOWN,
    HTTP,
    HTTPS,
}
enum AuthFlags {
    DEFAULT,
    PASSWORD_TEXT_NEEDED,
}
export const SERVICE_TYPE_HTTP: string
export const SERVICE_TYPE_HTTPS: string
export const TLS_SECONDS_PER_DAY: number
export const TLS_SECONDS_PER_HOUR: number
export const TLS_SECONDS_PER_MINUTE: number
function address_family_to_string(value: AddressFamily): string
function auth_flags_to_string(value: AuthFlags): string
function avahi_error_quark(): GLib.Quark
function collision_handling_to_string(value: CollisionHandling): string
function http_error_quark(): GLib.Quark
function protocol_build_uri(protocol: Protocol, hostname: string, port: number, path: string): string
function protocol_from_name(name: string, fallback: Protocol): Protocol
function protocol_get_service_type(protocol: Protocol): string
function protocol_get_uri_scheme(protocol: Protocol): string
function protocol_to_string(value: Protocol): string
function service_type_get_base(type: string): string
function service_type_get_protocol(service_type: string): Protocol
function service_type_new(protocol: Protocol, application: string): string
function shell_get_debug_level(): number
function shell_get_host_name(): string
function shell_progress_begin(title: string, message: string): void
function shell_progress_end(): void
function shell_progress_update(percentage: number, message: string): void
function shell_restart_avahi_client(strloc: string): void
function shell_set_progress_hooks(hooks: ShellProgressHooks, user_data: object, destroy_data: GLib.DestroyNotify): void
function shell_watch_remove(id: number): void
function tls_error_quark(): GLib.Quark
function tls_get_certificate_filename(hostname: string): string
function tls_get_private_key_filename(hostname: string): string
function tls_get_server_credentials(hostname: string, crtfile: string, keyfile: string): boolean
interface AuthHandler {
    (context: AuthContext, username: string): boolean
}
interface ContentsHandler {
    (publisher: Publisher, key: string): Contents
}
interface ContentsReadFunc {
    (contents: Contents, buffer: object, length: number): boolean
}
export interface Consumer_ConstructProps extends GObject.Object_ConstructProps {
    application?: string
    domain?: string
    hostname?: string
    name?: string
    password?: string
    path?: string
    port?: number
    protocol?: Protocol
    username?: string
}
class Consumer {
    /* Properties of Epc-1.0.Epc.Consumer */
    password: string
    protocol: Protocol
    username: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Epc-1.0.Epc.Consumer */
    get_password(): string
    get_protocol(): Protocol
    get_username(): string
    is_publisher_resolved(): boolean
    resolve_publisher(timeout: number): boolean
    set_password(password: string): void
    set_protocol(protocol: Protocol): void
    set_username(username: string): void
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
    /* Virtual methods of Epc-1.0.Epc.Consumer */
    vfunc_authenticate(realm: string): void
    vfunc_publisher_resolved(protocol: Protocol, hostname: string, port: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Epc-1.0.Epc.Consumer */
    connect(sigName: "authenticate", callback: (($obj: Consumer, object: string) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: Consumer, object: string) => boolean)): number
    emit(sigName: "authenticate", object: string): void
    connect(sigName: "publisher-resolved", callback: (($obj: Consumer, object: Protocol, p0: string, p1: number) => void)): number
    connect_after(sigName: "publisher-resolved", callback: (($obj: Consumer, object: Protocol, p0: string, p1: number) => void)): number
    emit(sigName: "publisher-resolved", object: Protocol, p0: string, p1: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::password", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Consumer_ConstructProps)
    _init (config?: Consumer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service: ServiceInfo): Consumer
    static new_for_name(name: string): Consumer
    static new_for_name_full(name: string, application: string, domain: string): Consumer
    static $gtype: GObject.Type
}
export interface Dispatcher_ConstructProps extends GObject.Object_ConstructProps {
    collision_handling?: CollisionHandling
    cookie?: string
    name?: string
}
class Dispatcher {
    /* Properties of Epc-1.0.Epc.Dispatcher */
    collision_handling: CollisionHandling
    cookie: string
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Epc-1.0.Epc.Dispatcher */
    add_service_subtype(type: string, subtype: string): void
    get_collision_handling(): CollisionHandling
    get_cookie(): string
    get_name(): string
    reset(): void
    run(): boolean
    set_collision_handling(method: CollisionHandling): void
    set_cookie(cookie: string): void
    set_name(name: string): void
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
    connect(sigName: "notify", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::collision-handling", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collision-handling", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cookie", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cookie", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Dispatcher_ConstructProps)
    _init (config?: Dispatcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): Dispatcher
    static $gtype: GObject.Type
}
export interface Publisher_ConstructProps extends GObject.Object_ConstructProps {
    application?: string
    auth_flags?: AuthFlags
    certificate_file?: string
    collision_handling?: CollisionHandling
    contents_path?: string
    private_key_file?: string
    protocol?: Protocol
    service_cookie?: string
    service_domain?: string
    service_name?: string
}
class Publisher {
    /* Properties of Epc-1.0.Epc.Publisher */
    application: string
    auth_flags: AuthFlags
    certificate_file: string
    collision_handling: CollisionHandling
    contents_path: string
    private_key_file: string
    protocol: Protocol
    service_cookie: string
    service_domain: string
    service_name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Epc-1.0.Epc.Publisher */
    add(key: string, data: object, length: number): void
    add_bookmark(key: string, label: string): void
    add_file(key: string, filename: string): void
    add_handler(key: string, handler: ContentsHandler): void
    get_auth_flags(): AuthFlags
    get_certificate_file(): string
    get_collision_handling(): CollisionHandling
    get_contents_path(): string
    get_path(key: string): string
    get_private_key_file(): string
    get_protocol(): Protocol
    get_service_cookie(): string
    get_service_domain(): string
    get_service_name(): string
    get_uri(key: string): string
    has_key(key: string): boolean
    quit(): boolean
    remove(key: string): boolean
    run(): boolean
    run_async(): boolean
    set_auth_flags(flags: AuthFlags): void
    set_auth_handler(key: string, handler: AuthHandler): void
    set_collision_handling(method: CollisionHandling): void
    set_contents_path(path: string): void
    set_credentials(certfile: string, keyfile: string): void
    set_protocol(protocol: Protocol): void
    set_service_cookie(cookie: string): void
    set_service_name(name: string): void
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
    connect(sigName: "notify", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auth-flags", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-flags", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::certificate-file", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate-file", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::collision-handling", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collision-handling", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contents-path", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents-path", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::private-key-file", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-file", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service-cookie", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-cookie", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service-domain", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-domain", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service-name", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Publisher_ConstructProps)
    _init (config?: Publisher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, application: string, domain: string): Publisher
    static expand_name(name: string): string
    static $gtype: GObject.Type
}
export interface ServiceMonitor_ConstructProps extends GObject.Object_ConstructProps {
    application?: string
    domain?: string
    service_types?: string[]
    skip_our_own?: boolean
}
class ServiceMonitor {
    /* Properties of Epc-1.0.Epc.ServiceMonitor */
    skip_our_own: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Epc-1.0.Epc.ServiceMonitor */
    get_skip_our_own(): boolean
    set_skip_our_own(setting: boolean): void
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
    /* Virtual methods of Epc-1.0.Epc.ServiceMonitor */
    vfunc_scanning_done(type: string): void
    vfunc_service_found(name: string, info: ServiceInfo): void
    vfunc_service_removed(name: string, type: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Epc-1.0.Epc.ServiceMonitor */
    connect(sigName: "scanning-done", callback: (($obj: ServiceMonitor, object: string) => void)): number
    connect_after(sigName: "scanning-done", callback: (($obj: ServiceMonitor, object: string) => void)): number
    emit(sigName: "scanning-done", object: string): void
    connect(sigName: "service-found", callback: (($obj: ServiceMonitor, object: string, p0: ServiceInfo) => void)): number
    connect_after(sigName: "service-found", callback: (($obj: ServiceMonitor, object: string, p0: ServiceInfo) => void)): number
    emit(sigName: "service-found", object: string, p0: ServiceInfo): void
    connect(sigName: "service-removed", callback: (($obj: ServiceMonitor, object: string, p0: string) => void)): number
    connect_after(sigName: "service-removed", callback: (($obj: ServiceMonitor, object: string, p0: string) => void)): number
    emit(sigName: "service-removed", object: string, p0: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::skip-our-own", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-our-own", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServiceMonitor_ConstructProps)
    _init (config?: ServiceMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_types_strv(domain: string, types: string): ServiceMonitor
    static $gtype: GObject.Type
}
class AuthContext {
    /* Methods of Epc-1.0.Epc.AuthContext */
    check_password(password: string): boolean
    get_key(): string
    get_password(): string
    static name: string
}
abstract class ConsumerClass {
    /* Fields of Epc-1.0.Epc.ConsumerClass */
    authenticate: (consumer: Consumer, realm: string) => void
    publisher_resolved: (consumer: Consumer, protocol: Protocol, hostname: string, port: number) => void
    static name: string
}
class ConsumerPrivate {
    static name: string
}
class Contents {
    /* Methods of Epc-1.0.Epc.Contents */
    get_mime_type(): string
    is_stream(): boolean
    ref(): Contents
    unref(): void
    static name: string
    static new(type: string, data: object, length: number, destroy_data: GLib.DestroyNotify): Contents
    constructor(type: string, data: object, length: number, destroy_data: GLib.DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(type: string, data: object, length: number, destroy_data: GLib.DestroyNotify): Contents
    static new_dup(type: string, data: object, length: number): Contents
    static stream_new(type: string, callback: ContentsReadFunc): Contents
}
abstract class DispatcherClass {
    static name: string
}
class DispatcherPrivate {
    static name: string
}
abstract class PublisherClass {
    static name: string
}
class PublisherPrivate {
    static name: string
}
class ServiceInfo {
    /* Methods of Epc-1.0.Epc.ServiceInfo */
    get_address_family(): AddressFamily
    get_detail(name: string): string
    get_host(): string
    get_interface(): string
    get_port(): number
    get_service_type(): string
    ref(): ServiceInfo
    unref(): void
    static name: string
}
abstract class ServiceMonitorClass {
    /* Fields of Epc-1.0.Epc.ServiceMonitorClass */
    service_found: (monitor: ServiceMonitor, name: string, info: ServiceInfo) => void
    service_removed: (monitor: ServiceMonitor, name: string, type: string) => void
    scanning_done: (monitor: ServiceMonitor, type: string) => void
    static name: string
}
class ServiceMonitorPrivate {
    static name: string
}
class ShellProgressHooks {
    /* Fields of Epc-1.0.Epc.ShellProgressHooks */
    begin: (title: string) => void
    update: (percentage: number, message: string) => void
    end: () => void
    static name: string
}
}
export default Epc;