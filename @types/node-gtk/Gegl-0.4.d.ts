/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gegl-0.4
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Babl from './Babl-0.1';

export namespace Gegl {

enum AbyssPolicy {
    NONE,
    CLAMP,
    LOOP,
    BLACK,
    WHITE,
}
enum BablVariant {
    FLOAT,
    LINEAR,
    NON_LINEAR,
    PERCEPTUAL,
    LINEAR_PREMULTIPLIED,
    PERCEPTUAL_PREMULTIPLIED,
    LINEAR_PREMULTIPLIED_IF_ALPHA,
    PERCEPTUAL_PREMULTIPLIED_IF_ALPHA,
    ADD_ALPHA,
}
enum CachePolicy {
    AUTO,
    NEVER,
    ALWAYS,
}
enum DistanceMetric {
    EUCLIDEAN,
    MANHATTAN,
    CHEBYSHEV,
}
enum DitherMethod {
    NONE,
    FLOYD_STEINBERG,
    BAYER,
    RANDOM,
    RANDOM_COVARIANT,
    ADD,
    ADD_COVARIANT,
    XOR,
    XOR_COVARIANT,
    BLUE_NOISE,
    BLUE_NOISE_COVARIANT,
}
enum MapFlags {
    MAP_EXCLUDE_UNMAPPED,
}
enum Orientation {
    HORIZONTAL,
    VERTICAL,
}
enum RectangleAlignment {
    SUBSET,
    SUPERSET,
    NEAREST,
}
enum ResolutionUnit {
    NONE,
    DPI,
    DPM,
}
enum SamplerType {
    NEAREST,
    LINEAR,
    CUBIC,
    NOHALO,
    LOHALO,
}
enum SplitStrategy {
    AUTO,
    HORIZONTAL,
    VERTICAL,
}
enum TileCommand {
    EGL_TILE_IDLE,
    EGL_TILE_SET,
    EGL_TILE_GET,
    EGL_TILE_IS_CACHED,
    EGL_TILE_EXIST,
    EGL_TILE_VOID,
    EGL_TILE_FLUSH,
    EGL_TILE_REFETCH,
    EGL_TILE_REINIT,
    GEGL_TILE_LAST_0_4_8_COMMAND,
    EGL_TILE_COPY,
    EGL_TILE_LAST_COMMAND,
}
enum AccessMode {
    READ,
    WRITE,
    READWRITE,
}
enum BlitFlags {
    DEFAULT,
    CACHE,
    DIRTY,
}
enum PadType {
    OUTPUT,
    INPUT,
}
enum SerializeFlag {
    TRIM_DEFAULTS,
    VERSION,
    INDENT,
    BAKE_ANIM,
}
const AUTO_ROWSTRIDE: number
const CH_BACK_CENTER: number
const CH_BACK_LEFT: number
const CH_BACK_RIGHT: number
const CH_FRONT_CENTER: number
const CH_FRONT_LEFT: number
const CH_FRONT_LEFT_OF_CENTER: number
const CH_FRONT_RIGHT: number
const CH_FRONT_RIGHT_OF_CENTER: number
const CH_LAYOUT_2POINT1: number
const CH_LAYOUT_2_1: number
const CH_LAYOUT_2_2: number
const CH_LAYOUT_3POINT1: number
const CH_LAYOUT_4POINT0: number
const CH_LAYOUT_4POINT1: number
const CH_LAYOUT_5POINT0: number
const CH_LAYOUT_5POINT0_BACK: number
const CH_LAYOUT_5POINT1: number
const CH_LAYOUT_5POINT1_BACK: number
const CH_LAYOUT_6POINT0: number
const CH_LAYOUT_6POINT0_FRONT: number
const CH_LAYOUT_6POINT1: number
const CH_LAYOUT_6POINT1_BACK: number
const CH_LAYOUT_6POINT1_FRONT: number
const CH_LAYOUT_7POINT0: number
const CH_LAYOUT_7POINT0_FRONT: number
const CH_LAYOUT_7POINT1: number
const CH_LAYOUT_7POINT1_WIDE: number
const CH_LAYOUT_7POINT1_WIDE_BACK: number
const CH_LAYOUT_HEXADECAGONAL: number
const CH_LAYOUT_HEXAGONAL: number
const CH_LAYOUT_NATIVE: number
const CH_LAYOUT_OCTAGONAL: number
const CH_LAYOUT_QUAD: number
const CH_LAYOUT_STEREO: number
const CH_LAYOUT_STEREO_DOWNMIX: number
const CH_LAYOUT_SURROUND: number
const CH_LOW_FREQUENCY: number
const CH_LOW_FREQUENCY_2: number
const CH_SIDE_LEFT: number
const CH_SIDE_RIGHT: number
const CH_STEREO_LEFT: number
const CH_STEREO_RIGHT: number
const CH_SURROUND_DIRECT_LEFT: number
const CH_SURROUND_DIRECT_RIGHT: number
const CH_TOP_BACK_CENTER: number
const CH_TOP_BACK_LEFT: number
const CH_TOP_BACK_RIGHT: number
const CH_TOP_CENTER: number
const CH_TOP_FRONT_CENTER: number
const CH_TOP_FRONT_LEFT: number
const CH_TOP_FRONT_RIGHT: number
const CH_WIDE_LEFT: number
const CH_WIDE_RIGHT: number
const FLOAT_EPSILON: number
const LOOKUP_MAX_ENTRIES: number
const MAJOR_VERSION: number
const MAX_AUDIO_CHANNELS: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const PARAM_NO_VALIDATE: number
function bablVariant(format: Babl.Object, variant: BablVariant): Babl.Object
function clDisable(): void
function clInit(): boolean
function clIsAccelerated(): boolean
function config(): Config
function createChain(ops: string, opStart: Node, opEnd: Node, time: number, relDim: number, pathRoot: string): void
function createChainArgv(ops: string, opStart: Node, opEnd: Node, time: number, relDim: number, pathRoot: string): void
function exit(): void
function format(formatName: string): any | null
function formatGetName(format: any): string | null
function getVersion(): [ /* major */ number, /* minor */ number, /* micro */ number ]
function graphDumpOutputs(node: Node): void
function graphDumpRequest(node: Node, roi: Rectangle): void
function hasOperation(operationType: string): boolean
function init(argv?: string[] | null): /* argv */ string[] | null
function isMainThread(): boolean
function listOperations(): string[]
function loadModuleDirectory(path: string): void
function parallelDistribute(maxN: number, func: ParallelDistributeFunc): void
function parallelDistributeArea(area: Rectangle, threadCost: number, splitStrategy: SplitStrategy, func: ParallelDistributeAreaFunc): void
function parallelDistributeRange(size: number, threadCost: number, func: ParallelDistributeRangeFunc): void
function paramSpecAudioFragment(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecColor(name: string, nick: string, blurb: string, defaultColor: Color, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecColorFromString(name: string, nick: string, blurb: string, defaultColorString: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecColorGetDefault(self: GObject.ParamSpec): Color
function paramSpecCurve(name: string, nick: string, blurb: string, defaultCurve: Curve, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecDouble(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, uiMinimum: number, uiMaximum: number, uiGamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecEnum(name: string, nick: string, blurb: string, enumType: GObject.Type, defaultValue: number, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecFilePath(name: string, nick: string, blurb: string, noValidate: boolean, nullOk: boolean, defaultValue: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecFormat(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecGetPropertyKey(pspec: GObject.ParamSpec, keyName: string): string
function paramSpecInt(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, uiMinimum: number, uiMaximum: number, uiGamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecPath(name: string, nick: string, blurb: string, defaultPath: Path, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecSeed(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecSetPropertyKey(pspec: GObject.ParamSpec, keyName: string, value: string): void
function paramSpecString(name: string, nick: string, blurb: string, noValidate: boolean, nullOk: boolean, defaultValue: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecUri(name: string, nick: string, blurb: string, noValidate: boolean, nullOk: boolean, defaultValue: string, flags: GObject.ParamFlags): GObject.ParamSpec
function rectangleInfinitePlane(): Rectangle
function resetStats(): void
function serialize(start: Node, end: Node, basepath: string, serializeFlags: SerializeFlag): string
function stats(): Stats
interface LookupFunction {
    (value: number, data?: object | null): number
}
interface NodeFunction {
    (node: PathItem): void
}
interface ParallelDistributeAreaFunc {
    (area: Rectangle): void
}
interface ParallelDistributeFunc {
    (i: number, n: number): void
}
interface ParallelDistributeRangeFunc {
    (offset: number, size: number): void
}
interface SamplerGetFun {
    (self: Sampler, x: number, y: number, scale: BufferMatrix2, output: object | null, repeatMode: AbyssPolicy): void
}
interface TileCallback {
    (tile: Tile): void
}
interface TileSourceCommand {
    (geglTileSource: TileSource, command: TileCommand, x: number, y: number, z: number, data?: object | null): object | null
}
class Metadata {
    /* Methods of Gegl-0.4.Gegl.Metadata */
    getResolution(unit: ResolutionUnit, x: number, y: number): boolean
    iterGetValue(iter: MetadataIter, value: any): boolean
    iterInit(iter: MetadataIter): void
    iterLookup(iter: MetadataIter, key: string): boolean
    iterNext(iter: MetadataIter): string
    iterSetValue(iter: MetadataIter, value: any): boolean
    registerMap(fileModule: string, flags: number, map: MetadataMap[]): void
    setResolution(unit: ResolutionUnit, x: number, y: number): boolean
    unregisterMap(): void
    static name: string
}
interface AudioFragment_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.AudioFragment */
    string?: string
}
class AudioFragment {
    /* Properties of Gegl-0.4.Gegl.AudioFragment */
    string: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.AudioFragment */
    getChannelLayout(): number
    getChannels(): number
    getMaxSamples(): number
    getPos(): number
    getSampleCount(): number
    getSampleRate(): number
    setChannelLayout(channelLayout: number): void
    setChannels(channels: number): void
    setMaxSamples(maxSamples: number): void
    setPos(pos: number): void
    setSampleCount(sampleCount: number): void
    setSampleRate(sampleRate: number): void
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
    connect(sigName: "notify::string", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioFragment_ConstructProps)
    _init (config?: AudioFragment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sampleRate: number, channels: number, channelLayout: number, maxSamples: number): AudioFragment
    static $gtype: GObject.Type
}
interface Buffer_ConstructProps extends TileHandler_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Buffer */
    abyssHeight?: number
    abyssWidth?: number
    abyssX?: number
    abyssY?: number
    backend?: TileBackend
    format?: object
    height?: number
    initialized?: boolean
    path?: string
    shiftX?: number
    shiftY?: number
    tileHeight?: number
    tileWidth?: number
    width?: number
    x?: number
    y?: number
}
class Buffer {
    /* Properties of Gegl-0.4.Gegl.Buffer */
    format: object
    height: number
    readonly pixels: number
    readonly pxSize: number
    width: number
    x: number
    y: number
    /* Fields of Gegl-0.4.Gegl.TileHandler */
    readonly parentInstance: TileSource
    readonly source: TileSource
    readonly priv: TileHandlerPrivate
    /* Fields of Gegl-0.4.Gegl.TileSource */
    readonly command: TileSourceCommand
    readonly padding: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Buffer */
    addHandler(handler?: object | null): void
    clear(roi: Rectangle): void
    copy(srcRect: Rectangle, repeatMode: AbyssPolicy, dst: Buffer, dstRect: Rectangle): void
    createSubBuffer(extent: Rectangle): Buffer
    dup(): Buffer
    flush(): void
    flushExt(rect: Rectangle): void
    freezeChanged(): void
    getAbyss(): Rectangle
    getExtent(): Rectangle
    get(rect: Rectangle, scale: number, formatName: string | null, repeatMode: AbyssPolicy): Uint8Array
    set(rect: Rectangle, formatName: string, src: Uint8Array): void
    linearClose(linear?: object | null): void
    removeHandler(handler?: object | null): void
    sampleCleanup(): void
    save(path: string, roi: Rectangle): void
    setAbyss(abyss: Rectangle): boolean
    setColor(rect: Rectangle, color: Color): void
    setColorFromPixel(rect: Rectangle, pixel: object | null, pixelFormat: Babl.Object): void
    setExtent(extent: Rectangle): boolean
    setPattern(rect: Rectangle, pattern: Buffer, xOffset: number, yOffset: number): void
    shareStorage(buffer2: Buffer): boolean
    signalConnect(detailedSignal: string, cHandler: GObject.Callback): number
    thawChanged(): void
    /* Methods of Gegl-0.4.Gegl.TileHandler */
    damageRect(rect: Rectangle): void
    damageTile(x: number, y: number, z: number, damage: number): void
    lock(): void
    setSource(source: TileSource): void
    unlock(): void
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
    /* Signals of Gegl-0.4.Gegl.Buffer */
    connect(sigName: "changed", callback: ((object: Rectangle) => void)): number
    on(sigName: "changed", callback: (object: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (object: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (object: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "changed", object: Rectangle): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::px-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::px-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Buffer_ConstructProps)
    _init (config?: Buffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(formatName: string, x: number, y: number, width: number, height: number): Buffer
    static newForBackend(extent: Rectangle, backend: TileBackend): Buffer
    static load(path: string): Buffer
    static open(path: string): Buffer
    static swapCreateFile(suffix?: string | null): string | null
    static swapHasFile(path: string): boolean
    static swapRemoveFile(path: string): void
    static $gtype: GObject.Type
}
interface Color_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Color */
    string?: string
}
class Color {
    /* Properties of Gegl-0.4.Gegl.Color */
    string: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Color */
    duplicate(): Color
    getComponents(format: any): number[]
    getFormat(): Babl.Object
    getRgba(): [ /* red */ number, /* green */ number, /* blue */ number, /* alpha */ number ]
    setComponents(format: any, components: number[]): void
    setRgba(red: number, green: number, blue: number, alpha: number): void
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
    connect(sigName: "notify::string", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Color_ConstructProps)
    _init (config?: Color_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(string: string): Color
    static $gtype: GObject.Type
}
interface Config_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Config */
    applicationLicense?: string
    chunkSize?: number
    mipmapRendering?: boolean
    quality?: number
    queueSize?: number
    swap?: string
    swapCompression?: string
    threads?: number
    tileCacheSize?: number
    tileHeight?: number
    tileWidth?: number
    useOpencl?: boolean
}
class Config {
    /* Properties of Gegl-0.4.Gegl.Config */
    applicationLicense: string
    chunkSize: number
    mipmapRendering: boolean
    quality: number
    queueSize: number
    swap: string
    swapCompression: string
    threads: number
    tileCacheSize: number
    tileHeight: number
    tileWidth: number
    useOpencl: boolean
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
    connect(sigName: "notify::application-license", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-license", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chunk-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mipmap-rendering", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mipmap-rendering", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mipmap-rendering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mipmap-rendering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mipmap-rendering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quality", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quality", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::queue-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::queue-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::queue-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::queue-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::queue-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-compression", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-compression", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-opencl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-opencl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    static $gtype: GObject.Type
}
interface Curve_ConstructProps extends GObject.Object_ConstructProps {
}
class Curve {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Curve */
    addPoint(x: number, y: number): number
    calcValue(x: number): number
    duplicate(): Curve
    getPoint(index: number): [ /* x */ number, /* y */ number ]
    getYBounds(): [ /* minY */ number, /* maxY */ number ]
    numPoints(): number
    setPoint(index: number, x: number, y: number): void
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
    constructor (config?: Curve_ConstructProps)
    _init (config?: Curve_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(yMin: number, yMax: number): Curve
    static newDefault(): Curve
    static $gtype: GObject.Type
}
interface MetadataHash_ConstructProps extends MetadataStore_ConstructProps {
}
class MetadataHash {
    /* Properties of Gegl-0.4.Gegl.MetadataStore */
    artist: string
    comment: string
    copyright: string
    description: string
    disclaimer: string
    readonly fileModuleName: string
    resolutionUnit: ResolutionUnit
    resolutionX: number
    resolutionY: number
    software: string
    source: string
    timestamp: GLib.DateTime
    title: string
    warning: string
    /* Fields of Gegl-0.4.Gegl.MetadataStore */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.MetadataStore */
    declare(pspec: GObject.ParamSpec): void
    getArtist(): string
    getComment(): string
    getCopyright(): string
    getDescription(): string
    getDisclaimer(): string
    getFileModuleName(): string
    getResolutionUnit(): ResolutionUnit
    getResolutionX(): number
    getResolutionY(): number
    getSoftware(): string
    getSource(): string
    getString(name: string): string
    getTimestamp(): GLib.DateTime
    getTitle(): string
    getValue(name: string, value: any): /* value */ any
    getWarning(): string
    hasValue(name: string): boolean
    notify(pspec: GObject.ParamSpec, shadow: boolean): void
    register(localName: string, name: string, transform: GObject.ValueTransform): void
    setArtist(artist: string): void
    setComment(comment: string): void
    setCopyright(copyright: string): void
    setDescription(description: string): void
    setDisclaimer(disclaimer: string): void
    setResolutionUnit(unit: ResolutionUnit): void
    setResolutionX(resolutionX: number): void
    setResolutionY(resolutionY: number): void
    setSoftware(software: string): void
    setSource(source: string): void
    setString(name: string, string: string): void
    setTimestamp(timestamp: GLib.DateTime): void
    setTitle(title: string): void
    setValue(name: string, value: any): void
    setWarning(warning: string): void
    typeofValue(name: string): GObject.Type
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
    /* Methods of Gegl-0.4.Gegl.Metadata */
    getResolution(unit: ResolutionUnit, x: number, y: number): boolean
    iterGetValue(iter: MetadataIter, value: any): boolean
    iterInit(iter: MetadataIter): void
    iterLookup(iter: MetadataIter, key: string): boolean
    iterNext(iter: MetadataIter): string
    iterSetValue(iter: MetadataIter, value: any): boolean
    registerMap(fileModule: string, flags: number, map: MetadataMap[]): void
    setResolution(unit: ResolutionUnit, x: number, y: number): boolean
    unregisterMap(): void
    /* Signals of Gegl-0.4.Gegl.MetadataStore */
    connect(sigName: "changed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "changed", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "changed", pspec: GObject.ParamSpec): void
    connect(sigName: "generate-value", callback: ((pspec: GObject.ParamSpec, value: any) => boolean)): number
    on(sigName: "generate-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "generate-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "generate-value", callback: (pspec: GObject.ParamSpec, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "generate-value", pspec: GObject.ParamSpec, value: any): void
    connect(sigName: "mapped", callback: ((fileModule: string, excludeUnmapped: boolean) => void)): number
    on(sigName: "mapped", callback: (fileModule: string, excludeUnmapped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mapped", callback: (fileModule: string, excludeUnmapped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mapped", callback: (fileModule: string, excludeUnmapped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mapped", fileModule: string, excludeUnmapped: boolean): void
    connect(sigName: "parse-value", callback: ((pspec: GObject.ParamSpec, value: any) => boolean)): number
    on(sigName: "parse-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parse-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parse-value", callback: (pspec: GObject.ParamSpec, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "parse-value", pspec: GObject.ParamSpec, value: any): void
    connect(sigName: "unmapped", callback: ((fileModule: string, localName: string) => void)): number
    on(sigName: "unmapped", callback: (fileModule: string, localName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmapped", callback: (fileModule: string, localName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmapped", callback: (fileModule: string, localName: string) => void): NodeJS.EventEmitter
    emit(sigName: "unmapped", fileModule: string, localName: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::artist", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::comment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copyright", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyright", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disclaimer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disclaimer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-module-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-module-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-unit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-unit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::software", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::software", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: MetadataHash_ConstructProps)
    _init (config?: MetadataHash_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MetadataHash
    static $gtype: GObject.Type
}
interface MetadataStore_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.MetadataStore */
    artist?: string
    comment?: string
    copyright?: string
    description?: string
    disclaimer?: string
    resolutionUnit?: ResolutionUnit
    resolutionX?: number
    resolutionY?: number
    software?: string
    source?: string
    timestamp?: GLib.DateTime
    title?: string
    warning?: string
}
class MetadataStore {
    /* Properties of Gegl-0.4.Gegl.MetadataStore */
    artist: string
    comment: string
    copyright: string
    description: string
    disclaimer: string
    readonly fileModuleName: string
    resolutionUnit: ResolutionUnit
    resolutionX: number
    resolutionY: number
    software: string
    source: string
    timestamp: GLib.DateTime
    title: string
    warning: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.MetadataStore */
    declare(pspec: GObject.ParamSpec): void
    getArtist(): string
    getComment(): string
    getCopyright(): string
    getDescription(): string
    getDisclaimer(): string
    getFileModuleName(): string
    getResolutionUnit(): ResolutionUnit
    getResolutionX(): number
    getResolutionY(): number
    getSoftware(): string
    getSource(): string
    getString(name: string): string
    getTimestamp(): GLib.DateTime
    getTitle(): string
    getValue(name: string, value: any): /* value */ any
    getWarning(): string
    hasValue(name: string): boolean
    notify(pspec: GObject.ParamSpec, shadow: boolean): void
    register(localName: string, name: string, transform: GObject.ValueTransform): void
    setArtist(artist: string): void
    setComment(comment: string): void
    setCopyright(copyright: string): void
    setDescription(description: string): void
    setDisclaimer(disclaimer: string): void
    setResolutionUnit(unit: ResolutionUnit): void
    setResolutionX(resolutionX: number): void
    setResolutionY(resolutionY: number): void
    setSoftware(software: string): void
    setSource(source: string): void
    setString(name: string, string: string): void
    setTimestamp(timestamp: GLib.DateTime): void
    setTitle(title: string): void
    setValue(name: string, value: any): void
    setWarning(warning: string): void
    typeofValue(name: string): GObject.Type
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
    /* Methods of Gegl-0.4.Gegl.Metadata */
    getResolution(unit: ResolutionUnit, x: number, y: number): boolean
    iterGetValue(iter: MetadataIter, value: any): boolean
    iterInit(iter: MetadataIter): void
    iterLookup(iter: MetadataIter, key: string): boolean
    iterNext(iter: MetadataIter): string
    iterSetValue(iter: MetadataIter, value: any): boolean
    registerMap(fileModule: string, flags: number, map: MetadataMap[]): void
    setResolution(unit: ResolutionUnit, x: number, y: number): boolean
    unregisterMap(): void
    /* Signals of Gegl-0.4.Gegl.MetadataStore */
    connect(sigName: "changed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "changed", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "changed", pspec: GObject.ParamSpec): void
    connect(sigName: "generate-value", callback: ((pspec: GObject.ParamSpec, value: any) => boolean)): number
    on(sigName: "generate-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "generate-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "generate-value", callback: (pspec: GObject.ParamSpec, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "generate-value", pspec: GObject.ParamSpec, value: any): void
    connect(sigName: "mapped", callback: ((fileModule: string, excludeUnmapped: boolean) => void)): number
    on(sigName: "mapped", callback: (fileModule: string, excludeUnmapped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mapped", callback: (fileModule: string, excludeUnmapped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mapped", callback: (fileModule: string, excludeUnmapped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mapped", fileModule: string, excludeUnmapped: boolean): void
    connect(sigName: "parse-value", callback: ((pspec: GObject.ParamSpec, value: any) => boolean)): number
    on(sigName: "parse-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parse-value", callback: (pspec: GObject.ParamSpec, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parse-value", callback: (pspec: GObject.ParamSpec, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "parse-value", pspec: GObject.ParamSpec, value: any): void
    connect(sigName: "unmapped", callback: ((fileModule: string, localName: string) => void)): number
    on(sigName: "unmapped", callback: (fileModule: string, localName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmapped", callback: (fileModule: string, localName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmapped", callback: (fileModule: string, localName: string) => void): NodeJS.EventEmitter
    emit(sigName: "unmapped", fileModule: string, localName: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::artist", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::comment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copyright", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyright", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disclaimer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disclaimer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-module-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-module-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-unit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-unit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::software", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::software", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: MetadataStore_ConstructProps)
    _init (config?: MetadataStore_ConstructProps): void
    static $gtype: GObject.Type
}
interface Node_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Node */
    cachePolicy?: CachePolicy
    dontCache?: boolean
    geglOperation?: Operation
    name?: string
    operation?: string
    passthrough?: boolean
    useOpencl?: boolean
}
class Node {
    /* Properties of Gegl-0.4.Gegl.Node */
    cachePolicy: CachePolicy
    dontCache: boolean
    geglOperation: Operation
    name: string
    operation: string
    passthrough: boolean
    useOpencl: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Node */
    addChild(child: Node): Node
    blitBuffer(buffer: Buffer | null, roi: Rectangle | null, level: number, abyssPolicy: AbyssPolicy): void
    connectFrom(inputPadName: string, source: Node, outputPadName: string): boolean
    connectTo(outputPadName: string, sink: Node, inputPadName: string): boolean
    createChild(operation: string): Node
    detect(x: number, y: number): Node
    disconnect(inputPad: string): boolean
    findProperty(propertyName: string): GObject.ParamSpec
    getChildren(): Node[]
    getConsumers(outputPad: string): [ /* returnType */ number, /* nodes */ Node[] | null, /* pads */ string[] | null ]
    getGeglOperation(): Operation | null
    getInputProxy(padName: string): Node
    getOperation(): string
    getOutputProxy(padName: string): Node
    getParent(): Node
    getPassthrough(): boolean
    getProducer(inputPadName: string, outputPadName?: string | null): Node
    hasPad(padName: string): boolean
    getBoundingBox(): Rectangle
    getProperty(propertyName: string): any
    isGraph(): boolean
    link(sink: Node): void
    listInputPads(): string[]
    listOutputPads(): string[]
    newProcessor(rectangle: Rectangle): Processor
    process(): void
    progress(progress: number, message: string): void
    removeChild(child: Node): Node
    setPassthrough(passthrough: boolean): void
    setProperty(propertyName: string, value: any): void
    setTime(time: number): void
    toXml(pathRoot: string): string
    toXmlFull(tail: Node | null, pathRoot: string): string
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
    /* Signals of Gegl-0.4.Gegl.Node */
    connect(sigName: "computed", callback: ((object: Rectangle) => void)): number
    on(sigName: "computed", callback: (object: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "computed", callback: (object: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "computed", callback: (object: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "computed", object: Rectangle): void
    connect(sigName: "invalidated", callback: ((object: Rectangle) => void)): number
    on(sigName: "invalidated", callback: (object: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidated", callback: (object: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidated", callback: (object: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "invalidated", object: Rectangle): void
    connect(sigName: "progress", callback: ((object: number) => void)): number
    on(sigName: "progress", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", object: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cache-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dont-cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dont-cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dont-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dont-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dont-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gegl-operation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gegl-operation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gegl-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gegl-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gegl-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::passthrough", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::passthrough", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-opencl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-opencl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Node_ConstructProps)
    _init (config?: Node_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Node
    static newFromFile(path: string): Node
    static newFromSerialized(chaindata: string, pathRoot: string): Node
    static newFromXml(xmldata: string, pathRoot: string): Node
    static $gtype: GObject.Type
}
interface Operation_ConstructProps extends GObject.Object_ConstructProps {
}
class Operation {
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Operation_ConstructProps)
    _init (config?: Operation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static findProperty(operationType: string, propertyName: string): GObject.ParamSpec
    static getKey(operationType: string, keyName: string): string
    static getOpVersion(opName: string): string
    static getPropertyKey(operationType: string, propertyName: string, propertyKeyName: string): string
    static listKeys(operationType: string): string[]
    static listProperties(operationType: string): GObject.ParamSpec[]
    static listPropertyKeys(operationType: string, propertyName: string): string[]
    static $gtype: GObject.Type
}
class ParamAudioFragment {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamColor {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamCurve {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamDouble {
    /* Fields of GObject-2.0.GObject.ParamSpecDouble */
    readonly parentInstance: GObject.ParamSpec
    readonly minimum: number
    readonly maximum: number
    readonly defaultValue: number
    readonly epsilon: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamEnum {
    /* Fields of GObject-2.0.GObject.ParamSpecEnum */
    readonly parentInstance: GObject.ParamSpec
    readonly enumClass: GObject.EnumClass
    readonly defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamFilePath {
    /* Fields of GObject-2.0.GObject.ParamSpecString */
    readonly parentInstance: GObject.ParamSpec
    readonly defaultValue: string
    readonly csetFirst: string
    readonly csetNth: string
    readonly substitutor: number
    readonly nullFoldIfEmpty: number
    readonly ensureNonNull: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamFormat {
    /* Fields of GObject-2.0.GObject.ParamSpecPointer */
    readonly parentInstance: GObject.ParamSpec
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamInt {
    /* Fields of GObject-2.0.GObject.ParamSpecInt */
    readonly parentInstance: GObject.ParamSpec
    readonly minimum: number
    readonly maximum: number
    readonly defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamPath {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSeed {
    /* Fields of GObject-2.0.GObject.ParamSpecUInt */
    readonly parentInstance: GObject.ParamSpec
    readonly minimum: number
    readonly maximum: number
    readonly defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamString {
    /* Fields of GObject-2.0.GObject.ParamSpecString */
    readonly parentInstance: GObject.ParamSpec
    readonly defaultValue: string
    readonly csetFirst: string
    readonly csetNth: string
    readonly substitutor: number
    readonly nullFoldIfEmpty: number
    readonly ensureNonNull: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamUri {
    /* Fields of GObject-2.0.GObject.ParamSpecString */
    readonly parentInstance: GObject.ParamSpec
    readonly defaultValue: string
    readonly csetFirst: string
    readonly csetNth: string
    readonly substitutor: number
    readonly nullFoldIfEmpty: number
    readonly ensureNonNull: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
interface Path_ConstructProps extends GObject.Object_ConstructProps {
}
class Path {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Path */
    calc(pos: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    calcYForX(x: number): [ /* returnType */ number, /* y */ number ]
    clear(): void
    closestPoint(x: number, y: number): [ /* returnType */ number, /* onPathX */ number, /* onPathY */ number, /* nodePosBefore */ number ]
    dirty(): void
    foreach(eachItem: NodeFunction): void
    foreachFlat(eachItem: NodeFunction): void
    freeze(): void
    getBounds(): [ /* minX */ number, /* maxX */ number, /* minY */ number, /* maxY */ number ]
    getLength(): number
    getMatrix(): /* matrix */ Matrix3
    getNNodes(): number
    getNode(index: number): [ /* returnType */ boolean, /* node */ PathItem ]
    insertNode(pos: number, node: PathItem): void
    isEmpty(): boolean
    parseString(instructions: string): void
    removeNode(pos: number): void
    replaceNode(pos: number, node: PathItem): void
    setMatrix(matrix: Matrix3): void
    thaw(): void
    toString(): string
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
    /* Signals of Gegl-0.4.Gegl.Path */
    connect(sigName: "changed", callback: ((object?: object | null) => void)): number
    on(sigName: "changed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "changed", object?: object | null): void
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
    constructor (config?: Path_ConstructProps)
    _init (config?: Path_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Path
    static newFromString(instructions: string): Path
    static addType(type: number, items: number, description: string): void
    static $gtype: GObject.Type
}
interface Processor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Processor */
    chunksize?: number
    node?: Node
    progress?: number
    rectangle?: object
}
class Processor {
    /* Properties of Gegl-0.4.Gegl.Processor */
    node: Node
    progress: number
    rectangle: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Processor */
    getBuffer(): Buffer
    setLevel(level: number): void
    setRectangle(rectangle: Rectangle): void
    setScale(scale: number): void
    work(): [ /* returnType */ boolean, /* progress */ number ]
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
    connect(sigName: "notify::node", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rectangle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Processor_ConstructProps)
    _init (config?: Processor_ConstructProps): void
    static $gtype: GObject.Type
}
interface Stats_ConstructProps extends GObject.Object_ConstructProps {
}
class Stats {
    /* Properties of Gegl-0.4.Gegl.Stats */
    readonly activeThreads: number
    readonly assignedThreads: number
    readonly scratchTotal: number
    readonly swapBusy: boolean
    readonly swapFileSize: number
    readonly swapQueueFull: boolean
    readonly swapQueueStalls: number
    readonly swapQueuedTotal: number
    readonly swapReadTotal: number
    readonly swapReading: boolean
    readonly swapTotal: number
    readonly swapTotalUncompressed: number
    readonly swapWriteTotal: number
    readonly swapWriting: boolean
    readonly tileAllocTotal: number
    readonly tileCacheHits: number
    readonly tileCacheMisses: number
    readonly tileCacheTotal: number
    readonly tileCacheTotalMax: number
    readonly tileCacheTotalUncompressed: number
    readonly zoomTotal: number
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
    connect(sigName: "notify::active-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::assigned-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::assigned-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::assigned-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::assigned-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::assigned-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scratch-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scratch-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scratch-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scratch-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scratch-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-queue-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-queue-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-queue-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-queue-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-queue-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-queue-stalls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-queue-stalls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-queue-stalls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-queue-stalls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-queue-stalls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-queued-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-queued-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-queued-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-queued-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-queued-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-read-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-read-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-read-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-read-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-read-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-reading", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-reading", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-reading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-reading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-reading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-total-uncompressed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-total-uncompressed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-write-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-write-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-write-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-write-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-write-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::swap-writing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-writing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::swap-writing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::swap-writing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::swap-writing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-alloc-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-alloc-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-alloc-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-alloc-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-alloc-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-hits", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-hits", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-hits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-hits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-hits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-misses", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-misses", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-misses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-misses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-misses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-total-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-total-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-total-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-total-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-cache-total-uncompressed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total-uncompressed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-cache-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zoom-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zoom-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zoom-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zoom-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Stats_ConstructProps)
    _init (config?: Stats_ConstructProps): void
    static $gtype: GObject.Type
}
interface TileBackend_ConstructProps extends TileSource_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.TileBackend */
    flushOnDestroy?: boolean
    format?: object
    tileHeight?: number
    tileWidth?: number
}
class TileBackend {
    /* Properties of Gegl-0.4.Gegl.TileBackend */
    flushOnDestroy: boolean
    readonly pxSize: number
    readonly tileSize: number
    /* Fields of Gegl-0.4.Gegl.TileSource */
    readonly parentInstance: GObject.Object
    readonly padding: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.TileBackend */
    command(command: TileCommand, x: number, y: number, z: number, data?: object | null): object | null
    getFlushOnDestroy(): boolean
    getTileHeight(): number
    getTileSize(): number
    getTileWidth(): number
    peekStorage(): TileSource
    setExtent(rectangle: Rectangle): void
    setFlushOnDestroy(flushOnDestroy: boolean): void
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
    connect(sigName: "notify::flush-on-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush-on-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flush-on-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flush-on-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flush-on-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::px-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::px-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TileBackend_ConstructProps)
    _init (config?: TileBackend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static unlinkSwap(path: string): void
    static $gtype: GObject.Type
}
interface TileHandler_ConstructProps extends TileSource_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.TileHandler */
    source?: GObject.Object
}
class TileHandler {
    /* Properties of Gegl-0.4.Gegl.TileHandler */
    source: GObject.Object
    /* Fields of Gegl-0.4.Gegl.TileSource */
    readonly parentInstance: GObject.Object
    readonly command: TileSourceCommand
    readonly padding: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.TileHandler */
    damageRect(rect: Rectangle): void
    damageTile(x: number, y: number, z: number, damage: number): void
    lock(): void
    setSource(source: TileSource): void
    unlock(): void
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
    connect(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TileHandler_ConstructProps)
    _init (config?: TileHandler_ConstructProps): void
    static $gtype: GObject.Type
}
interface TileSource_ConstructProps extends GObject.Object_ConstructProps {
}
class TileSource {
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TileSource_ConstructProps)
    _init (config?: TileSource_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AudioFragmentClass {
    /* Fields of Gegl-0.4.Gegl.AudioFragmentClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class AudioFragmentPrivate {
    static name: string
}
class BufferIterator {
    /* Fields of Gegl-0.4.Gegl.BufferIterator */
    readonly length: number
    readonly priv: BufferIteratorPriv
    readonly items: BufferIteratorItem[]
    static name: string
}
class BufferIteratorItem {
    /* Fields of Gegl-0.4.Gegl.BufferIteratorItem */
    readonly data: object
    readonly roi: Rectangle
    static name: string
}
class BufferIteratorPriv {
    static name: string
}
class BufferMatrix2 {
    /* Fields of Gegl-0.4.Gegl.BufferMatrix2 */
    readonly coeff: number[]
    /* Methods of Gegl-0.4.Gegl.BufferMatrix2 */
    determinant(): number
    isIdentity(): boolean
    isScale(): boolean
    static name: string
}
abstract class ColorClass {
    /* Fields of Gegl-0.4.Gegl.ColorClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ColorPrivate {
    static name: string
}
abstract class CurveClass {
    /* Fields of Gegl-0.4.Gegl.CurveClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class Lookup {
    /* Fields of Gegl-0.4.Gegl.Lookup */
    readonly function_: LookupFunction
    readonly data: object
    readonly shift: number
    readonly positiveMin: number
    readonly positiveMax: number
    readonly negativeMin: number
    readonly negativeMax: number
    readonly bitmask: number[]
    readonly table: number[]
    static name: string
}
class Matrix3 {
    /* Fields of Gegl-0.4.Gegl.Matrix3 */
    readonly coeff: number[]
    /* Methods of Gegl-0.4.Gegl.Matrix3 */
    copy(): Matrix3
    copyInto(src: Matrix3): void
    determinant(): number
    equal(matrix2: Matrix3): boolean
    identity(): void
    invert(): void
    isAffine(): boolean
    isIdentity(): boolean
    isScale(): boolean
    isTranslate(): boolean
    multiply(right: Matrix3, product: Matrix3): void
    originate(x: number, y: number): void
    parseString(string: string): void
    roundError(): void
    toString(): string
    transformPoint(x: number, y: number): void
    static name: string
    static new(): Matrix3
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Matrix3
}
abstract class MetadataHashClass {
    /* Fields of Gegl-0.4.Gegl.MetadataHashClass */
    readonly parentClass: MetadataStoreClass
    static name: string
}
abstract class MetadataInterface {
    /* Fields of Gegl-0.4.Gegl.MetadataInterface */
    readonly registerMap: (metadata: Metadata, fileModule: string, flags: number, map: MetadataMap[]) => void
    readonly setResolution: (metadata: Metadata, unit: ResolutionUnit, x: number, y: number) => boolean
    readonly getResolution: (metadata: Metadata, unit: ResolutionUnit, x: number, y: number) => boolean
    readonly iterLookup: (metadata: Metadata, iter: MetadataIter, key: string) => boolean
    readonly iterInit: (metadata: Metadata, iter: MetadataIter) => void
    readonly iterNext: (metadata: Metadata, iter: MetadataIter) => string
    readonly iterSetValue: (metadata: Metadata, iter: MetadataIter, value: any) => boolean
    readonly iterGetValue: (metadata: Metadata, iter: MetadataIter, value: any) => boolean
    static name: string
}
class MetadataIter {
    static name: string
}
class MetadataMap {
    /* Fields of Gegl-0.4.Gegl.MetadataMap */
    readonly localName: string
    readonly name: string
    readonly transform: GObject.ValueTransform
    static name: string
}
abstract class MetadataStoreClass {
    /* Fields of Gegl-0.4.Gegl.MetadataStoreClass */
    readonly setValue: (self: MetadataStore, name: string, value: any) => void
    readonly hasValue: (self: MetadataStore, name: string) => boolean
    readonly registerHook: (self: MetadataStore, fileModuleName: string, flags: number) => void
    static name: string
}
class OperationContext {
    static name: string
}
class ParamSpecDouble {
    /* Fields of Gegl-0.4.Gegl.ParamSpecDouble */
    readonly parentInstance: GObject.ParamSpecDouble
    readonly uiMinimum: number
    readonly uiMaximum: number
    readonly uiGamma: number
    readonly uiStepSmall: number
    readonly uiStepBig: number
    readonly uiDigits: number
    /* Methods of Gegl-0.4.Gegl.ParamSpecDouble */
    setDigits(digits: number): void
    setSteps(smallStep: number, bigStep: number): void
    static name: string
}
class ParamSpecEnum {
    /* Fields of Gegl-0.4.Gegl.ParamSpecEnum */
    readonly parentInstance: GObject.ParamSpecEnum
    readonly excludedValues: object[]
    /* Methods of Gegl-0.4.Gegl.ParamSpecEnum */
    excludeValue(value: number): void
    static name: string
}
class ParamSpecFilePath {
    /* Fields of Gegl-0.4.Gegl.ParamSpecFilePath */
    readonly parentInstance: GObject.ParamSpecString
    readonly noValidate: number
    readonly nullOk: number
    static name: string
}
class ParamSpecFormat {
    /* Fields of Gegl-0.4.Gegl.ParamSpecFormat */
    readonly parentInstance: GObject.ParamSpecPointer
    static name: string
}
class ParamSpecInt {
    /* Fields of Gegl-0.4.Gegl.ParamSpecInt */
    readonly parentInstance: GObject.ParamSpecInt
    readonly uiMinimum: number
    readonly uiMaximum: number
    readonly uiGamma: number
    readonly uiStepSmall: number
    readonly uiStepBig: number
    /* Methods of Gegl-0.4.Gegl.ParamSpecInt */
    setSteps(smallStep: number, bigStep: number): void
    static name: string
}
class ParamSpecSeed {
    /* Fields of Gegl-0.4.Gegl.ParamSpecSeed */
    readonly parentInstance: GObject.ParamSpecUInt
    readonly uiMinimum: number
    readonly uiMaximum: number
    static name: string
}
class ParamSpecString {
    /* Fields of Gegl-0.4.Gegl.ParamSpecString */
    readonly parentInstance: GObject.ParamSpecString
    readonly noValidate: number
    readonly nullOk: number
    static name: string
}
class ParamSpecUri {
    /* Fields of Gegl-0.4.Gegl.ParamSpecUri */
    readonly parentInstance: GObject.ParamSpecString
    readonly noValidate: number
    readonly nullOk: number
    static name: string
}
abstract class PathClass {
    static name: string
}
class PathItem {
    /* Fields of Gegl-0.4.Gegl.PathItem */
    readonly type: number
    readonly point: PathPoint[]
    static name: string
}
class PathList {
    /* Fields of Gegl-0.4.Gegl.PathList */
    readonly next: object
    readonly d: PathItem
    static name: string
}
class PathPoint {
    /* Fields of Gegl-0.4.Gegl.PathPoint */
    readonly x: number
    readonly y: number
    static name: string
}
class Random {
    /* Methods of Gegl-0.4.Gegl.Random */
    duplicate(): Random
    float(x: number, y: number, z: number, n: number): number
    floatRange(x: number, y: number, z: number, n: number, min: number, max: number): number
    free(): void
    int(x: number, y: number, z: number, n: number): number
    intRange(x: number, y: number, z: number, n: number, min: number, max: number): number
    setSeed(seed: number): void
    static name: string
    static new(): Random
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Random
    static newWithSeed(seed: number): Random
}
class Rectangle {
    /* Fields of Gegl-0.4.Gegl.Rectangle */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    /* Methods of Gegl-0.4.Gegl.Rectangle */
    align(rectangle: Rectangle, tile: Rectangle, alignment: RectangleAlignment): boolean
    alignToBuffer(rectangle: Rectangle, buffer: Buffer, alignment: RectangleAlignment): boolean
    boundingBox(source1: Rectangle, source2: Rectangle): void
    contains(child: Rectangle): boolean
    copy(source: Rectangle): void
    dump(): void
    dup(): Rectangle
    equal(rectangle2: Rectangle): boolean
    equalCoords(x: number, y: number, width: number, height: number): boolean
    intersect(src1: Rectangle, src2: Rectangle): boolean
    isEmpty(): boolean
    isInfinitePlane(): boolean
    set(x: number, y: number, width: number, height: number): void
    subtract(minuend: Rectangle, subtrahend: Rectangle): number
    subtractBoundingBox(minuend: Rectangle, subtrahend: Rectangle): boolean
    xor(source1: Rectangle, source2: Rectangle): number
    static name: string
    static new(x: number, y: number, width: number, height: number): Rectangle
    constructor(x: number, y: number, width: number, height: number)
    /* Static methods and pseudo-constructors */
    static new(x: number, y: number, width: number, height: number): Rectangle
    static infinitePlane(): Rectangle
}
class Sampler {
    /* Methods of Gegl-0.4.Gegl.Sampler */
    get(x: number, y: number, scale: BufferMatrix2, output: object | null, repeatMode: AbyssPolicy): void
    getContextRect(): Rectangle
    static name: string
}
class Tile {
    static name: string
}
abstract class TileBackendClass {
    /* Fields of Gegl-0.4.Gegl.TileBackendClass */
    readonly parentClass: TileSourceClass
    readonly padding: object[]
    static name: string
}
class TileBackendPrivate {
    static name: string
}
class TileCopyParams {
    /* Fields of Gegl-0.4.Gegl.TileCopyParams */
    readonly dstBuffer: Buffer
    readonly dstX: number
    readonly dstY: number
    readonly dstZ: number
    static name: string
}
abstract class TileHandlerClass {
    /* Fields of Gegl-0.4.Gegl.TileHandlerClass */
    readonly parentClass: TileSourceClass
    static name: string
}
class TileHandlerPrivate {
    static name: string
}
abstract class TileSourceClass {
    /* Fields of Gegl-0.4.Gegl.TileSourceClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
}
export default Gegl;