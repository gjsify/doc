/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ECal-2.0
 */

import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type ICalGLib from './ICalGLib-3.0';
import type EDataServer from './EDataServer-1.2';
import type GData from './GData-0.0';
import type Json from './Json-1.0';
import type Goa from './Goa-1.0';
import type Camel from './Camel-1.2';

export namespace ECal {

enum ClientError {
    NO_SUCH_CALENDAR,
    OBJECT_NOT_FOUND,
    INVALID_OBJECT,
    UNKNOWN_USER,
    OBJECT_ID_ALREADY_EXISTS,
    INVALID_RANGE,
}
enum ClientSourceType {
    EVENTS,
    TASKS,
    MEMOS,
}
enum ComponentAlarmAction {
    NONE,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    UNKNOWN,
}
enum ComponentAlarmTriggerKind {
    NONE,
    RELATIVE_START,
    RELATIVE_END,
    ABSOLUTE,
}
enum ComponentClassification {
    NONE,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    UNKNOWN,
}
enum ComponentPeriodKind {
    DATETIME,
    DURATION,
}
enum ComponentRangeKind {
    SINGLE,
    THISPRIOR,
    THISFUTURE,
}
enum ComponentTransparency {
    NONE,
    TRANSPARENT,
    OPAQUE,
    UNKNOWN,
}
enum ComponentVType {
    NO_TYPE,
    EVENT,
    TODO,
    JOURNAL,
    FREEBUSY,
    TIMEZONE,
}
enum ClientViewFlags {
    NONE,
    NOTIFY_INITIAL,
}
enum ObjModType {
    THIS,
    THIS_AND_PRIOR,
    THIS_AND_FUTURE,
    ALL,
    ONLY_THIS,
}
enum OperationFlags {
    NONE,
    CONFLICT_FAIL,
    CONFLICT_USE_NEWER,
    CONFLICT_KEEP_SERVER,
    CONFLICT_KEEP_LOCAL,
    CONFLICT_WRITE_COPY,
    DISABLE_ITIP_MESSAGE,
}
enum RecurDescribeRecurrenceFlags {
    NONE,
    PREFIXED,
    FALLBACK,
}
enum ReminderWatcherDescribeFlags {
    NONE,
    MARKUP,
}
const BACKEND_PROPERTY_ALARM_EMAIL_ADDRESS: string
const BACKEND_PROPERTY_CAL_EMAIL_ADDRESS: string
const BACKEND_PROPERTY_DEFAULT_OBJECT: string
const BACKEND_PROPERTY_REVISION: string
const EVOLUTION_ALARM_UID_PROPERTY: string
const EVOLUTION_ENDDATE_PARAMETER: string
const LIBICAL_GLIB_UNSTABLE_API: number
const STATIC_CAPABILITY_ALARM_DESCRIPTION: string
const STATIC_CAPABILITY_ALL_DAY_EVENT_AS_TIME: string
const STATIC_CAPABILITY_BULK_ADDS: string
const STATIC_CAPABILITY_BULK_MODIFIES: string
const STATIC_CAPABILITY_BULK_REMOVES: string
const STATIC_CAPABILITY_COMPONENT_COLOR: string
const STATIC_CAPABILITY_CREATE_MESSAGES: string
const STATIC_CAPABILITY_DELEGATE_SUPPORTED: string
const STATIC_CAPABILITY_DELEGATE_TO_MANY: string
const STATIC_CAPABILITY_HAS_UNACCEPTED_MEETING: string
const STATIC_CAPABILITY_NO_ALARM_AFTER_START: string
const STATIC_CAPABILITY_NO_ALARM_REPEAT: string
const STATIC_CAPABILITY_NO_AUDIO_ALARMS: string
const STATIC_CAPABILITY_NO_CONV_TO_ASSIGN_TASK: string
const STATIC_CAPABILITY_NO_CONV_TO_RECUR: string
const STATIC_CAPABILITY_NO_DISPLAY_ALARMS: string
const STATIC_CAPABILITY_NO_EMAIL_ALARMS: string
const STATIC_CAPABILITY_NO_GEN_OPTIONS: string
const STATIC_CAPABILITY_NO_MEMO_START_DATE: string
const STATIC_CAPABILITY_NO_ORGANIZER: string
const STATIC_CAPABILITY_NO_PROCEDURE_ALARMS: string
const STATIC_CAPABILITY_NO_TASK_ASSIGNMENT: string
const STATIC_CAPABILITY_NO_THISANDFUTURE: string
const STATIC_CAPABILITY_NO_THISANDPRIOR: string
const STATIC_CAPABILITY_NO_TRANSPARENCY: string
const STATIC_CAPABILITY_ONE_ALARM_ONLY: string
const STATIC_CAPABILITY_ORGANIZER_MUST_ACCEPT: string
const STATIC_CAPABILITY_ORGANIZER_MUST_ATTEND: string
const STATIC_CAPABILITY_ORGANIZER_NOT_EMAIL_ADDRESS: string
const STATIC_CAPABILITY_RECURRENCES_NO_MASTER: string
const STATIC_CAPABILITY_REFRESH_SUPPORTED: string
const STATIC_CAPABILITY_REMOVE_ALARMS: string
const STATIC_CAPABILITY_REMOVE_ONLY_THIS: string
const STATIC_CAPABILITY_REQ_SEND_OPTIONS: string
const STATIC_CAPABILITY_SAVE_SCHEDULES: string
const STATIC_CAPABILITY_SIMPLE_MEMO: string
const STATIC_CAPABILITY_SIMPLE_MEMO_WITH_SUMMARY: string
const STATIC_CAPABILITY_TASK_CAN_RECUR: string
const STATIC_CAPABILITY_TASK_DATE_ONLY: string
const STATIC_CAPABILITY_TASK_ESTIMATED_DURATION: string
const STATIC_CAPABILITY_TASK_HANDLE_RECUR: string
const STATIC_CAPABILITY_TASK_NO_ALARM: string
function isodateFromTimeT(t: number): string
function matchTzid(tzid: string): string
function recurDescribeRecurrence(icalcomp: ICalGLib.Component, weekStartDay: GLib.DateWeekday, flags: number): string | null
function recurDescribeRecurrenceEx(icalcomp: ICalGLib.Component, weekStartDay: GLib.DateWeekday, flags: number, datetimeFmtFunc?: RecurFormatDateTimeFunc | null): string | null
function recurEnsureEndDates(comp: Component, refresh: boolean, tzCb: RecurResolveTimezoneCb, cancellable?: Gio.Cancellable | null): boolean
function recurGenerateInstancesSync(icalcomp: ICalGLib.Component, intervalStart: ICalGLib.Time, intervalEnd: ICalGLib.Time, defaultTimezone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null): boolean
function recurGetLocalizedNth(nth: number): string
function recurObtainEnddate(ir: ICalGLib.Recurrence, prop: ICalGLib.Property, zone: ICalGLib.Timezone, convertEndDate: boolean): number
function systemTimezoneGetLocation(): string
function timeAddDay(time: number, days: number): number
function timeAddDayWithZone(time: number, days: number, zone: ICalGLib.Timezone): number
function timeAddMonthWithZone(time: number, months: number, zone: ICalGLib.Timezone): number
function timeAddWeek(time: number, weeks: number): number
function timeAddWeekWithZone(time: number, weeks: number, zone: ICalGLib.Timezone): number
function timeDayBegin(t: number): number
function timeDayBeginWithZone(time: number, zone: ICalGLib.Timezone): number
function timeDayEnd(t: number): number
function timeDayEndWithZone(time: number, zone: ICalGLib.Timezone): number
function timeDayOfWeek(day: number, month: number, year: number): number
function timeDayOfYear(day: number, month: number, year: number): number
function timeDaysInMonth(year: number, month: number): number
function timeFromIsodate(str: string): number
function timeIsLeapYear(year: number): boolean
function timeLeapYearsUpTo(year: number): number
function timeMonthBeginWithZone(time: number, zone: ICalGLib.Timezone): number
function timeToGdateWithZone(date: GLib.Date, time: number, zone?: ICalGLib.Timezone | null): void
function timeWeekBeginWithZone(time: number, weekStartDay: number, zone: ICalGLib.Timezone): number
function timeYearBeginWithZone(time: number, zone: ICalGLib.Timezone): number
function utilAddTimezonesFromComponent(vcalComp: ICalGLib.Component, icalcomp: ICalGLib.Component): void
function utilClampVtimezone(vtimezone: ICalGLib.Component, from: ICalGLib.Time, to?: ICalGLib.Time | null): /* vtimezone */ ICalGLib.Component
function utilClampVtimezoneByComponent(vtimezone: ICalGLib.Component, component: ICalGLib.Component): /* vtimezone */ ICalGLib.Component
function utilComponentDupXProperty(icalcomp: ICalGLib.Component, xName: string): string | null
function utilComponentFindXProperty(icalcomp: ICalGLib.Component, xName: string): ICalGLib.Property | null
function utilComponentGetRecuridAsString(icalcomp: ICalGLib.Component): string | null
function utilComponentHasAlarms(icalcomp: ICalGLib.Component): boolean
function utilComponentHasAttendee(icalcomp: ICalGLib.Component): boolean
function utilComponentHasOrganizer(icalcomp: ICalGLib.Component): boolean
function utilComponentHasProperty(icalcomp: ICalGLib.Component, propKind: ICalGLib.PropertyKind): boolean
function utilComponentHasRdates(icalcomp: ICalGLib.Component): boolean
function utilComponentHasRecurrences(icalcomp: ICalGLib.Component): boolean
function utilComponentHasRrules(icalcomp: ICalGLib.Component): boolean
function utilComponentHasXProperty(icalcomp: ICalGLib.Component, xName: string): boolean
function utilComponentIsInstance(icalcomp: ICalGLib.Component): boolean
function utilComponentRemovePropertyByKind(icalcomp: ICalGLib.Component, kind: ICalGLib.PropertyKind, all: boolean): number
function utilComponentRemoveXProperty(icalcomp: ICalGLib.Component, xName: string): boolean
function utilComponentSetXProperty(icalcomp: ICalGLib.Component, xName: string, value?: string | null): void
function utilConflictResolutionToOperationFlags(conflictResolution: EDataServer.ConflictResolution): number
function utilConstructInstance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time): ICalGLib.Component | null
function utilCopyTimezone(zone: ICalGLib.Timezone): ICalGLib.Timezone
function utilGenerateAlarmsForComp(comp: Component, start: number, end: number, omit: ComponentAlarmAction, resolveTzid: RecurResolveTimezoneCb, defaultTimezone: ICalGLib.Timezone): ComponentAlarms | null
function utilGenerateAlarmsForList(comps: Component[], start: number, end: number, omit: ComponentAlarmAction, resolveTzid: RecurResolveTimezoneCb, defaultTimezone: ICalGLib.Timezone): [ /* returnType */ number, /* compAlarms */ ComponentAlarms[] ]
function utilGetComponentOccurTimes(comp: Component, tzCb: RecurResolveTimezoneCb, defaultTimezone: ICalGLib.Timezone, kind: ICalGLib.ComponentKind): [ /* outStart */ number, /* outEnd */ number ]
function utilGetSystemTimezone(): ICalGLib.Timezone | null
function utilGetSystemTimezoneLocation(): string
function utilIcaltimeToTm(itt: ICalGLib.Time): object | null
function utilIcaltimeToTmWithZone(itt: ICalGLib.Time, fromZone: ICalGLib.Timezone, toZone: ICalGLib.Timezone): object | null
function utilInitRecurTaskSync(vtodo: ICalGLib.Component, calClient: Client, cancellable?: Gio.Cancellable | null): boolean
function utilInlineLocalAttachmentsSync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
function utilIsFirstInstance(comp: Component, rid: ICalGLib.Time, tzCb: RecurResolveTimezoneCb): boolean
function utilMarkTaskCompleteSync(vtodo: ICalGLib.Component, completedTime: number, calClient: Client, cancellable?: Gio.Cancellable | null): boolean
function utilNewComponent(kind: ICalGLib.ComponentKind): ICalGLib.Component
function utilNewTopLevel(): ICalGLib.Component
function utilNormalizeRruleUntilValue(icalcomp: ICalGLib.Component, ttuntil: ICalGLib.Time, tzCb: RecurResolveTimezoneCb): void
function utilOperationFlagsToConflictResolution(flags: number): EDataServer.ConflictResolution
function utilParseIcsFile(filename: string): ICalGLib.Component | null
function utilParseIcsString(string: string): ICalGLib.Component | null
function utilPriorityFromString(string: string): number
function utilPriorityToString(priority: number): string
function utilPropertyHasParameter(prop: ICalGLib.Property, paramKind: ICalGLib.ParameterKind): boolean
function utilRemoveInstances(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType): void
function utilRemoveInstancesEx(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType, tzCb: RecurResolveTimezoneCb): void
function utilSecondsToString(seconds: number): string
function utilSetAlarmAcknowledged(component: Component, auid: string, when: number): boolean
function utilSplitAtInstance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, masterDtstart?: ICalGLib.Time | null): ICalGLib.Component | null
function utilSplitAtInstanceEx(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, masterDtstart: ICalGLib.Time | null, tzCb: RecurResolveTimezoneCb): ICalGLib.Component | null
function utilTmToIcaltime(tm: object | null, isDate: boolean): ICalGLib.Time
interface ComponentParameterBagFilterFunc {
    (parameter: ICalGLib.Parameter): boolean
}
interface ComponentPropertyBagFilterFunc {
    (property: ICalGLib.Property): boolean
}
interface RecurFormatDateTimeFunc {
    (itt: ICalGLib.Time, buffer: string, bufferSize: number): void
}
interface RecurInstanceCb {
    (icomp: ICalGLib.Component, instanceStart: ICalGLib.Time, instanceEnd: ICalGLib.Time, cancellable?: Gio.Cancellable | null): boolean
}
interface RecurResolveTimezoneCb {
    (tzid: string, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
}
class TimezoneCache {
    /* Methods of ECal-2.0.ECal.TimezoneCache */
    addTimezone(zone: ICalGLib.Timezone): void
    getTimezone(tzid: string): ICalGLib.Timezone | null
    listTimezones(): ICalGLib.Timezone[]
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    connect(sigName: "timezone-added", callback: ((zone: ICalGLib.Timezone) => void)): number
    on(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void): NodeJS.EventEmitter
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    static name: string
}
interface Client_ConstructProps extends EDataServer.Client_ConstructProps {
    /* Constructor properties of ECal-2.0.ECal.Client */
    defaultTimezone?: ICalGLib.Timezone
    sourceType?: ClientSourceType
}
class Client {
    /* Properties of ECal-2.0.ECal.Client */
    defaultTimezone: ICalGLib.Timezone
    /* Properties of EDataServer-1.2.EDataServer.Client */
    readonly capabilities: object
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly opened: boolean
    readonly readonly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ECal-2.0.ECal.Client */
    addTimezone(zone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addTimezoneFinish(result: Gio.AsyncResult): boolean
    addTimezoneSync(zone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null): boolean
    checkOneAlarmOnly(): boolean
    checkOrganizerMustAccept(): boolean
    checkOrganizerMustAttend(): boolean
    checkRecurrencesNoMaster(): boolean
    checkSaveSchedules(): boolean
    createObject(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outUid */ string | null ]
    createObjectSync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUid */ string | null ]
    createObjects(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createObjectsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outUids */ string[] | null ]
    createObjectsSync(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] | null ]
    discardAlarm(uid: string, rid: string | null, auid: string, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    discardAlarmFinish(result: Gio.AsyncResult): boolean
    discardAlarmSync(uid: string, rid: string | null, auid: string, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    generateInstances(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    generateInstancesForObject(icalcomp: ICalGLib.Component, start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    generateInstancesForObjectSync(icalcomp: ICalGLib.Component, start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    generateInstancesSync(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    getAttachmentUris(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAttachmentUrisFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAttachmentUris */ string[] ]
    getAttachmentUrisSync(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAttachmentUris */ string[] ]
    getComponentAsString(icalcomp: ICalGLib.Component): string | null
    getDefaultObject(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDefaultObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    getDefaultObjectSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    getDefaultTimezone(): ICalGLib.Timezone
    getFreeBusy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFreeBusyFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outFreebusy */ Component[] ]
    getFreeBusySync(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFreebusy */ Component[] ]
    getLocalAttachmentStore(): string
    getObject(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    getObjectList(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectListAsComps(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectListAsCompsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    getObjectListAsCompsSync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    getObjectListFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outIcalcomps */ ICalGLib.Component[] ]
    getObjectListSync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalcomps */ ICalGLib.Component[] ]
    getObjectSync(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    getObjectsForUid(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectsForUidFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    getObjectsForUidSync(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    getSourceType(): ClientSourceType
    getTimezone(tzid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTimezoneFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outZone */ ICalGLib.Timezone ]
    getTimezoneSync(tzid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outZone */ ICalGLib.Timezone ]
    getView(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getViewFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outView */ ClientView ]
    getViewSync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outView */ ClientView ]
    modifyObject(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyObjectFinish(result: Gio.AsyncResult): boolean
    modifyObjectSync(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    modifyObjects(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyObjectsFinish(result: Gio.AsyncResult): boolean
    modifyObjectsSync(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    receiveObjects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    receiveObjectsFinish(result: Gio.AsyncResult): boolean
    receiveObjectsSync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    removeObject(uid: string, rid: string | null, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeObjectFinish(result: Gio.AsyncResult): boolean
    removeObjectSync(uid: string, rid: string | null, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    removeObjects(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeObjectsFinish(result: Gio.AsyncResult): boolean
    removeObjectsSync(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    sendObjects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendObjectsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outUsers */ string[], /* outModifiedIcalcomp */ ICalGLib.Component ]
    sendObjectsSync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUsers */ string[], /* outModifiedIcalcomp */ ICalGLib.Component ]
    setDefaultTimezone(zone: ICalGLib.Timezone): void
    /* Methods of EDataServer-1.2.EDataServer.Client */
    cancelAll(): void
    checkCapability(capability: string): boolean
    checkRefreshSupported(): boolean
    dupBusName(): string
    getBackendProperty(propName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getBackendPropertyFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* propValue */ string ]
    getBackendPropertySync(propName: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* propValue */ string ]
    getCapabilities(): string[]
    getSource(): EDataServer.Source
    isOnline(): boolean
    isOpened(): boolean
    isReadonly(): boolean
    open(onlyIfExists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openSync(onlyIfExists: boolean, cancellable?: Gio.Cancellable | null): boolean
    refMainContext(): GLib.MainContext
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeFinish(result: Gio.AsyncResult): boolean
    removeSync(cancellable?: Gio.Cancellable | null): boolean
    retrieveCapabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieveCapabilitiesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    retrieveCapabilitiesSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    retrieveProperties(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrievePropertiesFinish(result: Gio.AsyncResult): boolean
    retrievePropertiesSync(cancellable?: Gio.Cancellable | null): boolean
    setBackendProperty(propName: string, propValue: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setBackendPropertyFinish(result: Gio.AsyncResult): boolean
    setBackendPropertySync(propName: string, propValue: string, cancellable?: Gio.Cancellable | null): boolean
    setBusName(busName: string): void
    unwrapDbusError(dbusError: GLib.Error): void
    waitForConnected(timeoutSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    waitForConnectedFinish(result: Gio.AsyncResult): boolean
    waitForConnectedSync(timeoutSeconds: number, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of ECal-2.0.ECal.TimezoneCache */
    addTimezone(zone: ICalGLib.Timezone): void
    getTimezone(tzid: string): ICalGLib.Timezone | null
    listTimezones(): ICalGLib.Timezone[]
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of ECal-2.0.ECal.Client */
    connect(sigName: "free-busy-data", callback: ((freeBusyEcalcomps: Component[]) => void)): number
    on(sigName: "free-busy-data", callback: (freeBusyEcalcomps: Component[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "free-busy-data", callback: (freeBusyEcalcomps: Component[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "free-busy-data", callback: (freeBusyEcalcomps: Component[]) => void): NodeJS.EventEmitter
    emit(sigName: "free-busy-data", freeBusyEcalcomps: Component[]): void
    /* Signals of EDataServer-1.2.EDataServer.Client */
    connect(sigName: "backend-died", callback: (() => void)): number
    on(sigName: "backend-died", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-died", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-died", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: ((object: string) => void)): number
    on(sigName: "backend-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-error", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "backend-property-changed", callback: ((object: string, p0: string) => void)): number
    on(sigName: "backend-property-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-property-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-property-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    connect(sigName: "opened", callback: ((object: GLib.Error) => void)): number
    on(sigName: "opened", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "opened", object: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    connect(sigName: "timezone-added", callback: ((zone: ICalGLib.Timezone) => void)): number
    on(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void): NodeJS.EventEmitter
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    connect(sigName: "notify::default-timezone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-timezone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opened", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static checkTimezonesSync(vcalendar: ICalGLib.Component, icalcomps?: ICalGLib.Component[] | null, cancellable?: Gio.Cancellable | null): boolean
    static connect(source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static connectFinish(result: Gio.AsyncResult): EDataServer.Client | null
    static connectSync(source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null): EDataServer.Client | null
    static errorCreate(code: ClientError, customMsg?: string | null): GLib.Error
    /* Function overloads */
    static errorCreate(code: EDataServer.ClientError, customMsg?: string | null): GLib.Error
    static errorQuark(): GLib.Quark
    static errorToString(code: ClientError): string
    /* Function overloads */
    static errorToString(code: EDataServer.ClientError): string
    static tzlookupCb(tzid: string, ecalclient: Client, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
    static tzlookupIcalcompCb(tzid: string, lookupData: ClientTzlookupICalCompData, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ClientView_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ECal-2.0.ECal.ClientView */
    client?: Client
    connection?: Gio.DBusConnection
    objectPath?: string
}
class ClientView {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ECal-2.0.ECal.ClientView */
    getConnection(): Gio.DBusConnection
    getObjectPath(): string
    isRunning(): boolean
    refClient(): Client
    setFieldsOfInterest(fieldsOfInterest?: string[] | null): void
    setFlags(flags: ClientViewFlags): void
    start(): void
    stop(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of ECal-2.0.ECal.ClientView */
    connect(sigName: "complete", callback: ((object: GLib.Error) => void)): number
    on(sigName: "complete", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "complete", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "complete", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "complete", object: GLib.Error): void
    connect(sigName: "objects-added", callback: ((objects: ICalGLib.Component[]) => void)): number
    on(sigName: "objects-added", callback: (objects: ICalGLib.Component[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-added", callback: (objects: ICalGLib.Component[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-added", callback: (objects: ICalGLib.Component[]) => void): NodeJS.EventEmitter
    emit(sigName: "objects-added", objects: ICalGLib.Component[]): void
    connect(sigName: "objects-modified", callback: ((objects: ICalGLib.Component[]) => void)): number
    on(sigName: "objects-modified", callback: (objects: ICalGLib.Component[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-modified", callback: (objects: ICalGLib.Component[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-modified", callback: (objects: ICalGLib.Component[]) => void): NodeJS.EventEmitter
    emit(sigName: "objects-modified", objects: ICalGLib.Component[]): void
    connect(sigName: "objects-removed", callback: ((uids: ComponentId[]) => void)): number
    on(sigName: "objects-removed", callback: (uids: ComponentId[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-removed", callback: (uids: ComponentId[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-removed", callback: (uids: ComponentId[]) => void): NodeJS.EventEmitter
    emit(sigName: "objects-removed", uids: ComponentId[]): void
    connect(sigName: "progress", callback: ((object: number, p0: string) => void)): number
    on(sigName: "progress", callback: (object: number, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (object: number, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (object: number, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "progress", object: number, p0: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientView_ConstructProps)
    _init (config?: ClientView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Component_ConstructProps extends GObject.Object_ConstructProps {
}
class Component {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ECal-2.0.ECal.Component */
    abortSequence(): void
    addAlarm(alarm: ComponentAlarm): void
    clone(): Component
    commitSequence(): void
    getAlarm(auid: string): ComponentAlarm | null
    getAlarmUids(): string[] | null
    getAllAlarms(): ComponentAlarm[] | null
    getAsString(): string
    getAttachments(): ICalGLib.Attach[] | null
    getAttendees(): ComponentAttendee[] | null
    getCategories(): string | null
    getCategoriesList(): string[] | null
    getClassification(): ComponentClassification
    getComments(): ComponentText[] | null
    getCompleted(): ICalGLib.Time
    getContacts(): ComponentText[]
    getCreated(): ICalGLib.Time
    getDescriptions(): ComponentText[] | null
    getDtend(): ComponentDateTime | null
    getDtstamp(): ICalGLib.Time | null
    getDtstart(): ComponentDateTime | null
    getDue(): ComponentDateTime | null
    getExdates(): ComponentDateTime[] | null
    getExruleProperties(): ICalGLib.Property[] | null
    getExrules(): ICalGLib.Recurrence[] | null
    getGeo(): ICalGLib.Geo | null
    getIcalcomponent(): ICalGLib.Component | null
    getId(): ComponentId
    getLastModified(): ICalGLib.Time
    getLocation(): string | null
    getOrganizer(): ComponentOrganizer | null
    getPercentComplete(): number
    getPriority(): number
    getRdates(): ComponentPeriod[] | null
    getRecurid(): ComponentRange | null
    getRecuridAsString(): string
    getRruleProperties(): ICalGLib.Property[] | null
    getRrules(): ICalGLib.Recurrence[] | null
    getSequence(): number
    getStatus(): ICalGLib.PropertyStatus
    getSummary(): ComponentText | null
    getTransparency(): ComponentTransparency
    getUid(): string
    getUrl(): string | null
    getVtype(): ComponentVType
    hasAlarms(): boolean
    hasAttachments(): boolean
    hasAttendees(): boolean
    hasExceptions(): boolean
    hasExdates(): boolean
    hasExrules(): boolean
    hasOrganizer(): boolean
    hasRdates(): boolean
    hasRecurrences(): boolean
    hasRrules(): boolean
    hasSimpleRecurrence(): boolean
    isInstance(): boolean
    removeAlarm(auid: string): void
    removeAllAlarms(): void
    setAttachments(attachments?: ICalGLib.Attach[] | null): void
    setAttendees(attendeeList?: ComponentAttendee[] | null): void
    setCategories(categories: string): void
    setCategoriesList(categList: string[]): void
    setClassification(classif: ComponentClassification): void
    setComments(textList: ComponentText[]): void
    setCompleted(tt?: ICalGLib.Time | null): void
    setContacts(textList: ComponentText[]): void
    setCreated(tt?: ICalGLib.Time | null): void
    setDescriptions(textList: ComponentText[]): void
    setDtend(dt?: ComponentDateTime | null): void
    setDtstamp(tt: ICalGLib.Time): void
    setDtstart(dt?: ComponentDateTime | null): void
    setDue(dt?: ComponentDateTime | null): void
    setExdates(exdateList?: ComponentDateTime[] | null): void
    setExrules(recurList?: ICalGLib.Recurrence[] | null): void
    setGeo(geo?: ICalGLib.Geo | null): void
    setIcalcomponent(icalcomp?: ICalGLib.Component | null): boolean
    setLastModified(tt?: ICalGLib.Time | null): void
    setLocation(location?: string | null): void
    setNewVtype(type: ComponentVType): void
    setOrganizer(organizer?: ComponentOrganizer | null): void
    setPercentComplete(percent: number): void
    setPriority(priority: number): void
    setRdates(rdateList?: ComponentPeriod[] | null): void
    setRecurid(recurId?: ComponentRange | null): void
    setRrules(recurList?: ICalGLib.Recurrence[] | null): void
    setSequence(sequence: number): void
    setStatus(status: ICalGLib.PropertyStatus): void
    setSummary(summary: ComponentText): void
    setTransparency(transp: ComponentTransparency): void
    setUid(uid: string): void
    setUrl(url?: string | null): void
    stripErrors(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Component_ConstructProps)
    _init (config?: Component_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Component
    static newFromIcalcomponent(icalcomp: ICalGLib.Component): Component
    static newFromString(calobj: string): Component
    static newVtype(vtype: ComponentVType): Component
    static $gtype: GObject.Type
}
interface ReminderWatcher_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ECal-2.0.ECal.ReminderWatcher */
    defaultZone?: ICalGLib.Timezone
    registry?: EDataServer.SourceRegistry
    timersEnabled?: boolean
}
class ReminderWatcher {
    /* Properties of ECal-2.0.ECal.ReminderWatcher */
    defaultZone: ICalGLib.Timezone
    timersEnabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ECal-2.0.ECal.ReminderWatcher */
    describeData(rd: ReminderData, flags: number): string
    dismiss(rd: ReminderData, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dismissAll(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dismissAllFinish(result: Gio.AsyncResult): boolean
    dismissAllSync(cancellable?: Gio.Cancellable | null): boolean
    dismissFinish(result: Gio.AsyncResult): boolean
    dismissSync(rd: ReminderData, cancellable?: Gio.Cancellable | null): boolean
    dupDefaultZone(): ICalGLib.Timezone
    dupPast(): ReminderData[] | null
    dupSnoozed(): ReminderData[] | null
    getRegistry(): EDataServer.SourceRegistry
    getTimersEnabled(): boolean
    refOpenedClient(sourceUid: string): Client | null
    setDefaultZone(zone?: ICalGLib.Timezone | null): void
    setTimersEnabled(enabled: boolean): void
    snooze(rd: ReminderData, until: number): void
    timerElapsed(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of ECal-2.0.ECal.ReminderWatcher */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "format-time", callback: ((rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number) => void)): number
    on(sigName: "format-time", callback: (rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "format-time", callback: (rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "format-time", callback: (rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number) => void): NodeJS.EventEmitter
    emit(sigName: "format-time", rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number): void
    connect(sigName: "triggered", callback: ((reminders: ReminderData[], snoozed: boolean) => void)): number
    on(sigName: "triggered", callback: (reminders: ReminderData[], snoozed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "triggered", callback: (reminders: ReminderData[], snoozed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "triggered", callback: (reminders: ReminderData[], snoozed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "triggered", reminders: ReminderData[], snoozed: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-zone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-zone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timers-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timers-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timers-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timers-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timers-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ReminderWatcher_ConstructProps)
    _init (config?: ReminderWatcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(registry: EDataServer.SourceRegistry): ReminderWatcher
    static $gtype: GObject.Type
}
abstract class ClientClass {
    static name: string
}
class ClientPrivate {
    static name: string
}
class ClientTzlookupICalCompData {
    /* Methods of ECal-2.0.ECal.ClientTzlookupICalCompData */
    copy(): ClientTzlookupICalCompData | null
    free(): void
    getIcalcomponent(): ICalGLib.Component
    static name: string
    static new(icomp: ICalGLib.Component): ClientTzlookupICalCompData
    constructor(icomp: ICalGLib.Component)
    /* Static methods and pseudo-constructors */
    static new(icomp: ICalGLib.Component): ClientTzlookupICalCompData
}
abstract class ClientViewClass {
    /* Fields of ECal-2.0.ECal.ClientViewClass */
    readonly progress: (clientView: ClientView, percent: number, message: string) => void
    readonly complete: (clientView: ClientView, error: GLib.Error) => void
    static name: string
}
class ClientViewPrivate {
    static name: string
}
class ComponentAlarm {
    /* Methods of ECal-2.0.ECal.ComponentAlarm */
    copy(): ComponentAlarm
    fillComponent(component: ICalGLib.Component): void
    getAcknowledged(): ICalGLib.Time | null
    getAction(): ComponentAlarmAction
    getAsComponent(): ICalGLib.Component
    getAttachments(): ICalGLib.Attach[] | null
    getAttendees(): ComponentAttendee[] | null
    getDescription(): ComponentText | null
    getPropertyBag(): ComponentPropertyBag
    getRepeat(): ComponentAlarmRepeat | null
    getSummary(): ComponentText | null
    getTrigger(): ComponentAlarmTrigger | null
    getUid(): string | null
    hasAttachments(): boolean
    hasAttendees(): boolean
    setAcknowledged(when?: ICalGLib.Time | null): void
    setAction(action: ComponentAlarmAction): void
    setAttachments(attachments?: ICalGLib.Attach[] | null): void
    setAttendees(attendees?: ComponentAttendee[] | null): void
    setDescription(description?: ComponentText | null): void
    setFromComponent(component: ICalGLib.Component): void
    setRepeat(repeat?: ComponentAlarmRepeat | null): void
    setSummary(summary?: ComponentText | null): void
    setTrigger(trigger?: ComponentAlarmTrigger | null): void
    setUid(uid?: string | null): void
    takeAcknowledged(when?: ICalGLib.Time | null): void
    static name: string
    static new(): ComponentAlarm
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentAlarm
    static newFromComponent(component: ICalGLib.Component): ComponentAlarm
}
class ComponentAlarmInstance {
    /* Methods of ECal-2.0.ECal.ComponentAlarmInstance */
    copy(): ComponentAlarmInstance
    getOccurEnd(): number
    getOccurStart(): number
    getRid(): string | null
    getTime(): number
    getUid(): string
    setOccurEnd(occurEnd: number): void
    setOccurStart(occurStart: number): void
    setRid(rid?: string | null): void
    setTime(instanceTime: number): void
    setUid(uid: string): void
    static name: string
    static new(uid: string, instanceTime: number, occurStart: number, occurEnd: number): ComponentAlarmInstance
    constructor(uid: string, instanceTime: number, occurStart: number, occurEnd: number)
    /* Static methods and pseudo-constructors */
    static new(uid: string, instanceTime: number, occurStart: number, occurEnd: number): ComponentAlarmInstance
}
class ComponentAlarmRepeat {
    /* Methods of ECal-2.0.ECal.ComponentAlarmRepeat */
    copy(): ComponentAlarmRepeat
    getInterval(): ICalGLib.Duration
    getIntervalSeconds(): number
    getRepetitions(): number
    setInterval(interval: ICalGLib.Duration): void
    setIntervalSeconds(intervalSeconds: number): void
    setRepetitions(repetitions: number): void
    static name: string
    static new(repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat
    constructor(repetitions: number, interval: ICalGLib.Duration)
    /* Static methods and pseudo-constructors */
    static new(repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat
    static newSeconds(repetitions: number, intervalSeconds: number): ComponentAlarmRepeat
}
class ComponentAlarmTrigger {
    /* Methods of ECal-2.0.ECal.ComponentAlarmTrigger */
    copy(): ComponentAlarmTrigger
    fillProperty(property: ICalGLib.Property): /* property */ ICalGLib.Property
    getAbsoluteTime(): ICalGLib.Time | null
    getAsProperty(): ICalGLib.Property
    getDuration(): ICalGLib.Duration | null
    getKind(): ComponentAlarmTriggerKind
    getParameterBag(): ComponentParameterBag
    setAbsolute(absoluteTime: ICalGLib.Time): void
    setAbsoluteTime(absoluteTime: ICalGLib.Time): void
    setDuration(duration: ICalGLib.Duration): void
    setFromProperty(property: ICalGLib.Property): void
    setKind(kind: ComponentAlarmTriggerKind): void
    setRelative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newAbsolute(absoluteTime: ICalGLib.Time): ComponentAlarmTrigger
    static newFromProperty(property: ICalGLib.Property): ComponentAlarmTrigger
    static newRelative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): ComponentAlarmTrigger
}
class ComponentAlarms {
    /* Methods of ECal-2.0.ECal.ComponentAlarms */
    addInstance(instance: ComponentAlarmInstance): void
    copy(): ComponentAlarms
    getComponent(): Component
    getInstances(): ComponentAlarmInstance[] | null
    removeInstance(instance: ComponentAlarmInstance): boolean
    setInstances(instances?: ComponentAlarmInstance[] | null): void
    takeInstance(instance: ComponentAlarmInstance): void
    takeInstances(instances?: ComponentAlarmInstance[] | null): void
    static name: string
    static new(comp: Component): ComponentAlarms
    constructor(comp: Component)
    /* Static methods and pseudo-constructors */
    static new(comp: Component): ComponentAlarms
}
class ComponentAttendee {
    /* Methods of ECal-2.0.ECal.ComponentAttendee */
    copy(): ComponentAttendee
    fillProperty(property: ICalGLib.Property): /* property */ ICalGLib.Property
    getAsProperty(): ICalGLib.Property
    getCn(): string | null
    getCutype(): ICalGLib.ParameterCutype
    getDelegatedfrom(): string | null
    getDelegatedto(): string | null
    getLanguage(): string | null
    getMember(): string | null
    getParameterBag(): ComponentParameterBag
    getPartstat(): ICalGLib.ParameterPartstat
    getRole(): ICalGLib.ParameterRole
    getRsvp(): boolean
    getSentby(): string | null
    getValue(): string | null
    setCn(cn?: string | null): void
    setCutype(cutype: ICalGLib.ParameterCutype): void
    setDelegatedfrom(delegatedfrom?: string | null): void
    setDelegatedto(delegatedto?: string | null): void
    setFromProperty(property: ICalGLib.Property): void
    setLanguage(language?: string | null): void
    setMember(member?: string | null): void
    setPartstat(partstat: ICalGLib.ParameterPartstat): void
    setRole(role: ICalGLib.ParameterRole): void
    setRsvp(rsvp: boolean): void
    setSentby(sentby?: string | null): void
    setValue(value?: string | null): void
    static name: string
    static new(): ComponentAttendee
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentAttendee
    static newFromProperty(property: ICalGLib.Property): ComponentAttendee
    static newFull(value: string | null, member: string | null, cutype: ICalGLib.ParameterCutype, role: ICalGLib.ParameterRole, partstat: ICalGLib.ParameterPartstat, rsvp: boolean, delegatedfrom?: string | null, delegatedto?: string | null, sentby?: string | null, cn?: string | null, language?: string | null): ComponentAttendee
}
abstract class ComponentClass {
    static name: string
}
class ComponentDateTime {
    /* Methods of ECal-2.0.ECal.ComponentDateTime */
    copy(): ComponentDateTime
    getTzid(): string | null
    getValue(): ICalGLib.Time
    set(value: ICalGLib.Time, tzid?: string | null): void
    setTzid(tzid?: string | null): void
    setValue(value: ICalGLib.Time): void
    takeTzid(tzid?: string | null): void
    takeValue(value: ICalGLib.Time): void
    static name: string
    static new(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
    constructor(value: ICalGLib.Time, tzid?: string | null)
    /* Static methods and pseudo-constructors */
    static new(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
    static newTake(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
}
class ComponentId {
    /* Methods of ECal-2.0.ECal.ComponentId */
    copy(): ComponentId
    equal(id2: ComponentId): boolean
    getRid(): string | null
    getUid(): string
    hash(): number
    setRid(rid?: string | null): void
    setUid(uid: string): void
    static name: string
    static new(uid: string, rid?: string | null): ComponentId
    constructor(uid: string, rid?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, rid?: string | null): ComponentId
    static newTake(uid: string, rid?: string | null): ComponentId
}
class ComponentOrganizer {
    /* Methods of ECal-2.0.ECal.ComponentOrganizer */
    copy(): ComponentOrganizer
    fillProperty(property: ICalGLib.Property): /* property */ ICalGLib.Property
    getAsProperty(): ICalGLib.Property
    getCn(): string | null
    getLanguage(): string | null
    getParameterBag(): ComponentParameterBag
    getSentby(): string | null
    getValue(): string | null
    setCn(cn?: string | null): void
    setFromProperty(property: ICalGLib.Property): void
    setLanguage(language?: string | null): void
    setSentby(sentby?: string | null): void
    setValue(value?: string | null): void
    static name: string
    static new(): ComponentOrganizer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentOrganizer
    static newFromProperty(property: ICalGLib.Property): ComponentOrganizer
    static newFull(value?: string | null, sentby?: string | null, cn?: string | null, language?: string | null): ComponentOrganizer
}
class ComponentParameterBag {
    /* Methods of ECal-2.0.ECal.ComponentParameterBag */
    add(param: ICalGLib.Parameter): void
    assign(srcBag: ComponentParameterBag): void
    clear(): void
    copy(): ComponentParameterBag
    fillProperty(property: ICalGLib.Property): void
    get(index: number): ICalGLib.Parameter | null
    getCount(): number
    getFirstByKind(kind: ICalGLib.ParameterKind): number
    remove(index: number): void
    removeByKind(kind: ICalGLib.ParameterKind, all: boolean): number
    setFromProperty(property: ICalGLib.Property): void
    take(param: ICalGLib.Parameter): void
    static name: string
    static new(): ComponentParameterBag
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentParameterBag
    static newFromProperty(property: ICalGLib.Property): ComponentParameterBag
}
class ComponentPeriod {
    /* Methods of ECal-2.0.ECal.ComponentPeriod */
    copy(): ComponentPeriod
    getDuration(): ICalGLib.Duration
    getEnd(): ICalGLib.Time | null
    getKind(): ComponentPeriodKind
    getStart(): ICalGLib.Time
    setDatetimeFull(start: ICalGLib.Time, end?: ICalGLib.Time | null): void
    setDuration(duration: ICalGLib.Duration): void
    setDurationFull(start: ICalGLib.Time, duration: ICalGLib.Duration): void
    setEnd(end?: ICalGLib.Time | null): void
    setStart(start: ICalGLib.Time): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newDatetime(start: ICalGLib.Time, end?: ICalGLib.Time | null): ComponentPeriod
    static newDuration(start: ICalGLib.Time, duration: ICalGLib.Duration): ComponentPeriod
}
class ComponentPrivate {
    static name: string
}
class ComponentPropertyBag {
    /* Methods of ECal-2.0.ECal.ComponentPropertyBag */
    add(prop: ICalGLib.Property): void
    assign(srcBag: ComponentPropertyBag): void
    clear(): void
    copy(): ComponentPropertyBag
    fillComponent(component: ICalGLib.Component): void
    get(index: number): ICalGLib.Property | null
    getCount(): number
    getFirstByKind(kind: ICalGLib.PropertyKind): number
    remove(index: number): void
    removeByKind(kind: ICalGLib.PropertyKind, all: boolean): number
    setFromComponent(component: ICalGLib.Component): void
    take(prop: ICalGLib.Property): void
    static name: string
    static new(): ComponentPropertyBag
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentPropertyBag
    static newFromComponent(component: ICalGLib.Component): ComponentPropertyBag
}
class ComponentRange {
    /* Methods of ECal-2.0.ECal.ComponentRange */
    copy(): ComponentRange
    getDatetime(): ComponentDateTime
    getKind(): ComponentRangeKind
    setDatetime(datetime: ComponentDateTime): void
    setKind(kind: ComponentRangeKind): void
    static name: string
    static new(kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange
    constructor(kind: ComponentRangeKind, datetime: ComponentDateTime)
    /* Static methods and pseudo-constructors */
    static new(kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange
}
class ComponentText {
    /* Methods of ECal-2.0.ECal.ComponentText */
    copy(): ComponentText
    getAltrep(): string
    getValue(): string
    setAltrep(altrep?: string | null): void
    setValue(value?: string | null): void
    static name: string
    static new(value?: string | null, altrep?: string | null): ComponentText
    constructor(value?: string | null, altrep?: string | null)
    /* Static methods and pseudo-constructors */
    static new(value?: string | null, altrep?: string | null): ComponentText
}
class ReminderData {
    /* Methods of ECal-2.0.ECal.ReminderData */
    copy(): ReminderData
    free(): void
    getComponent(): Component
    getInstance(): ComponentAlarmInstance
    getSourceUid(): string
    setComponent(component: Component): void
    setInstance(instance: ComponentAlarmInstance): void
    setSourceUid(sourceUid: string): void
    static name: string
    static new(sourceUid: string, component: Component, instance: ComponentAlarmInstance): ReminderData
    constructor(sourceUid: string, component: Component, instance: ComponentAlarmInstance)
    /* Static methods and pseudo-constructors */
    static new(sourceUid: string, component: Component, instance: ComponentAlarmInstance): ReminderData
}
abstract class ReminderWatcherClass {
    /* Fields of ECal-2.0.ECal.ReminderWatcherClass */
    readonly parentClass: GObject.ObjectClass
    readonly scheduleTimer: (watcher: ReminderWatcher, atTime: number) => void
    readonly formatTime: (watcher: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: string, bufferSize: number) => void
    readonly changed: (watcher: ReminderWatcher) => void
    readonly calClientConnect: (watcher: ReminderWatcher, source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly reserved: object[]
    static name: string
}
class ReminderWatcherPrivate {
    static name: string
}
abstract class TimezoneCacheInterface {
    /* Fields of ECal-2.0.ECal.TimezoneCacheInterface */
    readonly tzcacheAddTimezone: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    readonly timezoneAdded: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    readonly reservedSignals: object[]
    static name: string
}
}
export default ECal;