/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * gSignon-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace gSignon {

enum Error {
    UNKNOWN,
    INTERNAL_SERVER,
    INTERNAL_COMMUNICATION,
    PERMISSION_DENIED,
    METHOD_NOT_KNOWN,
    SERVICE_NOT_AVAILABLE,
    INVALID_QUERY,
    METHOD_NOT_AVAILABLE,
    IDENTITY_NOT_FOUND,
    STORE_FAILED,
    REMOVE_FAILED,
    SIGNOUT_FAILED,
    IDENTITY_OPERATION_CANCELED,
    CREDENTIALS_NOT_AVAILABLE,
    REFERENCE_NOT_FOUND,
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
    USER_ERROR,
}
enum SessionDataUiPolicy {
    DEFAULT,
    REQUEST_PASSWORD,
    NO_USER_INTERACTION,
    VALIDATION,
}
enum IdentityType {
    OTHER,
    APP,
    WEB,
    NETWORK,
}
const SESSION_DATA_CAPTION: string
const SESSION_DATA_PROXY: string
const SESSION_DATA_REALM: string
const SESSION_DATA_RENEW_TOKEN: string
const SESSION_DATA_SECRET: string
const SESSION_DATA_TIMEOUT: string
const SESSION_DATA_UI_POLICY: string
const SESSION_DATA_USERNAME: string
const SESSION_DATA_WINDOW_ID: string
function error_quark(): GLib.Quark
function security_context_deconstruct_variant(variant: GLib.Variant): SecurityContext
function security_context_list_build_variant(list: SecurityContext[]): GLib.Variant
function security_context_list_deconstruct_variant(variant: GLib.Variant): SecurityContext[]
interface AuthSessionProcessCb {
    (self: AuthSession, session_data: GLib.HashTable, error: GLib.Error): void
}
interface AuthSessionQueryAvailableMechanismsCb {
    (self: AuthSession, mechanisms: string[], error: GLib.Error): void
}
interface ClearCb {
    (auth_service: AuthService, success: boolean, error: GLib.Error): void
}
interface IdentityInfoCb {
    (self: Identity, info: IdentityInfo, error: GLib.Error): void
}
interface IdentitySessionReadyCb {
    (self: AuthSession, error: GLib.Error, connection: Gio.DBusConnection, bus_name: string, object_path: string): void
}
interface IdentityStoreCredentialsCb {
    (self: Identity, id: number, error: GLib.Error): void
}
interface IdentityVerifyCb {
    (self: Identity, valid: boolean, error: GLib.Error): void
}
interface IdentityVoidCb {
    (self: Identity, error: GLib.Error): void
}
interface QueryIdentitiesCb {
    (auth_service: AuthService, identities: Identity[], error: GLib.Error): void
}
interface QueryMechanismCb {
    (auth_service: AuthService, method: string, mechanisms: string[], error: GLib.Error): void
}
interface QueryMethodsCb {
    (auth_service: AuthService, methods: string[], error: GLib.Error): void
}
interface AuthService_ConstructProps extends GObject.Object_ConstructProps {
}
class AuthService {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of gSignon-1.0.gSignon.AuthService */
    clear(cb: ClearCb): void
    query_identities(filter: GLib.HashTable, application_context: string, cb: QueryIdentitiesCb): void
    query_mechanisms(method: string, cb: QueryMechanismCb): void
    query_methods(cb: QueryMethodsCb): void
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
    connect(sigName: "notify", callback: (($obj: AuthService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthService_ConstructProps)
    _init (config?: AuthService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AuthService
    static $gtype: GObject.Type
}
interface AuthSession_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of gSignon-1.0.gSignon.AuthSession */
    identity?: Identity
}
class AuthSession {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of gSignon-1.0.gSignon.AuthSession */
    cancel(): void
    get_method(): string
    process(session_data: GLib.HashTable, mechanism: string, cb: AuthSessionProcessCb): void
    process_async(session_data: GLib.Variant, mechanism: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    process_finish(res: Gio.AsyncResult): GLib.Variant
    query_available_mechanisms(wanted_mechanisms: string, cb: AuthSessionQueryAvailableMechanismsCb): void
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
    /* Signals of gSignon-1.0.gSignon.AuthSession */
    connect(sigName: "state-changed", callback: (($obj: AuthSession, state: number, message: string) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: AuthSession, state: number, message: string) => void)): number
    emit(sigName: "state-changed", state: number, message: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthSession_ConstructProps)
    _init (config?: AuthSession_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, method_name: string): AuthSession
    static new_for_identity(identity: Identity, method_name: string): AuthSession
    static $gtype: GObject.Type
}
interface Identity_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of gSignon-1.0.gSignon.Identity */
    app_ctx?: string
    id?: number
}
class Identity {
    /* Properties of gSignon-1.0.gSignon.Identity */
    app_ctx: string
    id: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of gSignon-1.0.gSignon.Identity */
    add_reference(reference: string, cb: IdentityReferenceAddedCb): void
    create_session(method: string): AuthSession
    get_auth_session(session: AuthSession, method: string, cb: IdentitySessionReadyCb): void
    get_last_error(): GLib.Error
    query_info(cb: IdentityInfoCb): void
    remove(cb: IdentityRemovedCb): void
    remove_reference(reference: string, cb: IdentityReferenceRemovedCb): void
    request_credentials_update(message: string, cb: IdentityCredentialsUpdatedCb): void
    signout(cb: IdentitySignedOutCb): void
    store_credentials_with_args(username: string | null, secret: string | null, store_secret: boolean, methods: GLib.HashTable, caption: string | null, realms: string | null, owner: SecurityContext | null, access_control_list: SecurityContext[] | null, type: IdentityType, cb: IdentityStoreCredentialsCb): void
    store_credentials_with_info(info: IdentityInfo, cb: IdentityStoreCredentialsCb): void
    verify_user(args: GLib.Variant, cb: IdentityVerifyCb): void
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
    /* Signals of gSignon-1.0.gSignon.Identity */
    connect(sigName: "removed", callback: (($obj: Identity) => void)): number
    connect_after(sigName: "removed", callback: (($obj: Identity) => void)): number
    emit(sigName: "removed"): void
    connect(sigName: "signout", callback: (($obj: Identity) => void)): number
    connect_after(sigName: "signout", callback: (($obj: Identity) => void)): number
    emit(sigName: "signout"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-ctx", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-ctx", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Identity_ConstructProps)
    _init (config?: Identity_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Identity
    static new_from_db(id: number): Identity
    static new_with_context(application_context: string): Identity
    static new_with_context_from_db(id: number, application_context: string): Identity
    static $gtype: GObject.Type
}
abstract class AuthServiceClass {
    /* Fields of gSignon-1.0.gSignon.AuthServiceClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class AuthServicePrivate {
    static name: string
}
abstract class AuthSessionClass {
    /* Fields of gSignon-1.0.gSignon.AuthSessionClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
class AuthSessionPrivate {
    static name: string
}
abstract class IdentityClass {
    /* Fields of gSignon-1.0.gSignon.IdentityClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class IdentityInfo {
    /* Methods of gSignon-1.0.gSignon.IdentityInfo */
    access_control_list_append(security_context: SecurityContext): void
    copy(): IdentityInfo
    free(): void
    get_access_control_list(): SecurityContext[]
    get_caption(): string
    get_id(): number
    get_identity_type(): IdentityType
    get_methods(): GLib.HashTable
    get_owner(): SecurityContext
    get_realms(): string[]
    get_storing_secret(): boolean
    get_username(): string
    own_methods(methods: GLib.HashTable): void
    remove_method(method: string): void
    set_access_control_list(access_control_list: SecurityContext[]): void
    set_caption(caption: string): void
    set_identity_type(type: IdentityType): void
    set_method(method: string, mechanisms: string[]): void
    set_methods(methods: GLib.HashTable): void
    set_owner(owner: SecurityContext): void
    set_owner_from_values(system_context: string, application_context: string): void
    set_realms(realms: string[]): void
    set_secret(secret: string, store_secret: boolean): void
    set_username(username: string): void
    static name: string
    static new(): IdentityInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IdentityInfo
}
class IdentityPrivate {
    static name: string
}
class SecurityContext {
    /* Fields of gSignon-1.0.gSignon.SecurityContext */
    readonly sys_ctx: string
    readonly app_ctx: string
    /* Methods of gSignon-1.0.gSignon.SecurityContext */
    build_variant(): GLib.Variant
    copy(): SecurityContext
    free(): void
    get_application_context(): string
    get_system_context(): string
    set_application_context(application_context: string): void
    set_system_context(system_context: string): void
    static name: string
    static new(): SecurityContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SecurityContext
    static new_from_values(system_context: string, application_context: string): SecurityContext
    static deconstruct_variant(variant: GLib.Variant): SecurityContext
    static list_build_variant(list: SecurityContext[]): GLib.Variant
    static list_deconstruct_variant(variant: GLib.Variant): SecurityContext[]
}
class _AuthSession {
    /* Fields of gSignon-1.0.gSignon._AuthSession */
    readonly parent: GObject.Object
    readonly priv: AuthSessionPrivate
    static name: string
}
class _Identity {
    /* Fields of gSignon-1.0.gSignon._Identity */
    readonly parent_instance: GObject.Object
    readonly priv: IdentityPrivate
    static name: string
}
    type AuthSessionQueryAvailableMethodsCb = AuthSessionQueryAvailableMechanismsCb
    type IdentityCredentialsUpdatedCb = IdentityVoidCb
    type IdentityReferenceAddedCb = IdentityVoidCb
    type IdentityReferenceRemovedCb = IdentityVoidCb
    type IdentityRemovedCb = IdentityVoidCb
    type IdentitySignedOutCb = IdentityVoidCb
}
export default gSignon;