/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ECalendar-1.2
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type EDataServer from './EDataServer-1.2';
import type Soup from './Soup-2.4';
import type GData from './GData-0.0';
import type Json from './Json-1.0';
import type Goa from './Goa-1.0';
import type Camel from './Camel-1.2';

export namespace ECalendar {

enum CalClientError {
    NO_SUCH_CALENDAR,
    OBJECT_NOT_FOUND,
    INVALID_OBJECT,
    UNKNOWN_USER,
    OBJECT_ID_ALREADY_EXISTS,
    INVALID_RANGE,
}
enum CalClientSourceType {
    EVENTS,
    TASKS,
    MEMOS,
    LAST,
}
enum CalClientSourceTypeEnum {
    EVENTS,
    TASKS,
    MEMOS,
    INVALID,
}
enum CalComponentAlarmAction {
    NONE,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    UNKNOWN,
}
enum CalComponentAlarmTriggerType {
    NONE,
    RELATIVE_START,
    RELATIVE_END,
    ABSOLUTE,
}
enum CalComponentClassification {
    NONE,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    UNKNOWN,
}
enum CalComponentField {
    CATEGORIES,
    CLASSIFICATION,
    COMPLETED,
    DTEND,
    DTSTART,
    DUE,
    GEO,
    PERCENT,
    PRIORITY,
    SUMMARY,
    TRANSPARENCY,
    URL,
    HAS_ALARMS,
    ICON,
    COMPLETE,
    RECURRING,
    OVERDUE,
    COLOR,
    STATUS,
    COMPONENT,
    LOCATION,
    NUM_FIELDS,
}
enum CalComponentPeriodType {
    DATETIME,
    DURATION,
}
enum CalComponentRangeType {
    SINGLE,
    THISPRIOR,
    THISFUTURE,
}
enum CalComponentTransparency {
    NONE,
    TRANSPARENT,
    OPAQUE,
    UNKNOWN,
}
enum CalComponentVType {
    NO_TYPE,
    EVENT,
    TODO,
    JOURNAL,
    FREEBUSY,
    TIMEZONE,
}
enum CalLoadState {
    NOT_LOADED,
    LOADING,
    LOADED,
}
enum CalSetModeStatus {
    SUCCESS,
    ERROR,
    NOT_SUPPORTED,
}
enum CalSetModeStatusEnum {
    SUCCESS,
    ERROR,
    UNSUPPORTED,
}
enum CalSourceType {
    EVENT,
    TODO,
    JOURNAL,
    LAST,
}
enum CalSourceTypeEnum {
    EVENT,
    TODO,
    JOURNAL,
    INVALID,
}
enum CalendarStatus {
    OK,
    INVALID_ARG,
    BUSY,
    REPOSITORY_OFFLINE,
    NO_SUCH_CALENDAR,
    OBJECT_NOT_FOUND,
    INVALID_OBJECT,
    URI_NOT_LOADED,
    URI_ALREADY_LOADED,
    PERMISSION_DENIED,
    UNKNOWN_USER,
    OBJECT_ID_ALREADY_EXISTS,
    PROTOCOL_NOT_SUPPORTED,
    CANCELLED,
    COULD_NOT_CANCEL,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_REQUIRED,
    DBUS_EXCEPTION,
    OTHER_ERROR,
    INVALID_SERVER_VERSION,
    NOT_SUPPORTED,
}
enum DataCalCallStatus {
    SUCCESS,
    BUSY,
    REPOSITORYOFFLINE,
    PERMISSIONDENIED,
    INVALIDRANGE,
    OBJECTNOTFOUND,
    INVALIDOBJECT,
    OBJECTIDALREADYEXISTS,
    AUTHENTICATIONFAILED,
    AUTHENTICATIONREQUIRED,
    UNSUPPORTEDFIELD,
    UNSUPPORTEDMETHOD,
    UNSUPPORTEDAUTHENTICATIONMETHOD,
    TLSNOTAVAILABLE,
    NOSUCHCAL,
    UNKNOWNUSER,
    OFFLINEUNAVAILABLE,
    SEARCHSIZELIMITEXCEEDED,
    SEARCHTIMELIMITEXCEEDED,
    INVALIDQUERY,
    QUERYREFUSED,
    COULDNOTCANCEL,
    OTHERERROR,
    INVALIDSERVERVERSION,
    INVALIDARG,
    NOTSUPPORTED,
    NOTOPENED,
}
enum CalChangeType {
    ADDED,
    MODIFIED,
    DELETED,
}
enum CalClientViewFlags {
    NONE,
    NOTIFY_INITIAL,
}
enum DataCalMode {
    OCAL,
    EMOTE,
    NYMODE,
}
enum DataCalObjModType {
    THIS,
    THISANDPRIOR,
    THISANDFUTURE,
    ALL,
}
enum DataCalObjType {
    EVENT,
    TODO,
    JOURNAL,
    ANYTYPE,
}
function calendar_error_quark(): GLib.Quark
interface CalRecurInstanceFn {
    (comp: CalComponent, instance_start: number, instance_end: number, data: object): boolean
}
interface Cal_ConstructProps extends GObject.Object_ConstructProps {
}
class Cal {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.Cal */
    discard_alarm(comp: CalComponent, auid: string): boolean
    get_alarm_email_address(alarm_address: string): boolean
    get_alarms_for_object(id: CalComponentId, start: number, end: number, alarms: CalComponentAlarms): boolean
    get_cal_address(cal_address: string): boolean
    get_ldap_attribute(ldap_attribute: string): boolean
    get_load_state(): CalLoadState
    get_local_attachment_store(): string
    get_object_list(query: string): [ /* returnType */ boolean, /* objects */ number[] ]
    get_one_alarm_only(): boolean
    get_organizer_must_accept(): boolean
    get_organizer_must_attend(): boolean
    get_query(sexp: string): [ /* returnType */ boolean, /* query */ CalView ]
    get_recurrences_no_master(): boolean
    get_refresh_supported(): boolean
    get_save_schedules(): boolean
    get_source_type(): CalSourceType
    get_static_capability(cap: string): boolean
    is_read_only(read_only: boolean): boolean
    open(only_if_exists: boolean): boolean
    open_async(only_if_exists: boolean): void
    refresh(): boolean
    remove(): boolean
    remove_object(uid: string): boolean
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
    /* Virtual methods of ECalendar-1.2.ECalendar.Cal */
    vfunc_backend_died(): void
    vfunc_backend_error(message: string): void
    vfunc_cal_opened(status: CalendarStatus): void
    vfunc_cal_opened_ex(error: GLib.Error): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ECalendar-1.2.ECalendar.Cal */
    connect(sigName: "backend-died", callback: (($obj: Cal) => void)): number
    connect_after(sigName: "backend-died", callback: (($obj: Cal) => void)): number
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: (($obj: Cal, object: string) => void)): number
    connect_after(sigName: "backend-error", callback: (($obj: Cal, object: string) => void)): number
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "cal-opened", callback: (($obj: Cal, object: number) => void)): number
    connect_after(sigName: "cal-opened", callback: (($obj: Cal, object: number) => void)): number
    emit(sigName: "cal-opened", object: number): void
    connect(sigName: "cal-opened-ex", callback: (($obj: Cal, error: number) => void)): number
    connect_after(sigName: "cal-opened-ex", callback: (($obj: Cal, error: number) => void)): number
    emit(sigName: "cal-opened-ex", error: number): void
    connect(sigName: "cal-set-mode", callback: (($obj: Cal, object: CalSetModeStatusEnum, p0: any) => void)): number
    connect_after(sigName: "cal-set-mode", callback: (($obj: Cal, object: CalSetModeStatusEnum, p0: any) => void)): number
    emit(sigName: "cal-set-mode", object: CalSetModeStatusEnum, p0: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Cal_ConstructProps)
    _init (config?: Cal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: EDataServer.Source, type: CalSourceType): Cal
    static get_error_message(status: CalendarStatus): string
    static marshal_VOID__ENUM_ENUM(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
    static marshal_VOID__STRING_UINT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
    static marshal_VOID__UINT_STRING(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
    static match_tzid(tzid: string): string
    static system_timezone_get_location(): string
    static util_get_system_timezone_location(): string
    static util_priority_from_string(string: string): number
    static util_priority_to_string(priority: number): string
    static $gtype: GObject.Type
}
interface CalClient_ConstructProps extends EDataServer.Client_ConstructProps {
}
class CalClient {
    /* Properties of EDataServer-1.2.EDataServer.Client */
    readonly capabilities: object
    readonly main_context: GLib.MainContext
    online: boolean
    readonly opened: boolean
    readonly readonly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.CalClient */
    add_timezone_finish(result: Gio.AsyncResult): boolean
    check_one_alarm_only(): boolean
    check_organizer_must_accept(): boolean
    check_organizer_must_attend(): boolean
    check_recurrences_no_master(): boolean
    check_save_schedules(): boolean
    create_object_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* uid */ string ]
    create_objects_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* uids */ string[] ]
    discard_alarm(uid: string, rid: string, auid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    discard_alarm_finish(result: Gio.AsyncResult): boolean
    discard_alarm_sync(uid: string, rid: string, auid: string, cancellable?: Gio.Cancellable | null): boolean
    generate_instances(start: number, end: number, cancellable: Gio.Cancellable | null, cb: CalRecurInstanceFn): void
    generate_instances_sync(start: number, end: number, cb: CalRecurInstanceFn): void
    get_attachment_uris(uid: string, rid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_attachment_uris_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* attachment_uris */ string[] ]
    get_attachment_uris_sync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* attachment_uris */ string[] ]
    get_default_object(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_free_busy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_free_busy_finish(result: Gio.AsyncResult): boolean
    get_free_busy_sync(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null): boolean
    get_local_attachment_store(): string
    get_object(uid: string, rid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_object_list(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_object_list_as_comps(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_object_list_as_comps_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    get_object_list_as_comps_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    get_objects_for_uid(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_objects_for_uid_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    get_objects_for_uid_sync(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    get_source_type(): CalClientSourceType
    get_timezone(tzid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_view(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_view_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* view */ CalClientView ]
    get_view_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* view */ CalClientView ]
    modify_object_finish(result: Gio.AsyncResult): boolean
    modify_objects_finish(result: Gio.AsyncResult): boolean
    receive_objects_finish(result: Gio.AsyncResult): boolean
    remove_object_finish(result: Gio.AsyncResult): boolean
    remove_objects_finish(result: Gio.AsyncResult): boolean
    /* Methods of EDataServer-1.2.EDataServer.Client */
    cancel_all(): void
    check_capability(capability: string): boolean
    check_refresh_supported(): boolean
    dup_bus_name(): string
    get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* prop_value */ string ]
    get_capabilities(): string[]
    get_source(): EDataServer.Source
    is_online(): boolean
    is_opened(): boolean
    is_readonly(): boolean
    open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(result: Gio.AsyncResult): boolean
    open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean
    ref_main_context(): GLib.MainContext
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_finish(result: Gio.AsyncResult): boolean
    remove_sync(cancellable?: Gio.Cancellable | null): boolean
    retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    retrieve_properties(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieve_properties_finish(result: Gio.AsyncResult): boolean
    retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_backend_property_finish(result: Gio.AsyncResult): boolean
    set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    set_bus_name(bus_name: string): void
    unwrap_dbus_error(dbus_error: GLib.Error): void
    wait_for_connected(timeout_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    wait_for_connected_finish(result: Gio.AsyncResult): boolean
    wait_for_connected_sync(timeout_seconds: number, cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of EDataServer-1.2.EDataServer.Client */
    vfunc_backend_died(): void
    vfunc_backend_error(error_msg: string): void
    vfunc_backend_property_changed(prop_name: string, prop_value: string): void
    vfunc_get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    vfunc_get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* prop_value */ string ]
    vfunc_open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_open_finish(result: Gio.AsyncResult): boolean
    vfunc_open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_opened(error: GLib.Error): void
    vfunc_refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_refresh_finish(result: Gio.AsyncResult): boolean
    vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_finish(result: Gio.AsyncResult): boolean
    vfunc_remove_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    vfunc_retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    vfunc_retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_set_backend_property_finish(result: Gio.AsyncResult): boolean
    vfunc_set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_unwrap_dbus_error(dbus_error: GLib.Error): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ECalendar-1.2.ECalendar.CalClient */
    connect(sigName: "free-busy-data", callback: (($obj: CalClient, object: object) => void)): number
    connect_after(sigName: "free-busy-data", callback: (($obj: CalClient, object: object) => void)): number
    emit(sigName: "free-busy-data", object: object): void
    /* Signals of EDataServer-1.2.EDataServer.Client */
    connect(sigName: "backend-died", callback: (($obj: CalClient) => void)): number
    connect_after(sigName: "backend-died", callback: (($obj: CalClient) => void)): number
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: (($obj: CalClient, object: string) => void)): number
    connect_after(sigName: "backend-error", callback: (($obj: CalClient, object: string) => void)): number
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "backend-property-changed", callback: (($obj: CalClient, object: string, p0: string) => void)): number
    connect_after(sigName: "backend-property-changed", callback: (($obj: CalClient, object: string, p0: string) => void)): number
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    connect(sigName: "opened", callback: (($obj: CalClient, object: GLib.Error) => void)): number
    connect_after(sigName: "opened", callback: (($obj: CalClient, object: GLib.Error) => void)): number
    emit(sigName: "opened", object: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capabilities", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opened", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::readonly", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalClient_ConstructProps)
    _init (config?: CalClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: EDataServer.Source, source_type: CalClientSourceType): CalClient
    static error_create(code: CalClientError, custom_msg: string): GLib.Error
    /* Function overloads */
    static error_create(code: EDataServer.ClientError, custom_msg?: string | null): GLib.Error
    static error_quark(): GLib.Quark
    static error_to_string(code: CalClientError): string
    /* Function overloads */
    static error_to_string(code: EDataServer.ClientError): string
    static free_ecalcomp_slist(ecalcomps: CalComponent[]): void
    static $gtype: GObject.Type
}
interface CalClientView_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ECalendar-1.2.ECalendar.CalClientView */
    client?: CalClient
    view?: object
}
class CalClientView {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.CalClientView */
    get_client(): object
    is_running(): boolean
    set_fields_of_interest(fields_of_interest?: string[] | null): void
    set_flags(flags: CalClientViewFlags): void
    start(): void
    stop(): void
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
    /* Virtual methods of ECalendar-1.2.ECalendar.CalClientView */
    vfunc_complete(error: GLib.Error): void
    vfunc_progress(percent: number, message: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ECalendar-1.2.ECalendar.CalClientView */
    connect(sigName: "complete", callback: (($obj: CalClientView, object: GLib.Error) => void)): number
    connect_after(sigName: "complete", callback: (($obj: CalClientView, object: GLib.Error) => void)): number
    emit(sigName: "complete", object: GLib.Error): void
    connect(sigName: "objects-added", callback: (($obj: CalClientView, objects: number[]) => void)): number
    connect_after(sigName: "objects-added", callback: (($obj: CalClientView, objects: number[]) => void)): number
    emit(sigName: "objects-added", objects: number[]): void
    connect(sigName: "objects-modified", callback: (($obj: CalClientView, objects: number[]) => void)): number
    connect_after(sigName: "objects-modified", callback: (($obj: CalClientView, objects: number[]) => void)): number
    emit(sigName: "objects-modified", objects: number[]): void
    connect(sigName: "objects-removed", callback: (($obj: CalClientView, objects: CalComponentId[]) => void)): number
    connect_after(sigName: "objects-removed", callback: (($obj: CalClientView, objects: CalComponentId[]) => void)): number
    emit(sigName: "objects-removed", objects: CalComponentId[]): void
    connect(sigName: "progress", callback: (($obj: CalClientView, object: number, p0: string) => void)): number
    connect_after(sigName: "progress", callback: (($obj: CalClientView, object: number, p0: string) => void)): number
    emit(sigName: "progress", object: number, p0: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalClientView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalClientView_ConstructProps)
    _init (config?: CalClientView_ConstructProps): void
    static $gtype: GObject.Type
}
interface CalComponent_ConstructProps extends GObject.Object_ConstructProps {
}
class CalComponent {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.CalComponent */
    abort_sequence(): void
    add_alarm(alarm: CalComponentAlarm): void
    clone(): CalComponent
    commit_sequence(): void
    event_dates_match(comp2: CalComponent): boolean
    get_alarm_uids(): string[]
    get_as_string(): string
    get_attachment_list(): /* attachment_list */ string[]
    get_attendee_list(): /* attendee_list */ CalComponentAttendee[]
    get_categories(categories: string): void
    get_categories_list(): /* categ_list */ string[]
    get_classification(classif: CalComponentClassification): void
    get_comment_list(): /* text_list */ CalComponentText[]
    get_completed(t: object): void
    get_contact_list(): /* text_list */ CalComponentText[]
    get_created(t: object): void
    get_description_list(): /* text_list */ CalComponentText[]
    get_dtend(dt: CalComponentDateTime): void
    get_dtstamp(t: object): void
    get_dtstart(dt: CalComponentDateTime): void
    get_due(dt: CalComponentDateTime): void
    get_exdate_list(): /* exdate_list */ CalComponentDateTime[]
    get_geo(geo: object): void
    get_last_modified(t: object): void
    get_location(location: string): void
    get_num_attachments(): number
    get_organizer(organizer: CalComponentOrganizer): void
    get_percent(percent: number): void
    get_percent_as_int(): number
    get_priority(priority: number): void
    get_rdate_list(): /* period_list */ CalComponentPeriod[]
    get_recurid(recur_id: CalComponentRange): void
    get_recurid_as_string(): string
    get_sequence(sequence: number): void
    get_summary(summary: CalComponentText): void
    get_transparency(transp: CalComponentTransparency): void
    get_uid(uid: string): void
    get_url(url: string): void
    get_vtype(): CalComponentVType
    has_alarms(): boolean
    has_attachments(): boolean
    has_attendees(): boolean
    has_exceptions(): boolean
    has_exdates(): boolean
    has_exrules(): boolean
    has_organizer(): boolean
    has_rdates(): boolean
    has_recurrences(): boolean
    has_rrules(): boolean
    has_simple_recurrence(): boolean
    is_instance(): boolean
    remove_alarm(auid: string): void
    remove_all_alarms(): void
    rescan(): void
    set_attachment_list(attachment_list: string[]): void
    set_attendee_list(attendee_list: CalComponentAttendee[]): void
    set_categories(categories: string): void
    set_categories_list(categ_list: string[]): void
    set_classification(classif: CalComponentClassification): void
    set_comment_list(text_list: CalComponentText[]): void
    set_completed(t: object): void
    set_contact_list(text_list: CalComponentText[]): void
    set_created(t: object): void
    set_dtend(dt: CalComponentDateTime): void
    set_dtstamp(t: object): void
    set_dtstart(dt: CalComponentDateTime): void
    set_due(dt: CalComponentDateTime): void
    set_exdate_list(exdate_list: CalComponentDateTime[]): void
    set_geo(geo: object): void
    set_icalcomponent(icalcomp: number): boolean
    set_last_modified(t: object): void
    set_location(location: string): void
    set_new_vtype(type: CalComponentVType): void
    set_organizer(organizer: CalComponentOrganizer): void
    set_percent(percent: number): void
    set_percent_as_int(percent: number): void
    set_priority(priority: number): void
    set_rdate_list(period_list: CalComponentPeriod[]): void
    set_recurid(recur_id: CalComponentRange): void
    set_sequence(sequence: number): void
    set_summary(summary: CalComponentText): void
    set_transparency(transp: CalComponentTransparency): void
    set_uid(uid: string): void
    set_url(url: string): void
    strip_errors(): void
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
    connect(sigName: "notify", callback: (($obj: CalComponent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalComponent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalComponent_ConstructProps)
    _init (config?: CalComponent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CalComponent
    static new_from_string(calobj: string): CalComponent
    static free_attendee_list(attendee_list: CalComponentAttendee[]): void
    static free_categories_list(categ_list: string[]): void
    static free_datetime(dt: CalComponentDateTime): void
    static free_exdate_list(exdate_list: CalComponentDateTime[]): void
    static free_geo(geo: object): void
    static free_icaltimetype(t: object): void
    static free_id(id: CalComponentId): void
    static free_percent(percent: number): void
    static free_period_list(period_list: CalComponentPeriod[]): void
    static free_priority(priority: number): void
    static free_range(range: CalComponentRange): void
    static free_sequence(sequence: number): void
    static free_text_list(text_list: CalComponentText[]): void
    static gen_uid(): string
    static $gtype: GObject.Type
}
interface CalView_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ECalendar-1.2.ECalendar.CalView */
    client?: Cal
    view?: object
}
class CalView {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.CalView */
    start(): void
    stop(): void
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
    /* Virtual methods of ECalendar-1.2.ECalendar.CalView */
    vfunc_view_complete(status: CalendarStatus, error_msg: string): void
    vfunc_view_done(status: CalendarStatus): void
    vfunc_view_progress(message: string, percent: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ECalendar-1.2.ECalendar.CalView */
    connect(sigName: "objects-added", callback: (($obj: CalView, objects: number[]) => void)): number
    connect_after(sigName: "objects-added", callback: (($obj: CalView, objects: number[]) => void)): number
    emit(sigName: "objects-added", objects: number[]): void
    connect(sigName: "objects-modified", callback: (($obj: CalView, objects: number[]) => void)): number
    connect_after(sigName: "objects-modified", callback: (($obj: CalView, objects: number[]) => void)): number
    emit(sigName: "objects-modified", objects: number[]): void
    connect(sigName: "objects-removed", callback: (($obj: CalView, objects: CalComponentId[]) => void)): number
    connect_after(sigName: "objects-removed", callback: (($obj: CalView, objects: CalComponentId[]) => void)): number
    emit(sigName: "objects-removed", objects: CalComponentId[]): void
    connect(sigName: "view-complete", callback: (($obj: CalView, object: number, p0: string) => void)): number
    connect_after(sigName: "view-complete", callback: (($obj: CalView, object: number, p0: string) => void)): number
    emit(sigName: "view-complete", object: number, p0: string): void
    connect(sigName: "view-done", callback: (($obj: CalView, object: number) => void)): number
    connect_after(sigName: "view-done", callback: (($obj: CalView, object: number) => void)): number
    emit(sigName: "view-done", object: number): void
    connect(sigName: "view-progress", callback: (($obj: CalView, object: string, p0: number) => void)): number
    connect_after(sigName: "view-progress", callback: (($obj: CalView, object: string, p0: number) => void)): number
    emit(sigName: "view-progress", object: string, p0: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalView_ConstructProps)
    _init (config?: CalView_ConstructProps): void
    static $gtype: GObject.Type
}
class CalChange {
    /* Fields of ECalendar-1.2.ECalendar.CalChange */
    readonly comp: CalComponent
    readonly type: CalChangeType
    static name: string
}
abstract class CalClass {
    /* Fields of ECalendar-1.2.ECalendar.CalClass */
    readonly parent_class: GObject.ObjectClass
    readonly cal_opened: (ecal: Cal, status: CalendarStatus) => void
    readonly cal_opened_ex: (ecal: Cal, error: GLib.Error) => void
    readonly backend_error: (ecal: Cal, message: string) => void
    readonly backend_died: (ecal: Cal) => void
    static name: string
}
abstract class CalClientClass {
    /* Fields of ECalendar-1.2.ECalendar.CalClientClass */
    readonly parent: EDataServer.ClientClass
    static name: string
}
class CalClientPrivate {
    static name: string
}
abstract class CalClientViewClass {
    /* Fields of ECalendar-1.2.ECalendar.CalClientViewClass */
    readonly parent_class: GObject.ObjectClass
    readonly progress: (view: CalClientView, percent: number, message: string) => void
    readonly complete: (view: CalClientView, error: GLib.Error) => void
    static name: string
}
class CalClientViewPrivate {
    static name: string
}
class CalComponentAlarm {
    /* Methods of ECalendar-1.2.ECalendar.CalComponentAlarm */
    free(): void
    get_action(action: CalComponentAlarmAction): void
    get_attendee_list(): /* attendee_list */ CalComponentAttendee[]
    get_description(description: CalComponentText): void
    get_repeat(repeat: CalComponentAlarmRepeat): void
    get_trigger(trigger: CalComponentAlarmTrigger): void
    get_uid(): string
    has_attendees(): boolean
    set_action(action: CalComponentAlarmAction): void
    set_attendee_list(attendee_list: CalComponentAttendee[]): void
    set_description(description: CalComponentText): void
    set_repeat(repeat: CalComponentAlarmRepeat): void
    set_trigger(trigger: CalComponentAlarmTrigger): void
    static name: string
}
class CalComponentAlarmInstance {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAlarmInstance */
    readonly auid: string
    readonly trigger: number
    readonly occur_start: number
    readonly occur_end: number
    static name: string
}
class CalComponentAlarmRepeat {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAlarmRepeat */
    readonly repetitions: number
    readonly duration: object
    static name: string
}
class CalComponentAlarmTrigger {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAlarmTrigger */
    readonly type: CalComponentAlarmTriggerType
    static name: string
}
class CalComponentAlarms {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAlarms */
    readonly comp: CalComponent
    readonly alarms: object[]
    /* Methods of ECalendar-1.2.ECalendar.CalComponentAlarms */
    free(): void
    static name: string
}
class CalComponentAttendee {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAttendee */
    readonly value: string
    readonly member: string
    readonly rsvp: boolean
    readonly delto: string
    readonly delfrom: string
    readonly sentby: string
    readonly cn: string
    readonly language: string
    static name: string
}
abstract class CalComponentClass {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class CalComponentDateTime {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentDateTime */
    readonly value: object
    readonly tzid: string
    static name: string
}
class CalComponentId {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentId */
    readonly uid: string
    readonly rid: string
    static name: string
}
class CalComponentOrganizer {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentOrganizer */
    readonly value: string
    readonly sentby: string
    readonly cn: string
    readonly language: string
    static name: string
}
class CalComponentPeriod {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentPeriod */
    readonly type: CalComponentPeriodType
    readonly start: object
    static name: string
}
class CalComponentPrivate {
    static name: string
}
class CalComponentRange {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentRange */
    readonly type: CalComponentRangeType
    readonly datetime: CalComponentDateTime
    static name: string
}
class CalComponentText {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentText */
    readonly value: string
    readonly altrep: string
    static name: string
}
class CalPrivate {
    static name: string
}
abstract class CalViewClass {
    /* Fields of ECalendar-1.2.ECalendar.CalViewClass */
    readonly parent_class: GObject.ObjectClass
    readonly view_progress: (view: CalView, message: string, percent: number) => void
    readonly view_done: (view: CalView, status: CalendarStatus) => void
    readonly view_complete: (view: CalView, status: CalendarStatus, error_msg: string) => void
    static name: string
}
class CalViewPrivate {
    static name: string
}
}
export default ECalendar;