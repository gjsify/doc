/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GConf-2.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GConf {

enum ClientErrorHandlingMode {
    HANDLE_NONE,
    HANDLE_UNRETURNED,
    HANDLE_ALL,
}
enum ClientPreloadType {
    PRELOAD_NONE,
    PRELOAD_ONELEVEL,
    PRELOAD_RECURSIVE,
}
enum Error {
    SUCCESS,
    FAILED,
    NO_SERVER,
    NO_PERMISSION,
    BAD_ADDRESS,
    BAD_KEY,
    PARSE_ERROR,
    CORRUPT,
    TYPE_MISMATCH,
    IS_DIR,
    IS_KEY,
    OVERRIDDEN,
    OAF_ERROR,
    LOCAL_ENGINE,
    LOCK_FAILED,
    NO_WRITABLE_DATABASE,
    IN_SHUTDOWN,
}
enum ValueType {
    INVALID,
    STRING,
    INT,
    FLOAT,
    BOOL,
    SCHEMA,
    LIST,
    PAIR,
}
enum UnsetFlags {
    NAMES,
}
function concatDirAndKey(dir: string, key: string): string
function debugShutdown(): number
function enumToString(lookupTable: EnumStringPair, enumValue: number): string
function errorQuark(): GLib.Quark
function escapeKey(arbitraryText: string, len: number): string
function init(argc: number, argv: string): boolean
function isInitialized(): boolean
function keyIsBelow(above: string, below: string): boolean
function postinit(app?: object | null, modInfo?: object | null): void
function preinit(app?: object | null, modInfo?: object | null): void
function stringToEnum(lookupTable: EnumStringPair, str: string, enumValueRetloc: number): boolean
function unescapeKey(escapedKey: string, len: number): string
function uniqueKey(): string
function validKey(key: string, whyInvalid: string): boolean
function valueDecode(encoded: string): Value
interface ChangeSetForeachFunc {
    (cs: ChangeSet, key: string, value: Value): void
}
interface ClientErrorHandlerFunc {
    (client: Client, error: GLib.Error): void
}
interface ClientNotifyFunc {
    (client: Client, cnxnId: number, entry: Entry): void
}
interface ListenersForeach {
    (location: string, cnxnId: number, listenerData?: object | null): void
}
interface ListenersPredicate {
    (location: string, cnxnId: number, listenerData?: object | null): boolean
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
class Client {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GConf-2.0.GConf.Client */
    addDir(dir: string, preload: ClientPreloadType): void
    allDirs(dir: string): string[]
    allEntries(dir: string): Entry[]
    changeSetFromCurrentv(keys: string): ChangeSet
    clearCache(): void
    commitChangeSet(cs: ChangeSet, removeCommitted: boolean): boolean
    dirExists(dir: string): boolean
    error(error: GLib.Error): void
    get(key: string): Value
    getBool(key: string): boolean
    getDefaultFromSchema(key: string): Value
    getEntry(key: string, locale: string, useSchemaDefault: boolean): Entry
    getFloat(key: string): number
    getInt(key: string): number
    getPair(key: string, carType: ValueType, cdrType: ValueType, carRetloc?: object | null, cdrRetloc?: object | null): boolean
    getString(key: string): string
    getWithoutDefault(key: string): Value
    keyIsWritable(key: string): boolean
    notify(key: string): void
    notifyAdd(namespaceSection: string, func: ClientNotifyFunc): number
    notifyRemove(cnxn: number): void
    preload(dirname: string, type: ClientPreloadType): void
    recursiveUnset(key: string, flags: UnsetFlags): boolean
    removeDir(dir: string): void
    reverseChangeSet(cs: ChangeSet): ChangeSet
    set(key: string, val: Value): void
    setBool(key: string, val: boolean): boolean
    setErrorHandling(mode: ClientErrorHandlingMode): void
    setFloat(key: string, val: number): boolean
    setInt(key: string, val: number): boolean
    setPair(key: string, carType: ValueType, cdrType: ValueType, addressOfCar?: object | null, addressOfCdr?: object | null): boolean
    setString(key: string, val: string): boolean
    suggestSync(): void
    unreturnedError(error: GLib.Error): void
    unset(key: string): boolean
    valueChanged(key: string, value: Value): void
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
    /* Signals of GConf-2.0.GConf.Client */
    connect(sigName: "error", callback: ((object?: object | null) => void)): number
    on(sigName: "error", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "error", object?: object | null): void
    connect(sigName: "unreturned-error", callback: ((object?: object | null) => void)): number
    on(sigName: "unreturned-error", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unreturned-error", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unreturned-error", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "unreturned-error", object?: object | null): void
    connect(sigName: "value-changed", callback: ((object: string, p0?: object | null) => void)): number
    on(sigName: "value-changed", callback: (object: string, p0?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (object: string, p0?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (object: string, p0?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", object: string, p0?: object | null): void
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
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Client
    static $gtype: GObject.Type
}
class ChangeSet {
    /* Methods of GConf-2.0.GConf.ChangeSet */
    checkValue(key: string, valueRetloc: Value): boolean
    clear(): void
    foreach(func: ChangeSetForeachFunc): void
    ref(): ChangeSet
    remove(key: string): void
    set(key: string, value: Value): void
    setBool(key: string, val: boolean): void
    setFloat(key: string, val: number): void
    setInt(key: string, val: number): void
    setNocopy(key: string, value: Value): void
    setPair(key: string, carType: ValueType, cdrType: ValueType, addressOfCar?: object | null, addressOfCdr?: object | null): void
    setString(key: string, val: string): void
    size(): number
    unref(): void
    unset(key: string): void
    static name: string
    static new(): ChangeSet
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ChangeSet
}
abstract class ClientClass {
    /* Fields of GConf-2.0.GConf.ClientClass */
    readonly parentClass: GObject.ObjectClass
    readonly valueChanged: (client: Client, key: string, value: Value) => void
    readonly unreturnedError: (client: Client, error: GLib.Error) => void
    readonly error: (client: Client, error: GLib.Error) => void
    readonly pad1: GLib.Func
    readonly pad2: GLib.Func
    readonly pad3: GLib.Func
    static name: string
}
class Engine {
    /* Methods of GConf-2.0.GConf.Engine */
    allDirs(dir: string): string[]
    allEntries(dir: string): Entry[]
    associateSchema(key: string, schemaKey: string): boolean
    changeSetFromCurrent(err: GLib.Error, firstKey: string, ...args: any): ChangeSet
    changeSetFromCurrentv(keys: string): ChangeSet
    commitChangeSet(cs: ChangeSet, removeCommitted: boolean): boolean
    dirExists(dir: string): boolean
    get(key: string): Value
    getBool(key: string): boolean
    getDefaultFromSchema(key: string): Value
    getEntry(key: string, locale: string, useSchemaDefault: boolean): Entry
    getFloat(key: string): number
    getFull(key: string, locale: string, useSchemaDefault: boolean, isDefaultP: boolean, isWritableP: boolean): Value
    getInt(key: string): number
    getPair(key: string, carType: ValueType, cdrType: ValueType, carRetloc?: object | null, cdrRetloc?: object | null): boolean
    getString(key: string): string
    getUserData(): object | null
    getWithLocale(key: string, locale: string): Value
    getWithoutDefault(key: string): Value
    keyIsWritable(key: string): boolean
    notifyRemove(cnxn: number): void
    ref(): void
    removeDir(dir: string): void
    reverseChangeSet(cs: ChangeSet): ChangeSet
    set(key: string, value: Value): boolean
    setBool(key: string, val: boolean): boolean
    setFloat(key: string, val: number): boolean
    setInt(key: string, val: number): boolean
    setList(key: string, listType: ValueType, list: object[]): boolean
    setPair(key: string, carType: ValueType, cdrType: ValueType, addressOfCar?: object | null, addressOfCdr?: object | null): boolean
    setString(key: string, val: string): boolean
    setUserData(data: object | null, dnotify: GLib.DestroyNotify): void
    suggestSync(): void
    unref(): void
    unset(key: string): boolean
    static name: string
}
class Entry {
    /* Fields of GConf-2.0.GConf.Entry */
    readonly key: string
    readonly value: Value
    /* Methods of GConf-2.0.GConf.Entry */
    copy(): Entry
    equal(b: Entry): boolean
    free(): void
    getIsDefault(): boolean
    getIsWritable(): boolean
    getKey(): string
    getSchemaName(): string
    getValue(): Value
    ref(): Entry
    setIsDefault(isDefault: boolean): void
    setIsWritable(isWritable: boolean): void
    setSchemaName(name: string): void
    setValue(val: Value): void
    setValueNocopy(val: Value): void
    stealValue(): Value
    unref(): void
    static name: string
    static new(key: string, val: Value): Entry
    constructor(key: string, val: Value)
    /* Static methods and pseudo-constructors */
    static new(key: string, val: Value): Entry
    static newNocopy(key: string, val: Value): Entry
}
class EnumStringPair {
    /* Fields of GConf-2.0.GConf.EnumStringPair */
    readonly enumValue: number
    readonly str: string
    static name: string
}
class Listeners {
    /* Methods of GConf-2.0.GConf.Listeners */
    add(listenPoint: string, listenerData: object | null, destroyNotify: GLib.FreeFunc): number
    count(): number
    foreach(callback: ListenersForeach): void
    free(): void
    getData(cnxnId: number, listenerDataP: object | null, locationP: string): boolean
    notify(allAbove: string, callback: any): void
    remove(cnxnId: number): void
    removeIf(predicate: ListenersPredicate): void
    static name: string
}
class MetaInfo {
    /* Fields of GConf-2.0.GConf.MetaInfo */
    readonly schema: string
    readonly modUser: string
    readonly modTime: GLib.Time
    /* Methods of GConf-2.0.GConf.MetaInfo */
    free(): void
    getModUser(): string
    getSchema(): string
    setModTime(modTime: GLib.Time): void
    setModUser(modUser: string): void
    setSchema(schemaName: string): void
    static name: string
}
class Schema {
    /* Methods of GConf-2.0.GConf.Schema */
    free(): void
    getCarType(): ValueType
    getCdrType(): ValueType
    getDefaultValue(): Value
    getListType(): ValueType
    getLocale(): string
    getLongDesc(): string
    getOwner(): string
    getShortDesc(): string
    getType(): ValueType
    setCarType(type: ValueType): void
    setCdrType(type: ValueType): void
    setDefaultValue(val: Value): void
    setDefaultValueNocopy(val: Value): void
    setListType(type: ValueType): void
    setLocale(locale: string): void
    setLongDesc(desc: string): void
    setOwner(owner: string): void
    setShortDesc(desc: string): void
    setType(type: ValueType): void
    static name: string
}
class Value {
    /* Fields of GConf-2.0.GConf.Value */
    readonly type: ValueType
    /* Methods of GConf-2.0.GConf.Value */
    compare(valueB: Value): number
    copy(): Value
    encode(): string
    free(): void
    getBool(): boolean
    getCar(): Value
    getCdr(): Value
    getFloat(): number
    getInt(): number
    getList(): Value[]
    getListType(): ValueType
    getString(): string
    setBool(theBool: boolean): void
    setCar(car: Value): void
    setCarNocopy(car: Value): void
    setCdr(cdr: Value): void
    setCdrNocopy(cdr: Value): void
    setFloat(theFloat: number): void
    setInt(theInt: number): void
    setListType(type: ValueType): void
    setString(theStr: string): void
    toString(): string
    static name: string
    static new(type: ValueType): Value
    constructor(type: ValueType)
    /* Static methods and pseudo-constructors */
    static new(type: ValueType): Value
    static newFromString(type: ValueType, str: string): Value
    static decode(encoded: string): Value
}
}
export default GConf;