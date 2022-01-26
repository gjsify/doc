/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Tracker-2.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Tracker {

enum NotifierEventType {
    CREATE,
    DELETE,
    UPDATE,
}
enum SparqlConnectionFlags {
    NONE,
    READONLY,
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
enum SparqlError {
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
enum NotifierFlags {
    NONE,
    QUERY_URN,
    QUERY_LOCATION,
    NOTIFY_UNEXTRACTED,
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
function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string
function sparqlEscapeUri(uri: string): string
function sparqlEscapeString(literal: string): string
function sparqlGetUuidUrn(): string
interface NamespaceManager_ConstructProps extends GObject.Object_ConstructProps {
}
class NamespaceManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-2.0.Tracker.NamespaceManager */
    addPrefix(prefix: string, ns: string): void
    expandUri(compactUri: string): string
    foreach(func: GLib.HFunc): void
    hasPrefix(prefix: string): boolean
    lookupPrefix(prefix: string): string
    printTurtle(): string
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
    constructor (config?: NamespaceManager_ConstructProps)
    _init (config?: NamespaceManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NamespaceManager
    static getDefault(): NamespaceManager
    static $gtype: GObject.Type
}
interface Notifier_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Tracker-2.0.Tracker.Notifier */
    classes?: string[]
}
class Notifier {
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Tracker-2.0.Tracker.Notifier */
    connect(sigName: "events", callback: ((events: NotifierEvent[]) => void)): number
    on(sigName: "events", callback: (events: NotifierEvent[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "events", callback: (events: NotifierEvent[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "events", callback: (events: NotifierEvent[]) => void): NodeJS.EventEmitter
    emit(sigName: "events", events: NotifierEvent[]): void
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
    constructor (config?: Notifier_ConstructProps)
    _init (config?: Notifier_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(classes: string[] | null, flags: NotifierFlags, cancellable?: Gio.Cancellable | null): Notifier
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Resource_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Tracker-2.0.Tracker.Resource */
    identifier?: string
}
class Resource {
    /* Properties of Tracker-2.0.Tracker.Resource */
    identifier: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-2.0.Tracker.Resource */
    addBoolean(propertyUri: string, value: boolean): void
    addDouble(propertyUri: string, value: number): void
    addGvalue(propertyUri: string, value: any): void
    addInt(propertyUri: string, value: number): void
    addInt64(propertyUri: string, value: number): void
    addRelation(propertyUri: string, resource: Resource): void
    addString(propertyUri: string, value: string): void
    addUri(propertyUri: string, value: string): void
    getFirstBoolean(propertyUri: string): boolean
    getFirstDouble(propertyUri: string): number
    getFirstInt(propertyUri: string): number
    getFirstInt64(propertyUri: string): number
    getFirstRelation(propertyUri: string): Resource
    getFirstString(propertyUri: string): string
    getFirstUri(propertyUri: string): string
    getIdentifier(): string
    getValues(propertyUri: string): any[]
    identifierCompareFunc(identifier: string): number
    printJsonld(namespaces?: NamespaceManager | null): string
    printSparqlUpdate(namespaces?: NamespaceManager | null, graphId?: string | null): string
    printTurtle(namespaces?: NamespaceManager | null): string
    setBoolean(propertyUri: string, value: boolean): void
    setDouble(propertyUri: string, value: number): void
    setGvalue(propertyUri: string, value: any): void
    setIdentifier(identifier?: string | null): void
    setInt(propertyUri: string, value: number): void
    setInt64(propertyUri: string, value: number): void
    setRelation(propertyUri: string, resource: Resource): void
    setString(propertyUri: string, value: string): void
    setUri(propertyUri: string, value: string): void
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
    connect(sigName: "notify::identifier", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identifier", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::identifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::identifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::identifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Resource_ConstructProps)
    _init (config?: Resource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(identifier: string): Resource
    static $gtype: GObject.Type
}
interface SparqlBuilder_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Tracker-2.0.Tracker.SparqlBuilder */
    length?: number
}
class SparqlBuilder {
    /* Properties of Tracker-2.0.Tracker.SparqlBuilder */
    readonly result: string
    length: number
    readonly state: any
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-2.0.Tracker.SparqlBuilder */
    insertOpen(graph?: string | null): void
    insertSilentOpen(graph?: string | null): void
    insertClose(): void
    deleteOpen(graph?: string | null): void
    deleteClose(): void
    graphOpen(graph: string): void
    graphClose(): void
    whereOpen(): void
    whereClose(): void
    subjectVariable(varName: string): void
    objectVariable(varName: string): void
    subjectIri(iri: string): void
    subject(s: string): void
    predicateIri(iri: string): void
    predicate(s: string): void
    objectIri(iri: string): void
    object(s: string): void
    objectString(literal: string): void
    objectUnvalidated(value: string): void
    objectBoolean(literal: boolean): void
    objectInt64(literal: number): void
    objectDate(literal: number): /* literal */ number
    objectDouble(literal: number): void
    objectBlankOpen(): void
    objectBlankClose(): void
    prepend(raw: string): void
    append(raw: string): void
    getResult(): string
    getLength(): number
    getState(): any
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
    connect(sigName: "notify::result", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::result", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SparqlBuilder_ConstructProps)
    _init (config?: SparqlBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static update(): SparqlBuilder
    static embeddedInsert(): SparqlBuilder
    static new(): SparqlBuilder
    static $gtype: GObject.Type
}
interface SparqlConnection_ConstructProps extends GObject.Object_ConstructProps {
}
class SparqlConnection {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-2.0.Tracker.SparqlConnection */
    query(sparql: string, cancellable?: Gio.Cancellable | null): any
    queryAsync(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(res: Gio.AsyncResult): any
    update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void
    updateAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateFinish(res: Gio.AsyncResult): void
    updateArrayAsync(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateArrayFinish(res: Gio.AsyncResult): any[] | null
    updateBlank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null
    updateBlankAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateBlankFinish(res: Gio.AsyncResult): GLib.Variant | null
    load(file: Gio.File, cancellable?: Gio.Cancellable | null): void
    loadAsync(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(res: Gio.AsyncResult): void
    statistics(cancellable?: Gio.Cancellable | null): any | null
    statisticsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    statisticsFinish(res: Gio.AsyncResult): any | null
    getNamespaceManager(): NamespaceManager | null
    queryStatement(sparql: string, cancellable?: Gio.Cancellable | null): any | null
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
    constructor (config?: SparqlConnection_ConstructProps)
    _init (config?: SparqlConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getFinish(res: Gio.AsyncResult): any
    static get(cancellable?: Gio.Cancellable | null): any
    static remoteNew(uriBase: string): any
    static localNew(flags: any, store: Gio.File, journal?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null): any
    static localNewAsync(flags: any, store: Gio.File, journal?: Gio.File | null, ontology?: Gio.File | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static localNewFinish(res: Gio.AsyncResult): any
    static setDomain(domain?: string | null): void
    static getDomain(): string | null
    static setDbusConnection(dbusConnection: Gio.DBusConnection): void
    static getDbusConnection(): Gio.DBusConnection | null
    static $gtype: GObject.Type
}
interface SparqlCursor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Tracker-2.0.Tracker.SparqlCursor */
    connection?: any
}
class SparqlCursor {
    /* Properties of Tracker-2.0.Tracker.SparqlCursor */
    connection: any
    readonly nColumns: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-2.0.Tracker.SparqlCursor */
    getValueType(column: number): any
    getVariableName(column: number): string | null
    getString(column: number): [ /* returnType */ string | null, /* length */ number ]
    next(cancellable?: Gio.Cancellable | null): boolean
    nextAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(res: Gio.AsyncResult): boolean
    rewind(): void
    close(): void
    getInteger(column: number): number
    getDouble(column: number): number
    getBoolean(column: number): boolean
    isBound(column: number): boolean
    getConnection(): any
    setConnection(value: any): void
    getNColumns(): number
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
    connect(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-columns", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SparqlCursor_ConstructProps)
    _init (config?: SparqlCursor_ConstructProps): void
    static $gtype: GObject.Type
}
interface SparqlStatement_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Tracker-2.0.Tracker.SparqlStatement */
    sparql?: string
    connection?: any
}
class SparqlStatement {
    /* Properties of Tracker-2.0.Tracker.SparqlStatement */
    sparql: string
    connection: any
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-2.0.Tracker.SparqlStatement */
    bindInt(name: string, value: number): void
    bindBoolean(name: string, value: boolean): void
    bindString(name: string, value: string): void
    bindDouble(name: string, value: number): void
    execute(cancellable?: Gio.Cancellable | null): any
    executeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(res: Gio.AsyncResult): any
    getSparql(): string
    setSparql(value: string): void
    getConnection(): any
    setConnection(value: any): void
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
    connect(sigName: "notify::sparql", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparql", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sparql", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sparql", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sparql", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SparqlStatement_ConstructProps)
    _init (config?: SparqlStatement_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class NamespaceManagerClass {
    /* Fields of Tracker-2.0.Tracker.NamespaceManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class NotifierClass {
    /* Fields of Tracker-2.0.Tracker.NotifierClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class NotifierEvent {
    /* Methods of Tracker-2.0.Tracker.NotifierEvent */
    getEventType(): NotifierEventType
    getId(): number
    getLocation(): string | null
    getType(): string
    getUrn(): string
    static name: string
}
abstract class ResourceClass {
    /* Fields of Tracker-2.0.Tracker.ResourceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SparqlBuilderClass {
    static name: string
}
class SparqlBuilderPrivate {
    static name: string
}
abstract class SparqlConnectionClass {
    /* Fields of Tracker-2.0.Tracker.SparqlConnectionClass */
    readonly query: (self: any, sparql: string, cancellable?: Gio.Cancellable | null) => any
    readonly queryAsync: (self: any, sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly queryFinish: (self: any, res: Gio.AsyncResult) => any
    readonly update: (self: any, sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => void
    readonly updateAsync: (self: any, sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly updateFinish: (self: any, res: Gio.AsyncResult) => void
    readonly updateArrayAsync: (self: any, sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly updateArrayFinish: (self: any, res: Gio.AsyncResult) => any[] | null
    readonly updateBlank: (self: any, sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => GLib.Variant | null
    readonly updateBlankAsync: (self: any, sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly updateBlankFinish: (self: any, res: Gio.AsyncResult) => GLib.Variant | null
    readonly load: (self: any, file: Gio.File, cancellable?: Gio.Cancellable | null) => void
    readonly loadAsync: (self: any, file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly loadFinish: (self: any, res: Gio.AsyncResult) => void
    readonly statistics: (self: any, cancellable?: Gio.Cancellable | null) => any | null
    readonly statisticsAsync: (self: any, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly statisticsFinish: (self: any, res: Gio.AsyncResult) => any | null
    readonly getNamespaceManager: (self: any) => NamespaceManager | null
    readonly queryStatement: (self: any, sparql: string, cancellable?: Gio.Cancellable | null) => any | null
    static name: string
}
class SparqlConnectionPrivate {
    static name: string
}
abstract class SparqlCursorClass {
    /* Fields of Tracker-2.0.Tracker.SparqlCursorClass */
    readonly getValueType: (self: any, column: number) => any
    readonly getVariableName: (self: any, column: number) => string | null
    readonly getString: (self: any, column: number) => [ /* returnType */ string | null, /* length */ number ]
    readonly next: (self: any, cancellable?: Gio.Cancellable | null) => boolean
    readonly nextAsync: (self: any, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly nextFinish: (self: any, res: Gio.AsyncResult) => boolean
    readonly rewind: (self: any) => void
    readonly close: (self: any) => void
    readonly getInteger: (self: any, column: number) => number
    readonly getDouble: (self: any, column: number) => number
    readonly getBoolean: (self: any, column: number) => boolean
    readonly isBound: (self: any, column: number) => boolean
    static name: string
}
class SparqlCursorPrivate {
    static name: string
}
abstract class SparqlStatementClass {
    /* Fields of Tracker-2.0.Tracker.SparqlStatementClass */
    readonly bindInt: (self: any, name: string, value: number) => void
    readonly bindBoolean: (self: any, name: string, value: boolean) => void
    readonly bindString: (self: any, name: string, value: string) => void
    readonly bindDouble: (self: any, name: string, value: number) => void
    readonly execute: (self: any, cancellable?: Gio.Cancellable | null) => any
    readonly executeAsync: (self: any, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly executeFinish: (self: any, res: Gio.AsyncResult) => any
    static name: string
}
class SparqlStatementPrivate {
    static name: string
}
}
export default Tracker;