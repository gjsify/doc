/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Tracker-3.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Tracker {

enum NotifierEventType {
    CREATE,
    DELETE,
    UPDATE,
}
enum SparqlError {
    ERROR_CONSTRAINT,
    ERROR_INTERNAL,
    ERROR_NO_SPACE,
    ERROR_ONTOLOGY_NOT_FOUND,
    ERROR_OPEN_ERROR,
    ERROR_PARSE,
    ERROR_QUERY_FAILED,
    ERROR_TYPE,
    ERROR_UNKNOWN_CLASS,
    ERROR_UNKNOWN_GRAPH,
    ERROR_UNKNOWN_PROPERTY,
    ERROR_UNSUPPORTED,
    ERROR_MISSING_LAST_MODIFIED_HEADER,
    ERROR_INCOMPLETE_PROPERTY_DEFINITION,
    N_ERRORS,
}
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
enum SparqlConnectionFlags {
    NONE,
    READONLY,
    FTS_ENABLE_STEMMER,
    FTS_ENABLE_UNACCENT,
    FTS_ENABLE_STOP_WORDS,
    FTS_IGNORE_NUMBERS,
    ANONYMOUS_BNODES,
}
const PREFIX_DC: string
const PREFIX_MFO: string
const PREFIX_NAO: string
const PREFIX_NCO: string
const PREFIX_NFO: string
const PREFIX_NIE: string
const PREFIX_NMM: string
const PREFIX_NRL: string
const PREFIX_OSINFO: string
const PREFIX_RDF: string
const PREFIX_RDFS: string
const PREFIX_SLO: string
const PREFIX_TRACKER: string
const PREFIX_XSD: string
function check_version(required_major: number, required_minor: number, required_micro: number): string
function sparql_error_quark(): GLib.Quark
function sparql_escape_string(literal: string): string
function sparql_escape_uri(uri: string): string
function sparql_get_ontology_nepomuk(): Gio.File
function sparql_get_uuid_urn(): string
interface Batch_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Tracker-3.0.Tracker.Batch */
    connection?: SparqlConnection
}
class Batch {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.Batch */
    add_resource(graph: string, resource: Resource): void
    add_sparql(sparql: string): void
    execute(cancellable?: Gio.Cancellable | null): boolean
    execute_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    execute_finish(res: Gio.AsyncResult): boolean
    get_connection(): SparqlConnection
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
    connect(sigName: "notify", callback: (($obj: Batch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Batch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Batch_ConstructProps)
    _init (config?: Batch_ConstructProps): void
    static $gtype: GObject.Type
}
interface Endpoint_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Tracker-3.0.Tracker.Endpoint */
    sparql_connection?: SparqlConnection
}
class Endpoint {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.Endpoint */
    get_sparql_connection(): SparqlConnection
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
    connect(sigName: "notify", callback: (($obj: Endpoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Endpoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Endpoint_ConstructProps)
    _init (config?: Endpoint_ConstructProps): void
    static $gtype: GObject.Type
}
interface EndpointDBus_ConstructProps extends Endpoint_ConstructProps {
    /* Constructor properties of Tracker-3.0.Tracker.EndpointDBus */
    dbus_connection?: Gio.DBusConnection
    object_path?: string
}
class EndpointDBus {
    /* Fields of Tracker-3.0.Tracker.Endpoint */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.Endpoint */
    get_sparql_connection(): SparqlConnection
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
    /* Virtual methods of Tracker-3.0.Tracker.EndpointDBus */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EndpointDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EndpointDBus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EndpointDBus_ConstructProps)
    _init (config?: EndpointDBus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sparql_connection: SparqlConnection, dbus_connection: Gio.DBusConnection, object_path?: string | null, cancellable?: Gio.Cancellable | null): EndpointDBus
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface EndpointHttp_ConstructProps extends Endpoint_ConstructProps {
    /* Constructor properties of Tracker-3.0.Tracker.EndpointHttp */
    http_certificate?: Gio.TlsCertificate
    http_port?: number
}
class EndpointHttp {
    /* Fields of Tracker-3.0.Tracker.Endpoint */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.Endpoint */
    get_sparql_connection(): SparqlConnection
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
    /* Virtual methods of Tracker-3.0.Tracker.EndpointHttp */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Tracker-3.0.Tracker.EndpointHttp */
    connect(sigName: "block-remote-address", callback: (($obj: EndpointHttp, object: Gio.SocketAddress) => boolean)): number
    connect_after(sigName: "block-remote-address", callback: (($obj: EndpointHttp, object: Gio.SocketAddress) => boolean)): number
    emit(sigName: "block-remote-address", object: Gio.SocketAddress): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EndpointHttp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EndpointHttp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EndpointHttp_ConstructProps)
    _init (config?: EndpointHttp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sparql_connection: SparqlConnection, port: number, certificate: Gio.TlsCertificate, cancellable?: Gio.Cancellable | null): EndpointHttp
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface NamespaceManager_ConstructProps extends GObject.Object_ConstructProps {
}
class NamespaceManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.NamespaceManager */
    add_prefix(prefix: string, ns: string): void
    compress_uri(uri: string): string
    expand_uri(compact_uri: string): string
    foreach(func: GLib.HFunc): void
    has_prefix(prefix: string): boolean
    lookup_prefix(prefix: string): string | null
    print_turtle(): string
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
    connect(sigName: "notify", callback: (($obj: NamespaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NamespaceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NamespaceManager_ConstructProps)
    _init (config?: NamespaceManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NamespaceManager
    static get_default(): NamespaceManager
    static $gtype: GObject.Type
}
interface Notifier_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Tracker-3.0.Tracker.Notifier */
    connection?: SparqlConnection
}
class Notifier {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.Notifier */
    signal_subscribe(connection: Gio.DBusConnection, service: string, object_path?: string | null, graph?: string | null): number
    signal_unsubscribe(handler_id: number): void
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
    /* Signals of Tracker-3.0.Tracker.Notifier */
    connect(sigName: "events", callback: (($obj: Notifier, service: string, graph: string, events: NotifierEvent[]) => void)): number
    connect_after(sigName: "events", callback: (($obj: Notifier, service: string, graph: string, events: NotifierEvent[]) => void)): number
    emit(sigName: "events", service: string, graph: string, events: NotifierEvent[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notifier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Notifier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Notifier_ConstructProps)
    _init (config?: Notifier_ConstructProps): void
    static $gtype: GObject.Type
}
interface Resource_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Tracker-3.0.Tracker.Resource */
    identifier?: string
}
class Resource {
    /* Properties of Tracker-3.0.Tracker.Resource */
    identifier: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.Resource */
    add_boolean(property_uri: string, value: boolean): void
    add_datetime(property_uri: string, value: GLib.DateTime): void
    add_double(property_uri: string, value: number): void
    add_gvalue(property_uri: string, value: any): void
    add_int(property_uri: string, value: number): void
    add_int64(property_uri: string, value: number): void
    add_relation(property_uri: string, resource: Resource): void
    add_string(property_uri: string, value: string): void
    add_uri(property_uri: string, value: string): void
    get_first_boolean(property_uri: string): boolean
    get_first_datetime(property_uri: string): GLib.DateTime
    get_first_double(property_uri: string): number
    get_first_int(property_uri: string): number
    get_first_int64(property_uri: string): number
    get_first_relation(property_uri: string): Resource
    get_first_string(property_uri: string): string
    get_first_uri(property_uri: string): string
    get_identifier(): string
    get_properties(): string[]
    get_property_overwrite(property_uri: string): boolean
    get_values(property_uri: string): any[]
    identifier_compare_func(identifier: string): number
    print_jsonld(namespaces?: NamespaceManager | null): string
    print_sparql_update(namespaces?: NamespaceManager | null, graph_id?: string | null): string
    print_turtle(namespaces?: NamespaceManager | null): string
    serialize(): GLib.Variant
    set_boolean(property_uri: string, value: boolean): void
    set_datetime(property_uri: string, value: GLib.DateTime): void
    set_double(property_uri: string, value: number): void
    set_gvalue(property_uri: string, value: any): void
    set_identifier(identifier?: string | null): void
    set_int(property_uri: string, value: number): void
    set_int64(property_uri: string, value: number): void
    set_relation(property_uri: string, resource: Resource): void
    set_string(property_uri: string, value: string): void
    set_uri(property_uri: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::identifier", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identifier", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Resource_ConstructProps)
    _init (config?: Resource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(identifier?: string | null): Resource
    static deserialize(variant: GLib.Variant): Resource
    static $gtype: GObject.Type
}
interface SparqlConnection_ConstructProps extends GObject.Object_ConstructProps {
}
class SparqlConnection {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.SparqlConnection */
    close(): void
    close_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(res: Gio.AsyncResult): boolean
    create_batch(): Batch
    create_notifier(): Notifier
    get_namespace_manager(): NamespaceManager
    query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor
    query_async(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_finish(res: Gio.AsyncResult): SparqlCursor
    query_statement(sparql: string, cancellable?: Gio.Cancellable | null): SparqlStatement | null
    update(sparql: string, cancellable?: Gio.Cancellable | null): void
    update_array_async(sparql: string, sparql_length: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_array_finish(res: Gio.AsyncResult): boolean
    update_async(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_blank(sparql: string, cancellable?: Gio.Cancellable | null): GLib.Variant
    update_blank_async(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_blank_finish(res: Gio.AsyncResult): GLib.Variant
    update_finish(res: Gio.AsyncResult): void
    update_resource(graph: string | null, resource: Resource, cancellable?: Gio.Cancellable | null): boolean
    update_resource_async(graph: string | null, resource: Resource, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_resource_finish(res: Gio.AsyncResult): boolean
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
    static bus_new(service_name: string, object_path?: string | null, dbus_connection?: Gio.DBusConnection | null): SparqlConnection
    static bus_new_finish(result: Gio.AsyncResult): SparqlConnection
    static new(flags: SparqlConnectionFlags, store?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null): SparqlConnection
    static new_finish(result: Gio.AsyncResult): SparqlConnection
    static remote_new(uri_base: string): SparqlConnection
    static bus_new_async(service_name: string, object_path?: string | null, dbus_connection?: Gio.DBusConnection | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_async(flags: SparqlConnectionFlags, store?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
interface SparqlCursor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Tracker-3.0.Tracker.SparqlCursor */
    connection?: SparqlConnection
}
class SparqlCursor {
    /* Properties of Tracker-3.0.Tracker.SparqlCursor */
    readonly n_columns: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.SparqlCursor */
    close(): void
    get_boolean(column: number): boolean
    get_connection(): SparqlConnection
    get_datetime(column: number): GLib.DateTime | null
    get_double(column: number): number
    get_integer(column: number): number
    get_n_columns(): number
    get_string(column: number): [ /* returnType */ string | null, /* length */ number | null ]
    get_value_type(column: number): SparqlValueType
    get_variable_name(column: number): string
    is_bound(column: number): boolean
    next(cancellable?: Gio.Cancellable | null): boolean
    next_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    next_finish(res: Gio.AsyncResult): boolean
    rewind(): void
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
    connect(sigName: "notify", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
interface SparqlStatement_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Tracker-3.0.Tracker.SparqlStatement */
    connection?: SparqlConnection
    sparql?: string
}
class SparqlStatement {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Tracker-3.0.Tracker.SparqlStatement */
    bind_boolean(name: string, value: boolean): void
    bind_datetime(name: string, value: GLib.DateTime): void
    bind_double(name: string, value: number): void
    bind_int(name: string, value: number): void
    bind_string(name: string, value: string): void
    clear_bindings(): void
    execute(cancellable?: Gio.Cancellable | null): SparqlCursor
    execute_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    execute_finish(res: Gio.AsyncResult): SparqlCursor
    get_connection(): SparqlConnection
    get_sparql(): string
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
    connect(sigName: "notify", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SparqlStatement_ConstructProps)
    _init (config?: SparqlStatement_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class BatchClass {
    static name: string
}
abstract class EndpointClass {
    static name: string
}
abstract class NamespaceManagerClass {
    /* Fields of Tracker-3.0.Tracker.NamespaceManagerClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class NotifierClass {
    static name: string
}
class NotifierEvent {
    /* Methods of Tracker-3.0.Tracker.NotifierEvent */
    get_event_type(): NotifierEventType
    get_id(): number
    get_urn(): string
    static name: string
}
abstract class ResourceClass {
    static name: string
}
abstract class SparqlConnectionClass {
    static name: string
}
abstract class SparqlCursorClass {
    static name: string
}
abstract class SparqlStatementClass {
    static name: string
}
}
export default Tracker;