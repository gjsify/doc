/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Accounts-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Accounts {

enum AccountsError {
    DB,
    DISPOSED,
    DELETED,
    DB_LOCKED,
    ACCOUNT_NOT_FOUND,
    STORE_IN_PROGRESS,
    READONLY,
}
enum Error {
    DB,
    DISPOSED,
    DELETED,
    DB_LOCKED,
    ACCOUNT_NOT_FOUND,
}
enum SettingSource {
    NONE,
    ACCOUNT,
    PROFILE,
}
const MANAGER_INTERFACE: string
const MANAGER_OBJECT_PATH: string
const MANAGER_SERVICE_NAME: string
function accounts_error_quark(): GLib.Quark
function errors_quark(): GLib.Quark
function provider_list_free(list: Provider[]): void
function service_list_free(list: Service[]): void
function service_type_list_free(list: ServiceType[]): void
interface AccountNotifyCb {
    (account: Account, key: string): void
}
interface AccountStoreCb {
    (account: Account, error: GLib.Error): void
}
interface Account_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Accounts-1.0.Accounts.Account */
    foreign?: boolean
    id?: number
    manager?: Manager
    provider?: string
}
class Account {
    /* Properties of Accounts-1.0.Accounts.Account */
    readonly display_name: string
    readonly enabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Accounts-1.0.Accounts.Account */
    delete(): void
    get_display_name(): string
    get_enabled(): boolean
    get_manager(): Manager
    get_provider_name(): string
    get_selected_service(): Service
    get_settings_iter(key_prefix?: string | null): AccountSettingIter
    get_value(key: string, value: any): [ /* returnType */ SettingSource, /* value */ any ]
    get_variant(key: string): [ /* returnType */ GLib.Variant, /* source */ SettingSource | null ]
    list_enabled_services(): Service[]
    list_services(): Service[]
    list_services_by_type(service_type: string): Service[]
    remove_watch(watch: AccountWatch): void
    select_service(service?: Service | null): void
    set_display_name(display_name: string): void
    set_enabled(enabled: boolean): void
    set_value(key: string, value?: any | null): void
    set_variant(key: string, value?: GLib.Variant | null): void
    settings_iter_init(iter: AccountSettingIter, key_prefix?: string | null): void
    sign(key: string, token: string): void
    store(callback: AccountStoreCb): void
    store_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    store_blocking(): boolean
    store_finish(res: Gio.AsyncResult): boolean
    supports_service(service_type: string): boolean
    verify(key: string, token: string): boolean
    verify_with_tokens(key: string, tokens: string): boolean
    watch_dir(key_prefix: string, callback: AccountNotifyCb): AccountWatch
    watch_key(key: string, callback: AccountNotifyCb): AccountWatch
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
    /* Virtual methods of Accounts-1.0.Accounts.Account */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Accounts-1.0.Accounts.Account */
    connect(sigName: "deleted", callback: (($obj: Account) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: Account) => void)): number
    emit(sigName: "deleted"): void
    connect(sigName: "display-name-changed", callback: (($obj: Account) => void)): number
    connect_after(sigName: "display-name-changed", callback: (($obj: Account) => void)): number
    emit(sigName: "display-name-changed"): void
    connect(sigName: "enabled", callback: (($obj: Account, service: string, enabled: boolean) => void)): number
    connect_after(sigName: "enabled", callback: (($obj: Account, service: string, enabled: boolean) => void)): number
    emit(sigName: "enabled", service: string, enabled: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display-name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Account_ConstructProps)
    _init (config?: Account_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface AccountService_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Accounts-1.0.Accounts.AccountService */
    account?: Account
    service?: Service
}
class AccountService {
    /* Properties of Accounts-1.0.Accounts.AccountService */
    readonly enabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Accounts-1.0.Accounts.AccountService */
    get_account(): Account
    get_auth_data(): AuthData
    get_changed_fields(): string[]
    get_enabled(): boolean
    get_service(): Service
    get_settings_iter(key_prefix?: string | null): AccountSettingIter
    get_value(key: string, value: any): [ /* returnType */ SettingSource, /* value */ any ]
    get_variant(key: string): [ /* returnType */ GLib.Variant, /* source */ SettingSource | null ]
    set_value(key: string, value?: any | null): void
    set_variant(key: string, value?: GLib.Variant | null): void
    settings_iter_init(iter: AccountSettingIter, key_prefix?: string | null): void
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
    /* Signals of Accounts-1.0.Accounts.AccountService */
    connect(sigName: "changed", callback: (($obj: AccountService) => void)): number
    connect_after(sigName: "changed", callback: (($obj: AccountService) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "enabled", callback: (($obj: AccountService, enabled: boolean) => void)): number
    connect_after(sigName: "enabled", callback: (($obj: AccountService, enabled: boolean) => void)): number
    emit(sigName: "enabled", enabled: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AccountService_ConstructProps)
    _init (config?: AccountService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(account: Account, service?: Service | null): AccountService
    static settings_iter_next(iter: AccountSettingIter): [ /* returnType */ boolean, /* key */ string, /* value */ any ]
    static $gtype: GObject.Type
}
interface Manager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Accounts-1.0.Accounts.Manager */
    abort_on_db_timeout?: boolean
    db_timeout?: number
    service_type?: string
    use_dbus?: boolean
}
class Manager {
    /* Properties of Accounts-1.0.Accounts.Manager */
    abort_on_db_timeout: boolean
    db_timeout: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Accounts-1.0.Accounts.Manager */
    create_account(provider_name: string): Account
    get_abort_on_db_timeout(): boolean
    get_account(account_id: AccountId): Account
    get_account_services(): AccountService[]
    get_application(application_name: string): Application
    get_db_timeout(): number
    get_enabled_account_services(): AccountService[]
    get_provider(provider_name: string): Provider
    get_service(service_name: string): Service
    get_service_type(): string
    list(): AccountId[]
    list_applications_by_service(service: Service): Application[]
    list_by_service_type(service_type: string): AccountId[]
    list_enabled(): AccountId[]
    list_enabled_by_service_type(service_type: string): AccountId[]
    list_providers(): Provider[]
    list_service_types(): ServiceType[]
    list_services(): Service[]
    list_services_by_type(service_type: string): Service[]
    load_account(account_id: AccountId): Account
    load_service_type(service_type: string): ServiceType
    set_abort_on_db_timeout(abort: boolean): void
    set_db_timeout(timeout_ms: number): void
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
    /* Virtual methods of Accounts-1.0.Accounts.Manager */
    vfunc_account_deleted(id: AccountId): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Accounts-1.0.Accounts.Manager */
    connect(sigName: "account-created", callback: (($obj: Manager, account_id: number) => void)): number
    connect_after(sigName: "account-created", callback: (($obj: Manager, account_id: number) => void)): number
    emit(sigName: "account-created", account_id: number): void
    connect(sigName: "account-deleted", callback: (($obj: Manager, account_id: number) => void)): number
    connect_after(sigName: "account-deleted", callback: (($obj: Manager, account_id: number) => void)): number
    emit(sigName: "account-deleted", account_id: number): void
    connect(sigName: "account-updated", callback: (($obj: Manager, account_id: number) => void)): number
    connect_after(sigName: "account-updated", callback: (($obj: Manager, account_id: number) => void)): number
    emit(sigName: "account-updated", account_id: number): void
    connect(sigName: "enabled-event", callback: (($obj: Manager, account_id: number) => void)): number
    connect_after(sigName: "enabled-event", callback: (($obj: Manager, account_id: number) => void)): number
    emit(sigName: "enabled-event", account_id: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::abort-on-db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-on-db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Manager_ConstructProps)
    _init (config?: Manager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Manager
    static new_for_service_type(service_type: string): Manager
    static list_free(list: AccountId[]): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class AccountClass {
    /* Fields of Accounts-1.0.Accounts.AccountClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class AccountPrivate {
    static name: string
}
abstract class AccountServiceClass {
    /* Fields of Accounts-1.0.Accounts.AccountServiceClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class AccountServicePrivate {
    static name: string
}
class AccountSettingIter {
    /* Fields of Accounts-1.0.Accounts.AccountSettingIter */
    readonly account: Account
    /* Methods of Accounts-1.0.Accounts.AccountSettingIter */
    free(): void
    get_next(): [ /* returnType */ boolean, /* key */ string, /* value */ GLib.Variant ]
    next(): [ /* returnType */ boolean, /* key */ string, /* value */ any ]
    static name: string
}
class AccountWatch {
    static name: string
}
class Application {
    /* Methods of Accounts-1.0.Accounts.Application */
    get_description(): string
    get_desktop_app_info(): Gio.DesktopAppInfo
    get_i18n_domain(): string
    get_name(): string
    get_service_usage(service: Service): string
    ref(): Application
    unref(): void
    static name: string
}
class AuthData {
    /* Methods of Accounts-1.0.Accounts.AuthData */
    get_credentials_id(): number
    get_login_parameters(extra_parameters?: GLib.Variant | null): GLib.Variant
    get_mechanism(): string
    get_method(): string
    get_parameters(): GLib.HashTable
    insert_parameters(parameters: GLib.HashTable): void
    ref(): AuthData
    unref(): void
    static name: string
}
abstract class ManagerClass {
    /* Fields of Accounts-1.0.Accounts.ManagerClass */
    readonly parent_class: GObject.ObjectClass
    readonly account_deleted: (manager: Manager, id: AccountId) => void
    static name: string
}
class ManagerPrivate {
    static name: string
}
class Provider {
    /* Methods of Accounts-1.0.Accounts.Provider */
    get_description(): string
    get_display_name(): string
    get_domains_regex(): string
    get_file_contents(contents: string): void
    get_i18n_domain(): string
    get_icon_name(): string
    get_name(): string
    get_plugin_name(): string
    get_single_account(): boolean
    match_domain(domain: string): boolean
    ref(): Provider
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static list_free(list: Provider[]): void
}
class Service {
    /* Methods of Accounts-1.0.Accounts.Service */
    get_description(): string
    get_display_name(): string
    get_file_contents(contents: string, data_offset: number): void
    get_i18n_domain(): string
    get_icon_name(): string
    get_name(): string
    get_provider(): string
    get_service_type(): string
    get_tags(): string[]
    has_tag(tag: string): boolean
    ref(): Service
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static list_free(list: Service[]): void
}
class ServiceType {
    /* Methods of Accounts-1.0.Accounts.ServiceType */
    get_description(): string
    get_display_name(): string
    get_file_contents(contents: string, len: number): void
    get_i18n_domain(): string
    get_icon_name(): string
    get_name(): string
    get_tags(): string[]
    has_tag(tag: string): boolean
    ref(): ServiceType
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static list_free(list: ServiceType[]): void
}
    type AccountId = number
}
export default Accounts;