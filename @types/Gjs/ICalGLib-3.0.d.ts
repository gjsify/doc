/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ICalGLib-3.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace ICalGLib {

enum ComponentKind {
    NO_COMPONENT,
    ANY_COMPONENT,
    XROOT_COMPONENT,
    XATTACH_COMPONENT,
    VEVENT_COMPONENT,
    VTODO_COMPONENT,
    VJOURNAL_COMPONENT,
    VCALENDAR_COMPONENT,
    VAGENDA_COMPONENT,
    VFREEBUSY_COMPONENT,
    VALARM_COMPONENT,
    XAUDIOALARM_COMPONENT,
    XDISPLAYALARM_COMPONENT,
    XEMAILALARM_COMPONENT,
    XPROCEDUREALARM_COMPONENT,
    VTIMEZONE_COMPONENT,
    XSTANDARD_COMPONENT,
    XDAYLIGHT_COMPONENT,
    X_COMPONENT,
    VSCHEDULE_COMPONENT,
    VQUERY_COMPONENT,
    VREPLY_COMPONENT,
    VCAR_COMPONENT,
    VCOMMAND_COMPONENT,
    XLICINVALID_COMPONENT,
    XLICMIMEPART_COMPONENT,
    VAVAILABILITY_COMPONENT,
    XAVAILABLE_COMPONENT,
    VPOLL_COMPONENT,
    VVOTER_COMPONENT,
    XVOTE_COMPONENT,
}
enum ErrorEnum {
    NO_ERROR,
    BADARG_ERROR,
    NEWFAILED_ERROR,
    ALLOCATION_ERROR,
    MALFORMEDDATA_ERROR,
    PARSE_ERROR,
    INTERNAL_ERROR,
    FILE_ERROR,
    USAGE_ERROR,
    UNIMPLEMENTED_ERROR,
    UNKNOWN_ERROR,
}
enum ErrorState {
    FATAL,
    NONFATAL,
    DEFAULT,
    UNKNOWN,
}
enum ParameterAction {
    X,
    ASK,
    ABORT,
    NONE,
}
enum ParameterCutype {
    X,
    INDIVIDUAL,
    GROUP,
    RESOURCE,
    ROOM,
    UNKNOWN,
    NONE,
}
enum ParameterEnable {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum ParameterEncoding {
    X,
    TODO_8BIT,
    BASE64,
    NONE,
}
enum ParameterFbtype {
    X,
    FREE,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
enum ParameterKind {
    ANY_PARAMETER,
    ACTIONPARAM_PARAMETER,
    ALTREP_PARAMETER,
    CHARSET_PARAMETER,
    CN_PARAMETER,
    CUTYPE_PARAMETER,
    DELEGATEDFROM_PARAMETER,
    DELEGATEDTO_PARAMETER,
    DIR_PARAMETER,
    ENABLE_PARAMETER,
    ENCODING_PARAMETER,
    FBTYPE_PARAMETER,
    FILENAME_PARAMETER,
    FMTTYPE_PARAMETER,
    IANA_PARAMETER,
    ID_PARAMETER,
    LANGUAGE_PARAMETER,
    LATENCY_PARAMETER,
    LOCAL_PARAMETER,
    LOCALIZE_PARAMETER,
    MANAGEDID_PARAMETER,
    MEMBER_PARAMETER,
    MODIFIED_PARAMETER,
    OPTIONS_PARAMETER,
    PARTSTAT_PARAMETER,
    PUBLICCOMMENT_PARAMETER,
    RANGE_PARAMETER,
    REASON_PARAMETER,
    RELATED_PARAMETER,
    RELTYPE_PARAMETER,
    REQUIRED_PARAMETER,
    RESPONSE_PARAMETER,
    ROLE_PARAMETER,
    RSVP_PARAMETER,
    SCHEDULEAGENT_PARAMETER,
    SCHEDULEFORCESEND_PARAMETER,
    SCHEDULESTATUS_PARAMETER,
    SENTBY_PARAMETER,
    SIZE_PARAMETER,
    STAYINFORMED_PARAMETER,
    SUBSTATE_PARAMETER,
    TZID_PARAMETER,
    VALUE_PARAMETER,
    X_PARAMETER,
    XLICCOMPARETYPE_PARAMETER,
    XLICERRORTYPE_PARAMETER,
    NO_PARAMETER,
}
enum ParameterLocal {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum ParameterPartstat {
    X,
    NEEDSACTION,
    ACCEPTED,
    DECLINED,
    TENTATIVE,
    DELEGATED,
    COMPLETED,
    INPROCESS,
    FAILED,
    NONE,
}
enum ParameterRange {
    X,
    THISANDPRIOR,
    THISANDFUTURE,
    NONE,
}
enum ParameterRelated {
    X,
    START,
    END,
    NONE,
}
enum ParameterReltype {
    X,
    PARENT,
    CHILD,
    SIBLING,
    POLL,
    NONE,
}
enum ParameterRequired {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum ParameterRole {
    X,
    CHAIR,
    REQPARTICIPANT,
    OPTPARTICIPANT,
    NONPARTICIPANT,
    NONE,
}
enum ParameterRsvp {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum ParameterScheduleagent {
    X,
    SERVER,
    CLIENT,
    NONE,
}
enum ParameterScheduleforcesend {
    X,
    REQUEST,
    REPLY,
    NONE,
}
enum ParameterStayinformed {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum ParameterSubstate {
    X,
    OK,
    ERROR,
    SUSPENDED,
    NONE,
}
enum ParameterValue {
    X,
    BINARY,
    BOOLEAN,
    DATE,
    DURATION,
    FLOAT,
    INTEGER,
    PERIOD,
    RECUR,
    TEXT,
    URI,
    ERROR,
    DATETIME,
    UTCOFFSET,
    CALADDRESS,
    NONE,
}
enum ParameterXliccomparetype {
    X,
    EQUAL,
    NOTEQUAL,
    LESS,
    GREATER,
    LESSEQUAL,
    GREATEREQUAL,
    REGEX,
    ISNULL,
    ISNOTNULL,
    NONE,
}
enum ParameterXlicerrortype {
    X,
    COMPONENTPARSEERROR,
    PROPERTYPARSEERROR,
    PARAMETERNAMEPARSEERROR,
    PARAMETERVALUEPARSEERROR,
    VALUEPARSEERROR,
    INVALIDITIP,
    UNKNOWNVCALPROPERROR,
    MIMEPARSEERROR,
    VCALPROPPARSEERROR,
    NONE,
}
enum ParserState {
    ERROR,
    SUCCESS,
    BEGIN_COMP,
    END_COMP,
    IN_PROGRESS,
}
enum PropertyAction {
    X,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    NONE,
}
enum PropertyBusytype {
    X,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
enum PropertyCarlevel {
    X,
    CARNONE,
    CARMIN,
    CARFULL1,
    NONE,
}
enum PropertyCmd {
    X,
    ABORT,
    CONTINUE,
    CREATE,
    DELETE,
    GENERATEUID,
    GETCAPABILITY,
    IDENTIFY,
    MODIFY,
    MOVE,
    REPLY,
    SEARCH,
    SETLOCALE,
    NONE,
}
enum PropertyKind {
    ANY_PROPERTY,
    ACCEPTRESPONSE_PROPERTY,
    ACKNOWLEDGED_PROPERTY,
    ACTION_PROPERTY,
    ALLOWCONFLICT_PROPERTY,
    ATTACH_PROPERTY,
    ATTENDEE_PROPERTY,
    BUSYTYPE_PROPERTY,
    CALID_PROPERTY,
    CALMASTER_PROPERTY,
    CALSCALE_PROPERTY,
    CAPVERSION_PROPERTY,
    CARLEVEL_PROPERTY,
    CARID_PROPERTY,
    CATEGORIES_PROPERTY,
    CLASS_PROPERTY,
    CMD_PROPERTY,
    COLOR_PROPERTY,
    COMMENT_PROPERTY,
    COMPLETED_PROPERTY,
    COMPONENTS_PROPERTY,
    CONTACT_PROPERTY,
    CREATED_PROPERTY,
    CSID_PROPERTY,
    DATEMAX_PROPERTY,
    DATEMIN_PROPERTY,
    DECREED_PROPERTY,
    DEFAULTCHARSET_PROPERTY,
    DEFAULTLOCALE_PROPERTY,
    DEFAULTTZID_PROPERTY,
    DEFAULTVCARS_PROPERTY,
    DENY_PROPERTY,
    DESCRIPTION_PROPERTY,
    DTEND_PROPERTY,
    DTSTAMP_PROPERTY,
    DTSTART_PROPERTY,
    DUE_PROPERTY,
    DURATION_PROPERTY,
    ESTIMATEDDURATION_PROPERTY,
    EXDATE_PROPERTY,
    EXPAND_PROPERTY,
    EXRULE_PROPERTY,
    FREEBUSY_PROPERTY,
    GEO_PROPERTY,
    GRANT_PROPERTY,
    ITIPVERSION_PROPERTY,
    LASTMODIFIED_PROPERTY,
    LOCATION_PROPERTY,
    MAXCOMPONENTSIZE_PROPERTY,
    MAXDATE_PROPERTY,
    MAXRESULTS_PROPERTY,
    MAXRESULTSSIZE_PROPERTY,
    METHOD_PROPERTY,
    MINDATE_PROPERTY,
    MULTIPART_PROPERTY,
    NAME_PROPERTY,
    ORGANIZER_PROPERTY,
    OWNER_PROPERTY,
    PERCENTCOMPLETE_PROPERTY,
    PERMISSION_PROPERTY,
    POLLCOMPLETION_PROPERTY,
    POLLITEMID_PROPERTY,
    POLLMODE_PROPERTY,
    POLLPROPERTIES_PROPERTY,
    POLLWINNER_PROPERTY,
    PRIORITY_PROPERTY,
    PRODID_PROPERTY,
    QUERY_PROPERTY,
    QUERYLEVEL_PROPERTY,
    QUERYID_PROPERTY,
    QUERYNAME_PROPERTY,
    RDATE_PROPERTY,
    RECURACCEPTED_PROPERTY,
    RECUREXPAND_PROPERTY,
    RECURLIMIT_PROPERTY,
    RECURRENCEID_PROPERTY,
    RELATEDTO_PROPERTY,
    RELCALID_PROPERTY,
    REPEAT_PROPERTY,
    REPLYURL_PROPERTY,
    REQUESTSTATUS_PROPERTY,
    RESOURCES_PROPERTY,
    RESPONSE_PROPERTY,
    RESTRICTION_PROPERTY,
    RRULE_PROPERTY,
    SCOPE_PROPERTY,
    SEQUENCE_PROPERTY,
    STATUS_PROPERTY,
    STORESEXPANDED_PROPERTY,
    SUMMARY_PROPERTY,
    TARGET_PROPERTY,
    TASKMODE_PROPERTY,
    TRANSP_PROPERTY,
    TRIGGER_PROPERTY,
    TZID_PROPERTY,
    TZIDALIASOF_PROPERTY,
    TZNAME_PROPERTY,
    TZOFFSETFROM_PROPERTY,
    TZOFFSETTO_PROPERTY,
    TZUNTIL_PROPERTY,
    TZURL_PROPERTY,
    UID_PROPERTY,
    URL_PROPERTY,
    VERSION_PROPERTY,
    VOTER_PROPERTY,
    X_PROPERTY,
    XLICCLASS_PROPERTY,
    XLICCLUSTERCOUNT_PROPERTY,
    XLICERROR_PROPERTY,
    XLICMIMECHARSET_PROPERTY,
    XLICMIMECID_PROPERTY,
    XLICMIMECONTENTTYPE_PROPERTY,
    XLICMIMEENCODING_PROPERTY,
    XLICMIMEFILENAME_PROPERTY,
    XLICMIMEOPTINFO_PROPERTY,
    NO_PROPERTY,
}
enum PropertyMethod {
    X,
    PUBLISH,
    REQUEST,
    REPLY,
    ADD,
    CANCEL,
    REFRESH,
    COUNTER,
    DECLINECOUNTER,
    CREATE,
    READ,
    RESPONSE,
    MOVE,
    MODIFY,
    GENERATEUID,
    DELETE,
    NONE,
}
enum PropertyPollcompletion {
    X,
    SERVER,
    SERVERSUBMIT,
    SERVERCHOICE,
    CLIENT,
    NONE,
}
enum PropertyPollmode {
    X,
    BASIC,
    NONE,
}
enum PropertyQuerylevel {
    X,
    CALQL1,
    CALQLNONE,
    NONE,
}
enum PropertyStatus {
    X,
    TENTATIVE,
    CONFIRMED,
    COMPLETED,
    NEEDSACTION,
    CANCELLED,
    INPROCESS,
    DRAFT,
    FINAL,
    SUBMITTED,
    PENDING,
    FAILED,
    DELETED,
    NONE,
}
enum PropertyTaskmode {
    X,
    AUTOMATICCOMPLETION,
    AUTOMATICFAILURE,
    AUTOMATICSTATUS,
    NONE,
}
enum PropertyTransp {
    X,
    OPAQUE,
    OPAQUENOCONFLICT,
    TRANSPARENT,
    TRANSPARENTNOCONFLICT,
    NONE,
}
enum PropertyXlicclass {
    X,
    PUBLISHNEW,
    PUBLISHUPDATE,
    PUBLISHFREEBUSY,
    REQUESTNEW,
    REQUESTUPDATE,
    REQUESTRESCHEDULE,
    REQUESTDELEGATE,
    REQUESTNEWORGANIZER,
    REQUESTFORWARD,
    REQUESTSTATUS,
    REQUESTFREEBUSY,
    REPLYACCEPT,
    REPLYDECLINE,
    REPLYDELEGATE,
    REPLYCRASHERACCEPT,
    REPLYCRASHERDECLINE,
    ADDINSTANCE,
    CANCELEVENT,
    CANCELINSTANCE,
    CANCELALL,
    REFRESH,
    COUNTER,
    DECLINECOUNTER,
    MALFORMED,
    OBSOLETE,
    MISSEQUENCED,
    UNKNOWN,
    NONE,
}
enum Property_Class {
    X,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    NONE,
}
enum RecurrenceArrayMaxValues {
    RECURRENCE_ARRAY_MAX,
}
enum RecurrenceArraySizes {
    SECOND_SIZE,
    MINUTE_SIZE,
    HOUR_SIZE,
    MONTH_SIZE,
    MONTHDAY_SIZE,
    WEEKNO_SIZE,
    YEARDAY_SIZE,
    SETPOS_SIZE,
    DAY_SIZE,
}
enum RecurrenceFrequency {
    SECONDLY_RECURRENCE,
    MINUTELY_RECURRENCE,
    HOURLY_RECURRENCE,
    DAILY_RECURRENCE,
    WEEKLY_RECURRENCE,
    MONTHLY_RECURRENCE,
    YEARLY_RECURRENCE,
    NO_RECURRENCE,
}
enum RecurrenceSkip {
    BACKWARD,
    FORWARD,
    OMIT,
    UNDEFINED,
}
enum RecurrenceWeekday {
    NO_WEEKDAY,
    SUNDAY_WEEKDAY,
    MONDAY_WEEKDAY,
    TUESDAY_WEEKDAY,
    WEDNESDAY_WEEKDAY,
    THURSDAY_WEEKDAY,
    FRIDAY_WEEKDAY,
    SATURDAY_WEEKDAY,
}
enum RequestStatus {
    UNKNOWN_STATUS,
    TODO_2_0_SUCCESS_STATUS,
    TODO_2_1_FALLBACK_STATUS,
    TODO_2_2_IGPROP_STATUS,
    TODO_2_3_IGPARAM_STATUS,
    TODO_2_4_IGXPROP_STATUS,
    TODO_2_5_IGXPARAM_STATUS,
    TODO_2_6_IGCOMP_STATUS,
    TODO_2_7_FORWARD_STATUS,
    TODO_2_8_ONEEVENT_STATUS,
    TODO_2_9_TRUNC_STATUS,
    TODO_2_10_ONETODO_STATUS,
    TODO_2_11_TRUNCRRULE_STATUS,
    TODO_3_0_INVPROPNAME_STATUS,
    TODO_3_1_INVPROPVAL_STATUS,
    TODO_3_2_INVPARAM_STATUS,
    TODO_3_3_INVPARAMVAL_STATUS,
    TODO_3_4_INVCOMP_STATUS,
    TODO_3_5_INVTIME_STATUS,
    TODO_3_6_INVRULE_STATUS,
    TODO_3_7_INVCU_STATUS,
    TODO_3_8_NOAUTH_STATUS,
    TODO_3_9_BADVERSION_STATUS,
    TODO_3_10_TOOBIG_STATUS,
    TODO_3_11_MISSREQCOMP_STATUS,
    TODO_3_12_UNKCOMP_STATUS,
    TODO_3_13_BADCOMP_STATUS,
    TODO_3_14_NOCAP_STATUS,
    TODO_3_15_INVCOMMAND,
    TODO_4_0_BUSY_STATUS,
    TODO_4_1_STORE_ACCESS_DENIED,
    TODO_4_2_STORE_FAILED,
    TODO_4_3_STORE_NOT_FOUND,
    TODO_5_0_MAYBE_STATUS,
    TODO_5_1_UNAVAIL_STATUS,
    TODO_5_2_NOSERVICE_STATUS,
    TODO_5_3_NOSCHED_STATUS,
    TODO_6_1_CONTAINER_NOT_FOUND,
    TODO_9_0_UNRECOGNIZED_COMMAND,
}
enum RestrictionKind {
    NONE,
    ZERO,
    ONE,
    ZEROPLUS,
    ONEPLUS,
    ZEROORONE,
    ONEEXCLUSIVE,
    ONEMUTUAL,
    UNKNOWN,
}
enum Unknowntokenhandling {
    ASSUME_IANA_TOKEN,
    DISCARD_TOKEN,
    TREAT_AS_ERROR,
}
enum ValueKind {
    ANY_VALUE,
    ACTION_VALUE,
    ATTACH_VALUE,
    BINARY_VALUE,
    BOOLEAN_VALUE,
    BUSYTYPE_VALUE,
    CALADDRESS_VALUE,
    CARLEVEL_VALUE,
    CLASS_VALUE,
    CMD_VALUE,
    DATE_VALUE,
    DATETIME_VALUE,
    DATETIMEDATE_VALUE,
    DATETIMEPERIOD_VALUE,
    DURATION_VALUE,
    FLOAT_VALUE,
    GEO_VALUE,
    INTEGER_VALUE,
    METHOD_VALUE,
    PERIOD_VALUE,
    POLLCOMPLETION_VALUE,
    POLLMODE_VALUE,
    QUERY_VALUE,
    QUERYLEVEL_VALUE,
    RECUR_VALUE,
    REQUESTSTATUS_VALUE,
    STATUS_VALUE,
    STRING_VALUE,
    TASKMODE_VALUE,
    TEXT_VALUE,
    TRANSP_VALUE,
    TRIGGER_VALUE,
    URI_VALUE,
    UTCOFFSET_VALUE,
    X_VALUE,
    XLICCLASS_VALUE,
    NO_VALUE,
}
function bt(): void
function errno_return(): ErrorEnum
function error_clear_errno(): void
function error_crash_here(): void
function error_get_error_state(error: ErrorEnum): ErrorState
function error_perror(): string
function error_restore(error: string, es: ErrorState): void
function error_set_errno(x: ErrorEnum): void
function error_set_error_state(error: ErrorEnum, state: ErrorState): void
function error_stop_here(): void
function error_strerror(e: ErrorEnum): string
function error_supress(error: string): ErrorState
function get_unknown_token_handling_setting(): Unknowntokenhandling
function memory_add_tmp_buffer(buf?: object | null): void
function memory_append_char(buf: number[], pos: number[], ch: number): [ /* buf */ number[], /* pos */ number[] ]
function memory_append_string(buf: number[], pos: number[], str: string): [ /* buf */ number[], /* pos */ number[] ]
function memory_free_buffer(buf?: object | null): void
function memory_new_buffer(size: number): object | null
function memory_resize_buffer(buf: object | null, size: number): object | null
function memory_strdup(s: string): string
function memory_tmp_buffer(size: number): object | null
function memory_tmp_copy(str: string): string
function mime_parse(func: MimeParseFunc): Component
function recur_expand_recurrence(rule: string, start: number, count: number): number[]
function request_status_code(stat: RequestStatus): string
function request_status_desc(stat: RequestStatus): string
function request_status_from_num(major: number, minor: number): RequestStatus
function request_status_major(stat: RequestStatus): number
function request_status_minor(stat: RequestStatus): number
function restriction_check(comp: Component): number
function restriction_compare(restr: RestrictionKind, count: number): number
function set_unknown_token_handling_setting(newSetting: Unknowntokenhandling): void
interface ComponentForeachRecurrenceFunc {
    (comp: Component, span: TimeSpan): void
}
interface ComponentForeachTZIDFunc {
    (param: Parameter): void
}
interface MimeParseFunc {
    (bytes: number[]): string
}
interface ParserLineGenFunc {
    (bytes: number[]): string
}
interface Array_ConstructProps extends Object_ConstructProps {
}
class Array {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Array */
    copy(): Array
    remove_element_at(position: number): void
    size(): number
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Array_ConstructProps)
    _init (config?: Array_ConstructProps): void
    static $gtype: GObject.Type
}
interface Attach_ConstructProps extends Object_ConstructProps {
}
class Attach {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Attach */
    get_data(): string | null
    get_is_url(): boolean
    get_url(): string | null
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Attach_ConstructProps)
    _init (config?: Attach_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_bytes(bytes: GLib.Bytes): Attach
    static new_from_data(data: string, free_fn?: GLib.Func | null): Attach
    static new_from_url(url: string): Attach
    static $gtype: GObject.Type
}
interface CompIter_ConstructProps extends Object_ConstructProps {
}
class CompIter {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.CompIter */
    deref(): Component
    next(): Component
    prior(): Component
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CompIter_ConstructProps)
    _init (config?: CompIter_ConstructProps): void
    static $gtype: GObject.Type
}
interface Component_ConstructProps extends Object_ConstructProps {
}
class Component {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Component */
    add_component(child: Component): void
    add_property(property: Property): void
    as_ical_string(): string
    begin_component(kind: ComponentKind): CompIter
    check_restrictions(): number
    clone(): Component
    convert_errors(): void
    count_components(kind: ComponentKind): number
    count_errors(): number
    count_properties(kind: PropertyKind): number
    end_component(kind: ComponentKind): CompIter
    foreach_recurrence(start: Time, end: Time): void
    foreach_tzid(): void
    get_comment(): string
    get_current_component(): Component
    get_current_property(): Property
    get_description(): string
    get_dtend(): Time
    get_dtstamp(): Time
    get_dtstart(): Time
    get_due(): Time
    get_duration(): Duration
    get_first_component(kind: ComponentKind): Component | null
    get_first_property(kind: PropertyKind): Property | null
    get_first_real_component(): Component
    get_inner(): Component | null
    get_location(): string
    get_method(): PropertyMethod
    get_next_component(kind: ComponentKind): Component | null
    get_next_property(kind: PropertyKind): Property | null
    get_parent(): Component | null
    get_recurrenceid(): Time
    get_relcalid(): string
    get_sequence(): number
    get_span(): TimeSpan
    get_status(): PropertyStatus
    get_summary(): string
    get_timezone(tzid: string): Timezone | null
    get_uid(): string
    is_valid(): boolean
    isa(): ComponentKind
    isa_component(): number
    merge_component(comp_to_merge: Component): void
    remove_component(child: Component): void
    remove_property(property: Property): void
    set_comment(v: string): void
    set_description(v: string): void
    set_dtend(v: Time): void
    set_dtstamp(v: Time): void
    set_dtstart(v: Time): void
    set_due(v: Time): void
    set_duration(v: Duration): void
    set_location(v: string): void
    set_method(method: PropertyMethod): void
    set_parent(parent?: Component | null): void
    set_recurrenceid(v: Time): void
    set_relcalid(v: string): void
    set_sequence(v: number): void
    set_status(status: PropertyStatus): void
    set_summary(v: string): void
    set_uid(v: string): void
    strip_errors(): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Component_ConstructProps)
    _init (config?: Component_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(kind: ComponentKind): Component
    static new_from_string(str: string): Component
    static new_vagenda(): Component
    static new_valarm(): Component
    static new_vavailability(): Component
    static new_vcalendar(): Component
    static new_vevent(): Component
    static new_vfreebusy(): Component
    static new_vjournal(): Component
    static new_vpoll(): Component
    static new_vquery(): Component
    static new_vtimezone(): Component
    static new_vtodo(): Component
    static new_vvoter(): Component
    static new_x(x_name: string): Component
    static new_xavailable(): Component
    static new_xdaylight(): Component
    static new_xstandard(): Component
    static new_xvote(): Component
    static kind_from_string(string: string): ComponentKind
    static kind_is_valid(kind: ComponentKind): boolean
    static kind_to_string(kind: ComponentKind): string
    static $gtype: GObject.Type
}
interface Datetimeperiod_ConstructProps extends Object_ConstructProps {
}
class Datetimeperiod {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Datetimeperiod */
    get_period(): Period
    get_time(): Time
    set_period(period: Period): void
    set_time(time: Time): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Datetimeperiod_ConstructProps)
    _init (config?: Datetimeperiod_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Datetimeperiod
    static $gtype: GObject.Type
}
interface Duration_ConstructProps extends Object_ConstructProps {
}
class Duration {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Duration */
    as_ical_string(): string
    as_int(): number
    get_days(): number
    get_hours(): number
    get_minutes(): number
    get_seconds(): number
    get_weeks(): number
    is_bad_duration(): boolean
    is_neg(): boolean
    is_null_duration(): boolean
    set_days(days: number): void
    set_hours(hours: number): void
    set_is_neg(is_neg: boolean): void
    set_minutes(minutes: number): void
    set_seconds(seconds: number): void
    set_weeks(weeks: number): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Duration_ConstructProps)
    _init (config?: Duration_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_bad_duration(): Duration
    static new_from_int(t: number): Duration
    static new_from_string(str: string): Duration
    static new_null_duration(): Duration
    static $gtype: GObject.Type
}
interface Geo_ConstructProps extends Object_ConstructProps {
}
class Geo {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Geo */
    clone(): Geo
    get_lat(): number
    get_lon(): number
    set_lat(lat: number): void
    set_lon(lon: number): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Geo_ConstructProps)
    _init (config?: Geo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(lat: number, lon: number): Geo
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy?: boolean
    is_global_memory?: boolean
    native?: object
    native_destroy_func?: object
    owner?: GObject.Object
}
class Object {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static free_global_objects(): void
    static $gtype: GObject.Type
}
interface Parameter_ConstructProps extends Object_ConstructProps {
}
class Parameter {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Parameter */
    as_ical_string(): string
    clone(): Parameter
    get_actionparam(): ParameterAction
    get_altrep(): string | null
    get_charset(): string | null
    get_cn(): string | null
    get_cutype(): ParameterCutype | null
    get_delegatedfrom(): string | null
    get_delegatedto(): string | null
    get_dir(): string | null
    get_enable(): ParameterEnable
    get_encoding(): ParameterEncoding
    get_fbtype(): ParameterFbtype
    get_filename(): string | null
    get_fmttype(): string | null
    get_iana(): string | null
    get_iana_name(): string | null
    get_iana_value(): string | null
    get_id(): string | null
    get_language(): string | null
    get_latency(): string | null
    get_local(): ParameterLocal
    get_localize(): string | null
    get_managedid(): string | null
    get_member(): string | null
    get_modified(): string | null
    get_options(): string | null
    get_parent(): Property | null
    get_partstat(): ParameterPartstat
    get_publiccomment(): string | null
    get_range(): ParameterRange
    get_reason(): string | null
    get_related(): ParameterRelated
    get_reltype(): ParameterReltype
    get_required(): ParameterRequired
    get_response(): number
    get_role(): ParameterRole
    get_rsvp(): ParameterRsvp
    get_scheduleagent(): ParameterScheduleagent
    get_scheduleforcesend(): ParameterScheduleforcesend
    get_schedulestatus(): string | null
    get_sentby(): string | null
    get_size(): string | null
    get_stayinformed(): ParameterStayinformed
    get_substate(): ParameterSubstate
    get_tzid(): string | null
    get_value(): ParameterValue
    get_x(): string | null
    get_xliccomparetype(): ParameterXliccomparetype
    get_xlicerrortype(): ParameterXlicerrortype
    get_xname(): string | null
    get_xvalue(): string | null
    has_same_name(param2: Parameter): number
    isa(): ParameterKind
    isa_parameter(): number
    set_actionparam(v: ParameterAction): void
    set_altrep(v: string): void
    set_charset(v: string): void
    set_cn(v: string): void
    set_cutype(v: ParameterCutype): void
    set_delegatedfrom(v: string): void
    set_delegatedto(v: string): void
    set_dir(v: string): void
    set_enable(v: ParameterEnable): void
    set_encoding(v: ParameterEncoding): void
    set_fbtype(v: ParameterFbtype): void
    set_filename(v: string): void
    set_fmttype(v: string): void
    set_iana(v: string): void
    set_iana_name(v: string): void
    set_iana_value(v: string): void
    set_id(v: string): void
    set_language(v: string): void
    set_latency(v: string): void
    set_local(v: ParameterLocal): void
    set_localize(v: string): void
    set_managedid(v: string): void
    set_member(v: string): void
    set_modified(v: string): void
    set_options(v: string): void
    set_parent(property?: Property | null): void
    set_partstat(v: ParameterPartstat): void
    set_publiccomment(v: string): void
    set_range(v: ParameterRange): void
    set_reason(v: string): void
    set_related(v: ParameterRelated): void
    set_reltype(v: ParameterReltype): void
    set_required(v: ParameterRequired): void
    set_response(v: number): void
    set_role(v: ParameterRole): void
    set_rsvp(v: ParameterRsvp): void
    set_scheduleagent(v: ParameterScheduleagent): void
    set_scheduleforcesend(v: ParameterScheduleforcesend): void
    set_schedulestatus(v: string): void
    set_sentby(v: string): void
    set_size(v: string): void
    set_stayinformed(v: ParameterStayinformed): void
    set_substate(v: ParameterSubstate): void
    set_tzid(v: string): void
    set_value(v: ParameterValue): void
    set_x(v: string): void
    set_xliccomparetype(v: ParameterXliccomparetype): void
    set_xlicerrortype(v: ParameterXlicerrortype): void
    set_xname(v: string): void
    set_xvalue(v: string): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Parameter_ConstructProps)
    _init (config?: Parameter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(v: ParameterKind): Parameter
    static new_actionparam(v: ParameterAction): Parameter
    static new_altrep(v: string): Parameter
    static new_charset(v: string): Parameter
    static new_cn(v: string): Parameter
    static new_cutype(v: ParameterCutype): Parameter
    static new_delegatedfrom(v: string): Parameter
    static new_delegatedto(v: string): Parameter
    static new_dir(v: string): Parameter
    static new_enable(v: ParameterEnable): Parameter
    static new_encoding(v: ParameterEncoding): Parameter
    static new_fbtype(v: ParameterFbtype): Parameter
    static new_filename(v: string): Parameter
    static new_fmttype(v: string): Parameter
    static new_from_string(value: string): Parameter
    static new_from_value_string(kind: ParameterKind, value: string): Parameter
    static new_iana(v: string): Parameter
    static new_id(v: string): Parameter
    static new_language(v: string): Parameter
    static new_latency(v: string): Parameter
    static new_local(v: ParameterLocal): Parameter
    static new_localize(v: string): Parameter
    static new_managedid(v: string): Parameter
    static new_member(v: string): Parameter
    static new_modified(v: string): Parameter
    static new_options(v: string): Parameter
    static new_partstat(v: ParameterPartstat): Parameter
    static new_publiccomment(v: string): Parameter
    static new_range(v: ParameterRange): Parameter
    static new_reason(v: string): Parameter
    static new_related(v: ParameterRelated): Parameter
    static new_reltype(v: ParameterReltype): Parameter
    static new_required(v: ParameterRequired): Parameter
    static new_response(v: number): Parameter
    static new_role(v: ParameterRole): Parameter
    static new_rsvp(v: ParameterRsvp): Parameter
    static new_scheduleagent(v: ParameterScheduleagent): Parameter
    static new_scheduleforcesend(v: ParameterScheduleforcesend): Parameter
    static new_schedulestatus(v: string): Parameter
    static new_sentby(v: string): Parameter
    static new_size(v: string): Parameter
    static new_stayinformed(v: ParameterStayinformed): Parameter
    static new_substate(v: ParameterSubstate): Parameter
    static new_tzid(v: string): Parameter
    static new_value(v: ParameterValue): Parameter
    static new_x(v: string): Parameter
    static new_xliccomparetype(v: ParameterXliccomparetype): Parameter
    static new_xlicerrortype(v: ParameterXlicerrortype): Parameter
    static kind_from_string(string: string): ParameterKind
    static kind_is_valid(kind: ParameterKind): boolean
    static kind_to_string(kind: ParameterKind): string
    static value_to_value_kind(value: ParameterValue): ValueKind
    static $gtype: GObject.Type
}
interface Parser_ConstructProps extends Object_ConstructProps {
}
class Parser {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Parser */
    add_line(str?: string | null): Component | null
    clean(): Component | null
    free(): void
    get_line(func: ParserLineGenFunc): string
    get_state(): ParserState
    parse(func: ParserLineGenFunc): Component
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    static parse_string(str: string): Component
    static $gtype: GObject.Type
}
interface Period_ConstructProps extends Object_ConstructProps {
}
class Period {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Period */
    as_ical_string(): string
    get_duration(): Duration
    get_end(): Time
    get_start(): Time
    is_null_period(): boolean
    is_valid_period(): boolean
    set_duration(duration: Duration): void
    set_end(end: Time): void
    set_start(start: Time): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Period_ConstructProps)
    _init (config?: Period_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_string(str: string): Period
    static new_null_period(): Period
    static $gtype: GObject.Type
}
interface Property_ConstructProps extends Object_ConstructProps {
}
class Property {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Property */
    add_parameter(parameter: Parameter): void
    as_ical_string(): string
    clone(): Property
    count_parameters(): number
    get_acceptresponse(): string
    get_acknowledged(): Time
    get_action(): PropertyAction
    get_allowconflict(): string
    get_attach(): Attach
    get_attendee(): string
    get_busytype(): PropertyBusytype
    get_calid(): string
    get_calmaster(): string
    get_calscale(): string
    get_capversion(): string
    get_carid(): string
    get_carlevel(): PropertyCarlevel
    get_categories(): string
    get_class(): Property_Class
    get_cmd(): PropertyCmd
    get_color(): string
    get_comment(): string
    get_completed(): Time
    get_components(): string
    get_contact(): string
    get_created(): Time
    get_csid(): string
    get_datemax(): Time
    get_datemin(): Time
    get_datetime_with_component(comp?: Component | null): Time
    get_decreed(): string
    get_defaultcharset(): string
    get_defaultlocale(): string
    get_defaulttzid(): string
    get_defaultvcars(): string
    get_deny(): string
    get_description(): string
    get_dtend(): Time
    get_dtstamp(): Time
    get_dtstart(): Time
    get_due(): Time
    get_duration(): Duration
    get_estimatedduration(): Duration
    get_exdate(): Time
    get_expand(): number
    get_exrule(): Recurrence
    get_first_parameter(kind: ParameterKind): Parameter
    get_freebusy(): Period
    get_geo(): Geo
    get_grant(): string
    get_itipversion(): string
    get_lastmodified(): Time
    get_location(): string
    get_maxcomponentsize(): number
    get_maxdate(): Time
    get_maxresults(): number
    get_maxresultssize(): number
    get_method(): PropertyMethod
    get_mindate(): Time
    get_multipart(): string
    get_name(): string
    get_next_parameter(kind: ParameterKind): Parameter
    get_organizer(): string
    get_owner(): string
    get_parameter_as_string(name: string): string
    get_parent(): Component | null
    get_percentcomplete(): number
    get_permission(): string
    get_pollcompletion(): PropertyPollcompletion
    get_pollitemid(): number
    get_pollmode(): PropertyPollmode
    get_pollproperties(): string
    get_pollwinner(): number
    get_priority(): number
    get_prodid(): string
    get_property_name(): string
    get_query(): string
    get_queryid(): string
    get_querylevel(): PropertyQuerylevel
    get_queryname(): string
    get_rdate(): Datetimeperiod
    get_recuraccepted(): string
    get_recurexpand(): string
    get_recurlimit(): string
    get_recurrenceid(): Time
    get_relatedto(): string
    get_relcalid(): string
    get_repeat(): number
    get_replyurl(): string
    get_requeststatus(): Reqstat
    get_resources(): string
    get_response(): number
    get_restriction(): string
    get_rrule(): Recurrence
    get_scope(): string
    get_sequence(): number
    get_status(): PropertyStatus
    get_storesexpanded(): string
    get_summary(): string
    get_target(): string
    get_taskmode(): PropertyTaskmode
    get_transp(): PropertyTransp
    get_trigger(): Trigger
    get_tzid(): string
    get_tzidaliasof(): string
    get_tzname(): string
    get_tzoffsetfrom(): number
    get_tzoffsetto(): number
    get_tzuntil(): Time
    get_tzurl(): string
    get_uid(): string
    get_url(): string
    get_value(): Value
    get_value_as_string(): string
    get_version(): string
    get_voter(): string
    get_x(): string
    get_x_name(): string | null
    get_xlicclass(): PropertyXlicclass
    get_xlicclustercount(): string
    get_xlicerror(): string
    get_xlicmimecharset(): string
    get_xlicmimecid(): string
    get_xlicmimecontenttype(): string
    get_xlicmimeencoding(): string
    get_xlicmimefilename(): string
    get_xlicmimeoptinfo(): string
    isa(): PropertyKind
    isa_property(): number
    remove_parameter_by_kind(kind: ParameterKind): void
    remove_parameter_by_name(name: string): void
    remove_parameter_by_ref(param: Parameter): void
    set_acceptresponse(v: string): void
    set_acknowledged(v: Time): void
    set_action(v: PropertyAction): void
    set_allowconflict(v: string): void
    set_attach(v: Attach): void
    set_attendee(v: string): void
    set_busytype(v: PropertyBusytype): void
    set_calid(v: string): void
    set_calmaster(v: string): void
    set_calscale(v: string): void
    set_capversion(v: string): void
    set_carid(v: string): void
    set_carlevel(v: PropertyCarlevel): void
    set_categories(v: string): void
    set_class(v: Property_Class): void
    set_cmd(v: PropertyCmd): void
    set_color(v: string): void
    set_comment(v: string): void
    set_completed(v: Time): void
    set_components(v: string): void
    set_contact(v: string): void
    set_created(v: Time): void
    set_csid(v: string): void
    set_datemax(v: Time): void
    set_datemin(v: Time): void
    set_decreed(v: string): void
    set_defaultcharset(v: string): void
    set_defaultlocale(v: string): void
    set_defaulttzid(v: string): void
    set_defaultvcars(v: string): void
    set_deny(v: string): void
    set_description(v: string): void
    set_dtend(v: Time): void
    set_dtstamp(v: Time): void
    set_dtstart(v: Time): void
    set_due(v: Time): void
    set_duration(v: Duration): void
    set_estimatedduration(v: Duration): void
    set_exdate(v: Time): void
    set_expand(v: number): void
    set_exrule(v: Recurrence): void
    set_freebusy(v: Period): void
    set_geo(v: Geo): void
    set_grant(v: string): void
    set_itipversion(v: string): void
    set_lastmodified(v: Time): void
    set_location(v: string): void
    set_maxcomponentsize(v: number): void
    set_maxdate(v: Time): void
    set_maxresults(v: number): void
    set_maxresultssize(v: number): void
    set_method(v: PropertyMethod): void
    set_mindate(v: Time): void
    set_multipart(v: string): void
    set_name(v: string): void
    set_organizer(v: string): void
    set_owner(v: string): void
    set_parameter(parameter: Parameter): void
    set_parameter_from_string(name: string, value: string): void
    set_parent(component?: Component | null): void
    set_percentcomplete(v: number): void
    set_permission(v: string): void
    set_pollcompletion(v: PropertyPollcompletion): void
    set_pollitemid(v: number): void
    set_pollmode(v: PropertyPollmode): void
    set_pollproperties(v: string): void
    set_pollwinner(v: number): void
    set_priority(v: number): void
    set_prodid(v: string): void
    set_query(v: string): void
    set_queryid(v: string): void
    set_querylevel(v: PropertyQuerylevel): void
    set_queryname(v: string): void
    set_rdate(v: Datetimeperiod): void
    set_recuraccepted(v: string): void
    set_recurexpand(v: string): void
    set_recurlimit(v: string): void
    set_recurrenceid(v: Time): void
    set_relatedto(v: string): void
    set_relcalid(v: string): void
    set_repeat(v: number): void
    set_replyurl(v: string): void
    set_requeststatus(v: Reqstat): void
    set_resources(v: string): void
    set_response(v: number): void
    set_restriction(v: string): void
    set_rrule(v: Recurrence): void
    set_scope(v: string): void
    set_sequence(v: number): void
    set_status(v: PropertyStatus): void
    set_storesexpanded(v: string): void
    set_summary(v: string): void
    set_target(v: string): void
    set_taskmode(v: PropertyTaskmode): void
    set_transp(v: PropertyTransp): void
    set_trigger(v: Trigger): void
    set_tzid(v: string): void
    set_tzidaliasof(v: string): void
    set_tzname(v: string): void
    set_tzoffsetfrom(v: number): void
    set_tzoffsetto(v: number): void
    set_tzuntil(v: Time): void
    set_tzurl(v: string): void
    set_uid(v: string): void
    set_url(v: string): void
    set_value(value: Value): void
    set_value_from_string(value: string, kind: string): void
    set_version(v: string): void
    set_voter(v: string): void
    set_x(v: string): void
    set_x_name(name: string): void
    set_xlicclass(v: PropertyXlicclass): void
    set_xlicclustercount(v: string): void
    set_xlicerror(v: string): void
    set_xlicmimecharset(v: string): void
    set_xlicmimecid(v: string): void
    set_xlicmimecontenttype(v: string): void
    set_xlicmimeencoding(v: string): void
    set_xlicmimefilename(v: string): void
    set_xlicmimeoptinfo(v: string): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Property_ConstructProps)
    _init (config?: Property_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(kind: PropertyKind): Property
    static new_acceptresponse(v: string): Property
    static new_acknowledged(v: Time): Property
    static new_action(v: PropertyAction): Property
    static new_allowconflict(v: string): Property
    static new_attach(v: Attach): Property
    static new_attendee(v: string): Property
    static new_busytype(v: PropertyBusytype): Property
    static new_calid(v: string): Property
    static new_calmaster(v: string): Property
    static new_calscale(v: string): Property
    static new_capversion(v: string): Property
    static new_carid(v: string): Property
    static new_carlevel(v: PropertyCarlevel): Property
    static new_categories(v: string): Property
    static new_class(v: Property_Class): Property
    static new_cmd(v: PropertyCmd): Property
    static new_color(v: string): Property
    static new_comment(v: string): Property
    static new_completed(v: Time): Property
    static new_components(v: string): Property
    static new_contact(v: string): Property
    static new_created(v: Time): Property
    static new_csid(v: string): Property
    static new_datemax(v: Time): Property
    static new_datemin(v: Time): Property
    static new_decreed(v: string): Property
    static new_defaultcharset(v: string): Property
    static new_defaultlocale(v: string): Property
    static new_defaulttzid(v: string): Property
    static new_defaultvcars(v: string): Property
    static new_deny(v: string): Property
    static new_description(v: string): Property
    static new_dtend(v: Time): Property
    static new_dtstamp(v: Time): Property
    static new_dtstart(v: Time): Property
    static new_due(v: Time): Property
    static new_duration(v: Duration): Property
    static new_estimatedduration(v: Duration): Property
    static new_exdate(v: Time): Property
    static new_expand(v: number): Property
    static new_exrule(v: Recurrence): Property
    static new_freebusy(v: Period): Property
    static new_from_string(str: string): Property
    static new_geo(v: Geo): Property
    static new_grant(v: string): Property
    static new_itipversion(v: string): Property
    static new_lastmodified(v: Time): Property
    static new_location(v: string): Property
    static new_maxcomponentsize(v: number): Property
    static new_maxdate(v: Time): Property
    static new_maxresults(v: number): Property
    static new_maxresultssize(v: number): Property
    static new_method(v: PropertyMethod): Property
    static new_mindate(v: Time): Property
    static new_multipart(v: string): Property
    static new_name(v: string): Property
    static new_organizer(v: string): Property
    static new_owner(v: string): Property
    static new_percentcomplete(v: number): Property
    static new_permission(v: string): Property
    static new_pollcompletion(v: PropertyPollcompletion): Property
    static new_pollitemid(v: number): Property
    static new_pollmode(v: PropertyPollmode): Property
    static new_pollproperties(v: string): Property
    static new_pollwinner(v: number): Property
    static new_priority(v: number): Property
    static new_prodid(v: string): Property
    static new_query(v: string): Property
    static new_queryid(v: string): Property
    static new_querylevel(v: PropertyQuerylevel): Property
    static new_queryname(v: string): Property
    static new_rdate(v: Datetimeperiod): Property
    static new_recuraccepted(v: string): Property
    static new_recurexpand(v: string): Property
    static new_recurlimit(v: string): Property
    static new_recurrenceid(v: Time): Property
    static new_relatedto(v: string): Property
    static new_relcalid(v: string): Property
    static new_repeat(v: number): Property
    static new_replyurl(v: string): Property
    static new_requeststatus(v: Reqstat): Property
    static new_resources(v: string): Property
    static new_response(v: number): Property
    static new_restriction(v: string): Property
    static new_rrule(v: Recurrence): Property
    static new_scope(v: string): Property
    static new_sequence(v: number): Property
    static new_status(v: PropertyStatus): Property
    static new_storesexpanded(v: string): Property
    static new_summary(v: string): Property
    static new_target(v: string): Property
    static new_taskmode(v: PropertyTaskmode): Property
    static new_transp(v: PropertyTransp): Property
    static new_trigger(v: Trigger): Property
    static new_tzid(v: string): Property
    static new_tzidaliasof(v: string): Property
    static new_tzname(v: string): Property
    static new_tzoffsetfrom(v: number): Property
    static new_tzoffsetto(v: number): Property
    static new_tzuntil(v: Time): Property
    static new_tzurl(v: string): Property
    static new_uid(v: string): Property
    static new_url(v: string): Property
    static new_version(v: string): Property
    static new_voter(v: string): Property
    static new_x(v: string): Property
    static new_xlicclass(v: PropertyXlicclass): Property
    static new_xlicclustercount(v: string): Property
    static new_xlicerror(v: string): Property
    static new_xlicmimecharset(v: string): Property
    static new_xlicmimecid(v: string): Property
    static new_xlicmimecontenttype(v: string): Property
    static new_xlicmimeencoding(v: string): Property
    static new_xlicmimefilename(v: string): Property
    static new_xlicmimeoptinfo(v: string): Property
    static enum_to_string(e: number): string
    static kind_and_string_to_enum(kind: number, str: string): number
    static kind_from_string(string: string): PropertyKind
    static kind_has_property(kind: PropertyKind, e: number): number
    static kind_is_valid(kind: PropertyKind): boolean
    static kind_to_string(kind: PropertyKind): string
    static kind_to_value_kind(kind: PropertyKind): ValueKind
    static method_from_string(str: string): PropertyMethod
    static method_to_string(method: PropertyMethod): string
    static recurrence_is_excluded(comp: Component, dtstart: Time, recurtime: Time): boolean
    static status_from_string(str: string): PropertyStatus
    static status_to_string(method: PropertyStatus): string
    static $gtype: GObject.Type
}
interface RecurIterator_ConstructProps extends Object_ConstructProps {
}
class RecurIterator {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.RecurIterator */
    next(): Time
    set_start(start: Time): number
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RecurIterator_ConstructProps)
    _init (config?: RecurIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(rule: Recurrence, dtstart: Time): RecurIterator
    static $gtype: GObject.Type
}
interface Recurrence_ConstructProps extends Object_ConstructProps {
}
class Recurrence {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Recurrence */
    clear(): void
    get_by_day(index: number): number
    get_by_day_array(): number[]
    get_by_hour(index: number): number
    get_by_hour_array(): number[]
    get_by_minute(index: number): number
    get_by_minute_array(): number[]
    get_by_month(index: number): number
    get_by_month_array(): number[]
    get_by_month_day(index: number): number
    get_by_month_day_array(): number[]
    get_by_second(index: number): number
    get_by_second_array(): number[]
    get_by_set_pos(index: number): number
    get_by_set_pos_array(): number[]
    get_by_week_no(index: number): number
    get_by_week_no_array(): number[]
    get_by_year_day(index: number): number
    get_by_year_day_array(): number[]
    get_count(): number
    get_freq(): RecurrenceFrequency
    get_interval(): number
    get_until(): Time
    get_week_start(): RecurrenceWeekday
    set_by_day(index: number, value: number): void
    set_by_day_array(values: number[]): void
    set_by_hour(index: number, value: number): void
    set_by_hour_array(values: number[]): void
    set_by_minute(index: number, value: number): void
    set_by_minute_array(values: number[]): void
    set_by_month(index: number, value: number): void
    set_by_month_array(values: number[]): void
    set_by_month_day(index: number, value: number): void
    set_by_month_day_array(values: number[]): void
    set_by_second(index: number, value: number): void
    set_by_second_array(values: number[]): void
    set_by_set_pos(index: number, value: number): void
    set_by_set_pos_array(values: number[]): void
    set_by_week_no(index: number, value: number): void
    set_by_week_no_array(values: number[]): void
    set_by_year_day(index: number, value: number): void
    set_by_year_day_array(values: number[]): void
    set_count(count: number): void
    set_freq(freq: RecurrenceFrequency): void
    set_interval(interval: number): void
    set_until(until: Time): void
    set_week_start(week_start: RecurrenceWeekday): void
    to_string(): string
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Recurrence_ConstructProps)
    _init (config?: Recurrence_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Recurrence
    static new_from_string(str: string): Recurrence
    static day_day_of_week(day: number): RecurrenceWeekday
    static day_position(day: number): number
    static frequency_from_string(str: string): RecurrenceFrequency
    static frequency_to_string(kind: RecurrenceFrequency): string
    static month_is_leap(month: number): boolean
    static month_month(month: number): number
    static rscale_is_supported(): boolean
    static rscale_supported_calendars(): Array
    static skip_from_string(str: string): RecurrenceSkip
    static skip_to_string(kind: RecurrenceSkip): string
    static weekday_from_string(str: string): RecurrenceWeekday
    static weekday_to_string(kind: RecurrenceWeekday): string
    static $gtype: GObject.Type
}
interface Reqstat_ConstructProps extends Object_ConstructProps {
}
class Reqstat {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Reqstat */
    get_code(): RequestStatus
    get_debug(): string
    get_desc(): string
    set_code(code: RequestStatus): void
    to_string(): string
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Reqstat_ConstructProps)
    _init (config?: Reqstat_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_string(str: string): Reqstat
    static $gtype: GObject.Type
}
interface Time_ConstructProps extends Object_ConstructProps {
}
class Time {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Time */
    add(d: Duration): Time
    adjust(days: number, hours: number, minutes: number, seconds: number): void
    as_ical_string(): string
    as_timet(): number
    as_timet_with_zone(zone?: Timezone | null): number
    clone(): Time
    compare(b: Time): number
    compare_date_only(b: Time): number
    compare_date_only_tz(b: Time, zone?: Timezone | null): number
    convert_timezone(from_zone?: Timezone | null, to_zone?: Timezone | null): void
    convert_to_zone(zone?: Timezone | null): Time
    convert_to_zone_inplace(zone?: Timezone | null): void
    day_of_week(): number
    day_of_year(): number
    get_date(): [ /* year */ number | null, /* month */ number | null, /* day */ number | null ]
    get_day(): number
    get_hour(): number
    get_minute(): number
    get_month(): number
    get_second(): number
    get_time(): [ /* hour */ number | null, /* minute */ number | null, /* second */ number | null ]
    get_timezone(): Timezone
    get_tzid(): string | null
    get_year(): number
    is_date(): boolean
    is_daylight(): boolean
    is_null_time(): boolean
    is_utc(): boolean
    is_valid_time(): boolean
    normalize(): Time
    normalize_inplace(): void
    set_date(year: number, month: number, day: number): void
    set_day(day: number): void
    set_hour(hour: number): void
    set_is_date(is_date: boolean): void
    set_is_daylight(is_daylight: boolean): void
    set_minute(minute: number): void
    set_month(month: number): void
    set_second(second: number): void
    set_time(hour: number, minute: number, second: number): void
    set_timezone(zone?: Timezone | null): void
    set_year(year: number): void
    start_doy_week(fdow: number): number
    subtract(t2: Time): Duration
    week_number(): number
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Time_ConstructProps)
    _init (config?: Time_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Time
    static new_current_with_zone(zone?: Timezone | null): Time
    static new_from_day_of_year(day: number, year: number): Time
    static new_from_string(str: string): Time
    static new_from_timet_with_zone(v: number, is_date: number, zone?: Timezone | null): Time
    static new_null_date(): Time
    static new_null_time(): Time
    static new_today(): Time
    static days_in_month(month: number, year: number): number
    static days_in_year(year: number): number
    static days_is_leap_year(year: number): boolean
    static timezone_expand_vtimezone(comp: Component, end_year: number, changes: Array): void
    static $gtype: GObject.Type
}
interface TimeSpan_ConstructProps extends Object_ConstructProps {
}
class TimeSpan {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.TimeSpan */
    clone(): TimeSpan
    contains(container: TimeSpan): number
    get_end(): number
    get_is_busy(): boolean
    get_start(): number
    overlaps(s2: TimeSpan): number
    set_end(end: number): void
    set_is_busy(is_busy: boolean): void
    set_start(start: number): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimeSpan_ConstructProps)
    _init (config?: TimeSpan_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dtstart: Time, dtend: Time, is_busy: number): TimeSpan
    static new_timet(start: number, end: number, is_busy: boolean): TimeSpan
    static $gtype: GObject.Type
}
interface Timezone_ConstructProps extends Object_ConstructProps {
}
class Timezone {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Timezone */
    copy(): Timezone
    dump_changes(max_year: number, fp?: object | null): number
    get_component(): Component
    get_display_name(): string
    get_latitude(): number
    get_location(): string | null
    get_longitude(): number
    get_tzid(): string | null
    get_tznames(): string | null
    get_utc_offset(tt?: Time | null): [ /* returnType */ number, /* is_daylight */ number | null ]
    get_utc_offset_of_utc_time(tt: Time): [ /* returnType */ number, /* is_daylight */ number | null ]
    set_component(comp: Component): number
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Timezone_ConstructProps)
    _init (config?: Timezone_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static array_new(): Timezone
    static new(): Timezone
    static array_append_from_vtimezone(timezones: Array, child: Component): void
    static array_element_at(timezones: Array, index: number): Timezone
    static free_builtin_timezones(): void
    static free_zone_directory(): void
    static get_builtin_timezone(location?: string | null): Timezone | null
    static get_builtin_timezone_from_offset(offset: number, tzname?: string | null): Timezone
    static get_builtin_timezone_from_tzid(tzid?: string | null): Timezone
    static get_builtin_timezones(): Array
    static get_builtin_tzdata(): boolean
    static get_location_from_vtimezone(component: Component): string
    static get_tznames_from_vtimezone(component: Component): string
    static get_utc_timezone(): Timezone
    static release_zone_tab(): void
    static set_builtin_tzdata(set: boolean): void
    static set_tzid_prefix(new_prefix: string): void
    static set_zone_directory(path: string): void
    static $gtype: GObject.Type
}
interface Trigger_ConstructProps extends Object_ConstructProps {
}
class Trigger {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Trigger */
    get_duration(): Duration
    get_time(): Time
    is_bad_trigger(): boolean
    is_null_trigger(): boolean
    set_duration(duration: Duration): void
    set_time(time: Time): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Trigger_ConstructProps)
    _init (config?: Trigger_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_int(reltime: number): Trigger
    static new_from_string(str: string): Trigger
    static $gtype: GObject.Type
}
interface Value_ConstructProps extends Object_ConstructProps {
}
class Value {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    always_destroy: boolean
    native_destroy_func: object
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Value */
    as_ical_string(): string
    clone(): Value
    compare(b: Value): ParameterXliccomparetype
    get_action(): PropertyAction
    get_attach(): Attach | null
    get_binary(): string | null
    get_boolean(): number
    get_busytype(): PropertyBusytype
    get_caladdress(): string | null
    get_carlevel(): PropertyCarlevel
    get_class(): Property_Class
    get_cmd(): PropertyCmd
    get_date(): Time | null
    get_datetime(): Time | null
    get_datetimedate(): Time | null
    get_datetimeperiod(): Datetimeperiod | null
    get_duration(): Duration | null
    get_float(): number
    get_geo(): Geo | null
    get_integer(): number
    get_method(): PropertyMethod
    get_parent(): Property | null
    get_period(): Period | null
    get_pollcompletion(): PropertyPollcompletion
    get_pollmode(): PropertyPollmode
    get_query(): string | null
    get_querylevel(): PropertyQuerylevel
    get_recur(): Recurrence | null
    get_requeststatus(): Reqstat | null
    get_status(): PropertyStatus
    get_string(): string | null
    get_taskmode(): PropertyTaskmode
    get_text(): string | null
    get_transp(): PropertyTransp
    get_trigger(): Trigger | null
    get_uri(): string | null
    get_utcoffset(): number
    get_x(): string | null
    get_xlicclass(): PropertyXlicclass
    is_valid(): boolean
    isa(): ValueKind
    isa_value(): number
    reset_kind(): void
    set_action(v: PropertyAction): void
    set_attach(v: Attach): void
    set_binary(v: string): void
    set_boolean(v: number): void
    set_busytype(v: PropertyBusytype): void
    set_caladdress(v: string): void
    set_carlevel(v: PropertyCarlevel): void
    set_class(v: Property_Class): void
    set_cmd(v: PropertyCmd): void
    set_date(v: Time): void
    set_datetime(v: Time): void
    set_datetimedate(v: Time): void
    set_datetimeperiod(v: Datetimeperiod): void
    set_duration(v: Duration): void
    set_float(v: number): void
    set_geo(v: Geo): void
    set_integer(v: number): void
    set_method(v: PropertyMethod): void
    set_parent(property?: Property | null): void
    set_period(v: Period): void
    set_pollcompletion(v: PropertyPollcompletion): void
    set_pollmode(v: PropertyPollmode): void
    set_query(v: string): void
    set_querylevel(v: PropertyQuerylevel): void
    set_recur(v: Recurrence): void
    set_requeststatus(v: Reqstat): void
    set_status(v: PropertyStatus): void
    set_string(v: string): void
    set_taskmode(v: PropertyTaskmode): void
    set_text(v: string): void
    set_transp(v: PropertyTransp): void
    set_trigger(v: Trigger): void
    set_uri(v: string): void
    set_utcoffset(v: number): void
    set_x(v: string): void
    set_xlicclass(v: PropertyXlicclass): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    add_depender(depender: GObject.Object): void
    get_always_destroy(): boolean
    get_is_global_memory(): boolean
    ref_owner(): GObject.Object | null
    remove_depender(depender: GObject.Object): void
    remove_owner(): void
    set_always_destroy(value: boolean): void
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    set_owner(owner: GObject.Object): void
    steal_native(): object | null
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
    connect(sigName: "notify", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-destroy", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Value_ConstructProps)
    _init (config?: Value_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(kind: ValueKind): Value
    static new_action(v: PropertyAction): Value
    static new_attach(v: Attach): Value
    static new_binary(v: string): Value
    static new_boolean(v: number): Value
    static new_busytype(v: PropertyBusytype): Value
    static new_caladdress(v: string): Value
    static new_carlevel(v: PropertyCarlevel): Value
    static new_class(v: Property_Class): Value
    static new_cmd(v: PropertyCmd): Value
    static new_date(v: Time): Value
    static new_datetime(v: Time): Value
    static new_datetimedate(v: Time): Value
    static new_datetimeperiod(v: Datetimeperiod): Value
    static new_duration(v: Duration): Value
    static new_float(v: number): Value
    static new_from_string(kind: ValueKind, str: string): Value
    static new_geo(v: Geo): Value
    static new_integer(v: number): Value
    static new_method(v: PropertyMethod): Value
    static new_period(v: Period): Value
    static new_pollcompletion(v: PropertyPollcompletion): Value
    static new_pollmode(v: PropertyPollmode): Value
    static new_query(v: string): Value
    static new_querylevel(v: PropertyQuerylevel): Value
    static new_recur(v: Recurrence): Value
    static new_requeststatus(v: Reqstat): Value
    static new_status(v: PropertyStatus): Value
    static new_string(v: string): Value
    static new_taskmode(v: PropertyTaskmode): Value
    static new_text(v: string): Value
    static new_transp(v: PropertyTransp): Value
    static new_trigger(v: Trigger): Value
    static new_uri(v: string): Value
    static new_utcoffset(v: number): Value
    static new_x(v: string): Value
    static new_xlicclass(v: PropertyXlicclass): Value
    static decode_ical_string(szText: string): string | null
    static encode_ical_string(szText: string): string | null
    static kind_from_string(str: string): ValueKind
    static kind_is_valid(kind: ValueKind): boolean
    static kind_to_property_kind(kind: ValueKind): PropertyKind
    static kind_to_string(kind: ValueKind): string
    static $gtype: GObject.Type
}
abstract class ArrayClass {
    static name: string
}
abstract class AttachClass {
    static name: string
}
abstract class CompIterClass {
    static name: string
}
abstract class ComponentClass {
    static name: string
}
abstract class DatetimeperiodClass {
    static name: string
}
abstract class DurationClass {
    static name: string
}
abstract class GeoClass {
    static name: string
}
abstract class ObjectClass {
    static name: string
}
class ObjectPrivate {
    static name: string
}
abstract class ParameterClass {
    static name: string
}
abstract class ParserClass {
    static name: string
}
abstract class PeriodClass {
    static name: string
}
abstract class PropertyClass {
    static name: string
}
abstract class RecurIteratorClass {
    static name: string
}
abstract class RecurrenceClass {
    static name: string
}
abstract class ReqstatClass {
    static name: string
}
abstract class TimeClass {
    static name: string
}
abstract class TimeSpanClass {
    static name: string
}
abstract class TimezoneClass {
    static name: string
}
abstract class TriggerClass {
    static name: string
}
abstract class ValueClass {
    static name: string
}
class _Array {
    static name: string
}
class _Attach {
    static name: string
}
class _CompIter {
    static name: string
}
class _Component {
    static name: string
}
class _Datetimeperiod {
    static name: string
}
class _Duration {
    static name: string
}
class _Geo {
    static name: string
}
class _Parameter {
    static name: string
}
class _Parser {
    static name: string
}
class _Period {
    static name: string
}
class _Property {
    static name: string
}
class _RecurIterator {
    static name: string
}
class _Recurrence {
    static name: string
}
class _Reqstat {
    static name: string
}
class _Time {
    static name: string
}
class _TimeSpan {
    static name: string
}
class _Timezone {
    static name: string
}
class _Trigger {
    static name: string
}
class _Value {
    static name: string
}
}
export default ICalGLib;