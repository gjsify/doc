/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Tracker-1.0
 */

import type * as Gjs from './Gjs';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';

export namespace Tracker {

enum SparqlValueType {
    UNBOUND,
    URI,
    STRING,
    INTEGER,
    DOUBLE,
    DATETIME,
    BLANK_NODE,
    BOOLEAN,
}
enum Error {
    PARSE,
    UNKNOWN_CLASS,
    UNKNOWN_PROPERTY,
    TYPE,
    CONSTRAINT,
    NO_SPACE,
    INTERNAL,
    UNSUPPORTED,
}
enum SparqlBuilderState {
    UPDATE,
    INSERT,
    DELETE,
    SUBJECT,
    PREDICATE,
    OBJECT,
    BLANK,
    WHERE,
    EMBEDDED_INSERT,
    GRAPH,
}
const DBUS_SERVICE: string
const DBUS_INTERFACE_RESOURCES: string
const DBUS_OBJECT_RESOURCES: string
const DBUS_INTERFACE_STATISTICS: string
const DBUS_OBJECT_STATISTICS: string
const DBUS_INTERFACE_STATUS: string
const DBUS_OBJECT_STATUS: string
const DBUS_INTERFACE_STEROIDS: string
const DBUS_OBJECT_STEROIDS: string
function sparql_escape_uri(uri: string): string
function sparql_escape_string(literal: string): string
function sparql_get_uuid_urn(): string
interface SparqlBuilder_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Tracker-1.0.Tracker.SparqlBuilder */
    length?: number
}
class SparqlBuilder {
    /* Properties of Tracker-1.0.Tracker.SparqlBuilder */
    readonly result: string
    length: number
    readonly state: SparqlBuilderState
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-1.0.Tracker.SparqlBuilder */
    insert_open(graph?: string | null): void
    insert_silent_open(graph?: string | null): void
    insert_close(): void
    delete_open(graph?: string | null): void
    delete_close(): void
    graph_open(graph: string): void
    graph_close(): void
    where_open(): void
    where_close(): void
    subject_variable(var_name: string): void
    object_variable(var_name: string): void
    subject_iri(iri: string): void
    subject(s: string): void
    predicate_iri(iri: string): void
    predicate(s: string): void
    object_iri(iri: string): void
    object(s: string): void
    object_string(literal: string): void
    object_unvalidated(value: string): void
    object_boolean(literal: boolean): void
    object_int64(literal: number): void
    object_date(literal: number): /* literal */ number
    object_double(literal: number): void
    object_blank_open(): void
    object_blank_close(): void
    prepend(raw: string): void
    append(raw: string): void
    get_result(): string
    get_length(): number
    get_state(): SparqlBuilderState
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
    connect(sigName: "notify", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::result", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::result", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SparqlBuilder_ConstructProps)
    _init (config?: SparqlBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static update(): SparqlBuilder
    static embedded_insert(): SparqlBuilder
    static new(): SparqlBuilder
    static $gtype: GObject.Type
}
interface SparqlConnection_ConstructProps extends GObject.Object_ConstructProps {
}
class SparqlConnection {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-1.0.Tracker.SparqlConnection */
    query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor
    query_async(sparql: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    query_finish(_res_: Gio.AsyncResult): SparqlCursor
    update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void
    update_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    update_finish(_res_: Gio.AsyncResult): void
    update_array_async(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    update_array_finish(_res_: Gio.AsyncResult): any[] | null
    update_blank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null
    update_blank_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant | null
    load(file: Gio.File, cancellable?: Gio.Cancellable | null): void
    load_async(file: Gio.File, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    load_finish(_res_: Gio.AsyncResult): void
    statistics(cancellable?: Gio.Cancellable | null): SparqlCursor | null
    statistics_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    statistics_finish(_res_: Gio.AsyncResult): SparqlCursor | null
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
    /* Virtual methods of Tracker-1.0.Tracker.SparqlConnection */
    vfunc_query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor
    vfunc_query_async(sparql: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_query_finish(_res_: Gio.AsyncResult): SparqlCursor
    vfunc_update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void
    vfunc_update_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_update_finish(_res_: Gio.AsyncResult): void
    vfunc_update_array_async(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_update_array_finish(_res_: Gio.AsyncResult): any[] | null
    vfunc_update_blank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null
    vfunc_update_blank_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant | null
    vfunc_load(file: Gio.File, cancellable?: Gio.Cancellable | null): void
    vfunc_load_async(file: Gio.File, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_load_finish(_res_: Gio.AsyncResult): void
    vfunc_statistics(cancellable?: Gio.Cancellable | null): SparqlCursor | null
    vfunc_statistics_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_statistics_finish(_res_: Gio.AsyncResult): SparqlCursor | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SparqlConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SparqlConnection_ConstructProps)
    _init (config?: SparqlConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    static get_finish(_res_: Gio.AsyncResult): SparqlConnection
    static get(cancellable?: Gio.Cancellable | null): SparqlConnection
    static get_direct_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    static get_direct_finish(_res_: Gio.AsyncResult): SparqlConnection
    static get_direct(cancellable?: Gio.Cancellable | null): SparqlConnection
    static remote_new(uri_base: string): SparqlConnection
    static $gtype: GObject.Type
}
interface SparqlCursor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Tracker-1.0.Tracker.SparqlCursor */
    connection?: SparqlConnection
}
class SparqlCursor {
    /* Properties of Tracker-1.0.Tracker.SparqlCursor */
    connection: SparqlConnection
    readonly n_columns: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-1.0.Tracker.SparqlCursor */
    get_value_type(column: number): SparqlValueType
    get_variable_name(column: number): string | null
    get_string(column: number): [ /* returnType */ string | null, /* length */ number ]
    next(cancellable?: Gio.Cancellable | null): boolean
    next_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    next_finish(_res_: Gio.AsyncResult): boolean
    rewind(): void
    close(): void
    get_integer(column: number): number
    get_double(column: number): number
    get_boolean(column: number): boolean
    is_bound(column: number): boolean
    get_connection(): SparqlConnection
    set_connection(value: SparqlConnection): void
    get_n_columns(): number
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
    /* Virtual methods of Tracker-1.0.Tracker.SparqlCursor */
    vfunc_get_value_type(column: number): SparqlValueType
    vfunc_get_variable_name(column: number): string | null
    vfunc_get_string(column: number): [ /* returnType */ string | null, /* length */ number ]
    vfunc_next(cancellable?: Gio.Cancellable | null): boolean
    vfunc_next_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_next_finish(_res_: Gio.AsyncResult): boolean
    vfunc_rewind(): void
    vfunc_close(): void
    vfunc_get_integer(column: number): number
    vfunc_get_double(column: number): number
    vfunc_get_boolean(column: number): boolean
    vfunc_is_bound(column: number): boolean
    vfunc_get_n_columns(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-columns", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SparqlCursor_ConstructProps)
    _init (config?: SparqlCursor_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class SparqlBuilderClass {
    /* Fields of Tracker-1.0.Tracker.SparqlBuilderClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class SparqlBuilderPrivate {
    static name: string
}
abstract class SparqlConnectionClass {
    /* Fields of Tracker-1.0.Tracker.SparqlConnectionClass */
    readonly parent_class: GObject.ObjectClass
    readonly query: (self: SparqlConnection, sparql: string, cancellable?: Gio.Cancellable | null) => SparqlCursor
    readonly query_async: (self: SparqlConnection, sparql: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly query_finish: (self: SparqlConnection, _res_: Gio.AsyncResult) => SparqlCursor
    readonly update: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => void
    readonly update_async: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly update_finish: (self: SparqlConnection, _res_: Gio.AsyncResult) => void
    readonly update_array_async: (self: SparqlConnection, sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly update_array_finish: (self: SparqlConnection, _res_: Gio.AsyncResult) => any[] | null
    readonly update_blank: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => GLib.Variant | null
    readonly update_blank_async: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly update_blank_finish: (self: SparqlConnection, _res_: Gio.AsyncResult) => GLib.Variant | null
    readonly load: (self: SparqlConnection, file: Gio.File, cancellable?: Gio.Cancellable | null) => void
    readonly load_async: (self: SparqlConnection, file: Gio.File, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly load_finish: (self: SparqlConnection, _res_: Gio.AsyncResult) => void
    readonly statistics: (self: SparqlConnection, cancellable?: Gio.Cancellable | null) => SparqlCursor | null
    readonly statistics_async: (self: SparqlConnection, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly statistics_finish: (self: SparqlConnection, _res_: Gio.AsyncResult) => SparqlCursor | null
    static name: string
}
class SparqlConnectionPrivate {
    static name: string
}
abstract class SparqlCursorClass {
    /* Fields of Tracker-1.0.Tracker.SparqlCursorClass */
    readonly parent_class: GObject.ObjectClass
    readonly get_value_type: (self: SparqlCursor, column: number) => SparqlValueType
    readonly get_variable_name: (self: SparqlCursor, column: number) => string | null
    readonly get_string: (self: SparqlCursor, column: number) => [ /* returnType */ string | null, /* length */ number ]
    readonly next: (self: SparqlCursor, cancellable?: Gio.Cancellable | null) => boolean
    readonly next_async: (self: SparqlCursor, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly next_finish: (self: SparqlCursor, _res_: Gio.AsyncResult) => boolean
    readonly rewind: (self: SparqlCursor) => void
    readonly close: (self: SparqlCursor) => void
    readonly get_integer: (self: SparqlCursor, column: number) => number
    readonly get_double: (self: SparqlCursor, column: number) => number
    readonly get_boolean: (self: SparqlCursor, column: number) => boolean
    readonly is_bound: (self: SparqlCursor, column: number) => boolean
    static name: string
}
class SparqlCursorPrivate {
    static name: string
}
}
export default Tracker;