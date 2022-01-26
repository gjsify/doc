/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstPbutils-1.0
 */

import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstAudio from './GstAudio-1.0';

export namespace GstPbutils {

enum AudioVisualizerShader {
    NONE,
    FADE,
    FADE_AND_MOVE_UP,
    FADE_AND_MOVE_DOWN,
    FADE_AND_MOVE_LEFT,
    FADE_AND_MOVE_RIGHT,
    FADE_AND_MOVE_HORIZ_OUT,
    FADE_AND_MOVE_HORIZ_IN,
    FADE_AND_MOVE_VERT_OUT,
    FADE_AND_MOVE_VERT_IN,
}
enum DiscovererResult {
    OK,
    URI_INVALID,
    ERROR,
    TIMEOUT,
    BUSY,
    MISSING_PLUGINS,
}
enum InstallPluginsReturn {
    SUCCESS,
    NOT_FOUND,
    ERROR,
    PARTIAL_SUCCESS,
    USER_ABORT,
    CRASHED,
    INVALID,
    STARTED_OK,
    INTERNAL_FAILURE,
    HELPER_MISSING,
    INSTALL_IN_PROGRESS,
}
enum DiscovererSerializeFlags {
    BASIC,
    CAPS,
    TAGS,
    MISC,
    ALL,
}
enum PbUtilsCapsDescriptionFlags {
    CONTAINER,
    AUDIO,
    VIDEO,
    IMAGE,
    SUBTITLE,
    TAG,
    GENERIC,
}
const ENCODING_CATEGORY_CAPTURE: string
const ENCODING_CATEGORY_DEVICE: string
const ENCODING_CATEGORY_FILE_EXTENSION: string
const ENCODING_CATEGORY_ONLINE_SERVICE: string
const ENCODING_CATEGORY_STORAGE_EDITING: string
const PLUGINS_BASE_VERSION_MAJOR: number
const PLUGINS_BASE_VERSION_MICRO: number
const PLUGINS_BASE_VERSION_MINOR: number
const PLUGINS_BASE_VERSION_NANO: number
function codecUtilsAacCapsSetLevelAndProfile(caps: Gst.Caps, audioConfig: Uint8Array): boolean
function codecUtilsAacGetChannels(audioConfig: Uint8Array): number
function codecUtilsAacGetIndexFromSampleRate(rate: number): number
function codecUtilsAacGetLevel(audioConfig: Uint8Array): string
function codecUtilsAacGetProfile(audioConfig: Uint8Array): string
function codecUtilsAacGetSampleRate(audioConfig: Uint8Array): number
function codecUtilsAacGetSampleRateFromIndex(srIdx: number): number
function codecUtilsCapsGetMimeCodec(caps: Gst.Caps): string
function codecUtilsH264CapsSetLevelAndProfile(caps: Gst.Caps, sps: Uint8Array): boolean
function codecUtilsH264GetLevel(sps: Uint8Array): string
function codecUtilsH264GetLevelIdc(level: string): number
function codecUtilsH264GetProfile(sps: Uint8Array): string
function codecUtilsH264GetProfileFlagsLevel(codecData: Uint8Array): [ /* returnType */ boolean, /* profile */ number | null, /* flags */ number | null, /* level */ number | null ]
function codecUtilsH265CapsSetLevelTierAndProfile(caps: Gst.Caps, profileTierLevel: Uint8Array): boolean
function codecUtilsH265GetLevel(profileTierLevel: Uint8Array): string
function codecUtilsH265GetLevelIdc(level: string): number
function codecUtilsH265GetProfile(profileTierLevel: Uint8Array): string
function codecUtilsH265GetTier(profileTierLevel: Uint8Array): string
function codecUtilsMpeg4videoCapsSetLevelAndProfile(caps: Gst.Caps, visObjSeq: Uint8Array): boolean
function codecUtilsMpeg4videoGetLevel(visObjSeq: Uint8Array): string
function codecUtilsMpeg4videoGetProfile(visObjSeq: Uint8Array): string
function codecUtilsOpusCreateCaps(rate: number, channels: number, channelMappingFamily: number, streamCount: number, coupledCount: number, channelMapping?: Uint8Array | null): Gst.Caps
function codecUtilsOpusCreateCapsFromHeader(header: Gst.Buffer, comments?: Gst.Buffer | null): Gst.Caps
function codecUtilsOpusCreateHeader(rate: number, channels: number, channelMappingFamily: number, streamCount: number, coupledCount: number, channelMapping: Uint8Array | null, preSkip: number, outputGain: number): Gst.Buffer
function codecUtilsOpusParseCaps(caps: Gst.Caps): [ /* returnType */ boolean, /* rate */ number | null, /* channels */ number | null, /* channelMappingFamily */ number | null, /* streamCount */ number | null, /* coupledCount */ number | null, /* channelMapping */ Uint8Array | null ]
function codecUtilsOpusParseHeader(header: Gst.Buffer): [ /* returnType */ boolean, /* rate */ number | null, /* channels */ number | null, /* channelMappingFamily */ number | null, /* streamCount */ number | null, /* coupledCount */ number | null, /* channelMapping */ Uint8Array | null, /* preSkip */ number | null, /* outputGain */ number | null ]
function encodingListAllTargets(categoryname?: string | null): EncodingTarget[]
function encodingListAvailableCategories(): string[]
function installPluginsAsync(details: string[], ctx: InstallPluginsContext | null, func: InstallPluginsResultFunc): InstallPluginsReturn
function installPluginsInstallationInProgress(): boolean
function installPluginsReturnGetName(ret: InstallPluginsReturn): string
function installPluginsSupported(): boolean
function installPluginsSync(details: string[], ctx?: InstallPluginsContext | null): InstallPluginsReturn
function isMissingPluginMessage(msg: Gst.Message): boolean
function missingDecoderInstallerDetailNew(decodeCaps: Gst.Caps): string
function missingDecoderMessageNew(element: Gst.Element, decodeCaps: Gst.Caps): Gst.Message
function missingElementInstallerDetailNew(factoryName: string): string
function missingElementMessageNew(element: Gst.Element, factoryName: string): Gst.Message
function missingEncoderInstallerDetailNew(encodeCaps: Gst.Caps): string
function missingEncoderMessageNew(element: Gst.Element, encodeCaps: Gst.Caps): Gst.Message
function missingPluginMessageGetDescription(msg: Gst.Message): string
function missingPluginMessageGetInstallerDetail(msg: Gst.Message): string
function missingUriSinkInstallerDetailNew(protocol: string): string
function missingUriSinkMessageNew(element: Gst.Element, protocol: string): Gst.Message
function missingUriSourceInstallerDetailNew(protocol: string): string
function missingUriSourceMessageNew(element: Gst.Element, protocol: string): Gst.Message
function pbUtilsAddCodecDescriptionToTagList(taglist: Gst.TagList, codecTag: string | null, caps: Gst.Caps): boolean
function pbUtilsGetCapsDescriptionFlags(caps: Gst.Caps): PbUtilsCapsDescriptionFlags
function pbUtilsGetCodecDescription(caps: Gst.Caps): string
function pbUtilsGetDecoderDescription(caps: Gst.Caps): string
function pbUtilsGetElementDescription(factoryName: string): string
function pbUtilsGetEncoderDescription(caps: Gst.Caps): string
function pbUtilsGetFileExtensionFromCaps(caps: Gst.Caps): string | null
function pbUtilsGetSinkDescription(protocol: string): string
function pbUtilsGetSourceDescription(protocol: string): string
function pbUtilsInit(): void
function pluginsBaseVersion(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
function pluginsBaseVersionString(): string
interface AudioVisualizerShaderFunc {
    (scope: AudioVisualizer, s: GstVideo.VideoFrame, d: GstVideo.VideoFrame): void
}
interface InstallPluginsResultFunc {
    (result: InstallPluginsReturn): void
}
interface AudioVisualizer_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstPbutils-1.0.GstPbutils.AudioVisualizer */
    shadeAmount?: number
    shader?: AudioVisualizerShader
}
class AudioVisualizer {
    /* Properties of GstPbutils-1.0.GstPbutils.AudioVisualizer */
    shadeAmount: number
    shader: AudioVisualizerShader
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
    connect(sigName: "notify::shade-amount", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shade-amount", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shade-amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shade-amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shade-amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shader", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shader", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioVisualizer_ConstructProps)
    _init (config?: AudioVisualizer_ConstructProps): void
    static $gtype: GObject.Type
}
interface Discoverer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstPbutils-1.0.GstPbutils.Discoverer */
    timeout?: number
    useCache?: boolean
}
class Discoverer {
    /* Properties of GstPbutils-1.0.GstPbutils.Discoverer */
    timeout: number
    useCache: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.Discoverer */
    discoverUri(uri: string): DiscovererInfo
    discoverUriAsync(uri: string): boolean
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
    /* Signals of GstPbutils-1.0.GstPbutils.Discoverer */
    connect(sigName: "discovered", callback: ((info: DiscovererInfo, error?: GLib.Error | null) => void)): number
    on(sigName: "discovered", callback: (info: DiscovererInfo, error?: GLib.Error | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "discovered", callback: (info: DiscovererInfo, error?: GLib.Error | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "discovered", callback: (info: DiscovererInfo, error?: GLib.Error | null) => void): NodeJS.EventEmitter
    emit(sigName: "discovered", info: DiscovererInfo, error?: GLib.Error | null): void
    connect(sigName: "finished", callback: (() => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    connect(sigName: "source-setup", callback: ((source: Gst.Element) => void)): number
    on(sigName: "source-setup", callback: (source: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-setup", callback: (source: Gst.Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-setup", callback: (source: Gst.Element) => void): NodeJS.EventEmitter
    emit(sigName: "source-setup", source: Gst.Element): void
    connect(sigName: "starting", callback: (() => void)): number
    on(sigName: "starting", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "starting"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Discoverer_ConstructProps)
    _init (config?: Discoverer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(timeout: Gst.ClockTime): Discoverer
    static $gtype: GObject.Type
}
interface DiscovererAudioInfo_ConstructProps extends DiscovererStreamInfo_ConstructProps {
}
class DiscovererAudioInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererAudioInfo */
    getBitrate(): number
    getChannelMask(): number
    getChannels(): number
    getDepth(): number
    getLanguage(): string
    getMaxBitrate(): number
    getSampleRate(): number
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo */
    getCaps(): Gst.Caps
    getMisc(): Gst.Structure
    getNext(): DiscovererStreamInfo
    getPrevious(): DiscovererStreamInfo
    getStreamId(): string
    getStreamNumber(): number
    getStreamTypeNick(): string
    getTags(): Gst.TagList
    getToc(): Gst.Toc
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
    constructor (config?: DiscovererAudioInfo_ConstructProps)
    _init (config?: DiscovererAudioInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface DiscovererContainerInfo_ConstructProps extends DiscovererStreamInfo_ConstructProps {
}
class DiscovererContainerInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererContainerInfo */
    getStreams(): DiscovererStreamInfo[]
    getTags(): Gst.TagList
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo */
    getCaps(): Gst.Caps
    getMisc(): Gst.Structure
    getNext(): DiscovererStreamInfo
    getPrevious(): DiscovererStreamInfo
    getStreamId(): string
    getStreamNumber(): number
    getStreamTypeNick(): string
    getToc(): Gst.Toc
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
    constructor (config?: DiscovererContainerInfo_ConstructProps)
    _init (config?: DiscovererContainerInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface DiscovererInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class DiscovererInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererInfo */
    copy(): DiscovererInfo
    getAudioStreams(): DiscovererStreamInfo[]
    getContainerStreams(): DiscovererStreamInfo[]
    getDuration(): Gst.ClockTime
    getLive(): boolean
    getMisc(): Gst.Structure
    getMissingElementsInstallerDetails(): string[]
    getResult(): DiscovererResult
    getSeekable(): boolean
    getStreamInfo(): DiscovererStreamInfo
    getStreamList(): DiscovererStreamInfo[]
    getStreams(streamtype: GObject.Type): DiscovererStreamInfo[]
    getSubtitleStreams(): DiscovererStreamInfo[]
    getTags(): Gst.TagList
    getToc(): Gst.Toc
    getUri(): string
    getVideoStreams(): DiscovererStreamInfo[]
    toVariant(flags: DiscovererSerializeFlags): GLib.Variant
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
    constructor (config?: DiscovererInfo_ConstructProps)
    _init (config?: DiscovererInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromVariant(variant: GLib.Variant): DiscovererInfo
    static $gtype: GObject.Type
}
interface DiscovererStreamInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class DiscovererStreamInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo */
    getCaps(): Gst.Caps
    getMisc(): Gst.Structure
    getNext(): DiscovererStreamInfo
    getPrevious(): DiscovererStreamInfo
    getStreamId(): string
    getStreamNumber(): number
    getStreamTypeNick(): string
    getTags(): Gst.TagList
    getToc(): Gst.Toc
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
    constructor (config?: DiscovererStreamInfo_ConstructProps)
    _init (config?: DiscovererStreamInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static listFree(infos: DiscovererStreamInfo[]): void
    static $gtype: GObject.Type
}
interface DiscovererSubtitleInfo_ConstructProps extends DiscovererStreamInfo_ConstructProps {
}
class DiscovererSubtitleInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererSubtitleInfo */
    getLanguage(): string
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo */
    getCaps(): Gst.Caps
    getMisc(): Gst.Structure
    getNext(): DiscovererStreamInfo
    getPrevious(): DiscovererStreamInfo
    getStreamId(): string
    getStreamNumber(): number
    getStreamTypeNick(): string
    getTags(): Gst.TagList
    getToc(): Gst.Toc
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
    constructor (config?: DiscovererSubtitleInfo_ConstructProps)
    _init (config?: DiscovererSubtitleInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface DiscovererVideoInfo_ConstructProps extends DiscovererStreamInfo_ConstructProps {
}
class DiscovererVideoInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererVideoInfo */
    getBitrate(): number
    getDepth(): number
    getFramerateDenom(): number
    getFramerateNum(): number
    getHeight(): number
    getMaxBitrate(): number
    getParDenom(): number
    getParNum(): number
    getWidth(): number
    isImage(): boolean
    isInterlaced(): boolean
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo */
    getCaps(): Gst.Caps
    getMisc(): Gst.Structure
    getNext(): DiscovererStreamInfo
    getPrevious(): DiscovererStreamInfo
    getStreamId(): string
    getStreamNumber(): number
    getStreamTypeNick(): string
    getTags(): Gst.TagList
    getToc(): Gst.Toc
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
    constructor (config?: DiscovererVideoInfo_ConstructProps)
    _init (config?: DiscovererVideoInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface EncodingAudioProfile_ConstructProps extends EncodingProfile_ConstructProps {
}
class EncodingAudioProfile {
    /* Properties of GstPbutils-1.0.GstPbutils.EncodingProfile */
    elementProperties: Gst.Structure
    restrictionCaps: Gst.Caps
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingProfile */
    copy(): EncodingProfile
    getAllowDynamicOutput(): boolean
    getDescription(): string
    getElementProperties(): Gst.Structure | null
    getFileExtension(): string
    getFormat(): Gst.Caps
    getInputCaps(): Gst.Caps
    getName(): string
    getPresence(): number
    getPreset(): string
    getPresetName(): string
    getRestriction(): Gst.Caps
    getSingleSegment(): boolean
    getTypeNick(): string
    isEnabled(): boolean
    isEqual(b: EncodingProfile): boolean
    setAllowDynamicOutput(allowDynamicOutput: boolean): void
    setDescription(description?: string | null): void
    setElementProperties(elementProperties: Gst.Structure): void
    setEnabled(enabled: boolean): void
    setFormat(format: Gst.Caps): void
    setName(name?: string | null): void
    setPresence(presence: number): void
    setPreset(preset?: string | null): void
    setPresetName(presetName?: string | null): void
    setRestriction(restriction?: Gst.Caps | null): void
    setSingleSegment(singleSegment: boolean): void
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
    connect(sigName: "notify::element-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EncodingAudioProfile_ConstructProps)
    _init (config?: EncodingAudioProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: Gst.Caps, preset: string | null, restriction: Gst.Caps | null, presence: number): EncodingAudioProfile
    static $gtype: GObject.Type
}
interface EncodingContainerProfile_ConstructProps extends EncodingProfile_ConstructProps {
}
class EncodingContainerProfile {
    /* Properties of GstPbutils-1.0.GstPbutils.EncodingProfile */
    elementProperties: Gst.Structure
    restrictionCaps: Gst.Caps
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingContainerProfile */
    addProfile(profile: EncodingProfile): boolean
    containsProfile(profile: EncodingProfile): boolean
    getProfiles(): EncodingProfile[]
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingProfile */
    copy(): EncodingProfile
    getAllowDynamicOutput(): boolean
    getDescription(): string
    getElementProperties(): Gst.Structure | null
    getFileExtension(): string
    getFormat(): Gst.Caps
    getInputCaps(): Gst.Caps
    getName(): string
    getPresence(): number
    getPreset(): string
    getPresetName(): string
    getRestriction(): Gst.Caps
    getSingleSegment(): boolean
    getTypeNick(): string
    isEnabled(): boolean
    isEqual(b: EncodingProfile): boolean
    setAllowDynamicOutput(allowDynamicOutput: boolean): void
    setDescription(description?: string | null): void
    setElementProperties(elementProperties: Gst.Structure): void
    setEnabled(enabled: boolean): void
    setFormat(format: Gst.Caps): void
    setName(name?: string | null): void
    setPresence(presence: number): void
    setPreset(preset?: string | null): void
    setPresetName(presetName?: string | null): void
    setRestriction(restriction?: Gst.Caps | null): void
    setSingleSegment(singleSegment: boolean): void
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
    connect(sigName: "notify::element-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EncodingContainerProfile_ConstructProps)
    _init (config?: EncodingContainerProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string | null, description: string | null, format: Gst.Caps, preset?: string | null): EncodingContainerProfile
    static $gtype: GObject.Type
}
interface EncodingProfile_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstPbutils-1.0.GstPbutils.EncodingProfile */
    elementProperties?: Gst.Structure
    restrictionCaps?: Gst.Caps
}
class EncodingProfile {
    /* Properties of GstPbutils-1.0.GstPbutils.EncodingProfile */
    elementProperties: Gst.Structure
    restrictionCaps: Gst.Caps
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingProfile */
    copy(): EncodingProfile
    getAllowDynamicOutput(): boolean
    getDescription(): string
    getElementProperties(): Gst.Structure | null
    getFileExtension(): string
    getFormat(): Gst.Caps
    getInputCaps(): Gst.Caps
    getName(): string
    getPresence(): number
    getPreset(): string
    getPresetName(): string
    getRestriction(): Gst.Caps
    getSingleSegment(): boolean
    getTypeNick(): string
    isEnabled(): boolean
    isEqual(b: EncodingProfile): boolean
    setAllowDynamicOutput(allowDynamicOutput: boolean): void
    setDescription(description?: string | null): void
    setElementProperties(elementProperties: Gst.Structure): void
    setEnabled(enabled: boolean): void
    setFormat(format: Gst.Caps): void
    setName(name?: string | null): void
    setPresence(presence: number): void
    setPreset(preset?: string | null): void
    setPresetName(presetName?: string | null): void
    setRestriction(restriction?: Gst.Caps | null): void
    setSingleSegment(singleSegment: boolean): void
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
    connect(sigName: "notify::element-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EncodingProfile_ConstructProps)
    _init (config?: EncodingProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(targetname: string, profilename?: string | null, category?: string | null): EncodingProfile
    static fromDiscoverer(info: DiscovererInfo): EncodingProfile
    static $gtype: GObject.Type
}
interface EncodingTarget_ConstructProps extends GObject.Object_ConstructProps {
}
class EncodingTarget {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingTarget */
    addProfile(profile: EncodingProfile): boolean
    getCategory(): string
    getDescription(): string
    getName(): string
    getPath(): string
    getProfile(name: string): EncodingProfile
    getProfiles(): EncodingProfile[]
    save(): boolean
    saveToFile(filepath: string): boolean
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
    constructor (config?: EncodingTarget_ConstructProps)
    _init (config?: EncodingTarget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, category: string, description: string, profiles: EncodingProfile[]): EncodingTarget
    static load(name: string, category?: string | null): EncodingTarget
    static loadFromFile(filepath: string): EncodingTarget
    static $gtype: GObject.Type
}
interface EncodingVideoProfile_ConstructProps extends EncodingProfile_ConstructProps {
}
class EncodingVideoProfile {
    /* Properties of GstPbutils-1.0.GstPbutils.EncodingProfile */
    elementProperties: Gst.Structure
    restrictionCaps: Gst.Caps
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingVideoProfile */
    getPass(): number
    getVariableframerate(): boolean
    setPass(pass: number): void
    setVariableframerate(variableframerate: boolean): void
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingProfile */
    copy(): EncodingProfile
    getAllowDynamicOutput(): boolean
    getDescription(): string
    getElementProperties(): Gst.Structure | null
    getFileExtension(): string
    getFormat(): Gst.Caps
    getInputCaps(): Gst.Caps
    getName(): string
    getPresence(): number
    getPreset(): string
    getPresetName(): string
    getRestriction(): Gst.Caps
    getSingleSegment(): boolean
    getTypeNick(): string
    isEnabled(): boolean
    isEqual(b: EncodingProfile): boolean
    setAllowDynamicOutput(allowDynamicOutput: boolean): void
    setDescription(description?: string | null): void
    setElementProperties(elementProperties: Gst.Structure): void
    setEnabled(enabled: boolean): void
    setFormat(format: Gst.Caps): void
    setName(name?: string | null): void
    setPresence(presence: number): void
    setPreset(preset?: string | null): void
    setPresetName(presetName?: string | null): void
    setRestriction(restriction?: Gst.Caps | null): void
    setSingleSegment(singleSegment: boolean): void
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
    connect(sigName: "notify::element-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EncodingVideoProfile_ConstructProps)
    _init (config?: EncodingVideoProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: Gst.Caps, preset: string | null, restriction: Gst.Caps | null, presence: number): EncodingVideoProfile
    static $gtype: GObject.Type
}
abstract class AudioVisualizerClass {
    /* Fields of GstPbutils-1.0.GstPbutils.AudioVisualizerClass */
    readonly setup: (scope: AudioVisualizer) => boolean
    readonly render: (scope: AudioVisualizer, audio: Gst.Buffer, video: GstVideo.VideoFrame) => boolean
    readonly decideAllocation: (scope: AudioVisualizer, query: Gst.Query) => boolean
    static name: string
}
class AudioVisualizerPrivate {
    static name: string
}
abstract class DiscovererClass {
    /* Fields of GstPbutils-1.0.GstPbutils.DiscovererClass */
    readonly parentclass: GObject.ObjectClass
    readonly finished: (discoverer: Discoverer) => void
    readonly starting: (discoverer: Discoverer) => void
    readonly discovered: (discoverer: Discoverer, info: DiscovererInfo, err: GLib.Error) => void
    readonly sourceSetup: (discoverer: Discoverer, source: Gst.Element) => void
    readonly reserved: object[]
    static name: string
}
class DiscovererPrivate {
    static name: string
}
abstract class EncodingAudioProfileClass {
    static name: string
}
abstract class EncodingContainerProfileClass {
    static name: string
}
abstract class EncodingProfileClass {
    static name: string
}
abstract class EncodingVideoProfileClass {
    static name: string
}
class InstallPluginsContext {
    /* Methods of GstPbutils-1.0.GstPbutils.InstallPluginsContext */
    copy(): InstallPluginsContext
    free(): void
    setConfirmSearch(confirmSearch: boolean): void
    setDesktopId(desktopId: string): void
    setStartupNotificationId(startupId: string): void
    setXid(xid: number): void
    static name: string
    static new(): InstallPluginsContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): InstallPluginsContext
}
    type DiscovererAudioInfoClass = GObject.ObjectClass
    type DiscovererContainerInfoClass = GObject.ObjectClass
    type DiscovererInfoClass = GObject.ObjectClass
    type DiscovererStreamInfoClass = GObject.ObjectClass
    type DiscovererSubtitleInfoClass = GObject.ObjectClass
    type DiscovererVideoInfoClass = GObject.ObjectClass
    type EncodingTargetClass = GObject.ObjectClass
}
export default GstPbutils;