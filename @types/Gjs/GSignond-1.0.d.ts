/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GSignond-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GSignond {

enum Error {
    NONE,
    UNKNOWN,
    INTERNAL_SERVER,
    INTERNAL_COMMUNICATION,
    PERMISSION_DENIED,
    ENCRYPTION_FAILURE,
    AUTH_SERVICE_ERR,
    METHOD_NOT_KNOWN,
    SERVICE_NOT_AVAILABLE,
    INVALID_QUERY,
    IDENTITY_ERR,
    METHOD_NOT_AVAILABLE,
    IDENTITY_NOT_FOUND,
    STORE_FAILED,
    REMOVE_FAILED,
    SIGN_OUT_FAILED,
    IDENTITY_OPERATION_CANCELED,
    CREDENTIALS_NOT_AVAILABLE,
    REFERENCE_NOT_FOUND,
    AUTH_SESSION_ERR,
    MECHANISM_NOT_AVAILABLE,
    MISSING_DATA,
    INVALID_CREDENTIALS,
    NOT_AUTHORIZED,
    WRONG_STATE,
    OPERATION_NOT_SUPPORTED,
    NO_CONNECTION,
    NETWORK,
    SSL,
    RUNTIME,
    SESSION_CANCELED,
    TIMED_OUT,
    USER_INTERACTION,
    OPERATION_FAILED,
    ENCRYPTION_FAILED,
    TOS_NOT_ACCEPTED,
    FORGOT_PASSWORD,
    METHOD_OR_MECHANISM_NOT_ALLOWED,
    INCORRECT_DATE,
    USER_ERR,
}
enum PluginState {
    NONE,
    RESOLVING,
    CONNECTING,
    SENDING_DATA,
    WAITING,
    USER_PENDING,
    REFRESHING,
    PROCESS_PENDING,
    STARTED,
    CANCELING,
    DONE,
    HOLDING,
}
enum SignonuiError {
    NONE,
    GENERAL,
    NO_SIGNONUI,
    BAD_PARAMETERS,
    CANCELED,
    NOT_AVAILABLE,
    BAD_URL,
    BAD_CAPTCHA,
    BAD_CAPTCHA_URL,
    REFRESH_FAILED,
    FORBIDDEN,
    FORGOT_PASSWORD,
}
enum UiPolicy {
    DEFAULT,
    REQUEST_PASSWORD,
    NO_USER_INTERACTION,
    VALIDATION,
}
const CONFIG_DBUS_TIMEOUTS: string
const CONFIG_GENERAL: string
function error_new_from_variant(var_: GLib.Variant): GLib.Error | null
function error_quark(): GLib.Quark
function error_to_variant(error: GLib.Error): GLib.Variant | null
function generate_nonce(): string
function is_host_in_domain(host: string, domain: string): boolean
function new_io_stream_from_fd(in_fd: number, out_fd: number, close_fds: boolean): Gio.IOStream
function security_context_from_variant(variant: GLib.Variant): SecurityContext
function sequence_to_array(seq: GLib.Sequence): string[]
function wipe_directory(dirname: string): boolean
function wipe_file(filename: string): boolean
class Plugin {
    /* Properties of GSignond-1.0.GSignond.Plugin */
    readonly mechanisms: string[]
    readonly type: string
    /* Methods of GSignond-1.0.GSignond.Plugin */
    cancel(): void
    error(error: GLib.Error): void
    refresh(ui_data: SignonuiData): void
    refreshed(ui_data: SignonuiData): void
    request(session_data: SessionData): void
    request_initial(session_data: SessionData, identity_method_cache: Dictionary, mechanism: string): void
    response(session_data: SessionData): void
    response_final(session_data: SessionData): void
    status_changed(state: PluginState, message: string): void
    store(identity_method_cache: Dictionary): void
    user_action_finished(ui_data: SignonuiData): void
    user_action_required(ui_data: SignonuiData): void
    /* Virtual methods of GSignond-1.0.GSignond.Plugin */
    vfunc_cancel(): void
    vfunc_refresh(ui_data: SignonuiData): void
    vfunc_request(session_data: SessionData): void
    vfunc_request_initial(session_data: SessionData, identity_method_cache: Dictionary, mechanism: string): void
    vfunc_user_action_finished(ui_data: SignonuiData): void
    /* Signals of GSignond-1.0.GSignond.Plugin */
    connect(sigName: "error", callback: (($obj: Plugin, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Plugin, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "refreshed", callback: (($obj: Plugin, ui_data: SignonuiData) => void)): number
    connect_after(sigName: "refreshed", callback: (($obj: Plugin, ui_data: SignonuiData) => void)): number
    emit(sigName: "refreshed", ui_data: SignonuiData): void
    connect(sigName: "response", callback: (($obj: Plugin, session_data: SessionData) => void)): number
    connect_after(sigName: "response", callback: (($obj: Plugin, session_data: SessionData) => void)): number
    emit(sigName: "response", session_data: SessionData): void
    connect(sigName: "response-final", callback: (($obj: Plugin, session_data: SessionData) => void)): number
    connect_after(sigName: "response-final", callback: (($obj: Plugin, session_data: SessionData) => void)): number
    emit(sigName: "response-final", session_data: SessionData): void
    connect(sigName: "status-changed", callback: (($obj: Plugin, state: PluginState, message: string) => void)): number
    connect_after(sigName: "status-changed", callback: (($obj: Plugin, state: PluginState, message: string) => void)): number
    emit(sigName: "status-changed", state: PluginState, message: string): void
    connect(sigName: "store", callback: (($obj: Plugin, data: Dictionary) => void)): number
    connect_after(sigName: "store", callback: (($obj: Plugin, data: Dictionary) => void)): number
    emit(sigName: "store", data: Dictionary): void
    connect(sigName: "user-action-required", callback: (($obj: Plugin, ui_data: SignonuiData) => void)): number
    connect_after(sigName: "user-action-required", callback: (($obj: Plugin, ui_data: SignonuiData) => void)): number
    emit(sigName: "user-action-required", ui_data: SignonuiData): void
    static name: string
}
interface AccessControlManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GSignond-1.0.GSignond.AccessControlManager */
    config?: Config
}
class AccessControlManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.AccessControlManager */
    acl_is_valid(peer_ctx: SecurityContext, identity_acl: SecurityContext[]): boolean
    peer_is_allowed_to_use_identity(peer_ctx: SecurityContext, owner_ctx: SecurityContext, identity_acl: SecurityContext[]): boolean
    peer_is_owner_of_identity(peer_ctx: SecurityContext, owner_ctx: SecurityContext): boolean
    security_context_of_keychain(): SecurityContext
    security_context_of_peer(peer_ctx: SecurityContext, peer_fd: number, peer_service: string, peer_app_ctx: string): void
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
    /* Virtual methods of GSignond-1.0.GSignond.AccessControlManager */
    vfunc_acl_is_valid(peer_ctx: SecurityContext, identity_acl: SecurityContext[]): boolean
    vfunc_peer_is_allowed_to_use_identity(peer_ctx: SecurityContext, owner_ctx: SecurityContext, identity_acl: SecurityContext[]): boolean
    vfunc_peer_is_owner_of_identity(peer_ctx: SecurityContext, owner_ctx: SecurityContext): boolean
    vfunc_security_context_of_keychain(): SecurityContext
    vfunc_security_context_of_peer(peer_ctx: SecurityContext, peer_fd: number, peer_service: string, peer_app_ctx: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccessControlManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccessControlManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AccessControlManager_ConstructProps)
    _init (config?: AccessControlManager_ConstructProps): void
    static $gtype: GObject.Type
}
interface Config_ConstructProps extends GObject.Object_ConstructProps {
}
class Config {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.Config */
    get_integer(key: string): number
    get_string(key: string): string | null
    set_integer(key: string, value: number): void
    set_string(key: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Config
    static $gtype: GObject.Type
}
interface Credentials_ConstructProps extends GObject.Object_ConstructProps {
}
class Credentials {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.Credentials */
    equal(two: Credentials): boolean
    get_id(): number
    get_password(): string | null
    get_username(): string | null
    set_data(id: number, username: string, password: string): boolean
    set_id(id: number): boolean
    set_password(password?: string | null): boolean
    set_username(username?: string | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Credentials, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Credentials, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Credentials_ConstructProps)
    _init (config?: Credentials_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Credentials
    static $gtype: GObject.Type
}
interface Dictionary_ConstructProps extends GObject.Object_ConstructProps {
}
class Dictionary {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.Dictionary */
    contains(key: string): boolean
    copy(): Dictionary
    get(key: string): GLib.Variant | null
    get_boolean(key: string): [ /* returnType */ boolean, /* value */ boolean ]
    get_int32(key: string): [ /* returnType */ boolean, /* value */ number ]
    get_int64(key: string): [ /* returnType */ boolean, /* value */ number ]
    get_string(key: string): string | null
    get_table(): GLib.HashTable
    get_uint32(key: string): [ /* returnType */ boolean, /* value */ number ]
    get_uint64(key: string): [ /* returnType */ boolean, /* value */ number ]
    remove(key: string): boolean
    set(key: string, value: GLib.Variant): boolean
    set_boolean(key: string, value: boolean): boolean
    set_int32(key: string, value: number): boolean
    set_int64(key: string, value: number): boolean
    set_string(key: string, value: string): boolean
    set_uint32(key: string, value: number): boolean
    set_uint64(key: string, value: number): boolean
    to_variant(): GLib.Variant | null
    to_variant_builder(): GLib.VariantBuilder | null
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
    connect(sigName: "notify", callback: (($obj: Dictionary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Dictionary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Dictionary_ConstructProps)
    _init (config?: Dictionary_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Dictionary
    static new_from_variant(variant: GLib.Variant): Dictionary
    static $gtype: GObject.Type
}
interface Extension_ConstructProps extends GObject.Object_ConstructProps {
}
class Extension {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.Extension */
    get_access_control_manager(config: Config): AccessControlManager
    get_name(): string
    get_secret_storage(config: Config): SecretStorage
    get_storage_manager(config: Config): StorageManager
    get_version(): number
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
    /* Virtual methods of GSignond-1.0.GSignond.Extension */
    vfunc_get_access_control_manager(config: Config): AccessControlManager
    vfunc_get_extension_name(): string
    vfunc_get_extension_version(): number
    vfunc_get_secret_storage(config: Config): SecretStorage
    vfunc_get_storage_manager(config: Config): StorageManager
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Extension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Extension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Extension_ConstructProps)
    _init (config?: Extension_ConstructProps): void
    static $gtype: GObject.Type
}
interface SecretStorage_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GSignond-1.0.GSignond.SecretStorage */
    config?: Config
}
class SecretStorage {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.SecretStorage */
    check_credentials(creds: Credentials): boolean
    clear_db(): boolean
    close_db(): boolean
    get_last_error(): GLib.Error
    is_open_db(): boolean
    load_credentials(id: number): Credentials | null
    load_data(id: number, method: number): Dictionary
    open_db(): boolean
    remove_credentials(id: number): boolean
    remove_data(id: number, method: number): boolean
    update_credentials(creds: Credentials): boolean
    update_data(id: number, method: number, data: Dictionary): boolean
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
    /* Virtual methods of GSignond-1.0.GSignond.SecretStorage */
    vfunc_check_credentials(creds: Credentials): boolean
    vfunc_clear_db(): boolean
    vfunc_close_db(): boolean
    vfunc_get_last_error(): GLib.Error
    vfunc_is_open_db(): boolean
    vfunc_load_credentials(id: number): Credentials | null
    vfunc_load_data(id: number, method: number): Dictionary
    vfunc_open_db(): boolean
    vfunc_remove_credentials(id: number): boolean
    vfunc_remove_data(id: number, method: number): boolean
    vfunc_update_credentials(creds: Credentials): boolean
    vfunc_update_data(id: number, method: number, data: Dictionary): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SecretStorage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SecretStorage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SecretStorage_ConstructProps)
    _init (config?: SecretStorage_ConstructProps): void
    static $gtype: GObject.Type
}
interface SessionData_ConstructProps extends Dictionary_ConstructProps {
}
class SessionData {
    /* Fields of GSignond-1.0.GSignond.Dictionary */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.SessionData */
    copy(): SessionData
    get_caption(): string
    get_network_proxy(): string
    get_network_timeout(): [ /* returnType */ boolean, /* network_timeout */ number ]
    get_realm(): string
    get_renew_token(): [ /* returnType */ boolean, /* renew_token */ boolean ]
    get_secret(): string
    get_ui_policy(): [ /* returnType */ boolean, /* ui_policy */ UiPolicy ]
    get_username(): string
    get_window_id(): [ /* returnType */ boolean, /* window_id */ number ]
    set_allowed_realms(realms: GLib.Sequence): void
    set_caption(caption: string): void
    set_network_proxy(network_proxy: string): void
    set_network_timeout(network_timeout: number): void
    set_realm(realm: string): void
    set_renew_token(renew_token: boolean): void
    set_secret(secret: string): void
    set_ui_policy(ui_policy: UiPolicy): void
    set_username(username: string): void
    set_window_id(window_id: number): void
    /* Methods of GSignond-1.0.GSignond.Dictionary */
    contains(key: string): boolean
    copy(): Dictionary
    get(key: string): GLib.Variant | null
    get_boolean(key: string): [ /* returnType */ boolean, /* value */ boolean ]
    get_int32(key: string): [ /* returnType */ boolean, /* value */ number ]
    get_int64(key: string): [ /* returnType */ boolean, /* value */ number ]
    get_string(key: string): string | null
    get_table(): GLib.HashTable
    get_uint32(key: string): [ /* returnType */ boolean, /* value */ number ]
    get_uint64(key: string): [ /* returnType */ boolean, /* value */ number ]
    remove(key: string): boolean
    set(key: string, value: GLib.Variant): boolean
    set_boolean(key: string, value: boolean): boolean
    set_int32(key: string, value: number): boolean
    set_int64(key: string, value: number): boolean
    set_string(key: string, value: string): boolean
    set_uint32(key: string, value: number): boolean
    set_uint64(key: string, value: number): boolean
    to_variant(): GLib.Variant | null
    to_variant_builder(): GLib.VariantBuilder | null
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
    connect(sigName: "notify", callback: (($obj: SessionData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SessionData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SessionData_ConstructProps)
    _init (config?: SessionData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SessionData
    /* Function overloads */
    static new(): SessionData
    static new_from_variant(variant: GLib.Variant): SessionData
    /* Function overloads */
    static new_from_variant(variant: GLib.Variant): SessionData
    static $gtype: GObject.Type
}
interface SignonuiData_ConstructProps extends Dictionary_ConstructProps {
}
class SignonuiData {
    /* Fields of GSignond-1.0.GSignond.Dictionary */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.SignonuiData */
    copy(): SignonuiData
    get_captcha_response(): string | null
    get_captcha_url(): string | null
    get_caption(): string | null
    get_confirm(): [ /* returnType */ boolean, /* confirm */ boolean ]
    get_final_url(): string | null
    get_forgot_password(): string | null
    get_forgot_password_url(): string | null
    get_message(): string | null
    get_open_url(): string | null
    get_password(): string | null
    get_query_error(): [ /* returnType */ boolean, /* error */ SignonuiError ]
    get_query_password(): [ /* returnType */ boolean, /* query_password */ boolean ]
    get_query_username(): [ /* returnType */ boolean, /* query_username */ boolean ]
    get_remember_password(): [ /* returnType */ boolean, /* remember_password */ boolean ]
    get_request_id(): string | null
    get_test_reply(): string | null
    get_title(): string | null
    get_url_response(): string | null
    get_username(): string | null
    set_captcha_response(response: string): void
    set_captcha_url(url: string): void
    set_caption(caption: string): void
    set_confirm(confirm: boolean): void
    set_final_url(url: string): void
    set_forgot_password(forgot: string): void
    set_forgot_password_url(url: string): void
    set_message(message: string): void
    set_open_url(url: string): void
    set_password(password: string): void
    set_query_error(error: SignonuiError): void
    set_query_password(query: boolean): void
    set_query_username(query: boolean): void
    set_remember_password(remember: boolean): void
    set_request_id(id: string): void
    set_test_reply(reply: string): void
    set_title(title: string): void
    set_url_response(response: string): void
    set_username(username: string): void
    /* Methods of GSignond-1.0.GSignond.Dictionary */
    contains(key: string): boolean
    copy(): Dictionary
    get(key: string): GLib.Variant | null
    get_boolean(key: string): [ /* returnType */ boolean, /* value */ boolean ]
    get_int32(key: string): [ /* returnType */ boolean, /* value */ number ]
    get_int64(key: string): [ /* returnType */ boolean, /* value */ number ]
    get_string(key: string): string | null
    get_table(): GLib.HashTable
    get_uint32(key: string): [ /* returnType */ boolean, /* value */ number ]
    get_uint64(key: string): [ /* returnType */ boolean, /* value */ number ]
    remove(key: string): boolean
    set(key: string, value: GLib.Variant): boolean
    set_boolean(key: string, value: boolean): boolean
    set_int32(key: string, value: number): boolean
    set_int64(key: string, value: number): boolean
    set_string(key: string, value: string): boolean
    set_uint32(key: string, value: number): boolean
    set_uint64(key: string, value: number): boolean
    to_variant(): GLib.Variant | null
    to_variant_builder(): GLib.VariantBuilder | null
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
    connect(sigName: "notify", callback: (($obj: SignonuiData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SignonuiData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SignonuiData_ConstructProps)
    _init (config?: SignonuiData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SignonuiData
    /* Function overloads */
    static new(): SignonuiData
    static new_from_variant(variant: GLib.Variant): SignonuiData
    /* Function overloads */
    static new_from_variant(variant: GLib.Variant): SignonuiData
    static $gtype: GObject.Type
}
interface StorageManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GSignond-1.0.GSignond.StorageManager */
    config?: Config
}
class StorageManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.StorageManager */
    delete_storage(): boolean
    filesystem_is_mounted(): boolean
    initialize_storage(): boolean
    mount_filesystem(): string
    storage_is_initialized(): boolean
    unmount_filesystem(): boolean
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
    /* Virtual methods of GSignond-1.0.GSignond.StorageManager */
    vfunc_delete_storage(): boolean
    vfunc_filesystem_is_mounted(): boolean
    vfunc_initialize_storage(): boolean
    vfunc_mount_filesystem(): string
    vfunc_storage_is_initialized(): boolean
    vfunc_unmount_filesystem(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StorageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StorageManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StorageManager_ConstructProps)
    _init (config?: StorageManager_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AccessControlManagerClass {
    /* Fields of GSignond-1.0.GSignond.AccessControlManagerClass */
    readonly parent_class: GObject.ObjectClass
    readonly security_context_of_peer: (self: AccessControlManager, peer_ctx: SecurityContext, peer_fd: number, peer_service: string, peer_app_ctx: string) => void
    readonly peer_is_allowed_to_use_identity: (self: AccessControlManager, peer_ctx: SecurityContext, owner_ctx: SecurityContext, identity_acl: SecurityContext[]) => boolean
    readonly peer_is_owner_of_identity: (self: AccessControlManager, peer_ctx: SecurityContext, owner_ctx: SecurityContext) => boolean
    readonly acl_is_valid: (self: AccessControlManager, peer_ctx: SecurityContext, identity_acl: SecurityContext[]) => boolean
    readonly security_context_of_keychain: (self: AccessControlManager) => SecurityContext
    static name: string
}
class AccessControlManagerPrivate {
    static name: string
}
abstract class ConfigClass {
    /* Fields of GSignond-1.0.GSignond.ConfigClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class CredentialsClass {
    static name: string
}
abstract class DictionaryClass {
    static name: string
}
abstract class ExtensionClass {
    /* Fields of GSignond-1.0.GSignond.ExtensionClass */
    readonly parent_class: GObject.ObjectClass
    readonly get_extension_name: (self: Extension) => string
    readonly get_extension_version: (self: Extension) => number
    readonly get_storage_manager: (self: Extension, config: Config) => StorageManager
    readonly get_secret_storage: (self: Extension, config: Config) => SecretStorage
    readonly get_access_control_manager: (self: Extension, config: Config) => AccessControlManager
    static name: string
}
abstract class PluginInterface {
    /* Fields of GSignond-1.0.GSignond.PluginInterface */
    readonly parent: GObject.TypeInterface
    readonly cancel: (self: Plugin) => void
    readonly request_initial: (self: Plugin, session_data: SessionData, identity_method_cache: Dictionary, mechanism: string) => void
    readonly request: (self: Plugin, session_data: SessionData) => void
    readonly user_action_finished: (self: Plugin, ui_data: SignonuiData) => void
    readonly refresh: (self: Plugin, ui_data: SignonuiData) => void
    static name: string
}
abstract class SecretStorageClass {
    /* Fields of GSignond-1.0.GSignond.SecretStorageClass */
    readonly parent_class: GObject.ObjectClass
    readonly open_db: (self: SecretStorage) => boolean
    readonly close_db: (self: SecretStorage) => boolean
    readonly clear_db: (self: SecretStorage) => boolean
    readonly is_open_db: (self: SecretStorage) => boolean
    readonly load_credentials: (self: SecretStorage, id: number) => Credentials | null
    readonly update_credentials: (self: SecretStorage, creds: Credentials) => boolean
    readonly remove_credentials: (self: SecretStorage, id: number) => boolean
    readonly check_credentials: (self: SecretStorage, creds: Credentials) => boolean
    readonly load_data: (self: SecretStorage, id: number, method: number) => Dictionary
    readonly update_data: (self: SecretStorage, id: number, method: number, data: Dictionary) => boolean
    readonly remove_data: (self: SecretStorage, id: number, method: number) => boolean
    readonly get_last_error: (self: SecretStorage) => GLib.Error
    static name: string
}
class SecretStoragePrivate {
    static name: string
}
class SecurityContext {
    /* Fields of GSignond-1.0.GSignond.SecurityContext */
    readonly sys_ctx: string
    readonly app_ctx: string
    /* Methods of GSignond-1.0.GSignond.SecurityContext */
    check(test: SecurityContext): boolean
    compare(ctx2: SecurityContext): number
    copy(): SecurityContext
    free(): void
    get_application_context(): string
    get_system_context(): string
    match(ctx2: SecurityContext): boolean
    set_application_context(application_context: string): void
    set_system_context(system_context: string): void
    to_variant(): GLib.Variant
    static name: string
    static new(): SecurityContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SecurityContext
    static new_from_values(system_context: string, application_context: string): SecurityContext
    static from_variant(variant: GLib.Variant): SecurityContext
}
abstract class SessionDataClass {
    static name: string
}
abstract class SignonuiDataClass {
    static name: string
}
abstract class StorageManagerClass {
    /* Fields of GSignond-1.0.GSignond.StorageManagerClass */
    readonly parent_class: GObject.ObjectClass
    readonly initialize_storage: (self: StorageManager) => boolean
    readonly delete_storage: (self: StorageManager) => boolean
    readonly storage_is_initialized: (self: StorageManager) => boolean
    readonly mount_filesystem: (self: StorageManager) => string
    readonly unmount_filesystem: (self: StorageManager) => boolean
    readonly filesystem_is_mounted: (self: StorageManager) => boolean
    static name: string
}
class StorageManagerPrivate {
    static name: string
}
}
export default GSignond;