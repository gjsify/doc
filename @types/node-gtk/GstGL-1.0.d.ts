/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstGL-1.0
 */

import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstGL {

enum GLBaseMemoryError {
    FAILED,
    OLD_LIBS,
    RESOURCE_UNAVAILABLE,
}
enum GLConfigCaveat {
    NONE,
    SLOW,
    NON_CONFORMANT,
}
enum GLContextError {
    FAILED,
    WRONG_CONFIG,
    WRONG_API,
    OLD_LIBS,
    CREATE_CONTEXT,
    RESOURCE_UNAVAILABLE,
}
enum GLFormat {
    LUMINANCE,
    ALPHA,
    LUMINANCE_ALPHA,
    RED,
    R8,
    RG,
    RG8,
    RGB,
    RGB8,
    RGB565,
    RGB16,
    RGBA,
    RGBA8,
    RGBA16,
    DEPTH_COMPONENT16,
    DEPTH24_STENCIL8,
    RGB10_A2,
    R16,
    RG16,
}
enum GLQueryType {
    NONE,
    TIME_ELAPSED,
    TIMESTAMP,
}
enum GLSLError {
    COMPILE,
    LINK,
    PROGRAM,
}
enum GLSLVersion {
    NONE,
    TODO_100,
    TODO_110,
    TODO_120,
    TODO_130,
    TODO_140,
    TODO_150,
    TODO_300,
    TODO_310,
    TODO_320,
    TODO_330,
    TODO_400,
    TODO_410,
    TODO_420,
    TODO_430,
    TODO_440,
    TODO_450,
}
enum GLStereoDownmix {
    GREEN_MAGENTA_DUBOIS,
    RED_CYAN_DUBOIS,
    AMBER_BLUE_DUBOIS,
}
enum GLTextureTarget {
    NONE,
    TODO_2D,
    RECTANGLE,
    EXTERNAL_OES,
}
enum GLUploadReturn {
    DONE,
    ERROR,
    UNSUPPORTED,
    RECONFIGURE,
    UNSHARED_GL_CONTEXT,
}
enum GLWindowError {
    FAILED,
    OLD_LIBS,
    RESOURCE_UNAVAILABLE,
}
enum GLAPI {
    NONE,
    OPENGL,
    OPENGL3,
    GLES1,
    GLES2,
    ANY,
}
enum GLBaseMemoryTransfer {
    DOWNLOAD,
    UPLOAD,
}
enum GLConfigSurfaceType {
    NONE,
    WINDOW,
    PBUFFER,
    PIXMAP,
}
enum GLDisplayType {
    NONE,
    X11,
    WAYLAND,
    COCOA,
    WIN32,
    DISPMANX,
    EGL,
    VIV_FB,
    GBM,
    EGL_DEVICE,
    EAGL,
    WINRT,
    ANDROID,
    ANY,
}
enum GLPlatform {
    NONE,
    EGL,
    GLX,
    WGL,
    CGL,
    EAGL,
    ANY,
}
enum GLSLProfile {
    NONE,
    ES,
    CORE,
    COMPATIBILITY,
    ANY,
}
const BUFFER_POOL_OPTION_GL_SYNC_META: string
const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_2D: string
const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_EXTERNAL_OES: string
const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_RECTANGLE: string
const CAPS_FEATURE_MEMORY_GL_BUFFER: string
const CAPS_FEATURE_MEMORY_GL_MEMORY: string
const GL_ALLOCATION_PARAMS_ALLOC_FLAG_ALLOC: number
const GL_ALLOCATION_PARAMS_ALLOC_FLAG_BUFFER: number
const GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER: number
const GL_ALLOCATION_PARAMS_ALLOC_FLAG_VIDEO: number
const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_GPU_HANDLE: number
const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_SYSMEM: number
const GL_API_GLES1_NAME: string
const GL_API_GLES2_NAME: string
const GL_API_OPENGL3_NAME: string
const GL_API_OPENGL_NAME: string
const GL_BASE_MEMORY_ALLOCATOR_NAME: string
const GL_BUFFER_ALLOCATOR_NAME: string

const GL_COLOR_CONVERT_FORMATS: string
const GL_COLOR_CONVERT_VIDEO_CAPS: string
const GL_CONFIG_STRUCTURE_NAME: string
const GL_CONTEXT_TYPE_CGL: string
const GL_CONTEXT_TYPE_EAGL: string
const GL_CONTEXT_TYPE_EGL: string
const GL_CONTEXT_TYPE_GLX: string
const GL_CONTEXT_TYPE_WGL: string
const GL_DISPLAY_CONTEXT_TYPE: string
const GL_MEMORY_ALLOCATOR_NAME: string
const GL_MEMORY_PBO_ALLOCATOR_NAME: string

const GL_MEMORY_VIDEO_FORMATS_STR: string
const GL_RENDERBUFFER_ALLOCATOR_NAME: string
const GL_TEXTURE_TARGET_2D_STR: string
const GL_TEXTURE_TARGET_EXTERNAL_OES_STR: string
const GL_TEXTURE_TARGET_RECTANGLE_STR: string
const MAP_GL: number
function bufferAddGlSyncMeta(context: GLContext, buffer: Gst.Buffer): GLSyncMeta
function bufferAddGlSyncMetaFull(context: GLContext, buffer: Gst.Buffer, data?: object | null): GLSyncMeta
function bufferPoolConfigGetGlAllocationParams(config: Gst.Structure): GLAllocationParams
function bufferPoolConfigSetGlAllocationParams(config: Gst.Structure, params: GLAllocationParams): void
function contextGetGlDisplay(context: Gst.Context): [ /* returnType */ boolean, /* display */ GLDisplay ]
function contextSetGlDisplay(context: Gst.Context, display: GLDisplay): void
function glApiFromString(apiS: string): GLAPI
function glApiToString(api: GLAPI): string
function glBaseMemoryAlloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory
function glBaseMemoryErrorQuark(): GLib.Quark
function glBaseMemoryInitOnce(): void
function glBufferInitOnce(): void
function glCheckExtension(name: string, ext: string): boolean
function glConfigCaveatToString(caveat: GLConfigCaveat): string | null
function glConfigSurfaceTypeToString(surfaceType: GLConfigSurfaceType): string | null
function glContextErrorQuark(): GLib.Quark
function glElementPropagateDisplayContext(element: Gst.Element, display: GLDisplay): void
function glEnsureElementData(element: Gst.Element, displayPtr: GLDisplay, otherContextPtr: GLContext): [ /* returnType */ boolean, /* displayPtr */ GLDisplay, /* otherContextPtr */ GLContext ]
function glFormatFromVideoInfo(context: GLContext, vinfo: GstVideo.VideoInfo, plane: number): GLFormat
function glFormatIsSupported(context: GLContext, format: GLFormat): boolean
function glFormatTypeFromSizedGlFormat(format: GLFormat): [ /* unsizedFormat */ GLFormat, /* glType */ number ]
function glFormatTypeNBytes(format: number, type: number): number
function glGetAffineTransformationMetaAsNdc(meta?: GstVideo.VideoAffineTransformationMeta | null): /* matrix */ number[]
function glGetPlaneDataSize(info: GstVideo.VideoInfo, align: GstVideo.VideoAlignment, plane: number): number
function glGetPlaneStart(info: GstVideo.VideoInfo, valign: GstVideo.VideoAlignment, plane: number): number
function glHandleContextQuery(element: Gst.Element, query: Gst.Query, display?: GLDisplay | null, context?: GLContext | null, otherContext?: GLContext | null): boolean
function glHandleSetContext(element: Gst.Element, context: Gst.Context): [ /* returnType */ boolean, /* display */ GLDisplay, /* otherContext */ GLContext ]
function glMemoryInitOnce(): void
function glMemoryPboInitOnce(): void
function glMultiplyMatrix4(a: number[], b: number[]): /* result */ number[]
function glPlatformFromString(platformS: string): GLPlatform
function glPlatformToString(platform: GLPlatform): string
function glQueryLocalGlContext(element: Gst.Element, direction: Gst.PadDirection, contextPtr: GLContext): [ /* returnType */ boolean, /* contextPtr */ GLContext ]
function glRenderbufferInitOnce(): void
function glSetAffineTransformationMetaFromNdc(meta: GstVideo.VideoAffineTransformationMeta, matrix: number[]): void
function glSizedGlFormatFromGlFormatType(context: GLContext, format: number, type: number): number
function glStereoDownmixModeGetType(): GObject.Type
function glSyncMetaApiGetType(): GObject.Type
function glSyncMetaGetInfo(): Gst.MetaInfo
function glTextureTargetFromGl(target: number): GLTextureTarget
function glTextureTargetFromString(str: string): GLTextureTarget
function glTextureTargetToBufferPoolOption(target: GLTextureTarget): string
function glTextureTargetToGl(target: GLTextureTarget): number
function glTextureTargetToString(target: GLTextureTarget): string
function glValueGetTextureTargetMask(value: any): GLTextureTarget
function glValueSetTextureTarget(value: any, target: GLTextureTarget): boolean
function glValueSetTextureTargetFromMask(value: any, targetMask: GLTextureTarget): boolean
function glVersionToGlslVersion(glApi: GLAPI, maj: number, min: number): GLSLVersion
function glWindowErrorQuark(): GLib.Quark
function glslErrorQuark(): GLib.Quark
function glslProfileFromString(string: string): GLSLProfile
function glslProfileToString(profile: GLSLProfile): string | null
function glslStringGetVersionProfile(s: string): [ /* returnType */ boolean, /* version */ GLSLVersion, /* profile */ GLSLProfile ]
function glslVersionFromString(string: string): GLSLVersion
function glslVersionProfileFromString(string: string): [ /* returnType */ boolean, /* versionRet */ GLSLVersion, /* profileRet */ GLSLProfile ]
function glslVersionProfileToString(version: GLSLVersion, profile: GLSLProfile): string
function glslVersionToString(version: GLSLVersion): string | null
function isGlBaseMemory(mem: Gst.Memory): boolean
function isGlBuffer(mem: Gst.Memory): boolean
function isGlMemory(mem: Gst.Memory): boolean
function isGlMemoryPbo(mem: Gst.Memory): boolean
function isGlRenderbuffer(mem: Gst.Memory): boolean
interface GLAllocationParamsCopyFunc {
    (src: GLAllocationParams, dest: GLAllocationParams): void
}
interface GLAllocationParamsFreeFunc {
    (params?: object | null): void
}
interface GLAsyncDebugLogGetMessage {
    (): string
}
interface GLBaseMemoryAllocatorAllocFunction {
    (allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory
}
interface GLBaseMemoryAllocatorCopyFunction {
    (mem: GLBaseMemory, offset: number, size: number): GLBaseMemory
}
interface GLBaseMemoryAllocatorCreateFunction {
    (mem: GLBaseMemory): boolean
}
interface GLBaseMemoryAllocatorDestroyFunction {
    (mem: GLBaseMemory): void
}
interface GLBaseMemoryAllocatorMapFunction {
    (mem: GLBaseMemory, info: Gst.MapInfo, maxsize: number): object | null
}
interface GLBaseMemoryAllocatorUnmapFunction {
    (mem: GLBaseMemory, info: Gst.MapInfo): void
}
interface GLContextThreadFunc {
    (context: GLContext, data?: object | null): void
}
interface GLFilterRenderFunc {
    (filter: GLFilter, inTex: GLMemory): boolean
}
interface GLFramebufferFunc {
    (stuff?: object | null): boolean
}
interface GLWindowCB {
    (data?: object | null): void
}
interface GLWindowResizeCB {
    (data: object | null, width: number, height: number): void
}
interface GLBaseFilter_ConstructProps extends GstBase.BaseTransform_ConstructProps {
}
class GLBaseFilter {
    /* Properties of GstGL-1.0.GstGL.GLBaseFilter */
    readonly context: GLContext
    /* Properties of GstBase-1.0.GstBase.BaseTransform */
    qos: boolean
    /* Fields of GstBase-1.0.GstBase.BaseTransform */
    readonly element: Gst.Element
    readonly sinkpad: Gst.Pad
    readonly srcpad: Gst.Pad
    readonly haveSegment: boolean
    readonly segment: Gst.Segment
    readonly queuedBuf: Gst.Buffer
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
    /* Methods of GstGL-1.0.GstGL.GLBaseFilter */
    findGlContext(): boolean
    getGlContext(): GLContext | null
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
    connect(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: GLBaseFilter_ConstructProps)
    _init (config?: GLBaseFilter_ConstructProps): void
    static $gtype: GObject.Type
}
interface GLBaseMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps {
}
class GLBaseMemoryAllocator {
    /* Fields of Gst-1.0.Gst.Allocator */
    readonly object: Gst.Object
    readonly memType: string
    readonly memMap: Gst.MemoryMapFunction
    readonly memUnmap: Gst.MemoryUnmapFunction
    readonly memCopy: Gst.MemoryCopyFunction
    readonly memShare: Gst.MemoryShareFunction
    readonly memIsSpan: Gst.MemoryIsSpanFunction
    readonly memMapFull: Gst.MemoryMapFullFunction
    readonly memUnmapFull: Gst.MemoryUnmapFullFunction
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    setDefault(): void
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
    constructor (config?: GLBaseMemoryAllocator_ConstructProps)
    _init (config?: GLBaseMemoryAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
interface GLBaseSrc_ConstructProps extends GstBase.PushSrc_ConstructProps {
    /* Constructor properties of GstGL-1.0.GstGL.GLBaseSrc */
    timestampOffset?: number
}
class GLBaseSrc {
    /* Properties of GstGL-1.0.GstGL.GLBaseSrc */
    timestampOffset: number
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    doTimestamp: boolean
    /* Fields of GstBase-1.0.GstBase.PushSrc */
    readonly parent: GstBase.BaseSrc
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
    connect(sigName: "notify::timestamp-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: GLBaseSrc_ConstructProps)
    _init (config?: GLBaseSrc_ConstructProps): void
    static $gtype: GObject.Type
}
interface GLBufferAllocator_ConstructProps extends GLBaseMemoryAllocator_ConstructProps {
}
class GLBufferAllocator {
    /* Fields of Gst-1.0.Gst.Allocator */
    readonly object: Gst.Object
    readonly memType: string
    readonly memMap: Gst.MemoryMapFunction
    readonly memUnmap: Gst.MemoryUnmapFunction
    readonly memCopy: Gst.MemoryCopyFunction
    readonly memShare: Gst.MemoryShareFunction
    readonly memIsSpan: Gst.MemoryIsSpanFunction
    readonly memMapFull: Gst.MemoryMapFullFunction
    readonly memUnmapFull: Gst.MemoryUnmapFullFunction
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    setDefault(): void
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
    constructor (config?: GLBufferAllocator_ConstructProps)
    _init (config?: GLBufferAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
interface GLBufferPool_ConstructProps extends Gst.BufferPool_ConstructProps {
}
class GLBufferPool {
    /* Fields of Gst-1.0.Gst.BufferPool */
    readonly object: Gst.Object
    readonly flushing: number
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLBufferPool */
    getGlAllocationParams(): GLAllocationParams
    /* Methods of Gst-1.0.Gst.BufferPool */
    acquireBuffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    getConfig(): Gst.Structure
    getOptions(): string[]
    hasOption(option: string): boolean
    isActive(): boolean
    releaseBuffer(buffer: Gst.Buffer): void
    setActive(active: boolean): boolean
    setConfig(config: Gst.Structure): boolean
    setFlushing(flushing: boolean): void
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
    constructor (config?: GLBufferPool_ConstructProps)
    _init (config?: GLBufferPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLBufferPool
    /* Function overloads */
    static new(): GLBufferPool
    static $gtype: GObject.Type
}
interface GLColorConvert_ConstructProps extends Gst.Object_ConstructProps {
}
class GLColorConvert {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLColorConvert */
    decideAllocation(query: Gst.Query): boolean
    perform(inbuf: Gst.Buffer): Gst.Buffer
    setCaps(inCaps: Gst.Caps, outCaps: Gst.Caps): boolean
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
    constructor (config?: GLColorConvert_ConstructProps)
    _init (config?: GLColorConvert_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLColorConvert
    static fixateCaps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, other: Gst.Caps): Gst.Caps
    static transformCaps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
    static $gtype: GObject.Type
}
interface GLContext_ConstructProps extends Gst.Object_ConstructProps {
}
class GLContext {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLContext */
    activate(activate: boolean): boolean
    canShare(otherContext: GLContext): boolean
    checkFeature(feature: string): boolean
    checkFramebufferStatus(fboTarget: number): boolean
    checkGlVersion(api: GLAPI, maj: number, min: number): boolean
    clearFramebuffer(): void
    clearShader(): void
    create(otherContext?: GLContext | null): boolean
    destroy(): void
    fillInfo(): boolean
    getConfig(): Gst.Structure | null
    getDisplay(): GLDisplay
    getGlApi(): GLAPI
    getGlContext(): number
    getGlPlatform(): GLPlatform
    getGlPlatformVersion(): [ /* major */ number, /* minor */ number ]
    getGlVersion(): [ /* maj */ number, /* min */ number ]
    getProcAddress(name: string): object | null
    getThread(): GLib.Thread
    getWindow(): GLWindow | null
    isShared(): boolean
    requestConfig(glConfig?: Gst.Structure | null): boolean
    setSharedWith(share: GLContext): void
    setWindow(window: GLWindow): boolean
    supportsGlslProfileVersion(version: GLSLVersion, profile: GLSLProfile): boolean
    supportsPrecision(version: GLSLVersion, profile: GLSLProfile): boolean
    supportsPrecisionHighp(version: GLSLVersion, profile: GLSLProfile): boolean
    swapBuffers(): void
    threadAdd(func: GLContextThreadFunc): void
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
    constructor (config?: GLContext_ConstructProps)
    _init (config?: GLContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: GLDisplay): GLContext
    static newWrapped(display: GLDisplay, handle: number, contextType: GLPlatform, availableApis: GLAPI): GLContext
    static defaultGetProcAddress(glApi: GLAPI, name: string): object | null
    static getCurrent(): GLContext
    static getCurrentGlApi(platform: GLPlatform): [ /* returnType */ GLAPI, /* major */ number | null, /* minor */ number | null ]
    static getCurrentGlContext(contextType: GLPlatform): number
    static getProcAddressWithPlatform(contextType: GLPlatform, glApi: GLAPI, name: string): object | null
    static $gtype: GObject.Type
}
interface GLDisplay_ConstructProps extends Gst.Object_ConstructProps {
}
class GLDisplay {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLDisplay */
    addContext(context: GLContext): boolean
    createContext(otherContext: GLContext): [ /* returnType */ boolean, /* pContext */ GLContext ]
    createWindow(): GLWindow
    filterGlApi(glApi: GLAPI): void
    findWindow(data: object | null, compareFunc: GLib.CompareFunc): GLWindow
    getGlApi(): GLAPI
    getGlApiUnlocked(): GLAPI
    getGlContextForThread(thread: GLib.Thread): GLContext
    getHandle(): number
    getHandleType(): GLDisplayType
    removeContext(context: GLContext): void
    removeWindow(window: GLWindow): boolean
    retrieveWindow(data: object | null, compareFunc: GLib.CompareFunc): GLWindow
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
    /* Signals of GstGL-1.0.GstGL.GLDisplay */
    connect(sigName: "create-context", callback: ((context: GLContext) => GLContext)): number
    on(sigName: "create-context", callback: (context: GLContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-context", callback: (context: GLContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-context", callback: (context: GLContext) => void): NodeJS.EventEmitter
    emit(sigName: "create-context", context: GLContext): void
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
    constructor (config?: GLDisplay_ConstructProps)
    _init (config?: GLDisplay_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GLDisplay
    static newWithType(type: GLDisplayType): GLDisplay
    static $gtype: GObject.Type
}
interface GLFilter_ConstructProps extends GLBaseFilter_ConstructProps {
}
class GLFilter {
    /* Properties of GstBase-1.0.GstBase.BaseTransform */
    qos: boolean
    /* Fields of GstGL-1.0.GstGL.GLBaseFilter */
    readonly parent: GstBase.BaseTransform
    readonly display: GLDisplay
    readonly context: GLContext
    readonly inCaps: Gst.Caps
    readonly outCaps: Gst.Caps
    /* Fields of GstBase-1.0.GstBase.BaseTransform */
    readonly element: Gst.Element
    readonly sinkpad: Gst.Pad
    readonly srcpad: Gst.Pad
    readonly haveSegment: boolean
    readonly segment: Gst.Segment
    readonly queuedBuf: Gst.Buffer
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
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLFilter */
    drawFullscreenQuad(): void
    filterTexture(input: Gst.Buffer, output: Gst.Buffer): boolean
    renderToTarget(input: GLMemory, output: GLMemory, func: GLFilterRenderFunc): boolean
    renderToTargetWithShader(input: GLMemory, output: GLMemory, shader: GLShader): void
    /* Methods of GstGL-1.0.GstGL.GLBaseFilter */
    findGlContext(): boolean
    getGlContext(): GLContext | null
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
    constructor (config?: GLFilter_ConstructProps)
    _init (config?: GLFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static addRgbaPadTemplates(klass: GLFilterClass): void
    static $gtype: GObject.Type
}
interface GLFramebuffer_ConstructProps extends Gst.Object_ConstructProps {
}
class GLFramebuffer {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLFramebuffer */
    attach(attachmentPoint: number, mem: GLBaseMemory): void
    bind(): void
    drawToTexture(mem: GLMemory, func: GLFramebufferFunc): boolean
    getEffectiveDimensions(): [ /* width */ number | null, /* height */ number | null ]
    getId(): number
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
    constructor (config?: GLFramebuffer_ConstructProps)
    _init (config?: GLFramebuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLFramebuffer
    static newWithDefaultDepth(context: GLContext, width: number, height: number): GLFramebuffer
    static $gtype: GObject.Type
}
interface GLMemoryAllocator_ConstructProps extends GLBaseMemoryAllocator_ConstructProps {
}
class GLMemoryAllocator {
    /* Fields of Gst-1.0.Gst.Allocator */
    readonly object: Gst.Object
    readonly memType: string
    readonly memMap: Gst.MemoryMapFunction
    readonly memUnmap: Gst.MemoryUnmapFunction
    readonly memCopy: Gst.MemoryCopyFunction
    readonly memShare: Gst.MemoryShareFunction
    readonly memIsSpan: Gst.MemoryIsSpanFunction
    readonly memMapFull: Gst.MemoryMapFullFunction
    readonly memUnmapFull: Gst.MemoryUnmapFullFunction
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    setDefault(): void
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
    constructor (config?: GLMemoryAllocator_ConstructProps)
    _init (config?: GLMemoryAllocator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(context: GLContext): GLMemoryAllocator
    static $gtype: GObject.Type
}
interface GLMemoryPBOAllocator_ConstructProps extends GLMemoryAllocator_ConstructProps {
}
class GLMemoryPBOAllocator {
    /* Fields of Gst-1.0.Gst.Allocator */
    readonly object: Gst.Object
    readonly memType: string
    readonly memMap: Gst.MemoryMapFunction
    readonly memUnmap: Gst.MemoryUnmapFunction
    readonly memCopy: Gst.MemoryCopyFunction
    readonly memShare: Gst.MemoryShareFunction
    readonly memIsSpan: Gst.MemoryIsSpanFunction
    readonly memMapFull: Gst.MemoryMapFullFunction
    readonly memUnmapFull: Gst.MemoryUnmapFullFunction
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    setDefault(): void
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
    constructor (config?: GLMemoryPBOAllocator_ConstructProps)
    _init (config?: GLMemoryPBOAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
interface GLOverlayCompositor_ConstructProps extends Gst.Object_ConstructProps {
    /* Constructor properties of GstGL-1.0.GstGL.GLOverlayCompositor */
    yinvert?: boolean
}
class GLOverlayCompositor {
    /* Properties of GstGL-1.0.GstGL.GLOverlayCompositor */
    yinvert: boolean
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLOverlayCompositor */
    drawOverlays(): void
    freeOverlays(): void
    uploadOverlays(buf: Gst.Buffer): void
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
    connect(sigName: "notify::yinvert", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yinvert", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yinvert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::yinvert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::yinvert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GLOverlayCompositor_ConstructProps)
    _init (config?: GLOverlayCompositor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLOverlayCompositor
    static addCaps(caps: Gst.Caps): Gst.Caps
    static $gtype: GObject.Type
}
interface GLRenderbufferAllocator_ConstructProps extends GLBaseMemoryAllocator_ConstructProps {
}
class GLRenderbufferAllocator {
    /* Fields of Gst-1.0.Gst.Allocator */
    readonly object: Gst.Object
    readonly memType: string
    readonly memMap: Gst.MemoryMapFunction
    readonly memUnmap: Gst.MemoryUnmapFunction
    readonly memCopy: Gst.MemoryCopyFunction
    readonly memShare: Gst.MemoryShareFunction
    readonly memIsSpan: Gst.MemoryIsSpanFunction
    readonly memMapFull: Gst.MemoryMapFullFunction
    readonly memUnmapFull: Gst.MemoryUnmapFullFunction
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    setDefault(): void
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
    constructor (config?: GLRenderbufferAllocator_ConstructProps)
    _init (config?: GLRenderbufferAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
interface GLSLStage_ConstructProps extends Gst.Object_ConstructProps {
}
class GLSLStage {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLSLStage */
    compile(): boolean
    getHandle(): number
    getProfile(): GLSLProfile
    getShaderType(): number
    getVersion(): GLSLVersion
    setStrings(version: GLSLVersion, profile: GLSLProfile, str: string[]): boolean
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
    constructor (config?: GLSLStage_ConstructProps)
    _init (config?: GLSLStage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, type: number): GLSLStage
    static newDefaultFragment(context: GLContext): GLSLStage
    static newDefaultVertex(context: GLContext): GLSLStage
    static newWithString(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, str: string): GLSLStage
    static newWithStrings(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, str: string[]): GLSLStage
    static $gtype: GObject.Type
}
interface GLShader_ConstructProps extends Gst.Object_ConstructProps {
}
class GLShader {
    /* Properties of GstGL-1.0.GstGL.GLShader */
    readonly linked: boolean
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLShader */
    attach(stage: GLSLStage): boolean
    attachUnlocked(stage: GLSLStage): boolean
    bindAttributeLocation(index: number, name: string): void
    bindFragDataLocation(index: number, name: string): void
    compileAttachStage(stage: GLSLStage): boolean
    detach(stage: GLSLStage): void
    detachUnlocked(stage: GLSLStage): void
    getAttributeLocation(name: string): number
    getProgramHandle(): number
    isLinked(): boolean
    link(): boolean
    release(): void
    releaseUnlocked(): void
    setUniform1f(name: string, value: number): void
    setUniform1fv(name: string, value: number[]): void
    setUniform1i(name: string, value: number): void
    setUniform1iv(name: string, value: number[]): void
    setUniform2f(name: string, v0: number, v1: number): void
    setUniform2fv(name: string, value: number[]): void
    setUniform2i(name: string, v0: number, v1: number): void
    setUniform2iv(name: string, value: number[]): void
    setUniform3f(name: string, v0: number, v1: number, v2: number): void
    setUniform3fv(name: string, value: number[]): void
    setUniform3i(name: string, v0: number, v1: number, v2: number): void
    setUniform3iv(name: string, value: number[]): void
    setUniform4f(name: string, v0: number, v1: number, v2: number, v3: number): void
    setUniform4fv(name: string, value: number[]): void
    setUniform4i(name: string, v0: number, v1: number, v2: number, v3: number): void
    setUniform4iv(name: string, value: number[]): void
    setUniformMatrix2fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix2x3fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix2x4fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix3fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix3x2fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix3x4fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix4fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix4x2fv(name: string, count: number, transpose: boolean, value: number): void
    setUniformMatrix4x3fv(name: string, count: number, transpose: boolean, value: number): void
    use(): void
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
    connect(sigName: "notify::linked", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linked", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GLShader_ConstructProps)
    _init (config?: GLShader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLShader
    static newDefault(context: GLContext): GLShader
    static stringFragmentExternalOesGetDefault(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string
    static stringFragmentGetDefault(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string
    static stringGetHighestPrecision(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string
    static $gtype: GObject.Type
}
interface GLUpload_ConstructProps extends Gst.Object_ConstructProps {
}
class GLUpload {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLUpload */
    getCaps(): [ /* inCaps */ Gst.Caps | null, /* outCaps */ Gst.Caps | null ]
    performWithBuffer(buffer: Gst.Buffer): [ /* returnType */ GLUploadReturn, /* outbufPtr */ Gst.Buffer ]
    proposeAllocation(decideQuery: Gst.Query | null, query: Gst.Query): void
    setCaps(inCaps: Gst.Caps, outCaps: Gst.Caps): boolean
    setContext(context: GLContext): void
    transformCaps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
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
    constructor (config?: GLUpload_ConstructProps)
    _init (config?: GLUpload_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLUpload
    static getInputTemplateCaps(): Gst.Caps
    static $gtype: GObject.Type
}
interface GLViewConvert_ConstructProps extends Gst.Object_ConstructProps {
    /* Constructor properties of GstGL-1.0.GstGL.GLViewConvert */
    downmixMode?: GLStereoDownmix
    inputFlagsOverride?: GstVideo.VideoMultiviewFlags
    inputModeOverride?: GstVideo.VideoMultiviewMode
    outputFlagsOverride?: GstVideo.VideoMultiviewFlags
    outputModeOverride?: GstVideo.VideoMultiviewMode
}
class GLViewConvert {
    /* Properties of GstGL-1.0.GstGL.GLViewConvert */
    downmixMode: GLStereoDownmix
    inputFlagsOverride: GstVideo.VideoMultiviewFlags
    inputModeOverride: GstVideo.VideoMultiviewMode
    outputFlagsOverride: GstVideo.VideoMultiviewFlags
    outputModeOverride: GstVideo.VideoMultiviewMode
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLViewConvert */
    fixateCaps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    getOutput(): [ /* returnType */ Gst.FlowReturn, /* outbufPtr */ Gst.Buffer ]
    perform(inbuf: Gst.Buffer): Gst.Buffer
    reset(): void
    setCaps(inCaps: Gst.Caps, outCaps: Gst.Caps): boolean
    setContext(context: GLContext): void
    submitInputBuffer(isDiscont: boolean, input: Gst.Buffer): Gst.FlowReturn
    transformCaps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
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
    connect(sigName: "notify::downmix-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::downmix-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::downmix-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::downmix-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::downmix-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-flags-override", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-flags-override", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-flags-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-flags-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-flags-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-mode-override", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode-override", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-mode-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-mode-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-mode-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-flags-override", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-flags-override", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-flags-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-flags-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-flags-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-mode-override", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-mode-override", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-mode-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-mode-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-mode-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GLViewConvert_ConstructProps)
    _init (config?: GLViewConvert_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GLViewConvert
    static $gtype: GObject.Type
}
interface GLWindow_ConstructProps extends Gst.Object_ConstructProps {
}
class GLWindow {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLWindow */
    controlsViewport(): boolean
    draw(): void
    getContext(): GLContext
    getDisplay(): number
    getSurfaceDimensions(): [ /* width */ number, /* height */ number ]
    getWindowHandle(): number
    handleEvents(handleEvents: boolean): void
    hasOutputSurface(): boolean
    queueResize(): void
    quit(): void
    resize(width: number, height: number): void
    run(): void
    sendKeyEvent(eventType: string, keyStr: string): void
    sendMessage(callback: GLWindowCB): void
    sendMessageAsync(callback: GLWindowCB): void
    sendMouseEvent(eventType: string, button: number, posx: number, posy: number): void
    sendScrollEvent(posx: number, posy: number, deltaX: number, deltaY: number): void
    setCloseCallback(callback: GLWindowCB): void
    setDrawCallback(callback: GLWindowCB): void
    setPreferredSize(width: number, height: number): void
    setRenderRectangle(x: number, y: number, width: number, height: number): boolean
    setResizeCallback(callback: GLWindowResizeCB): void
    setWindowHandle(handle: number): void
    show(): void
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
    /* Signals of GstGL-1.0.GstGL.GLWindow */
    connect(sigName: "key-event", callback: ((id: string, key: string) => void)): number
    on(sigName: "key-event", callback: (id: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-event", callback: (id: string, key: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-event", callback: (id: string, key: string) => void): NodeJS.EventEmitter
    emit(sigName: "key-event", id: string, key: string): void
    connect(sigName: "mouse-event", callback: ((id: string, button: number, x: number, y: number) => void)): number
    on(sigName: "mouse-event", callback: (id: string, button: number, x: number, y: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mouse-event", callback: (id: string, button: number, x: number, y: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mouse-event", callback: (id: string, button: number, x: number, y: number) => void): NodeJS.EventEmitter
    emit(sigName: "mouse-event", id: string, button: number, x: number, y: number): void
    connect(sigName: "scroll-event", callback: ((x: number, y: number, deltaX: number, deltaY: number) => void)): number
    on(sigName: "scroll-event", callback: (x: number, y: number, deltaX: number, deltaY: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (x: number, y: number, deltaX: number, deltaY: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (x: number, y: number, deltaX: number, deltaY: number) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", x: number, y: number, deltaX: number, deltaY: number): void
    connect(sigName: "window-handle-changed", callback: (() => void)): number
    on(sigName: "window-handle-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-handle-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-handle-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "window-handle-changed"): void
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
    constructor (config?: GLWindow_ConstructProps)
    _init (config?: GLWindow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: GLDisplay): GLWindow
    static $gtype: GObject.Type
}
class GLAllocationParams {
    /* Fields of GstGL-1.0.GstGL.GLAllocationParams */
    readonly structSize: number
    readonly copy: GLAllocationParamsCopyFunc
    readonly free: GLAllocationParamsFreeFunc
    readonly allocFlags: number
    readonly allocSize: number
    readonly allocParams: Gst.AllocationParams
    readonly context: GLContext
    readonly notify: GLib.DestroyNotify
    readonly userData: object
    readonly wrappedData: object
    readonly glHandle: object
    /* Methods of GstGL-1.0.GstGL.GLAllocationParams */
    copyData(dest: GLAllocationParams): void
    freeData(): void
    static name: string
}
class GLAsyncDebug {
    /* Methods of GstGL-1.0.GstGL.GLAsyncDebug */
    free(): void
    freeze(): void
    init(): void
    outputLogMsg(): void
    thaw(): void
    unset(): void
    static name: string
}
abstract class GLBaseFilterClass {
    /* Fields of GstGL-1.0.GstGL.GLBaseFilterClass */
    readonly parentClass: GstBase.BaseTransformClass
    readonly supportedGlApi: GLAPI
    readonly glStart: (filter: GLBaseFilter) => boolean
    readonly glStop: (filter: GLBaseFilter) => void
    readonly glSetCaps: (filter: GLBaseFilter, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
    static name: string
}
class GLBaseFilterPrivate {
    static name: string
}
class GLBaseMemory {
    /* Fields of GstGL-1.0.GstGL.GLBaseMemory */
    readonly mem: Gst.Memory
    readonly context: GLContext
    readonly lock: GLib.Mutex
    readonly mapFlags: Gst.MapFlags
    readonly mapCount: number
    readonly glMapCount: number
    readonly data: object
    readonly query: GLQuery
    /* Methods of GstGL-1.0.GstGL.GLBaseMemory */
    allocData(): boolean
    init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, params: Gst.AllocationParams | null, size: number, userData?: object | null, notify?: GLib.DestroyNotify | null): void
    memcpy(dest: GLBaseMemory, offset: number, size: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory
    static initOnce(): void
}
abstract class GLBaseMemoryAllocatorClass {
    /* Fields of GstGL-1.0.GstGL.GLBaseMemoryAllocatorClass */
    readonly parentClass: Gst.AllocatorClass
    readonly alloc: GLBaseMemoryAllocatorAllocFunction
    readonly create: GLBaseMemoryAllocatorCreateFunction
    readonly map: GLBaseMemoryAllocatorMapFunction
    readonly unmap: GLBaseMemoryAllocatorUnmapFunction
    readonly copy: GLBaseMemoryAllocatorCopyFunction
    readonly destroy: GLBaseMemoryAllocatorDestroyFunction
    static name: string
}
abstract class GLBaseSrcClass {
    /* Fields of GstGL-1.0.GstGL.GLBaseSrcClass */
    readonly parentClass: GstBase.PushSrcClass
    readonly supportedGlApi: GLAPI
    readonly glStart: (src: GLBaseSrc) => boolean
    readonly glStop: (src: GLBaseSrc) => void
    readonly fillGlMemory: (src: GLBaseSrc, mem: GLMemory) => boolean
    static name: string
}
class GLBaseSrcPrivate {
    static name: string
}
class GLBuffer {
    /* Fields of GstGL-1.0.GstGL.GLBuffer */
    readonly mem: GLBaseMemory
    readonly id: number
    readonly target: number
    readonly usageHints: number
    static name: string
    /* Static methods and pseudo-constructors */
    static initOnce(): void
}
class GLBufferAllocationParams {
    /* Fields of GstGL-1.0.GstGL.GLBufferAllocationParams */
    readonly parent: GLAllocationParams
    readonly glTarget: number
    readonly glUsage: number
    static name: string
    static new(context: GLContext, allocSize: number, allocParams: Gst.AllocationParams | null, glTarget: number, glUsage: number): GLBufferAllocationParams
    constructor(context: GLContext, allocSize: number, allocParams: Gst.AllocationParams | null, glTarget: number, glUsage: number)
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, allocSize: number, allocParams: Gst.AllocationParams | null, glTarget: number, glUsage: number): GLBufferAllocationParams
}
abstract class GLBufferAllocatorClass {
    /* Fields of GstGL-1.0.GstGL.GLBufferAllocatorClass */
    readonly parentClass: GLBaseMemoryAllocatorClass
    static name: string
}
abstract class GLBufferPoolClass {
    /* Fields of GstGL-1.0.GstGL.GLBufferPoolClass */
    readonly parentClass: Gst.BufferPoolClass
    static name: string
}
class GLBufferPoolPrivate {
    static name: string
}
abstract class GLColorConvertClass {
    static name: string
}
class GLColorConvertPrivate {
    static name: string
}
abstract class GLContextClass {
    /* Fields of GstGL-1.0.GstGL.GLContextClass */
    readonly parentClass: Gst.ObjectClass
    readonly getCurrentContext: () => number
    readonly getGlContext: (context: GLContext) => number
    readonly getGlApi: (context: GLContext) => GLAPI
    readonly getGlPlatform: (context: GLContext) => GLPlatform
    readonly getProcAddress: (glApi: GLAPI, name: string) => object
    readonly activate: (context: GLContext, activate: boolean) => boolean
    readonly chooseFormat: (context: GLContext) => boolean
    readonly createContext: (context: GLContext, glApi: GLAPI, otherContext: GLContext) => boolean
    readonly destroyContext: (context: GLContext) => void
    readonly swapBuffers: (context: GLContext) => void
    readonly checkFeature: (context: GLContext, feature: string) => boolean
    readonly getGlPlatformVersion: (context: GLContext) => [ /* major */ number, /* minor */ number ]
    readonly getConfig: (context: GLContext) => Gst.Structure | null
    readonly requestConfig: (context: GLContext, glConfig?: Gst.Structure | null) => boolean
    static name: string
}
class GLContextPrivate {
    static name: string
}
abstract class GLDisplayClass {
    /* Fields of GstGL-1.0.GstGL.GLDisplayClass */
    readonly objectClass: Gst.ObjectClass
    readonly getHandle: (display: GLDisplay) => number
    readonly createWindow: (display: GLDisplay) => GLWindow
    static name: string
}
class GLDisplayPrivate {
    static name: string
}
abstract class GLFilterClass {
    /* Fields of GstGL-1.0.GstGL.GLFilterClass */
    readonly parentClass: GLBaseFilterClass
    readonly setCaps: (filter: GLFilter, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
    readonly filter: (filter: GLFilter, inbuf: Gst.Buffer, outbuf: Gst.Buffer) => boolean
    readonly filterTexture: (filter: GLFilter, input: GLMemory, output: GLMemory) => boolean
    readonly initFbo: (filter: GLFilter) => boolean
    readonly transformInternalCaps: (filter: GLFilter, direction: Gst.PadDirection, caps: Gst.Caps, filterCaps: Gst.Caps) => Gst.Caps
    static name: string
}
abstract class GLFramebufferClass {
    static name: string
}
class GLFramebufferPrivate {
    static name: string
}
class GLFuncs {
    static name: string
}
class GLMemory {
    /* Fields of GstGL-1.0.GstGL.GLMemory */
    readonly mem: GLBaseMemory
    readonly texId: number
    readonly texTarget: GLTextureTarget
    readonly texFormat: GLFormat
    readonly info: GstVideo.VideoInfo
    readonly valign: GstVideo.VideoAlignment
    readonly plane: number
    readonly texScaling: number[]
    readonly textureWrapped: boolean
    readonly unpackLength: number
    readonly texWidth: number
    /* Methods of GstGL-1.0.GstGL.GLMemory */
    copyInto(texId: number, target: GLTextureTarget, texFormat: GLFormat, width: number, height: number): boolean
    copyTeximage(texId: number, outTarget: GLTextureTarget, outTexFormat: GLFormat, outWidth: number, outHeight: number): boolean
    getTextureFormat(): GLFormat
    getTextureHeight(): number
    getTextureId(): number
    getTextureTarget(): GLTextureTarget
    getTextureWidth(): number
    init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, target: GLTextureTarget, texFormat: GLFormat, params: Gst.AllocationParams | null, info: GstVideo.VideoInfo, plane: number, valign?: GstVideo.VideoAlignment | null, userData?: object | null, notify?: GLib.DestroyNotify | null): void
    readPixels(writePointer?: object | null): boolean
    texsubimage(readPointer?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static initOnce(): void
}
abstract class GLMemoryAllocatorClass {
    /* Fields of GstGL-1.0.GstGL.GLMemoryAllocatorClass */
    readonly map: GLBaseMemoryAllocatorMapFunction
    readonly copy: GLBaseMemoryAllocatorCopyFunction
    readonly unmap: GLBaseMemoryAllocatorUnmapFunction
    static name: string
}
class GLMemoryPBO {
    /* Methods of GstGL-1.0.GstGL.GLMemoryPBO */
    copyIntoTexture(texId: number, target: GLTextureTarget, texFormat: GLFormat, width: number, height: number, stride: number, respecify: boolean): boolean
    downloadTransfer(): void
    uploadTransfer(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static initOnce(): void
}
abstract class GLMemoryPBOAllocatorClass {
    /* Fields of GstGL-1.0.GstGL.GLMemoryPBOAllocatorClass */
    readonly parentClass: GLMemoryAllocatorClass
    static name: string
}
abstract class GLOverlayCompositorClass {
    /* Fields of GstGL-1.0.GstGL.GLOverlayCompositorClass */
    readonly objectClass: Gst.ObjectClass
    static name: string
}
class GLQuery {
    /* Methods of GstGL-1.0.GstGL.GLQuery */
    counter(): void
    end(): void
    free(): void
    init(context: GLContext, queryType: GLQueryType): void
    result(): number
    start(): void
    unset(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static localGlContext(element: Gst.Element, direction: Gst.PadDirection, contextPtr: GLContext): [ /* returnType */ boolean, /* contextPtr */ GLContext ]
}
class GLRenderbuffer {
    /* Fields of GstGL-1.0.GstGL.GLRenderbuffer */
    readonly renderbufferId: number
    readonly renderbufferFormat: GLFormat
    readonly width: number
    readonly height: number
    readonly renderbufferWrapped: boolean
    /* Methods of GstGL-1.0.GstGL.GLRenderbuffer */
    getFormat(): GLFormat
    getHeight(): number
    getId(): number
    getWidth(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static initOnce(): void
}
class GLRenderbufferAllocationParams {
    /* Fields of GstGL-1.0.GstGL.GLRenderbufferAllocationParams */
    readonly renderbufferFormat: GLFormat
    readonly width: number
    readonly height: number
    static name: string
    static new(context: GLContext, allocParams: Gst.AllocationParams | null, renderbufferFormat: GLFormat, width: number, height: number): GLRenderbufferAllocationParams
    constructor(context: GLContext, allocParams: Gst.AllocationParams | null, renderbufferFormat: GLFormat, width: number, height: number)
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, allocParams: Gst.AllocationParams | null, renderbufferFormat: GLFormat, width: number, height: number): GLRenderbufferAllocationParams
    static newWrapped(context: GLContext, allocParams: Gst.AllocationParams | null, renderbufferFormat: GLFormat, width: number, height: number, glHandle?: object | null, userData?: object | null, notify?: GLib.DestroyNotify | null): GLRenderbufferAllocationParams
}
abstract class GLRenderbufferAllocatorClass {
    /* Fields of GstGL-1.0.GstGL.GLRenderbufferAllocatorClass */
    readonly parentClass: GLBaseMemoryAllocatorClass
    static name: string
}
abstract class GLSLStageClass {
    static name: string
}
class GLSLStagePrivate {
    static name: string
}
abstract class GLShaderClass {
    static name: string
}
class GLShaderPrivate {
    static name: string
}
class GLSyncMeta {
    /* Fields of GstGL-1.0.GstGL.GLSyncMeta */
    readonly parent: Gst.Meta
    readonly context: GLContext
    readonly data: object
    readonly setSync: (sync: GLSyncMeta, context: GLContext) => void
    readonly setSyncGl: (sync: GLSyncMeta, context: GLContext) => void
    readonly wait: (sync: GLSyncMeta, context: GLContext) => void
    readonly waitGl: (sync: GLSyncMeta, context: GLContext) => void
    readonly waitCpu: (sync: GLSyncMeta, context: GLContext) => void
    readonly waitCpuGl: (sync: GLSyncMeta, context: GLContext) => void
    readonly copy: (src: GLSyncMeta, sbuffer: Gst.Buffer, dest: GLSyncMeta, dbuffer: Gst.Buffer) => void
    readonly free: (sync: GLSyncMeta, context: GLContext) => void
    readonly freeGl: (sync: GLSyncMeta, context: GLContext) => void
    /* Methods of GstGL-1.0.GstGL.GLSyncMeta */
    setSyncPoint(context: GLContext): void
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
abstract class GLUploadClass {
    /* Fields of GstGL-1.0.GstGL.GLUploadClass */
    readonly objectClass: Gst.ObjectClass
    static name: string
}
class GLUploadPrivate {
    static name: string
}
class GLVideoAllocationParams {
    /* Fields of GstGL-1.0.GstGL.GLVideoAllocationParams */
    readonly parent: GLAllocationParams
    readonly vInfo: GstVideo.VideoInfo
    readonly plane: number
    readonly valign: GstVideo.VideoAlignment
    readonly target: GLTextureTarget
    readonly texFormat: GLFormat
    /* Methods of GstGL-1.0.GstGL.GLVideoAllocationParams */
    copyData(destVid: GLVideoAllocationParams): void
    freeData(): void
    static name: string
    static new(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat): GLVideoAllocationParams
    constructor(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat)
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat): GLVideoAllocationParams
    static newWrappedData(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat, wrappedData?: object | null, userData?: object | null, notify?: GLib.DestroyNotify | null): GLVideoAllocationParams
    static newWrappedGlHandle(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat, glHandle?: object | null, userData?: object | null, notify?: GLib.DestroyNotify | null): GLVideoAllocationParams
    static newWrappedTexture(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat, texId: number, userData?: object | null, notify?: GLib.DestroyNotify | null): GLVideoAllocationParams
}
abstract class GLViewConvertClass {
    static name: string
}
class GLViewConvertPrivate {
    static name: string
}
abstract class GLWindowClass {
    /* Fields of GstGL-1.0.GstGL.GLWindowClass */
    readonly parentClass: Gst.ObjectClass
    readonly getDisplay: (window: GLWindow) => number
    readonly setWindowHandle: (window: GLWindow, handle: number) => void
    readonly getWindowHandle: (window: GLWindow) => number
    readonly draw: (window: GLWindow) => void
    readonly run: (window: GLWindow) => void
    readonly quit: (window: GLWindow) => void
    readonly sendMessage: (window: GLWindow, callback: GLWindowCB) => void
    readonly sendMessageAsync: (window: GLWindow, callback: GLWindowCB) => void
    readonly open: (window: GLWindow) => boolean
    readonly close: (window: GLWindow) => void
    readonly handleEvents: (window: GLWindow, handleEvents: boolean) => void
    readonly setPreferredSize: (window: GLWindow, width: number, height: number) => void
    readonly show: (window: GLWindow) => void
    readonly setRenderRectangle: (window: GLWindow, x: number, y: number, width: number, height: number) => boolean
    readonly queueResize: (window: GLWindow) => void
    readonly controlsViewport: (window: GLWindow) => boolean
    readonly hasOutputSurface: (window: GLWindow) => boolean
    static name: string
}
class GLWindowPrivate {
    static name: string
}
}
export default GstGL;