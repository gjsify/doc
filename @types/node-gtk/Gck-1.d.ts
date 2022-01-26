/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gck-1
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gck {

enum BuilderFlags {
    NONE,
    SECURE_MEMORY,
}
enum Error {
    PROBLEM,
}
enum UriError {
    BAD_SCHEME,
    BAD_ENCODING,
    BAD_SYNTAX,
    BAD_VERSION,
    NOT_FOUND,
}
enum SessionOptions {
    READ_ONLY,
    READ_WRITE,
    LOGIN_USER,
    AUTHENTICATE,
}
enum UriFlags {
    FOR_OBJECT,
    FOR_TOKEN,
    FOR_MODULE,
    WITH_VERSION,
    FOR_ANY,
}
const INVALID: number
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const URI_FOR_MODULE_WITH_VERSION: number
const URI_FOR_OBJECT_ON_TOKEN: number
const URI_FOR_OBJECT_ON_TOKEN_AND_MODULE: number
const VENDOR_CODE: number
function builderUnref(builder?: object | null): void
function errorGetQuark(): GLib.Quark
function listGetBoxedType(): GObject.Type
function messageFromRv(rv: number): string
function modulesEnumerateObjects(modules: Module[], attrs: Attributes, sessionOptions: SessionOptions): Enumerator
function modulesEnumerateUri(modules: Module[], uri: string, sessionOptions: SessionOptions): Enumerator
function modulesGetSlots(modules: Module[], tokenPresent: boolean): Slot[]
function modulesInitializeRegistered(cancellable?: Gio.Cancellable | null): Module[]
function modulesInitializeRegisteredAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function modulesInitializeRegisteredFinish(result: Gio.AsyncResult): Module[]
function modulesObjectForUri(modules: Module[], uri: string, sessionOptions: SessionOptions): Object | null
function modulesObjectsForUri(modules: Module[], uri: string, sessionOptions: SessionOptions): Object[]
function modulesTokenForUri(modules: Module[], uri: string): Slot
function modulesTokensForUri(modules: Module[], uri: string): Slot[]
function objectsFromHandleArray(session: Session, objectHandles: number[]): Object[]
function slotsEnumerateObjects(slots: Slot[], match: Attributes, options: SessionOptions): Enumerator
function uriBuild(uriData: UriData, flags: UriFlags): string
function uriErrorGetQuark(): GLib.Quark
function uriParse(string: string, flags: UriFlags): UriData
function valueToBoolean(value: Uint8Array): [ /* returnType */ boolean, /* result */ boolean ]
function valueToUlong(value: Uint8Array): [ /* returnType */ boolean, /* result */ number ]
interface Allocator {
    (data: object | null, length: number): object | null
}
interface ObjectCache_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gck-1.Gck.ObjectCache */
    attributes?: Attributes
}
class ObjectCache {
    /* Properties of Gck-1.Gck.ObjectCache */
    attributes: Attributes
    /* Fields of Gck-1.Gck.Object */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.ObjectCache */
    fill(attrs: Attributes): void
    setAttributes(attrs?: Attributes | null): void
    update(attrTypes: number[], cancellable?: Gio.Cancellable | null): boolean
    updateAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateFinish(result: Gio.AsyncResult): boolean
    /* Methods of Gck-1.Gck.Object */
    cacheLookup(attrTypes: number[], cancellable?: Gio.Cancellable | null): Attributes
    cacheLookupAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cacheLookupFinish(result: Gio.AsyncResult): Attributes
    destroy(cancellable?: Gio.Cancellable | null): boolean
    destroyAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    destroyFinish(result: Gio.AsyncResult): boolean
    equal(object2: Object): boolean
    getAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getData(attrType: number, cancellable?: Gio.Cancellable | null): Uint8Array
    getDataAsync(attrType: number, allocator: Allocator, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataFinish(result: Gio.AsyncResult): Uint8Array
    getFinish(result: Gio.AsyncResult): Attributes
    getFull(attrTypes: number[], cancellable?: Gio.Cancellable | null): Attributes
    getHandle(): number
    getModule(): Module
    getSession(): Session
    getTemplate(attrType: number, cancellable?: Gio.Cancellable | null): Attributes
    getTemplateAsync(attrType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTemplateFinish(result: Gio.AsyncResult): Attributes
    hash(): number
    set(attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    setAsync(attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setFinish(result: Gio.AsyncResult): boolean
    setTemplate(attrType: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    setTemplateAsync(attrType: number, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setTemplateFinish(result: Gio.AsyncResult): boolean
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
    connect(sigName: "notify::attributes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ObjectCache_ConstructProps)
    _init (config?: ObjectCache_ConstructProps): void
    static $gtype: GObject.Type
}
interface Enumerator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gck-1.Gck.Enumerator */
    chained?: Enumerator
    interaction?: Gio.TlsInteraction
}
class Enumerator {
    /* Properties of Gck-1.Gck.Enumerator */
    chained: Enumerator
    interaction: Gio.TlsInteraction
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.Enumerator */
    getChained(): Enumerator | null
    getInteraction(): Gio.TlsInteraction | null
    getObjectType(): GObject.Type
    next(cancellable?: Gio.Cancellable | null): Object | null
    nextAsync(maxObjects: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(result: Gio.AsyncResult): Object[]
    nextN(maxObjects: number, cancellable?: Gio.Cancellable | null): Object[]
    setChained(chained?: Enumerator | null): void
    setInteraction(interaction?: Gio.TlsInteraction | null): void
    setObjectType(objectType: GObject.Type, attrTypes: number[]): void
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
    connect(sigName: "notify::chained", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chained", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Enumerator_ConstructProps)
    _init (config?: Enumerator_ConstructProps): void
    static $gtype: GObject.Type
}
interface Module_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gck-1.Gck.Module */
    functions?: object
    path?: string
}
class Module {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.Module */
    equal(module2: Module): boolean
    getInfo(): ModuleInfo
    getPath(): string
    getSlots(tokenPresent: boolean): Slot[]
    hash(): number
    match(uri: UriData): boolean
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
    /* Signals of Gck-1.Gck.Module */
    connect(sigName: "authenticate-object", callback: ((object: Object, label: string, password?: object | null) => boolean)): number
    on(sigName: "authenticate-object", callback: (object: Object, label: string, password?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate-object", callback: (object: Object, label: string, password?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate-object", callback: (object: Object, label: string, password?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate-object", object: Object, label: string, password?: object | null): void
    connect(sigName: "authenticate-slot", callback: ((slot: Slot, string: string, password?: object | null) => boolean)): number
    on(sigName: "authenticate-slot", callback: (slot: Slot, string: string, password?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate-slot", callback: (slot: Slot, string: string, password?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate-slot", callback: (slot: Slot, string: string, password?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate-slot", slot: Slot, string: string, password?: object | null): void
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
    constructor (config?: Module_ConstructProps)
    _init (config?: Module_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static initialize(path: string, cancellable?: Gio.Cancellable | null): Module
    static initializeAsync(path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static initializeFinish(result: Gio.AsyncResult): Module | null
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gck-1.Gck.Object */
    handle?: number
    module?: Module
    session?: Session
}
class Object {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.Object */
    cacheLookup(attrTypes: number[], cancellable?: Gio.Cancellable | null): Attributes
    cacheLookupAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cacheLookupFinish(result: Gio.AsyncResult): Attributes
    destroy(cancellable?: Gio.Cancellable | null): boolean
    destroyAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    destroyFinish(result: Gio.AsyncResult): boolean
    equal(object2: Object): boolean
    getAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getData(attrType: number, cancellable?: Gio.Cancellable | null): Uint8Array
    getDataAsync(attrType: number, allocator: Allocator, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataFinish(result: Gio.AsyncResult): Uint8Array
    getFinish(result: Gio.AsyncResult): Attributes
    getFull(attrTypes: number[], cancellable?: Gio.Cancellable | null): Attributes
    getHandle(): number
    getModule(): Module
    getSession(): Session
    getTemplate(attrType: number, cancellable?: Gio.Cancellable | null): Attributes
    getTemplateAsync(attrType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTemplateFinish(result: Gio.AsyncResult): Attributes
    hash(): number
    set(attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    setAsync(attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setFinish(result: Gio.AsyncResult): boolean
    setTemplate(attrType: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    setTemplateAsync(attrType: number, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setTemplateFinish(result: Gio.AsyncResult): boolean
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
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromHandle(session: Session, objectHandle: number): Object
    static $gtype: GObject.Type
}
interface Password_ConstructProps extends Gio.TlsPassword_ConstructProps {
    /* Constructor properties of Gck-1.Gck.Password */
    key?: Object
    token?: Slot
}
class Password {
    /* Properties of Gck-1.Gck.Password */
    readonly module: Module
    /* Properties of Gio-2.0.Gio.TlsPassword */
    description: string
    flags: Gio.TlsPasswordFlags
    warning: string
    /* Fields of Gio-2.0.Gio.TlsPassword */
    readonly parentInstance: GObject.Object
    readonly priv: Gio.TlsPasswordPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.Password */
    getKey(): Object
    getModule(): Module
    getToken(): Slot
    /* Methods of Gio-2.0.Gio.TlsPassword */
    getDescription(): string
    getFlags(): Gio.TlsPasswordFlags
    getValue(): Uint8Array
    getWarning(): string
    setDescription(description: string): void
    setFlags(flags: Gio.TlsPasswordFlags): void
    setValue(value: Uint8Array): void
    setValueFull(value: Uint8Array, destroy?: GLib.DestroyNotify | null): void
    setWarning(warning: string): void
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
    connect(sigName: "notify::module", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warning", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Password_ConstructProps)
    _init (config?: Password_ConstructProps): void
    static $gtype: GObject.Type
}
interface Session_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gck-1.Gck.Session */
    appData?: object
    handle?: number
    interaction?: Gio.TlsInteraction
    openingFlags?: number
    options?: SessionOptions
    slot?: Slot
}
class Session {
    /* Properties of Gck-1.Gck.Session */
    interaction: Gio.TlsInteraction
    readonly module: Module
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.Session */
    createObject(attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    createObjectAsync(attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createObjectFinish(result: Gio.AsyncResult): Object
    decrypt(key: Object, mechType: number, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    decryptAsync(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decryptFinish(result: Gio.AsyncResult): Uint8Array
    decryptFull(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    deriveKey(base: Object, mechType: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    deriveKeyAsync(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deriveKeyFinish(result: Gio.AsyncResult): Object
    deriveKeyFull(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    encrypt(key: Object, mechType: number, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    encryptAsync(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    encryptFinish(result: Gio.AsyncResult): Uint8Array
    encryptFull(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    enumerateObjects(match: Attributes): Enumerator
    findHandles(match: Attributes, cancellable?: Gio.Cancellable | null): number[] | null
    findHandlesAsync(match: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findHandlesFinish(result: Gio.AsyncResult): number[] | null
    findObjects(match: Attributes, cancellable?: Gio.Cancellable | null): Object[]
    findObjectsAsync(match: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findObjectsFinish(result: Gio.AsyncResult): Object[]
    generateKeyPair(mechType: number, publicAttrs: Attributes, privateAttrs: Attributes, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* publicKey */ Object | null, /* privateKey */ Object | null ]
    generateKeyPairAsync(mechanism: Mechanism, publicAttrs: Attributes, privateAttrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateKeyPairFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* publicKey */ Object | null, /* privateKey */ Object | null ]
    generateKeyPairFull(mechanism: Mechanism, publicAttrs: Attributes, privateAttrs: Attributes, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* publicKey */ Object | null, /* privateKey */ Object | null ]
    getHandle(): number
    getInfo(): SessionInfo
    getInteraction(): Gio.TlsInteraction | null
    getModule(): Module
    getOptions(): SessionOptions
    getSlot(): Slot
    getState(): number
    initPin(pin: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    initPinAsync(pin: Uint8Array | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initPinFinish(result: Gio.AsyncResult): boolean
    login(userType: number, pin: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    loginAsync(userType: number, pin: Uint8Array | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loginFinish(result: Gio.AsyncResult): boolean
    loginInteractive(userType: number, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null): boolean
    loginInteractiveAsync(userType: number, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loginInteractiveFinish(result: Gio.AsyncResult): boolean
    logout(cancellable?: Gio.Cancellable | null): boolean
    logoutAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    logoutFinish(result: Gio.AsyncResult): boolean
    setInteraction(interaction?: Gio.TlsInteraction | null): void
    setPin(oldPin: Uint8Array | null, newPin: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    setPinAsync(oldPin: Uint8Array | null, nOldPin: number, newPin: Uint8Array | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setPinFinish(result: Gio.AsyncResult): boolean
    sign(key: Object, mechType: number, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    signAsync(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    signFinish(result: Gio.AsyncResult): Uint8Array
    signFull(key: Object, mechanism: Mechanism, input: Uint8Array, nResult: number, cancellable?: Gio.Cancellable | null): number
    unwrapKey(wrapper: Object, mechType: number, input: Uint8Array, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    unwrapKeyAsync(wrapper: Object, mechanism: Mechanism, input: Uint8Array, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unwrapKeyFinish(result: Gio.AsyncResult): Object
    unwrapKeyFull(wrapper: Object, mechanism: Mechanism, input: Uint8Array, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    verify(key: Object, mechType: number, input: Uint8Array, signature: Uint8Array, cancellable?: Gio.Cancellable | null): boolean
    verifyAsync(key: Object, mechanism: Mechanism, input: Uint8Array, signature: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verifyFinish(result: Gio.AsyncResult): boolean
    verifyFull(key: Object, mechanism: Mechanism, input: Uint8Array, signature: Uint8Array, cancellable?: Gio.Cancellable | null): boolean
    wrapKey(wrapper: Object, mechType: number, wrapped: Object, cancellable?: Gio.Cancellable | null): Uint8Array
    wrapKeyAsync(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    wrapKeyFinish(result: Gio.AsyncResult): Uint8Array
    wrapKeyFull(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable?: Gio.Cancellable | null): Uint8Array
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gck-1.Gck.Session */
    connect(sigName: "discard-handle", callback: ((handle: number) => boolean)): number
    on(sigName: "discard-handle", callback: (handle: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "discard-handle", callback: (handle: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "discard-handle", callback: (handle: number) => void): NodeJS.EventEmitter
    emit(sigName: "discard-handle", handle: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::module", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromHandle(slot: Slot, sessionHandle: number, options: SessionOptions): Session
    static open(slot: Slot, options: SessionOptions, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null): Session
    static openAsync(slot: Slot, options: SessionOptions, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static openFinish(result: Gio.AsyncResult): Session
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Slot_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gck-1.Gck.Slot */
    handle?: number
    module?: Module
}
class Slot {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.Slot */
    enumerateObjects(match: Attributes, options: SessionOptions): Enumerator
    equal(slot2: Slot): boolean
    getHandle(): number
    getInfo(): SlotInfo
    getMechanismInfo(mechType: number): MechanismInfo
    getMechanisms(): number[]
    getModule(): Module
    getTokenInfo(): TokenInfo
    hasFlags(flags: number): boolean
    hash(): number
    match(uri: UriData): boolean
    openSession(options: SessionOptions, cancellable?: Gio.Cancellable | null): Session
    openSessionAsync(options: SessionOptions, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openSessionFinish(result: Gio.AsyncResult): Session
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
    constructor (config?: Slot_ConstructProps)
    _init (config?: Slot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromHandle(module: Module, slotId: number): Slot
    static $gtype: GObject.Type
}
class Attribute {
    /* Fields of Gck-1.Gck.Attribute */
    readonly type: number
    readonly value: Uint8Array
    readonly length: number
    /* Methods of Gck-1.Gck.Attribute */
    clear(): void
    dump(): void
    dup(): Attribute
    equal(attr2: Attribute): boolean
    free(): void
    getBoolean(): boolean
    getData(): Uint8Array
    getDate(value: GLib.Date): void
    getString(): string | null
    getUlong(): number
    hash(): number
    initCopy(src: Attribute): void
    isInvalid(): boolean
    static name: string
    static new(attrType: number, value: number, length: number): Attribute
    constructor(attrType: number, value: number, length: number)
    /* Static methods and pseudo-constructors */
    static new(attrType: number, value: number, length: number): Attribute
    static newBoolean(attrType: number, value: boolean): Attribute
    static newDate(attrType: number, value: GLib.Date): Attribute
    static newEmpty(attrType: number): Attribute
    static newInvalid(attrType: number): Attribute
    static newString(attrType: number, value: string): Attribute
    static newUlong(attrType: number, value: number): Attribute
}
class Attributes {
    /* Methods of Gck-1.Gck.Attributes */
    at(index: number): Attribute
    contains(match: Attribute): boolean
    count(): number
    dump(): void
    find(attrType: number): Attribute
    findBoolean(attrType: number): [ /* returnType */ boolean, /* value */ boolean ]
    findDate(attrType: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    findString(attrType: number): [ /* returnType */ boolean, /* value */ string ]
    findUlong(attrType: number): [ /* returnType */ boolean, /* value */ number ]
    ref(): Attributes
    refSink(): Attributes
    toString(): string
    unref(): void
    static name: string
    static new(reserved: number): Attributes
    constructor(reserved: number)
    /* Static methods and pseudo-constructors */
    static new(reserved: number): Attributes
}
class Builder {
    /* Methods of Gck-1.Gck.Builder */
    addAll(attrs: Attributes): void
    addAttribute(attr: Attribute): void
    addBoolean(attrType: number, value: boolean): void
    addData(attrType: number, value: Uint8Array | null): void
    addDate(attrType: number, value: GLib.Date): void
    addEmpty(attrType: number): void
    addInvalid(attrType: number): void
    addOnly(attrs: Attributes, onlyTypes: number[]): void
    addString(attrType: number, value?: string | null): void
    addUlong(attrType: number, value: number): void
    clear(): void
    copy(): Builder
    end(): Attributes
    find(attrType: number): Attribute
    findBoolean(attrType: number): [ /* returnType */ boolean, /* value */ boolean ]
    findDate(attrType: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    findString(attrType: number): [ /* returnType */ boolean, /* value */ string ]
    findUlong(attrType: number): [ /* returnType */ boolean, /* value */ number ]
    init(): void
    initFull(flags: BuilderFlags): void
    ref(): Builder
    setAll(attrs: Attributes): void
    setBoolean(attrType: number, value: boolean): void
    setData(attrType: number, value: Uint8Array | null): void
    setDate(attrType: number, value: GLib.Date): void
    setEmpty(attrType: number): void
    setInvalid(attrType: number): void
    setString(attrType: number, value: string): void
    setUlong(attrType: number, value: number): void
    steal(): Attributes
    takeData(attrType: number, value: Uint8Array | null): void
    static name: string
    static new(flags: BuilderFlags): Builder
    constructor(flags: BuilderFlags)
    /* Static methods and pseudo-constructors */
    static new(flags: BuilderFlags): Builder
    static unref(builder?: object | null): void
}
abstract class EnumeratorClass {
    /* Fields of Gck-1.Gck.EnumeratorClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
class EnumeratorPrivate {
    static name: string
}
class Mechanism {
    /* Fields of Gck-1.Gck.Mechanism */
    readonly type: number
    readonly parameter: object
    readonly nParameter: number
    static name: string
}
class MechanismInfo {
    /* Fields of Gck-1.Gck.MechanismInfo */
    readonly minKeySize: number
    readonly maxKeySize: number
    readonly flags: number
    /* Methods of Gck-1.Gck.MechanismInfo */
    copy(): MechanismInfo
    free(): void
    static name: string
}
abstract class ModuleClass {
    /* Fields of Gck-1.Gck.ModuleClass */
    readonly parent: GObject.ObjectClass
    readonly authenticateSlot: (self: Module, slot: Slot, label: string, password: string) => boolean
    readonly authenticateObject: (self: Module, object: Object, label: string, password: string) => boolean
    static name: string
}
class ModuleInfo {
    /* Fields of Gck-1.Gck.ModuleInfo */
    readonly pkcs11VersionMajor: number
    readonly pkcs11VersionMinor: number
    readonly manufacturerId: string
    readonly flags: number
    readonly libraryDescription: string
    readonly libraryVersionMajor: number
    readonly libraryVersionMinor: number
    /* Methods of Gck-1.Gck.ModuleInfo */
    copy(): ModuleInfo
    free(): void
    static name: string
}
class ModulePrivate {
    static name: string
}
abstract class ObjectCacheIface {
    /* Fields of Gck-1.Gck.ObjectCacheIface */
    readonly interface: GObject.TypeInterface
    readonly defaultTypes: number[]
    readonly nDefaultTypes: number
    readonly fill: (object: ObjectCache, attrs: Attributes) => void
    static name: string
}
abstract class ObjectClass {
    /* Fields of Gck-1.Gck.ObjectClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
class ObjectPrivate {
    static name: string
}
abstract class PasswordClass {
    /* Fields of Gck-1.Gck.PasswordClass */
    readonly parent: Gio.TlsPasswordClass
    static name: string
}
class PasswordPrivate {
    static name: string
}
abstract class SessionClass {
    /* Fields of Gck-1.Gck.SessionClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
class SessionInfo {
    /* Fields of Gck-1.Gck.SessionInfo */
    readonly slotId: number
    readonly state: number
    readonly flags: number
    readonly deviceError: number
    /* Methods of Gck-1.Gck.SessionInfo */
    copy(): SessionInfo
    free(): void
    static name: string
}
class SessionPrivate {
    static name: string
}
abstract class SlotClass {
    /* Fields of Gck-1.Gck.SlotClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
class SlotInfo {
    /* Fields of Gck-1.Gck.SlotInfo */
    readonly slotDescription: string
    readonly manufacturerId: string
    readonly flags: number
    readonly hardwareVersionMajor: number
    readonly hardwareVersionMinor: number
    readonly firmwareVersionMajor: number
    readonly firmwareVersionMinor: number
    /* Methods of Gck-1.Gck.SlotInfo */
    copy(): SlotInfo
    free(): void
    static name: string
}
class SlotPrivate {
    static name: string
}
class TokenInfo {
    /* Fields of Gck-1.Gck.TokenInfo */
    readonly label: string
    readonly manufacturerId: string
    readonly model: string
    readonly serialNumber: string
    readonly flags: number
    readonly maxSessionCount: number
    readonly sessionCount: number
    readonly maxRwSessionCount: number
    readonly rwSessionCount: number
    readonly maxPinLen: number
    readonly minPinLen: number
    readonly totalPublicMemory: number
    readonly freePublicMemory: number
    readonly totalPrivateMemory: number
    readonly freePrivateMemory: number
    readonly hardwareVersionMajor: number
    readonly hardwareVersionMinor: number
    readonly firmwareVersionMajor: number
    readonly firmwareVersionMinor: number
    readonly utcTime: number
    /* Methods of Gck-1.Gck.TokenInfo */
    copy(): TokenInfo
    free(): void
    static name: string
}
class UriData {
    /* Fields of Gck-1.Gck.UriData */
    readonly anyUnrecognized: boolean
    readonly moduleInfo: ModuleInfo
    readonly tokenInfo: TokenInfo
    readonly attributes: Attributes
    /* Methods of Gck-1.Gck.UriData */
    copy(): UriData
    free(): void
    static name: string
    static new(): UriData
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): UriData
}
}
export default Gck;