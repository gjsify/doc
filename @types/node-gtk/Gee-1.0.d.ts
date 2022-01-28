/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gee-1.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gee {

function functionsGetEqualFuncFor(t: GObject.Type): GLib.EqualFunc
function functionsGetHashFuncFor(t: GObject.Type): GLib.HashFunc
function functionsGetCompareFuncFor(t: GObject.Type): GLib.CompareFunc
function directCompare(val1?: object | null, val2?: object | null): number
interface BidirIterator_ConstructProps extends Iterator_ConstructProps {
}
class BidirIterator {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.BidirIterator */
    previous(): boolean
    hasPrevious(): boolean
    last(): boolean
    /* Methods of Gee-1.0.Gee.Iterator */
    next(): boolean
    hasNext(): boolean
    first(): boolean
    get(): object | null
    remove(): void
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
    constructor (config?: BidirIterator_ConstructProps)
    _init (config?: BidirIterator_ConstructProps): void
    static $gtype: GObject.Type
}
interface Collection_ConstructProps extends Iterable_ConstructProps {
}
class Collection {
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
    iterator(): Iterator
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
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Collection_ConstructProps)
    _init (config?: Collection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Collection
    static $gtype: GObject.Type
}
interface Comparable_ConstructProps extends GObject.Object_ConstructProps {
}
class Comparable {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Comparable */
    compareTo(object?: object | null): number
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
    constructor (config?: Comparable_ConstructProps)
    _init (config?: Comparable_ConstructProps): void
    static $gtype: GObject.Type
}
interface Deque_ConstructProps extends Queue_ConstructProps {
}
class Deque {
    /* Properties of Gee-1.0.Gee.Queue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Deque */
    offerHead(element?: object | null): boolean
    peekHead(): object | null
    pollHead(): object | null
    drainHead(recipient: Collection, amount: number): number
    offerTail(element?: object | null): boolean
    peekTail(): object | null
    pollTail(): object | null
    drainTail(recipient: Collection, amount: number): number
    /* Methods of Gee-1.0.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
    iterator(): Iterator
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
    connect(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Deque_ConstructProps)
    _init (config?: Deque_ConstructProps): void
    static $gtype: GObject.Type
}
interface Iterable_ConstructProps extends GObject.Object_ConstructProps {
}
class Iterable {
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Iterable */
    iterator(): Iterator
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
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Iterable_ConstructProps)
    _init (config?: Iterable_ConstructProps): void
    static $gtype: GObject.Type
}
interface Iterator_ConstructProps extends GObject.Object_ConstructProps {
}
class Iterator {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Iterator */
    next(): boolean
    hasNext(): boolean
    first(): boolean
    get(): object | null
    remove(): void
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
    constructor (config?: Iterator_ConstructProps)
    _init (config?: Iterator_ConstructProps): void
    static $gtype: GObject.Type
}
interface List_ConstructProps extends Collection_ConstructProps {
}
class List {
    /* Properties of Gee-1.0.Gee.List */
    readonly readOnlyView: List
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.List */
    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void
    sort(compareFunc?: GLib.CompareFunc | null): void
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
    iterator(): Iterator
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
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: List_ConstructProps)
    _init (config?: List_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): List
    /* Function overloads */
    static empty(): Collection
    static $gtype: GObject.Type
}
interface ListIterator_ConstructProps extends BidirIterator_ConstructProps {
}
class ListIterator {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.ListIterator */
    set(item?: object | null): void
    insert(item?: object | null): void
    add(item?: object | null): void
    index(): number
    /* Methods of Gee-1.0.Gee.BidirIterator */
    previous(): boolean
    hasPrevious(): boolean
    last(): boolean
    /* Methods of Gee-1.0.Gee.Iterator */
    next(): boolean
    hasNext(): boolean
    first(): boolean
    get(): object | null
    remove(): void
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
    constructor (config?: ListIterator_ConstructProps)
    _init (config?: ListIterator_ConstructProps): void
    static $gtype: GObject.Type
}
interface Map_ConstructProps extends GObject.Object_ConstructProps {
}
class Map {
    /* Properties of Gee-1.0.Gee.Map */
    readonly size: number
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    readonly keyType: GObject.Type
    readonly valueType: GObject.Type
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Map */
    hasKey(key?: object | null): boolean
    contains(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    clear(): void
    mapIterator(): MapIterator
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    removeAll(map: Map): boolean
    hasAll(map: Map): boolean
    containsAll(map: Map): boolean
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
    /* Methods of Gee-1.0.Gee.Iterable */
    iterator(): Iterator
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Map_ConstructProps)
    _init (config?: Map_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Map
    static $gtype: GObject.Type
}
interface MapIterator_ConstructProps extends GObject.Object_ConstructProps {
}
class MapIterator {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.MapIterator */
    next(): boolean
    hasNext(): boolean
    first(): boolean
    getKey(): object | null
    getValue(): object | null
    setValue(value?: object | null): void
    unset(): void
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
    constructor (config?: MapIterator_ConstructProps)
    _init (config?: MapIterator_ConstructProps): void
    static $gtype: GObject.Type
}
interface MultiMap_ConstructProps extends GObject.Object_ConstructProps {
}
class MultiMap {
    /* Properties of Gee-1.0.Gee.MultiMap */
    readonly size: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.MultiMap */
    getKeys(): Set
    getAllKeys(): MultiSet
    getValues(): Collection
    contains(key?: object | null): boolean
    get(key?: object | null): Collection
    set(key?: object | null, value?: object | null): void
    remove(key?: object | null, value?: object | null): boolean
    removeAll(key?: object | null): boolean
    clear(): void
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
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MultiMap_ConstructProps)
    _init (config?: MultiMap_ConstructProps): void
    static $gtype: GObject.Type
}
interface MultiSet_ConstructProps extends Collection_ConstructProps {
}
class MultiSet {
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.MultiSet */
    count(item?: object | null): number
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
    iterator(): Iterator
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
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MultiSet_ConstructProps)
    _init (config?: MultiSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Collection
    static $gtype: GObject.Type
}
interface Queue_ConstructProps extends Collection_ConstructProps {
}
class Queue {
    /* Properties of Gee-1.0.Gee.Queue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
    iterator(): Iterator
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
    connect(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Queue_ConstructProps)
    _init (config?: Queue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Collection
    static $gtype: GObject.Type
}
interface Set_ConstructProps extends Collection_ConstructProps {
}
class Set {
    /* Properties of Gee-1.0.Gee.Set */
    readonly readOnlyView: Set
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
    iterator(): Iterator
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
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Set_ConstructProps)
    _init (config?: Set_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Set
    /* Function overloads */
    static empty(): Collection
    static $gtype: GObject.Type
}
interface SortedSet_ConstructProps extends Set_ConstructProps {
}
class SortedSet {
    /* Properties of Gee-1.0.Gee.Set */
    readonly readOnlyView: Set
    /* Properties of Gee-1.0.Gee.Collection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.SortedSet */
    first(): object | null
    last(): object | null
    bidirIterator(): BidirIterator
    iteratorAt(element?: object | null): BidirIterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    headSet(before?: object | null): SortedSet
    tailSet(after?: object | null): SortedSet
    subSet(from?: object | null, to?: object | null): SortedSet
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    /* Methods of Gee-1.0.Gee.Iterable */
    iterator(): Iterator
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
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SortedSet_ConstructProps)
    _init (config?: SortedSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Set
    /* Function overloads */
    static empty(): Collection
    static $gtype: GObject.Type
}
interface AbstractCollection_ConstructProps extends GObject.Object_ConstructProps {
}
class AbstractCollection {
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    iterator(): Iterator
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
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractCollection_ConstructProps)
    _init (config?: AbstractCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Collection
    static $gtype: GObject.Type
}
interface AbstractList_ConstructProps extends AbstractCollection_ConstructProps {
}
class AbstractList {
    /* Properties of Gee-1.0.Gee.AbstractList */
    readonly readOnlyView: List
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of Gee-1.0.Gee.AbstractCollection */
    readonly parentInstance: GObject.Object
    readonly priv: AbstractCollectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractList */
    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    iterator(): Iterator
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
    /* Methods of Gee-1.0.Gee.List */
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    insertAll(index: number, collection: Collection): void
    sort(compareFunc?: GLib.CompareFunc | null): void
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractList_ConstructProps)
    _init (config?: AbstractList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): List
    /* Function overloads */
    static empty(): Collection
    static $gtype: GObject.Type
}
interface AbstractMap_ConstructProps extends GObject.Object_ConstructProps {
}
class AbstractMap {
    /* Properties of Gee-1.0.Gee.AbstractMap */
    readonly size: number
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Properties of Gee-1.0.Gee.Map */
    readonly keyType: GObject.Type
    readonly valueType: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    mapIterator(): MapIterator
    clear(): void
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    hasAll(map: Map): boolean
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
    /* Methods of Gee-1.0.Gee.Iterable */
    iterator(): Iterator
    /* Methods of Gee-1.0.Gee.Map */
    hasKey(key?: object | null): boolean
    contains(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    removeAll(map: Map): boolean
    hasAll(map: Map): boolean
    containsAll(map: Map): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractMap_ConstructProps)
    _init (config?: AbstractMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Map
    static $gtype: GObject.Type
}
interface AbstractMultiMap_ConstructProps extends GObject.Object_ConstructProps {
}
class AbstractMultiMap {
    /* Properties of Gee-1.0.Gee.MultiMap */
    readonly size: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractMultiMap */
    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): GLib.EqualFunc
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
    /* Methods of Gee-1.0.Gee.MultiMap */
    getKeys(): Set
    getAllKeys(): MultiSet
    getValues(): Collection
    contains(key?: object | null): boolean
    get(key?: object | null): Collection
    set(key?: object | null, value?: object | null): void
    remove(key?: object | null, value?: object | null): boolean
    removeAll(key?: object | null): boolean
    clear(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractMultiMap_ConstructProps)
    _init (config?: AbstractMultiMap_ConstructProps): void
    static $gtype: GObject.Type
}
interface AbstractMultiSet_ConstructProps extends AbstractCollection_ConstructProps {
}
class AbstractMultiSet {
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of Gee-1.0.Gee.AbstractCollection */
    readonly parentInstance: GObject.Object
    readonly priv: AbstractCollectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    iterator(): Iterator
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
    /* Methods of Gee-1.0.Gee.MultiSet */
    count(item?: object | null): number
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractMultiSet_ConstructProps)
    _init (config?: AbstractMultiSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Collection
    static $gtype: GObject.Type
}
interface AbstractQueue_ConstructProps extends AbstractCollection_ConstructProps {
}
class AbstractQueue {
    /* Properties of Gee-1.0.Gee.AbstractQueue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of Gee-1.0.Gee.AbstractCollection */
    readonly parentInstance: GObject.Object
    readonly priv: AbstractCollectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractQueue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    iterator(): Iterator
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
    /* Methods of Gee-1.0.Gee.Queue */
    offer(element?: object | null): boolean
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractQueue_ConstructProps)
    _init (config?: AbstractQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Collection
    static $gtype: GObject.Type
}
interface AbstractSet_ConstructProps extends AbstractCollection_ConstructProps {
}
class AbstractSet {
    /* Properties of Gee-1.0.Gee.AbstractSet */
    readonly readOnlyView: Set
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of Gee-1.0.Gee.AbstractCollection */
    readonly parentInstance: GObject.Object
    readonly priv: AbstractCollectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    iterator(): Iterator
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
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractSet_ConstructProps)
    _init (config?: AbstractSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(): Set
    /* Function overloads */
    static empty(): Collection
    static $gtype: GObject.Type
}
interface ArrayList_ConstructProps extends AbstractList_ConstructProps {
    /* Constructor properties of Gee-1.0.Gee.ArrayList */
    equalFunc?: GLib.EqualFunc
}
class ArrayList {
    /* Properties of Gee-1.0.Gee.ArrayList */
    equalFunc: GLib.EqualFunc
    /* Properties of Gee-1.0.Gee.AbstractList */
    readonly readOnlyView: List
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    /* Fields of Gee-1.0.Gee.AbstractList */
    readonly parentInstance: AbstractCollection
    readonly priv: AbstractListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.ArrayList */
    sortWithData(compare: GLib.CompareDataFunc): void
    /* Methods of Gee-1.0.Gee.AbstractList */
    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    iterator(): Iterator
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
    connect(sigName: "notify::equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ArrayList_ConstructProps)
    _init (config?: ArrayList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(equalFunc?: GLib.EqualFunc | null): ArrayList
    static $gtype: GObject.Type
}
interface HashMap_ConstructProps extends AbstractMap_ConstructProps {
    /* Constructor properties of Gee-1.0.Gee.HashMap */
    keyHashFunc?: GLib.HashFunc
    keyEqualFunc?: GLib.EqualFunc
    valueEqualFunc?: GLib.EqualFunc
}
class HashMap {
    /* Properties of Gee-1.0.Gee.HashMap */
    keyHashFunc: GLib.HashFunc
    keyEqualFunc: GLib.EqualFunc
    valueEqualFunc: GLib.EqualFunc
    /* Properties of Gee-1.0.Gee.AbstractMap */
    readonly size: number
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    /* Fields of Gee-1.0.Gee.AbstractMap */
    readonly parentInstance: GObject.Object
    readonly priv: AbstractMapPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    mapIterator(): MapIterator
    clear(): void
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    hasAll(map: Map): boolean
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
    connect(sigName: "notify::key-hash-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-hash-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HashMap_ConstructProps)
    _init (config?: HashMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueEqualFunc?: GLib.EqualFunc | null): HashMap
    static $gtype: GObject.Type
}
interface HashMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {
    /* Constructor properties of Gee-1.0.Gee.HashMultiMap */
    valueHashFunc?: GLib.HashFunc
    valueEqualFunc?: GLib.EqualFunc
}
class HashMultiMap {
    /* Properties of Gee-1.0.Gee.HashMultiMap */
    readonly keyHashFunc: GLib.HashFunc
    readonly keyEqualFunc: GLib.EqualFunc
    valueHashFunc: GLib.HashFunc
    valueEqualFunc: GLib.EqualFunc
    /* Fields of Gee-1.0.Gee.AbstractMultiMap */
    readonly parentInstance: GObject.Object
    readonly priv: AbstractMultiMapPrivate
    readonly storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractMultiMap */
    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): GLib.EqualFunc
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
    connect(sigName: "notify::key-hash-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-hash-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-hash-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-hash-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HashMultiMap_ConstructProps)
    _init (config?: HashMultiMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueHashFunc?: GLib.HashFunc | null, valueEqualFunc?: GLib.EqualFunc | null): HashMultiMap
    static $gtype: GObject.Type
}
interface HashMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {
}
class HashMultiSet {
    /* Properties of Gee-1.0.Gee.HashMultiSet */
    readonly hashFunc: GLib.HashFunc
    readonly equalFunc: GLib.EqualFunc
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Fields of Gee-1.0.Gee.AbstractMultiSet */
    readonly parentInstance: AbstractCollection
    readonly priv: AbstractMultiSetPrivate
    readonly storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    iterator(): Iterator
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
    connect(sigName: "notify::hash-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hash-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HashMultiSet_ConstructProps)
    _init (config?: HashMultiSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null): HashMultiSet
    static $gtype: GObject.Type
}
interface HashSet_ConstructProps extends AbstractSet_ConstructProps {
    /* Constructor properties of Gee-1.0.Gee.HashSet */
    hashFunc?: GLib.HashFunc
    equalFunc?: GLib.EqualFunc
}
class HashSet {
    /* Properties of Gee-1.0.Gee.HashSet */
    hashFunc: GLib.HashFunc
    equalFunc: GLib.EqualFunc
    /* Properties of Gee-1.0.Gee.AbstractSet */
    readonly readOnlyView: Set
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    /* Fields of Gee-1.0.Gee.AbstractSet */
    readonly parentInstance: AbstractCollection
    readonly priv: AbstractSetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    iterator(): Iterator
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
    connect(sigName: "notify::hash-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hash-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HashSet_ConstructProps)
    _init (config?: HashSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null): HashSet
    static $gtype: GObject.Type
}
interface LinkedList_ConstructProps extends AbstractList_ConstructProps {
    /* Constructor properties of Gee-1.0.Gee.LinkedList */
    equalFunc?: GLib.EqualFunc
}
class LinkedList {
    /* Properties of Gee-1.0.Gee.LinkedList */
    equalFunc: GLib.EqualFunc
    /* Properties of Gee-1.0.Gee.AbstractList */
    readonly readOnlyView: List
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Queue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of Gee-1.0.Gee.AbstractList */
    readonly parentInstance: AbstractCollection
    readonly priv: AbstractListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractList */
    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    iterator(): Iterator
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
    /* Methods of Gee-1.0.Gee.Queue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    /* Methods of Gee-1.0.Gee.Deque */
    offerHead(element?: object | null): boolean
    peekHead(): object | null
    pollHead(): object | null
    drainHead(recipient: Collection, amount: number): number
    offerTail(element?: object | null): boolean
    peekTail(): object | null
    pollTail(): object | null
    drainTail(recipient: Collection, amount: number): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LinkedList_ConstructProps)
    _init (config?: LinkedList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(equalFunc?: GLib.EqualFunc | null): LinkedList
    static empty(): Collection
    static $gtype: GObject.Type
}
interface PriorityQueue_ConstructProps extends AbstractQueue_ConstructProps {
    /* Constructor properties of Gee-1.0.Gee.PriorityQueue */
    compareFunc?: GLib.CompareFunc
}
class PriorityQueue {
    /* Properties of Gee-1.0.Gee.PriorityQueue */
    compareFunc: GLib.CompareFunc
    /* Properties of Gee-1.0.Gee.AbstractQueue */
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Fields of Gee-1.0.Gee.AbstractQueue */
    readonly parentInstance: AbstractCollection
    readonly priv: AbstractQueuePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractQueue */
    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    iterator(): Iterator
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
    connect(sigName: "notify::compare-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compare-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PriorityQueue_ConstructProps)
    _init (config?: PriorityQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(compareFunc?: GLib.CompareFunc | null): PriorityQueue
    static $gtype: GObject.Type
}
interface TreeMap_ConstructProps extends AbstractMap_ConstructProps {
    /* Constructor properties of Gee-1.0.Gee.TreeMap */
    keyCompareFunc?: GLib.CompareFunc
    valueEqualFunc?: GLib.EqualFunc
}
class TreeMap {
    /* Properties of Gee-1.0.Gee.TreeMap */
    keyCompareFunc: GLib.CompareFunc
    valueEqualFunc: GLib.EqualFunc
    /* Properties of Gee-1.0.Gee.AbstractMap */
    readonly size: number
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    /* Fields of Gee-1.0.Gee.AbstractMap */
    readonly parentInstance: GObject.Object
    readonly priv: AbstractMapPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    mapIterator(): MapIterator
    clear(): void
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    hasAll(map: Map): boolean
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
    connect(sigName: "notify::key-compare-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-compare-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-equal-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeMap_ConstructProps)
    _init (config?: TreeMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(keyCompareFunc?: GLib.CompareFunc | null, valueEqualFunc?: GLib.EqualFunc | null): TreeMap
    static $gtype: GObject.Type
}
interface TreeMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {
    /* Constructor properties of Gee-1.0.Gee.TreeMultiMap */
    valueCompareFunc?: GLib.CompareFunc
}
class TreeMultiMap {
    /* Properties of Gee-1.0.Gee.TreeMultiMap */
    readonly keyCompareFunc: GLib.CompareFunc
    valueCompareFunc: GLib.CompareFunc
    /* Fields of Gee-1.0.Gee.AbstractMultiMap */
    readonly parentInstance: GObject.Object
    readonly priv: AbstractMultiMapPrivate
    readonly storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractMultiMap */
    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): GLib.EqualFunc
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
    connect(sigName: "notify::key-compare-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-compare-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-compare-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-compare-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeMultiMap_ConstructProps)
    _init (config?: TreeMultiMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(keyCompareFunc?: GLib.CompareFunc | null, valueCompareFunc?: GLib.CompareFunc | null): TreeMultiMap
    static $gtype: GObject.Type
}
interface TreeMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {
}
class TreeMultiSet {
    /* Properties of Gee-1.0.Gee.TreeMultiSet */
    readonly compareFunc: GLib.CompareFunc
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    /* Fields of Gee-1.0.Gee.AbstractMultiSet */
    readonly parentInstance: AbstractCollection
    readonly priv: AbstractMultiSetPrivate
    readonly storageMap: Map
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    iterator(): Iterator
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
    connect(sigName: "notify::compare-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compare-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeMultiSet_ConstructProps)
    _init (config?: TreeMultiSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(compareFunc?: GLib.CompareFunc | null): TreeMultiSet
    static $gtype: GObject.Type
}
interface TreeSet_ConstructProps extends AbstractSet_ConstructProps {
    /* Constructor properties of Gee-1.0.Gee.TreeSet */
    compareFunc?: GLib.CompareFunc
}
class TreeSet {
    /* Properties of Gee-1.0.Gee.TreeSet */
    compareFunc: GLib.CompareFunc
    /* Properties of Gee-1.0.Gee.AbstractSet */
    readonly readOnlyView: Set
    /* Properties of Gee-1.0.Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    /* Properties of Gee-1.0.Gee.Iterable */
    readonly elementType: GObject.Type
    /* Fields of Gee-1.0.Gee.AbstractSet */
    readonly parentInstance: AbstractCollection
    readonly priv: AbstractSetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gee-1.0.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    iterator(): Iterator
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
    /* Methods of Gee-1.0.Gee.SortedSet */
    first(): object | null
    last(): object | null
    bidirIterator(): BidirIterator
    iteratorAt(element?: object | null): BidirIterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    headSet(before?: object | null): SortedSet
    tailSet(after?: object | null): SortedSet
    subSet(from?: object | null, to?: object | null): SortedSet
    /* Methods of Gee-1.0.Gee.Collection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compare-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compare-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeSet_ConstructProps)
    _init (config?: TreeSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(compareFunc?: GLib.CompareFunc | null): TreeSet
    static empty(): Set
    /* Function overloads */
    static empty(): Collection
    static $gtype: GObject.Type
}
interface MapEntry_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gee-1.0.Gee.MapEntry */
    value?: object
}
class MapEntry {
    /* Properties of Gee-1.0.Gee.MapEntry */
    readonly key: object
    value: object
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MapEntry_ConstructProps)
    _init (config?: MapEntry_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AbstractCollectionClass {
    /* Fields of Gee-1.0.Gee.AbstractCollectionClass */
    readonly parentClass: GObject.ObjectClass
    readonly contains: (self: AbstractCollection, item?: object | null) => boolean
    readonly add: (self: AbstractCollection, item?: object | null) => boolean
    readonly remove: (self: AbstractCollection, item?: object | null) => boolean
    readonly clear: (self: AbstractCollection) => void
    readonly toArray: (self: AbstractCollection) => object[]
    readonly addAll: (self: AbstractCollection, collection: Collection) => boolean
    readonly containsAll: (self: AbstractCollection, collection: Collection) => boolean
    readonly removeAll: (self: AbstractCollection, collection: Collection) => boolean
    readonly retainAll: (self: AbstractCollection, collection: Collection) => boolean
    readonly iterator: (self: AbstractCollection) => Iterator
    static name: string
}
class AbstractCollectionPrivate {
    static name: string
}
abstract class AbstractListClass {
    /* Fields of Gee-1.0.Gee.AbstractListClass */
    readonly parentClass: AbstractCollectionClass
    readonly listIterator: (self: AbstractList) => ListIterator
    readonly get: (self: AbstractList, index: number) => object | null
    readonly set: (self: AbstractList, index: number, item?: object | null) => void
    readonly indexOf: (self: AbstractList, item?: object | null) => number
    readonly insert: (self: AbstractList, index: number, item?: object | null) => void
    readonly removeAt: (self: AbstractList, index: number) => object | null
    readonly slice: (self: AbstractList, start: number, stop: number) => List | null
    readonly first: (self: AbstractList) => object | null
    readonly last: (self: AbstractList) => object | null
    readonly insertAll: (self: AbstractList, index: number, collection: Collection) => void
    static name: string
}
class AbstractListPrivate {
    static name: string
}
abstract class AbstractMapClass {
    /* Fields of Gee-1.0.Gee.AbstractMapClass */
    readonly parentClass: GObject.ObjectClass
    readonly hasKey: (self: AbstractMap, key?: object | null) => boolean
    readonly has: (self: AbstractMap, key?: object | null, value?: object | null) => boolean
    readonly get: (self: AbstractMap, key?: object | null) => object | null
    readonly set: (self: AbstractMap, key?: object | null, value?: object | null) => void
    readonly unset: (self: AbstractMap, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    readonly mapIterator: (self: AbstractMap) => MapIterator
    readonly clear: (self: AbstractMap) => void
    readonly setAll: (self: AbstractMap, map: Map) => void
    readonly unsetAll: (self: AbstractMap, map: Map) => boolean
    readonly hasAll: (self: AbstractMap, map: Map) => boolean
    static name: string
}
class AbstractMapPrivate {
    static name: string
}
abstract class AbstractMultiMapClass {
    /* Fields of Gee-1.0.Gee.AbstractMultiMapClass */
    readonly parentClass: GObject.ObjectClass
    readonly createValueStorage: (self: AbstractMultiMap) => Collection
    readonly createMultiKeySet: (self: AbstractMultiMap) => MultiSet
    readonly getValueEqualFunc: (self: AbstractMultiMap) => GLib.EqualFunc
    static name: string
}
class AbstractMultiMapPrivate {
    static name: string
}
abstract class AbstractMultiSetClass {
    /* Fields of Gee-1.0.Gee.AbstractMultiSetClass */
    readonly parentClass: AbstractCollectionClass
    static name: string
}
class AbstractMultiSetPrivate {
    static name: string
}
abstract class AbstractQueueClass {
    /* Fields of Gee-1.0.Gee.AbstractQueueClass */
    readonly parentClass: AbstractCollectionClass
    readonly offer: (self: AbstractQueue, element?: object | null) => boolean
    readonly peek: (self: AbstractQueue) => object | null
    readonly poll: (self: AbstractQueue) => object | null
    readonly drain: (self: AbstractQueue, recipient: Collection, amount: number) => number
    static name: string
}
class AbstractQueuePrivate {
    static name: string
}
abstract class AbstractSetClass {
    /* Fields of Gee-1.0.Gee.AbstractSetClass */
    readonly parentClass: AbstractCollectionClass
    static name: string
}
class AbstractSetPrivate {
    static name: string
}
abstract class ArrayListClass {
    /* Fields of Gee-1.0.Gee.ArrayListClass */
    readonly parentClass: AbstractListClass
    static name: string
}
class ArrayListPrivate {
    static name: string
}
abstract class HashMapClass {
    /* Fields of Gee-1.0.Gee.HashMapClass */
    readonly parentClass: AbstractMapClass
    static name: string
}
class HashMapPrivate {
    static name: string
}
abstract class HashMultiMapClass {
    /* Fields of Gee-1.0.Gee.HashMultiMapClass */
    readonly parentClass: AbstractMultiMapClass
    static name: string
}
class HashMultiMapPrivate {
    static name: string
}
abstract class HashMultiSetClass {
    /* Fields of Gee-1.0.Gee.HashMultiSetClass */
    readonly parentClass: AbstractMultiSetClass
    static name: string
}
class HashMultiSetPrivate {
    static name: string
}
abstract class HashSetClass {
    /* Fields of Gee-1.0.Gee.HashSetClass */
    readonly parentClass: AbstractSetClass
    static name: string
}
class HashSetPrivate {
    static name: string
}
abstract class LinkedListClass {
    /* Fields of Gee-1.0.Gee.LinkedListClass */
    readonly parentClass: AbstractListClass
    static name: string
}
class LinkedListPrivate {
    static name: string
}
abstract class PriorityQueueClass {
    /* Fields of Gee-1.0.Gee.PriorityQueueClass */
    readonly parentClass: AbstractQueueClass
    static name: string
}
class PriorityQueuePrivate {
    static name: string
}
abstract class TreeMapClass {
    /* Fields of Gee-1.0.Gee.TreeMapClass */
    readonly parentClass: AbstractMapClass
    static name: string
}
class TreeMapPrivate {
    static name: string
}
abstract class TreeMultiMapClass {
    /* Fields of Gee-1.0.Gee.TreeMultiMapClass */
    readonly parentClass: AbstractMultiMapClass
    static name: string
}
class TreeMultiMapPrivate {
    static name: string
}
abstract class TreeMultiSetClass {
    /* Fields of Gee-1.0.Gee.TreeMultiSetClass */
    readonly parentClass: AbstractMultiSetClass
    static name: string
}
class TreeMultiSetPrivate {
    static name: string
}
abstract class TreeSetClass {
    /* Fields of Gee-1.0.Gee.TreeSetClass */
    readonly parentClass: AbstractSetClass
    static name: string
}
class TreeSetPrivate {
    static name: string
}
abstract class BidirIteratorIface {
    /* Fields of Gee-1.0.Gee.BidirIteratorIface */
    readonly parentIface: GObject.TypeInterface
    readonly previous: (self: BidirIterator) => boolean
    readonly hasPrevious: (self: BidirIterator) => boolean
    readonly last: (self: BidirIterator) => boolean
    static name: string
}
abstract class CollectionIface {
    /* Fields of Gee-1.0.Gee.CollectionIface */
    readonly parentIface: GObject.TypeInterface
    readonly contains: (self: Collection, item?: object | null) => boolean
    readonly add: (self: Collection, item?: object | null) => boolean
    readonly remove: (self: Collection, item?: object | null) => boolean
    readonly clear: (self: Collection) => void
    readonly addAll: (self: Collection, collection: Collection) => boolean
    readonly containsAll: (self: Collection, collection: Collection) => boolean
    readonly removeAll: (self: Collection, collection: Collection) => boolean
    readonly retainAll: (self: Collection, collection: Collection) => boolean
    readonly toArray: (self: Collection) => object[]
    static name: string
}
abstract class ComparableIface {
    /* Fields of Gee-1.0.Gee.ComparableIface */
    readonly parentIface: GObject.TypeInterface
    readonly compareTo: (self: Comparable, object?: object | null) => number
    static name: string
}
abstract class DequeIface {
    /* Fields of Gee-1.0.Gee.DequeIface */
    readonly parentIface: GObject.TypeInterface
    readonly offerHead: (self: Deque, element?: object | null) => boolean
    readonly peekHead: (self: Deque) => object | null
    readonly pollHead: (self: Deque) => object | null
    readonly drainHead: (self: Deque, recipient: Collection, amount: number) => number
    readonly offerTail: (self: Deque, element?: object | null) => boolean
    readonly peekTail: (self: Deque) => object | null
    readonly pollTail: (self: Deque) => object | null
    readonly drainTail: (self: Deque, recipient: Collection, amount: number) => number
    static name: string
}
abstract class IterableIface {
    /* Fields of Gee-1.0.Gee.IterableIface */
    readonly parentIface: GObject.TypeInterface
    readonly iterator: (self: Iterable) => Iterator
    static name: string
}
abstract class IteratorIface {
    /* Fields of Gee-1.0.Gee.IteratorIface */
    readonly parentIface: GObject.TypeInterface
    readonly next: (self: Iterator) => boolean
    readonly hasNext: (self: Iterator) => boolean
    readonly first: (self: Iterator) => boolean
    readonly get: (self: Iterator) => object | null
    readonly remove: (self: Iterator) => void
    static name: string
}
abstract class ListIface {
    /* Fields of Gee-1.0.Gee.ListIface */
    readonly parentIface: GObject.TypeInterface
    readonly listIterator: (self: List) => ListIterator
    readonly get: (self: List, index: number) => object | null
    readonly set: (self: List, index: number, item?: object | null) => void
    readonly indexOf: (self: List, item?: object | null) => number
    readonly insert: (self: List, index: number, item?: object | null) => void
    readonly removeAt: (self: List, index: number) => object | null
    readonly slice: (self: List, start: number, stop: number) => List | null
    readonly first: (self: List) => object | null
    readonly last: (self: List) => object | null
    readonly insertAll: (self: List, index: number, collection: Collection) => void
    readonly sort: (self: List, compareFunc?: GLib.CompareFunc | null) => void
    static name: string
}
abstract class ListIteratorIface {
    /* Fields of Gee-1.0.Gee.ListIteratorIface */
    readonly parentIface: GObject.TypeInterface
    readonly set: (self: ListIterator, item?: object | null) => void
    readonly insert: (self: ListIterator, item?: object | null) => void
    readonly add: (self: ListIterator, item?: object | null) => void
    readonly index: (self: ListIterator) => number
    static name: string
}
abstract class MapIface {
    /* Fields of Gee-1.0.Gee.MapIface */
    readonly parentIface: GObject.TypeInterface
    readonly hasKey: (self: Map, key?: object | null) => boolean
    readonly contains: (self: Map, key?: object | null) => boolean
    readonly has: (self: Map, key?: object | null, value?: object | null) => boolean
    readonly get: (self: Map, key?: object | null) => object | null
    readonly set: (self: Map, key?: object | null, value?: object | null) => void
    readonly unset: (self: Map, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    readonly remove: (self: Map, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    readonly clear: (self: Map) => void
    readonly mapIterator: (self: Map) => MapIterator
    readonly setAll: (self: Map, map: Map) => void
    readonly unsetAll: (self: Map, map: Map) => boolean
    readonly removeAll: (self: Map, map: Map) => boolean
    readonly hasAll: (self: Map, map: Map) => boolean
    readonly containsAll: (self: Map, map: Map) => boolean
    static name: string
}
abstract class MapEntryClass {
    /* Fields of Gee-1.0.Gee.MapEntryClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class EntryPrivate {
    static name: string
}
abstract class MapIteratorIface {
    /* Fields of Gee-1.0.Gee.MapIteratorIface */
    readonly parentIface: GObject.TypeInterface
    readonly next: (self: MapIterator) => boolean
    readonly hasNext: (self: MapIterator) => boolean
    readonly first: (self: MapIterator) => boolean
    readonly getKey: (self: MapIterator) => object | null
    readonly getValue: (self: MapIterator) => object | null
    readonly setValue: (self: MapIterator, value?: object | null) => void
    readonly unset: (self: MapIterator) => void
    static name: string
}
abstract class MultiMapIface {
    /* Fields of Gee-1.0.Gee.MultiMapIface */
    readonly parentIface: GObject.TypeInterface
    readonly getKeys: (self: MultiMap) => Set
    readonly getAllKeys: (self: MultiMap) => MultiSet
    readonly getValues: (self: MultiMap) => Collection
    readonly contains: (self: MultiMap, key?: object | null) => boolean
    readonly get: (self: MultiMap, key?: object | null) => Collection
    readonly set: (self: MultiMap, key?: object | null, value?: object | null) => void
    readonly remove: (self: MultiMap, key?: object | null, value?: object | null) => boolean
    readonly removeAll: (self: MultiMap, key?: object | null) => boolean
    readonly clear: (self: MultiMap) => void
    static name: string
}
abstract class MultiSetIface {
    /* Fields of Gee-1.0.Gee.MultiSetIface */
    readonly parentIface: GObject.TypeInterface
    readonly count: (self: MultiSet, item?: object | null) => number
    static name: string
}
abstract class QueueIface {
    /* Fields of Gee-1.0.Gee.QueueIface */
    readonly parentIface: GObject.TypeInterface
    readonly offer: (self: Queue, element?: object | null) => boolean
    readonly peek: (self: Queue) => object | null
    readonly poll: (self: Queue) => object | null
    readonly drain: (self: Queue, recipient: Collection, amount: number) => number
    static name: string
}
abstract class SetIface {
    /* Fields of Gee-1.0.Gee.SetIface */
    readonly parentIface: GObject.TypeInterface
    static name: string
}
abstract class SortedSetIface {
    /* Fields of Gee-1.0.Gee.SortedSetIface */
    readonly parentIface: GObject.TypeInterface
    readonly first: (self: SortedSet) => object | null
    readonly last: (self: SortedSet) => object | null
    readonly bidirIterator: (self: SortedSet) => BidirIterator
    readonly iteratorAt: (self: SortedSet, element?: object | null) => BidirIterator | null
    readonly lower: (self: SortedSet, element?: object | null) => object | null
    readonly higher: (self: SortedSet, element?: object | null) => object | null
    readonly floor: (self: SortedSet, element?: object | null) => object | null
    readonly ceil: (self: SortedSet, element?: object | null) => object | null
    readonly headSet: (self: SortedSet, before?: object | null) => SortedSet
    readonly tailSet: (self: SortedSet, after?: object | null) => SortedSet
    readonly subSet: (self: SortedSet, from?: object | null, to?: object | null) => SortedSet
    static name: string
}
}
export default Gee;