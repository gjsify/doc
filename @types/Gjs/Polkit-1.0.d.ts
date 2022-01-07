/**
 * Polkit-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Polkit {

enum Error {
    FAILED,
    CANCELLED,
    NOT_SUPPORTED,
    NOT_AUTHORIZED,
}
enum ImplicitAuthorization {
    UNKNOWN,
    NOT_AUTHORIZED,
    AUTHENTICATION_REQUIRED,
    ADMINISTRATOR_AUTHENTICATION_REQUIRED,
    AUTHENTICATION_REQUIRED_RETAINED,
    ADMINISTRATOR_AUTHENTICATION_REQUIRED_RETAINED,
    AUTHORIZED,
}
enum AuthorityFeatures {
    NONE,
    TEMPORARY_AUTHORIZATION,
}
enum CheckAuthorizationFlags {
    NONE,
    ALLOW_USER_INTERACTION,
}
function error_quark(): GLib.Quark
function identity_from_string(str: string): Identity | null
function implicit_authorization_from_string(string: string, out_implicit_authorization: ImplicitAuthorization): boolean
function implicit_authorization_to_string(implicit_authorization: ImplicitAuthorization): string
function subject_from_string(str: string): Subject
class Identity {
    /* Methods of Polkit-1.0.Polkit.Identity */
    equal(b: Identity): boolean
    hash(): number
    to_string(): string
    /* Virtual methods of Polkit-1.0.Polkit.Identity */
    vfunc_equal(b: Identity): boolean
    vfunc_hash(): number
    vfunc_to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static from_string(str: string): Identity | null
}
class Subject {
    /* Methods of Polkit-1.0.Polkit.Subject */
    equal(b: Subject): boolean
    exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    exists_finish(res: Gio.AsyncResult): boolean
    exists_sync(cancellable?: Gio.Cancellable | null): boolean
    hash(): number
    to_string(): string
    /* Virtual methods of Polkit-1.0.Polkit.Subject */
    vfunc_equal(b: Subject): boolean
    vfunc_exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_exists_finish(res: Gio.AsyncResult): boolean
    vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_hash(): number
    vfunc_to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static from_string(str: string): Subject
}
export interface ActionDescription_ConstructProps extends GObject.Object_ConstructProps {
}
class ActionDescription {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.ActionDescription */
    get_action_id(): string
    get_annotation(key: string): string | null
    get_annotation_keys(): string[]
    get_description(): string
    get_icon_name(): string
    get_implicit_active(): ImplicitAuthorization
    get_implicit_any(): ImplicitAuthorization
    get_implicit_inactive(): ImplicitAuthorization
    get_message(): string
    get_vendor_name(): string
    get_vendor_url(): string
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
    connect(sigName: "notify", callback: (($obj: ActionDescription, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActionDescription, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ActionDescription_ConstructProps)
    _init (config?: ActionDescription_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Authority_ConstructProps extends GObject.Object_ConstructProps {
}
class Authority {
    /* Properties of Polkit-1.0.Polkit.Authority */
    readonly backend_features: AuthorityFeatures
    readonly backend_name: string
    readonly backend_version: string
    readonly owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.Authority */
    authentication_agent_response(cookie: string, identity: Identity, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authentication_agent_response_finish(res: Gio.AsyncResult): boolean
    authentication_agent_response_sync(cookie: string, identity: Identity, cancellable?: Gio.Cancellable | null): boolean
    check_authorization(subject: Subject, action_id: string, details: Details | null, flags: CheckAuthorizationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    check_authorization_finish(res: Gio.AsyncResult): AuthorizationResult
    check_authorization_sync(subject: Subject, action_id: string, details: Details | null, flags: CheckAuthorizationFlags, cancellable?: Gio.Cancellable | null): AuthorizationResult
    enumerate_actions(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    enumerate_actions_finish(res: Gio.AsyncResult): ActionDescription[]
    enumerate_actions_sync(cancellable?: Gio.Cancellable | null): ActionDescription[]
    enumerate_temporary_authorizations(subject: Subject, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    enumerate_temporary_authorizations_finish(res: Gio.AsyncResult): TemporaryAuthorization[]
    enumerate_temporary_authorizations_sync(subject: Subject, cancellable?: Gio.Cancellable | null): TemporaryAuthorization[]
    get_backend_features(): AuthorityFeatures
    get_backend_name(): string
    get_backend_version(): string
    get_owner(): string | null
    register_authentication_agent(subject: Subject, locale: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    register_authentication_agent_finish(res: Gio.AsyncResult): boolean
    register_authentication_agent_sync(subject: Subject, locale: string, object_path: string, cancellable?: Gio.Cancellable | null): boolean
    register_authentication_agent_with_options(subject: Subject, locale: string, object_path: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    register_authentication_agent_with_options_finish(res: Gio.AsyncResult): boolean
    register_authentication_agent_with_options_sync(subject: Subject, locale: string, object_path: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    revoke_temporary_authorization_by_id(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    revoke_temporary_authorization_by_id_finish(res: Gio.AsyncResult): boolean
    revoke_temporary_authorization_by_id_sync(id: string, cancellable?: Gio.Cancellable | null): boolean
    revoke_temporary_authorizations(subject: Subject, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    revoke_temporary_authorizations_finish(res: Gio.AsyncResult): boolean
    revoke_temporary_authorizations_sync(subject: Subject, cancellable?: Gio.Cancellable | null): boolean
    unregister_authentication_agent(subject: Subject, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unregister_authentication_agent_finish(res: Gio.AsyncResult): boolean
    unregister_authentication_agent_sync(subject: Subject, object_path: string, cancellable?: Gio.Cancellable | null): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Polkit-1.0.Polkit.Authority */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Polkit-1.0.Polkit.Authority */
    connect(sigName: "changed", callback: (($obj: Authority) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Authority) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend-features", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-features", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backend-name", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backend-version", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-version", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Authority, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Authority_ConstructProps)
    _init (config?: Authority_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): Authority
    static get_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static get_finish(res: Gio.AsyncResult): Authority
    static get_sync(cancellable?: Gio.Cancellable | null): Authority
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface AuthorizationResult_ConstructProps extends GObject.Object_ConstructProps {
}
class AuthorizationResult {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.AuthorizationResult */
    get_details(): Details | null
    get_dismissed(): boolean
    get_is_authorized(): boolean
    get_is_challenge(): boolean
    get_retains_authorization(): boolean
    get_temporary_authorization_id(): string | null
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
    connect(sigName: "notify", callback: (($obj: AuthorizationResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthorizationResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthorizationResult_ConstructProps)
    _init (config?: AuthorizationResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(is_authorized: boolean, is_challenge: boolean, details?: Details | null): AuthorizationResult
    static $gtype: GObject.Type
}
export interface Details_ConstructProps extends GObject.Object_ConstructProps {
}
class Details {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.Details */
    get_keys(): string[] | null
    insert(key: string, value?: string | null): void
    lookup(key: string): string | null
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
    connect(sigName: "notify", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Details, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Details_ConstructProps)
    _init (config?: Details_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Details
    static $gtype: GObject.Type
}
export interface Permission_ConstructProps extends Gio.Permission_ConstructProps {
    action_id?: string
    subject?: Subject
}
class Permission {
    /* Properties of Gio-2.0.Gio.Permission */
    readonly allowed: boolean
    readonly can_acquire: boolean
    readonly can_release: boolean
    /* Fields of Gio-2.0.Gio.Permission */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.Permission */
    get_action_id(): string
    get_subject(): Subject
    /* Methods of Gio-2.0.Gio.Permission */
    acquire(cancellable?: Gio.Cancellable | null): boolean
    acquire_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    acquire_finish(result: Gio.AsyncResult): boolean
    get_allowed(): boolean
    get_can_acquire(): boolean
    get_can_release(): boolean
    impl_update(allowed: boolean, can_acquire: boolean, can_release: boolean): void
    release(cancellable?: Gio.Cancellable | null): boolean
    release_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    release_finish(result: Gio.AsyncResult): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Polkit-1.0.Polkit.Permission */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.Permission */
    vfunc_acquire(cancellable?: Gio.Cancellable | null): boolean
    vfunc_acquire_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_acquire_finish(result: Gio.AsyncResult): boolean
    vfunc_release(cancellable?: Gio.Cancellable | null): boolean
    vfunc_release_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_release_finish(result: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-acquire", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-acquire", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-release", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-release", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Permission_ConstructProps)
    _init (config?: Permission_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): Permission
    static new_sync(action_id: string, subject?: Subject | null, cancellable?: Gio.Cancellable | null): Permission
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface SystemBusName_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
}
class SystemBusName {
    /* Properties of Polkit-1.0.Polkit.SystemBusName */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.SystemBusName */
    get_name(): string
    get_process_sync(cancellable?: Gio.Cancellable | null): Subject | null
    get_user_sync(cancellable?: Gio.Cancellable | null): UnixUser | null
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
    /* Methods of Polkit-1.0.Polkit.Subject */
    equal(b: Subject): boolean
    exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    exists_finish(res: Gio.AsyncResult): boolean
    exists_sync(cancellable?: Gio.Cancellable | null): boolean
    hash(): number
    to_string(): string
    /* Virtual methods of Polkit-1.0.Polkit.SystemBusName */
    vfunc_equal(b: Subject): boolean
    vfunc_exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_exists_finish(res: Gio.AsyncResult): boolean
    vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_hash(): number
    vfunc_to_string(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SystemBusName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemBusName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: SystemBusName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SystemBusName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SystemBusName_ConstructProps)
    _init (config?: SystemBusName_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_string(str: string): Subject
    static $gtype: GObject.Type
}
export interface TemporaryAuthorization_ConstructProps extends GObject.Object_ConstructProps {
}
class TemporaryAuthorization {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.TemporaryAuthorization */
    get_action_id(): string
    get_id(): string
    get_subject(): Subject
    get_time_expires(): number
    get_time_obtained(): number
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
    connect(sigName: "notify", callback: (($obj: TemporaryAuthorization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TemporaryAuthorization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TemporaryAuthorization_ConstructProps)
    _init (config?: TemporaryAuthorization_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UnixGroup_ConstructProps extends GObject.Object_ConstructProps {
    gid?: number
}
class UnixGroup {
    /* Properties of Polkit-1.0.Polkit.UnixGroup */
    gid: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.UnixGroup */
    get_gid(): number
    set_gid(gid: number): void
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
    /* Methods of Polkit-1.0.Polkit.Identity */
    equal(b: Identity): boolean
    hash(): number
    to_string(): string
    /* Virtual methods of Polkit-1.0.Polkit.UnixGroup */
    vfunc_equal(b: Identity): boolean
    vfunc_hash(): number
    vfunc_to_string(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gid", callback: (($obj: UnixGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gid", callback: (($obj: UnixGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixGroup_ConstructProps)
    _init (config?: UnixGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_name(name: string): Identity
    static from_string(str: string): Identity | null
    static $gtype: GObject.Type
}
export interface UnixNetgroup_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
}
class UnixNetgroup {
    /* Properties of Polkit-1.0.Polkit.UnixNetgroup */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.UnixNetgroup */
    get_name(): string
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
    /* Methods of Polkit-1.0.Polkit.Identity */
    equal(b: Identity): boolean
    hash(): number
    to_string(): string
    /* Virtual methods of Polkit-1.0.Polkit.UnixNetgroup */
    vfunc_equal(b: Identity): boolean
    vfunc_hash(): number
    vfunc_to_string(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixNetgroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixNetgroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: UnixNetgroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: UnixNetgroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixNetgroup_ConstructProps)
    _init (config?: UnixNetgroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_string(str: string): Identity | null
    static $gtype: GObject.Type
}
export interface UnixProcess_ConstructProps extends GObject.Object_ConstructProps {
    pid?: number
    start_time?: number
    uid?: number
}
class UnixProcess {
    /* Properties of Polkit-1.0.Polkit.UnixProcess */
    pid: number
    start_time: number
    uid: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.UnixProcess */
    get_owner(): number
    get_pid(): number
    get_start_time(): number
    get_uid(): number
    set_pid(pid: number): void
    set_start_time(start_time: number): void
    set_uid(uid: number): void
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
    /* Methods of Polkit-1.0.Polkit.Subject */
    equal(b: Subject): boolean
    exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    exists_finish(res: Gio.AsyncResult): boolean
    exists_sync(cancellable?: Gio.Cancellable | null): boolean
    hash(): number
    to_string(): string
    /* Virtual methods of Polkit-1.0.Polkit.UnixProcess */
    vfunc_equal(b: Subject): boolean
    vfunc_exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_exists_finish(res: Gio.AsyncResult): boolean
    vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_hash(): number
    vfunc_to_string(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::pid", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pid", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: UnixProcess, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixProcess_ConstructProps)
    _init (config?: UnixProcess_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_owner(pid: number, start_time: number, uid: number): Subject
    static new_full(pid: number, start_time: number): Subject
    static from_string(str: string): Subject
    static $gtype: GObject.Type
}
export interface UnixSession_ConstructProps extends GObject.Object_ConstructProps {
    pid?: number
    session_id?: string
}
class UnixSession {
    /* Properties of Polkit-1.0.Polkit.UnixSession */
    session_id: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.UnixSession */
    get_session_id(): string
    set_session_id(session_id: string): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Polkit-1.0.Polkit.Subject */
    equal(b: Subject): boolean
    exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    exists_finish(res: Gio.AsyncResult): boolean
    exists_sync(cancellable?: Gio.Cancellable | null): boolean
    hash(): number
    to_string(): string
    /* Virtual methods of Polkit-1.0.Polkit.UnixSession */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_equal(b: Subject): boolean
    vfunc_exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_exists_finish(res: Gio.AsyncResult): boolean
    vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_hash(): number
    vfunc_to_string(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::session-id", callback: (($obj: UnixSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-id", callback: (($obj: UnixSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixSession_ConstructProps)
    _init (config?: UnixSession_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_process(pid: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_process_finish(res: Gio.AsyncResult): Subject | null
    static new_for_process_sync(pid: number, cancellable?: Gio.Cancellable | null): Subject | null
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static from_string(str: string): Subject
    static $gtype: GObject.Type
}
export interface UnixUser_ConstructProps extends GObject.Object_ConstructProps {
    uid?: number
}
class UnixUser {
    /* Properties of Polkit-1.0.Polkit.UnixUser */
    uid: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Polkit-1.0.Polkit.UnixUser */
    get_name(): string | null
    get_uid(): number
    set_uid(uid: number): void
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
    /* Methods of Polkit-1.0.Polkit.Identity */
    equal(b: Identity): boolean
    hash(): number
    to_string(): string
    /* Virtual methods of Polkit-1.0.Polkit.UnixUser */
    vfunc_equal(b: Identity): boolean
    vfunc_hash(): number
    vfunc_to_string(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uid", callback: (($obj: UnixUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: UnixUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixUser_ConstructProps)
    _init (config?: UnixUser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_name(name: string): Identity | null
    static from_string(str: string): Identity | null
    static $gtype: GObject.Type
}
abstract class ActionDescriptionClass {
    static name: string
}
abstract class AuthorityClass {
    static name: string
}
abstract class AuthorizationResultClass {
    static name: string
}
abstract class DetailsClass {
    static name: string
}
abstract class IdentityIface {
    /* Fields of Polkit-1.0.Polkit.IdentityIface */
    parent_iface: GObject.TypeInterface
    hash: (identity: Identity) => number
    equal: (a: Identity, b: Identity) => boolean
    to_string: (identity: Identity) => string
    static name: string
}
abstract class SubjectIface {
    /* Fields of Polkit-1.0.Polkit.SubjectIface */
    parent_iface: GObject.TypeInterface
    hash: (subject: Subject) => number
    equal: (a: Subject, b: Subject) => boolean
    to_string: (subject: Subject) => string
    exists: (subject: Subject, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    exists_finish: (subject: Subject, res: Gio.AsyncResult) => boolean
    exists_sync: (subject: Subject, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
abstract class SystemBusNameClass {
    static name: string
}
abstract class TemporaryAuthorizationClass {
    static name: string
}
abstract class UnixGroupClass {
    static name: string
}
abstract class UnixNetgroupClass {
    static name: string
}
abstract class UnixProcessClass {
    static name: string
}
abstract class UnixSessionClass {
    static name: string
}
abstract class UnixUserClass {
    static name: string
}
}
export default Polkit;