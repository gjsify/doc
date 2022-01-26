/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstApp-1.0
 */

import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstApp {

enum AppLeakyType {
    NONE,
    UPSTREAM,
    DOWNSTREAM,
}
enum AppStreamType {
    STREAM,
    SEEKABLE,
    RANDOM_ACCESS,
}
interface AppSink_ConstructProps extends GstBase.BaseSink_ConstructProps {
    /* Constructor properties of GstApp-1.0.GstApp.AppSink */
    bufferList?: boolean
    caps?: Gst.Caps
    drop?: boolean
    emitSignals?: boolean
    maxBuffers?: number
    waitOnEos?: boolean
}
class AppSink {
    /* Properties of GstApp-1.0.GstApp.AppSink */
    bufferList: boolean
    caps: Gst.Caps
    drop: boolean
    emitSignals: boolean
    readonly eos: boolean
    maxBuffers: number
    waitOnEos: boolean
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
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    readonly element: Gst.Element
    readonly sinkpad: Gst.Pad
    readonly padMode: Gst.PadMode
    readonly offset: number
    readonly canActivatePull: boolean
    readonly canActivatePush: boolean
    readonly prerollLock: GLib.Mutex
    readonly prerollCond: GLib.Cond
    readonly needPreroll: boolean
    readonly havePreroll: boolean
    readonly playingAsync: boolean
    readonly haveNewsegment: boolean
    readonly segment: Gst.Segment
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
    /* Methods of GstApp-1.0.GstApp.AppSink */
    getBufferListSupport(): boolean
    getCaps(): Gst.Caps
    getDrop(): boolean
    getEmitSignals(): boolean
    getMaxBuffers(): number
    getWaitOnEos(): boolean
    isEos(): boolean
    pullPreroll(): Gst.Sample | null
    pullSample(): Gst.Sample | null
    setBufferListSupport(enableLists: boolean): void
    setCaps(caps?: Gst.Caps | null): void
    setDrop(drop: boolean): void
    setEmitSignals(emit: boolean): void
    setMaxBuffers(max: number): void
    setWaitOnEos(wait: boolean): void
    tryPullPreroll(timeout: Gst.ClockTime): Gst.Sample | null
    tryPullSample(timeout: Gst.ClockTime): Gst.Sample | null
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
    /* Methods of Gst-1.0.Gst.URIHandler */
    getProtocols(): string[] | null
    getUri(): string | null
    getUriType(): Gst.URIType
    setUri(uri: string): boolean
    /* Signals of GstApp-1.0.GstApp.AppSink */
    connect(sigName: "eos", callback: (() => void)): number
    on(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "eos", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "eos"): void
    connect(sigName: "new-preroll", callback: (() => Gst.FlowReturn)): number
    on(sigName: "new-preroll", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-preroll", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-preroll", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "new-preroll"): void
    connect(sigName: "new-sample", callback: (() => Gst.FlowReturn)): number
    on(sigName: "new-sample", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-sample", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-sample", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "new-sample"): void
    connect(sigName: "new-serialized-event", callback: (() => boolean)): number
    on(sigName: "new-serialized-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-serialized-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-serialized-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "new-serialized-event"): void
    connect(sigName: "pull-preroll", callback: (() => Gst.Sample)): number
    on(sigName: "pull-preroll", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pull-preroll", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pull-preroll", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "pull-preroll"): void
    connect(sigName: "pull-sample", callback: (() => Gst.Sample)): number
    on(sigName: "pull-sample", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pull-sample", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pull-sample", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "pull-sample"): void
    connect(sigName: "try-pull-object", callback: ((timeout: number) => Gst.MiniObject)): number
    on(sigName: "try-pull-object", callback: (timeout: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "try-pull-object", callback: (timeout: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "try-pull-object", callback: (timeout: number) => void): NodeJS.EventEmitter
    emit(sigName: "try-pull-object", timeout: number): void
    connect(sigName: "try-pull-preroll", callback: ((timeout: number) => Gst.Sample)): number
    on(sigName: "try-pull-preroll", callback: (timeout: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "try-pull-preroll", callback: (timeout: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "try-pull-preroll", callback: (timeout: number) => void): NodeJS.EventEmitter
    emit(sigName: "try-pull-preroll", timeout: number): void
    connect(sigName: "try-pull-sample", callback: ((timeout: number) => Gst.Sample)): number
    on(sigName: "try-pull-sample", callback: (timeout: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "try-pull-sample", callback: (timeout: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "try-pull-sample", callback: (timeout: number) => void): NodeJS.EventEmitter
    emit(sigName: "try-pull-sample", timeout: number): void
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
    connect(sigName: "notify::buffer-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::drop", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drop", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-buffers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-buffers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wait-on-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wait-on-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wait-on-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wait-on-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wait-on-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: AppSink_ConstructProps)
    _init (config?: AppSink_ConstructProps): void
    static $gtype: GObject.Type
}
interface AppSrc_ConstructProps extends GstBase.BaseSrc_ConstructProps {
    /* Constructor properties of GstApp-1.0.GstApp.AppSrc */
    block?: boolean
    caps?: Gst.Caps
    duration?: number
    emitSignals?: boolean
    format?: Gst.Format
    handleSegmentChange?: boolean
    isLive?: boolean
    leakyType?: AppLeakyType
    maxBuffers?: number
    maxBytes?: number
    maxLatency?: number
    maxTime?: number
    minLatency?: number
    minPercent?: number
    size?: number
    streamType?: AppStreamType
}
class AppSrc {
    /* Properties of GstApp-1.0.GstApp.AppSrc */
    block: boolean
    caps: Gst.Caps
    readonly currentLevelBuffers: number
    readonly currentLevelBytes: number
    readonly currentLevelTime: number
    duration: number
    emitSignals: boolean
    format: Gst.Format
    handleSegmentChange: boolean
    isLive: boolean
    leakyType: AppLeakyType
    maxBuffers: number
    maxBytes: number
    maxLatency: number
    maxTime: number
    minLatency: number
    minPercent: number
    size: number
    streamType: AppStreamType
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    doTimestamp: boolean
    /* Fields of GstBase-1.0.GstBase.BaseSrc */
    readonly element: Gst.Element
    readonly srcpad: Gst.Pad
    readonly liveLock: GLib.Mutex
    readonly liveCond: GLib.Cond
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
    readonly priv: GstBase.BaseSrcPrivate
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
    /* Methods of GstApp-1.0.GstApp.AppSrc */
    endOfStream(): Gst.FlowReturn
    getCaps(): Gst.Caps
    getCurrentLevelBuffers(): number
    getCurrentLevelBytes(): number
    getCurrentLevelTime(): Gst.ClockTime
    getDuration(): Gst.ClockTime
    getEmitSignals(): boolean
    getLatency(): [ /* min */ number, /* max */ number ]
    getLeakyType(): AppLeakyType
    getMaxBuffers(): number
    getMaxBytes(): number
    getMaxTime(): Gst.ClockTime
    getSize(): number
    getStreamType(): AppStreamType
    pushBuffer(buffer: Gst.Buffer): Gst.FlowReturn
    pushBufferList(bufferList: Gst.BufferList): Gst.FlowReturn
    pushSample(sample: Gst.Sample): Gst.FlowReturn
    setCaps(caps?: Gst.Caps | null): void
    setDuration(duration: Gst.ClockTime): void
    setEmitSignals(emit: boolean): void
    setLatency(min: number, max: number): void
    setLeakyType(leaky: AppLeakyType): void
    setMaxBuffers(max: number): void
    setMaxBytes(max: number): void
    setMaxTime(max: Gst.ClockTime): void
    setSize(size: number): void
    setStreamType(type: AppStreamType): void
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
    /* Methods of Gst-1.0.Gst.URIHandler */
    getProtocols(): string[] | null
    getUri(): string | null
    getUriType(): Gst.URIType
    setUri(uri: string): boolean
    /* Signals of GstApp-1.0.GstApp.AppSrc */
    connect(sigName: "end-of-stream", callback: (() => Gst.FlowReturn)): number
    on(sigName: "end-of-stream", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-stream", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-stream", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "end-of-stream"): void
    connect(sigName: "enough-data", callback: (() => void)): number
    on(sigName: "enough-data", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enough-data", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enough-data", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "enough-data"): void
    connect(sigName: "need-data", callback: ((length: number) => void)): number
    on(sigName: "need-data", callback: (length: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "need-data", callback: (length: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "need-data", callback: (length: number) => void): NodeJS.EventEmitter
    emit(sigName: "need-data", length: number): void
    connect(sigName: "push-buffer", callback: ((buffer: Gst.Buffer) => Gst.FlowReturn)): number
    on(sigName: "push-buffer", callback: (buffer: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "push-buffer", callback: (buffer: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "push-buffer", callback: (buffer: Gst.Buffer) => void): NodeJS.EventEmitter
    emit(sigName: "push-buffer", buffer: Gst.Buffer): void
    connect(sigName: "push-buffer-list", callback: ((bufferList: Gst.BufferList) => Gst.FlowReturn)): number
    on(sigName: "push-buffer-list", callback: (bufferList: Gst.BufferList) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "push-buffer-list", callback: (bufferList: Gst.BufferList) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "push-buffer-list", callback: (bufferList: Gst.BufferList) => void): NodeJS.EventEmitter
    emit(sigName: "push-buffer-list", bufferList: Gst.BufferList): void
    connect(sigName: "push-sample", callback: ((sample: Gst.Sample) => Gst.FlowReturn)): number
    on(sigName: "push-sample", callback: (sample: Gst.Sample) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "push-sample", callback: (sample: Gst.Sample) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "push-sample", callback: (sample: Gst.Sample) => void): NodeJS.EventEmitter
    emit(sigName: "push-sample", sample: Gst.Sample): void
    connect(sigName: "seek-data", callback: ((offset: number) => boolean)): number
    on(sigName: "seek-data", callback: (offset: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seek-data", callback: (offset: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seek-data", callback: (offset: number) => void): NodeJS.EventEmitter
    emit(sigName: "seek-data", offset: number): void
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
    connect(sigName: "notify::block", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-level-buffers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-buffers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::handle-segment-change", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-segment-change", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::handle-segment-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::handle-segment-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::handle-segment-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-live", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-live", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::leaky-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leaky-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::leaky-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::leaky-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::leaky-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-buffers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-buffers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-percent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-percent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-percent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-percent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-percent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stream-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stream-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stream-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stream-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: AppSrc_ConstructProps)
    _init (config?: AppSrc_ConstructProps): void
    static $gtype: GObject.Type
}
class AppSinkCallbacks {
    /* Fields of GstApp-1.0.GstApp.AppSinkCallbacks */
    readonly eos: (appsink: AppSink) => void
    readonly newPreroll: (appsink: AppSink) => Gst.FlowReturn
    readonly newSample: (appsink: AppSink) => Gst.FlowReturn
    readonly newEvent: (appsink: AppSink) => boolean
    static name: string
}
abstract class AppSinkClass {
    /* Fields of GstApp-1.0.GstApp.AppSinkClass */
    readonly basesinkClass: GstBase.BaseSinkClass
    readonly eos: (appsink: AppSink) => void
    readonly newPreroll: (appsink: AppSink) => Gst.FlowReturn
    readonly newSample: (appsink: AppSink) => Gst.FlowReturn
    readonly pullPreroll: (appsink: AppSink) => Gst.Sample | null
    readonly pullSample: (appsink: AppSink) => Gst.Sample | null
    readonly tryPullPreroll: (appsink: AppSink, timeout: Gst.ClockTime) => Gst.Sample | null
    readonly tryPullSample: (appsink: AppSink, timeout: Gst.ClockTime) => Gst.Sample | null
    readonly tryPullObject: (appsink: AppSink, timeout: Gst.ClockTime) => Gst.MiniObject
    static name: string
}
class AppSinkPrivate {
    static name: string
}
class AppSrcCallbacks {
    /* Fields of GstApp-1.0.GstApp.AppSrcCallbacks */
    readonly needData: (src: AppSrc, length: number) => void
    readonly enoughData: (src: AppSrc) => void
    readonly seekData: (src: AppSrc, offset: number) => boolean
    static name: string
}
abstract class AppSrcClass {
    /* Fields of GstApp-1.0.GstApp.AppSrcClass */
    readonly basesrcClass: GstBase.BaseSrcClass
    readonly needData: (appsrc: AppSrc, length: number) => void
    readonly enoughData: (appsrc: AppSrc) => void
    readonly seekData: (appsrc: AppSrc, offset: number) => boolean
    readonly pushBuffer: (appsrc: AppSrc, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly endOfStream: (appsrc: AppSrc) => Gst.FlowReturn
    readonly pushSample: (appsrc: AppSrc, sample: Gst.Sample) => Gst.FlowReturn
    readonly pushBufferList: (appsrc: AppSrc, bufferList: Gst.BufferList) => Gst.FlowReturn
    static name: string
}
class AppSrcPrivate {
    static name: string
}
}
export default GstApp;