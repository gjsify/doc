/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstBase-1.0
 */

import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstBase {

enum AggregatorStartTimeSelection {
    ZERO,
    FIRST,
    SET,
}
enum BaseParseFrameFlags {
    NONE,
    NEW_FRAME,
    NO_FRAME,
    CLIP,
    DROP,
    QUEUE,
}
enum BaseSrcFlags {
    STARTING,
    STARTED,
    LAST,
}
enum CollectPadsStateFlags {
    EOS,
    FLUSHING,
    NEW_SEGMENT,
    WAITING,
    LOCKED,
}
const BASE_PARSE_FLAG_DRAINING: number
const BASE_PARSE_FLAG_LOST_SYNC: number
const BASE_TRANSFORM_SINK_NAME: string
const BASE_TRANSFORM_SRC_NAME: string
function typeFindHelper(src: Gst.Pad, size: number): Gst.Caps | null
function typeFindHelperForBuffer(obj: Gst.Object | null, buf: Gst.Buffer): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
function typeFindHelperForBufferWithExtension(obj: Gst.Object | null, buf: Gst.Buffer, extension?: string | null): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
function typeFindHelperForData(obj: Gst.Object | null, data: Uint8Array): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
function typeFindHelperForDataWithExtension(obj: Gst.Object | null, data: Uint8Array, extension?: string | null): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
function typeFindHelperForExtension(obj: Gst.Object | null, extension: string): Gst.Caps | null
function typeFindHelperGetRange(obj: Gst.Object, parent: Gst.Object | null, func: TypeFindHelperGetRangeFunction, size: number, extension?: string | null): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
function typeFindHelperGetRangeFull(obj: Gst.Object, parent: Gst.Object | null, func: TypeFindHelperGetRangeFunction, size: number, extension?: string | null): [ /* returnType */ Gst.FlowReturn, /* caps */ Gst.Caps, /* prob */ Gst.TypeFindProbability | null ]
interface CollectDataDestroyNotify {
    (data: CollectData): void
}
interface CollectPadsBufferFunction {
    (pads: CollectPads, data: CollectData, buffer: Gst.Buffer): Gst.FlowReturn
}
interface CollectPadsClipFunction {
    (pads: CollectPads, data: CollectData, inbuffer: Gst.Buffer): Gst.FlowReturn
}
interface CollectPadsCompareFunction {
    (pads: CollectPads, data1: CollectData, timestamp1: Gst.ClockTime, data2: CollectData, timestamp2: Gst.ClockTime): number
}
interface CollectPadsEventFunction {
    (pads: CollectPads, pad: CollectData, event: Gst.Event): boolean
}
interface CollectPadsFlushFunction {
    (pads: CollectPads): void
}
interface CollectPadsFunction {
    (pads: CollectPads): Gst.FlowReturn
}
interface CollectPadsQueryFunction {
    (pads: CollectPads, pad: CollectData, query: Gst.Query): boolean
}
interface DataQueueEmptyCallback {
    (queue: DataQueue, checkdata?: object | null): void
}
interface DataQueueFullCallback {
    (queue: DataQueue, checkdata?: object | null): void
}
interface TypeFindHelperGetRangeFunction {
    (obj: Gst.Object, parent: Gst.Object | null, offset: number, length: number): Gst.FlowReturn
}
interface Adapter_ConstructProps extends GObject.Object_ConstructProps {
}
class Adapter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.Adapter */
    available(): number
    availableFast(): number
    clear(): void
    copy(offset: number, size: number): any
    distanceFromDiscont(): number
    dtsAtDiscont(): Gst.ClockTime
    flush(flush: number): void
    getBuffer(nbytes: number): Gst.Buffer | null
    getBufferFast(nbytes: number): Gst.Buffer | null
    getBufferList(nbytes: number): Gst.BufferList | null
    getList(nbytes: number): Gst.Buffer[] | null
    map(): Uint8Array | null
    maskedScanUint32(mask: number, pattern: number, offset: number, size: number): number
    maskedScanUint32Peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number | null ]
    offsetAtDiscont(): number
    prevDts(): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    prevDtsAtOffset(offset: number): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    prevOffset(): [ /* returnType */ number, /* distance */ number | null ]
    prevPts(): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    prevPtsAtOffset(offset: number): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    ptsAtDiscont(): Gst.ClockTime
    push(buf: Gst.Buffer): void
    take(): Uint8Array | null
    takeBuffer(nbytes: number): Gst.Buffer | null
    takeBufferFast(nbytes: number): Gst.Buffer | null
    takeBufferList(nbytes: number): Gst.BufferList | null
    takeList(nbytes: number): Gst.Buffer[] | null
    unmap(): void
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
    constructor (config?: Adapter_ConstructProps)
    _init (config?: Adapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Adapter
    static $gtype: GObject.Type
}
interface Aggregator_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstBase-1.0.GstBase.Aggregator */
    emitSignals?: boolean
    latency?: number
    minUpstreamLatency?: number
    startTime?: number
    startTimeSelection?: AggregatorStartTimeSelection
}
class Aggregator {
    /* Properties of GstBase-1.0.GstBase.Aggregator */
    emitSignals: boolean
    latency: number
    minUpstreamLatency: number
    startTime: number
    startTimeSelection: AggregatorStartTimeSelection
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
    /* Methods of GstBase-1.0.GstBase.Aggregator */
    finishBuffer(buffer: Gst.Buffer): Gst.FlowReturn
    finishBufferList(bufferlist: Gst.BufferList): Gst.FlowReturn
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool | null
    getIgnoreInactivePads(): boolean
    getLatency(): Gst.ClockTime
    negotiate(): boolean
    peekNextSample(pad: AggregatorPad): Gst.Sample | null
    selectedSamples(pts: Gst.ClockTime, dts: Gst.ClockTime, duration: Gst.ClockTime, info?: Gst.Structure | null): void
    setIgnoreInactivePads(ignore: boolean): void
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setSrcCaps(caps: Gst.Caps): void
    simpleGetNextTime(): Gst.ClockTime
    updateSegment(segment: Gst.Segment): void
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
    /* Signals of GstBase-1.0.GstBase.Aggregator */
    connect(sigName: "samples-selected", callback: ((segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    on(sigName: "samples-selected", callback: (segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "samples-selected", callback: (segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "samples-selected", callback: (segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void): NodeJS.EventEmitter
    emit(sigName: "samples-selected", segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null): void
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
    connect(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-upstream-latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-upstream-latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time-selection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time-selection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Aggregator_ConstructProps)
    _init (config?: Aggregator_ConstructProps): void
    static $gtype: GObject.Type
}
interface AggregatorPad_ConstructProps extends Gst.Pad_ConstructProps {
    /* Constructor properties of GstBase-1.0.GstBase.AggregatorPad */
    emitSignals?: boolean
}
class AggregatorPad {
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    emitSignals: boolean
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Gst.Caps
    offset: number
    template: Gst.PadTemplate
    /* Fields of Gst-1.0.Gst.Pad */
    readonly object: Gst.Object
    readonly elementPrivate: object
    readonly padtemplate: Gst.PadTemplate
    readonly direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    dropBuffer(): boolean
    hasBuffer(): boolean
    isEos(): boolean
    isInactive(): boolean
    peekBuffer(): Gst.Buffer | null
    popBuffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    activateMode(mode: Gst.PadMode, active: boolean): boolean
    addProbe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    canLink(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chainList(list: Gst.BufferList): Gst.FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Gst.Element, streamId?: string | null): string
    eventDefault(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    getAllowedCaps(): Gst.Caps | null
    getCurrentCaps(): Gst.Caps | null
    getDirection(): Gst.PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): Gst.FlowReturn
    getOffset(): number
    getPadTemplate(): Gst.PadTemplate | null
    getPadTemplateCaps(): Gst.Caps
    getParentElement(): Gst.Element | null
    getPeer(): Gst.Pad | null
    getRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    getSingleInternalLink(): Gst.Pad | null
    getStickyEvent(eventType: Gst.EventType, idx: number): Gst.Event | null
    getStream(): Gst.Stream | null
    getStreamId(): string | null
    getTaskState(): Gst.TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Gst.Iterator | null
    iterateInternalLinksDefault(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    linkFull(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    linkMaybeGhosting(sink: Gst.Pad): boolean
    linkMaybeGhostingFull(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Gst.Query): boolean
    peerQueryAcceptCaps(caps: Gst.Caps): boolean
    peerQueryCaps(filter?: Gst.Caps | null): Gst.Caps
    peerQueryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    peerQueryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peerQueryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxyQueryAcceptCaps(query: Gst.Query): boolean
    proxyQueryCaps(query: Gst.Query): boolean
    pullRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    pushEvent(event: Gst.Event): boolean
    pushList(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    queryAcceptCaps(caps: Gst.Caps): boolean
    queryCaps(filter?: Gst.Caps | null): Gst.Caps
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDefault(parent: Gst.Object | null, query: Gst.Query): boolean
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    removeProbe(id: number): void
    sendEvent(event: Gst.Event): boolean
    setActivateFunctionFull(activate: Gst.PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: Gst.PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: Gst.PadChainFunction): void
    setChainListFunctionFull(chainlist: Gst.PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: Gst.PadEventFullFunction): void
    setEventFunctionFull(event: Gst.PadEventFunction): void
    setGetrangeFunctionFull(get: Gst.PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: Gst.PadIterIntLinkFunction): void
    setLinkFunctionFull(link: Gst.PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: Gst.PadQueryFunction): void
    setUnlinkFunctionFull(unlink: Gst.PadUnlinkFunction): void
    startTask(func: Gst.TaskFunction): boolean
    stickyEventsForeach(foreachFunc: Gst.PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    useFixedCaps(): void
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
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: ((object: Gst.Buffer) => void)): number
    on(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void): NodeJS.EventEmitter
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", peer: Gst.Pad): void
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
    connect(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AggregatorPad_ConstructProps)
    _init (config?: AggregatorPad_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseParse_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstBase-1.0.GstBase.BaseParse */
    disablePassthrough?: boolean
}
class BaseParse {
    /* Properties of GstBase-1.0.GstBase.BaseParse */
    disablePassthrough: boolean
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
    /* Methods of GstBase-1.0.GstBase.BaseParse */
    addIndexEntry(offset: number, ts: Gst.ClockTime, key: boolean, force: boolean): boolean
    convertDefault(srcFormat: Gst.Format, srcValue: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destValue */ number ]
    drain(): void
    finishFrame(frame: BaseParseFrame, size: number): Gst.FlowReturn
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    pushFrame(frame: BaseParseFrame): Gst.FlowReturn
    setAverageBitrate(bitrate: number): void
    setDuration(fmt: Gst.Format, duration: number, interval: number): void
    setFrameRate(fpsNum: number, fpsDen: number, leadIn: number, leadOut: number): void
    setHasTimingInfo(hasTiming: boolean): void
    setInferTs(inferTs: boolean): void
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setMinFrameSize(minSize: number): void
    setPassthrough(passthrough: boolean): void
    setPtsInterpolation(ptsInterpolate: boolean): void
    setSyncable(syncable: boolean): void
    setTsAtOffset(offset: number): void
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
    connect(sigName: "notify::disable-passthrough", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-passthrough", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseParse_ConstructProps)
    _init (config?: BaseParse_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseSink_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstBase-1.0.GstBase.BaseSink */
    async?: boolean
    blocksize?: number
    enableLastSample?: boolean
    maxBitrate?: number
    maxLateness?: number
    processingDeadline?: number
    qos?: boolean
    renderDelay?: number
    sync?: boolean
    throttleTime?: number
    tsOffset?: number
}
class BaseSink {
    /* Properties of GstBase-1.0.GstBase.BaseSink */
    async: boolean
    blocksize: number
    enableLastSample: boolean
    readonly lastSample: Gst.Sample
    maxBitrate: number
    maxLateness: number
    processingDeadline: number
    qos: boolean
    renderDelay: number
    readonly stats: Gst.Structure
    sync: boolean
    throttleTime: number
    tsOffset: number
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
    /* Methods of GstBase-1.0.GstBase.BaseSink */
    doPreroll(obj: Gst.MiniObject): Gst.FlowReturn
    getBlocksize(): number
    getDropOutOfSegment(): boolean
    getLastSample(): Gst.Sample | null
    getLatency(): Gst.ClockTime
    getMaxBitrate(): number
    getMaxLateness(): number
    getProcessingDeadline(): Gst.ClockTime
    getRenderDelay(): Gst.ClockTime
    getStats(): Gst.Structure
    getSync(): boolean
    getThrottleTime(): number
    getTsOffset(): Gst.ClockTimeDiff
    isAsyncEnabled(): boolean
    isLastSampleEnabled(): boolean
    isQosEnabled(): boolean
    queryLatency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstreamLive */ boolean | null, /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    setAsyncEnabled(enabled: boolean): void
    setBlocksize(blocksize: number): void
    setDropOutOfSegment(dropOutOfSegment: boolean): void
    setLastSampleEnabled(enabled: boolean): void
    setMaxBitrate(maxBitrate: number): void
    setMaxLateness(maxLateness: number): void
    setProcessingDeadline(processingDeadline: Gst.ClockTime): void
    setQosEnabled(enabled: boolean): void
    setRenderDelay(delay: Gst.ClockTime): void
    setSync(sync: boolean): void
    setThrottleTime(throttle: number): void
    setTsOffset(offset: Gst.ClockTimeDiff): void
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    waitClock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    waitPreroll(): Gst.FlowReturn
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
    connect(sigName: "notify::async", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-lateness", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-deadline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::render-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::throttle-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ts-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseSink_ConstructProps)
    _init (config?: BaseSink_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseSrc_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstBase-1.0.GstBase.BaseSrc */
    blocksize?: number
    doTimestamp?: boolean
    numBuffers?: number
    typefind?: boolean
}
class BaseSrc {
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    blocksize: number
    doTimestamp: boolean
    numBuffers: number
    typefind: boolean
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
    /* Methods of GstBase-1.0.GstBase.BaseSrc */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBlocksize(): number
    getBufferPool(): Gst.BufferPool | null
    getDoTimestamp(): boolean
    isAsync(): boolean
    isLive(): boolean
    negotiate(): boolean
    newSeamlessSegment(start: number, stop: number, time: number): boolean
    newSegment(segment: Gst.Segment): boolean
    queryLatency(): [ /* returnType */ boolean, /* live */ boolean | null, /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    setAsync(async: boolean): void
    setAutomaticEos(automaticEos: boolean): void
    setBlocksize(blocksize: number): void
    setCaps(caps: Gst.Caps): boolean
    setDoTimestamp(timestamp: boolean): void
    setDynamicSize(dynamic: boolean): void
    setFormat(format: Gst.Format): void
    setLive(live: boolean): void
    startComplete(ret: Gst.FlowReturn): void
    startWait(): Gst.FlowReturn
    submitBufferList(bufferList: Gst.BufferList): void
    waitPlaying(): Gst.FlowReturn
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
    connect(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::do-timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-buffers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::typefind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseSrc_ConstructProps)
    _init (config?: BaseSrc_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseTransform_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstBase-1.0.GstBase.BaseTransform */
    qos?: boolean
}
class BaseTransform {
    /* Properties of GstBase-1.0.GstBase.BaseTransform */
    qos: boolean
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
    /* Methods of GstBase-1.0.GstBase.BaseTransform */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool | null
    isInPlace(): boolean
    isPassthrough(): boolean
    isQosEnabled(): boolean
    reconfigure(): boolean
    reconfigureSink(): void
    reconfigureSrc(): void
    setGapAware(gapAware: boolean): void
    setInPlace(inPlace: boolean): void
    setPassthrough(passthrough: boolean): void
    setPreferPassthrough(preferPassthrough: boolean): void
    setQosEnabled(enabled: boolean): void
    updateQos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    updateSrcCaps(updatedCaps: Gst.Caps): boolean
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
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseTransform_ConstructProps)
    _init (config?: BaseTransform_ConstructProps): void
    static $gtype: GObject.Type
}
interface CollectPads_ConstructProps extends Gst.Object_ConstructProps {
}
class CollectPads {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.CollectPads */
    addPad(pad: Gst.Pad, size: number, destroyNotify: CollectDataDestroyNotify, lock: boolean): CollectData | null
    available(): number
    clipRunningTime(cdata: CollectData, buf: Gst.Buffer, userData?: object | null): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer | null ]
    eventDefault(data: CollectData, event: Gst.Event, discard: boolean): boolean
    flush(data: CollectData, size: number): number
    peek(data: CollectData): Gst.Buffer | null
    pop(data: CollectData): Gst.Buffer | null
    queryDefault(data: CollectData, query: Gst.Query, discard: boolean): boolean
    readBuffer(data: CollectData, size: number): Gst.Buffer | null
    removePad(pad: Gst.Pad): boolean
    setBufferFunction(func: CollectPadsBufferFunction): void
    setClipFunction(clipfunc: CollectPadsClipFunction): void
    setCompareFunction(func: CollectPadsCompareFunction): void
    setEventFunction(func: CollectPadsEventFunction): void
    setFlushFunction(func: CollectPadsFlushFunction): void
    setFlushing(flushing: boolean): void
    setFunction(func: CollectPadsFunction): void
    setQueryFunction(func: CollectPadsQueryFunction): void
    setWaiting(data: CollectData, waiting: boolean): void
    srcEventDefault(pad: Gst.Pad, event: Gst.Event): boolean
    start(): void
    stop(): void
    takeBuffer(data: CollectData, size: number): Gst.Buffer | null
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CollectPads_ConstructProps)
    _init (config?: CollectPads_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CollectPads
    static $gtype: GObject.Type
}
interface DataQueue_ConstructProps extends GObject.Object_ConstructProps {
}
class DataQueue {
    /* Properties of GstBase-1.0.GstBase.DataQueue */
    readonly currentLevelBytes: number
    readonly currentLevelTime: number
    readonly currentLevelVisible: number
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
    /* Signals of GstBase-1.0.GstBase.DataQueue */
    connect(sigName: "empty", callback: (() => void)): number
    on(sigName: "empty", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "empty", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "empty", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "empty"): void
    connect(sigName: "full", callback: (() => void)): number
    on(sigName: "full", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "full", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "full", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "full"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-level-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-level-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-level-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataQueue_ConstructProps)
    _init (config?: DataQueue_ConstructProps): void
    static $gtype: GObject.Type
}
interface PushSrc_ConstructProps extends BaseSrc_ConstructProps {
}
class PushSrc {
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    doTimestamp: boolean
    /* Fields of GstBase-1.0.GstBase.BaseSrc */
    readonly element: Gst.Element
    readonly srcpad: Gst.Pad
    readonly liveLock: GLib.Mutex
    readonly liveCond: GLib.Cond
    readonly isLive: boolean
    readonly liveRunning: boolean
    readonly blocksize: number
    readonly canActivatePush: boolean
    readonly randomAccess: boolean
    readonly clockId: Gst.ClockID
    readonly segment: Gst.Segment
    readonly needNewsegment: boolean
    readonly numBuffers: number
    readonly numBuffersLeft: number
    readonly typefind: boolean
    readonly running: boolean
    readonly pendingSeek: Gst.Event
    readonly priv: BaseSrcPrivate
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
    /* Methods of GstBase-1.0.GstBase.BaseSrc */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBlocksize(): number
    getBufferPool(): Gst.BufferPool | null
    getDoTimestamp(): boolean
    isAsync(): boolean
    negotiate(): boolean
    newSeamlessSegment(start: number, stop: number, time: number): boolean
    newSegment(segment: Gst.Segment): boolean
    queryLatency(): [ /* returnType */ boolean, /* live */ boolean | null, /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    setAsync(async: boolean): void
    setAutomaticEos(automaticEos: boolean): void
    setBlocksize(blocksize: number): void
    setCaps(caps: Gst.Caps): boolean
    setDoTimestamp(timestamp: boolean): void
    setDynamicSize(dynamic: boolean): void
    setFormat(format: Gst.Format): void
    setLive(live: boolean): void
    startComplete(ret: Gst.FlowReturn): void
    startWait(): Gst.FlowReturn
    submitBufferList(bufferList: Gst.BufferList): void
    waitPlaying(): Gst.FlowReturn
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
    connect(sigName: "notify::do-timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PushSrc_ConstructProps)
    _init (config?: PushSrc_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AdapterClass {
    static name: string
}
abstract class AggregatorClass {
    /* Fields of GstBase-1.0.GstBase.AggregatorClass */
    readonly parentClass: Gst.ElementClass
    readonly flush: (aggregator: Aggregator) => Gst.FlowReturn
    readonly clip: (aggregator: Aggregator, aggregatorPad: AggregatorPad, buf: Gst.Buffer) => Gst.Buffer
    readonly finishBuffer: (aggregator: Aggregator, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly sinkEvent: (aggregator: Aggregator, aggregatorPad: AggregatorPad, event: Gst.Event) => boolean
    readonly sinkQuery: (aggregator: Aggregator, aggregatorPad: AggregatorPad, query: Gst.Query) => boolean
    readonly srcEvent: (aggregator: Aggregator, event: Gst.Event) => boolean
    readonly srcQuery: (aggregator: Aggregator, query: Gst.Query) => boolean
    readonly srcActivate: (aggregator: Aggregator, mode: Gst.PadMode, active: boolean) => boolean
    readonly aggregate: (aggregator: Aggregator, timeout: boolean) => Gst.FlowReturn
    readonly stop: (aggregator: Aggregator) => boolean
    readonly start: (aggregator: Aggregator) => boolean
    readonly getNextTime: (aggregator: Aggregator) => Gst.ClockTime
    readonly updateSrcCaps: (self: Aggregator, caps: Gst.Caps) => [ /* returnType */ Gst.FlowReturn, /* ret */ Gst.Caps | null ]
    readonly fixateSrcCaps: (self: Aggregator, caps: Gst.Caps) => Gst.Caps
    readonly negotiatedSrcCaps: (self: Aggregator, caps: Gst.Caps) => boolean
    readonly decideAllocation: (self: Aggregator, query: Gst.Query) => boolean
    readonly proposeAllocation: (self: Aggregator, pad: AggregatorPad, decideQuery: Gst.Query, query: Gst.Query) => boolean
    readonly negotiate: (self: Aggregator) => boolean
    readonly sinkEventPreQueue: (aggregator: Aggregator, aggregatorPad: AggregatorPad, event: Gst.Event) => Gst.FlowReturn
    readonly sinkQueryPreQueue: (aggregator: Aggregator, aggregatorPad: AggregatorPad, query: Gst.Query) => boolean
    readonly finishBufferList: (aggregator: Aggregator, bufferlist: Gst.BufferList) => Gst.FlowReturn
    readonly peekNextSample: (aggregator: Aggregator, aggregatorPad: AggregatorPad) => Gst.Sample | null
    static name: string
}
abstract class AggregatorPadClass {
    /* Fields of GstBase-1.0.GstBase.AggregatorPadClass */
    readonly parentClass: Gst.PadClass
    readonly flush: (aggpad: AggregatorPad, aggregator: Aggregator) => Gst.FlowReturn
    readonly skipBuffer: (aggpad: AggregatorPad, aggregator: Aggregator, buffer: Gst.Buffer) => boolean
    static name: string
}
class AggregatorPadPrivate {
    static name: string
}
class AggregatorPrivate {
    static name: string
}
abstract class BaseParseClass {
    /* Fields of GstBase-1.0.GstBase.BaseParseClass */
    readonly parentClass: Gst.ElementClass
    readonly start: (parse: BaseParse) => boolean
    readonly stop: (parse: BaseParse) => boolean
    readonly setSinkCaps: (parse: BaseParse, caps: Gst.Caps) => boolean
    readonly handleFrame: (parse: BaseParse, frame: BaseParseFrame) => [ /* returnType */ Gst.FlowReturn, /* skipsize */ number ]
    readonly prePushFrame: (parse: BaseParse, frame: BaseParseFrame) => Gst.FlowReturn
    readonly convert: (parse: BaseParse, srcFormat: Gst.Format, srcValue: number, destFormat: Gst.Format, destValue: number) => boolean
    readonly sinkEvent: (parse: BaseParse, event: Gst.Event) => boolean
    readonly srcEvent: (parse: BaseParse, event: Gst.Event) => boolean
    readonly getSinkCaps: (parse: BaseParse, filter: Gst.Caps) => Gst.Caps
    readonly detect: (parse: BaseParse, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly sinkQuery: (parse: BaseParse, query: Gst.Query) => boolean
    readonly srcQuery: (parse: BaseParse, query: Gst.Query) => boolean
    static name: string
}
class BaseParseFrame {
    /* Fields of GstBase-1.0.GstBase.BaseParseFrame */
    readonly buffer: Gst.Buffer
    readonly outBuffer: Gst.Buffer
    readonly flags: number
    readonly offset: number
    readonly overhead: number
    /* Methods of GstBase-1.0.GstBase.BaseParseFrame */
    copy(): BaseParseFrame
    free(): void
    init(): void
    static name: string
    static new(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number): BaseParseFrame
    constructor(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number)
    /* Static methods and pseudo-constructors */
    static new(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number): BaseParseFrame
}
class BaseParsePrivate {
    static name: string
}
abstract class BaseSinkClass {
    /* Fields of GstBase-1.0.GstBase.BaseSinkClass */
    readonly parentClass: Gst.ElementClass
    readonly getCaps: (sink: BaseSink, filter: Gst.Caps) => Gst.Caps
    readonly setCaps: (sink: BaseSink, caps: Gst.Caps) => boolean
    readonly fixate: (sink: BaseSink, caps: Gst.Caps) => Gst.Caps
    readonly activatePull: (sink: BaseSink, active: boolean) => boolean
    readonly getTimes: (sink: BaseSink, buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime) => void
    readonly proposeAllocation: (sink: BaseSink, query: Gst.Query) => boolean
    readonly start: (sink: BaseSink) => boolean
    readonly stop: (sink: BaseSink) => boolean
    readonly unlock: (sink: BaseSink) => boolean
    readonly unlockStop: (sink: BaseSink) => boolean
    readonly query: (sink: BaseSink, query: Gst.Query) => boolean
    readonly event: (sink: BaseSink, event: Gst.Event) => boolean
    readonly waitEvent: (sink: BaseSink, event: Gst.Event) => Gst.FlowReturn
    readonly prepare: (sink: BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly prepareList: (sink: BaseSink, bufferList: Gst.BufferList) => Gst.FlowReturn
    readonly preroll: (sink: BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly render: (sink: BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly renderList: (sink: BaseSink, bufferList: Gst.BufferList) => Gst.FlowReturn
    static name: string
}
class BaseSinkPrivate {
    static name: string
}
abstract class BaseSrcClass {
    /* Fields of GstBase-1.0.GstBase.BaseSrcClass */
    readonly parentClass: Gst.ElementClass
    readonly getCaps: (src: BaseSrc, filter?: Gst.Caps | null) => Gst.Caps
    readonly negotiate: (src: BaseSrc) => boolean
    readonly fixate: (src: BaseSrc, caps: Gst.Caps) => Gst.Caps
    readonly setCaps: (src: BaseSrc, caps: Gst.Caps) => boolean
    readonly decideAllocation: (src: BaseSrc, query: Gst.Query) => boolean
    readonly start: (src: BaseSrc) => boolean
    readonly stop: (src: BaseSrc) => boolean
    readonly getTimes: (src: BaseSrc, buffer: Gst.Buffer) => [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    readonly getSize: (src: BaseSrc) => [ /* returnType */ boolean, /* size */ number ]
    readonly isSeekable: (src: BaseSrc) => boolean
    readonly prepareSeekSegment: (src: BaseSrc, seek: Gst.Event, segment: Gst.Segment) => boolean
    readonly doSeek: (src: BaseSrc, segment: Gst.Segment) => boolean
    readonly unlock: (src: BaseSrc) => boolean
    readonly unlockStop: (src: BaseSrc) => boolean
    readonly query: (src: BaseSrc, query: Gst.Query) => boolean
    readonly event: (src: BaseSrc, event: Gst.Event) => boolean
    readonly create: (src: BaseSrc, offset: number, size: number, buf: Gst.Buffer) => [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    readonly alloc: (src: BaseSrc, offset: number, size: number) => [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    readonly fill: (src: BaseSrc, offset: number, size: number, buf: Gst.Buffer) => Gst.FlowReturn
    static name: string
}
class BaseSrcPrivate {
    static name: string
}
abstract class BaseTransformClass {
    /* Fields of GstBase-1.0.GstBase.BaseTransformClass */
    readonly parentClass: Gst.ElementClass
    readonly passthroughOnSameCaps: boolean
    readonly transformIpOnPassthrough: boolean
    readonly transformCaps: (trans: BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps) => Gst.Caps
    readonly fixateCaps: (trans: BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps) => Gst.Caps
    readonly acceptCaps: (trans: BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps) => boolean
    readonly setCaps: (trans: BaseTransform, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
    readonly query: (trans: BaseTransform, direction: Gst.PadDirection, query: Gst.Query) => boolean
    readonly decideAllocation: (trans: BaseTransform, query: Gst.Query) => boolean
    readonly filterMeta: (trans: BaseTransform, query: Gst.Query, api: GObject.Type, params: Gst.Structure) => boolean
    readonly proposeAllocation: (trans: BaseTransform, decideQuery: Gst.Query, query: Gst.Query) => boolean
    readonly transformSize: (trans: BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps) => [ /* returnType */ boolean, /* othersize */ number ]
    readonly getUnitSize: (trans: BaseTransform, caps: Gst.Caps) => [ /* returnType */ boolean, /* size */ number ]
    readonly start: (trans: BaseTransform) => boolean
    readonly stop: (trans: BaseTransform) => boolean
    readonly sinkEvent: (trans: BaseTransform, event: Gst.Event) => boolean
    readonly srcEvent: (trans: BaseTransform, event: Gst.Event) => boolean
    readonly prepareOutputBuffer: (trans: BaseTransform, input: Gst.Buffer) => [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    readonly copyMetadata: (trans: BaseTransform, input: Gst.Buffer, outbuf: Gst.Buffer) => boolean
    readonly transformMeta: (trans: BaseTransform, outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer) => boolean
    readonly beforeTransform: (trans: BaseTransform, buffer: Gst.Buffer) => void
    readonly transform: (trans: BaseTransform, inbuf: Gst.Buffer, outbuf: Gst.Buffer) => Gst.FlowReturn
    readonly transformIp: (trans: BaseTransform, buf: Gst.Buffer) => Gst.FlowReturn
    readonly submitInputBuffer: (trans: BaseTransform, isDiscont: boolean, input: Gst.Buffer) => Gst.FlowReturn
    readonly generateOutput: (trans: BaseTransform) => [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    static name: string
}
class BaseTransformPrivate {
    static name: string
}
class BitReader {
    /* Fields of GstBase-1.0.GstBase.BitReader */
    readonly data: Uint8Array
    readonly size: number
    readonly byte: number
    readonly bit: number
    /* Methods of GstBase-1.0.GstBase.BitReader */
    free(): void
    getBitsUint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    getBitsUint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    getBitsUint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    getBitsUint8(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    getPos(): number
    getRemaining(): number
    getSize(): number
    init(data: Uint8Array): void
    peekBitsUint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peekBitsUint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peekBitsUint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peekBitsUint8(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    setPos(pos: number): boolean
    skip(nbits: number): boolean
    skipToByte(): boolean
    static name: string
}
class BitWriter {
    /* Fields of GstBase-1.0.GstBase.BitWriter */
    readonly data: number
    readonly bitSize: number
    /* Methods of GstBase-1.0.GstBase.BitWriter */
    alignBytes(trailingBit: number): boolean
    free(): void
    freeAndGetBuffer(): Gst.Buffer
    freeAndGetData(): Uint8Array
    getData(): Uint8Array
    getRemaining(): number
    getSize(): number
    putBitsUint16(value: number, nbits: number): boolean
    putBitsUint32(value: number, nbits: number): boolean
    putBitsUint64(value: number, nbits: number): boolean
    putBitsUint8(value: number, nbits: number): boolean
    putBytes(data: Uint8Array, nbytes: number): boolean
    reset(): void
    resetAndGetBuffer(): Gst.Buffer
    resetAndGetData(): Uint8Array
    setPos(pos: number): boolean
    static name: string
}
class ByteReader {
    /* Fields of GstBase-1.0.GstBase.ByteReader */
    readonly data: Uint8Array
    readonly size: number
    readonly byte: number
    /* Methods of GstBase-1.0.GstBase.ByteReader */
    dupData(): [ /* returnType */ boolean, /* val */ Uint8Array ]
    dupStringUtf16(): [ /* returnType */ boolean, /* str */ number[] ]
    dupStringUtf32(): [ /* returnType */ boolean, /* str */ number[] ]
    dupStringUtf8(): [ /* returnType */ boolean, /* str */ string[] ]
    free(): void
    getData(): [ /* returnType */ boolean, /* val */ Uint8Array ]
    getFloat32Be(): [ /* returnType */ boolean, /* val */ number ]
    getFloat32Le(): [ /* returnType */ boolean, /* val */ number ]
    getFloat64Be(): [ /* returnType */ boolean, /* val */ number ]
    getFloat64Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt16Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt16Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt24Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt24Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt32Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt32Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt64Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt64Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt8(): [ /* returnType */ boolean, /* val */ number ]
    getPos(): number
    getRemaining(): number
    getSize(): number
    getStringUtf8(): [ /* returnType */ boolean, /* str */ string[] ]
    getUint16Be(): [ /* returnType */ boolean, /* val */ number ]
    getUint16Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint24Be(): [ /* returnType */ boolean, /* val */ number ]
    getUint24Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint32Be(): [ /* returnType */ boolean, /* val */ number ]
    getUint32Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint64Be(): [ /* returnType */ boolean, /* val */ number ]
    getUint64Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint8(): [ /* returnType */ boolean, /* val */ number ]
    init(data: Uint8Array): void
    maskedScanUint32(mask: number, pattern: number, offset: number, size: number): number
    maskedScanUint32Peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number ]
    peekData(): [ /* returnType */ boolean, /* val */ Uint8Array ]
    peekFloat32Be(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat32Le(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat64Be(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat64Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt16Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt16Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt24Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt24Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt32Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt32Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt64Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt64Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt8(): [ /* returnType */ boolean, /* val */ number ]
    peekStringUtf8(): [ /* returnType */ boolean, /* str */ string[] ]
    peekUint16Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint16Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint24Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint24Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint32Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint32Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint64Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint64Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint8(): [ /* returnType */ boolean, /* val */ number ]
    setPos(pos: number): boolean
    skip(nbytes: number): boolean
    skipStringUtf16(): boolean
    skipStringUtf32(): boolean
    skipStringUtf8(): boolean
    static name: string
}
class ByteWriter {
    /* Fields of GstBase-1.0.GstBase.ByteWriter */
    readonly parent: ByteReader
    readonly allocSize: number
    readonly fixed: boolean
    readonly owned: boolean
    /* Methods of GstBase-1.0.GstBase.ByteWriter */
    ensureFreeSpace(size: number): boolean
    fill(value: number, size: number): boolean
    free(): void
    freeAndGetBuffer(): Gst.Buffer
    freeAndGetData(): number
    getRemaining(): number
    init(): void
    initWithData(data: Uint8Array, initialized: boolean): void
    initWithSize(size: number, fixed: boolean): void
    putBuffer(buffer: Gst.Buffer, offset: number, size: number): boolean
    putData(data: Uint8Array): boolean
    putFloat32Be(val: number): boolean
    putFloat32Le(val: number): boolean
    putFloat64Be(val: number): boolean
    putFloat64Le(val: number): boolean
    putInt16Be(val: number): boolean
    putInt16Le(val: number): boolean
    putInt24Be(val: number): boolean
    putInt24Le(val: number): boolean
    putInt32Be(val: number): boolean
    putInt32Le(val: number): boolean
    putInt64Be(val: number): boolean
    putInt64Le(val: number): boolean
    putInt8(val: number): boolean
    putStringUtf16(data: number[]): boolean
    putStringUtf32(data: number[]): boolean
    putStringUtf8(data: string): boolean
    putUint16Be(val: number): boolean
    putUint16Le(val: number): boolean
    putUint24Be(val: number): boolean
    putUint24Le(val: number): boolean
    putUint32Be(val: number): boolean
    putUint32Le(val: number): boolean
    putUint64Be(val: number): boolean
    putUint64Le(val: number): boolean
    putUint8(val: number): boolean
    reset(): void
    resetAndGetBuffer(): Gst.Buffer
    resetAndGetData(): Uint8Array
    static name: string
}
class CollectData {
    /* Fields of GstBase-1.0.GstBase.CollectData */
    readonly collect: CollectPads
    readonly pad: Gst.Pad
    readonly buffer: Gst.Buffer
    readonly pos: number
    readonly segment: Gst.Segment
    static name: string
}
class CollectDataPrivate {
    static name: string
}
abstract class CollectPadsClass {
    /* Fields of GstBase-1.0.GstBase.CollectPadsClass */
    readonly parentClass: Gst.ObjectClass
    static name: string
}
class CollectPadsPrivate {
    static name: string
}
abstract class DataQueueClass {
    /* Fields of GstBase-1.0.GstBase.DataQueueClass */
    readonly parentClass: GObject.ObjectClass
    readonly empty: (queue: DataQueue) => void
    readonly full: (queue: DataQueue) => void
    readonly gstReserved: object[]
    static name: string
}
class DataQueueItem {
    /* Fields of GstBase-1.0.GstBase.DataQueueItem */
    readonly object: Gst.MiniObject
    readonly size: number
    readonly duration: number
    readonly visible: boolean
    readonly destroy: GLib.DestroyNotify
    static name: string
}
class DataQueuePrivate {
    static name: string
}
class DataQueueSize {
    /* Fields of GstBase-1.0.GstBase.DataQueueSize */
    readonly visible: number
    readonly bytes: number
    readonly time: number
    static name: string
}
class FlowCombiner {
    /* Methods of GstBase-1.0.GstBase.FlowCombiner */
    addPad(pad: Gst.Pad): void
    clear(): void
    free(): void
    ref(): FlowCombiner
    removePad(pad: Gst.Pad): void
    reset(): void
    unref(): void
    updateFlow(fret: Gst.FlowReturn): Gst.FlowReturn
    updatePadFlow(pad: Gst.Pad, fret: Gst.FlowReturn): Gst.FlowReturn
    static name: string
    static new(): FlowCombiner
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FlowCombiner
}
abstract class PushSrcClass {
    /* Fields of GstBase-1.0.GstBase.PushSrcClass */
    readonly parentClass: BaseSrcClass
    readonly create: (src: PushSrc, buf: Gst.Buffer) => [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    readonly alloc: (src: PushSrc) => [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    readonly fill: (src: PushSrc, buf: Gst.Buffer) => Gst.FlowReturn
    static name: string
}
class QueueArray {
    /* Methods of GstBase-1.0.GstBase.QueueArray */
    pushTailStruct(pStruct?: object | null): void
    static name: string
}
}
export default GstBase;