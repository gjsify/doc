/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TrackerMiner-1.0
 */

import type Tracker from './Tracker-1.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GModule from './GModule-2.0';

export namespace TrackerMiner {

enum DecoratorError {
    EMPTY,
    PAUSED,
}
enum FilterPolicy {
    DENY,
    ACCEPT,
}
enum FilterType {
    FILE,
    DIRECTORY,
    PARENT_DIRECTORY,
}
enum MinerError {
    NAME_MISSING,
    NAME_UNAVAILABLE,
    PAUSED,
    PAUSED_ALREADY,
    INVALID_COOKIE,
}
enum MinerFSError {
    MINER_FS_ERROR_INIT,
}
enum NetworkType {
    NONE,
    UNKNOWN,
    GPRS,
    EDGE,
    TODO_3G,
    LAN,
}
enum DirectoryFlags {
    NONE,
    RECURSE,
    CHECK_MTIME,
    MONITOR,
    IGNORE,
    PRESERVE,
    PRIORITY,
    NO_STAT,
    CHECK_DELETED,
}
const MINER_DBUS_INTERFACE: string
const MINER_DBUS_NAME_PREFIX: string
const MINER_DBUS_PATH_PREFIX: string
const MINER_ERROR_DOMAIN: string
class DataProvider {
    /* Methods of TrackerMiner-1.0.TrackerMiner.DataProvider */
    begin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null): Enumerator
    beginAsync(url: Gio.File, attributes: string, flags: DirectoryFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    beginFinish(result: Gio.AsyncResult): Enumerator
    end(enumerator: Enumerator, cancellable?: Gio.Cancellable | null): boolean
    endAsync(enumerator: Enumerator, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    endFinish(result: Gio.AsyncResult): boolean
    static name: string
}
class Enumerator {
    /* Methods of TrackerMiner-1.0.TrackerMiner.Enumerator */
    next(cancellable?: Gio.Cancellable | null): object | null
    nextAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(result: Gio.AsyncResult): object | null
    static name: string
}
interface Decorator_ConstructProps extends Miner_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.Decorator */
    classNames?: string[]
    commitBatchSize?: number
    dataSource?: string
    priorityRdfTypes?: string[]
}
class Decorator {
    /* Properties of TrackerMiner-1.0.TrackerMiner.Decorator */
    classNames: string[]
    commitBatchSize: number
    priorityRdfTypes: string[]
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspectionHandler: object
    introspectionXml: string
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Miner */
    readonly parentInstance: GObject.Object
    readonly priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.Decorator */
    deleteId(id: number): void
    getClassNames(): string[]
    getDataSource(): string
    getNItems(): number
    next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(result: Gio.AsyncResult): DecoratorInfo
    prependId(id: number, classNameId: number): void
    setPriorityRdfTypes(rdfTypes: string): void
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    getConnection(): Tracker.SparqlConnection
    getDbusConnection(): Gio.DBusConnection
    getDbusFullName(): string
    getDbusFullPath(): string
    getNPauseReasons(): number
    ignoreNextUpdate(urls: string[]): void
    isPaused(): boolean
    isStarted(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
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
    /* Signals of TrackerMiner-1.0.TrackerMiner.Decorator */
    connect(sigName: "finished", callback: (() => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    connect(sigName: "items-available", callback: (() => void)): number
    on(sigName: "items-available", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-available", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-available", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "items-available"): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: ((urls: string[]) => void)): number
    on(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (urls: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", urls: string[]): void
    connect(sigName: "paused", callback: (() => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: ((status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    connect(sigName: "resumed", callback: (() => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (() => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (() => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::class-names", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::commit-batch-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority-rdf-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Decorator_ConstructProps)
    _init (config?: Decorator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DecoratorFS_ConstructProps extends Decorator_ConstructProps {
}
class DecoratorFS {
    /* Properties of TrackerMiner-1.0.TrackerMiner.Decorator */
    classNames: string[]
    commitBatchSize: number
    priorityRdfTypes: string[]
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspectionHandler: object
    introspectionXml: string
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Decorator */
    readonly parentInstance: Miner
    readonly priv: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.DecoratorFS */
    prependFile(file: Gio.File): number
    /* Methods of TrackerMiner-1.0.TrackerMiner.Decorator */
    deleteId(id: number): void
    getClassNames(): string[]
    getDataSource(): string
    getNItems(): number
    next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(result: Gio.AsyncResult): DecoratorInfo
    prependId(id: number, classNameId: number): void
    setPriorityRdfTypes(rdfTypes: string): void
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    getConnection(): Tracker.SparqlConnection
    getDbusConnection(): Gio.DBusConnection
    getDbusFullName(): string
    getDbusFullPath(): string
    getNPauseReasons(): number
    ignoreNextUpdate(urls: string[]): void
    isPaused(): boolean
    isStarted(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
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
    /* Signals of TrackerMiner-1.0.TrackerMiner.Decorator */
    connect(sigName: "finished", callback: (() => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    connect(sigName: "items-available", callback: (() => void)): number
    on(sigName: "items-available", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-available", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-available", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "items-available"): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: ((urls: string[]) => void)): number
    on(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (urls: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", urls: string[]): void
    connect(sigName: "paused", callback: (() => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: ((status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    connect(sigName: "resumed", callback: (() => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (() => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (() => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::class-names", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::commit-batch-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority-rdf-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DecoratorFS_ConstructProps)
    _init (config?: DecoratorFS_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface IndexingTree_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    filterHidden?: boolean
    root?: Gio.File
}
class IndexingTree {
    /* Properties of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    filterHidden: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    add(directory: Gio.File, flags: DirectoryFlags): void
    addFilter(filter: FilterType, globString: string): void
    clearFilters(type: FilterType): void
    fileIsIndexable(file: Gio.File, fileType: Gio.FileType): boolean
    fileIsRoot(file: Gio.File): boolean
    fileMatchesFilter(type: FilterType, file: Gio.File): boolean
    getDefaultPolicy(filter: FilterType): FilterPolicy
    getFilterHidden(): boolean
    getMasterRoot(): Gio.File
    getRoot(file: Gio.File): [ /* returnType */ Gio.File, /* directoryFlags */ DirectoryFlags ]
    listRoots(): Gio.File[]
    notifyUpdate(file: Gio.File, recursive: boolean): boolean
    parentIsIndexable(parent: Gio.File, children: Gio.File[]): boolean
    remove(directory: Gio.File): void
    setDefaultPolicy(filter: FilterType, policy: FilterPolicy): void
    setFilterHidden(filterHidden: boolean): void
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
    /* Signals of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    connect(sigName: "child-updated", callback: ((root: Gio.File, child: Gio.File) => void)): number
    on(sigName: "child-updated", callback: (root: Gio.File, child: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-updated", callback: (root: Gio.File, child: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-updated", callback: (root: Gio.File, child: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "child-updated", root: Gio.File, child: Gio.File): void
    connect(sigName: "directory-added", callback: ((directory: Gio.File) => void)): number
    on(sigName: "directory-added", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-added", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-added", callback: (directory: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "directory-added", directory: Gio.File): void
    connect(sigName: "directory-removed", callback: ((directory: Gio.File) => void)): number
    on(sigName: "directory-removed", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-removed", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-removed", callback: (directory: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "directory-removed", directory: Gio.File): void
    connect(sigName: "directory-updated", callback: ((directory: Gio.File) => void)): number
    on(sigName: "directory-updated", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-updated", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-updated", callback: (directory: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "directory-updated", directory: Gio.File): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter-hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IndexingTree_ConstructProps)
    _init (config?: IndexingTree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IndexingTree
    static newWithRoot(root: Gio.File): IndexingTree
    static $gtype: GObject.Type
}
interface Miner_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspectionHandler?: object
    introspectionXml?: string
    name?: string
    progress?: number
    remainingTime?: number
    status?: string
}
class Miner {
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspectionHandler: object
    introspectionXml: string
    progress: number
    remainingTime: number
    status: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    getConnection(): Tracker.SparqlConnection
    getDbusConnection(): Gio.DBusConnection
    getDbusFullName(): string
    getDbusFullPath(): string
    getNPauseReasons(): number
    ignoreNextUpdate(urls: string[]): void
    isPaused(): boolean
    isStarted(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
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
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: ((urls: string[]) => void)): number
    on(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (urls: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", urls: string[]): void
    connect(sigName: "paused", callback: (() => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: ((status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    connect(sigName: "resumed", callback: (() => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (() => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (() => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Miner_ConstructProps)
    _init (config?: Miner_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface MinerFS_ConstructProps extends Miner_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.MinerFS */
    dataProvider?: DataProvider
    initialCrawling?: boolean
    mtimeChecking?: boolean
    processingPoolReadyLimit?: number
    processingPoolWaitLimit?: number
    root?: Gio.File
    throttle?: number
}
class MinerFS {
    /* Properties of TrackerMiner-1.0.TrackerMiner.MinerFS */
    initialCrawling: boolean
    mtimeChecking: boolean
    processingPoolReadyLimit: number
    processingPoolWaitLimit: number
    throttle: number
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspectionHandler: object
    introspectionXml: string
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Miner */
    readonly parentInstance: GObject.Object
    readonly priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.MinerFS */
    addDirectoryWithoutParent(file: Gio.File): void
    checkDirectory(file: Gio.File, checkParents: boolean): void
    checkDirectoryWithPriority(file: Gio.File, priority: number, checkParents: boolean): void
    checkFile(file: Gio.File, checkParents: boolean): void
    checkFileWithPriority(file: Gio.File, priority: number, checkParents: boolean): void
    directoryAdd(file: Gio.File, recurse: boolean): void
    directoryRemove(file: Gio.File): boolean
    directoryRemoveFull(file: Gio.File): boolean
    fileNotify(file: Gio.File, error: GLib.Error): void
    forceMtimeChecking(directory: Gio.File): void
    forceRecheck(): void
    getDataProvider(): DataProvider
    getIndexingTree(): IndexingTree
    getInitialCrawling(): boolean
    getMtimeChecking(): boolean
    getParentUrn(file: Gio.File): string | null
    getThrottle(): number
    getUrn(file: Gio.File): string | null
    hasItemsToProcess(): boolean
    queryUrn(file: Gio.File): string
    setInitialCrawling(doInitialCrawling: boolean): void
    setMtimeChecking(mtimeChecking: boolean): void
    setThrottle(throttle: number): void
    writebackFile(file: Gio.File, rdfTypes: string[], results: any[]): void
    writebackNotify(file: Gio.File, error: GLib.Error): void
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    getConnection(): Tracker.SparqlConnection
    getDbusConnection(): Gio.DBusConnection
    getDbusFullName(): string
    getDbusFullPath(): string
    getNPauseReasons(): number
    ignoreNextUpdate(urls: string[]): void
    isPaused(): boolean
    isStarted(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
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
    /* Signals of TrackerMiner-1.0.TrackerMiner.MinerFS */
    connect(sigName: "finished", callback: ((elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void)): number
    on(sigName: "finished", callback: (elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: (elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: (elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void): NodeJS.EventEmitter
    emit(sigName: "finished", elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number): void
    connect(sigName: "finished-root", callback: ((file: Gio.File) => void)): number
    on(sigName: "finished-root", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished-root", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished-root", callback: (file: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "finished-root", file: Gio.File): void
    connect(sigName: "ignore-next-update-file", callback: ((file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    on(sigName: "ignore-next-update-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    connect(sigName: "process-file", callback: ((file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    on(sigName: "process-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void): NodeJS.EventEmitter
    emit(sigName: "process-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    connect(sigName: "process-file-attributes", callback: ((file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    on(sigName: "process-file-attributes", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-file-attributes", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-file-attributes", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void): NodeJS.EventEmitter
    emit(sigName: "process-file-attributes", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    connect(sigName: "remove-file", callback: ((file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => boolean)): number
    on(sigName: "remove-file", callback: (file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove-file", callback: (file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove-file", callback: (file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => void): NodeJS.EventEmitter
    emit(sigName: "remove-file", file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder): void
    connect(sigName: "writeback-file", callback: ((file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null) => boolean)): number
    on(sigName: "writeback-file", callback: (file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "writeback-file", callback: (file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "writeback-file", callback: (file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null) => void): NodeJS.EventEmitter
    emit(sigName: "writeback-file", file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: ((urls: string[]) => void)): number
    on(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (urls: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", urls: string[]): void
    connect(sigName: "paused", callback: (() => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: ((status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    connect(sigName: "resumed", callback: (() => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (() => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (() => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::initial-crawling", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-crawling", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::initial-crawling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::initial-crawling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::initial-crawling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtime-checking", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtime-checking", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtime-checking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtime-checking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtime-checking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-pool-ready-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-ready-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-pool-ready-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-pool-ready-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-pool-ready-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-pool-wait-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-wait-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-pool-wait-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-pool-wait-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-pool-wait-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::throttle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::throttle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::throttle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::throttle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MinerFS_ConstructProps)
    _init (config?: MinerFS_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface MinerOnline_ConstructProps extends Miner_ConstructProps {
}
class MinerOnline {
    /* Properties of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    readonly networkType: NetworkType
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspectionHandler: object
    introspectionXml: string
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Miner */
    readonly parentInstance: GObject.Object
    readonly priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    getNetworkType(): NetworkType
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    getConnection(): Tracker.SparqlConnection
    getDbusConnection(): Gio.DBusConnection
    getDbusFullName(): string
    getDbusFullPath(): string
    getNPauseReasons(): number
    ignoreNextUpdate(urls: string[]): void
    isPaused(): boolean
    isStarted(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
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
    /* Signals of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    connect(sigName: "connected", callback: ((type: NetworkType) => boolean)): number
    on(sigName: "connected", callback: (type: NetworkType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connected", callback: (type: NetworkType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connected", callback: (type: NetworkType) => void): NodeJS.EventEmitter
    emit(sigName: "connected", type: NetworkType): void
    connect(sigName: "disconnected", callback: (() => void)): number
    on(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disconnected"): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: ((urls: string[]) => void)): number
    on(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (urls: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", urls: string[]): void
    connect(sigName: "paused", callback: (() => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: ((status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    connect(sigName: "resumed", callback: (() => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (() => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (() => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::network-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MinerOnline_ConstructProps)
    _init (config?: MinerOnline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class DataProviderIface {
    /* Fields of TrackerMiner-1.0.TrackerMiner.DataProviderIface */
    readonly gIface: GObject.TypeInterface
    readonly begin: (dataProvider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null) => Enumerator
    readonly beginAsync: (dataProvider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly beginFinish: (dataProvider: DataProvider, result: Gio.AsyncResult) => Enumerator
    readonly end: (dataProvider: DataProvider, enumerator: Enumerator, cancellable?: Gio.Cancellable | null) => boolean
    readonly endAsync: (dataProvider: DataProvider, enumerator: Enumerator, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly endFinish: (dataProvider: DataProvider, result: Gio.AsyncResult) => boolean
    static name: string
}
abstract class DecoratorClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.DecoratorClass */
    readonly parentClass: MinerClass
    readonly itemsAvailable: (decorator: Decorator) => void
    readonly finished: (decorator: Decorator) => void
    readonly padding: object[]
    static name: string
}
abstract class DecoratorFSClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.DecoratorFSClass */
    readonly parentClass: DecoratorClass
    readonly padding: object[]
    static name: string
}
class DecoratorInfo {
    /* Methods of TrackerMiner-1.0.TrackerMiner.DecoratorInfo */
    getMimetype(): string
    getSparql(): Tracker.SparqlBuilder
    getTask(): Gio.Task
    getUrl(): string
    getUrn(): string
    ref(): DecoratorInfo
    unref(): void
    static name: string
}
abstract class EnumeratorIface {
    /* Fields of TrackerMiner-1.0.TrackerMiner.EnumeratorIface */
    readonly gIface: GObject.TypeInterface
    readonly next: (enumerator: Enumerator, cancellable?: Gio.Cancellable | null) => object | null
    readonly nextAsync: (enumerator: Enumerator, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly nextFinish: (enumerator: Enumerator, result: Gio.AsyncResult) => object | null
    static name: string
}
abstract class IndexingTreeClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.IndexingTreeClass */
    readonly parentClass: GObject.ObjectClass
    readonly directoryAdded: (indexingTree: IndexingTree, directory: Gio.File) => void
    readonly directoryRemoved: (indexingTree: IndexingTree, directory: Gio.File) => void
    readonly directoryUpdated: (indexingTree: IndexingTree, directory: Gio.File) => void
    readonly childUpdated: (indexingTree: IndexingTree, root: Gio.File, child: Gio.File) => void
    readonly padding: object[]
    static name: string
}
abstract class MinerClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.MinerClass */
    readonly parentClass: GObject.ObjectClass
    readonly started: (miner: Miner) => void
    readonly stopped: (miner: Miner) => void
    readonly paused: (miner: Miner) => void
    readonly resumed: (miner: Miner) => void
    readonly progress: (miner: Miner, status: string, progress: number) => void
    readonly ignoreNextUpdate: (miner: Miner, urls: string[]) => void
    readonly padding: object[]
    static name: string
}
abstract class MinerFSClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.MinerFSClass */
    readonly parent: MinerClass
    readonly processFile: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    readonly ignoreNextUpdateFile: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    readonly finished: (fs: MinerFS, elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void
    readonly processFileAttributes: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    readonly finishedRoot: (fs: MinerFS, root: Gio.File, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void
    readonly removeFile: (fs: MinerFS, file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => boolean
    readonly padding: object[]
    static name: string
}
class MinerFSPrivate {
    static name: string
}
abstract class MinerOnlineClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.MinerOnlineClass */
    readonly parentClass: MinerClass
    readonly connected: (miner: MinerOnline, network: NetworkType) => boolean
    readonly disconnected: (miner: MinerOnline) => void
    readonly padding: object[]
    static name: string
}
class MinerPrivate {
    static name: string
}
}
export default TrackerMiner;