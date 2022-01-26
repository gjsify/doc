/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RestExtras-0.7
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Rest from './Rest-0.7';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace RestExtras {

interface YoutubeProxyUploadCallback {
    (proxy: YoutubeProxy, payload: string, total: number, uploaded: number, error: GLib.Error, weak_object: GObject.Object): void
}
interface FlickrProxy_ConstructProps extends Rest.Proxy_ConstructProps {
    /* Constructor properties of RestExtras-0.7.RestExtras.FlickrProxy */
    api_key?: string
    shared_secret?: string
    token?: string
}
class FlickrProxy {
    /* Properties of RestExtras-0.7.RestExtras.FlickrProxy */
    token: string
    /* Properties of Rest-0.7.Rest.Proxy */
    binding_required: boolean
    password: string
    ssl_ca_file: string
    ssl_strict: boolean
    url_format: string
    user_agent: string
    username: string
    /* Fields of Rest-0.7.Rest.Proxy */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of RestExtras-0.7.RestExtras.FlickrProxy */
    build_login_url(frob: string, perms: string): string
    get_api_key(): string
    get_shared_secret(): string
    get_token(): string
    new_upload(): FlickrProxyCall
    new_upload_for_file(filename: string): FlickrProxyCall
    set_token(token: string): void
    sign(params: GLib.HashTable): string
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
    connect(sigName: "authenticate", callback: (($obj: FlickrProxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: FlickrProxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    emit(sigName: "authenticate", auth: Rest.ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::token", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::token", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::binding-required", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url-format", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FlickrProxy_ConstructProps)
    _init (config?: FlickrProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(api_key: string, shared_secret: string): FlickrProxy
    /* Function overloads */
    static new(url_format: string, binding_required: boolean): FlickrProxy
    static new_with_token(api_key: string, shared_secret: string, token: string): FlickrProxy
    static is_successful(root: Rest.XmlNode): boolean
    static $gtype: GObject.Type
}
interface FlickrProxyCall_ConstructProps extends Rest.ProxyCall_ConstructProps {
    /* Constructor properties of RestExtras-0.7.RestExtras.FlickrProxyCall */
    upload?: boolean
}
class FlickrProxyCall {
    /* Fields of Rest-0.7.Rest.ProxyCall */
    readonly parent: GObject.Object
    readonly priv: Rest.ProxyCallPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.ProxyCall */
    add_header(header: string, value: string): void
    add_param(name: string, value: string): void
    add_param_full(param: Rest.Param): void
    get_function(): string
    get_method(): string
    get_params(): Rest.Params
    get_payload(): string
    get_payload_length(): number
    get_response_headers(): GLib.HashTable
    get_status_code(): number
    get_status_message(): string
    invoke_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invoke_finish(result: Gio.AsyncResult): boolean
    lookup_header(header: string): string
    lookup_param(name: string): Rest.Param
    lookup_response_header(header: string): string
    remove_header(header: string): void
    remove_param(name: string): void
    run(loop: GLib.MainLoop): boolean
    serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    set_function(function_: string): void
    set_method(method: string): void
    sync(): boolean
    upload(callback: Rest.ProxyCallUploadCallback, weak_object: GObject.Object): boolean
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
    /* Virtual methods of Rest-0.7.Rest.ProxyCall */
    vfunc_prepare(): boolean
    vfunc_serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FlickrProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FlickrProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FlickrProxyCall_ConstructProps)
    _init (config?: FlickrProxyCall_ConstructProps): void
    static $gtype: GObject.Type
}
interface LastfmProxy_ConstructProps extends Rest.Proxy_ConstructProps {
    /* Constructor properties of RestExtras-0.7.RestExtras.LastfmProxy */
    api_key?: string
    secret?: string
    session_key?: string
}
class LastfmProxy {
    /* Properties of RestExtras-0.7.RestExtras.LastfmProxy */
    session_key: string
    /* Properties of Rest-0.7.Rest.Proxy */
    binding_required: boolean
    password: string
    ssl_ca_file: string
    ssl_strict: boolean
    url_format: string
    user_agent: string
    username: string
    /* Fields of Rest-0.7.Rest.Proxy */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of RestExtras-0.7.RestExtras.LastfmProxy */
    build_login_url(token: string): string
    get_api_key(): string
    get_secret(): string
    get_session_key(): string
    set_session_key(session_key: string): void
    sign(params: GLib.HashTable): string
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
    connect(sigName: "authenticate", callback: (($obj: LastfmProxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: LastfmProxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    emit(sigName: "authenticate", auth: Rest.ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::session-key", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-key", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::binding-required", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url-format", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LastfmProxy_ConstructProps)
    _init (config?: LastfmProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(api_key: string, secret: string): LastfmProxy
    /* Function overloads */
    static new(url_format: string, binding_required: boolean): LastfmProxy
    static new_with_session(api_key: string, secret: string, session_key: string): LastfmProxy
    static is_successful(root: Rest.XmlNode): boolean
    static $gtype: GObject.Type
}
interface LastfmProxyCall_ConstructProps extends Rest.ProxyCall_ConstructProps {
}
class LastfmProxyCall {
    /* Fields of Rest-0.7.Rest.ProxyCall */
    readonly parent: GObject.Object
    readonly priv: Rest.ProxyCallPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.ProxyCall */
    add_header(header: string, value: string): void
    add_param(name: string, value: string): void
    add_param_full(param: Rest.Param): void
    get_function(): string
    get_method(): string
    get_params(): Rest.Params
    get_payload(): string
    get_payload_length(): number
    get_response_headers(): GLib.HashTable
    get_status_code(): number
    get_status_message(): string
    invoke_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invoke_finish(result: Gio.AsyncResult): boolean
    lookup_header(header: string): string
    lookup_param(name: string): Rest.Param
    lookup_response_header(header: string): string
    remove_header(header: string): void
    remove_param(name: string): void
    run(loop: GLib.MainLoop): boolean
    serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    set_function(function_: string): void
    set_method(method: string): void
    sync(): boolean
    upload(callback: Rest.ProxyCallUploadCallback, weak_object: GObject.Object): boolean
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
    /* Virtual methods of Rest-0.7.Rest.ProxyCall */
    vfunc_prepare(): boolean
    vfunc_serialize_params(): [ /* returnType */ boolean, /* content_type */ string, /* content */ string, /* content_len */ number ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LastfmProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LastfmProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LastfmProxyCall_ConstructProps)
    _init (config?: LastfmProxyCall_ConstructProps): void
    static $gtype: GObject.Type
}
interface YoutubeProxy_ConstructProps extends Rest.Proxy_ConstructProps {
    /* Constructor properties of RestExtras-0.7.RestExtras.YoutubeProxy */
    developer_key?: string
    user_auth?: string
}
class YoutubeProxy {
    /* Properties of RestExtras-0.7.RestExtras.YoutubeProxy */
    user_auth: string
    /* Properties of Rest-0.7.Rest.Proxy */
    binding_required: boolean
    password: string
    ssl_ca_file: string
    ssl_strict: boolean
    url_format: string
    user_agent: string
    username: string
    /* Fields of Rest-0.7.Rest.Proxy */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of RestExtras-0.7.RestExtras.YoutubeProxy */
    set_user_auth(user_auth: string): void
    upload_async(filename: string, fields: GLib.HashTable, incomplete: boolean, callback: YoutubeProxyUploadCallback, weak_object: GObject.Object): boolean
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
    connect(sigName: "authenticate", callback: (($obj: YoutubeProxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: YoutubeProxy, auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    emit(sigName: "authenticate", auth: Rest.ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::user-auth", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-auth", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::binding-required", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url-format", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: YoutubeProxy_ConstructProps)
    _init (config?: YoutubeProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(developer_key: string): YoutubeProxy
    /* Function overloads */
    static new(url_format: string, binding_required: boolean): YoutubeProxy
    static new_with_auth(developer_key: string, user_auth: string): YoutubeProxy
    static $gtype: GObject.Type
}
abstract class FlickrProxyCallClass {
    /* Fields of RestExtras-0.7.RestExtras.FlickrProxyCallClass */
    readonly parent_class: Rest.ProxyCallClass
    static name: string
}
abstract class FlickrProxyClass {
    /* Fields of RestExtras-0.7.RestExtras.FlickrProxyClass */
    readonly parent_class: Rest.ProxyClass
    static name: string
}
class FlickrProxyPrivate {
    static name: string
}
abstract class LastfmProxyCallClass {
    /* Fields of RestExtras-0.7.RestExtras.LastfmProxyCallClass */
    readonly parent_class: Rest.ProxyCallClass
    static name: string
}
abstract class LastfmProxyClass {
    /* Fields of RestExtras-0.7.RestExtras.LastfmProxyClass */
    readonly parent_class: Rest.ProxyClass
    static name: string
}
class LastfmProxyPrivate {
    static name: string
}
abstract class YoutubeProxyClass {
    /* Fields of RestExtras-0.7.RestExtras.YoutubeProxyClass */
    readonly parent_class: Rest.ProxyClass
    static name: string
}
class YoutubeProxyPrivate {
    static name: string
}
}
export default RestExtras;