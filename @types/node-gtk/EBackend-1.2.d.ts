/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EBackend-1.2
 */

import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type EDataServer from './EDataServer-1.2';
import type GData from './GData-0.0';
import type Json from './Json-1.0';
import type Goa from './Goa-1.0';
import type Camel from './Camel-1.2';

export namespace EBackend {

enum AuthenticationSessionResult {
    ERROR,
    SUCCESS,
    DISMISSED,
}
enum CacheDeletedFlag {
    EXCLUDE_DELETED,
    INCLUDE_DELETED,
}
enum CacheError {
    ENGINE,
    CONSTRAINT,
    NOT_FOUND,
    INVALID_QUERY,
    UNSUPPORTED_FIELD,
    UNSUPPORTED_QUERY,
    END_OF_LIST,
    LOAD,
}
enum CacheLockType {
    READ,
    WRITE,
}
enum CacheOfflineFlag {
    OFFLINE_UNKNOWN,
    IS_ONLINE,
    IS_OFFLINE,
}
enum CacheUnlockAction {
    NONE,
    COMMIT,
    ROLLBACK,
}
enum DBusServerExitCode {
    NONE,
    NORMAL,
    RELOAD,
}
enum OfflineState {
    UNKNOWN,
    SYNCED,
    LOCALLY_CREATED,
    LOCALLY_MODIFIED,
    LOCALLY_DELETED,
}
enum CollectionBackendParts {
    NONE,
    CALENDAR,
    CONTACTS,
    MAIL,
    ANY,
}
enum SourcePermissionFlags {
    NONE,
    WRITABLE,
    REMOVABLE,
}
const CACHE_COLUMN_OBJECT: string
const CACHE_COLUMN_REVISION: string
const CACHE_COLUMN_STATE: string
const CACHE_COLUMN_UID: string
const CACHE_TABLE_KEYS: string
const CACHE_TABLE_OBJECTS: string
const EDS_REGISTRY_MODULES: string
const SOURCE_REGISTRY_SERVER_OBJECT_PATH: string
const USER_PROMPTER_SERVER_OBJECT_PATH: string
function cacheColumnInfoFree(info?: object | null): void
function cacheOfflineChangeFree(change?: object | null): void
function sqlite3VfsInit(): void
interface CacheForeachFunc {
    (cache: Cache, uid: string, revision: string, object: string, offlineState: OfflineState, columnNames: string[], columnValues: string[]): boolean
}
interface CacheSelectFunc {
    (cache: Cache, columnNames: string[], columnValues: string[]): boolean
}
interface CacheUpdateFunc {
    (cache: Cache, uid: string, revision: string, object: string, offlineState: OfflineState, columnNames: string[], columnValues: string[]): boolean
}
class OAuth2Support {
    /* Methods of EBackend-1.2.EBackend.OAuth2Support */
    getAccessToken(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getAccessTokenSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    static name: string
}
interface Backend_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EBackend-1.2.EBackend.Backend */
    connectable?: Gio.SocketConnectable
    online?: boolean
    source?: EDataServer.Source
}
class Backend {
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly userPrompter: UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    constructor (config?: Backend_ConstructProps)
    _init (config?: Backend_ConstructProps): void
    static $gtype: GObject.Type
}
interface BackendFactory_ConstructProps extends EDataServer.Extension_ConstructProps {
}
class BackendFactory {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.BackendFactory */
    getHashKey(): string
    getModuleFilename(): string
    newBackend(source: EDataServer.Source): Backend
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
    constructor (config?: BackendFactory_ConstructProps)
    _init (config?: BackendFactory_ConstructProps): void
    static $gtype: GObject.Type
}
interface Cache_ConstructProps extends GObject.Object_ConstructProps {
}
class Cache {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.Cache */
    changeRevision(): void
    clearOfflineChanges(cancellable?: Gio.Cancellable | null): boolean
    contains(uid: string, deletedFlag: CacheDeletedFlag): boolean
    copyMissingToColumnValues(columnNames: string[], columnValues: string[], otherColumns: CacheColumnValues): /* otherColumns */ CacheColumnValues
    dupKey(key: string): string
    dupRevision(): string
    erase(): void
    foreach(deletedFlag: CacheDeletedFlag, whereClause: string | null, func: CacheForeachFunc, cancellable?: Gio.Cancellable | null): boolean
    foreachUpdate(deletedFlag: CacheDeletedFlag, whereClause: string | null, func: CacheUpdateFunc, cancellable?: Gio.Cancellable | null): boolean
    freezeRevisionChange(): void
    get(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* outRevision */ string | null, /* outOtherColumns */ CacheColumnValues | null ]
    getCount(deletedFlag: CacheDeletedFlag, cancellable?: Gio.Cancellable | null): number
    getFilename(): string
    getKeyInt(key: string): number
    getObjectIncludeDeleted(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* outRevision */ string | null, /* outOtherColumns */ CacheColumnValues | null ]
    getObjects(deletedFlag: CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjects */ string[], /* outRevisions */ string[] | null ]
    getOfflineChanges(cancellable?: Gio.Cancellable | null): CacheOfflineChange[]
    getOfflineState(uid: string, cancellable?: Gio.Cancellable | null): OfflineState
    getSqlitedb(): object | null
    getUids(deletedFlag: CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[], /* outRevisions */ string[] | null ]
    getVersion(): number
    initializeSync(filename: string, otherColumns?: CacheColumnInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    isRevisionChangeFrozen(): boolean
    lock(lockType: CacheLockType): void
    put(uid: string, revision: string | null, object: string, otherColumns: CacheColumnValues | null, offlineFlag: CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    remove(uid: string, offlineFlag: CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    removeAll(cancellable?: Gio.Cancellable | null): boolean
    setKey(key: string, value?: string | null): boolean
    setKeyInt(key: string, value: number): boolean
    setOfflineState(uid: string, state: OfflineState, cancellable?: Gio.Cancellable | null): boolean
    setRevision(revision?: string | null): void
    setVersion(version: number): void
    sqliteExec(sqlStmt: string, cancellable?: Gio.Cancellable | null): boolean
    sqliteMaybeVacuum(cancellable?: Gio.Cancellable | null): boolean
    sqliteSelect(sqlStmt: string, func: CacheSelectFunc, cancellable?: Gio.Cancellable | null): boolean
    thawRevisionChange(): void
    unlock(action: CacheUnlockAction): void
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
    /* Signals of EBackend-1.2.EBackend.Cache */
    connect(sigName: "before-put", callback: ((object: string, p0: string, p1: string, p2: CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    on(sigName: "before-put", callback: (object: string, p0: string, p1: string, p2: CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-put", callback: (object: string, p0: string, p1: string, p2: CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-put", callback: (object: string, p0: string, p1: string, p2: CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "before-put", object: string, p0: string, p1: string, p2: CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null): void
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Cache_ConstructProps)
    _init (config?: Cache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static sqliteStmtFree(stmt: string): void
    static $gtype: GObject.Type
}
interface CacheReaper_ConstructProps extends EDataServer.Extension_ConstructProps {
}
class CacheReaper {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.CacheReaper */
    addPrivateDirectory(name: string): void
    removePrivateDirectory(name: string): void
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    loadExtensions(): void
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
    constructor (config?: CacheReaper_ConstructProps)
    _init (config?: CacheReaper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static typeRegister(typeModule: GObject.TypeModule): void
    static $gtype: GObject.Type
}
interface CollectionBackend_ConstructProps extends Backend_ConstructProps {
    /* Constructor properties of EBackend-1.2.EBackend.CollectionBackend */
    server?: SourceRegistryServer
}
class CollectionBackend {
    /* Properties of EBackend-1.2.EBackend.CollectionBackend */
    readonly proxyResolver: Gio.ProxyResolver
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly userPrompter: UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.CollectionBackend */
    authenticateChildren(credentials: EDataServer.NamedParameters): void
    claimAllResources(): EDataServer.Source[]
    createResource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createResourceFinish(result: Gio.AsyncResult): boolean
    createResourceSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    deleteResource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteResourceFinish(result: Gio.AsyncResult): boolean
    deleteResourceSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    dupResourceId(childSource: EDataServer.Source): string
    freezePopulate(): boolean
    getCacheDir(): string
    getPartEnabled(parts: CollectionBackendParts): boolean
    getPopulateFrozen(): boolean
    isNewSource(source: EDataServer.Source): boolean
    listCalendarSources(): EDataServer.Source[]
    listContactsSources(): EDataServer.Source[]
    listMailSources(): EDataServer.Source[]
    newChild(resourceId: string): EDataServer.Source
    refProxyResolver(): Gio.ProxyResolver | null
    refServer(): SourceRegistryServer
    schedulePopulate(): void
    thawPopulate(): void
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
    /* Signals of EBackend-1.2.EBackend.CollectionBackend */
    connect(sigName: "child-added", callback: ((childSource: ServerSideSource) => void)): number
    on(sigName: "child-added", callback: (childSource: ServerSideSource) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (childSource: ServerSideSource) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (childSource: ServerSideSource) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", childSource: ServerSideSource): void
    connect(sigName: "child-removed", callback: ((childSource: ServerSideSource) => void)): number
    on(sigName: "child-removed", callback: (childSource: ServerSideSource) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (childSource: ServerSideSource) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (childSource: ServerSideSource) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", childSource: ServerSideSource): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: CollectionBackend_ConstructProps)
    _init (config?: CollectionBackend_ConstructProps): void
    static $gtype: GObject.Type
}
interface CollectionBackendFactory_ConstructProps extends BackendFactory_ConstructProps {
}
class CollectionBackendFactory {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.CollectionBackendFactory */
    prepareMail(mailAccountSource: EDataServer.Source, mailIdentitySource: EDataServer.Source, mailTransportSource: EDataServer.Source): void
    /* Methods of EBackend-1.2.EBackend.BackendFactory */
    getHashKey(): string
    getModuleFilename(): string
    newBackend(source: EDataServer.Source): Backend
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
    constructor (config?: CollectionBackendFactory_ConstructProps)
    _init (config?: CollectionBackendFactory_ConstructProps): void
    static $gtype: GObject.Type
}
interface DBusServer_ConstructProps extends GObject.Object_ConstructProps {
}
class DBusServer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.DBusServer */
    hold(): void
    loadModules(): void
    quit(code: DBusServerExitCode): void
    release(): void
    run(waitForClient: boolean): DBusServerExitCode
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
    connect(sigName: "quit-server", callback: ((code: DBusServerExitCode) => void)): number
    on(sigName: "quit-server", callback: (code: DBusServerExitCode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "quit-server", callback: (code: DBusServerExitCode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "quit-server", callback: (code: DBusServerExitCode) => void): NodeJS.EventEmitter
    emit(sigName: "quit-server", code: DBusServerExitCode): void
    connect(sigName: "run-server", callback: (() => DBusServerExitCode)): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusServer_ConstructProps)
    _init (config?: DBusServer_ConstructProps): void
    static $gtype: GObject.Type
}
interface DataFactory_ConstructProps extends DBusServer_ConstructProps {
    /* Constructor properties of EBackend-1.2.EBackend.DataFactory */
    backendPerProcess?: number
    reloadSupported?: boolean
}
class DataFactory {
    /* Properties of EBackend-1.2.EBackend.DataFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.DataFactory */
    backendClosed(backend: Backend): void
    backendClosedBySender(backend: Backend, sender: string): void
    constructPath(): string
    createBackend(backendFactory: BackendFactory, source: EDataServer.Source): Backend
    getBackendPerProcess(): number
    getRegistry(): EDataServer.SourceRegistry
    getReloadSupported(): boolean
    listOpenedBackends(): Backend[]
    openBackend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    refBackendFactory(backendName: string, extensionName: string): BackendFactory
    spawnSubprocessBackend(invocation: Gio.DBusMethodInvocation, uid: string, extensionName: string, subprocessPath: string): void
    useBackendPerProcess(): boolean
    /* Methods of EBackend-1.2.EBackend.DBusServer */
    hold(): void
    loadModules(): void
    quit(code: DBusServerExitCode): void
    release(): void
    run(waitForClient: boolean): DBusServerExitCode
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
    connect(sigName: "quit-server", callback: ((code: DBusServerExitCode) => void)): number
    on(sigName: "quit-server", callback: (code: DBusServerExitCode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "quit-server", callback: (code: DBusServerExitCode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "quit-server", callback: (code: DBusServerExitCode) => void): NodeJS.EventEmitter
    emit(sigName: "quit-server", code: DBusServerExitCode): void
    connect(sigName: "run-server", callback: (() => DBusServerExitCode)): number
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
    constructor (config?: DataFactory_ConstructProps)
    _init (config?: DataFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface FileCache_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EBackend-1.2.EBackend.FileCache */
    filename?: string
}
class FileCache {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.FileCache */
    addObject(key: string, value: string): boolean
    clean(): boolean
    freezeChanges(): void
    getFilename(): string
    getKeys(): string[]
    getObject(key: string): string
    getObjects(): string[]
    remove(): boolean
    removeObject(key: string): boolean
    replaceObject(key: string, newValue: string): boolean
    thawChanges(): void
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
    constructor (config?: FileCache_ConstructProps)
    _init (config?: FileCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): FileCache
    static $gtype: GObject.Type
}
interface ServerSideSource_ConstructProps extends EDataServer.Source_ConstructProps {
    /* Constructor properties of EBackend-1.2.EBackend.ServerSideSource */
    file?: Gio.File
    oauth2Support?: OAuth2Support
    remoteCreatable?: boolean
    remoteDeletable?: boolean
    removable?: boolean
    server?: SourceRegistryServer
    writable?: boolean
    writeDirectory?: string
}
class ServerSideSource {
    /* Properties of EBackend-1.2.EBackend.ServerSideSource */
    readonly exported: boolean
    oauth2Support: OAuth2Support
    remoteCreatable: boolean
    remoteDeletable: boolean
    removable: boolean
    writable: boolean
    writeDirectory: string
    /* Properties of EDataServer-1.2.EDataServer.Source */
    readonly connectionStatus: EDataServer.SourceConnectionStatus
    displayName: string
    enabled: boolean
    parent: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.ServerSideSource */
    getExported(): boolean
    getFile(): Gio.File | null
    getNode(): GLib.Node | null
    getServer(): SourceRegistryServer
    getWriteDirectory(): string
    load(cancellable?: Gio.Cancellable | null): boolean
    refOauth2Support(): OAuth2Support | null
    setOauth2Support(oauth2Support: OAuth2Support): void
    setRemoteCreatable(remoteCreatable: boolean): void
    setRemoteDeletable(remoteDeletable: boolean): void
    setRemovable(removable: boolean): void
    setWritable(writable: boolean): void
    setWriteDirectory(writeDirectory: string): void
    /* Methods of EDataServer-1.2.EDataServer.Source */
    camelConfigureService(service: Camel.Service): void
    changed(): void
    compareByDisplayName(source2: EDataServer.Source): number
    deletePassword(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deletePasswordFinish(result: Gio.AsyncResult): boolean
    deletePasswordSync(cancellable?: Gio.Cancellable | null): boolean
    dupDisplayName(): string
    dupParent(): string | null
    dupSecretLabel(): string
    dupUid(): string
    emitCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null): void
    equal(source2: EDataServer.Source): boolean
    getConnectionStatus(): EDataServer.SourceConnectionStatus
    getDisplayName(): string
    getEnabled(): boolean
    getExtension(extensionName: string): EDataServer.SourceExtension
    getLastCredentialsRequiredArguments(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getLastCredentialsRequiredArgumentsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outReason */ EDataServer.SourceCredentialsReason, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outOpError */ GLib.Error ]
    getLastCredentialsRequiredArgumentsSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outReason */ EDataServer.SourceCredentialsReason, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outOpError */ GLib.Error ]
    getOauth2AccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getOauth2AccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getOauth2AccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getParent(): string | null
    getRemoteCreatable(): boolean
    getRemoteDeletable(): boolean
    getRemovable(): boolean
    getUid(): string
    getWritable(): boolean
    hasExtension(extensionName: string): boolean
    hash(): number
    invokeAuthenticate(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invokeAuthenticateFinish(result: Gio.AsyncResult): boolean
    invokeAuthenticateSync(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): boolean
    invokeCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invokeCredentialsRequiredFinish(result: Gio.AsyncResult): boolean
    invokeCredentialsRequiredSync(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    lookupPassword(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupPasswordFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outPassword */ string | null ]
    lookupPasswordSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPassword */ string | null ]
    mailSignatureLoad(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mailSignatureLoadFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ string, /* length */ number | null ]
    mailSignatureLoadSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* contents */ string, /* length */ number | null ]
    mailSignatureReplace(contents: string, length: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mailSignatureReplaceFinish(result: Gio.AsyncResult): boolean
    mailSignatureReplaceSync(contents: string, length: number, cancellable?: Gio.Cancellable | null): boolean
    mailSignatureSymlink(symlinkTarget: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mailSignatureSymlinkFinish(result: Gio.AsyncResult): boolean
    mailSignatureSymlinkSync(symlinkTarget: string, cancellable?: Gio.Cancellable | null): boolean
    proxyLookup(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    proxyLookupFinish(result: Gio.AsyncResult): string[]
    proxyLookupSync(uri: string, cancellable?: Gio.Cancellable | null): string[]
    refDbusObject(): Gio.DBusObject | null
    refMainContext(): GLib.MainContext
    refreshAddTimeout(context: GLib.MainContext | null, callback: EDataServer.SourceRefreshFunc): number
    refreshForceTimeout(): void
    refreshRemoveTimeout(refreshTimeoutId: number): boolean
    refreshRemoveTimeoutsByData(userData?: object | null): number
    remoteCreate(scratchSource: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remoteCreateFinish(result: Gio.AsyncResult): boolean
    remoteCreateSync(scratchSource: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    remoteDelete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remoteDeleteFinish(result: Gio.AsyncResult): boolean
    remoteDeleteSync(cancellable?: Gio.Cancellable | null): boolean
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeFinish(result: Gio.AsyncResult): boolean
    removeSync(cancellable?: Gio.Cancellable | null): boolean
    setConnectionStatus(connectionStatus: EDataServer.SourceConnectionStatus): void
    setDisplayName(displayName: string): void
    setEnabled(enabled: boolean): void
    setParent(parent?: string | null): void
    storePassword(password: string, permanently: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    storePasswordFinish(result: Gio.AsyncResult): boolean
    storePasswordSync(password: string, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    toString(): [ /* returnType */ string, /* length */ number | null ]
    unsetLastCredentialsRequiredArguments(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unsetLastCredentialsRequiredArgumentsFinish(result: Gio.AsyncResult): boolean
    unsetLastCredentialsRequiredArgumentsSync(cancellable?: Gio.Cancellable | null): boolean
    write(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeFinish(result: Gio.AsyncResult): boolean
    writeSync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Methods of Gio-2.0.Gio.ProxyResolver */
    isSupported(): boolean
    lookup(uri: string, cancellable?: Gio.Cancellable | null): string[]
    lookupAsync(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupFinish(result: Gio.AsyncResult): string[]
    /* Signals of EDataServer-1.2.EDataServer.Source */
    connect(sigName: "authenticate", callback: ((credentials: EDataServer.NamedParameters) => void)): number
    on(sigName: "authenticate", callback: (credentials: EDataServer.NamedParameters) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (credentials: EDataServer.NamedParameters) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (credentials: EDataServer.NamedParameters) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", credentials: EDataServer.NamedParameters): void
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "credentials-required", callback: ((reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error) => void)): number
    on(sigName: "credentials-required", callback: (reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "credentials-required", callback: (reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "credentials-required", callback: (reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "credentials-required", reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::exported", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exported", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oauth2-support", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth2-support", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oauth2-support", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oauth2-support", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oauth2-support", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-creatable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-creatable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-creatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-creatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-creatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-deletable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-deletable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::removable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::write-directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::write-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::write-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::write-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection-status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ServerSideSource_ConstructProps)
    _init (config?: ServerSideSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(server: SourceRegistryServer, file: Gio.File): ServerSideSource
    /* Function overloads */
    static new(dbusObject?: Gio.DBusObject | null, mainContext?: GLib.MainContext | null): ServerSideSource
    static newMemoryOnly(server: SourceRegistryServer, uid: string): ServerSideSource
    static getUserDir(): string
    static newUserFile(uid: string): Gio.File
    static uidFromFile(file: Gio.File): string
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static getDefault(): Gio.ProxyResolver
    static $gtype: GObject.Type
}
interface ServerSideSourceCredentialsProvider_ConstructProps extends EDataServer.SourceCredentialsProvider_ConstructProps {
}
class ServerSideSourceCredentialsProvider {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCredentialsProvider */
    canPrompt(source: EDataServer.Source): boolean
    canStore(source: EDataServer.Source): boolean
    delete(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    deleteSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    lookup(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCredentials */ EDataServer.NamedParameters ]
    lookupSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCredentials */ EDataServer.NamedParameters ]
    refCredentialsSource(source: EDataServer.Source): EDataServer.Source
    refRegistry(): GObject.Object
    refSource(uid: string): EDataServer.Source
    registerImpl(providerImpl: EDataServer.SourceCredentialsProviderImpl): boolean
    store(source: EDataServer.Source, credentials: EDataServer.NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    storeFinish(result: Gio.AsyncResult): boolean
    storeSync(source: EDataServer.Source, credentials: EDataServer.NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    unregisterImpl(providerImpl: EDataServer.SourceCredentialsProviderImpl): void
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
    constructor (config?: ServerSideSourceCredentialsProvider_ConstructProps)
    _init (config?: ServerSideSourceCredentialsProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(registry: SourceRegistryServer): ServerSideSourceCredentialsProvider
    /* Function overloads */
    static new(registry: EDataServer.SourceRegistry): ServerSideSourceCredentialsProvider
    static $gtype: GObject.Type
}
interface SourceRegistryServer_ConstructProps extends DataFactory_ConstructProps {
}
class SourceRegistryServer {
    /* Properties of EBackend-1.2.EBackend.DataFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.SourceRegistryServer */
    addSource(source: EDataServer.Source): void
    findExtension(source: EDataServer.Source, extensionName: string): EDataServer.Source | null
    getOauth2Services(): EDataServer.OAuth2Services
    listSources(extensionName: string): EDataServer.Source[]
    loadDirectory(path: string, flags: SourcePermissionFlags): boolean
    loadError(file: Gio.File, error: GLib.Error): void
    loadFile(file: Gio.File, flags: SourcePermissionFlags): EDataServer.Source | null
    loadResource(resource: Gio.Resource, path: string, flags: SourcePermissionFlags): boolean
    refBackend(source: EDataServer.Source): CollectionBackend | null
    refBackendFactory(source: EDataServer.Source): CollectionBackendFactory | null
    refCredentialsProvider(): EDataServer.SourceCredentialsProvider
    refOauth2Support(): OAuth2Support | null
    refSource(uid: string): EDataServer.Source | null
    removeSource(source: EDataServer.Source): void
    /* Methods of EBackend-1.2.EBackend.DataFactory */
    backendClosed(backend: Backend): void
    backendClosedBySender(backend: Backend, sender: string): void
    constructPath(): string
    createBackend(backendFactory: BackendFactory, source: EDataServer.Source): Backend
    getBackendPerProcess(): number
    getRegistry(): EDataServer.SourceRegistry
    getReloadSupported(): boolean
    listOpenedBackends(): Backend[]
    openBackend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    refBackendFactory(backendName: string, extensionName: string): BackendFactory
    spawnSubprocessBackend(invocation: Gio.DBusMethodInvocation, uid: string, extensionName: string, subprocessPath: string): void
    useBackendPerProcess(): boolean
    /* Methods of EBackend-1.2.EBackend.DBusServer */
    hold(): void
    loadModules(): void
    quit(code: DBusServerExitCode): void
    release(): void
    run(waitForClient: boolean): DBusServerExitCode
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
    /* Methods of EBackend-1.2.EBackend.OAuth2Support */
    getAccessToken(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getAccessTokenSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    loadExtensions(): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of EBackend-1.2.EBackend.SourceRegistryServer */
    connect(sigName: "files-loaded", callback: (() => void)): number
    on(sigName: "files-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "files-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "files-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "files-loaded"): void
    connect(sigName: "load-error", callback: ((file: Gio.File, error: GLib.Error) => void)): number
    on(sigName: "load-error", callback: (file: Gio.File, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-error", callback: (file: Gio.File, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-error", callback: (file: Gio.File, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "load-error", file: Gio.File, error: GLib.Error): void
    connect(sigName: "source-added", callback: ((source: ServerSideSource) => void)): number
    on(sigName: "source-added", callback: (source: ServerSideSource) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-added", callback: (source: ServerSideSource) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-added", callback: (source: ServerSideSource) => void): NodeJS.EventEmitter
    emit(sigName: "source-added", source: ServerSideSource): void
    connect(sigName: "source-removed", callback: ((source: ServerSideSource) => void)): number
    on(sigName: "source-removed", callback: (source: ServerSideSource) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-removed", callback: (source: ServerSideSource) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-removed", callback: (source: ServerSideSource) => void): NodeJS.EventEmitter
    emit(sigName: "source-removed", source: ServerSideSource): void
    connect(sigName: "tweak-key-file", callback: ((keyFile: GLib.KeyFile, uid: string) => boolean)): number
    on(sigName: "tweak-key-file", callback: (keyFile: GLib.KeyFile, uid: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tweak-key-file", callback: (keyFile: GLib.KeyFile, uid: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tweak-key-file", callback: (keyFile: GLib.KeyFile, uid: string) => void): NodeJS.EventEmitter
    emit(sigName: "tweak-key-file", keyFile: GLib.KeyFile, uid: string): void
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
    connect(sigName: "quit-server", callback: ((code: DBusServerExitCode) => void)): number
    on(sigName: "quit-server", callback: (code: DBusServerExitCode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "quit-server", callback: (code: DBusServerExitCode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "quit-server", callback: (code: DBusServerExitCode) => void): NodeJS.EventEmitter
    emit(sigName: "quit-server", code: DBusServerExitCode): void
    connect(sigName: "run-server", callback: (() => DBusServerExitCode)): number
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
    constructor (config?: SourceRegistryServer_ConstructProps)
    _init (config?: SourceRegistryServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SourceRegistryServer
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface SubprocessFactory_ConstructProps extends GObject.Object_ConstructProps {
}
class SubprocessFactory {
    /* Properties of EBackend-1.2.EBackend.SubprocessFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.SubprocessFactory */
    callBackendsPrepareShutdown(): void
    getBackendsList(): Backend[]
    getRegistry(): EDataServer.SourceRegistry
    openBackend(connection: Gio.DBusConnection, uid: string, backendFactoryTypeName: string, moduleFilename: string, proxy: Gio.DBusInterfaceSkeleton, cancellable?: Gio.Cancellable | null): string
    refInitableBackend(uid: string, backendFactoryTypeName: string, moduleFilename: string, cancellable?: Gio.Cancellable | null): Backend | null
    setBackendCallbacks(backend: Backend, proxy: Gio.DBusInterfaceSkeleton): void
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
    constructor (config?: SubprocessFactory_ConstructProps)
    _init (config?: SubprocessFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static constructPath(): string
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface UserPrompter_ConstructProps extends GObject.Object_ConstructProps {
}
class UserPrompter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.UserPrompter */
    extensionPrompt(dialogName: string, inParameters?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    extensionPromptFinish(result: Gio.AsyncResult, outValues?: EDataServer.NamedParameters | null): number
    extensionPromptSync(dialogName: string, inParameters?: EDataServer.NamedParameters | null, outValues?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): number
    prompt(type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    promptFinish(result: Gio.AsyncResult): number
    promptSync(type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions?: string[] | null, cancellable?: Gio.Cancellable | null): number
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
    constructor (config?: UserPrompter_ConstructProps)
    _init (config?: UserPrompter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UserPrompter
    static $gtype: GObject.Type
}
interface UserPrompterServer_ConstructProps extends DBusServer_ConstructProps {
}
class UserPrompterServer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.UserPrompterServer */
    register(extension: EDataServer.Extension, dialogName: string): boolean
    response(promptId: number, response: number, extensionValues?: EDataServer.NamedParameters | null): void
    /* Methods of EBackend-1.2.EBackend.DBusServer */
    hold(): void
    loadModules(): void
    quit(code: DBusServerExitCode): void
    release(): void
    run(waitForClient: boolean): DBusServerExitCode
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
    /* Signals of EBackend-1.2.EBackend.UserPrompterServer */
    connect(sigName: "prompt", callback: ((promptId: number, type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions?: string[] | null) => void)): number
    on(sigName: "prompt", callback: (promptId: number, type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions?: string[] | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prompt", callback: (promptId: number, type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions?: string[] | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prompt", callback: (promptId: number, type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions?: string[] | null) => void): NodeJS.EventEmitter
    emit(sigName: "prompt", promptId: number, type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions?: string[] | null): void
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
    connect(sigName: "quit-server", callback: ((code: DBusServerExitCode) => void)): number
    on(sigName: "quit-server", callback: (code: DBusServerExitCode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "quit-server", callback: (code: DBusServerExitCode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "quit-server", callback: (code: DBusServerExitCode) => void): NodeJS.EventEmitter
    emit(sigName: "quit-server", code: DBusServerExitCode): void
    connect(sigName: "run-server", callback: (() => DBusServerExitCode)): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserPrompterServer_ConstructProps)
    _init (config?: UserPrompterServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UserPrompterServer
    static $gtype: GObject.Type
}
interface UserPrompterServerExtension_ConstructProps extends EDataServer.Extension_ConstructProps {
}
class UserPrompterServerExtension {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.UserPrompterServerExtension */
    prompt(promptId: number, dialogName: string, parameters?: EDataServer.NamedParameters | null): boolean
    response(promptId: number, response: number, values?: EDataServer.NamedParameters | null): void
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
    constructor (config?: UserPrompterServerExtension_ConstructProps)
    _init (config?: UserPrompterServerExtension_ConstructProps): void
    static $gtype: GObject.Type
}
interface WebDAVCollectionBackend_ConstructProps extends CollectionBackend_ConstructProps {
}
class WebDAVCollectionBackend {
    /* Properties of EBackend-1.2.EBackend.CollectionBackend */
    readonly proxyResolver: Gio.ProxyResolver
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly userPrompter: UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.WebDAVCollectionBackend */
    discoverSync(calendarUrl: string | null, contactsUrl: string | null, credentials: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): [ /* returnType */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags | null ]
    getResourceId(source: EDataServer.Source): string | null
    isCustomSource(source: EDataServer.Source): boolean
    /* Methods of EBackend-1.2.EBackend.CollectionBackend */
    authenticateChildren(credentials: EDataServer.NamedParameters): void
    claimAllResources(): EDataServer.Source[]
    createResource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createResourceFinish(result: Gio.AsyncResult): boolean
    createResourceSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    deleteResource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteResourceFinish(result: Gio.AsyncResult): boolean
    deleteResourceSync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean
    dupResourceId(childSource: EDataServer.Source): string
    freezePopulate(): boolean
    getCacheDir(): string
    getPartEnabled(parts: CollectionBackendParts): boolean
    getPopulateFrozen(): boolean
    isNewSource(source: EDataServer.Source): boolean
    listCalendarSources(): EDataServer.Source[]
    listContactsSources(): EDataServer.Source[]
    listMailSources(): EDataServer.Source[]
    newChild(resourceId: string): EDataServer.Source
    refProxyResolver(): Gio.ProxyResolver | null
    refServer(): SourceRegistryServer
    schedulePopulate(): void
    thawPopulate(): void
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
    /* Signals of EBackend-1.2.EBackend.CollectionBackend */
    connect(sigName: "child-added", callback: ((childSource: ServerSideSource) => void)): number
    on(sigName: "child-added", callback: (childSource: ServerSideSource) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (childSource: ServerSideSource) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (childSource: ServerSideSource) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", childSource: ServerSideSource): void
    connect(sigName: "child-removed", callback: ((childSource: ServerSideSource) => void)): number
    on(sigName: "child-removed", callback: (childSource: ServerSideSource) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (childSource: ServerSideSource) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (childSource: ServerSideSource) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", childSource: ServerSideSource): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: WebDAVCollectionBackend_ConstructProps)
    _init (config?: WebDAVCollectionBackend_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class BackendClass {
    /* Fields of EBackend-1.2.EBackend.BackendClass */
    readonly getDestinationAddress: (backend: Backend) => [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    readonly prepareShutdown: (backend: Backend) => void
    readonly authenticateSync: (backend: Backend, credentials: EDataServer.NamedParameters, outCertificatePem: string, outCertificateErrors: Gio.TlsCertificateFlags, cancellable?: Gio.Cancellable | null) => EDataServer.SourceAuthenticationResult
    static name: string
}
abstract class BackendFactoryClass {
    /* Fields of EBackend-1.2.EBackend.BackendFactoryClass */
    readonly getHashKey: (factory: BackendFactory) => string
    readonly newBackend: (factory: BackendFactory, source: EDataServer.Source) => Backend
    readonly eModule: object
    readonly shareSubprocess: boolean
    static name: string
}
class BackendFactoryPrivate {
    static name: string
}
class BackendPrivate {
    static name: string
}
abstract class CacheClass {
    /* Fields of EBackend-1.2.EBackend.CacheClass */
    readonly putLocked: (cache: Cache, uid: string, revision: string, object: string, otherColumns: CacheColumnValues, offlineState: OfflineState, isReplace: boolean, cancellable?: Gio.Cancellable | null) => boolean
    readonly removeLocked: (cache: Cache, uid: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly clearOfflineChangesLocked: (cache: Cache, cancellable?: Gio.Cancellable | null) => boolean
    readonly erase: (cache: Cache) => void
    readonly beforePut: (cache: Cache, uid: string, revision: string, object: string, otherColumns: CacheColumnValues, isReplace: boolean, cancellable?: Gio.Cancellable | null) => boolean
    readonly beforeRemove: (cache: Cache, uid: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly revisionChanged: (cache: Cache) => void
    static name: string
}
class CacheColumnInfo {
    /* Fields of EBackend-1.2.EBackend.CacheColumnInfo */
    readonly name: string
    readonly type: string
    readonly indexName: string
    /* Methods of EBackend-1.2.EBackend.CacheColumnInfo */
    copy(): CacheColumnInfo
    static name: string
    static new(name: string, type: string, indexName?: string | null): CacheColumnInfo
    constructor(name: string, type: string, indexName?: string | null)
    /* Static methods and pseudo-constructors */
    static new(name: string, type: string, indexName?: string | null): CacheColumnInfo
    static free(info?: object | null): void
}
class CacheColumnValues {
    /* Methods of EBackend-1.2.EBackend.CacheColumnValues */
    contains(name: string): boolean
    copy(): CacheColumnValues
    free(): void
    getSize(): number
    initIter(iter: GLib.HashTableIter): void
    lookup(name: string): string
    put(name: string, value?: string | null): void
    remove(name: string): boolean
    removeAll(): void
    take(name: string, value?: string | null): void
    takeValue(name: string, value?: string | null): void
    static name: string
    static new(): CacheColumnValues
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): CacheColumnValues
}
class CacheOfflineChange {
    /* Fields of EBackend-1.2.EBackend.CacheOfflineChange */
    readonly uid: string
    readonly revision: string
    readonly object: string
    readonly state: OfflineState
    /* Methods of EBackend-1.2.EBackend.CacheOfflineChange */
    copy(): CacheOfflineChange
    static name: string
    static new(uid: string, revision: string | null, object: string | null, state: OfflineState): CacheOfflineChange
    constructor(uid: string, revision: string | null, object: string | null, state: OfflineState)
    /* Static methods and pseudo-constructors */
    static new(uid: string, revision: string | null, object: string | null, state: OfflineState): CacheOfflineChange
    static free(change?: object | null): void
}
class CachePrivate {
    static name: string
}
abstract class CacheReaperClass {
    static name: string
}
abstract class CollectionBackendClass {
    /* Fields of EBackend-1.2.EBackend.CollectionBackendClass */
    readonly populate: (backend: CollectionBackend) => void
    readonly dupResourceId: (backend: CollectionBackend, childSource: EDataServer.Source) => string
    readonly childAdded: (backend: CollectionBackend, childSource: EDataServer.Source) => void
    readonly childRemoved: (backend: CollectionBackend, childSource: EDataServer.Source) => void
    readonly createResourceSync: (backend: CollectionBackend, source: EDataServer.Source, cancellable?: Gio.Cancellable | null) => boolean
    readonly createResource: (backend: CollectionBackend, source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly createResourceFinish: (backend: CollectionBackend, result: Gio.AsyncResult) => boolean
    readonly deleteResourceSync: (backend: CollectionBackend, source: EDataServer.Source, cancellable?: Gio.Cancellable | null) => boolean
    readonly deleteResource: (backend: CollectionBackend, source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly deleteResourceFinish: (backend: CollectionBackend, result: Gio.AsyncResult) => boolean
    static name: string
}
abstract class CollectionBackendFactoryClass {
    /* Fields of EBackend-1.2.EBackend.CollectionBackendFactoryClass */
    readonly prepareMail: (factory: CollectionBackendFactory, mailAccountSource: EDataServer.Source, mailIdentitySource: EDataServer.Source, mailTransportSource: EDataServer.Source) => void
    static name: string
}
class CollectionBackendFactoryPrivate {
    static name: string
}
class CollectionBackendPrivate {
    static name: string
}
abstract class DBusServerClass {
    /* Fields of EBackend-1.2.EBackend.DBusServerClass */
    readonly parentClass: GObject.ObjectClass
    readonly busName: string
    readonly moduleDirectory: string
    readonly busAcquired: (server: DBusServer, connection: Gio.DBusConnection) => void
    readonly busNameAcquired: (server: DBusServer, connection: Gio.DBusConnection) => void
    readonly busNameLost: (server: DBusServer, connection: Gio.DBusConnection) => void
    readonly runServer: (server: DBusServer) => DBusServerExitCode
    readonly quitServer: (server: DBusServer, code: DBusServerExitCode) => void
    readonly reserved: object[]
    static name: string
}
class DBusServerPrivate {
    static name: string
}
abstract class DataFactoryClass {
    /* Fields of EBackend-1.2.EBackend.DataFactoryClass */
    readonly parentClass: DBusServerClass
    readonly backendFactoryType: GObject.Type
    readonly factoryObjectPath: string
    readonly dataObjectPathPrefix: string
    readonly subprocessObjectPathPrefix: string
    readonly subprocessBusNamePrefix: string
    readonly getFactoryName: (backendFactory: BackendFactory) => string
    readonly completeOpen: (dataFactory: DataFactory, invocation: Gio.DBusMethodInvocation, objectPath: string, busName: string, extensionName: string) => void
    readonly createBackend: (dataFactory: DataFactory, backendFactory: BackendFactory, source: EDataServer.Source) => Backend
    readonly openBackend: (dataFactory: DataFactory, backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null) => string
    readonly reserved: object[]
    static name: string
}
class DataFactoryPrivate {
    static name: string
}
abstract class FileCacheClass {
    /* Fields of EBackend-1.2.EBackend.FileCacheClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class FileCachePrivate {
    static name: string
}
abstract class OAuth2SupportInterface {
    /* Fields of EBackend-1.2.EBackend.OAuth2SupportInterface */
    readonly getAccessTokenSync: (support: OAuth2Support, source: EDataServer.Source, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    readonly getAccessToken: (support: OAuth2Support, source: EDataServer.Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly getAccessTokenFinish: (support: OAuth2Support, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    static name: string
}
abstract class ServerSideSourceClass {
    /* Fields of EBackend-1.2.EBackend.ServerSideSourceClass */
    readonly parentClass: EDataServer.SourceClass
    static name: string
}
abstract class ServerSideSourceCredentialsProviderClass {
    /* Fields of EBackend-1.2.EBackend.ServerSideSourceCredentialsProviderClass */
    readonly parentClass: EDataServer.SourceCredentialsProviderClass
    static name: string
}
class ServerSideSourceCredentialsProviderPrivate {
    static name: string
}
class ServerSideSourcePrivate {
    static name: string
}
abstract class SourceRegistryServerClass {
    /* Fields of EBackend-1.2.EBackend.SourceRegistryServerClass */
    readonly parentClass: DataFactoryClass
    readonly loadError: (server: SourceRegistryServer, file: Gio.File, error: GLib.Error) => void
    readonly filesLoaded: (server: SourceRegistryServer) => void
    readonly sourceAdded: (server: SourceRegistryServer, source: EDataServer.Source) => void
    readonly sourceRemoved: (server: SourceRegistryServer, source: EDataServer.Source) => void
    readonly tweakKeyFile: (server: SourceRegistryServer, keyFile: GLib.KeyFile, uid: string) => boolean
    readonly reserved: object[]
    static name: string
}
class SourceRegistryServerPrivate {
    static name: string
}
abstract class SubprocessFactoryClass {
    /* Fields of EBackend-1.2.EBackend.SubprocessFactoryClass */
    readonly parentClass: GObject.ObjectClass
    readonly openData: (subprocessFactory: SubprocessFactory, backend: Backend, connection: Gio.DBusConnection, data?: object | null, cancellable?: Gio.Cancellable | null) => string
    readonly backendCreated: (subprocessFactory: SubprocessFactory, backend: Backend) => void
    readonly backendClosed: (subprocessFactory: SubprocessFactory, backend: Backend) => void
    static name: string
}
class SubprocessFactoryPrivate {
    static name: string
}
abstract class UserPrompterClass {
    /* Fields of EBackend-1.2.EBackend.UserPrompterClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
class UserPrompterPrivate {
    static name: string
}
abstract class UserPrompterServerClass {
    /* Fields of EBackend-1.2.EBackend.UserPrompterServerClass */
    readonly parentClass: DBusServerClass
    static name: string
}
abstract class UserPrompterServerExtensionClass {
    /* Fields of EBackend-1.2.EBackend.UserPrompterServerExtensionClass */
    readonly parentClass: EDataServer.ExtensionClass
    readonly registerDialogs: (extension: EDataServer.Extension, server: object) => void
    readonly prompt: (extension: UserPrompterServerExtension, promptId: number, dialogName: string, parameters?: EDataServer.NamedParameters | null) => boolean
    static name: string
}
class UserPrompterServerExtensionPrivate {
    static name: string
}
class UserPrompterServerPrivate {
    static name: string
}
abstract class WebDAVCollectionBackendClass {
    /* Fields of EBackend-1.2.EBackend.WebDAVCollectionBackendClass */
    readonly parentClass: CollectionBackendClass
    readonly getResourceId: (webdavBackend: WebDAVCollectionBackend, source: EDataServer.Source) => string | null
    readonly isCustomSource: (webdavBackend: WebDAVCollectionBackend, source: EDataServer.Source) => boolean
    static name: string
}
class WebDAVCollectionBackendPrivate {
    static name: string
}
}
export default EBackend;