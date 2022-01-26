/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * AccountsService-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace AccountsService {

enum UserAccountType {
    STANDARD,
    ADMINISTRATOR,
}
enum UserManagerError {
    FAILED,
    USER_EXISTS,
    USER_DOES_NOT_EXIST,
    PERMISSION_DENIED,
    NOT_SUPPORTED,
}
enum UserPasswordMode {
    REGULAR,
    SET_AT_LOGIN,
    NONE,
}
function user_manager_error_quark(): GLib.Quark
interface User_ConstructProps extends GObject.Object_ConstructProps {
}
class User {
    /* Properties of AccountsService-1.0.AccountsService.User */
    readonly account_type: number
    readonly automatic_login: boolean
    readonly email: string
    readonly home_directory: string
    readonly icon_file: string
    readonly is_loaded: boolean
    readonly language: string
    readonly local_account: boolean
    readonly location: string
    readonly locked: boolean
    readonly login_frequency: number
    readonly login_history: GLib.Variant
    readonly login_time: number
    readonly nonexistent: boolean
    readonly password_hint: string
    readonly password_mode: number
    readonly real_name: string
    readonly shell: string
    readonly system_account: boolean
    readonly uid: number
    readonly user_name: string
    readonly x_session: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AccountsService-1.0.AccountsService.User */
    collate(user2: User): number
    get_account_type(): UserAccountType
    get_automatic_login(): boolean
    get_email(): string
    get_home_dir(): string
    get_icon_file(): string
    get_language(): string | null
    get_location(): string
    get_locked(): boolean
    get_login_frequency(): number
    get_login_history(): GLib.Variant
    get_login_time(): number
    get_num_sessions(): number
    get_num_sessions_anywhere(): number
    get_object_path(): string
    get_password_expiration_policy(): [ /* expiration_time */ number | null, /* last_change_time */ number | null, /* min_days_between_changes */ number | null, /* max_days_between_changes */ number | null, /* days_to_warn */ number | null, /* days_after_expiration_until_lock */ number | null ]
    get_password_hint(): string
    get_password_mode(): UserPasswordMode
    get_primary_session_id(): string
    get_real_name(): string
    get_saved(): boolean
    get_session(): string
    get_session_type(): string
    get_shell(): string
    get_uid(): number
    get_user_name(): string
    get_x_session(): string
    is_local_account(): boolean
    is_logged_in(): boolean
    is_logged_in_anywhere(): boolean
    is_nonexistent(): boolean
    is_system_account(): boolean
    set_account_type(account_type: UserAccountType): void
    set_automatic_login(enabled: boolean): void
    set_email(email: string): void
    set_icon_file(icon_file: string): void
    set_language(language: string): void
    set_location(location: string): void
    set_locked(locked: boolean): void
    set_password(password: string, hint: string): void
    set_password_hint(hint: string): void
    set_password_mode(password_mode: UserPasswordMode): void
    set_real_name(real_name: string): void
    set_session(session: string): void
    set_session_type(session_type: string): void
    set_user_name(user_name: string): void
    set_x_session(x_session: string): void
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
    /* Signals of AccountsService-1.0.AccountsService.User */
    connect(sigName: "changed", callback: (($obj: User) => void)): number
    connect_after(sigName: "changed", callback: (($obj: User) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "sessions-changed", callback: (($obj: User) => void)): number
    connect_after(sigName: "sessions-changed", callback: (($obj: User) => void)): number
    emit(sigName: "sessions-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::account-type", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-type", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::automatic-login", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-login", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::home-directory", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-directory", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-file", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-file", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-loaded", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loaded", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::language", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-account", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-account", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locked", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::login-frequency", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::login-frequency", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::login-history", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::login-history", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::login-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::login-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nonexistent", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nonexistent", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-hint", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-hint", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-mode", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-mode", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::real-name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real-name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shell", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shell", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::system-account", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-account", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-session", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-session", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: User_ConstructProps)
    _init (config?: User_ConstructProps): void
    static $gtype: GObject.Type
}
interface UserManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of AccountsService-1.0.AccountsService.UserManager */
    exclude_usernames_list?: object
    has_multiple_users?: boolean
    include_usernames_list?: object
}
class UserManager {
    /* Properties of AccountsService-1.0.AccountsService.UserManager */
    exclude_usernames_list: object
    has_multiple_users: boolean
    include_usernames_list: object
    readonly is_loaded: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AccountsService-1.0.AccountsService.UserManager */
    activate_user_session(user: User): boolean
    cache_user(username: string): User
    cache_user_async(username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cache_user_finish(result: Gio.AsyncResult): User
    can_switch(): boolean
    create_user(username: string, fullname: string, accounttype: UserAccountType): User
    create_user_async(username: string, fullname: string, accounttype: UserAccountType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_user_finish(result: Gio.AsyncResult): User
    delete_user(user: User, remove_files: boolean): boolean
    delete_user_async(user: User, remove_files: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_user_finish(result: Gio.AsyncResult): boolean
    get_user(username: string): User
    get_user_by_id(id: number): User
    goto_login_session(): boolean
    list_users(): User[]
    no_service(): boolean
    uncache_user(username: string): boolean
    uncache_user_async(username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uncache_user_finish(result: Gio.AsyncResult): boolean
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
    /* Virtual methods of AccountsService-1.0.AccountsService.UserManager */
    vfunc_user_added(user: User): void
    vfunc_user_changed(user: User): void
    vfunc_user_is_logged_in_changed(user: User): void
    vfunc_user_removed(user: User): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of AccountsService-1.0.AccountsService.UserManager */
    connect(sigName: "user-added", callback: (($obj: UserManager, user: User) => void)): number
    connect_after(sigName: "user-added", callback: (($obj: UserManager, user: User) => void)): number
    emit(sigName: "user-added", user: User): void
    connect(sigName: "user-changed", callback: (($obj: UserManager, user: User) => void)): number
    connect_after(sigName: "user-changed", callback: (($obj: UserManager, user: User) => void)): number
    emit(sigName: "user-changed", user: User): void
    connect(sigName: "user-is-logged-in-changed", callback: (($obj: UserManager, user: User) => void)): number
    connect_after(sigName: "user-is-logged-in-changed", callback: (($obj: UserManager, user: User) => void)): number
    emit(sigName: "user-is-logged-in-changed", user: User): void
    connect(sigName: "user-removed", callback: (($obj: UserManager, user: User) => void)): number
    connect_after(sigName: "user-removed", callback: (($obj: UserManager, user: User) => void)): number
    emit(sigName: "user-removed", user: User): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::exclude-usernames-list", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exclude-usernames-list", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-multiple-users", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-multiple-users", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::include-usernames-list", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::include-usernames-list", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-loaded", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loaded", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserManager_ConstructProps)
    _init (config?: UserManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): UserManager
    static $gtype: GObject.Type
}
abstract class UserClass {
    /* Fields of AccountsService-1.0.AccountsService.UserClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class UserManagerClass {
    /* Fields of AccountsService-1.0.AccountsService.UserManagerClass */
    readonly parent_class: GObject.ObjectClass
    readonly user_added: (user_manager: UserManager, user: User) => void
    readonly user_removed: (user_manager: UserManager, user: User) => void
    readonly user_is_logged_in_changed: (user_manager: UserManager, user: User) => void
    readonly user_changed: (user_manager: UserManager, user: User) => void
    static name: string
}
}
export default AccountsService;