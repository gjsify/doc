/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Secret-1
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Secret {

enum BackendFlags {
    NONE,
    OPEN_SESSION,
    LOAD_COLLECTIONS,
}
enum Error {
    PROTOCOL,
    IS_LOCKED,
    NO_SUCH_OBJECT,
    ALREADY_EXISTS,
    INVALID_FILE_FORMAT,
}
enum SchemaAttributeType {
    STRING,
    INTEGER,
    BOOLEAN,
}
enum SchemaType {
    NOTE,
    COMPAT_NETWORK,
}
enum CollectionCreateFlags {
    NONE,
}
enum CollectionFlags {
    NONE,
    LOAD_ITEMS,
}
enum ItemCreateFlags {
    NONE,
    REPLACE,
}
enum ItemFlags {
    NONE,
    LOAD_SECRET,
}
enum SchemaFlags {
    NONE,
    DONT_MATCH_NAME,
}
enum SearchFlags {
    NONE,
    ALL,
    UNLOCK,
    LOAD_SECRETS,
}
enum ServiceFlags {
    NONE,
    OPEN_SESSION,
    LOAD_COLLECTIONS,
}
const BACKEND_EXTENSION_POINT_NAME: string
const COLLECTION_DEFAULT: string
const COLLECTION_SESSION: string
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
function backend_get(flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function backend_get_finish(result: Gio.AsyncResult): Backend
function error_get_quark(): GLib.Quark
function get_schema(type: SchemaType): Schema
function password_clear_finish(result: Gio.AsyncResult): boolean
function password_clear(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function password_clear_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
function password_lookup_finish(result: Gio.AsyncResult): string
function password_lookup(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function password_lookup_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): string
function password_search_finish(result: Gio.AsyncResult): Retrievable[]
function password_search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function password_search_sync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null): Retrievable[]
function password_store_finish(result: Gio.AsyncResult): boolean
function password_store(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, password: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function password_store_binary(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function password_store_binary_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable?: Gio.Cancellable | null): boolean
function password_store_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, password: string, cancellable?: Gio.Cancellable | null): boolean
function password_wipe(password?: string | null): void
class Backend {
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Virtual methods of Secret-1.Secret.Backend */
    vfunc_clear(schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_clear_finish(result: Gio.AsyncResult): boolean
    vfunc_ensure_for_flags(flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_ensure_for_flags_finish(result: Gio.AsyncResult): boolean
    vfunc_lookup(schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_lookup_finish(result: Gio.AsyncResult): Value
    vfunc_search(schema: Schema, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_store(schema: Schema, attributes: GLib.HashTable, collection: string, label: string, value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_store_finish(result: Gio.AsyncResult): boolean
    /* Virtual methods of Gio-2.0.Gio.AsyncInitable */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static get(flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static get_finish(result: Gio.AsyncResult): Backend
}
class Retrievable {
    /* Properties of Secret-1.Secret.Retrievable */
    attributes: GLib.HashTable
    created: number
    label: string
    modified: number
    /* Methods of Secret-1.Secret.Retrievable */
    get_attributes(): GLib.HashTable
    get_created(): number
    get_label(): string
    get_modified(): number
    retrieve_secret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieve_secret_finish(result: Gio.AsyncResult): Value | null
    retrieve_secret_sync(cancellable?: Gio.Cancellable | null): Value | null
    /* Virtual methods of Secret-1.Secret.Retrievable */
    vfunc_retrieve_secret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_retrieve_secret_finish(result: Gio.AsyncResult): Value | null
    static name: string
}
interface Collection_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Secret-1.Secret.Collection */
    created?: number
    flags?: CollectionFlags
    label?: string
    modified?: number
    service?: Service
}
class Collection {
    /* Properties of Secret-1.Secret.Collection */
    created: number
    label: string
    readonly locked: boolean
    modified: number
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Secret-1.Secret.Collection */
    delete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_finish(result: Gio.AsyncResult): boolean
    delete_sync(cancellable?: Gio.Cancellable | null): boolean
    get_created(): number
    get_flags(): CollectionFlags
    get_items(): Item[]
    get_label(): string
    get_locked(): boolean
    get_modified(): number
    get_service(): Service
    load_items(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_items_finish(result: Gio.AsyncResult): boolean
    load_items_sync(cancellable?: Gio.Cancellable | null): boolean
    refresh(): void
    search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    search_finish(result: Gio.AsyncResult): Item[]
    search_sync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null): Item[]
    set_label(label: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_label_finish(result: Gio.AsyncResult): boolean
    set_label_sync(label: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Secret-1.Secret.Collection */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Collection, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Collection, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Collection, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Collection, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::created", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locked", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Collection_ConstructProps)
    _init (config?: Collection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(service: Service | null, label: string, alias: string | null, flags: CollectionCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static create_finish(result: Gio.AsyncResult): Collection
    static create_sync(service: Service | null, label: string, alias: string | null, flags: CollectionCreateFlags, cancellable?: Gio.Cancellable | null): Collection
    static for_alias(service: Service | null, alias: string, flags: CollectionFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static for_alias_finish(result: Gio.AsyncResult): Collection
    static for_alias_sync(service: Service | null, alias: string, flags: CollectionFlags, cancellable?: Gio.Cancellable | null): Collection
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Item_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Secret-1.Secret.Item */
    flags?: ItemFlags
    service?: Service
    /* Constructor properties of Secret-1.Secret.Retrievable */
    attributes?: GLib.HashTable
    created?: number
    label?: string
    modified?: number
}
class Item {
    /* Properties of Secret-1.Secret.Item */
    readonly locked: boolean
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Secret-1.Secret.Retrievable */
    attributes: GLib.HashTable
    created: number
    label: string
    modified: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Secret-1.Secret.Item */
    delete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_finish(result: Gio.AsyncResult): boolean
    delete_sync(cancellable?: Gio.Cancellable | null): boolean
    get_attributes(): GLib.HashTable
    get_created(): number
    get_flags(): ItemFlags
    get_label(): string
    get_locked(): boolean
    get_modified(): number
    get_schema_name(): string | null
    get_secret(): Value | null
    get_service(): Service
    load_secret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_secret_finish(result: Gio.AsyncResult): boolean
    load_secret_sync(cancellable?: Gio.Cancellable | null): boolean
    refresh(): void
    set_attributes(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_attributes_finish(result: Gio.AsyncResult): boolean
    set_attributes_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    set_label(label: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_label_finish(result: Gio.AsyncResult): boolean
    set_label_sync(label: string, cancellable?: Gio.Cancellable | null): boolean
    set_secret(value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_secret_finish(result: Gio.AsyncResult): boolean
    set_secret_sync(value: Value, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Secret-1.Secret.Retrievable */
    retrieve_secret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieve_secret_finish(result: Gio.AsyncResult): Value | null
    retrieve_secret_sync(cancellable?: Gio.Cancellable | null): Value | null
    /* Virtual methods of Secret-1.Secret.Item */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_retrieve_secret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_retrieve_secret_finish(result: Gio.AsyncResult): Value | null
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Item, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Item, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Item, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Item, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locked", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::created", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Item_ConstructProps)
    _init (config?: Item_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(collection: Collection, schema: Schema | null, attributes: GLib.HashTable, label: string, value: Value, flags: ItemCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static create_finish(result: Gio.AsyncResult): Item
    static create_sync(collection: Collection, schema: Schema | null, attributes: GLib.HashTable, label: string, value: Value, flags: ItemCreateFlags, cancellable?: Gio.Cancellable | null): Item
    static load_secrets(items: Item[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static load_secrets_finish(result: Gio.AsyncResult): boolean
    static load_secrets_sync(items: Item[], cancellable?: Gio.Cancellable | null): boolean
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Prompt_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class Prompt {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Secret-1.Secret.Prompt */
    perform(window_id: string | null, return_type: GLib.VariantType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    perform_finish(result: Gio.AsyncResult): GLib.Variant
    perform_sync(window_id: string | null, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant
    run(window_id: string | null, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Secret-1.Secret.Prompt */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Prompt, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Prompt, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Prompt, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Prompt, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Prompt_ConstructProps)
    _init (config?: Prompt_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Service_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Secret-1.Secret.Backend */
    flags?: ServiceFlags
}
class Service {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Secret-1.Secret.Service */
    clear(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    clear_finish(result: Gio.AsyncResult): boolean
    clear_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    create_item_dbus_path_sync(collection_path: string, properties: GLib.HashTable, value: Value, flags: ItemCreateFlags, cancellable?: Gio.Cancellable | null): string
    decode_dbus_secret(value: GLib.Variant): Value
    encode_dbus_secret(value: Value): GLib.Variant
    ensure_session(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    ensure_session_finish(result: Gio.AsyncResult): boolean
    ensure_session_sync(cancellable?: Gio.Cancellable | null): boolean
    get_collection_gtype(): GObject.Type
    get_collections(): Collection[] | null
    get_flags(): ServiceFlags
    get_item_gtype(): GObject.Type
    get_session_algorithms(): string | null
    get_session_dbus_path(): string | null
    load_collections(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_collections_finish(result: Gio.AsyncResult): boolean
    load_collections_sync(cancellable?: Gio.Cancellable | null): boolean
    lock(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lock_finish(result: Gio.AsyncResult): [ /* returnType */ number, /* locked */ Gio.DBusProxy[] | null ]
    lock_sync(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* locked */ Gio.DBusProxy[] | null ]
    lookup(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookup_finish(result: Gio.AsyncResult): Value
    lookup_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): Value
    prompt(prompt: Prompt, return_type?: GLib.VariantType | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    prompt_finish(result: Gio.AsyncResult): GLib.Variant
    prompt_sync(prompt: Prompt, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant
    search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    search_finish(result: Gio.AsyncResult): Item[]
    search_sync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null): Item[]
    set_alias(alias: string, collection?: Collection | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_alias_finish(result: Gio.AsyncResult): boolean
    set_alias_sync(alias: string, collection?: Collection | null, cancellable?: Gio.Cancellable | null): boolean
    store(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    store_finish(result: Gio.AsyncResult): boolean
    store_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable?: Gio.Cancellable | null): boolean
    unlock(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unlock_finish(result: Gio.AsyncResult): [ /* returnType */ number, /* unlocked */ Gio.DBusProxy[] | null ]
    unlock_sync(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* unlocked */ Gio.DBusProxy[] | null ]
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Secret-1.Secret.Service */
    vfunc_get_collection_gtype(): GObject.Type
    vfunc_get_item_gtype(): GObject.Type
    vfunc_prompt_async(prompt: Prompt, return_type: GLib.VariantType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_prompt_finish(result: Gio.AsyncResult): GLib.Variant
    vfunc_prompt_sync(prompt: Prompt, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_clear(schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_clear_finish(result: Gio.AsyncResult): boolean
    vfunc_ensure_for_flags(flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_ensure_for_flags_finish(result: Gio.AsyncResult): boolean
    vfunc_lookup(schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_lookup_finish(result: Gio.AsyncResult): Value
    vfunc_search(schema: Schema, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_store(schema: Schema, attributes: GLib.HashTable, collection: string, label: string, value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_store_finish(result: Gio.AsyncResult): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Service, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Service, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Service, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Service, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static disconnect(): void
    static get(flags: ServiceFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static get(flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static get_finish(result: Gio.AsyncResult): Service
    /* Function overloads */
    static get_finish(result: Gio.AsyncResult): Backend
    static get_sync(flags: ServiceFlags, cancellable?: Gio.Cancellable | null): Service
    static open(service_gtype: GObject.Type, service_bus_name: string | null, flags: ServiceFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static open_finish(result: Gio.AsyncResult): Service
    static open_sync(service_gtype: GObject.Type, service_bus_name: string | null, flags: ServiceFlags, cancellable?: Gio.Cancellable | null): Service
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class BackendInterface {
    /* Fields of Secret-1.Secret.BackendInterface */
    readonly parent_iface: GObject.TypeInterface
    readonly ensure_for_flags: (self: Backend, flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly ensure_for_flags_finish: (self: Backend, result: Gio.AsyncResult) => boolean
    readonly store: (self: Backend, schema: Schema, attributes: GLib.HashTable, collection: string, label: string, value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly store_finish: (self: Backend, result: Gio.AsyncResult) => boolean
    readonly lookup: (self: Backend, schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly lookup_finish: (self: Backend, result: Gio.AsyncResult) => Value
    readonly clear: (self: Backend, schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly clear_finish: (self: Backend, result: Gio.AsyncResult) => boolean
    readonly search: (self: Backend, schema: Schema, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    static name: string
}
abstract class CollectionClass {
    /* Fields of Secret-1.Secret.CollectionClass */
    readonly parent_class: Gio.DBusProxyClass
    static name: string
}
class CollectionPrivate {
    static name: string
}
abstract class ItemClass {
    /* Fields of Secret-1.Secret.ItemClass */
    readonly parent_class: Gio.DBusProxyClass
    static name: string
}
class ItemPrivate {
    static name: string
}
abstract class PromptClass {
    /* Fields of Secret-1.Secret.PromptClass */
    readonly parent_class: Gio.DBusProxyClass
    static name: string
}
class PromptPrivate {
    static name: string
}
abstract class RetrievableInterface {
    /* Fields of Secret-1.Secret.RetrievableInterface */
    readonly parent_iface: GObject.TypeInterface
    readonly retrieve_secret: (self: Retrievable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly retrieve_secret_finish: (self: Retrievable, result: Gio.AsyncResult) => Value | null
    static name: string
}
class Schema {
    /* Fields of Secret-1.Secret.Schema */
    readonly name: string
    readonly flags: SchemaFlags
    readonly attributes: SchemaAttribute[]
    /* Methods of Secret-1.Secret.Schema */
    ref(): Schema
    unref(): void
    static name: string
    static new(name: string, flags: SchemaFlags, attribute_names_and_types: GLib.HashTable): Schema
    constructor(name: string, flags: SchemaFlags, attribute_names_and_types: GLib.HashTable)
    /* Static methods and pseudo-constructors */
    static new(name: string, flags: SchemaFlags, attribute_names_and_types: GLib.HashTable): Schema
}
class SchemaAttribute {
    /* Fields of Secret-1.Secret.SchemaAttribute */
    readonly name: string
    readonly type: SchemaAttributeType
    static name: string
}
abstract class ServiceClass {
    /* Fields of Secret-1.Secret.ServiceClass */
    readonly parent_class: Gio.DBusProxyClass
    readonly collection_gtype: GObject.Type
    readonly item_gtype: GObject.Type
    readonly prompt_sync: (self: Service, prompt: Prompt, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType) => GLib.Variant
    readonly prompt_async: (self: Service, prompt: Prompt, return_type: GLib.VariantType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly prompt_finish: (self: Service, result: Gio.AsyncResult) => GLib.Variant
    readonly get_collection_gtype: (self: Service) => GObject.Type
    readonly get_item_gtype: (self: Service) => GObject.Type
    static name: string
}
class ServicePrivate {
    static name: string
}
class Value {
    /* Methods of Secret-1.Secret.Value */
    get(): Uint8Array
    get_content_type(): string
    get_text(): string | null
    ref(): Value
    unref(): void
    unref_to_password(length: number): string
    static name: string
    static new(secret: string, length: number, content_type: string): Value
    constructor(secret: string, length: number, content_type: string)
    /* Static methods and pseudo-constructors */
    static new(secret: string, length: number, content_type: string): Value
    static new_full(secret: string, length: number, content_type: string, destroy: GLib.DestroyNotify): Value
}
}
export default Secret;