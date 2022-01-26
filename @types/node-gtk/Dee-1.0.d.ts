/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Dee-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Dee {

enum ICUError {
    BAD_RULE,
    BAD_ID,
    UNKNOWN,
}
enum SharedModelAccessMode {
    WORLD_WRITABLE,
    LEADER_WRITABLE,
}
enum SharedModelError {
    SHARED_MODEL_ERROR_LEADER_INVALIDATED,
}
enum SharedModelFlushMode {
    AUTOMATIC,
    MANUAL,
}
enum TransactionError {
    CONCURRENT_MODIFICATION,
    COMMITTED,
}
enum TermMatchFlag {
    EXACT,
    PREFIX,
}
const PEER_DBUS_IFACE: string
const SEQUENCE_MODEL_DBUS_IFACE: string
const SHARED_MODEL_DBUS_IFACE: string
function filterNew(mapFunc: FilterMapFunc, mapNotify: FilterMapNotify): /* outFilter */ Filter
function filterNewCollator(column: number): /* outFilter */ Filter
function filterNewCollatorDesc(column: number): /* outFilter */ Filter
function filterNewForAnyColumn(column: number, value: GLib.Variant): /* outFilter */ Filter
function filterNewForKeyColumn(column: number, key: string): /* outFilter */ Filter
function filterNewRegex(column: number, regex: GLib.Regex): /* outFilter */ Filter
function filterNewSort(cmpRow: CompareRowFunc): /* outFilter */ Filter
function icuErrorQuark(): GLib.Quark
function modelReaderNew(readerFunc: ModelReaderFunc): /* outReader */ ModelReader
function modelReaderNewForInt32Column(column: number): /* outReader */ ModelReader
function modelReaderNewForStringColumn(column: number): /* outReader */ ModelReader
function modelReaderNewForUint32Column(column: number): /* outReader */ ModelReader
function resourceManagerGetDefault(): ResourceManager
function serializableParse(data: GLib.Variant, type: GObject.Type): GObject.Object
function serializableParseExternal(data: GLib.Variant): GObject.Object
interface CollatorFunc {
    (input: string): string
}
interface CompareRowFunc {
    (row1: GLib.Variant[], row2: GLib.Variant[]): number
}
interface CompareRowSizedFunc {
    (row1: GLib.Variant[], row2: GLib.Variant[]): number
}
interface FilterMapFunc {
    (origModel: Model, filterModel: FilterModel): void
}
interface FilterMapNotify {
    (origModel: Model, origIter: ModelIter, filterModel: FilterModel): boolean
}
interface IndexIterFunc {
    (key: string, rows: ResultSet): boolean
}
interface ModelReaderFunc {
    (model: Model, iter: ModelIter): string
}
interface SerializableParseFunc {
    (data: GLib.Variant): GObject.Object
}
interface TermFilterFunc {
    (termsIn: TermList, termsOut: TermList): void
}
class Model {
    /* Methods of Dee-1.0.Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Signals of Dee-1.0.Dee.Model */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    static name: string
}
class ResourceManager {
    /* Methods of Dee-1.0.Dee.ResourceManager */
    load(resourceName: string): GObject.Object
    store(resource: Serializable, resourceName: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getDefault(): ResourceManager
}
class ResultSet {
    /* Methods of Dee-1.0.Dee.ResultSet */
    getModel(): Model
    getNRows(): number
    hasNext(): boolean
    next(): ModelIter
    peek(): ModelIter
    seek(pos: number): void
    tell(): number
    static name: string
}
class Serializable {
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
}
interface Analyzer_ConstructProps extends GObject.Object_ConstructProps {
}
class Analyzer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Analyzer */
    addTermFilter(filterFunc: TermFilterFunc): void
    analyze(data: string, termsOut?: TermList | null, colkeysOut?: TermList | null): void
    collateCmp(key1: string, key2: string): number
    collateKey(data: string): string
    tokenize(data: string, termsOut: TermList): void
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
    constructor (config?: Analyzer_ConstructProps)
    _init (config?: Analyzer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Analyzer
    static collateCmpFunc(key1: string, key2: string, analyzer?: object | null): number
    static $gtype: GObject.Type
}
interface Client_ConstructProps extends Peer_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.Client */
    busAddress?: string
}
class Client {
    /* Properties of Dee-1.0.Dee.Peer */
    readonly swarmLeader: string
    swarmName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Peer */
    getConnections(): Gio.DBusConnection[]
    getSwarmLeader(): string
    getSwarmName(): string
    isSwarmLeader(): boolean
    isSwarmOwner(): boolean
    listPeers(): string[]
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
    /* Signals of Dee-1.0.Dee.Peer */
    connect(sigName: "connection-acquired", callback: ((object: Gio.DBusConnection) => void)): number
    on(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-acquired", object: Gio.DBusConnection): void
    connect(sigName: "connection-closed", callback: ((connection: Gio.DBusConnection) => void)): number
    on(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-closed", connection: Gio.DBusConnection): void
    connect(sigName: "peer-found", callback: ((name: string) => void)): number
    on(sigName: "peer-found", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "peer-found", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "peer-found", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "peer-found", name: string): void
    connect(sigName: "peer-lost", callback: ((name: string) => void)): number
    on(sigName: "peer-lost", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "peer-lost", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "peer-lost", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "peer-lost", name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::swarm-leader", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(swarmName: string): Client
    /* Function overloads */
    static new(swarmName: string): Client
    static newForAddress(swarmName: string, busAddress: string): Client
    static $gtype: GObject.Type
}
interface FileResourceManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.FileResourceManager */
    primaryPath?: string
}
class FileResourceManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.FileResourceManager */
    addSearchPath(path: string): void
    getPrimaryPath(): string
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
    /* Methods of Dee-1.0.Dee.ResourceManager */
    load(resourceName: string): GObject.Object
    store(resource: Serializable, resourceName: string): boolean
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
    constructor (config?: FileResourceManager_ConstructProps)
    _init (config?: FileResourceManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(primaryPath: string): FileResourceManager
    static getDefault(): ResourceManager
    static $gtype: GObject.Type
}
interface FilterModel_ConstructProps extends ProxyModel_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.FilterModel */
    filter?: Filter
}
class FilterModel {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.FilterModel */
    appendIter(iter: ModelIter): ModelIter
    contains(iter: ModelIter): boolean
    insertIter(iter: ModelIter, pos: number): ModelIter
    insertIterBefore(iter: ModelIter, pos: ModelIter): ModelIter
    insertIterWithOriginalOrder(iter: ModelIter): ModelIter
    prependIter(iter: ModelIter): ModelIter
    /* Methods of Dee-1.0.Dee.SerializableModel */
    getSeqnum(): number
    incSeqnum(): number
    setSeqnum(seqnum: number): void
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
    /* Methods of Dee-1.0.Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee-1.0.Dee.Model */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilterModel_ConstructProps)
    _init (config?: FilterModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(origModel: Model, filter: Filter): FilterModel
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface GListResultSet_ConstructProps extends GObject.Object_ConstructProps {
}
class GListResultSet {
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
    /* Methods of Dee-1.0.Dee.ResultSet */
    getModel(): Model
    getNRows(): number
    hasNext(): boolean
    next(): ModelIter
    peek(): ModelIter
    seek(pos: number): void
    tell(): number
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
    constructor (config?: GListResultSet_ConstructProps)
    _init (config?: GListResultSet_ConstructProps): void
    static $gtype: GObject.Type
}
interface HashIndex_ConstructProps extends Index_ConstructProps {
}
class HashIndex {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Index */
    foreach(startTerm: string, func: IndexIterFunc): void
    getAnalyzer(): Analyzer
    getModel(): Model
    getNRows(): number
    getNRowsForTerm(term: string): number
    getNTerms(): number
    getReader(): ModelReader
    getSupportedTermMatchFlags(): number
    lookup(term: string, flags: TermMatchFlag): ResultSet
    lookupOne(term: string): ModelIter
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
    constructor (config?: HashIndex_ConstructProps)
    _init (config?: HashIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(model: Model, analyzer: Analyzer, reader: ModelReader): HashIndex
    static $gtype: GObject.Type
}
interface Index_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.Index */
    analyzer?: Analyzer
    model?: Model
    reader?: ModelReader
}
class Index {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Index */
    foreach(startTerm: string, func: IndexIterFunc): void
    getAnalyzer(): Analyzer
    getModel(): Model
    getNRows(): number
    getNRowsForTerm(term: string): number
    getNTerms(): number
    getReader(): ModelReader
    getSupportedTermMatchFlags(): number
    lookup(term: string, flags: TermMatchFlag): ResultSet
    lookupOne(term: string): ModelIter
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
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    static $gtype: GObject.Type
}
interface Peer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.Peer */
    swarmName?: string
    swarmOwner?: boolean
}
class Peer {
    /* Properties of Dee-1.0.Dee.Peer */
    readonly swarmLeader: string
    swarmName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Peer */
    getConnections(): Gio.DBusConnection[]
    getSwarmLeader(): string
    getSwarmName(): string
    isSwarmLeader(): boolean
    isSwarmOwner(): boolean
    listPeers(): string[]
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
    /* Signals of Dee-1.0.Dee.Peer */
    connect(sigName: "connection-acquired", callback: ((object: Gio.DBusConnection) => void)): number
    on(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-acquired", object: Gio.DBusConnection): void
    connect(sigName: "connection-closed", callback: ((connection: Gio.DBusConnection) => void)): number
    on(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-closed", connection: Gio.DBusConnection): void
    connect(sigName: "peer-found", callback: ((name: string) => void)): number
    on(sigName: "peer-found", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "peer-found", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "peer-found", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "peer-found", name: string): void
    connect(sigName: "peer-lost", callback: ((name: string) => void)): number
    on(sigName: "peer-lost", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "peer-lost", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "peer-lost", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "peer-lost", name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::swarm-leader", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Peer_ConstructProps)
    _init (config?: Peer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(swarmName: string): Peer
    static $gtype: GObject.Type
}
interface ProxyModel_ConstructProps extends SerializableModel_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.ProxyModel */
    backEnd?: Model
    inheritSeqnums?: boolean
    proxySignals?: boolean
}
class ProxyModel {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.SerializableModel */
    getSeqnum(): number
    incSeqnum(): number
    setSeqnum(seqnum: number): void
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
    /* Methods of Dee-1.0.Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee-1.0.Dee.Model */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProxyModel_ConstructProps)
    _init (config?: ProxyModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface SequenceModel_ConstructProps extends SerializableModel_ConstructProps {
}
class SequenceModel {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.SerializableModel */
    getSeqnum(): number
    incSeqnum(): number
    setSeqnum(seqnum: number): void
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
    /* Methods of Dee-1.0.Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee-1.0.Dee.Model */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SequenceModel_ConstructProps)
    _init (config?: SequenceModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SequenceModel
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface SerializableModel_ConstructProps extends GObject.Object_ConstructProps {
}
class SerializableModel {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.SerializableModel */
    getSeqnum(): number
    incSeqnum(): number
    setSeqnum(seqnum: number): void
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
    /* Methods of Dee-1.0.Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee-1.0.Dee.Model */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SerializableModel_ConstructProps)
    _init (config?: SerializableModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface Server_ConstructProps extends Peer_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.Server */
    busAddress?: string
    sameUserOnly?: boolean
}
class Server {
    /* Properties of Dee-1.0.Dee.Peer */
    readonly swarmLeader: string
    swarmName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Server */
    getClientAddress(): string
    /* Methods of Dee-1.0.Dee.Peer */
    getConnections(): Gio.DBusConnection[]
    getSwarmLeader(): string
    getSwarmName(): string
    isSwarmLeader(): boolean
    isSwarmOwner(): boolean
    listPeers(): string[]
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
    /* Signals of Dee-1.0.Dee.Peer */
    connect(sigName: "connection-acquired", callback: ((object: Gio.DBusConnection) => void)): number
    on(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-acquired", callback: (object: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-acquired", object: Gio.DBusConnection): void
    connect(sigName: "connection-closed", callback: ((connection: Gio.DBusConnection) => void)): number
    on(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-closed", callback: (connection: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-closed", connection: Gio.DBusConnection): void
    connect(sigName: "peer-found", callback: ((name: string) => void)): number
    on(sigName: "peer-found", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "peer-found", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "peer-found", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "peer-found", name: string): void
    connect(sigName: "peer-lost", callback: ((name: string) => void)): number
    on(sigName: "peer-lost", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "peer-lost", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "peer-lost", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "peer-lost", name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::swarm-leader", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-leader", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-leader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swarm-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swarm-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swarm-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(swarmName: string): Server
    /* Function overloads */
    static new(swarmName: string): Server
    static newForAddress(swarmName: string, busAddress: string): Server
    static busAddressForName(name: string, includeUsername: boolean): string
    static $gtype: GObject.Type
}
interface SharedModel_ConstructProps extends ProxyModel_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.SharedModel */
    accessMode?: SharedModelAccessMode
    flushMode?: SharedModelFlushMode
    peer?: Peer
}
class SharedModel {
    /* Properties of Dee-1.0.Dee.SharedModel */
    flushMode: SharedModelFlushMode
    readonly synchronized: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.SharedModel */
    flushRevisionQueue(): number
    flushRevisionQueueSync(): number
    getFlushMode(): SharedModelFlushMode
    getPeer(): Peer
    getSwarmName(): string
    isLeader(): boolean
    isSynchronized(): boolean
    setFlushMode(mode: SharedModelFlushMode): void
    /* Methods of Dee-1.0.Dee.SerializableModel */
    getSeqnum(): number
    incSeqnum(): number
    setSeqnum(seqnum: number): void
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
    /* Methods of Dee-1.0.Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Signals of Dee-1.0.Dee.SharedModel */
    connect(sigName: "begin-transaction", callback: ((beginSeqnum: number, endSeqnum: number) => void)): number
    on(sigName: "begin-transaction", callback: (beginSeqnum: number, endSeqnum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "begin-transaction", callback: (beginSeqnum: number, endSeqnum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "begin-transaction", callback: (beginSeqnum: number, endSeqnum: number) => void): NodeJS.EventEmitter
    emit(sigName: "begin-transaction", beginSeqnum: number, endSeqnum: number): void
    connect(sigName: "end-transaction", callback: ((beginSeqnum: number, endSeqnum: number) => void)): number
    on(sigName: "end-transaction", callback: (beginSeqnum: number, endSeqnum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-transaction", callback: (beginSeqnum: number, endSeqnum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-transaction", callback: (beginSeqnum: number, endSeqnum: number) => void): NodeJS.EventEmitter
    emit(sigName: "end-transaction", beginSeqnum: number, endSeqnum: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee-1.0.Dee.Model */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: "notify::flush-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flush-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flush-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flush-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::synchronized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::synchronized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SharedModel_ConstructProps)
    _init (config?: SharedModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): SharedModel
    static newForPeer(peer: Peer): SharedModel
    static newWithBackEnd(name: string, backEnd: Model): SharedModel
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface TermList_ConstructProps extends GObject.Object_ConstructProps {
}
class TermList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.TermList */
    addTerm(term: string): TermList
    clear(): TermList
    clone(): TermList
    getTerm(n: number): string
    numTerms(): number
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
    constructor (config?: TermList_ConstructProps)
    _init (config?: TermList_ConstructProps): void
    static $gtype: GObject.Type
}
interface TextAnalyzer_ConstructProps extends Analyzer_ConstructProps {
}
class TextAnalyzer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Analyzer */
    addTermFilter(filterFunc: TermFilterFunc): void
    analyze(data: string, termsOut?: TermList | null, colkeysOut?: TermList | null): void
    collateCmp(key1: string, key2: string): number
    collateKey(data: string): string
    tokenize(data: string, termsOut: TermList): void
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
    constructor (config?: TextAnalyzer_ConstructProps)
    _init (config?: TextAnalyzer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextAnalyzer
    /* Function overloads */
    static new(): TextAnalyzer
    static $gtype: GObject.Type
}
interface Transaction_ConstructProps extends SerializableModel_ConstructProps {
    /* Constructor properties of Dee-1.0.Dee.Transaction */
    target?: Model
}
class Transaction {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Transaction */
    commit(): boolean
    getTarget(): Model
    isCommitted(): boolean
    /* Methods of Dee-1.0.Dee.SerializableModel */
    getSeqnum(): number
    incSeqnum(): number
    setSeqnum(seqnum: number): void
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
    /* Methods of Dee-1.0.Dee.Model */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    beginChangeset(): void
    clear(): void
    clearTag(iter: ModelIter, tag: ModelTag): void
    endChangeset(): void
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    getColumnIndex(columnName: string): number
    getColumnNames(): string[]
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    getIterAtRow(row: number): ModelIter
    getLastIter(): ModelIter
    getNColumns(): number
    getNRows(): number
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] | null ]
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    getVardictSchema(column: number): GLib.HashTable
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    isFirst(iter: ModelIter): boolean
    isLast(iter: ModelIter): boolean
    next(iter: ModelIter): ModelIter
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    prev(iter: ModelIter): ModelIter
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    registerVardictSchema(column: number, schemas: GLib.HashTable): void
    remove(iter: ModelIter): void
    setColumnNamesFull(columnNames: string[]): void
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    setSchemaFull(columnSchemas: string[]): void
    setTag(iter: ModelIter, tag: ModelTag, value?: object | null): void
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Dee-1.0.Dee.Model */
    connect(sigName: "changeset-finished", callback: (() => void)): number
    on(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-finished"): void
    connect(sigName: "changeset-started", callback: (() => void)): number
    on(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changeset-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changeset-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changeset-started"): void
    connect(sigName: "row-added", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-added", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-added", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-added", iter: ModelIter): void
    connect(sigName: "row-changed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", iter: ModelIter): void
    connect(sigName: "row-removed", callback: ((iter: ModelIter) => void)): number
    on(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (iter: ModelIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (iter: ModelIter) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", iter: ModelIter): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Transaction_ConstructProps)
    _init (config?: Transaction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(target: Model): Transaction
    static errorQuark(): GLib.Quark
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface TreeIndex_ConstructProps extends Index_ConstructProps {
}
class TreeIndex {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Dee-1.0.Dee.Index */
    foreach(startTerm: string, func: IndexIterFunc): void
    getAnalyzer(): Analyzer
    getModel(): Model
    getNRows(): number
    getNRowsForTerm(term: string): number
    getNTerms(): number
    getReader(): ModelReader
    getSupportedTermMatchFlags(): number
    lookup(term: string, flags: TermMatchFlag): ResultSet
    lookupOne(term: string): ModelIter
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
    constructor (config?: TreeIndex_ConstructProps)
    _init (config?: TreeIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(model: Model, analyzer: Analyzer, reader: ModelReader): TreeIndex
    static $gtype: GObject.Type
}
abstract class AnalyzerClass {
    /* Fields of Dee-1.0.Dee.AnalyzerClass */
    readonly analyze: (self: Analyzer, data: string, termsOut?: TermList | null, colkeysOut?: TermList | null) => void
    readonly tokenize: (self: Analyzer, data: string, termsOut: TermList) => void
    readonly addTermFilter: (self: Analyzer, filterFunc: TermFilterFunc) => void
    readonly collateKey: (self: Analyzer, data: string) => string
    readonly collateCmp: (self: Analyzer, key1: string, key2: string) => number
    static name: string
}
class AnalyzerPrivate {
    static name: string
}
abstract class ClientClass {
    static name: string
}
class ClientPrivate {
    static name: string
}
abstract class FileResourceManagerClass {
    /* Fields of Dee-1.0.Dee.FileResourceManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class Filter {
    /* Fields of Dee-1.0.Dee.Filter */
    readonly mapFunc: FilterMapFunc
    readonly mapNotify: FilterMapNotify
    readonly destroy: GLib.DestroyNotify
    readonly userdata: object
    /* Methods of Dee-1.0.Dee.Filter */
    map(origModel: Model, filterModel: FilterModel): void
    notify(origIter: ModelIter, origModel: Model, filterModel: FilterModel): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static newCollator(column: number): /* outFilter */ Filter
    static newCollatorDesc(column: number): /* outFilter */ Filter
    static newForAnyColumn(column: number, value: GLib.Variant): /* outFilter */ Filter
    static newForKeyColumn(column: number, key: string): /* outFilter */ Filter
    static newRegex(column: number, regex: GLib.Regex): /* outFilter */ Filter
    static newSort(cmpRow: CompareRowFunc): /* outFilter */ Filter
}
abstract class FilterModelClass {
    static name: string
}
class FilterModelPrivate {
    static name: string
}
abstract class GListResultSetClass {
    /* Fields of Dee-1.0.Dee.GListResultSetClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class HashIndexClass {
    /* Fields of Dee-1.0.Dee.HashIndexClass */
    readonly parentClass: IndexClass
    static name: string
}
class HashIndexPrivate {
    static name: string
}
class ICUTermFilter {
    /* Methods of Dee-1.0.Dee.ICUTermFilter */
    apply(text: string): string
    destroy(): void
    static name: string
}
abstract class IndexClass {
    /* Fields of Dee-1.0.Dee.IndexClass */
    readonly parentClass: GObject.ObjectClass
    readonly lookup: (self: Index, term: string, flags: TermMatchFlag) => ResultSet
    readonly foreach: (self: Index, startTerm: string, func: IndexIterFunc) => void
    readonly getNTerms: (self: Index) => number
    readonly getNRows: (self: Index) => number
    readonly getNRowsForTerm: (self: Index, term: string) => number
    readonly getSupportedTermMatchFlags: (self: Index) => number
    static name: string
}
class IndexPrivate {
    static name: string
}
abstract class ModelIface {
    /* Fields of Dee-1.0.Dee.ModelIface */
    readonly gIface: GObject.TypeInterface
    readonly rowAdded: (self: Model, iter: ModelIter) => void
    readonly rowRemoved: (self: Model, iter: ModelIter) => void
    readonly rowChanged: (self: Model, iter: ModelIter) => void
    readonly setSchemaFull: (self: Model, columnSchemas: string[]) => void
    readonly getSchema: (self: Model) => string[]
    readonly getColumnSchema: (self: Model, column: number) => string
    readonly getFieldSchema: (self: Model, fieldName: string) => [ /* returnType */ string, /* outColumn */ number ]
    readonly getColumnIndex: (self: Model, columnName: string) => number
    readonly setColumnNamesFull: (self: Model, columnNames: string[]) => void
    readonly getColumnNames: (self: Model) => string[]
    readonly registerVardictSchema: (self: Model, numColumn: number, schemas: GLib.HashTable) => void
    readonly getVardictSchema: (self: Model, numColumn: number) => GLib.HashTable
    readonly getNColumns: (self: Model) => number
    readonly getNRows: (self: Model) => number
    readonly appendRow: (self: Model, rowMembers: GLib.Variant[]) => ModelIter
    readonly prependRow: (self: Model, rowMembers: GLib.Variant[]) => ModelIter
    readonly insertRow: (self: Model, pos: number, rowMembers: GLib.Variant[]) => ModelIter
    readonly insertRowBefore: (self: Model, iter: ModelIter, rowMembers: GLib.Variant[]) => ModelIter
    readonly insertRowSorted: (self: Model, rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc) => ModelIter
    readonly findRowSorted: (self: Model, rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc) => [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    readonly remove: (self: Model, iter: ModelIter) => void
    readonly clear: (self: Model) => void
    readonly setValue: (self: Model, iter: ModelIter, column: number, value: GLib.Variant) => void
    readonly setRow: (self: Model, iter: ModelIter, rowMembers: GLib.Variant[]) => void
    readonly getValue: (self: Model, iter: ModelIter, column: number) => GLib.Variant
    readonly getValueByName: (self: Model, iter: ModelIter, columnName: string) => GLib.Variant
    readonly getFirstIter: (self: Model) => ModelIter
    readonly getLastIter: (self: Model) => ModelIter
    readonly getIterAtRow: (self: Model, row: number) => ModelIter
    readonly getBool: (self: Model, iter: ModelIter, column: number) => boolean
    readonly getUchar: (self: Model, iter: ModelIter, column: number) => number
    readonly getInt32: (self: Model, iter: ModelIter, column: number) => number
    readonly getUint32: (self: Model, iter: ModelIter, column: number) => number
    readonly getInt64: (self: Model, iter: ModelIter, column: number) => number
    readonly getUint64: (self: Model, iter: ModelIter, column: number) => number
    readonly getDouble: (self: Model, iter: ModelIter, column: number) => number
    readonly getString: (self: Model, iter: ModelIter, column: number) => string
    readonly next: (self: Model, iter: ModelIter) => ModelIter
    readonly prev: (self: Model, iter: ModelIter) => ModelIter
    readonly isFirst: (self: Model, iter: ModelIter) => boolean
    readonly isLast: (self: Model, iter: ModelIter) => boolean
    readonly getPosition: (self: Model, iter: ModelIter) => number
    readonly registerTag: (self: Model, tagDestroy: GLib.DestroyNotify) => ModelTag
    readonly getTag: (self: Model, iter: ModelIter, tag: ModelTag) => object | null
    readonly setTag: (self: Model, iter: ModelIter, tag: ModelTag, value?: object | null) => void
    readonly getRow: (self: Model, iter: ModelIter, outRowMembers: GLib.Variant) => GLib.Variant
    readonly beginChangeset: (self: Model) => void
    readonly endChangeset: (self: Model) => void
    readonly changesetStarted: (self: Model) => void
    readonly changesetFinished: (self: Model) => void
    static name: string
}
class ModelIter {
    static name: string
}
class ModelReader {
    /* Fields of Dee-1.0.Dee.ModelReader */
    readonly readerFunc: ModelReaderFunc
    readonly userdata: object
    readonly destroy: GLib.DestroyNotify
    /* Methods of Dee-1.0.Dee.ModelReader */
    read(model: Model, iter: ModelIter): string
    static name: string
    /* Static methods and pseudo-constructors */
    static newForInt32Column(column: number): /* outReader */ ModelReader
    static newForStringColumn(column: number): /* outReader */ ModelReader
    static newForUint32Column(column: number): /* outReader */ ModelReader
}
class ModelTag {
    static name: string
}
abstract class PeerClass {
    /* Fields of Dee-1.0.Dee.PeerClass */
    readonly peerFound: (self: Peer, name: string) => void
    readonly peerLost: (self: Peer, name: string) => void
    readonly connectionAcquired: (self: Peer, connection: Gio.DBusConnection) => void
    readonly connectionClosed: (self: Peer, connection: Gio.DBusConnection) => void
    readonly getSwarmLeader: (self: Peer) => string
    readonly isSwarmLeader: (self: Peer) => boolean
    readonly getConnections: (self: Peer) => Gio.DBusConnection[]
    readonly listPeers: (self: Peer) => string[]
    static name: string
}
class PeerPrivate {
    static name: string
}
abstract class ProxyModelClass {
    static name: string
}
class ProxyModelPrivate {
    static name: string
}
abstract class ResourceManagerIface {
    /* Fields of Dee-1.0.Dee.ResourceManagerIface */
    readonly gIface: GObject.TypeInterface
    readonly store: (self: ResourceManager, resource: Serializable, resourceName: string) => boolean
    readonly load: (self: ResourceManager, resourceName: string) => GObject.Object
    static name: string
}
abstract class ResultSetIface {
    /* Fields of Dee-1.0.Dee.ResultSetIface */
    readonly gIface: GObject.TypeInterface
    readonly getNRows: (self: ResultSet) => number
    readonly next: (self: ResultSet) => ModelIter
    readonly hasNext: (self: ResultSet) => boolean
    readonly peek: (self: ResultSet) => ModelIter
    readonly seek: (self: ResultSet, pos: number) => void
    readonly tell: (self: ResultSet) => number
    readonly getModel: (self: ResultSet) => Model
    static name: string
}
abstract class SequenceModelClass {
    static name: string
}
class SequenceModelPrivate {
    static name: string
}
abstract class SerializableIface {
    /* Fields of Dee-1.0.Dee.SerializableIface */
    readonly gIface: GObject.TypeInterface
    readonly serialize: (self: Serializable) => GLib.Variant
    static name: string
}
abstract class SerializableModelClass {
    /* Fields of Dee-1.0.Dee.SerializableModelClass */
    readonly getSeqnum: (self: Model) => number
    readonly setSeqnum: (self: Model, seqnum: number) => void
    readonly incSeqnum: (self: Model) => number
    static name: string
}
class SerializableModelPrivate {
    static name: string
}
abstract class ServerClass {
    static name: string
}
class ServerPrivate {
    static name: string
}
abstract class SharedModelClass {
    static name: string
}
class SharedModelPrivate {
    static name: string
}
abstract class TermListClass {
    /* Fields of Dee-1.0.Dee.TermListClass */
    readonly parentClass: GObject.ObjectClass
    readonly getTerm: (self: TermList, n: number) => string
    readonly addTerm: (self: TermList, term: string) => TermList
    readonly numTerms: (self: TermList) => number
    readonly clear: (self: TermList) => TermList
    readonly clone: (self: TermList) => TermList
    static name: string
}
class TermListPrivate {
    static name: string
}
abstract class TextAnalyzerClass {
    static name: string
}
class TextAnalyzerPrivate {
    static name: string
}
abstract class TransactionClass {
    static name: string
}
class TransactionPrivate {
    static name: string
}
abstract class TreeIndexClass {
    /* Fields of Dee-1.0.Dee.TreeIndexClass */
    readonly parentClass: IndexClass
    static name: string
}
class TreeIndexPrivate {
    static name: string
}
}
export default Dee;