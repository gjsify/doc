/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Zeitgeist-2.0
 */

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
function dataSourcesFromVariant(sourcesVariant: GLib.Variant): DataSource[]
function dataSourcesToVariant(sources: GLib.HashTable): GLib.Variant
function eventsFromVariant(vevents: GLib.Variant): Event[]
function eventsToVariant(events: Event[]): GLib.Variant
function eventsToVariantWithLimit(events: Event[], limit: number): GLib.Variant
function timestampFromTimeval(timeval: GLib.TimeVal): number
function timestampToTimeval(timestamp: number): /* result */ GLib.TimeVal
function timestampFromNow(): number
function timestampFromIso8601(datetime: string): number
function timestampToIso8601(timestamp: number): string
function timestampFromDate(date: GLib.Date): number
function timestampFromDmy(day: GLib.DateDay, month: GLib.DateMonth, year: GLib.DateYear): number
function timestampToDate(timestamp: number): /* result */ GLib.Date
function timestampNextMidnight(timestamp: number): number
function timestampPrevMidnight(timestamp: number): number
function symbolGetDisplayName(symbolUri: string): string
function symbolGetDescription(symbolUri: string): string
function symbolGetAllParents(symbolUri: string): string[]
function symbolGetAllChildren(symbolUri: string): string[]
function symbolGetChildren(symbolUri: string): string[]
function symbolGetParents(symbolUri: string): string[]
function symbolIsA(symbolUri?: string | null, parentUri?: string | null): boolean
function utilsGetDataPath(): string
function utilsGetDefaultDataPath(): string
function utilsGetDatabaseFilePath(): string
function utilsSetDatabaseFilePath(path: string): void
function utilsGetDatabaseFileBackupPath(): string
function utilsGetDatabaseFileRetireName(): string
function utilsGetLocalExtensionsPath(): string
function utilsUsingInMemoryDatabase(): boolean
function utilsBackupDatabase(): void
function utilsParseNegation(val: string): [ /* returnType */ boolean, /* val */ string ]
function utilsParseNoexpand(val: string): [ /* returnType */ boolean, /* val */ string ]
function utilsParseWildcard(val: string): [ /* returnType */ boolean, /* val */ string ]
function utilsIsEmptyString(s?: string | null): boolean
function utilsLogMayReadDirectly(): boolean
function resultTypeIsSortOrderAsc(resultType: ResultType): boolean
function registerMimetype(mimetype: string, interpretationUri: string): void
function registerMimetypeRegex(mimetypeRegex: string, interpretationUri: string): void
function interpretationForMimetype(mimetype?: string | null): string | null
function registerUriScheme(uriScheme: string, manifestationType: string): void
function manifestationForUri(uri: string): string | null
interface RemoteRegistry_ConstructProps extends GObject.Object_ConstructProps {
}
class RemoteRegistry {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteRegistry */
    getDataSources(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataSourcesFinish(res: Gio.AsyncResult): GLib.Variant
    registerDataSource(uniqueId: string, name: string, description: string, eventTemplates: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    registerDataSourceFinish(res: Gio.AsyncResult): boolean
    setDataSourceEnabled(uniqueId: string, enabled: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setDataSourceEnabledFinish(res: Gio.AsyncResult): void
    getDataSourceFromId(uniqueId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataSourceFromIdFinish(res: Gio.AsyncResult): GLib.Variant
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
    /* Signals of Zeitgeist-2.0.Zeitgeist.RemoteRegistry */
    connect(sigName: "data-source-disconnected", callback: ((dataSource: GLib.Variant) => void)): number
    on(sigName: "data-source-disconnected", callback: (dataSource: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-source-disconnected", callback: (dataSource: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-source-disconnected", callback: (dataSource: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "data-source-disconnected", dataSource: GLib.Variant): void
    connect(sigName: "data-source-enabled", callback: ((uniqueId: string, enabled: boolean) => void)): number
    on(sigName: "data-source-enabled", callback: (uniqueId: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-source-enabled", callback: (uniqueId: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-source-enabled", callback: (uniqueId: string, enabled: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "data-source-enabled", uniqueId: string, enabled: boolean): void
    connect(sigName: "data-source-registered", callback: ((dataSource: GLib.Variant) => void)): number
    on(sigName: "data-source-registered", callback: (dataSource: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-source-registered", callback: (dataSource: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-source-registered", callback: (dataSource: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "data-source-registered", dataSource: GLib.Variant): void
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
    constructor (config?: RemoteRegistry_ConstructProps)
    _init (config?: RemoteRegistry_ConstructProps): void
    static $gtype: GObject.Type
}
interface RemoteLog_ConstructProps extends GObject.Object_ConstructProps {
}
class RemoteLog {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteLog */
    deleteEvents(eventIds: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEventsFinish(res: Gio.AsyncResult): GLib.Variant
    findEventIds(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    findEventIdsFinish(res: Gio.AsyncResult): number[]
    findEvents(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    findEventsFinish(res: Gio.AsyncResult): GLib.Variant
    findRelatedUris(timeRange: GLib.Variant, eventTemplates: GLib.Variant, resultEventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    findRelatedUrisFinish(res: Gio.AsyncResult): string[]
    getEvents(eventIds: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    getEventsFinish(res: Gio.AsyncResult): GLib.Variant
    insertEvents(events: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEventsFinish(res: Gio.AsyncResult): number[]
    installMonitor(monitorPath: string, timeRange: GLib.Variant, eventTemplates: GLib.Variant, owner?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    installMonitorFinish(res: Gio.AsyncResult): void
    removeMonitor(monitorPath: string, owner?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    removeMonitorFinish(res: Gio.AsyncResult): void
    quit(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    quitFinish(res: Gio.AsyncResult): void
    getExtensions(): string[]
    getVersion(): /* result */ VersionStruct
    getDatapath(): string
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
    constructor (config?: RemoteLog_ConstructProps)
    _init (config?: RemoteLog_ConstructProps): void
    static $gtype: GObject.Type
}
interface RemoteMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
class RemoteMonitor {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor */
    notifyInsert(timeRange: GLib.Variant, events: GLib.Variant, callback?: Gio.AsyncReadyCallback | null): void
    notifyInsertFinish(res: Gio.AsyncResult): void
    notifyDelete(timeRange: GLib.Variant, eventIds: number[], callback?: Gio.AsyncReadyCallback | null): void
    notifyDeleteFinish(res: Gio.AsyncResult): void
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
    constructor (config?: RemoteMonitor_ConstructProps)
    _init (config?: RemoteMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
interface RemoteSimpleIndexer_ConstructProps extends GObject.Object_ConstructProps {
}
class RemoteSimpleIndexer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer */
    search(queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, offset: number, count: number, resultType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* matches */ number ]
    searchWithRelevancies(queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, storageState: number, offset: number, count: number, resultType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchWithRelevanciesFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
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
    constructor (config?: RemoteSimpleIndexer_ConstructProps)
    _init (config?: RemoteSimpleIndexer_ConstructProps): void
    static $gtype: GObject.Type
}
interface NetworkManagerDBus_ConstructProps extends GObject.Object_ConstructProps {
}
class NetworkManagerDBus {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus */
    state(): number
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
    /* Signals of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus */
    connect(sigName: "state-changed", callback: ((state: number) => void)): number
    on(sigName: "state-changed", callback: (state: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: number): void
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
    constructor (config?: NetworkManagerDBus_ConstructProps)
    _init (config?: NetworkManagerDBus_ConstructProps): void
    static $gtype: GObject.Type
}
interface ConnmanManagerDBus_ConstructProps extends GObject.Object_ConstructProps {
}
class ConnmanManagerDBus {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus */
    getState(): string
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
    /* Signals of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus */
    connect(sigName: "state-changed", callback: ((state: string) => void)): number
    on(sigName: "state-changed", callback: (state: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: string) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: string): void
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
    constructor (config?: ConnmanManagerDBus_ConstructProps)
    _init (config?: ConnmanManagerDBus_ConstructProps): void
    static $gtype: GObject.Type
}
interface ResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
class ResultSet {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.ResultSet */
    size(): number
    estimatedMatches(): number
    nextValue(): Event | null
    hasNext(): boolean
    tell(): number
    reset(): void
    iterator(): ResultSet
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
    constructor (config?: ResultSet_ConstructProps)
    _init (config?: ResultSet_ConstructProps): void
    static $gtype: GObject.Type
}
interface DataSourceRegistry_ConstructProps extends QueuedProxyWrapper_ConstructProps {
}
class DataSourceRegistry {
    /* Properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxyCreated: boolean
    isConnected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry */
    getDataSources(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataSourcesFinish(res: Gio.AsyncResult): DataSource[]
    getDataSourceFromId(uniqueId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataSourceFromIdFinish(res: Gio.AsyncResult): DataSource
    registerDataSource(dataSource: DataSource, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    registerDataSourceFinish(res: Gio.AsyncResult): boolean
    setDataSourceEnabled(uniqueId: string, enabled: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setDataSourceEnabledFinish(res: Gio.AsyncResult): void
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxyAcquired(proxy: GObject.Object): void
    proxyUnavailable(err: Gio.IOErrorEnum): void
    processQueuedMethods(): void
    nameOwnerChanged(pspec: GObject.ParamSpec): void
    onConnectionEstablished(): void
    onConnectionLost(): void
    waitForProxy(callback?: Gio.AsyncReadyCallback | null): void
    waitForProxyFinish(res: Gio.AsyncResult): void
    getProxyCreated(): boolean
    getIsConnected(): boolean
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
    /* Signals of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry */
    connect(sigName: "source-disconnected", callback: ((dataSource: DataSource) => void)): number
    on(sigName: "source-disconnected", callback: (dataSource: DataSource) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-disconnected", callback: (dataSource: DataSource) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-disconnected", callback: (dataSource: DataSource) => void): NodeJS.EventEmitter
    emit(sigName: "source-disconnected", dataSource: DataSource): void
    connect(sigName: "source-enabled", callback: ((uniqueId: string, enabled: boolean) => void)): number
    on(sigName: "source-enabled", callback: (uniqueId: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-enabled", callback: (uniqueId: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-enabled", callback: (uniqueId: string, enabled: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "source-enabled", uniqueId: string, enabled: boolean): void
    connect(sigName: "source-registered", callback: ((dataSource: DataSource) => void)): number
    on(sigName: "source-registered", callback: (dataSource: DataSource) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-registered", callback: (dataSource: DataSource) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-registered", callback: (dataSource: DataSource) => void): NodeJS.EventEmitter
    emit(sigName: "source-registered", dataSource: DataSource): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-created", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-connected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    proxyCreated: boolean
    isConnected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Index */
    search(query: string, timeRange: TimeRange, eventTemplates: Event[], offset: number, numEvents: number, resultType: ResultType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): ResultSet
    searchWithRelevancies(query: string, timeRange: TimeRange, eventTemplates: Event[], storageState: StorageState, offset: number, numEvents: number, resultType: ResultType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchWithRelevanciesFinish(res: Gio.AsyncResult): [ /* returnType */ ResultSet, /* relevancies */ number[] ]
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxyAcquired(proxy: GObject.Object): void
    proxyUnavailable(err: Gio.IOErrorEnum): void
    processQueuedMethods(): void
    nameOwnerChanged(pspec: GObject.ParamSpec): void
    onConnectionEstablished(): void
    onConnectionLost(): void
    waitForProxy(callback?: Gio.AsyncReadyCallback | null): void
    waitForProxyFinish(res: Gio.AsyncResult): void
    getProxyCreated(): boolean
    getIsConnected(): boolean
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
    connect(sigName: "notify::proxy-created", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-connected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    proxyCreated: boolean
    isConnected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Log */
    insertEvent(event: Event, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEventFinish(res: Gio.AsyncResult): number[]
    insertEvents(events: Event[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEventsFinish(res: Gio.AsyncResult): number[]
    insertEventNoReply(event: Event): void
    insertEventsNoReply(events: Event[]): void
    findEvents(timeRange: TimeRange, eventTemplates: Event[], storageState: StorageState, numEvents: number, resultType: ResultType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findEventsFinish(res: Gio.AsyncResult): ResultSet
    findEventIds(timeRange: TimeRange, eventTemplates: Event[], storageState: StorageState, numEvents: number, resultType: ResultType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findEventIdsFinish(res: Gio.AsyncResult): number[]
    getEvents(eventIds: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getEventsFinish(res: Gio.AsyncResult): ResultSet
    findRelatedUris(timeRange: TimeRange, eventTemplates: Event[], resultEventTemplates: Event[], storageState: StorageState, numEvents: number, resultType: RelevantResultType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findRelatedUrisFinish(res: Gio.AsyncResult): string[]
    deleteEvents(eventIds: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEventsFinish(res: Gio.AsyncResult): TimeRange
    quit(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    quitFinish(res: Gio.AsyncResult): void
    installMonitor(monitor: Monitor): void
    removeMonitor(monitor: Monitor): void
    getVersion(): [ /* major */ number, /* minor */ number, /* micro */ number ]
    getExtensions(): string[]
    datapath(): string
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxyAcquired(proxy: GObject.Object): void
    proxyUnavailable(err: Gio.IOErrorEnum): void
    processQueuedMethods(): void
    nameOwnerChanged(pspec: GObject.ParamSpec): void
    onConnectionEstablished(): void
    onConnectionLost(): void
    waitForProxy(callback?: Gio.AsyncReadyCallback | null): void
    waitForProxyFinish(res: Gio.AsyncResult): void
    getProxyCreated(): boolean
    getIsConnected(): boolean
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
    connect(sigName: "notify::proxy-created", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-connected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Log_ConstructProps)
    _init (config?: Log_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Log
    static getDefault(): Log
    static $gtype: GObject.Type
}
interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Zeitgeist-2.0.Zeitgeist.Monitor */
    timeRange?: TimeRange
    eventTemplates?: Event[]
}
class Monitor {
    /* Properties of Zeitgeist-2.0.Zeitgeist.Monitor */
    timeRange: TimeRange
    eventTemplates: Event[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Monitor */
    getTemplates(): Event[]
    getPath(): string
    getTimeRange(): TimeRange
    setTimeRange(value: TimeRange): void
    getEventTemplates(): Event[]
    setEventTemplates(value: Event[]): void
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
    /* Methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor */
    notifyInsert(timeRange: GLib.Variant, events: GLib.Variant, callback?: Gio.AsyncReadyCallback | null): void
    notifyInsertFinish(res: Gio.AsyncResult): void
    notifyDelete(timeRange: GLib.Variant, eventIds: number[], callback?: Gio.AsyncReadyCallback | null): void
    notifyDeleteFinish(res: Gio.AsyncResult): void
    /* Signals of Zeitgeist-2.0.Zeitgeist.Monitor */
    connect(sigName: "events-inserted", callback: ((timeRange: TimeRange, events: ResultSet) => void)): number
    on(sigName: "events-inserted", callback: (timeRange: TimeRange, events: ResultSet) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "events-inserted", callback: (timeRange: TimeRange, events: ResultSet) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "events-inserted", callback: (timeRange: TimeRange, events: ResultSet) => void): NodeJS.EventEmitter
    emit(sigName: "events-inserted", timeRange: TimeRange, events: ResultSet): void
    connect(sigName: "events-deleted", callback: ((timeRange: TimeRange, eventIds: number[]) => void)): number
    on(sigName: "events-deleted", callback: (timeRange: TimeRange, eventIds: number[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "events-deleted", callback: (timeRange: TimeRange, eventIds: number[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "events-deleted", callback: (timeRange: TimeRange, eventIds: number[]) => void): NodeJS.EventEmitter
    emit(sigName: "events-deleted", timeRange: TimeRange, eventIds: number[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::time-range", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-range", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-range", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-range", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-range", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::event-templates", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-templates", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Monitor_ConstructProps)
    _init (config?: Monitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(timeRange: TimeRange, eventTemplates: Event[]): Monitor
    static $gtype: GObject.Type
}
interface QueuedProxyWrapper_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxyCreated?: boolean
    isConnected?: boolean
}
class QueuedProxyWrapper {
    /* Properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxyCreated: boolean
    isConnected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper */
    proxyAcquired(proxy: GObject.Object): void
    proxyUnavailable(err: Gio.IOErrorEnum): void
    processQueuedMethods(): void
    nameOwnerChanged(pspec: GObject.ParamSpec): void
    onConnectionEstablished(): void
    onConnectionLost(): void
    waitForProxy(callback?: Gio.AsyncReadyCallback | null): void
    waitForProxyFinish(res: Gio.AsyncResult): void
    getProxyCreated(): boolean
    getIsConnected(): boolean
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
    connect(sigName: "notify::proxy-created", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-connected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: QueuedProxyWrapper_ConstructProps)
    _init (config?: QueuedProxyWrapper_ConstructProps): void
    static $gtype: GObject.Type
}
class QueuedProxyWrapperQueuedMethod {
    /* Methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod */
    getQueuedMethod(): [ /* returnType */ GLib.SourceFunc, /* resultTarget */ object | null ]
    static name: string
    static new(callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod
    constructor(callback: GLib.SourceFunc)
    /* Static methods and pseudo-constructors */
    static new(callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod
}
interface DataSource_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Zeitgeist-2.0.Zeitgeist.DataSource */
    uniqueId?: string
    name?: string
    description?: string
    eventTemplates?: Event[]
    enabled?: boolean
    running?: boolean
    timestamp?: number
}
class DataSource {
    /* Properties of Zeitgeist-2.0.Zeitgeist.DataSource */
    uniqueId: string
    name: string
    description: string
    eventTemplates: Event[]
    enabled: boolean
    running: boolean
    timestamp: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.DataSource */
    toVariant(): GLib.Variant
    getUniqueId(): string
    setUniqueId(value: string): void
    getName(): string
    setName(value: string): void
    getDescription(): string
    setDescription(value: string): void
    getEventTemplates(): Event[] | null
    setEventTemplates(value?: Event[] | null): void
    getEnabled(): boolean
    setEnabled(value: boolean): void
    getRunning(): boolean
    setRunning(value: boolean): void
    getTimestamp(): number
    setTimestamp(value: number): void
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
    connect(sigName: "notify::unique-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unique-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unique-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unique-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::event-templates", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-templates", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataSource_ConstructProps)
    _init (config?: DataSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DataSource
    static full(uniqueId: string, name: string, description: string, templates?: Event[] | null): DataSource
    static fromVariant(variant: GLib.Variant, resetRunning: boolean): DataSource
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
    payload?: any
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
    payload: any
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Event */
    getSubject(index: number): Subject
    numSubjects(): number
    addSubject(subject: Subject): void
    takeSubject(subject: Subject): void
    setActorFromAppInfo(info: Gio.AppInfo): void
    toVariant(): GLib.Variant
    debugPrint(): void
    matchesTemplate(templateEvent: Event): boolean
    getId(): number
    setId(value: number): void
    getTimestamp(): number
    setTimestamp(value: number): void
    getOrigin(): string | null
    setOrigin(value?: string | null): void
    getActor(): string | null
    setActor(value?: string | null): void
    getInterpretation(): string | null
    setInterpretation(value?: string | null): void
    getManifestation(): string | null
    setManifestation(value?: string | null): void
    getSubjects(): Subject[]
    setSubjects(value: Subject[]): void
    getPayload(): any | null
    setPayload(value?: any | null): void
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
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::origin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interpretation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpretation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manifestation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manifestation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subjects", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subjects", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subjects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subjects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subjects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::payload", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::payload", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::payload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::payload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::payload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Event_ConstructProps)
    _init (config?: Event_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromVariant(eventVariant: GLib.Variant): Event
    static new(): Event
    static $gtype: GObject.Type
}
interface Subject_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Zeitgeist-2.0.Zeitgeist.Subject */
    uri?: string
    origin?: string
    text?: string
    storage?: string
    currentUri?: string
    currentOrigin?: string
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
    currentUri: string
    currentOrigin: string
    mimetype: string
    interpretation: string
    manifestation: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.Subject */
    toVariant(): GLib.Variant
    matchesTemplate(templateSubject: Subject): boolean
    getUri(): string | null
    setUri(value?: string | null): void
    getOrigin(): string | null
    setOrigin(value?: string | null): void
    getText(): string | null
    setText(value?: string | null): void
    getStorage(): string | null
    setStorage(value?: string | null): void
    getCurrentUri(): string | null
    setCurrentUri(value?: string | null): void
    getCurrentOrigin(): string | null
    setCurrentOrigin(value?: string | null): void
    getMimetype(): string | null
    setMimetype(value?: string | null): void
    getInterpretation(): string | null
    setInterpretation(value?: string | null): void
    getManifestation(): string | null
    setManifestation(value?: string | null): void
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
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::origin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::storage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-origin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-origin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mimetype", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mimetype", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mimetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mimetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mimetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interpretation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpretation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manifestation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manifestation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Subject_ConstructProps)
    _init (config?: Subject_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static full(uri?: string | null, interpretation?: string | null, manifestation?: string | null, mimetype?: string | null, origin?: string | null, text?: string | null, storage?: string | null): Subject
    static moveEvent(sourceUri?: string | null, sourceOrigin?: string | null, destinationUri?: string | null, destinationOrigin?: string | null, interpretation?: string | null, manifestation?: string | null, mimetype?: string | null, text?: string | null, storage?: string | null): Subject
    static fromVariant(subjectVariant: GLib.Variant): Subject
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zeitgeist-2.0.Zeitgeist.TimeRange */
    toVariant(): GLib.Variant
    intersect(timeRange: TimeRange): TimeRange | null
    getStart(): number
    getEnd(): number
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
    connect(sigName: "notify::start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TimeRange_ConstructProps)
    _init (config?: TimeRange_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(startMsec: number, endMsec: number): TimeRange
    static anytime(): TimeRange
    static toNow(): TimeRange
    static fromNow(): TimeRange
    static fromVariant(variant: GLib.Variant): TimeRange
    static $gtype: GObject.Type
}
interface SimpleResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
class SimpleResultSet {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    /* Methods of Zeitgeist-2.0.Zeitgeist.ResultSet */
    size(): number
    estimatedMatches(): number
    nextValue(): Event | null
    hasNext(): boolean
    tell(): number
    reset(): void
    iterator(): ResultSet
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
    constructor (config?: SimpleResultSet_ConstructProps)
    _init (config?: SimpleResultSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(events: Event[]): SimpleResultSet
    static withNumMatches(events: Event[], matches: number): SimpleResultSet
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
    readonly onConnectionEstablished: (self: QueuedProxyWrapper) => void
    readonly onConnectionLost: (self: QueuedProxyWrapper) => void
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
    readonly getDataSources: (self: RemoteRegistry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly getDataSourcesFinish: (self: RemoteRegistry, res: Gio.AsyncResult) => GLib.Variant
    readonly registerDataSource: (self: RemoteRegistry, uniqueId: string, name: string, description: string, eventTemplates: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly registerDataSourceFinish: (self: RemoteRegistry, res: Gio.AsyncResult) => boolean
    readonly setDataSourceEnabled: (self: RemoteRegistry, uniqueId: string, enabled: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly setDataSourceEnabledFinish: (self: RemoteRegistry, res: Gio.AsyncResult) => void
    readonly getDataSourceFromId: (self: RemoteRegistry, uniqueId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly getDataSourceFromIdFinish: (self: RemoteRegistry, res: Gio.AsyncResult) => GLib.Variant
    static name: string
}
abstract class RemoteLogIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.RemoteLogIface */
    readonly deleteEvents: (self: RemoteLog, eventIds: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly deleteEventsFinish: (self: RemoteLog, res: Gio.AsyncResult) => GLib.Variant
    readonly findEventIds: (self: RemoteLog, timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly findEventIdsFinish: (self: RemoteLog) => [ /* returnType */ number[], /* resultLength1 */ number ]
    readonly findEvents: (self: RemoteLog, timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly findEventsFinish: (self: RemoteLog, res: Gio.AsyncResult) => GLib.Variant
    readonly findRelatedUris: (self: RemoteLog, timeRange: GLib.Variant, eventTemplates: GLib.Variant, resultEventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly findRelatedUrisFinish: (self: RemoteLog) => [ /* returnType */ string[], /* resultLength1 */ number ]
    readonly getEvents: (self: RemoteLog, eventIds: number[], cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly getEventsFinish: (self: RemoteLog, res: Gio.AsyncResult) => GLib.Variant
    readonly insertEvents: (self: RemoteLog, events: GLib.Variant, cancellable?: Gio.Cancellable | null, sender?: string | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly insertEventsFinish: (self: RemoteLog) => [ /* returnType */ number[], /* resultLength1 */ number ]
    readonly installMonitor: (self: RemoteLog, monitorPath: string, timeRange: GLib.Variant, eventTemplates: GLib.Variant, owner?: string | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly installMonitorFinish: (self: RemoteLog, res: Gio.AsyncResult) => void
    readonly removeMonitor: (self: RemoteLog, monitorPath: string, owner?: string | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly removeMonitorFinish: (self: RemoteLog, res: Gio.AsyncResult) => void
    readonly quit: (self: RemoteLog, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly quitFinish: (self: RemoteLog, res: Gio.AsyncResult) => void
    readonly getExtensions: () => [ /* returnType */ string[], /* resultLength1 */ number ]
    readonly getVersion: (self: RemoteLog) => /* result */ VersionStruct
    readonly getDatapath: (self: RemoteLog) => string
    static name: string
}
abstract class RemoteMonitorIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.RemoteMonitorIface */
    readonly notifyInsert: (self: RemoteMonitor, timeRange: GLib.Variant, events: GLib.Variant, callback?: Gio.AsyncReadyCallback | null) => void
    readonly notifyInsertFinish: (self: RemoteMonitor, res: Gio.AsyncResult) => void
    readonly notifyDelete: (self: RemoteMonitor, timeRange: GLib.Variant, eventIds: number[], callback?: Gio.AsyncReadyCallback | null) => void
    readonly notifyDeleteFinish: (self: RemoteMonitor, res: Gio.AsyncResult) => void
    static name: string
}
abstract class RemoteSimpleIndexerIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexerIface */
    readonly search: (self: RemoteSimpleIndexer, queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, offset: number, count: number, resultType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly searchFinish: (self: RemoteSimpleIndexer, res: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* matches */ number ]
    readonly searchWithRelevancies: (self: RemoteSimpleIndexer, queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, storageState: number, offset: number, count: number, resultType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly searchWithRelevanciesFinish: (self: RemoteSimpleIndexer, res: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
    static name: string
}
abstract class NetworkManagerDBusIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBusIface */
    readonly state: (self: NetworkManagerDBus) => number
    static name: string
}
abstract class ConnmanManagerDBusIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBusIface */
    readonly getState: (self: ConnmanManagerDBus) => string
    static name: string
}
abstract class ResultSetIface {
    /* Fields of Zeitgeist-2.0.Zeitgeist.ResultSetIface */
    readonly size: (self: ResultSet) => number
    readonly estimatedMatches: (self: ResultSet) => number
    readonly nextValue: (self: ResultSet) => Event | null
    readonly hasNext: (self: ResultSet) => boolean
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