/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Zeitgeist-2.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';

export namespace Zeitgeist {

enum ResultType {
    MOST_RECENT_EVENTS,
    LEAST_RECENT_EVENTS,
    MOST_RECENT_SUBJECTS,
    LEAST_RECENT_SUBJECTS,
    MOST_POPULAR_SUBJECTS,
    LEAST_POPULAR_SUBJECTS,
    MOST_POPULAR_ACTOR,
    LEAST_POPULAR_ACTOR,
    MOST_RECENT_ACTOR,
    LEAST_RECENT_ACTOR,
    MOST_RECENT_ORIGIN,
    LEAST_RECENT_ORIGIN,
    MOST_POPULAR_ORIGIN,
    LEAST_POPULAR_ORIGIN,
    OLDEST_ACTOR,
    MOST_RECENT_SUBJECT_INTERPRETATION,
    LEAST_RECENT_SUBJECT_INTERPRETATION,
    MOST_POPULAR_SUBJECT_INTERPRETATION,
    LEAST_POPULAR_SUBJECT_INTERPRETATION,
    MOST_RECENT_MIMETYPE,
    LEAST_RECENT_MIMETYPE,
    MOST_POPULAR_MIMETYPE,
    LEAST_POPULAR_MIMETYPE,
    MOST_RECENT_CURRENT_URI,
    LEAST_RECENT_CURRENT_URI,
    MOST_POPULAR_CURRENT_URI,
    LEAST_POPULAR_CURRENT_URI,
    MOST_RECENT_EVENT_ORIGIN,
    LEAST_RECENT_EVENT_ORIGIN,
    MOST_POPULAR_EVENT_ORIGIN,
    LEAST_POPULAR_EVENT_ORIGIN,
    MOST_RECENT_CURRENT_ORIGIN,
    LEAST_RECENT_CURRENT_ORIGIN,
    MOST_POPULAR_CURRENT_ORIGIN,
    LEAST_POPULAR_CURRENT_ORIGIN,
    RELEVANCY,
}
enum RelevantResultType {
    RECENT,
    RELATED,
}
enum StorageState {
    NOT_AVAILABLE,
    AVAILABLE,
    ANY,
}
enum EngineError {
    BACKUP_FAILED,
    DATABASE_BUSY,
    DATABASE_CANTOPEN,
    DATABASE_CORRUPT,
    DATABASE_ERROR,
    DATABASE_RETIRE_FAILED,
    EXISTING_INSTANCE,
    INVALID_ARGUMENT,
    INVALID_EVENT,
    INVALID_KEY,
}
enum DataModelError {
    INVALID_SIGNATURE,
    NULL_EVENT,
    TOO_MANY_RESULTS,
}
const DataSourcesSIG_DATASOURCES: string
const TimestampSECOND: number
const TimestampMINUTE: number
const TimestampHOUR: number
const TimestampDAY: number
const TimestampWEEK: number
const TimestampYEAR: number
const NCALALARM: string
const NCALATTACHMENT: string
const NCALCALENDAR: string
const NCALCALENDAR_DATA_OBJECT: string
const NCALEVENT: string
const NCALFREEBUSY: string
const NCALJOURNAL: string
const NCALTIMEZONE: string
const NCALTODO: string
const NCOCONTACT: string
const NCOCONTACT_GROUP: string
const NCOCONTACT_LIST: string
const NCOCONTACT_LIST_DATA_OBJECT: string
const NCOORGANIZATION_CONTACT: string
const NCOPERSON_CONTACT: string
const NFOAPPLICATION: string
const NFOARCHIVE: string
const NFOARCHIVE_ITEM: string
const NFOATTACHMENT: string
const NFOAUDIO: string
const NFOBOOKMARK: string
const NFOBOOKMARK_FOLDER: string
const NFOCURSOR: string
const NFODATA_CONTAINER: string
const NFODELETED_RESOURCE: string
const NFODOCUMENT: string
const NFOEMBEDDED_FILE_DATA_OBJECT: string
const NFOEXECUTABLE: string
const NFOFILESYSTEM: string
const NFOFILESYSTEM_IMAGE: string
const NFOFILE_DATA_OBJECT: string
const NFOFOLDER: string
const NFOFONT: string
const NFOHARD_DISK_PARTITION: string
const NFOHTML_DOCUMENT: string
const NFOICON: string
const NFOIMAGE: string
const NFOMEDIA: string
const NFOMEDIA_LIST: string
const NFOMEDIA_STREAM: string
const NFOMIND_MAP: string
const NFOOPERATING_SYSTEM: string
const NFOPAGINATED_TEXT_DOCUMENT: string
const NFOPLAIN_TEXT_DOCUMENT: string
const NFOPRESENTATION: string
const NFORASTER_IMAGE: string
const NFOREMOTE_DATA_OBJECT: string
const NFOREMOTE_PORT_ADDRESS: string
const NFOSOFTWARE: string
const NFOSOFTWARE_ITEM: string
const NFOSOFTWARE_SERVICE: string
const NFOSOURCE_CODE: string
const NFOSPREADSHEET: string
const NFOTEXT_DOCUMENT: string
const NFOTRASH: string
const NFOVECTOR_IMAGE: string
const NFOVIDEO: string
const NFOVISUAL: string
const NFOWEBSITE: string
const NFOWEB_DATA_OBJECT: string
const NIEDATA_OBJECT: string
const NIEINFORMATION_ELEMENT: string
const NMMMOVIE: string
const NMMMUSIC_ALBUM: string
const NMMMUSIC_PIECE: string
const NMMTVSERIES: string
const NMMTVSHOW: string
const NMOEMAIL: string
const NMOIMMESSAGE: string
const NMOMAILBOX: string
const NMOMAILBOX_DATA_OBJECT: string
const NMOMESSAGE: string
const NMOMIME_ENTITY: string
const ZGACCEPT_EVENT: string
const ZGACCESS_EVENT: string
const ZGAPPLICATION_ACTION: string
const ZGCREATE_EVENT: string
const ZGDELETE_EVENT: string
const ZGDENY_EVENT: string
const ZGEVENT_INTERPRETATION: string
const ZGEVENT_MANIFESTATION: string
const ZGEXPIRE_EVENT: string
const ZGHEURISTIC_ACTIVITY: string
const ZGLEAVE_EVENT: string
const ZGMODIFY_EVENT: string
const ZGMOVE_EVENT: string
const ZGRECEIVE_EVENT: string
const ZGSCHEDULED_ACTIVITY: string
const ZGSEND_EVENT: string
const ZGSYSTEM_NOTIFICATION: string
const ZGUSER_ACTIVITY: string
const ZGWORLD_ACTIVITY: string
const UtilsENGINE_DBUS_NAME: string
const UtilsENGINE_DBUS_PATH: string
const UtilsSIG_EVENT: string
const UtilsMAX_DBUS_RESULT_SIZE: number
const UtilsCACHE_SIZE: number
function data_sources_from_variant(sources_variant: GLib.Variant): DataSource[]
function data_sources_to_variant(sources: GLib.HashTable): GLib.Variant
function events_from_variant(vevents: GLib.Variant): Event[]
function events_to_variant(events: Event[]): GLib.Variant
function events_to_variant_with_limit(events: Event[], limit: number): GLib.Variant
function timestamp_from_timeval(timeval: GLib.TimeVal): number
function timestamp_to_timeval(timestamp: number): /* result */ GLib.TimeVal
function timestamp_from_now(): number
function timestamp_from_iso8601(datetime: string): number
function timestamp_to_iso8601(timestamp: number): string
function timestamp_from_date(date: GLib.Date): number
function timestamp_from_dmy(day: GLib.DateDay, month: GLib.DateMonth, year: GLib.DateYear): number
function timestamp_to_date(timestamp: number): /* result */ GLib.Date
function timestamp_next_midnight(timestamp: number): number
function timestamp_prev_midnight(timestamp: number): number
function symbol_get_display_name(symbol_uri: string): string
function symbol_get_description(symbol_uri: string): string
function symbol_get_all_parents(symbol_uri: string): string[]
function symbol_get_all_children(symbol_uri: string): string[]
function symbol_get_children(symbol_uri: string): string[]
function symbol_get_parents(symbol_uri: string): string[]
function symbol_is_a(symbol_uri?: string | null, parent_uri?: string | null): boolean
function utils_get_data_path(): string
function utils_get_default_data_path(): string
function utils_get_database_file_path(): string
function utils_set_database_file_path(path: string): void
function utils_get_database_file_backup_path(): string
function utils_get_database_file_retire_name(): string
function utils_get_local_extensions_path(): string
function utils_using_in_memory_database(): boolean
function utils_backup_database(): void
function utils_parse_negation(val: string): [ /* returnType */ boolean, /* val */ string ]
function utils_parse_noexpand(val: string): [ /* returnType */ boolean, /* val */ string ]
function utils_parse_wildcard(val: string): [ /* returnType */ boolean, /* val */ string ]
function utils_is_empty_string(s?: string | null): boolean
function utils_log_may_read_directly(): boolean
function result_type_is_sort_order_asc(result_type: ResultType): boolean
function register_mimetype(mimetype: string, interpretation_uri: string): void
function register_mimetype_regex(mimetype_regex: string, interpretation_uri: string): void
function interpretation_for_mimetype(mimetype?: string | null): string | null
function register_uri_scheme(uri_scheme: string, manifestation_type: string): void
function manifestation_for_uri(uri: string): string | null
interface RemoteRegistry_ConstructProps extends GObject.Object_ConstructProps {
}
class RemoteRegistry {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteRegistry */
    get_data_sources(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant
    register_data_source(unique_id: string, name: string, description: string, event_templates: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    register_data_source_finish(_res_: Gio.AsyncResult): boolean
    set_data_source_enabled(unique_id: string, enabled: boolean, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    set_data_source_enabled_finish(_res_: Gio.AsyncResult): void
    get_data_source_from_id(unique_id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteRegistry */
    vfunc_get_data_sources(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant
    vfunc_register_data_source(unique_id: string, name: string, description: string, event_templates: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_register_data_source_finish(_res_: Gio.AsyncResult): boolean
    vfunc_set_data_source_enabled(unique_id: string, enabled: boolean, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_set_data_source_enabled_finish(_res_: Gio.AsyncResult): void
    vfunc_get_data_source_from_id(unique_id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist-2.0.Zeitgeist.RemoteRegistry */
    connect(sigName: "data-source-disconnected", callback: (($obj: RemoteRegistry, data_source: GLib.Variant) => void)): number
    connect_after(sigName: "data-source-disconnected", callback: (($obj: RemoteRegistry, data_source: GLib.Variant) => void)): number
    emit(sigName: "data-source-disconnected", data_source: GLib.Variant): void
    connect(sigName: "data-source-enabled", callback: (($obj: RemoteRegistry, unique_id: string, enabled: boolean) => void)): number
    connect_after(sigName: "data-source-enabled", callback: (($obj: RemoteRegistry, unique_id: string, enabled: boolean) => void)): number
    emit(sigName: "data-source-enabled", unique_id: string, enabled: boolean): void
    connect(sigName: "data-source-registered", callback: (($obj: RemoteRegistry, data_source: GLib.Variant) => void)): number
    connect_after(sigName: "data-source-registered", callback: (($obj: RemoteRegistry, data_source: GLib.Variant) => void)): number
    emit(sigName: "data-source-registered", data_source: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteRegistry_ConstructProps)
    _init (config?: RemoteRegistry_ConstructProps): void
    static $gtype: GObject.Type
}
interface RemoteLog_ConstructProps extends GObject.Object_ConstructProps {
}
class RemoteLog {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteLog */
    delete_events(event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    find_event_ids(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_event_ids_finish(_res_: Gio.AsyncResult): number[]
    find_events(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    find_related_uris(time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_related_uris_finish(_res_: Gio.AsyncResult): string[]
    get_events(event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    insert_events(events: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    insert_events_finish(_res_: Gio.AsyncResult): number[]
    install_monitor(monitor_path: string, time_range: GLib.Variant, event_templates: GLib.Variant, owner?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    install_monitor_finish(_res_: Gio.AsyncResult): void
    remove_monitor(monitor_path: string, owner?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_monitor_finish(_res_: Gio.AsyncResult): void
    quit(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    quit_finish(_res_: Gio.AsyncResult): void
    get_extensions(): string[]
    get_version(): /* result */ VersionStruct
    get_datapath(): string
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteLog */
    vfunc_delete_events(event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    vfunc_find_event_ids(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_event_ids_finish(_res_: Gio.AsyncResult): number[]
    vfunc_find_events(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    vfunc_find_related_uris(time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_find_related_uris_finish(_res_: Gio.AsyncResult): string[]
    vfunc_get_events(event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_get_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    vfunc_insert_events(events: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_insert_events_finish(_res_: Gio.AsyncResult): number[]
    vfunc_install_monitor(monitor_path: string, time_range: GLib.Variant, event_templates: GLib.Variant, owner?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_install_monitor_finish(_res_: Gio.AsyncResult): void
    vfunc_remove_monitor(monitor_path: string, owner?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_monitor_finish(_res_: Gio.AsyncResult): void
    vfunc_quit(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_quit_finish(_res_: Gio.AsyncResult): void
    vfunc_get_extensions(): string[]
    vfunc_get_version(): /* result */ VersionStruct
    vfunc_get_datapath(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteLog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteLog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteLog_ConstructProps)
    _init (config?: RemoteLog_ConstructProps): void
    static $gtype: GObject.Type
}
interface RemoteMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
class RemoteMonitor {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor */
    notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback | null): void
    notify_insert_finish(_res_: Gio.AsyncResult): void
    notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback | null): void
    notify_delete_finish(_res_: Gio.AsyncResult): void
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor */
    vfunc_notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_notify_insert_finish(_res_: Gio.AsyncResult): void
    vfunc_notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_notify_delete_finish(_res_: Gio.AsyncResult): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteMonitor_ConstructProps)
    _init (config?: RemoteMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
interface RemoteSimpleIndexer_ConstructProps extends GObject.Object_ConstructProps {
}
class RemoteSimpleIndexer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer */
    search(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    search_finish(_res_: Gio.AsyncResult): [ /* events */ GLib.Variant, /* matches */ number ]
    search_with_relevancies(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    search_with_relevancies_finish(_res_: Gio.AsyncResult): [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer */
    vfunc_search(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_search_finish(_res_: Gio.AsyncResult): [ /* events */ GLib.Variant, /* matches */ number ]
    vfunc_search_with_relevancies(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_search_with_relevancies_finish(_res_: Gio.AsyncResult): [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteSimpleIndexer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteSimpleIndexer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteSimpleIndexer_ConstructProps)
    _init (config?: RemoteSimpleIndexer_ConstructProps): void
    static $gtype: GObject.Type
}
interface NetworkManagerDBus_ConstructProps extends GObject.Object_ConstructProps {
}
class NetworkManagerDBus {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus */
    state(): number
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus */
    vfunc_state(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus */
    connect(sigName: "state-changed", callback: (($obj: NetworkManagerDBus, state: number) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: NetworkManagerDBus, state: number) => void)): number
    emit(sigName: "state-changed", state: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkManagerDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkManagerDBus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkManagerDBus_ConstructProps)
    _init (config?: NetworkManagerDBus_ConstructProps): void
    static $gtype: GObject.Type
}
interface ConnmanManagerDBus_ConstructProps extends GObject.Object_ConstructProps {
}
class ConnmanManagerDBus {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus */
    get_state(): string
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus */
    vfunc_get_state(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus */
    connect(sigName: "state-changed", callback: (($obj: ConnmanManagerDBus, state: string) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: ConnmanManagerDBus, state: string) => void)): number
    emit(sigName: "state-changed", state: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConnmanManagerDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConnmanManagerDBus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConnmanManagerDBus_ConstructProps)
    _init (config?: ConnmanManagerDBus_ConstructProps): void
    static $gtype: GObject.Type
}
interface ResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
class ResultSet {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.ResultSet */
    size(): number
    estimated_matches(): number
    next_value(): Event | null
    has_next(): boolean
    tell(): number
    reset(): void
    iterator(): ResultSet
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.ResultSet */
    vfunc_size(): number
    vfunc_estimated_matches(): number
    vfunc_next_value(): Event | null
    vfunc_has_next(): boolean
    vfunc_tell(): number
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResultSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResultSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ResultSet_ConstructProps)
    _init (config?: ResultSet_ConstructProps): void
    static $gtype: GObject.Type
}
interface DataSourceRegistry_ConstructProps extends QueuedProxyWrapper_ConstructProps {
}
class DataSourceRegistry {
    /* Properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_created: boolean
    is_connected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry */
    get_data_sources(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_data_sources_finish(_res_: Gio.AsyncResult): DataSource[]
    get_data_source_from_id(unique_id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_data_source_from_id_finish(_res_: Gio.AsyncResult): DataSource
    register_data_source(data_source: DataSource, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    register_data_source_finish(_res_: Gio.AsyncResult): boolean
    set_data_source_enabled(unique_id: string, enabled: boolean, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    set_data_source_enabled_finish(_res_: Gio.AsyncResult): void
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_acquired(proxy: GObject.Object): void
    proxy_unavailable(err: Gio.IOErrorEnum): void
    process_queued_methods(): void
    name_owner_changed(pspec: GObject.ParamSpec): void
    on_connection_established(): void
    on_connection_lost(): void
    wait_for_proxy(_callback_?: Gio.AsyncReadyCallback | null): void
    wait_for_proxy_finish(_res_: Gio.AsyncResult): void
    get_proxy_created(): boolean
    get_is_connected(): boolean
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    vfunc_on_connection_established(): void
    vfunc_on_connection_lost(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry */
    connect(sigName: "source-disconnected", callback: (($obj: DataSourceRegistry, data_source: DataSource) => void)): number
    connect_after(sigName: "source-disconnected", callback: (($obj: DataSourceRegistry, data_source: DataSource) => void)): number
    emit(sigName: "source-disconnected", data_source: DataSource): void
    connect(sigName: "source-enabled", callback: (($obj: DataSourceRegistry, unique_id: string, enabled: boolean) => void)): number
    connect_after(sigName: "source-enabled", callback: (($obj: DataSourceRegistry, unique_id: string, enabled: boolean) => void)): number
    emit(sigName: "source-enabled", unique_id: string, enabled: boolean): void
    connect(sigName: "source-registered", callback: (($obj: DataSourceRegistry, data_source: DataSource) => void)): number
    connect_after(sigName: "source-registered", callback: (($obj: DataSourceRegistry, data_source: DataSource) => void)): number
    emit(sigName: "source-registered", data_source: DataSource): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-created", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-connected", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataSourceRegistry_ConstructProps)
    _init (config?: DataSourceRegistry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DataSourceRegistry
    static $gtype: GObject.Type
}
interface Index_ConstructProps extends QueuedProxyWrapper_ConstructProps {
}
class Index {
    /* Properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_created: boolean
    is_connected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Index */
    search(query: string, time_range: TimeRange, event_templates: Event[], offset: number, num_events: number, result_type: ResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    search_finish(_res_: Gio.AsyncResult): ResultSet
    search_with_relevancies(query: string, time_range: TimeRange, event_templates: Event[], storage_state: StorageState, offset: number, num_events: number, result_type: ResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    search_with_relevancies_finish(_res_: Gio.AsyncResult): [ /* returnType */ ResultSet, /* relevancies */ number[] ]
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_acquired(proxy: GObject.Object): void
    proxy_unavailable(err: Gio.IOErrorEnum): void
    process_queued_methods(): void
    name_owner_changed(pspec: GObject.ParamSpec): void
    on_connection_established(): void
    on_connection_lost(): void
    wait_for_proxy(_callback_?: Gio.AsyncReadyCallback | null): void
    wait_for_proxy_finish(_res_: Gio.AsyncResult): void
    get_proxy_created(): boolean
    get_is_connected(): boolean
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    vfunc_on_connection_established(): void
    vfunc_on_connection_lost(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-created", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-connected", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Index
    static $gtype: GObject.Type
}
interface Log_ConstructProps extends QueuedProxyWrapper_ConstructProps {
}
class Log {
    /* Properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_created: boolean
    is_connected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Log */
    insert_event(event: Event, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    insert_event_finish(_res_: Gio.AsyncResult): number[]
    insert_events(events: Event[], cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    insert_events_finish(_res_: Gio.AsyncResult): number[]
    insert_event_no_reply(event: Event): void
    insert_events_no_reply(events: Event[]): void
    find_events(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_events_finish(_res_: Gio.AsyncResult): ResultSet
    find_event_ids(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_event_ids_finish(_res_: Gio.AsyncResult): number[]
    get_events(event_ids: number[], cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    get_events_finish(_res_: Gio.AsyncResult): ResultSet
    find_related_uris(time_range: TimeRange, event_templates: Event[], result_event_templates: Event[], storage_state: StorageState, num_events: number, result_type: RelevantResultType, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    find_related_uris_finish(_res_: Gio.AsyncResult): string[]
    delete_events(event_ids: number[], cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    delete_events_finish(_res_: Gio.AsyncResult): TimeRange
    quit(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    quit_finish(_res_: Gio.AsyncResult): void
    install_monitor(monitor: Monitor): void
    remove_monitor(monitor: Monitor): void
    get_version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
    get_extensions(): string[]
    datapath(): string
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_acquired(proxy: GObject.Object): void
    proxy_unavailable(err: Gio.IOErrorEnum): void
    process_queued_methods(): void
    name_owner_changed(pspec: GObject.ParamSpec): void
    on_connection_established(): void
    on_connection_lost(): void
    wait_for_proxy(_callback_?: Gio.AsyncReadyCallback | null): void
    wait_for_proxy_finish(_res_: Gio.AsyncResult): void
    get_proxy_created(): boolean
    get_is_connected(): boolean
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    vfunc_on_connection_established(): void
    vfunc_on_connection_lost(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-created", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-connected", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Log_ConstructProps)
    _init (config?: Log_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Log
    static get_default(): Log
    static $gtype: GObject.Type
}
interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Zeitgeist-2.0.Zeitgeist.Monitor */
    time_range?: TimeRange
    event_templates?: Event[]
}
class Monitor {
    /* Properties of Zeitgeist-2.0.Zeitgeist.Monitor */
    time_range: TimeRange
    event_templates: Event[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Monitor */
    get_templates(): Event[]
    get_path(): string
    get_time_range(): TimeRange
    set_time_range(value: TimeRange): void
    get_event_templates(): Event[]
    set_event_templates(value: Event[]): void
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
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor */
    notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback | null): void
    notify_insert_finish(_res_: Gio.AsyncResult): void
    notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback | null): void
    notify_delete_finish(_res_: Gio.AsyncResult): void
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.Monitor */
    vfunc_notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_notify_insert_finish(_res_: Gio.AsyncResult): void
    vfunc_notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_notify_delete_finish(_res_: Gio.AsyncResult): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Zeitgeist-2.0.Zeitgeist.Monitor */
    connect(sigName: "events-inserted", callback: (($obj: Monitor, time_range: TimeRange, events: ResultSet) => void)): number
    connect_after(sigName: "events-inserted", callback: (($obj: Monitor, time_range: TimeRange, events: ResultSet) => void)): number
    emit(sigName: "events-inserted", time_range: TimeRange, events: ResultSet): void
    connect(sigName: "events-deleted", callback: (($obj: Monitor, time_range: TimeRange, event_ids: number[]) => void)): number
    connect_after(sigName: "events-deleted", callback: (($obj: Monitor, time_range: TimeRange, event_ids: number[]) => void)): number
    emit(sigName: "events-deleted", time_range: TimeRange, event_ids: number[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::time-range", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-range", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::event-templates", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-templates", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Monitor_ConstructProps)
    _init (config?: Monitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(time_range: TimeRange, event_templates: Event[]): Monitor
    static $gtype: GObject.Type
}
interface QueuedProxyWrapper_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_created?: boolean
    is_connected?: boolean
}
class QueuedProxyWrapper {
    /* Properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_created: boolean
    is_connected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxy_acquired(proxy: GObject.Object): void
    proxy_unavailable(err: Gio.IOErrorEnum): void
    process_queued_methods(): void
    name_owner_changed(pspec: GObject.ParamSpec): void
    on_connection_established(): void
    on_connection_lost(): void
    wait_for_proxy(_callback_?: Gio.AsyncReadyCallback | null): void
    wait_for_proxy_finish(_res_: Gio.AsyncResult): void
    get_proxy_created(): boolean
    get_is_connected(): boolean
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
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    vfunc_on_connection_established(): void
    vfunc_on_connection_lost(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-created", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-connected", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: QueuedProxyWrapper_ConstructProps)
    _init (config?: QueuedProxyWrapper_ConstructProps): void
    static $gtype: GObject.Type
}
class QueuedProxyWrapperQueuedMethod {
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod */
    get_queued_method(): [ /* returnType */ GLib.SourceFunc, /* result_target */ object | null ]
    static name: string
    static new(callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod
    constructor(callback: GLib.SourceFunc)
    /* Static methods and pseudo-constructors */
    static new(callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod
}
interface DataSource_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Zeitgeist-2.0.Zeitgeist.DataSource */
    unique_id?: string
    name?: string
    description?: string
    event_templates?: Event[]
    enabled?: boolean
    running?: boolean
    timestamp?: number
}
class DataSource {
    /* Properties of Zeitgeist-2.0.Zeitgeist.DataSource */
    unique_id: string
    name: string
    description: string
    event_templates: Event[]
    enabled: boolean
    running: boolean
    timestamp: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.DataSource */
    to_variant(): GLib.Variant
    get_unique_id(): string
    set_unique_id(value: string): void
    get_name(): string
    set_name(value: string): void
    get_description(): string
    set_description(value: string): void
    get_event_templates(): Event[] | null
    set_event_templates(value?: Event[] | null): void
    get_enabled(): boolean
    set_enabled(value: boolean): void
    get_running(): boolean
    set_running(value: boolean): void
    get_timestamp(): number
    set_timestamp(value: number): void
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
    connect(sigName: "notify", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::unique-id", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique-id", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::event-templates", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-templates", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::running", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataSource_ConstructProps)
    _init (config?: DataSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DataSource
    static full(unique_id: string, name: string, description: string, templates?: Event[] | null): DataSource
    static from_variant(variant: GLib.Variant, reset_running: boolean): DataSource
    static $gtype: GObject.Type
}
interface Event_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Zeitgeist-2.0.Zeitgeist.Event */
    id?: number
    timestamp?: number
    origin?: string
    actor?: string
    interpretation?: string
    manifestation?: string
    subjects?: Subject[]
    payload?: Uint8Array
}
class Event {
    /* Properties of Zeitgeist-2.0.Zeitgeist.Event */
    id: number
    timestamp: number
    origin: string
    actor: string
    interpretation: string
    manifestation: string
    subjects: Subject[]
    payload: Uint8Array
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Event */
    get_subject(index: number): Subject
    num_subjects(): number
    add_subject(subject: Subject): void
    take_subject(subject: Subject): void
    set_actor_from_app_info(info: Gio.AppInfo): void
    to_variant(): GLib.Variant
    debug_print(): void
    matches_template(template_event: Event): boolean
    get_id(): number
    set_id(value: number): void
    get_timestamp(): number
    set_timestamp(value: number): void
    get_origin(): string | null
    set_origin(value?: string | null): void
    get_actor(): string | null
    set_actor(value?: string | null): void
    get_interpretation(): string | null
    set_interpretation(value?: string | null): void
    get_manifestation(): string | null
    set_manifestation(value?: string | null): void
    get_subjects(): Subject[]
    set_subjects(value: Subject[]): void
    get_payload(): Uint8Array | null
    set_payload(value?: Uint8Array | null): void
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
    connect(sigName: "notify", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::origin", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actor", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interpretation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpretation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manifestation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manifestation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subjects", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subjects", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::payload", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::payload", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Event_ConstructProps)
    _init (config?: Event_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_variant(event_variant: GLib.Variant): Event
    static new(): Event
    static $gtype: GObject.Type
}
interface Subject_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Zeitgeist-2.0.Zeitgeist.Subject */
    uri?: string
    origin?: string
    text?: string
    storage?: string
    current_uri?: string
    current_origin?: string
    mimetype?: string
    interpretation?: string
    manifestation?: string
}
class Subject {
    /* Properties of Zeitgeist-2.0.Zeitgeist.Subject */
    uri: string
    origin: string
    text: string
    storage: string
    current_uri: string
    current_origin: string
    mimetype: string
    interpretation: string
    manifestation: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Subject */
    to_variant(): GLib.Variant
    matches_template(template_subject: Subject): boolean
    get_uri(): string | null
    set_uri(value?: string | null): void
    get_origin(): string | null
    set_origin(value?: string | null): void
    get_text(): string | null
    set_text(value?: string | null): void
    get_storage(): string | null
    set_storage(value?: string | null): void
    get_current_uri(): string | null
    set_current_uri(value?: string | null): void
    get_current_origin(): string | null
    set_current_origin(value?: string | null): void
    get_mimetype(): string | null
    set_mimetype(value?: string | null): void
    get_interpretation(): string | null
    set_interpretation(value?: string | null): void
    get_manifestation(): string | null
    set_manifestation(value?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::storage", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mimetype", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mimetype", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interpretation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpretation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manifestation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manifestation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Subject_ConstructProps)
    _init (config?: Subject_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static full(uri?: string | null, interpretation?: string | null, manifestation?: string | null, mimetype?: string | null, origin?: string | null, text?: string | null, storage?: string | null): Subject
    static move_event(source_uri?: string | null, source_origin?: string | null, destination_uri?: string | null, destination_origin?: string | null, interpretation?: string | null, manifestation?: string | null, mimetype?: string | null, text?: string | null, storage?: string | null): Subject
    static from_variant(subject_variant: GLib.Variant): Subject
    static new(): Subject
    static $gtype: GObject.Type
}
interface TimeRange_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Zeitgeist-2.0.Zeitgeist.TimeRange */
    start?: number
    end?: number
}
class TimeRange {
    /* Properties of Zeitgeist-2.0.Zeitgeist.TimeRange */
    start: number
    end: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.TimeRange */
    to_variant(): GLib.Variant
    intersect(time_range: TimeRange): TimeRange | null
    get_start(): number
    get_end(): number
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
    connect(sigName: "notify", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::start", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::end", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimeRange_ConstructProps)
    _init (config?: TimeRange_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(start_msec: number, end_msec: number): TimeRange
    static anytime(): TimeRange
    static to_now(): TimeRange
    static from_now(): TimeRange
    static from_variant(variant: GLib.Variant): TimeRange
    static $gtype: GObject.Type
}
interface SimpleResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
class SimpleResultSet {
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
    /* Methods of Zeitgeist-2.0.Zeitgeist.ResultSet */
    size(): number
    estimated_matches(): number
    next_value(): Event | null
    has_next(): boolean
    tell(): number
    reset(): void
    iterator(): ResultSet
    /* Virtual methods of Zeitgeist-2.0.Zeitgeist.SimpleResultSet */
    vfunc_size(): number
    vfunc_estimated_matches(): number
    vfunc_next_value(): Event | null
    vfunc_has_next(): boolean
    vfunc_tell(): number
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleResultSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleResultSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleResultSet_ConstructProps)
    _init (config?: SimpleResultSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(events: Event[]): SimpleResultSet
    static with_num_matches(events: Event[], matches: number): SimpleResultSet
    static $gtype: GObject.Type
}
abstract class DataSourceRegistryClass {
    static name: string
}
class DataSourceRegistryPrivate {
    static name: string
}
abstract class IndexClass {
    static name: string
}
class IndexPrivate {
    static name: string
}
abstract class LogClass {
    static name: string
}
class LogPrivate {
    static name: string
}
abstract class MonitorClass {
    static name: string
}
class MonitorPrivate {
    static name: string
}
abstract class QueuedProxyWrapperClass {
    /* Fields of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperClass */
    readonly on_connection_established: (self: QueuedProxyWrapper) => void
    readonly on_connection_lost: (self: QueuedProxyWrapper) => void
    static name: string
}
class QueuedProxyWrapperPrivate {
    static name: string
}
abstract class QueuedProxyWrapperQueuedMethodClass {
    static name: string
}
class QueuedProxyWrapperQueuedMethodPrivate {
    static name: string
}
abstract class DataSourceClass {
    static name: string
}
class DataSourcePrivate {
    static name: string
}
abstract class EventClass {
    static name: string
}
class EventPrivate {
    static name: string
}
abstract class SubjectClass {
    static name: string
}
class SubjectPrivate {
    static name: string
}
abstract class TimeRangeClass {
    static name: string
}
class TimeRangePrivate {
    static name: string
}
abstract class SimpleResultSetClass {
    static name: string
}
class SimpleResultSetPrivate {
    static name: string
}
abstract class RemoteRegistryIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.RemoteRegistryIface */
    readonly get_data_sources: (self: RemoteRegistry, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly get_data_sources_finish: (self: RemoteRegistry, _res_: Gio.AsyncResult) => GLib.Variant
    readonly register_data_source: (self: RemoteRegistry, unique_id: string, name: string, description: string, event_templates: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly register_data_source_finish: (self: RemoteRegistry, _res_: Gio.AsyncResult) => boolean
    readonly set_data_source_enabled: (self: RemoteRegistry, unique_id: string, enabled: boolean, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly set_data_source_enabled_finish: (self: RemoteRegistry, _res_: Gio.AsyncResult) => void
    readonly get_data_source_from_id: (self: RemoteRegistry, unique_id: string, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly get_data_source_from_id_finish: (self: RemoteRegistry, _res_: Gio.AsyncResult) => GLib.Variant
    static name: string
}
abstract class RemoteLogIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.RemoteLogIface */
    readonly delete_events: (self: RemoteLog, event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly delete_events_finish: (self: RemoteLog, _res_: Gio.AsyncResult) => GLib.Variant
    readonly find_event_ids: (self: RemoteLog, time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly find_event_ids_finish: (self: RemoteLog) => [ /* returnType */ number[], /* result_length1 */ number ]
    readonly find_events: (self: RemoteLog, time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly find_events_finish: (self: RemoteLog, _res_: Gio.AsyncResult) => GLib.Variant
    readonly find_related_uris: (self: RemoteLog, time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly find_related_uris_finish: (self: RemoteLog) => [ /* returnType */ string[], /* result_length1 */ number ]
    readonly get_events: (self: RemoteLog, event_ids: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly get_events_finish: (self: RemoteLog, _res_: Gio.AsyncResult) => GLib.Variant
    readonly insert_events: (self: RemoteLog, events: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly insert_events_finish: (self: RemoteLog) => [ /* returnType */ number[], /* result_length1 */ number ]
    readonly install_monitor: (self: RemoteLog, monitor_path: string, time_range: GLib.Variant, event_templates: GLib.Variant, owner?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly install_monitor_finish: (self: RemoteLog, _res_: Gio.AsyncResult) => void
    readonly remove_monitor: (self: RemoteLog, monitor_path: string, owner?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly remove_monitor_finish: (self: RemoteLog, _res_: Gio.AsyncResult) => void
    readonly quit: (self: RemoteLog, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly quit_finish: (self: RemoteLog, _res_: Gio.AsyncResult) => void
    readonly get_extensions: () => [ /* returnType */ string[], /* result_length1 */ number ]
    readonly get_version: (self: RemoteLog) => /* result */ VersionStruct
    readonly get_datapath: (self: RemoteLog) => string
    static name: string
}
abstract class RemoteMonitorIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.RemoteMonitorIface */
    readonly notify_insert: (self: RemoteMonitor, time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly notify_insert_finish: (self: RemoteMonitor, _res_: Gio.AsyncResult) => void
    readonly notify_delete: (self: RemoteMonitor, time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly notify_delete_finish: (self: RemoteMonitor, _res_: Gio.AsyncResult) => void
    static name: string
}
abstract class RemoteSimpleIndexerIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexerIface */
    readonly search: (self: RemoteSimpleIndexer, query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly search_finish: (self: RemoteSimpleIndexer, _res_: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* matches */ number ]
    readonly search_with_relevancies: (self: RemoteSimpleIndexer, query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly search_with_relevancies_finish: (self: RemoteSimpleIndexer, _res_: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
    static name: string
}
abstract class NetworkManagerDBusIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBusIface */
    readonly state: (self: NetworkManagerDBus) => number
    static name: string
}
abstract class ConnmanManagerDBusIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBusIface */
    readonly get_state: (self: ConnmanManagerDBus) => string
    static name: string
}
abstract class ResultSetIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.ResultSetIface */
    readonly size: (self: ResultSet) => number
    readonly estimated_matches: (self: ResultSet) => number
    readonly next_value: (self: ResultSet) => Event | null
    readonly has_next: (self: ResultSet) => boolean
    readonly tell: (self: ResultSet) => number
    readonly reset: (self: ResultSet) => void
    static name: string
}
class VersionStruct {
    /* Fields of Zeitgeist-2.0.Zeitgeist.VersionStruct */
    readonly major: number
    readonly minor: number
    readonly micro: number
    static name: string
}
}
export default Zeitgeist;