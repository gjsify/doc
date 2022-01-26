/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * SoupGNOME-2.4
 */

import type * as Gjs from './Gjs';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace SoupGNOME {

const COOKIE_JAR_SQLITE_FILENAME: string
function gnome_features_2_26_get_type(): GObject.Type
interface CookieJarSqlite_ConstructProps extends Soup.CookieJarDB_ConstructProps {
}
class CookieJarSqlite {
    /* Properties of Soup-2.4.Soup.CookieJar */
    accept_policy: Soup.CookieJarAcceptPolicy
    /* Fields of Soup-2.4.Soup.CookieJarDB */
    readonly parent: Soup.CookieJar
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.CookieJar */
    add_cookie(cookie: Soup.Cookie): void
    add_cookie_full(cookie: Soup.Cookie, uri?: Soup.URI | null, first_party?: Soup.URI | null): void
    add_cookie_with_first_party(first_party: Soup.URI, cookie: Soup.Cookie): void
    all_cookies(): Soup.Cookie[]
    delete_cookie(cookie: Soup.Cookie): void
    get_accept_policy(): Soup.CookieJarAcceptPolicy
    get_cookie_list(uri: Soup.URI, for_http: boolean): Soup.Cookie[]
    get_cookie_list_with_same_site_info(uri: Soup.URI, top_level: Soup.URI | null, site_for_cookies: Soup.URI | null, for_http: boolean, is_safe_method: boolean, is_top_level_navigation: boolean): Soup.Cookie[]
    get_cookies(uri: Soup.URI, for_http: boolean): string | null
    is_persistent(): boolean
    save(): void
    set_accept_policy(policy: Soup.CookieJarAcceptPolicy): void
    set_cookie(uri: Soup.URI, cookie: string): void
    set_cookie_with_first_party(uri: Soup.URI, first_party: Soup.URI, cookie: string): void
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Soup.Session): void
    detach(session: Soup.Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite */
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Soup.Session): void
    vfunc_detach(session: Soup.Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Soup.Session, msg: Soup.Message): void
    vfunc_request_started(session: Soup.Session, msg: Soup.Message, socket: Soup.Socket): void
    vfunc_request_unqueued(session: Soup.Session, msg: Soup.Message): void
    /* Virtual methods of Soup-2.4.Soup.CookieJar */
    vfunc_changed(old_cookie: Soup.Cookie, new_cookie: Soup.Cookie): void
    vfunc_is_persistent(): boolean
    vfunc_save(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-2.4.Soup.CookieJar */
    connect(sigName: "changed", callback: (($obj: CookieJarSqlite, old_cookie: Soup.Cookie, new_cookie: Soup.Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJarSqlite, old_cookie: Soup.Cookie, new_cookie: Soup.Cookie) => void)): number
    emit(sigName: "changed", old_cookie: Soup.Cookie, new_cookie: Soup.Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-policy", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CookieJarSqlite_ConstructProps)
    _init (config?: CookieJarSqlite_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, read_only: boolean): CookieJarSqlite
    /* Function overloads */
    static new(filename: string, read_only: boolean): CookieJarSqlite
    static new(): CookieJarSqlite
    static $gtype: GObject.Type
}
interface PasswordManagerGNOME_ConstructProps extends GObject.Object_ConstructProps {
}
class PasswordManagerGNOME {
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Soup.Session): void
    detach(session: Soup.Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of SoupGNOME-2.4.SoupGNOME.PasswordManagerGNOME */
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Soup.Session): void
    vfunc_detach(session: Soup.Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Soup.Session, msg: Soup.Message): void
    vfunc_request_started(session: Soup.Session, msg: Soup.Message, socket: Soup.Socket): void
    vfunc_request_unqueued(session: Soup.Session, msg: Soup.Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PasswordManagerGNOME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PasswordManagerGNOME, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PasswordManagerGNOME_ConstructProps)
    _init (config?: PasswordManagerGNOME_ConstructProps): void
    static $gtype: GObject.Type
}
interface ProxyResolverGNOME_ConstructProps extends Soup.ProxyResolverDefault_ConstructProps {
}
class ProxyResolverGNOME {
    /* Properties of Soup-2.4.Soup.ProxyResolverDefault */
    gproxy_resolver: Gio.ProxyResolver
    /* Fields of Soup-2.4.Soup.ProxyResolverDefault */
    readonly parent: GObject.Object
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
    /* Methods of Soup-2.4.Soup.ProxyURIResolver */
    get_proxy_uri_async(uri: Soup.URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: Soup.ProxyURIResolverCallback): void
    get_proxy_uri_sync(uri: Soup.URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxy_uri */ Soup.URI ]
    /* Methods of Soup-2.4.Soup.SessionFeature */
    add_feature(type: GObject.Type): boolean
    attach(session: Soup.Session): void
    detach(session: Soup.Session): void
    has_feature(type: GObject.Type): boolean
    remove_feature(type: GObject.Type): boolean
    /* Virtual methods of SoupGNOME-2.4.SoupGNOME.ProxyResolverGNOME */
    vfunc_get_proxy_uri_async(uri: Soup.URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: Soup.ProxyURIResolverCallback): void
    vfunc_get_proxy_uri_sync(uri: Soup.URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxy_uri */ Soup.URI ]
    vfunc_add_feature(type: GObject.Type): boolean
    vfunc_attach(session: Soup.Session): void
    vfunc_detach(session: Soup.Session): void
    vfunc_has_feature(type: GObject.Type): boolean
    vfunc_remove_feature(type: GObject.Type): boolean
    vfunc_request_queued(session: Soup.Session, msg: Soup.Message): void
    vfunc_request_started(session: Soup.Session, msg: Soup.Message, socket: Soup.Socket): void
    vfunc_request_unqueued(session: Soup.Session, msg: Soup.Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyResolverGNOME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyResolverGNOME, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gproxy-resolver", callback: (($obj: ProxyResolverGNOME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gproxy-resolver", callback: (($obj: ProxyResolverGNOME, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProxyResolverGNOME_ConstructProps)
    _init (config?: ProxyResolverGNOME_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class CookieJarSqliteClass {
    /* Fields of SoupGNOME-2.4.SoupGNOME.CookieJarSqliteClass */
    readonly parent_class: Soup.CookieJarDBClass
    static name: string
}
}
export default SoupGNOME;