/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EDataCal-2.0
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
import type ECal from './ECal-2.0';
import type EBackend from './EBackend-1.2';

export namespace EDataCal {

const EDS_CALENDAR_MODULES: string
const EDS_SUBPROCESS_CAL_PATH: string
const INTERVALTREE_DEBUG: number
const LIBICAL_GLIB_UNSTABLE_API: number
function calCacheOfflineChangeFree(change?: object | null): void
function calCacheSearchDataFree(ptr?: object | null): void
function calMetaBackendInfoFree(ptr?: object | null): void
interface CalBackendCustomOpFunc {
    (calBackend: CalBackend, cancellable?: Gio.Cancellable | null): void
}
interface CalBackendForeachViewFunc {
    (backend: CalBackend, view: DataCalView): boolean
}
interface CalCacheSearchFunc {
    (calCache: CalCache, uid: string, rid: string | null, revision: string, object: string, extra: string, customFlags: number, offlineState: EBackend.OfflineState): boolean
}
interface CalBackend_ConstructProps extends EBackend.Backend_ConstructProps {
    /* Constructor properties of EDataCal-2.0.EDataCal.CalBackend */
    cacheDir?: string
    kind?: number
    registry?: EDataServer.SourceRegistry
    writable?: boolean
}
class CalBackend {
    /* Properties of EDataCal-2.0.EDataCal.CalBackend */
    cacheDir: string
    readonly proxyResolver: Gio.ProxyResolver
    writable: boolean
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly userPrompter: EBackend.UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalBackend */
    addTimezone(tzobject: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addTimezoneFinish(result: Gio.AsyncResult): boolean
    addTimezoneSync(tzobject: string, cancellable?: Gio.Cancellable | null): boolean
    addView(view: DataCalView): void
    createCacheFilename(uid: string, filename: string, fileindex: number): string
    createObjects(calobjs: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createObjectsFinish(result: Gio.AsyncResult, outUids: GLib.Queue): boolean
    createObjectsSync(calobjs: string, opflags: ECal.OperationFlags, outUids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    discardAlarm(uid: string, rid: string, alarmUid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    discardAlarmFinish(result: Gio.AsyncResult): boolean
    discardAlarmSync(uid: string, rid: string, alarmUid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    dupCacheDir(): string
    foreachView(): boolean
    foreachViewNotifyProgress(onlyCompletedViews: boolean, percent: number, message?: string | null): void
    getAttachmentUris(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAttachmentUrisFinish(result: Gio.AsyncResult, outAttachmentUris: GLib.Queue): boolean
    getAttachmentUrisSync(uid: string, rid: string, outAttachmentUris: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    getBackendProperty(propName: string): string
    getCacheDir(): string
    getFreeBusy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFreeBusyFinish(result: Gio.AsyncResult, outFreebusy: string[]): boolean
    getFreeBusySync(start: number, end: number, users: string[], outFreebusy: string[], cancellable?: Gio.Cancellable | null): boolean
    getKind(): ICalGLib.ComponentKind
    getObject(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectFinish(result: Gio.AsyncResult): string
    getObjectList(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectListFinish(result: Gio.AsyncResult, outObjects: GLib.Queue): boolean
    getObjectListSync(query: string, outObjects: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    getObjectSync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): string
    getRegistry(): EDataServer.SourceRegistry
    getTimezone(tzid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTimezoneFinish(result: Gio.AsyncResult): string
    getTimezoneSync(tzid: string, cancellable?: Gio.Cancellable | null): string
    getWritable(): boolean
    isOpened(): boolean
    isReadonly(): boolean
    listViews(): DataCalView[]
    modifyObjects(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyObjectsFinish(result: Gio.AsyncResult): boolean
    modifyObjectsSync(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    notifyComponentCreated(component: ECal.Component): void
    notifyComponentModified(oldComponent: ECal.Component, newComponent: ECal.Component): void
    notifyComponentRemoved(id: ECal.ComponentId, oldComponent: ECal.Component, newComponent: ECal.Component): void
    notifyError(message: string): void
    notifyPropertyChanged(propName: string, propValue?: string | null): void
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openSync(cancellable?: Gio.Cancellable | null): boolean
    prepareForCompletion(opid: number, resultQueue: GLib.Queue): Gio.SimpleAsyncResult
    receiveObjects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    receiveObjectsFinish(result: Gio.AsyncResult): boolean
    receiveObjectsSync(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    refDataCal(): DataCal
    refProxyResolver(): Gio.ProxyResolver | null
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    removeObjects(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeObjectsFinish(result: Gio.AsyncResult): boolean
    removeObjectsSync(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    removeView(view: DataCalView): void
    scheduleCustomOperation(useCancellable: Gio.Cancellable | null, func: CalBackendCustomOpFunc): void
    sendObjects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendObjectsFinish(result: Gio.AsyncResult, outUsers: GLib.Queue): string
    sendObjectsSync(calobj: string, opflags: ECal.OperationFlags, outUsers: GLib.Queue, cancellable?: Gio.Cancellable | null): string
    setCacheDir(cacheDir: string): void
    setDataCal(dataCal: DataCal): void
    setWritable(writable: boolean): void
    startView(view: DataCalView): void
    stopView(view: DataCalView): void
    /* Methods of EBackend-1.2.EBackend.Backend */
    credentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    credentialsRequiredFinish(result: Gio.AsyncResult): boolean
    credentialsRequiredSync(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    ensureOnlineStateUpdated(cancellable?: Gio.Cancellable | null): void
    ensureSourceStatusConnected(): void
    getDestinationAddress(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    getOnline(): boolean
    getSource(): EDataServer.Source
    getUserPrompter(): object | null
    isDestinationReachable(cancellable?: Gio.Cancellable | null): boolean
    prepareShutdown(): void
    refConnectable(): Gio.SocketConnectable | null
    refMainContext(): GLib.MainContext
    scheduleAuthenticate(credentials?: EDataServer.NamedParameters | null): void
    scheduleCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, whoCalls?: string | null): void
    setConnectable(connectable: Gio.SocketConnectable): void
    setOnline(online: boolean): void
    trustPrompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trustPromptFinish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    trustPromptSync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
    /* Signals of EDataCal-2.0.EDataCal.CalBackend */
    connect(sigName: "closed", callback: ((sender: string) => void)): number
    on(sigName: "closed", callback: (sender: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: (sender: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: (sender: string) => void): NodeJS.EventEmitter
    emit(sigName: "closed", sender: string): void
    connect(sigName: "shutdown", callback: (() => void)): number
    on(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "shutdown"): void
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
    connect(sigName: "notify::cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::user-prompter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalBackend_ConstructProps)
    _init (config?: CalBackend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static mailAccountGetDefault(registry: EDataServer.SourceRegistry, address: string, name: string): boolean
    static mailAccountIsValid(registry: EDataServer.SourceRegistry, user: string, name: string): boolean
    static userDeclined(registry: EDataServer.SourceRegistry, icalcomp: ICalGLib.Component): boolean
    static $gtype: GObject.Type
}
interface CalBackendFactory_ConstructProps extends EBackend.BackendFactory_ConstructProps {
}
class CalBackendFactory {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.BackendFactory */
    getHashKey(): string
    getModuleFilename(): string
    newBackend(source: EDataServer.Source): EBackend.Backend
    shareSubprocess(): boolean
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    getExtensible(): EDataServer.Extensible
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
    constructor (config?: CalBackendFactory_ConstructProps)
    _init (config?: CalBackendFactory_ConstructProps): void
    static $gtype: GObject.Type
}
interface CalBackendSExp_ConstructProps extends GObject.Object_ConstructProps {
}
class CalBackendSExp {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalBackendSExp */
    evaluateOccurTimes(start: number, end: number): boolean
    lock(): void
    matchComp(comp: ECal.Component, cache: ECal.TimezoneCache): boolean
    matchObject(object: string, cache: ECal.TimezoneCache): boolean
    text(): string
    unlock(): void
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
    constructor (config?: CalBackendSExp_ConstructProps)
    _init (config?: CalBackendSExp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(text: string): CalBackendSExp
    static $gtype: GObject.Type
}
interface CalBackendSync_ConstructProps extends CalBackend_ConstructProps {
}
class CalBackendSync {
    /* Properties of EDataCal-2.0.EDataCal.CalBackend */
    cacheDir: string
    readonly proxyResolver: Gio.ProxyResolver
    writable: boolean
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly userPrompter: EBackend.UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalBackendSync */
    addTimezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void
    createObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], opflags: ECal.OperationFlags): [ /* uids */ string[], /* newComponents */ ECal.Component[] ]
    discardAlarm(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags): void
    getAttachmentUris(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, attachments: string[]): void
    getFreeBusy(cal: DataCal, cancellable: Gio.Cancellable | null, users: string[], start: number, end: number): /* freebusyobjects */ string[]
    getObject(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string): /* calobj */ string
    getObjectList(cal: DataCal, cancellable: Gio.Cancellable | null, sexp: string): /* calobjs */ string[]
    getTimezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string): void
    modifyObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]
    open(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    receiveObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    refresh(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    removeObjects(cal: DataCal, cancellable: Gio.Cancellable | null, ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]
    sendObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags, users: string[]): /* modifiedCalobj */ string
    /* Methods of EDataCal-2.0.EDataCal.CalBackend */
    addTimezone(tzobject: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addTimezoneFinish(result: Gio.AsyncResult): boolean
    addTimezoneSync(tzobject: string, cancellable?: Gio.Cancellable | null): boolean
    addView(view: DataCalView): void
    createCacheFilename(uid: string, filename: string, fileindex: number): string
    createObjects(calobjs: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createObjectsFinish(result: Gio.AsyncResult, outUids: GLib.Queue): boolean
    createObjectsSync(calobjs: string, opflags: ECal.OperationFlags, outUids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    discardAlarm(uid: string, rid: string, alarmUid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    discardAlarmFinish(result: Gio.AsyncResult): boolean
    discardAlarmSync(uid: string, rid: string, alarmUid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    dupCacheDir(): string
    foreachView(): boolean
    foreachViewNotifyProgress(onlyCompletedViews: boolean, percent: number, message?: string | null): void
    getAttachmentUris(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAttachmentUrisFinish(result: Gio.AsyncResult, outAttachmentUris: GLib.Queue): boolean
    getAttachmentUrisSync(uid: string, rid: string, outAttachmentUris: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    getBackendProperty(propName: string): string
    getCacheDir(): string
    getFreeBusy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFreeBusyFinish(result: Gio.AsyncResult, outFreebusy: string[]): boolean
    getFreeBusySync(start: number, end: number, users: string[], outFreebusy: string[], cancellable?: Gio.Cancellable | null): boolean
    getKind(): ICalGLib.ComponentKind
    getObject(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectFinish(result: Gio.AsyncResult): string
    getObjectList(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectListFinish(result: Gio.AsyncResult, outObjects: GLib.Queue): boolean
    getObjectListSync(query: string, outObjects: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    getObjectSync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): string
    getRegistry(): EDataServer.SourceRegistry
    getTimezone(tzid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTimezoneFinish(result: Gio.AsyncResult): string
    getTimezoneSync(tzid: string, cancellable?: Gio.Cancellable | null): string
    getWritable(): boolean
    isOpened(): boolean
    isReadonly(): boolean
    listViews(): DataCalView[]
    modifyObjects(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyObjectsFinish(result: Gio.AsyncResult): boolean
    modifyObjectsSync(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    notifyComponentCreated(component: ECal.Component): void
    notifyComponentModified(oldComponent: ECal.Component, newComponent: ECal.Component): void
    notifyComponentRemoved(id: ECal.ComponentId, oldComponent: ECal.Component, newComponent: ECal.Component): void
    notifyError(message: string): void
    notifyPropertyChanged(propName: string, propValue?: string | null): void
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openSync(cancellable?: Gio.Cancellable | null): boolean
    prepareForCompletion(opid: number, resultQueue: GLib.Queue): Gio.SimpleAsyncResult
    receiveObjects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    receiveObjectsFinish(result: Gio.AsyncResult): boolean
    receiveObjectsSync(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    refDataCal(): DataCal
    refProxyResolver(): Gio.ProxyResolver | null
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    removeObjects(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeObjectsFinish(result: Gio.AsyncResult): boolean
    removeObjectsSync(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    removeView(view: DataCalView): void
    scheduleCustomOperation(useCancellable: Gio.Cancellable | null, func: CalBackendCustomOpFunc): void
    sendObjects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendObjectsFinish(result: Gio.AsyncResult, outUsers: GLib.Queue): string
    sendObjectsSync(calobj: string, opflags: ECal.OperationFlags, outUsers: GLib.Queue, cancellable?: Gio.Cancellable | null): string
    setCacheDir(cacheDir: string): void
    setDataCal(dataCal: DataCal): void
    setWritable(writable: boolean): void
    startView(view: DataCalView): void
    stopView(view: DataCalView): void
    /* Methods of EBackend-1.2.EBackend.Backend */
    credentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    credentialsRequiredFinish(result: Gio.AsyncResult): boolean
    credentialsRequiredSync(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    ensureOnlineStateUpdated(cancellable?: Gio.Cancellable | null): void
    ensureSourceStatusConnected(): void
    getDestinationAddress(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    getOnline(): boolean
    getSource(): EDataServer.Source
    getUserPrompter(): object | null
    isDestinationReachable(cancellable?: Gio.Cancellable | null): boolean
    prepareShutdown(): void
    refConnectable(): Gio.SocketConnectable | null
    refMainContext(): GLib.MainContext
    scheduleAuthenticate(credentials?: EDataServer.NamedParameters | null): void
    scheduleCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, whoCalls?: string | null): void
    setConnectable(connectable: Gio.SocketConnectable): void
    setOnline(online: boolean): void
    trustPrompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trustPromptFinish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    trustPromptSync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
    /* Signals of EDataCal-2.0.EDataCal.CalBackend */
    connect(sigName: "closed", callback: ((sender: string) => void)): number
    on(sigName: "closed", callback: (sender: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: (sender: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: (sender: string) => void): NodeJS.EventEmitter
    emit(sigName: "closed", sender: string): void
    connect(sigName: "shutdown", callback: (() => void)): number
    on(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "shutdown"): void
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
    connect(sigName: "notify::cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::user-prompter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalBackendSync_ConstructProps)
    _init (config?: CalBackendSync_ConstructProps): void
    static $gtype: GObject.Type
}
interface CalCache_ConstructProps extends EBackend.Cache_ConstructProps {
}
class CalCache {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalCache */
    contains(uid: string, rid: string | null, deletedFlag: EBackend.CacheDeletedFlag): boolean
    deleteAttachments(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
    dupComponentRevision(icomp: ICalGLib.Component): string
    dupTimezoneAsString(tzid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outZoneString */ string ]
    getComponent(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponent */ ECal.Component ]
    getComponentAsString(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstring */ string ]
    getComponentCustomFlags(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCustomFlags */ number ]
    getComponentExtra(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExtra */ string ]
    getComponentsByUid(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    getComponentsByUidAsString(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
    getComponentsInRange(rangeStart: number, rangeEnd: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    getComponentsInRangeAsStrings(rangeStart: number, rangeEnd: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
    getIdsWithExtra(extra: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIds */ ECal.ComponentId[] ]
    getOfflineChanges(cancellable?: Gio.Cancellable | null): CalCacheOfflineChange[]
    getOfflineState(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): EBackend.OfflineState
    getTimezone(tzid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outZone */ ICalGLib.Timezone ]
    listTimezones(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outTimezones */ ICalGLib.Timezone[] ]
    putComponent(component: ECal.Component, extra: string | null, customFlags: number, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    putComponents(components: ECal.Component[], extras: string[] | null, customFlags: number[] | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    putTimezone(zone: ICalGLib.Timezone, incRefCounts: number, cancellable?: Gio.Cancellable | null): boolean
    removeComponent(uid: string, rid: string | null, customFlags: number, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    removeComponents(ids: ECal.ComponentId[], customFlags: number[] | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    removeTimezone(tzid: string, decRefCounts: number, cancellable?: Gio.Cancellable | null): boolean
    removeTimezones(cancellable?: Gio.Cancellable | null): boolean
    search(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ CalCacheSearchData[] ]
    searchComponents(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    searchIds(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIds */ ECal.ComponentId[] ]
    searchWithCallback(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
    setComponentCustomFlags(uid: string, rid: string | null, customFlags: number, cancellable?: Gio.Cancellable | null): boolean
    setComponentExtra(uid: string, rid?: string | null, extra?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EBackend-1.2.EBackend.Cache */
    changeRevision(): void
    clearOfflineChanges(cancellable?: Gio.Cancellable | null): boolean
    contains(uid: string, deletedFlag: EBackend.CacheDeletedFlag): boolean
    copyMissingToColumnValues(columnNames: string[], columnValues: string[], otherColumns: EBackend.CacheColumnValues): /* otherColumns */ EBackend.CacheColumnValues
    dupKey(key: string): string
    dupRevision(): string
    erase(): void
    foreach(deletedFlag: EBackend.CacheDeletedFlag, whereClause: string | null, func: EBackend.CacheForeachFunc, cancellable?: Gio.Cancellable | null): boolean
    foreachUpdate(deletedFlag: EBackend.CacheDeletedFlag, whereClause: string | null, func: EBackend.CacheUpdateFunc, cancellable?: Gio.Cancellable | null): boolean
    freezeRevisionChange(): void
    get(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* outRevision */ string | null, /* outOtherColumns */ EBackend.CacheColumnValues | null ]
    getCount(deletedFlag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): number
    getFilename(): string
    getKeyInt(key: string): number
    getObjectIncludeDeleted(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* outRevision */ string | null, /* outOtherColumns */ EBackend.CacheColumnValues | null ]
    getObjects(deletedFlag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjects */ string[], /* outRevisions */ string[] | null ]
    getOfflineChanges(cancellable?: Gio.Cancellable | null): EBackend.CacheOfflineChange[]
    getOfflineState(uid: string, cancellable?: Gio.Cancellable | null): EBackend.OfflineState
    getSqlitedb(): object | null
    getUids(deletedFlag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[], /* outRevisions */ string[] | null ]
    getVersion(): number
    initializeSync(filename: string, otherColumns?: EBackend.CacheColumnInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    isRevisionChangeFrozen(): boolean
    lock(lockType: EBackend.CacheLockType): void
    put(uid: string, revision: string | null, object: string, otherColumns: EBackend.CacheColumnValues | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    remove(uid: string, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    removeAll(cancellable?: Gio.Cancellable | null): boolean
    setKey(key: string, value?: string | null): boolean
    setKeyInt(key: string, value: number): boolean
    setOfflineState(uid: string, state: EBackend.OfflineState, cancellable?: Gio.Cancellable | null): boolean
    setRevision(revision?: string | null): void
    setVersion(version: number): void
    sqliteExec(sqlStmt: string, cancellable?: Gio.Cancellable | null): boolean
    sqliteMaybeVacuum(cancellable?: Gio.Cancellable | null): boolean
    sqliteSelect(sqlStmt: string, func: EBackend.CacheSelectFunc, cancellable?: Gio.Cancellable | null): boolean
    thawRevisionChange(): void
    unlock(action: EBackend.CacheUnlockAction): void
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    loadExtensions(): void
    /* Signals of EDataCal-2.0.EDataCal.CalCache */
    connect(sigName: "dup-component-revision", callback: ((object: ICalGLib.Component) => string)): number
    on(sigName: "dup-component-revision", callback: (object: ICalGLib.Component) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dup-component-revision", callback: (object: ICalGLib.Component) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dup-component-revision", callback: (object: ICalGLib.Component) => void): NodeJS.EventEmitter
    emit(sigName: "dup-component-revision", object: ICalGLib.Component): void
    connect(sigName: "get-timezone", callback: ((tzid: string) => ICalGLib.Timezone)): number
    on(sigName: "get-timezone", callback: (tzid: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-timezone", callback: (tzid: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-timezone", callback: (tzid: string) => void): NodeJS.EventEmitter
    emit(sigName: "get-timezone", tzid: string): void
    /* Signals of EBackend-1.2.EBackend.Cache */
    connect(sigName: "before-put", callback: ((object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    on(sigName: "before-put", callback: (object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-put", callback: (object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-put", callback: (object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "before-put", object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null): void
    connect(sigName: "before-remove", callback: ((object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    on(sigName: "before-remove", callback: (object: string, p0?: Gio.Cancellable | null, p1?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-remove", callback: (object: string, p0?: Gio.Cancellable | null, p1?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-remove", callback: (object: string, p0?: Gio.Cancellable | null, p1?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "before-remove", object: string, p0?: Gio.Cancellable | null, p1?: object | null): void
    connect(sigName: "revision-changed", callback: (() => void)): number
    on(sigName: "revision-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "revision-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "revision-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "revision-changed"): void
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalCache_ConstructProps)
    _init (config?: CalCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, cancellable?: Gio.Cancellable | null): CalCache
    static resolveTimezoneCb(tzid: string, calCache?: object | null, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
    static $gtype: GObject.Type
}
interface CalMetaBackend_ConstructProps extends CalBackendSync_ConstructProps {
    /* Constructor properties of EDataCal-2.0.EDataCal.CalMetaBackend */
    cache?: CalCache
}
class CalMetaBackend {
    /* Properties of EDataCal-2.0.EDataCal.CalMetaBackend */
    cache: CalCache
    /* Properties of EDataCal-2.0.EDataCal.CalBackend */
    cacheDir: string
    readonly proxyResolver: Gio.ProxyResolver
    writable: boolean
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly userPrompter: EBackend.UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalMetaBackend */
    connectSync(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    disconnectSync(cancellable?: Gio.Cancellable | null): boolean
    dupSyncTag(): string | null
    emptyCacheSync(cancellable?: Gio.Cancellable | null): boolean
    ensureConnectedSync(cancellable?: Gio.Cancellable | null): boolean
    gatherTimezonesSync(vcalendar: ICalGLib.Component, removeExisting: boolean, cancellable?: Gio.Cancellable | null): boolean
    getCapabilities(): string
    getChangesSync(lastSyncTag: string | null, isRepeat: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outRepeat */ boolean, /* outCreatedObjects */ CalMetaBackendInfo[], /* outModifiedObjects */ CalMetaBackendInfo[], /* outRemovedObjects */ CalMetaBackendInfo[] ]
    getConnectedWritable(): boolean
    getEverConnected(): boolean
    getSslErrorDetails(): [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    inlineLocalAttachmentsSync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
    listExistingSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outExistingObjects */ CalMetaBackendInfo[] ]
    loadComponentSync(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponent */ ICalGLib.Component, /* outExtra */ string ]
    mergeInstances(instances: ECal.Component[], replaceTzidWithLocation: boolean): ICalGLib.Component
    processChangesSync(createdObjects?: CalMetaBackendInfo[] | null, modifiedObjects?: CalMetaBackendInfo[] | null, removedObjects?: CalMetaBackendInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    refCache(): CalCache
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    removeComponentSync(conflictResolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    requiresReconnect(): boolean
    saveComponentSync(overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewUid */ string, /* outNewExtra */ string ]
    scheduleRefresh(): void
    searchComponentsSync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    searchSync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
    setCache(cache: CalCache): void
    setConnectedWritable(value: boolean): void
    setEverConnected(value: boolean): void
    splitChangesSync(objects: CalMetaBackendInfo[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* objects */ CalMetaBackendInfo[], /* outCreatedObjects */ CalMetaBackendInfo[], /* outModifiedObjects */ CalMetaBackendInfo[], /* outRemovedObjects */ CalMetaBackendInfo[] | null ]
    storeInlineAttachmentsSync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataCal-2.0.EDataCal.CalBackendSync */
    addTimezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void
    createObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], opflags: ECal.OperationFlags): [ /* uids */ string[], /* newComponents */ ECal.Component[] ]
    discardAlarm(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags): void
    getAttachmentUris(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, attachments: string[]): void
    getFreeBusy(cal: DataCal, cancellable: Gio.Cancellable | null, users: string[], start: number, end: number): /* freebusyobjects */ string[]
    getObject(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string): /* calobj */ string
    getObjectList(cal: DataCal, cancellable: Gio.Cancellable | null, sexp: string): /* calobjs */ string[]
    getTimezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string): void
    modifyObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]
    open(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    receiveObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    refresh(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    removeObjects(cal: DataCal, cancellable: Gio.Cancellable | null, ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]
    sendObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags, users: string[]): /* modifiedCalobj */ string
    /* Methods of EDataCal-2.0.EDataCal.CalBackend */
    addTimezone(tzobject: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addTimezoneFinish(result: Gio.AsyncResult): boolean
    addTimezoneSync(tzobject: string, cancellable?: Gio.Cancellable | null): boolean
    addView(view: DataCalView): void
    createCacheFilename(uid: string, filename: string, fileindex: number): string
    createObjects(calobjs: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createObjectsFinish(result: Gio.AsyncResult, outUids: GLib.Queue): boolean
    createObjectsSync(calobjs: string, opflags: ECal.OperationFlags, outUids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    discardAlarm(uid: string, rid: string, alarmUid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    discardAlarmFinish(result: Gio.AsyncResult): boolean
    discardAlarmSync(uid: string, rid: string, alarmUid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    dupCacheDir(): string
    foreachView(): boolean
    foreachViewNotifyProgress(onlyCompletedViews: boolean, percent: number, message?: string | null): void
    getAttachmentUris(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAttachmentUrisFinish(result: Gio.AsyncResult, outAttachmentUris: GLib.Queue): boolean
    getAttachmentUrisSync(uid: string, rid: string, outAttachmentUris: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    getBackendProperty(propName: string): string
    getCacheDir(): string
    getFreeBusy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFreeBusyFinish(result: Gio.AsyncResult, outFreebusy: string[]): boolean
    getFreeBusySync(start: number, end: number, users: string[], outFreebusy: string[], cancellable?: Gio.Cancellable | null): boolean
    getKind(): ICalGLib.ComponentKind
    getObject(uid: string, rid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectFinish(result: Gio.AsyncResult): string
    getObjectList(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectListFinish(result: Gio.AsyncResult, outObjects: GLib.Queue): boolean
    getObjectListSync(query: string, outObjects: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
    getObjectSync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): string
    getRegistry(): EDataServer.SourceRegistry
    getTimezone(tzid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTimezoneFinish(result: Gio.AsyncResult): string
    getTimezoneSync(tzid: string, cancellable?: Gio.Cancellable | null): string
    getWritable(): boolean
    isOpened(): boolean
    isReadonly(): boolean
    listViews(): DataCalView[]
    modifyObjects(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyObjectsFinish(result: Gio.AsyncResult): boolean
    modifyObjectsSync(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    notifyComponentCreated(component: ECal.Component): void
    notifyComponentModified(oldComponent: ECal.Component, newComponent: ECal.Component): void
    notifyComponentRemoved(id: ECal.ComponentId, oldComponent: ECal.Component, newComponent: ECal.Component): void
    notifyError(message: string): void
    notifyPropertyChanged(propName: string, propValue?: string | null): void
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openSync(cancellable?: Gio.Cancellable | null): boolean
    prepareForCompletion(opid: number, resultQueue: GLib.Queue): Gio.SimpleAsyncResult
    receiveObjects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    receiveObjectsFinish(result: Gio.AsyncResult): boolean
    receiveObjectsSync(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    refDataCal(): DataCal
    refProxyResolver(): Gio.ProxyResolver | null
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    removeObjects(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeObjectsFinish(result: Gio.AsyncResult): boolean
    removeObjectsSync(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    removeView(view: DataCalView): void
    scheduleCustomOperation(useCancellable: Gio.Cancellable | null, func: CalBackendCustomOpFunc): void
    sendObjects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendObjectsFinish(result: Gio.AsyncResult, outUsers: GLib.Queue): string
    sendObjectsSync(calobj: string, opflags: ECal.OperationFlags, outUsers: GLib.Queue, cancellable?: Gio.Cancellable | null): string
    setCacheDir(cacheDir: string): void
    setDataCal(dataCal: DataCal): void
    setWritable(writable: boolean): void
    startView(view: DataCalView): void
    stopView(view: DataCalView): void
    /* Methods of EBackend-1.2.EBackend.Backend */
    credentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    credentialsRequiredFinish(result: Gio.AsyncResult): boolean
    credentialsRequiredSync(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    ensureOnlineStateUpdated(cancellable?: Gio.Cancellable | null): void
    ensureSourceStatusConnected(): void
    getDestinationAddress(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    getOnline(): boolean
    getSource(): EDataServer.Source
    getUserPrompter(): object | null
    isDestinationReachable(cancellable?: Gio.Cancellable | null): boolean
    prepareShutdown(): void
    refConnectable(): Gio.SocketConnectable | null
    refMainContext(): GLib.MainContext
    scheduleAuthenticate(credentials?: EDataServer.NamedParameters | null): void
    scheduleCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, whoCalls?: string | null): void
    setConnectable(connectable: Gio.SocketConnectable): void
    setOnline(online: boolean): void
    trustPrompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trustPromptFinish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    trustPromptSync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
    /* Signals of EDataCal-2.0.EDataCal.CalMetaBackend */
    connect(sigName: "refresh-completed", callback: (() => void)): number
    on(sigName: "refresh-completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refresh-completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refresh-completed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "refresh-completed"): void
    connect(sigName: "source-changed", callback: (() => void)): number
    on(sigName: "source-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "source-changed"): void
    /* Signals of EDataCal-2.0.EDataCal.CalBackend */
    connect(sigName: "closed", callback: ((sender: string) => void)): number
    on(sigName: "closed", callback: (sender: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: (sender: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: (sender: string) => void): NodeJS.EventEmitter
    emit(sigName: "closed", sender: string): void
    connect(sigName: "shutdown", callback: (() => void)): number
    on(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "shutdown"): void
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
    connect(sigName: "notify::cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::user-prompter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalMetaBackend_ConstructProps)
    _init (config?: CalMetaBackend_ConstructProps): void
    static $gtype: GObject.Type
}
interface DataCal_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataCal-2.0.EDataCal.DataCal */
    backend?: CalBackend
    connection?: Gio.DBusConnection
    objectPath?: string
}
class DataCal {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.DataCal */
    getConnection(): Gio.DBusConnection
    getObjectPath(): string
    refBackend(): CalBackend | null
    reportBackendPropertyChanged(propName: string, propValue: string): void
    reportError(message: string): void
    reportFreeBusyData(freebusy: string[]): void
    respondAddTimezone(opid: number, error: GLib.Error): void
    respondCreateObjects(opid: number, error: GLib.Error, uids: string[], newComponents: ECal.Component[]): void
    respondDiscardAlarm(opid: number, error: GLib.Error): void
    respondGetAttachmentUris(opid: number, error: GLib.Error, attachmentUris: string[]): void
    respondGetFreeBusy(opid: number, error: GLib.Error, freebusy: string[]): void
    respondGetObject(opid: number, error: GLib.Error, object: string): void
    respondGetObjectList(opid: number, error: GLib.Error, objects: string[]): void
    respondGetTimezone(opid: number, error: GLib.Error, tzobject: string): void
    respondModifyObjects(opid: number, error: GLib.Error, oldComponents: ECal.Component[], newComponents: ECal.Component[]): void
    respondOpen(opid: number, error: GLib.Error): void
    respondReceiveObjects(opid: number, error: GLib.Error): void
    respondRefresh(opid: number, error: GLib.Error): void
    respondRemoveObjects(opid: number, error: GLib.Error, ids: ECal.ComponentId[], oldComponents: ECal.Component[], newComponents: ECal.Component[]): void
    respondSendObjects(opid: number, error: GLib.Error, users: string[], calobj: string): void
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
    constructor (config?: DataCal_ConstructProps)
    _init (config?: DataCal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: CalBackend, connection: Gio.DBusConnection, objectPath: string): DataCal
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DataCalFactory_ConstructProps extends EBackend.DataFactory_ConstructProps {
}
class DataCalFactory {
    /* Properties of EBackend-1.2.EBackend.DataFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.DataFactory */
    backendClosed(backend: EBackend.Backend): void
    backendClosedBySender(backend: EBackend.Backend, sender: string): void
    constructPath(): string
    createBackend(backendFactory: EBackend.BackendFactory, source: EDataServer.Source): EBackend.Backend
    getBackendPerProcess(): number
    getRegistry(): EDataServer.SourceRegistry
    getReloadSupported(): boolean
    listOpenedBackends(): EBackend.Backend[]
    openBackend(backend: EBackend.Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    refBackendFactory(backendName: string, extensionName: string): EBackend.BackendFactory
    spawnSubprocessBackend(invocation: Gio.DBusMethodInvocation, uid: string, extensionName: string, subprocessPath: string): void
    useBackendPerProcess(): boolean
    /* Methods of EBackend-1.2.EBackend.DBusServer */
    hold(): void
    loadModules(): void
    quit(code: EBackend.DBusServerExitCode): void
    release(): void
    run(waitForClient: boolean): EBackend.DBusServerExitCode
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    loadExtensions(): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of EBackend-1.2.EBackend.DBusServer */
    connect(sigName: "bus-acquired", callback: ((connection: Gio.DBusConnection) => void)): number
    on(sigName: "bus-acquired", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bus-acquired", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bus-acquired", callback: (connection: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-acquired", callback: ((connection: Gio.DBusConnection) => void)): number
    on(sigName: "bus-name-acquired", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bus-name-acquired", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bus-name-acquired", callback: (connection: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    connect(sigName: "bus-name-lost", callback: ((connection: Gio.DBusConnection) => void)): number
    on(sigName: "bus-name-lost", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bus-name-lost", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bus-name-lost", callback: (connection: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    connect(sigName: "quit-server", callback: ((code: EBackend.DBusServerExitCode) => void)): number
    on(sigName: "quit-server", callback: (code: EBackend.DBusServerExitCode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "quit-server", callback: (code: EBackend.DBusServerExitCode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "quit-server", callback: (code: EBackend.DBusServerExitCode) => void): NodeJS.EventEmitter
    emit(sigName: "quit-server", code: EBackend.DBusServerExitCode): void
    connect(sigName: "run-server", callback: (() => EBackend.DBusServerExitCode)): number
    on(sigName: "run-server", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run-server", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run-server", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "run-server"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataCalFactory_ConstructProps)
    _init (config?: DataCalFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backendPerProcess: number, cancellable?: Gio.Cancellable | null): DataCalFactory
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DataCalView_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataCal-2.0.EDataCal.DataCalView */
    backend?: CalBackend
    connection?: Gio.DBusConnection
    objectPath?: string
    sexp?: CalBackendSExp
}
class DataCalView {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.DataCalView */
    componentMatches(component: ECal.Component): boolean
    getComponentString(component: ECal.Component): string
    getConnection(): Gio.DBusConnection
    getFieldsOfInterest(): GLib.HashTable
    getFlags(): ECal.ClientViewFlags
    getObjectPath(): string
    getSexp(): object | null
    isCompleted(): boolean
    isStarted(): boolean
    isStopped(): boolean
    notifyComplete(error: GLib.Error): void
    notifyComponentsAdded(ecalcomponents: ECal.Component[]): void
    notifyComponentsAdded1(component: ECal.Component): void
    notifyComponentsModified(ecalcomponents: ECal.Component[]): void
    notifyComponentsModified1(component: ECal.Component): void
    notifyObjectsRemoved(ids: ECal.ComponentId[]): void
    notifyObjectsRemoved1(id: ECal.ComponentId): void
    notifyProgress(percent: number, message: string): void
    objectMatches(object: string): boolean
    refBackend(): CalBackend | null
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
    constructor (config?: DataCalView_ConstructProps)
    _init (config?: DataCalView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: object | null, sexp: object | null, connection: Gio.DBusConnection, objectPath: string): DataCalView
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface IntervalTree_ConstructProps extends GObject.Object_ConstructProps {
}
class IntervalTree {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.IntervalTree */
    destroy(): void
    dump(): void
    insert(start: number, end: number, comp: ECal.Component): boolean
    remove(uid: string, rid: string): boolean
    search(start: number, end: number): ECal.Component[] | null
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
    constructor (config?: IntervalTree_ConstructProps)
    _init (config?: IntervalTree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IntervalTree
    static $gtype: GObject.Type
}
interface SubprocessCalFactory_ConstructProps extends EBackend.SubprocessFactory_ConstructProps {
}
class SubprocessCalFactory {
    /* Properties of EBackend-1.2.EBackend.SubprocessFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.SubprocessFactory */
    callBackendsPrepareShutdown(): void
    getBackendsList(): EBackend.Backend[]
    getRegistry(): EDataServer.SourceRegistry
    openBackend(connection: Gio.DBusConnection, uid: string, backendFactoryTypeName: string, moduleFilename: string, proxy: Gio.DBusInterfaceSkeleton, cancellable?: Gio.Cancellable | null): string
    refInitableBackend(uid: string, backendFactoryTypeName: string, moduleFilename: string, cancellable?: Gio.Cancellable | null): EBackend.Backend | null
    setBackendCallbacks(backend: EBackend.Backend, proxy: Gio.DBusInterfaceSkeleton): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SubprocessCalFactory_ConstructProps)
    _init (config?: SubprocessCalFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable?: Gio.Cancellable | null): SubprocessCalFactory
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class CalBackendClass {
    /* Fields of EDataCal-2.0.EDataCal.CalBackendClass */
    readonly useSerialDispatchQueue: boolean
    readonly implGetBackendProperty: (backend: CalBackend, propName: string) => string
    readonly implOpen: (backend: CalBackend, cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null) => void
    readonly implRefresh: (backend: CalBackend, cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null) => void
    readonly implGetObject: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string) => void
    readonly implGetObjectList: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, sexp: string) => void
    readonly implReceiveObjects: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags) => void
    readonly implSendObjects: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags) => void
    readonly implGetAttachmentUris: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string) => void
    readonly implDiscardAlarm: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags) => void
    readonly implGetTimezone: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzid: string) => void
    readonly implAddTimezone: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzobject: string) => void
    readonly implStartView: (backend: CalBackend, view: DataCalView) => void
    readonly implStopView: (backend: CalBackend, view: DataCalView) => void
    readonly closed: (backend: CalBackend, sender: string) => void
    readonly shutdown: (backend: CalBackend) => void
    readonly reservedPadding: object[]
    static name: string
}
abstract class CalBackendFactoryClass {
    /* Fields of EDataCal-2.0.EDataCal.CalBackendFactoryClass */
    readonly factoryName: string
    readonly componentKind: ICalGLib.ComponentKind
    readonly backendType: GObject.Type
    static name: string
}
class CalBackendFactoryPrivate {
    static name: string
}
class CalBackendPrivate {
    static name: string
}
abstract class CalBackendSExpClass {
    static name: string
}
class CalBackendSExpPrivate {
    static name: string
}
abstract class CalBackendSyncClass {
    /* Fields of EDataCal-2.0.EDataCal.CalBackendSyncClass */
    readonly openSync: (backend: CalBackendSync, cal: DataCal, cancellable?: Gio.Cancellable | null) => void
    readonly refreshSync: (backend: CalBackendSync, cal: DataCal, cancellable?: Gio.Cancellable | null) => void
    readonly getObjectSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, calobj: string) => void
    readonly receiveObjectsSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags) => void
    readonly discardAlarmSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags) => void
    readonly getTimezoneSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string) => void
    readonly addTimezoneSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string) => void
    readonly reservedPadding: object[]
    static name: string
}
class CalBackendSyncPrivate {
    static name: string
}
abstract class CalCacheClass {
    /* Fields of EDataCal-2.0.EDataCal.CalCacheClass */
    readonly dupComponentRevision: (calCache: CalCache, icomp: ICalGLib.Component) => string
    static name: string
}
class CalCacheOfflineChange {
    /* Fields of EDataCal-2.0.EDataCal.CalCacheOfflineChange */
    readonly uid: string
    readonly rid: string
    readonly revision: string
    readonly object: string
    readonly state: EBackend.OfflineState
    /* Methods of EDataCal-2.0.EDataCal.CalCacheOfflineChange */
    copy(): CalCacheOfflineChange
    static name: string
    static new(uid: string, rid: string | null, revision: string | null, object: string | null, state: EBackend.OfflineState): CalCacheOfflineChange
    constructor(uid: string, rid: string | null, revision: string | null, object: string | null, state: EBackend.OfflineState)
    /* Static methods and pseudo-constructors */
    static new(uid: string, rid: string | null, revision: string | null, object: string | null, state: EBackend.OfflineState): CalCacheOfflineChange
    static free(change?: object | null): void
}
class CalCachePrivate {
    static name: string
}
class CalCacheSearchData {
    /* Fields of EDataCal-2.0.EDataCal.CalCacheSearchData */
    readonly uid: string
    readonly rid: string
    readonly object: string
    readonly extra: string
    /* Methods of EDataCal-2.0.EDataCal.CalCacheSearchData */
    copy(): CalCacheSearchData
    static name: string
    static new(uid: string, rid: string | null, object: string, extra?: string | null): CalCacheSearchData
    constructor(uid: string, rid: string | null, object: string, extra?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, rid: string | null, object: string, extra?: string | null): CalCacheSearchData
    static free(ptr?: object | null): void
}
abstract class CalMetaBackendClass {
    /* Fields of EDataCal-2.0.EDataCal.CalMetaBackendClass */
    readonly connectSync: (metaBackend: CalMetaBackend, credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    readonly disconnectSync: (metaBackend: CalMetaBackend, cancellable?: Gio.Cancellable | null) => boolean
    readonly getChangesSync: (metaBackend: CalMetaBackend, lastSyncTag: string | null, isRepeat: boolean, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outRepeat */ boolean, /* outCreatedObjects */ CalMetaBackendInfo[], /* outModifiedObjects */ CalMetaBackendInfo[], /* outRemovedObjects */ CalMetaBackendInfo[] ]
    readonly listExistingSync: (metaBackend: CalMetaBackend, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outExistingObjects */ CalMetaBackendInfo[] ]
    readonly loadComponentSync: (metaBackend: CalMetaBackend, uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outComponent */ ICalGLib.Component, /* outExtra */ string ]
    readonly saveComponentSync: (metaBackend: CalMetaBackend, overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewUid */ string, /* outNewExtra */ string ]
    readonly removeComponentSync: (metaBackend: CalMetaBackend, conflictResolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null) => boolean
    readonly searchSync: (metaBackend: CalMetaBackend, expr?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
    readonly searchComponentsSync: (metaBackend: CalMetaBackend, expr?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    readonly requiresReconnect: (metaBackend: CalMetaBackend) => boolean
    readonly sourceChanged: (metaBackend: CalMetaBackend) => void
    readonly getSslErrorDetails: (metaBackend: CalMetaBackend) => [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    static name: string
}
class CalMetaBackendInfo {
    /* Fields of EDataCal-2.0.EDataCal.CalMetaBackendInfo */
    readonly uid: string
    readonly revision: string
    readonly object: string
    readonly extra: string
    /* Methods of EDataCal-2.0.EDataCal.CalMetaBackendInfo */
    copy(): CalMetaBackendInfo
    static name: string
    static new(uid: string, revision?: string | null, object?: string | null, extra?: string | null): CalMetaBackendInfo
    constructor(uid: string, revision?: string | null, object?: string | null, extra?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, revision?: string | null, object?: string | null, extra?: string | null): CalMetaBackendInfo
    static free(ptr?: object | null): void
}
class CalMetaBackendPrivate {
    static name: string
}
abstract class DataCalClass {
    /* Fields of EDataCal-2.0.EDataCal.DataCalClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class DataCalFactoryClass {
    /* Fields of EDataCal-2.0.EDataCal.DataCalFactoryClass */
    readonly parentClass: EBackend.DataFactoryClass
    static name: string
}
class DataCalFactoryPrivate {
    static name: string
}
class DataCalPrivate {
    static name: string
}
abstract class DataCalViewClass {
    /* Fields of EDataCal-2.0.EDataCal.DataCalViewClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DataCalViewPrivate {
    static name: string
}
abstract class IntervalTreeClass {
    static name: string
}
class IntervalTreePrivate {
    static name: string
}
abstract class SubprocessCalFactoryClass {
    /* Fields of EDataCal-2.0.EDataCal.SubprocessCalFactoryClass */
    readonly parentClass: EBackend.SubprocessFactoryClass
    static name: string
}
class SubprocessCalFactoryPrivate {
    static name: string
}
}
export default EDataCal;