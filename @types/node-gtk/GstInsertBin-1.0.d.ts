/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstInsertBin-1.0
 */

import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstInsertBin {

interface InsertBinCallback {
    (insertbin: InsertBin, element: Gst.Element, success: boolean): void
}
interface InsertBin_ConstructProps extends Gst.Bin_ConstructProps {
}
class InsertBin {
    /* Properties of Gst-1.0.Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Fields of Gst-1.0.Gst.Bin */
    readonly element: Gst.Element
    readonly numchildren: number
    readonly children: Gst.Element[]
    readonly childrenCookie: number
    readonly childBus: Gst.Bus
    readonly messages: Gst.Message[]
    readonly polling: boolean
    readonly stateDirty: boolean
    readonly clockDirty: boolean
    readonly providedClock: Gst.Clock
    readonly clockProvider: Gst.Element
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    readonly stateLock: GLib.RecMutex
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly targetState: Gst.State
    readonly currentState: Gst.State
    readonly nextState: Gst.State
    readonly pendingState: Gst.State
    readonly lastReturn: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly baseTime: Gst.ClockTimeDiff
    readonly startTime: Gst.ClockTime
    readonly numpads: number
    readonly pads: Gst.Pad[]
    readonly numsrcpads: number
    readonly srcpads: Gst.Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Gst.Pad[]
    readonly padsCookie: number
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstInsertBin-1.0.GstInsertBin.InsertBin */
    append(element: Gst.Element, callback: InsertBinCallback): void
    insertAfter(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void
    insertBefore(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void
    prepend(element: Gst.Element, callback: InsertBinCallback): void
    remove(element: Gst.Element, callback: InsertBinCallback): void
    /* Methods of Gst-1.0.Gst.Bin */
    add(element: Gst.Element): boolean
    findUnlinkedPad(direction: Gst.PadDirection): Gst.Pad | null
    getByInterface(iface: GObject.Type): Gst.Element | null
    getByName(name: string): Gst.Element | null
    getByNameRecurseUp(name: string): Gst.Element | null
    getSuppressedFlags(): Gst.ElementFlags
    iterateAllByElementFactoryName(factoryName: string): Gst.Iterator | null
    iterateAllByInterface(iface: GObject.Type): Gst.Iterator | null
    iterateElements(): Gst.Iterator | null
    iterateRecurse(): Gst.Iterator | null
    iterateSinks(): Gst.Iterator | null
    iterateSorted(): Gst.Iterator | null
    iterateSources(): Gst.Iterator | null
    recalculateLatency(): boolean
    remove(element: Gst.Element): boolean
    setSuppressedFlags(flags: Gst.ElementFlags): void
    syncChildrenStates(): boolean
    /* Methods of Gst-1.0.Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: Function): void
    /* Methods of Gst-1.0.Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    setProperty(name: string, value: any): void
    /* Signals of GstInsertBin-1.0.GstInsertBin.InsertBin */
    connect(sigName: "append", callback: ((callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    on(sigName: "append", callback: (callback: Gst.Element, userData?: object | null, userData2?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "append", callback: (callback: Gst.Element, userData?: object | null, userData2?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "append", callback: (callback: Gst.Element, userData?: object | null, userData2?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "append", callback: Gst.Element, userData?: object | null, userData2?: object | null): void
    connect(sigName: "insert-after", callback: ((sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    on(sigName: "insert-after", callback: (sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insert-after", callback: (sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insert-after", callback: (sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "insert-after", sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null): void
    connect(sigName: "insert-before", callback: ((sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    on(sigName: "insert-before", callback: (sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insert-before", callback: (sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insert-before", callback: (sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "insert-before", sibling: Gst.Element, callback: Gst.Element, userData?: object | null, userData2?: object | null): void
    connect(sigName: "prepend", callback: ((callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    on(sigName: "prepend", callback: (callback: Gst.Element, userData?: object | null, userData2?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prepend", callback: (callback: Gst.Element, userData?: object | null, userData2?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prepend", callback: (callback: Gst.Element, userData?: object | null, userData2?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "prepend", callback: Gst.Element, userData?: object | null, userData2?: object | null): void
    connect(sigName: "remove", callback: ((callback: Gst.Element, userData?: object | null, userData2?: object | null) => void)): number
    on(sigName: "remove", callback: (callback: Gst.Element, userData?: object | null, userData2?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove", callback: (callback: Gst.Element, userData?: object | null, userData2?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove", callback: (callback: Gst.Element, userData?: object | null, userData2?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "remove", callback: Gst.Element, userData?: object | null, userData2?: object | null): void
    /* Signals of Gst-1.0.Gst.Bin */
    connect(sigName: "deep-element-added", callback: ((subBin: Gst.Bin, element: Gst.Element) => void)): number
    on(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-added", callback: (subBin: Gst.Bin, element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-added", subBin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "deep-element-removed", callback: ((subBin: Gst.Bin, element: Gst.Element) => void)): number
    on(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-removed", callback: (subBin: Gst.Bin, element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-removed", subBin: Gst.Bin, element: Gst.Element): void
    connect(sigName: "do-latency", callback: (() => boolean)): number
    on(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: ((element: Gst.Element) => void)): number
    on(sigName: "element-added", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", element: Gst.Element): void
    connect(sigName: "element-removed", callback: ((element: Gst.Element) => void)): number
    on(sigName: "element-removed", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (element: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (element: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.ChildProxy */
    connect(sigName: "child-added", callback: ((object: GObject.Object, name: string) => void)): number
    on(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: ((object: GObject.Object, name: string) => void)): number
    on(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::async-handling", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-forward", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InsertBin_ConstructProps)
    _init (config?: InsertBin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): InsertBin
    /* Function overloads */
    static new(name?: string | null): InsertBin
    static $gtype: GObject.Type
}
abstract class InsertBinClass {
    /* Fields of GstInsertBin-1.0.GstInsertBin.InsertBinClass */
    readonly parentClass: Gst.BinClass
    static name: string
}
class InsertBinPrivate {
    static name: string
}
}
export default GstInsertBin;