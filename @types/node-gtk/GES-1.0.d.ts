/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GES-1.0
 */

import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstPbutils from './GstPbutils-1.0';
import type GstAudio from './GstAudio-1.0';
import type Gio from './Gio-2.0';

export namespace GES {

enum AssetLoadingReturn {
    ERROR,
    ASYNC,
    OK,
}
enum ChildrenControlMode {
    UPDATE,
    IGNORE_NOTIFIES,
    UPDATE_OFFSETS,
    UPDATE_ALL_VALUES,
    LAST,
}
enum Edge {
    EDGE_START,
    START,
    EDGE_END,
    END,
    EDGE_NONE,
    NONE,
}
enum EditMode {
    EDIT_NORMAL,
    NORMAL,
    EDIT_RIPPLE,
    RIPPLE,
    EDIT_ROLL,
    ROLL,
    EDIT_TRIM,
    TRIM,
    EDIT_SLIDE,
    SLIDE,
}
enum Error {
    ASSET_WRONG_ID,
    ASSET_LOADING,
    FORMATTER_MALFORMED_INPUT_FILE,
    INVALID_FRAME_NUMBER,
    NEGATIVE_LAYER,
    NEGATIVE_TIME,
    NOT_ENOUGH_INTERNAL_CONTENT,
    INVALID_OVERLAP_IN_TRACK,
    INVALID_EFFECT_BIN_DESCRIPTION,
}
enum TextHAlign {
    LEFT,
    CENTER,
    RIGHT,
    POSITION,
    ABSOLUTE,
}
enum TextVAlign {
    BASELINE,
    BOTTOM,
    TOP,
    POSITION,
    CENTER,
    ABSOLUTE,
}
enum VideoStandardTransitionType {
    NONE,
    BAR_WIPE_LR,
    BAR_WIPE_TB,
    BOX_WIPE_TL,
    BOX_WIPE_TR,
    BOX_WIPE_BR,
    BOX_WIPE_BL,
    FOUR_BOX_WIPE_CI,
    FOUR_BOX_WIPE_CO,
    BARNDOOR_V,
    BARNDOOR_H,
    BOX_WIPE_TC,
    BOX_WIPE_RC,
    BOX_WIPE_BC,
    BOX_WIPE_LC,
    DIAGONAL_TL,
    DIAGONAL_TR,
    BOWTIE_V,
    BOWTIE_H,
    BARNDOOR_DBL,
    BARNDOOR_DTL,
    MISC_DIAGONAL_DBD,
    MISC_DIAGONAL_DD,
    VEE_D,
    VEE_L,
    VEE_U,
    VEE_R,
    BARNVEE_D,
    BARNVEE_L,
    BARNVEE_U,
    BARNVEE_R,
    IRIS_RECT,
    CLOCK_CW12,
    CLOCK_CW3,
    CLOCK_CW6,
    CLOCK_CW9,
    PINWHEEL_TBV,
    PINWHEEL_TBH,
    PINWHEEL_FB,
    FAN_CT,
    FAN_CR,
    DOUBLEFAN_FOV,
    DOUBLEFAN_FOH,
    SINGLESWEEP_CWT,
    SINGLESWEEP_CWR,
    SINGLESWEEP_CWB,
    SINGLESWEEP_CWL,
    DOUBLESWEEP_PV,
    DOUBLESWEEP_PD,
    DOUBLESWEEP_OV,
    DOUBLESWEEP_OH,
    FAN_T,
    FAN_R,
    FAN_B,
    FAN_L,
    DOUBLEFAN_FIV,
    DOUBLEFAN_FIH,
    SINGLESWEEP_CWTL,
    SINGLESWEEP_CWBL,
    SINGLESWEEP_CWBR,
    SINGLESWEEP_CWTR,
    DOUBLESWEEP_PDTL,
    DOUBLESWEEP_PDBL,
    SALOONDOOR_T,
    SALOONDOOR_L,
    SALOONDOOR_B,
    SALOONDOOR_R,
    WINDSHIELD_R,
    WINDSHIELD_U,
    WINDSHIELD_V,
    WINDSHIELD_H,
    CROSSFADE,
}
enum VideoTestPattern {
    SMPTE,
    SNOW,
    BLACK,
    WHITE,
    RED,
    GREEN,
    BLUE,
    CHECKERS_1,
    CHECKERS_2,
    CHECKERS_4,
    CHECKERS_8,
    CIRCULAR,
    BLINK,
    SMPTE75,
    ZONE_PLATE,
    GAMUT,
    CHROMA_ZONE_PLATE,
    SOLID_COLOR,
}
enum MarkerFlags {
    NONE,
    SNAPPABLE,
}
enum MetaFlag {
    READABLE,
    WRITABLE,
    READWRITE,
}
enum PipelineFlags {
    AUDIO_PREVIEW,
    VIDEO_PREVIEW,
    FULL_PREVIEW,
    RENDER,
    SMART_RENDER,
}
enum TrackType {
    UNKNOWN,
    AUDIO,
    VIDEO,
    TEXT,
    CUSTOM,
}
const FRAME_NUMBER_NONE: number
const META_DESCRIPTION: string
const META_FORMATTER_EXTENSION: string
const META_FORMATTER_MIMETYPE: string
const META_FORMATTER_NAME: string
const META_FORMATTER_RANK: string
const META_FORMATTER_VERSION: string
const META_FORMAT_VERSION: string
const META_MARKER_COLOR: string
const META_VOLUME: string
const META_VOLUME_DEFAULT: number
const MULTI_FILE_URI_PREFIX: string
const PADDING: number
const PADDING_LARGE: number
const TIMELINE_ELEMENT_NO_LAYER_PRIORITY: number
const VERSION_MAJOR: number
const VERSION_MICRO: number
const VERSION_MINOR: number
const VERSION_NANO: number
function addMissingUriRelocationUri(uri: string, recurse: boolean): boolean
function deinit(): void
function edgeName(edge: Edge): string
function editModeName(mode: EditMode): string
function findFormatterForUri(uri: string): Asset
function init(): boolean
function initCheck(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
function isInitialized(): boolean
function listAssets(filter: GObject.Type): Asset[]
function playSinkConvertFrame(playsink: Gst.Element, caps: Gst.Caps): Gst.Sample
function pspecEqual(keySpec1?: object | null, keySpec2?: object | null): boolean
function pspecHash(keySpec?: object | null): number
function trackTypeName(type: TrackType): string
function validateRegisterActionTypes(): boolean
function version(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
interface BaseEffectTimeTranslationFunc {
    (effect: BaseEffect, time: Gst.ClockTime, timePropertyValues: GLib.HashTable): Gst.ClockTime
}
interface CreateTrackElementFunc {
    (clip: Clip, type: TrackType): TrackElement | null
}
interface CreateTrackElementsFunc {
    (clip: Clip, type: TrackType): TrackElement[]
}
interface ExtractableCheckId {
    (type: GObject.Type, id: string): string
}
interface FillTrackElementFunc {
    (clip: Clip, trackElement: TrackElement, nleobj: Gst.Element): boolean
}
interface FormatterCanLoadURIMethod {
    (dummyInstance: Formatter, uri: string): boolean
}
interface FormatterLoadFromURIMethod {
    (formatter: Formatter, timeline: Timeline, uri: string): boolean
}
interface FormatterSaveToURIMethod {
    (formatter: Formatter, timeline: Timeline, uri: string, overwrite: boolean): boolean
}
interface MetaForeachFunc {
    (container: MetaContainer, key: string, value: any): void
}
interface Extractable_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
class Extractable {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
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
    constructor (config?: Extractable_ConstructProps)
    _init (config?: Extractable_ConstructProps): void
    static $gtype: GObject.Type
}
class MetaContainer {
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    static name: string
}
interface Asset_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GES-1.0.GES.Asset */
    extractableType?: GObject.Type
    id?: string
    proxy?: Asset
}
class Asset {
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Asset_ConstructProps)
    _init (config?: Asset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static needsReload(extractableType: GObject.Type, id?: string | null): boolean
    static request(extractableType: GObject.Type, id?: string | null): Asset | null
    static requestAsync(extractableType: GObject.Type, id?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static requestFinish(res: Gio.AsyncResult): Asset
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface AudioSource_ConstructProps extends Source_ConstructProps {
}
class AudioSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioSource_ConstructProps)
    _init (config?: AudioSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface AudioTestSource_ConstructProps extends AudioSource_ConstructProps {
}
class AudioTestSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.AudioTestSource */
    getFreq(): number
    getVolume(): number
    setFreq(freq: number): void
    setVolume(volume: number): void
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioTestSource_ConstructProps)
    _init (config?: AudioTestSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface AudioTrack_ConstructProps extends Track_ConstructProps {
}
class AudioTrack {
    /* Properties of GES-1.0.GES.Track */
    readonly duration: number
    id: string
    mixing: boolean
    restrictionCaps: Gst.Caps
    /* Properties of Gst-1.0.Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Fields of GES-1.0.GES.Track */
    readonly parent: Gst.Bin
    readonly type: TrackType
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
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Track */
    addElement(object: TrackElement): boolean
    addElementFull(object: TrackElement): boolean
    commit(): boolean
    getCaps(): Gst.Caps
    getElements(): TrackElement[]
    getMixing(): boolean
    getRestrictionCaps(): Gst.Caps
    getTimeline(): Timeline | null
    removeElement(object: TrackElement): boolean
    removeElementFull(object: TrackElement): boolean
    setMixing(mixing: boolean): void
    setRestrictionCaps(caps: Gst.Caps): void
    setTimeline(timeline: Timeline): void
    updateRestrictionCaps(caps: Gst.Caps): void
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gst-1.0.Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    setProperty(name: string, value: any): void
    /* Signals of GES-1.0.GES.Track */
    connect(sigName: "commited", callback: (() => void)): number
    on(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "commited"): void
    connect(sigName: "track-element-added", callback: ((effect: TrackElement) => void)): number
    on(sigName: "track-element-added", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-added", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-added", callback: (effect: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "track-element-added", effect: TrackElement): void
    connect(sigName: "track-element-removed", callback: ((effect: TrackElement) => void)): number
    on(sigName: "track-element-removed", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-removed", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-removed", callback: (effect: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "track-element-removed", effect: TrackElement): void
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
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
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
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mixing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mixing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: AudioTrack_ConstructProps)
    _init (config?: AudioTrack_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AudioTrack
    /* Function overloads */
    static new(type: TrackType, caps: Gst.Caps): AudioTrack
    static new(name?: string | null): AudioTrack
    static $gtype: GObject.Type
}
interface AudioTransition_ConstructProps extends Transition_ConstructProps {
}
class AudioTransition {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioTransition_ConstructProps)
    _init (config?: AudioTransition_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AudioTransition
    static $gtype: GObject.Type
}
interface AudioUriSource_ConstructProps extends AudioSource_ConstructProps {
    /* Constructor properties of GES-1.0.GES.AudioUriSource */
    uri?: string
}
class AudioUriSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioUriSource_ConstructProps)
    _init (config?: AudioUriSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseEffect_ConstructProps extends Operation_ConstructProps {
}
class BaseEffect {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.BaseEffect */
    isTimeEffect(): boolean
    registerTimeProperty(childPropertyName: string): boolean
    setTimeTranslationFuncs(sourceToSinkFunc?: BaseEffectTimeTranslationFunc | null, sinkToSourceFunc?: BaseEffectTimeTranslationFunc | null): boolean
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseEffect_ConstructProps)
    _init (config?: BaseEffect_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseEffectClip_ConstructProps extends OperationClip_ConstructProps {
}
class BaseEffectClip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.Clip */
    readonly parent: Container
    /* Fields of GES-1.0.GES.Container */
    readonly children: TimelineElement[]
    readonly height: number
    readonly childrenControlMode: ChildrenControlMode
    readonly initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseEffectClip_ConstructProps)
    _init (config?: BaseEffectClip_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseTransitionClip_ConstructProps extends OperationClip_ConstructProps {
}
class BaseTransitionClip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.Clip */
    readonly parent: Container
    /* Fields of GES-1.0.GES.Container */
    readonly children: TimelineElement[]
    readonly height: number
    readonly childrenControlMode: ChildrenControlMode
    readonly initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseTransitionClip_ConstructProps)
    _init (config?: BaseTransitionClip_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseXmlFormatter_ConstructProps extends Formatter_ConstructProps {
}
class BaseXmlFormatter {
    /* Fields of GES-1.0.GES.Formatter */
    readonly parent: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Formatter */
    loadFromUri(timeline: Timeline, uri: string): boolean
    saveToUri(timeline: Timeline, uri: string, overwrite: boolean): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
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
    constructor (config?: BaseXmlFormatter_ConstructProps)
    _init (config?: BaseXmlFormatter_ConstructProps): void
    static $gtype: GObject.Type
}
interface Clip_ConstructProps extends Container_ConstructProps {
    /* Constructor properties of GES-1.0.GES.Clip */
    supportedFormats?: TrackType
}
class Clip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.Container */
    readonly parent: TimelineElement
    readonly children: TimelineElement[]
    readonly height: number
    readonly childrenControlMode: ChildrenControlMode
    readonly initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Clip_ConstructProps)
    _init (config?: Clip_ConstructProps): void
    static $gtype: GObject.Type
}
interface ClipAsset_ConstructProps extends Asset_ConstructProps {
    /* Constructor properties of GES-1.0.GES.ClipAsset */
    supportedFormats?: TrackType
}
class ClipAsset {
    /* Properties of GES-1.0.GES.ClipAsset */
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.Asset */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.ClipAsset */
    getFrameTime(frameNumber: FrameNumber): Gst.ClockTime
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getSupportedFormats(): TrackType
    setSupportedFormats(supportedformats: TrackType): void
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClipAsset_ConstructProps)
    _init (config?: ClipAsset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface CommandLineFormatter_ConstructProps extends Formatter_ConstructProps {
}
class CommandLineFormatter {
    /* Fields of GES-1.0.GES.Formatter */
    readonly parent: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Formatter */
    loadFromUri(timeline: Timeline, uri: string): boolean
    saveToUri(timeline: Timeline, uri: string, overwrite: boolean): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
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
    constructor (config?: CommandLineFormatter_ConstructProps)
    _init (config?: CommandLineFormatter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getHelp(commands: string[]): string
    static getTimelineUri(timeline: Timeline): string
    static $gtype: GObject.Type
}
interface Container_ConstructProps extends TimelineElement_ConstructProps {
}
class Container {
    /* Properties of GES-1.0.GES.Container */
    readonly height: number
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly parent: TimelineElement
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Container_ConstructProps)
    _init (config?: Container_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static group(containers?: Container[] | null): Container
    static $gtype: GObject.Type
}
interface Effect_ConstructProps extends BaseEffect_ConstructProps {
    /* Constructor properties of GES-1.0.GES.Effect */
    binDescription?: string
}
class Effect {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.BaseEffect */
    isTimeEffect(): boolean
    registerTimeProperty(childPropertyName: string): boolean
    setTimeTranslationFuncs(sourceToSinkFunc?: BaseEffectTimeTranslationFunc | null, sinkToSourceFunc?: BaseEffectTimeTranslationFunc | null): boolean
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Effect_ConstructProps)
    _init (config?: Effect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(binDescription: string): Effect
    static registerRateProperty(klass: Effect | Function | GObject.Type, elementName: string, propertyName: string): boolean
    static $gtype: GObject.Type
}
interface EffectAsset_ConstructProps extends TrackElementAsset_ConstructProps {
}
class EffectAsset {
    /* Properties of GES-1.0.GES.TrackElementAsset */
    trackType: TrackType
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.TrackElementAsset */
    readonly parent: Asset
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElementAsset */
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getTrackType(): TrackType
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EffectAsset_ConstructProps)
    _init (config?: EffectAsset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface EffectClip_ConstructProps extends BaseEffectClip_ConstructProps {
    /* Constructor properties of GES-1.0.GES.EffectClip */
    audioBinDescription?: string
    videoBinDescription?: string
}
class EffectClip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.Clip */
    readonly parent: Container
    /* Fields of GES-1.0.GES.Container */
    readonly children: TimelineElement[]
    readonly height: number
    readonly childrenControlMode: ChildrenControlMode
    readonly initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EffectClip_ConstructProps)
    _init (config?: EffectClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(videoBinDescription?: string | null, audioBinDescription?: string | null): EffectClip
    static $gtype: GObject.Type
}
interface Formatter_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
class Formatter {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Formatter */
    loadFromUri(timeline: Timeline, uri: string): boolean
    saveToUri(timeline: Timeline, uri: string, overwrite: boolean): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
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
    constructor (config?: Formatter_ConstructProps)
    _init (config?: Formatter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static canLoadUri(uri: string): boolean
    static canSaveUri(uri: string): boolean
    static getDefault(): Asset
    static registerMetas(klass: Formatter | Function | GObject.Type, name: string, description: string, extensions: string, caps: string, version: number, rank: Gst.Rank): void
    static $gtype: GObject.Type
}
interface Group_ConstructProps extends Container_ConstructProps {
    /* Constructor properties of GES-1.0.GES.Group */
    duration?: number
    inPoint?: number
    maxDuration?: number
    priority?: number
    start?: number
}
class Group {
    /* Properties of GES-1.0.GES.Group */
    duration: number
    inPoint: number
    maxDuration: number
    priority: number
    start: number
    /* Properties of GES-1.0.GES.TimelineElement */
    serialize: boolean
    /* Fields of GES-1.0.GES.Container */
    readonly parent: TimelineElement
    readonly children: TimelineElement[]
    readonly height: number
    readonly childrenControlMode: ChildrenControlMode
    readonly initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly inpoint: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Group_ConstructProps)
    _init (config?: Group_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Group
    static $gtype: GObject.Type
}
interface ImageSource_ConstructProps extends VideoSource_ConstructProps {
    /* Constructor properties of GES-1.0.GES.ImageSource */
    uri?: string
}
class ImageSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.VideoSource */
    getNaturalSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ImageSource_ConstructProps)
    _init (config?: ImageSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface Layer_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of GES-1.0.GES.Layer */
    autoTransition?: boolean
    priority?: number
}
class Layer {
    /* Properties of GES-1.0.GES.Layer */
    autoTransition: boolean
    priority: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Layer */
    addAsset(asset: Asset, start: Gst.ClockTime, inpoint: Gst.ClockTime, duration: Gst.ClockTime, trackTypes: TrackType): Clip
    addAssetFull(asset: Asset, start: Gst.ClockTime, inpoint: Gst.ClockTime, duration: Gst.ClockTime, trackTypes: TrackType): Clip
    addClip(clip: Clip): boolean
    addClipFull(clip: Clip): boolean
    getActiveForTrack(track: Track): boolean
    getAutoTransition(): boolean
    getClips(): Clip[]
    getClipsInInterval(start: Gst.ClockTime, end: Gst.ClockTime): Clip[]
    getDuration(): Gst.ClockTime
    getPriority(): number
    getTimeline(): Timeline | null
    isEmpty(): boolean
    removeClip(clip: Clip): boolean
    setActiveForTracks(active: boolean, tracks?: Track[] | null): boolean
    setAutoTransition(autoTransition: boolean): void
    setPriority(priority: number): void
    setTimeline(timeline: Timeline): void
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Layer */
    connect(sigName: "active-changed", callback: ((active: boolean, tracks: Track[]) => void)): number
    on(sigName: "active-changed", callback: (active: boolean, tracks: Track[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (active: boolean, tracks: Track[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (active: boolean, tracks: Track[]) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", active: boolean, tracks: Track[]): void
    connect(sigName: "clip-added", callback: ((clip: Clip) => void)): number
    on(sigName: "clip-added", callback: (clip: Clip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clip-added", callback: (clip: Clip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clip-added", callback: (clip: Clip) => void): NodeJS.EventEmitter
    emit(sigName: "clip-added", clip: Clip): void
    connect(sigName: "clip-removed", callback: ((clip: Clip) => void)): number
    on(sigName: "clip-removed", callback: (clip: Clip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clip-removed", callback: (clip: Clip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clip-removed", callback: (clip: Clip) => void): NodeJS.EventEmitter
    emit(sigName: "clip-removed", clip: Clip): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::auto-transition", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-transition", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Layer_ConstructProps)
    _init (config?: Layer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Layer
    static $gtype: GObject.Type
}
interface Marker_ConstructProps extends GObject.Object_ConstructProps {
}
class Marker {
    /* Properties of GES-1.0.GES.Marker */
    readonly position: number
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Marker_ConstructProps)
    _init (config?: Marker_ConstructProps): void
    static $gtype: GObject.Type
}
interface MarkerList_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GES-1.0.GES.MarkerList */
    flags?: MarkerFlags
}
class MarkerList {
    /* Properties of GES-1.0.GES.MarkerList */
    flags: MarkerFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.MarkerList */
    add(position: Gst.ClockTime): Marker
    getMarkers(): Marker[]
    move(marker: Marker, position: Gst.ClockTime): boolean
    remove(marker: Marker): boolean
    size(): number
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
    /* Signals of GES-1.0.GES.MarkerList */
    connect(sigName: "marker-added", callback: ((position: number, marker: Marker) => void)): number
    on(sigName: "marker-added", callback: (position: number, marker: Marker) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "marker-added", callback: (position: number, marker: Marker) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "marker-added", callback: (position: number, marker: Marker) => void): NodeJS.EventEmitter
    emit(sigName: "marker-added", position: number, marker: Marker): void
    connect(sigName: "marker-moved", callback: ((previousPosition: number, newPosition: number, marker: Marker) => void)): number
    on(sigName: "marker-moved", callback: (previousPosition: number, newPosition: number, marker: Marker) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "marker-moved", callback: (previousPosition: number, newPosition: number, marker: Marker) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "marker-moved", callback: (previousPosition: number, newPosition: number, marker: Marker) => void): NodeJS.EventEmitter
    emit(sigName: "marker-moved", previousPosition: number, newPosition: number, marker: Marker): void
    connect(sigName: "marker-removed", callback: ((marker: Marker) => void)): number
    on(sigName: "marker-removed", callback: (marker: Marker) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "marker-removed", callback: (marker: Marker) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "marker-removed", callback: (marker: Marker) => void): NodeJS.EventEmitter
    emit(sigName: "marker-removed", marker: Marker): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MarkerList_ConstructProps)
    _init (config?: MarkerList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MarkerList
    static $gtype: GObject.Type
}
interface MultiFileSource_ConstructProps extends VideoSource_ConstructProps {
    /* Constructor properties of GES-1.0.GES.MultiFileSource */
    uri?: string
}
class MultiFileSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.VideoSource */
    getNaturalSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MultiFileSource_ConstructProps)
    _init (config?: MultiFileSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): MultiFileSource
    static $gtype: GObject.Type
}
interface Operation_ConstructProps extends TrackElement_ConstructProps {
}
class Operation {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
interface OperationClip_ConstructProps extends Clip_ConstructProps {
}
class OperationClip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.Clip */
    readonly parent: Container
    /* Fields of GES-1.0.GES.Container */
    readonly children: TimelineElement[]
    readonly height: number
    readonly childrenControlMode: ChildrenControlMode
    readonly initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OperationClip_ConstructProps)
    _init (config?: OperationClip_ConstructProps): void
    static $gtype: GObject.Type
}
interface OverlayClip_ConstructProps extends OperationClip_ConstructProps {
}
class OverlayClip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.Clip */
    readonly parent: Container
    /* Fields of GES-1.0.GES.Container */
    readonly children: TimelineElement[]
    readonly height: number
    readonly childrenControlMode: ChildrenControlMode
    readonly initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OverlayClip_ConstructProps)
    _init (config?: OverlayClip_ConstructProps): void
    static $gtype: GObject.Type
}
interface Pipeline_ConstructProps extends Gst.Pipeline_ConstructProps {
    /* Constructor properties of GES-1.0.GES.Pipeline */
    audioFilter?: Gst.Element
    audioSink?: Gst.Element
    mode?: PipelineFlags
    timeline?: Timeline
    videoFilter?: Gst.Element
    videoSink?: Gst.Element
}
class Pipeline {
    /* Properties of GES-1.0.GES.Pipeline */
    audioFilter: Gst.Element
    audioSink: Gst.Element
    mode: PipelineFlags
    timeline: Timeline
    videoFilter: Gst.Element
    videoSink: Gst.Element
    /* Properties of Gst-1.0.Gst.Pipeline */
    autoFlushBus: boolean
    latency: number
    /* Properties of Gst-1.0.Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Fields of Gst-1.0.Gst.Pipeline */
    readonly bin: Gst.Bin
    readonly fixedClock: Gst.Clock
    readonly streamTime: Gst.ClockTime
    readonly delay: Gst.ClockTime
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
    /* Methods of GES-1.0.GES.Pipeline */
    getMode(): PipelineFlags
    getThumbnail(caps: Gst.Caps): Gst.Sample
    getThumbnailRgb24(width: number, height: number): Gst.Sample
    previewGetAudioSink(): Gst.Element
    previewGetVideoSink(): Gst.Element
    previewSetAudioSink(sink: Gst.Element): void
    previewSetVideoSink(sink: Gst.Element): void
    saveThumbnail(width: number, height: number, format: string, location: string): boolean
    setMode(mode: PipelineFlags): boolean
    setRenderSettings(outputUri: string, profile: GstPbutils.EncodingProfile): boolean
    setTimeline(timeline: Timeline): boolean
    /* Methods of Gst-1.0.Gst.Pipeline */
    autoClock(): void
    getAutoFlushBus(): boolean
    getBus(): Gst.Bus
    getDelay(): Gst.ClockTime
    getLatency(): Gst.ClockTime
    getPipelineClock(): Gst.Clock
    setAutoFlushBus(autoFlush: boolean): void
    setDelay(delay: Gst.ClockTime): void
    setLatency(latency: Gst.ClockTime): void
    useClock(clock?: Gst.Clock | null): void
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
    /* Methods of GstVideo-1.0.GstVideo.VideoOverlay */
    expose(): void
    gotWindowHandle(handle: number): void
    handleEvents(handleEvents: boolean): void
    prepareWindowHandle(): void
    setRenderRectangle(x: number, y: number, width: number, height: number): boolean
    setWindowHandle(handle: number): void
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
    connect(sigName: "notify::audio-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-sink", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-sink", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-sink", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-sink", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-flush-bus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-flush-bus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: Pipeline_ConstructProps)
    _init (config?: Pipeline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Pipeline
    /* Function overloads */
    static new(name?: string | null): Pipeline
    static new(name?: string | null): Pipeline
    static installProperties(oclass: GObject.ObjectClass, lastPropId: number): void
    static setProperty(object: GObject.Object, lastPropId: number, propertyId: number, value: any): boolean
    static $gtype: GObject.Type
}
interface PitiviFormatter_ConstructProps extends Formatter_ConstructProps {
}
class PitiviFormatter {
    /* Fields of GES-1.0.GES.Formatter */
    readonly parent: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Formatter */
    loadFromUri(timeline: Timeline, uri: string): boolean
    saveToUri(timeline: Timeline, uri: string, overwrite: boolean): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
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
    constructor (config?: PitiviFormatter_ConstructProps)
    _init (config?: PitiviFormatter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PitiviFormatter
    static $gtype: GObject.Type
}
interface Project_ConstructProps extends Asset_ConstructProps {
    /* Constructor properties of GES-1.0.GES.Project */
    uri?: string
}
class Project {
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.Asset */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Project */
    addAsset(asset: Asset): boolean
    addEncodingProfile(profile: GstPbutils.EncodingProfile): boolean
    addFormatter(formatter: Formatter): void
    createAsset(id: string | null, extractableType: GObject.Type): boolean
    createAssetSync(id: string | null, extractableType: GObject.Type): Asset | null
    getAsset(id: string, extractableType: GObject.Type): Asset | null
    getLoadingAssets(): Asset[]
    getUri(): string | null
    listAssets(filter: GObject.Type): Asset[]
    listEncodingProfiles(): GstPbutils.EncodingProfile[] | null
    load(timeline: Timeline): boolean
    removeAsset(asset: Asset): boolean
    save(timeline: Timeline, uri: string, formatterAsset: Asset | null, overwrite: boolean): boolean
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GES-1.0.GES.Project */
    connect(sigName: "asset-added", callback: ((asset: Asset) => void)): number
    on(sigName: "asset-added", callback: (asset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "asset-added", callback: (asset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "asset-added", callback: (asset: Asset) => void): NodeJS.EventEmitter
    emit(sigName: "asset-added", asset: Asset): void
    connect(sigName: "asset-loading", callback: ((asset: Asset) => void)): number
    on(sigName: "asset-loading", callback: (asset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "asset-loading", callback: (asset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "asset-loading", callback: (asset: Asset) => void): NodeJS.EventEmitter
    emit(sigName: "asset-loading", asset: Asset): void
    connect(sigName: "asset-removed", callback: ((asset: Asset) => void)): number
    on(sigName: "asset-removed", callback: (asset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "asset-removed", callback: (asset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "asset-removed", callback: (asset: Asset) => void): NodeJS.EventEmitter
    emit(sigName: "asset-removed", asset: Asset): void
    connect(sigName: "error-loading", callback: ((timeline: Timeline, error: GLib.Error) => void)): number
    on(sigName: "error-loading", callback: (timeline: Timeline, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error-loading", callback: (timeline: Timeline, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error-loading", callback: (timeline: Timeline, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error-loading", timeline: Timeline, error: GLib.Error): void
    connect(sigName: "error-loading-asset", callback: ((error: GLib.Error, id: string, extractableType: GObject.Type) => void)): number
    on(sigName: "error-loading-asset", callback: (error: GLib.Error, id: string, extractableType: GObject.Type) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error-loading-asset", callback: (error: GLib.Error, id: string, extractableType: GObject.Type) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error-loading-asset", callback: (error: GLib.Error, id: string, extractableType: GObject.Type) => void): NodeJS.EventEmitter
    emit(sigName: "error-loading-asset", error: GLib.Error, id: string, extractableType: GObject.Type): void
    connect(sigName: "loaded", callback: ((timeline: Timeline) => void)): number
    on(sigName: "loaded", callback: (timeline: Timeline) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "loaded", callback: (timeline: Timeline) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "loaded", callback: (timeline: Timeline) => void): NodeJS.EventEmitter
    emit(sigName: "loaded", timeline: Timeline): void
    connect(sigName: "loading", callback: ((timeline: Timeline) => void)): number
    on(sigName: "loading", callback: (timeline: Timeline) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "loading", callback: (timeline: Timeline) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "loading", callback: (timeline: Timeline) => void): NodeJS.EventEmitter
    emit(sigName: "loading", timeline: Timeline): void
    connect(sigName: "missing-uri", callback: ((error: GLib.Error, wrongAsset: Asset) => string | null)): number
    on(sigName: "missing-uri", callback: (error: GLib.Error, wrongAsset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "missing-uri", callback: (error: GLib.Error, wrongAsset: Asset) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "missing-uri", callback: (error: GLib.Error, wrongAsset: Asset) => void): NodeJS.EventEmitter
    emit(sigName: "missing-uri", error: GLib.Error, wrongAsset: Asset): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Project_ConstructProps)
    _init (config?: Project_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri?: string | null): Project
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Source_ConstructProps extends TrackElement_ConstructProps {
}
class Source {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Source_ConstructProps)
    _init (config?: Source_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceClip_ConstructProps extends Clip_ConstructProps {
}
class SourceClip {
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.Clip */
    readonly parent: Container
    /* Fields of GES-1.0.GES.Container */
    readonly children: TimelineElement[]
    readonly height: number
    readonly childrenControlMode: ChildrenControlMode
    readonly initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceClip_ConstructProps)
    _init (config?: SourceClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newTimeOverlay(): SourceClip
    static $gtype: GObject.Type
}
interface SourceClipAsset_ConstructProps extends ClipAsset_ConstructProps {
}
class SourceClipAsset {
    /* Properties of GES-1.0.GES.ClipAsset */
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.ClipAsset */
    readonly parent: Asset
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.ClipAsset */
    getFrameTime(frameNumber: FrameNumber): Gst.ClockTime
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getSupportedFormats(): TrackType
    setSupportedFormats(supportedformats: TrackType): void
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceClipAsset_ConstructProps)
    _init (config?: SourceClipAsset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface TestClip_ConstructProps extends SourceClip_ConstructProps {
    /* Constructor properties of GES-1.0.GES.TestClip */
    freq?: number
    mute?: boolean
    volume?: number
    vpattern?: VideoTestPattern
}
class TestClip {
    /* Properties of GES-1.0.GES.TestClip */
    freq: number
    mute: boolean
    volume: number
    vpattern: VideoTestPattern
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.SourceClip */
    readonly parent: Clip
    /* Fields of GES-1.0.GES.Container */
    readonly children: TimelineElement[]
    readonly height: number
    readonly childrenControlMode: ChildrenControlMode
    readonly initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TestClip */
    getFrequency(): number
    getVolume(): number
    getVpattern(): VideoTestPattern
    isMuted(): boolean
    setFrequency(freq: number): void
    setMute(mute: boolean): void
    setVolume(volume: number): void
    setVpattern(vpattern: VideoTestPattern): void
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::freq", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::freq", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mute", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vpattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vpattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vpattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vpattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TestClip_ConstructProps)
    _init (config?: TestClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TestClip
    static newForNick(nick: string): TestClip
    static $gtype: GObject.Type
}
interface TextOverlay_ConstructProps extends Operation_ConstructProps {
}
class TextOverlay {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TextOverlay */
    getColor(): number
    getFontDesc(): string
    getHalignment(): TextHAlign
    getText(): string
    getValignment(): TextVAlign
    getXpos(): number
    getYpos(): number
    setColor(color: number): void
    setFontDesc(fontDesc: string): void
    setHalignment(halign: TextHAlign): void
    setText(text: string): void
    setValignment(valign: TextVAlign): void
    setXpos(position: number): void
    setYpos(position: number): void
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TextOverlay_ConstructProps)
    _init (config?: TextOverlay_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextOverlay
    static $gtype: GObject.Type
}
interface TextOverlayClip_ConstructProps extends OverlayClip_ConstructProps {
    /* Constructor properties of GES-1.0.GES.TextOverlayClip */
    color?: number
    fontDesc?: string
    halignment?: TextHAlign
    text?: string
    valignment?: TextVAlign
    xpos?: number
    ypos?: number
}
class TextOverlayClip {
    /* Properties of GES-1.0.GES.TextOverlayClip */
    color: number
    fontDesc: string
    halignment: TextHAlign
    text: string
    valignment: TextVAlign
    xpos: number
    ypos: number
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.Clip */
    readonly parent: Container
    /* Fields of GES-1.0.GES.Container */
    readonly children: TimelineElement[]
    readonly height: number
    readonly childrenControlMode: ChildrenControlMode
    readonly initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TextOverlayClip */
    getColor(): number
    getFontDesc(): string
    getHalignment(): TextHAlign
    getText(): string
    getValignment(): TextVAlign
    getXpos(): number
    getYpos(): number
    setColor(color: number): void
    setFontDesc(fontDesc: string): void
    setHalign(halign: TextHAlign): void
    setText(text: string): void
    setValign(valign: TextVAlign): void
    setXpos(position: number): void
    setYpos(position: number): void
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xpos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ypos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TextOverlayClip_ConstructProps)
    _init (config?: TextOverlayClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextOverlayClip
    static $gtype: GObject.Type
}
interface Timeline_ConstructProps extends Gst.Bin_ConstructProps {
    /* Constructor properties of GES-1.0.GES.Timeline */
    autoTransition?: boolean
    snappingDistance?: number
}
class Timeline {
    /* Properties of GES-1.0.GES.Timeline */
    autoTransition: boolean
    readonly duration: number
    snappingDistance: number
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
    /* Methods of GES-1.0.GES.Timeline */
    addLayer(layer: Layer): boolean
    addTrack(track: Track): boolean
    appendLayer(): Layer
    commit(): boolean
    commitSync(): boolean
    freezeCommit(): void
    getAutoTransition(): boolean
    getDuration(): Gst.ClockTime
    getElement(name: string): TimelineElement | null
    getFrameAt(timestamp: Gst.ClockTime): FrameNumber
    getFrameTime(frameNumber: FrameNumber): Gst.ClockTime
    getGroups(): Group[]
    getLayer(priority: number): Layer | null
    getLayers(): Layer[]
    getPadForTrack(track: Track): Gst.Pad | null
    getSnappingDistance(): Gst.ClockTime
    getTrackForPad(pad: Gst.Pad): Track | null
    getTracks(): Track[]
    isEmpty(): boolean
    loadFromUri(uri: string): boolean
    moveLayer(layer: Layer, newLayerPriority: number): boolean
    pasteElement(element: TimelineElement, position: Gst.ClockTime, layerPriority: number): TimelineElement | null
    removeLayer(layer: Layer): boolean
    removeTrack(track: Track): boolean
    saveToUri(uri: string, formatterAsset: Asset | null, overwrite: boolean): boolean
    setAutoTransition(autoTransition: boolean): void
    setSnappingDistance(snappingDistance: Gst.ClockTime): void
    thawCommit(): void
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gst-1.0.Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    setProperty(name: string, value: any): void
    /* Signals of GES-1.0.GES.Timeline */
    connect(sigName: "commited", callback: (() => void)): number
    on(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "commited"): void
    connect(sigName: "group-added", callback: ((group: Group) => void)): number
    on(sigName: "group-added", callback: (group: Group) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-added", callback: (group: Group) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-added", callback: (group: Group) => void): NodeJS.EventEmitter
    emit(sigName: "group-added", group: Group): void
    connect(sigName: "group-removed", callback: ((group: Group, children: Container[]) => void)): number
    on(sigName: "group-removed", callback: (group: Group, children: Container[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-removed", callback: (group: Group, children: Container[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-removed", callback: (group: Group, children: Container[]) => void): NodeJS.EventEmitter
    emit(sigName: "group-removed", group: Group, children: Container[]): void
    connect(sigName: "layer-added", callback: ((layer: Layer) => void)): number
    on(sigName: "layer-added", callback: (layer: Layer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layer-added", callback: (layer: Layer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layer-added", callback: (layer: Layer) => void): NodeJS.EventEmitter
    emit(sigName: "layer-added", layer: Layer): void
    connect(sigName: "layer-removed", callback: ((layer: Layer) => void)): number
    on(sigName: "layer-removed", callback: (layer: Layer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layer-removed", callback: (layer: Layer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layer-removed", callback: (layer: Layer) => void): NodeJS.EventEmitter
    emit(sigName: "layer-removed", layer: Layer): void
    connect(sigName: "select-element-track", callback: ((clip: Clip, trackElement: TrackElement) => Track)): number
    on(sigName: "select-element-track", callback: (clip: Clip, trackElement: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "select-element-track", callback: (clip: Clip, trackElement: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "select-element-track", callback: (clip: Clip, trackElement: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "select-element-track", clip: Clip, trackElement: TrackElement): void
    connect(sigName: "select-tracks-for-object", callback: ((clip: Clip, trackElement: TrackElement) => Track[])): number
    on(sigName: "select-tracks-for-object", callback: (clip: Clip, trackElement: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "select-tracks-for-object", callback: (clip: Clip, trackElement: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "select-tracks-for-object", callback: (clip: Clip, trackElement: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "select-tracks-for-object", clip: Clip, trackElement: TrackElement): void
    connect(sigName: "snapping-ended", callback: ((obj1: TrackElement, obj2: TrackElement, position: number) => void)): number
    on(sigName: "snapping-ended", callback: (obj1: TrackElement, obj2: TrackElement, position: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "snapping-ended", callback: (obj1: TrackElement, obj2: TrackElement, position: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "snapping-ended", callback: (obj1: TrackElement, obj2: TrackElement, position: number) => void): NodeJS.EventEmitter
    emit(sigName: "snapping-ended", obj1: TrackElement, obj2: TrackElement, position: number): void
    connect(sigName: "snapping-started", callback: ((obj1: TrackElement, obj2: TrackElement, position: number) => void)): number
    on(sigName: "snapping-started", callback: (obj1: TrackElement, obj2: TrackElement, position: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "snapping-started", callback: (obj1: TrackElement, obj2: TrackElement, position: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "snapping-started", callback: (obj1: TrackElement, obj2: TrackElement, position: number) => void): NodeJS.EventEmitter
    emit(sigName: "snapping-started", obj1: TrackElement, obj2: TrackElement, position: number): void
    connect(sigName: "track-added", callback: ((track: Track) => void)): number
    on(sigName: "track-added", callback: (track: Track) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-added", callback: (track: Track) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-added", callback: (track: Track) => void): NodeJS.EventEmitter
    emit(sigName: "track-added", track: Track): void
    connect(sigName: "track-removed", callback: ((track: Track) => void)): number
    on(sigName: "track-removed", callback: (track: Track) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-removed", callback: (track: Track) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-removed", callback: (track: Track) => void): NodeJS.EventEmitter
    emit(sigName: "track-removed", track: Track): void
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
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
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
    connect(sigName: "notify::auto-transition", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-transition", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snapping-distance", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snapping-distance", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snapping-distance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snapping-distance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snapping-distance", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: Timeline_ConstructProps)
    _init (config?: Timeline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Timeline
    /* Function overloads */
    static new(name?: string | null): Timeline
    static newAudioVideo(): Timeline
    static newFromUri(uri: string): Timeline
    static $gtype: GObject.Type
}
interface TimelineElement_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of GES-1.0.GES.TimelineElement */
    duration?: number
    inPoint?: number
    maxDuration?: number
    name?: string
    parent?: TimelineElement
    priority?: number
    serialize?: boolean
    start?: number
    timeline?: Timeline
}
class TimelineElement {
    /* Properties of GES-1.0.GES.TimelineElement */
    duration: number
    inPoint: number
    maxDuration: number
    name: string
    parent: TimelineElement
    priority: number
    serialize: boolean
    start: number
    timeline: Timeline
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TimelineElement_ConstructProps)
    _init (config?: TimelineElement_ConstructProps): void
    static $gtype: GObject.Type
}
interface TitleClip_ConstructProps extends SourceClip_ConstructProps {
    /* Constructor properties of GES-1.0.GES.TitleClip */
    background?: number
    color?: number
    fontDesc?: string
    halignment?: TextHAlign
    text?: string
    valignment?: TextVAlign
    xpos?: number
    ypos?: number
}
class TitleClip {
    /* Properties of GES-1.0.GES.TitleClip */
    background: number
    color: number
    fontDesc: string
    halignment: TextHAlign
    text: string
    valignment: TextVAlign
    xpos: number
    ypos: number
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.SourceClip */
    readonly parent: Clip
    /* Fields of GES-1.0.GES.Container */
    readonly children: TimelineElement[]
    readonly height: number
    readonly childrenControlMode: ChildrenControlMode
    readonly initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TitleClip */
    getBackgroundColor(): number
    getFontDesc(): string
    getHalignment(): TextHAlign
    getText(): string
    getTextColor(): number
    getValignment(): TextVAlign
    getXpos(): number
    getYpos(): number
    setBackground(background: number): void
    setColor(color: number): void
    setFontDesc(fontDesc: string): void
    setHalignment(halign: TextHAlign): void
    setText(text: string): void
    setValignment(valign: TextVAlign): void
    setXpos(position: number): void
    setYpos(position: number): void
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::background", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xpos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ypos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TitleClip_ConstructProps)
    _init (config?: TitleClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TitleClip
    static $gtype: GObject.Type
}
interface TitleSource_ConstructProps extends VideoSource_ConstructProps {
}
class TitleSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TitleSource */
    getBackgroundColor(): number
    getFontDesc(): string
    getHalignment(): TextHAlign
    getText(): string
    getTextColor(): number
    getValignment(): TextVAlign
    getXpos(): number
    getYpos(): number
    setBackgroundColor(color: number): void
    setFontDesc(fontDesc: string): void
    setHalignment(halign: TextHAlign): void
    setText(text: string): void
    setTextColor(color: number): void
    setValignment(valign: TextVAlign): void
    setXpos(position: number): void
    setYpos(position: number): void
    /* Methods of GES-1.0.GES.VideoSource */
    getNaturalSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TitleSource_ConstructProps)
    _init (config?: TitleSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface Track_ConstructProps extends Gst.Bin_ConstructProps {
    /* Constructor properties of GES-1.0.GES.Track */
    caps?: Gst.Caps
    id?: string
    mixing?: boolean
    restrictionCaps?: Gst.Caps
    trackType?: TrackType
}
class Track {
    /* Properties of GES-1.0.GES.Track */
    readonly duration: number
    id: string
    mixing: boolean
    restrictionCaps: Gst.Caps
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
    /* Methods of GES-1.0.GES.Track */
    addElement(object: TrackElement): boolean
    addElementFull(object: TrackElement): boolean
    commit(): boolean
    getCaps(): Gst.Caps
    getElements(): TrackElement[]
    getMixing(): boolean
    getRestrictionCaps(): Gst.Caps
    getTimeline(): Timeline | null
    removeElement(object: TrackElement): boolean
    removeElementFull(object: TrackElement): boolean
    setMixing(mixing: boolean): void
    setRestrictionCaps(caps: Gst.Caps): void
    setTimeline(timeline: Timeline): void
    updateRestrictionCaps(caps: Gst.Caps): void
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gst-1.0.Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    setProperty(name: string, value: any): void
    /* Signals of GES-1.0.GES.Track */
    connect(sigName: "commited", callback: (() => void)): number
    on(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "commited"): void
    connect(sigName: "track-element-added", callback: ((effect: TrackElement) => void)): number
    on(sigName: "track-element-added", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-added", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-added", callback: (effect: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "track-element-added", effect: TrackElement): void
    connect(sigName: "track-element-removed", callback: ((effect: TrackElement) => void)): number
    on(sigName: "track-element-removed", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-removed", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-removed", callback: (effect: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "track-element-removed", effect: TrackElement): void
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
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
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
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mixing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mixing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: Track_ConstructProps)
    _init (config?: Track_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: TrackType, caps: Gst.Caps): Track
    /* Function overloads */
    static new(name?: string | null): Track
    static $gtype: GObject.Type
}
interface TrackElement_ConstructProps extends TimelineElement_ConstructProps {
    /* Constructor properties of GES-1.0.GES.TrackElement */
    active?: boolean
    autoClampControlSources?: boolean
    hasInternalSource?: boolean
    trackType?: TrackType
}
class TrackElement {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly parent: TimelineElement
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TrackElement_ConstructProps)
    _init (config?: TrackElement_ConstructProps): void
    static $gtype: GObject.Type
}
interface TrackElementAsset_ConstructProps extends Asset_ConstructProps {
    /* Constructor properties of GES-1.0.GES.TrackElementAsset */
    trackType?: TrackType
}
class TrackElementAsset {
    /* Properties of GES-1.0.GES.TrackElementAsset */
    trackType: TrackType
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.Asset */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElementAsset */
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getTrackType(): TrackType
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TrackElementAsset_ConstructProps)
    _init (config?: TrackElementAsset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Transition_ConstructProps extends Operation_ConstructProps {
}
class Transition {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Transition_ConstructProps)
    _init (config?: Transition_ConstructProps): void
    static $gtype: GObject.Type
}
interface TransitionClip_ConstructProps extends BaseTransitionClip_ConstructProps {
    /* Constructor properties of GES-1.0.GES.TransitionClip */
    vtype?: VideoStandardTransitionType
}
class TransitionClip {
    /* Properties of GES-1.0.GES.TransitionClip */
    vtype: VideoStandardTransitionType
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.Clip */
    readonly parent: Container
    /* Fields of GES-1.0.GES.Container */
    readonly children: TimelineElement[]
    readonly height: number
    readonly childrenControlMode: ChildrenControlMode
    readonly initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::vtype", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vtype", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TransitionClip_ConstructProps)
    _init (config?: TransitionClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(vtype: VideoStandardTransitionType): TransitionClip
    static newForNick(nick: string): TransitionClip
    static $gtype: GObject.Type
}
interface UriClip_ConstructProps extends SourceClip_ConstructProps {
    /* Constructor properties of GES-1.0.GES.UriClip */
    isImage?: boolean
    mute?: boolean
    supportedFormats?: TrackType
    uri?: string
}
class UriClip {
    /* Properties of GES-1.0.GES.UriClip */
    isImage: boolean
    mute: boolean
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Clip */
    readonly durationLimit: number
    readonly layer: Layer
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.SourceClip */
    readonly parent: Clip
    /* Fields of GES-1.0.GES.Container */
    readonly children: TimelineElement[]
    readonly height: number
    readonly childrenControlMode: ChildrenControlMode
    readonly initiatedMove: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.UriClip */
    getUri(): string
    isMuted(): boolean
    setIsImage(isImage: boolean): void
    setMute(mute: boolean): void
    /* Methods of GES-1.0.GES.Clip */
    addAsset(asset: Asset): TrackElement | null
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    addTopEffect(effect: BaseEffect, index: number): boolean
    findTrackElement(track: Track | null, type: GObject.Type): TrackElement | null
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.Type): TrackElement[]
    getDurationLimit(): Gst.ClockTime
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    getLayer(): Layer | null
    getSupportedFormats(): TrackType
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    getTopEffects(): TrackElement[]
    moveToLayer(layer: Layer): boolean
    moveToLayerFull(layer: Layer): boolean
    removeTopEffect(effect: BaseEffect): boolean
    setSupportedFormats(supportedformats: TrackType): void
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    split(position: number): Clip | null
    splitFull(position: number): Clip | null
    /* Methods of GES-1.0.GES.Container */
    add(child: TimelineElement): boolean
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildren(recursive: boolean): TimelineElement[]
    remove(child: TimelineElement): boolean
    ungroup(recursive: boolean): Container[]
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.Container */
    connect(sigName: "child-added", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", element: TimelineElement): void
    connect(sigName: "child-removed", callback: ((element: TimelineElement) => void)): number
    on(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (element: TimelineElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (element: TimelineElement) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", element: TimelineElement): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::is-image", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-image", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mute", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UriClip_ConstructProps)
    _init (config?: UriClip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): UriClip
    static $gtype: GObject.Type
}
interface UriClipAsset_ConstructProps extends SourceClipAsset_ConstructProps {
    /* Constructor properties of GES-1.0.GES.UriClipAsset */
    duration?: number
}
class UriClipAsset {
    /* Properties of GES-1.0.GES.UriClipAsset */
    duration: number
    readonly isNestedTimeline: boolean
    /* Properties of GES-1.0.GES.ClipAsset */
    supportedFormats: TrackType
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.SourceClipAsset */
    readonly parentInstance: ClipAsset
    /* Fields of GES-1.0.GES.ClipAsset */
    readonly parent: Asset
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.UriClipAsset */
    getDuration(): Gst.ClockTime
    getInfo(): GstPbutils.DiscovererInfo
    getMaxDuration(): Gst.ClockTime
    getStreamAssets(): UriSourceAsset[]
    isImage(): boolean
    /* Methods of GES-1.0.GES.ClipAsset */
    getFrameTime(frameNumber: FrameNumber): Gst.ClockTime
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getSupportedFormats(): TrackType
    setSupportedFormats(supportedformats: TrackType): void
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-nested-timeline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-nested-timeline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-nested-timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-nested-timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-nested-timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UriClipAsset_ConstructProps)
    _init (config?: UriClipAsset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static finish(res: Gio.AsyncResult): UriClipAsset
    static requestSync(uri: string): UriClipAsset
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static setTimeout(klass: UriClipAsset | Function | GObject.Type, timeout: Gst.ClockTime): void
    static $gtype: GObject.Type
}
interface UriSourceAsset_ConstructProps extends TrackElementAsset_ConstructProps {
}
class UriSourceAsset {
    /* Properties of GES-1.0.GES.TrackElementAsset */
    trackType: TrackType
    /* Properties of GES-1.0.GES.Asset */
    proxy: Asset
    readonly proxyTarget: Asset
    /* Fields of GES-1.0.GES.TrackElementAsset */
    readonly parent: Asset
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.UriSourceAsset */
    getFilesourceAsset(): UriClipAsset
    getStreamInfo(): GstPbutils.DiscovererStreamInfo
    getStreamUri(): string
    isImage(): boolean
    /* Methods of GES-1.0.GES.TrackElementAsset */
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getTrackType(): TrackType
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.Asset */
    extract(): Extractable
    getError(): GLib.Error | null
    getExtractableType(): GObject.Type
    getId(): string
    getProxy(): Asset | null
    getProxyTarget(): Asset | null
    listProxies(): Asset[]
    setProxy(proxy?: Asset | null): boolean
    unproxy(proxy: Asset): boolean
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UriSourceAsset_ConstructProps)
    _init (config?: UriSourceAsset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface VideoSource_ConstructProps extends Source_ConstructProps {
}
class VideoSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.VideoSource */
    getNaturalSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoSource_ConstructProps)
    _init (config?: VideoSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoTestSource_ConstructProps extends VideoSource_ConstructProps {
}
class VideoTestSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.VideoTestSource */
    getPattern(): VideoTestPattern
    setPattern(pattern: VideoTestPattern): void
    /* Methods of GES-1.0.GES.VideoSource */
    getNaturalSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoTestSource_ConstructProps)
    _init (config?: VideoTestSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoTrack_ConstructProps extends Track_ConstructProps {
}
class VideoTrack {
    /* Properties of GES-1.0.GES.Track */
    readonly duration: number
    id: string
    mixing: boolean
    restrictionCaps: Gst.Caps
    /* Properties of Gst-1.0.Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Fields of GES-1.0.GES.Track */
    readonly parent: Gst.Bin
    readonly type: TrackType
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
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Track */
    addElement(object: TrackElement): boolean
    addElementFull(object: TrackElement): boolean
    commit(): boolean
    getCaps(): Gst.Caps
    getElements(): TrackElement[]
    getMixing(): boolean
    getRestrictionCaps(): Gst.Caps
    getTimeline(): Timeline | null
    removeElement(object: TrackElement): boolean
    removeElementFull(object: TrackElement): boolean
    setMixing(mixing: boolean): void
    setRestrictionCaps(caps: Gst.Caps): void
    setTimeline(timeline: Timeline): void
    updateRestrictionCaps(caps: Gst.Caps): void
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
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Methods of Gst-1.0.Gst.ChildProxy */
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    setProperty(name: string, value: any): void
    /* Signals of GES-1.0.GES.Track */
    connect(sigName: "commited", callback: (() => void)): number
    on(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "commited"): void
    connect(sigName: "track-element-added", callback: ((effect: TrackElement) => void)): number
    on(sigName: "track-element-added", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-added", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-added", callback: (effect: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "track-element-added", effect: TrackElement): void
    connect(sigName: "track-element-removed", callback: ((effect: TrackElement) => void)): number
    on(sigName: "track-element-removed", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-removed", callback: (effect: TrackElement) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-removed", callback: (effect: TrackElement) => void): NodeJS.EventEmitter
    emit(sigName: "track-element-removed", effect: TrackElement): void
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
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
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
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mixing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mixing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: VideoTrack_ConstructProps)
    _init (config?: VideoTrack_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoTrack
    /* Function overloads */
    static new(type: TrackType, caps: Gst.Caps): VideoTrack
    static new(name?: string | null): VideoTrack
    static $gtype: GObject.Type
}
interface VideoTransition_ConstructProps extends Transition_ConstructProps {
    /* Constructor properties of GES-1.0.GES.VideoTransition */
    border?: number
    invert?: boolean
    transitionType?: VideoStandardTransitionType
}
class VideoTransition {
    /* Properties of GES-1.0.GES.VideoTransition */
    border: number
    invert: boolean
    transitionType: VideoStandardTransitionType
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.VideoTransition */
    getBorder(): number
    getTransitionType(): VideoStandardTransitionType
    isInverted(): boolean
    setBorder(value: number): void
    setInverted(inverted: boolean): void
    setTransitionType(type: VideoStandardTransitionType): boolean
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::border", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::invert", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invert", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::invert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::invert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::invert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transition-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transition-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transition-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transition-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoTransition_ConstructProps)
    _init (config?: VideoTransition_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoTransition
    static $gtype: GObject.Type
}
interface VideoUriSource_ConstructProps extends VideoSource_ConstructProps {
    /* Constructor properties of GES-1.0.GES.VideoUriSource */
    uri?: string
}
class VideoUriSource {
    /* Properties of GES-1.0.GES.TrackElement */
    active: boolean
    autoClampControlSources: boolean
    hasInternalSource: boolean
    readonly track: Track
    trackType: TrackType
    /* Properties of GES-1.0.GES.TimelineElement */
    inPoint: number
    maxDuration: number
    serialize: boolean
    /* Fields of GES-1.0.GES.TrackElement */
    readonly parent: TimelineElement
    /* Fields of GES-1.0.GES.TimelineElement */
    readonly parentInstance: GObject.InitiallyUnowned
    readonly asset: Asset
    readonly start: Gst.ClockTime
    readonly inpoint: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly maxduration: Gst.ClockTime
    readonly priority: number
    readonly timeline: Timeline
    readonly name: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.VideoSource */
    getNaturalSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /* Methods of GES-1.0.GES.TrackElement */
    addChildrenProps(element: Gst.Element, wantedCategories?: string[] | null, blacklist?: string[] | null, whitelist?: string[] | null): void
    clampControlSource(propertyName: string): void
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean
    getAllControlBindings(): GLib.HashTable
    getAutoClampControlSources(): boolean
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getElement(): Gst.Element
    getGnlobject(): Gst.Element
    getNleobject(): Gst.Element
    getTrack(): Track | null
    getTrackType(): TrackType
    isActive(): boolean
    isCore(): boolean
    listChildrenProperties(): GObject.ParamSpec[]
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    removeControlBinding(propertyName: string): boolean
    setActive(active: boolean): boolean
    setAutoClampControlSources(autoClamp: boolean): void
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    setHasInternalSource(hasInternalSource: boolean): boolean
    setTrackType(type: TrackType): void
    /* Methods of GES-1.0.GES.TimelineElement */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    copy(deep: boolean): TimelineElement
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    getDuration(): Gst.ClockTime
    getInpoint(): Gst.ClockTime
    getLayerPriority(): number
    getMaxDuration(): Gst.ClockTime
    getName(): string
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    getParent(): TimelineElement | null
    getPriority(): number
    getStart(): Gst.ClockTime
    getTimeline(): Timeline | null
    getToplevelParent(): TimelineElement
    getTrackTypes(): TrackType
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    ripple(start: Gst.ClockTime): boolean
    rippleEnd(end: Gst.ClockTime): boolean
    rollEnd(end: Gst.ClockTime): boolean
    rollStart(start: Gst.ClockTime): boolean
    setChildProperty(propertyName: string, value: any): boolean
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    setChildPropertyFull(propertyName: string, value: any): boolean
    setDuration(duration: Gst.ClockTime): boolean
    setInpoint(inpoint: Gst.ClockTime): boolean
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    setName(name?: string | null): boolean
    setParent(parent: TimelineElement): boolean
    setPriority(priority: number): boolean
    setStart(start: Gst.ClockTime): boolean
    setTimeline(timeline: Timeline): boolean
    trim(start: Gst.ClockTime): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
    /* Methods of GES-1.0.GES.MetaContainer */
    addMetasFromString(str: string): boolean
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag | null, /* type */ GObject.Type | null ]
    foreach(func: MetaForeachFunc): void
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getMarkerList(key: string): MarkerList
    getMeta(key: string): any
    getString(metaItem: string): string
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    metasToString(): string
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.Type): boolean
    setBoolean(metaItem: string, value: boolean): boolean
    setDate(metaItem: string, value: GLib.Date): boolean
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    setDouble(metaItem: string, value: number): boolean
    setFloat(metaItem: string, value: number): boolean
    setInt(metaItem: string, value: number): boolean
    setInt64(metaItem: string, value: number): boolean
    setMarkerList(metaItem: string, list: MarkerList): boolean
    setMeta(metaItem: string, value?: any | null): boolean
    setString(metaItem: string, value: string): boolean
    setUint(metaItem: string, value: number): boolean
    setUint64(metaItem: string, value: number): boolean
    /* Signals of GES-1.0.GES.TrackElement */
    connect(sigName: "control-binding-added", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", controlBinding: Gst.ControlBinding): void
    connect(sigName: "control-binding-removed", callback: ((controlBinding: Gst.ControlBinding) => void)): number
    on(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: (controlBinding: Gst.ControlBinding) => void): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", controlBinding: Gst.ControlBinding): void
    /* Signals of GES-1.0.GES.TimelineElement */
    connect(sigName: "child-property-added", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-added", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "child-property-removed", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", propObject: GObject.Object, prop: GObject.ParamSpec): void
    connect(sigName: "deep-notify", callback: ((propObject: GObject.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: GObject.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: GObject.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GES-1.0.GES.MetaContainer */
    connect(sigName: "notify-meta", callback: ((key: string, value?: any | null) => void)): number
    on(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: (key: string, value?: any | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: (key: string, value?: any | null) => void): NodeJS.EventEmitter
    emit(sigName: "notify-meta", key: string, value?: any | null): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-clamp-control-sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-internal-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoUriSource_ConstructProps)
    _init (config?: VideoUriSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface XmlFormatter_ConstructProps extends BaseXmlFormatter_ConstructProps {
}
class XmlFormatter {
    /* Fields of GES-1.0.GES.BaseXmlFormatter */
    readonly parent: Formatter
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GES-1.0.GES.Formatter */
    loadFromUri(timeline: Timeline, uri: string): boolean
    saveToUri(timeline: Timeline, uri: string, overwrite: boolean): boolean
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
    /* Methods of GES-1.0.GES.Extractable */
    getAsset(): Asset | null
    getId(): string
    setAsset(asset: Asset): boolean
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
    constructor (config?: XmlFormatter_ConstructProps)
    _init (config?: XmlFormatter_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AssetClass {
    /* Fields of GES-1.0.GES.AssetClass */
    readonly parent: GObject.ObjectClass
    readonly startLoading: (self: Asset) => AssetLoadingReturn
    readonly extract: (self: Asset) => Extractable
    readonly informProxy: (self: Asset, proxyId: string) => void
    readonly proxied: (self: Asset, proxy: Asset) => void
    readonly requestIdUpdate: (self: Asset, proposedNewId: string, error: GLib.Error) => boolean
    readonly gesReserved: object[]
    static name: string
}
class AssetPrivate {
    static name: string
}
abstract class AudioSourceClass {
    static name: string
}
class AudioSourcePrivate {
    static name: string
}
abstract class AudioTestSourceClass {
    static name: string
}
class AudioTestSourcePrivate {
    static name: string
}
abstract class AudioTrackClass {
    /* Fields of GES-1.0.GES.AudioTrackClass */
    readonly parentClass: TrackClass
    readonly gesReserved: object[]
    static name: string
}
class AudioTrackPrivate {
    static name: string
}
abstract class AudioTransitionClass {
    /* Fields of GES-1.0.GES.AudioTransitionClass */
    readonly parentClass: TransitionClass
    readonly gesReserved: object[]
    static name: string
}
class AudioTransitionPrivate {
    static name: string
}
abstract class AudioUriSourceClass {
    static name: string
}
class AudioUriSourcePrivate {
    static name: string
}
abstract class BaseEffectClass {
    static name: string
}
abstract class BaseEffectClipClass {
    static name: string
}
class BaseEffectClipPrivate {
    static name: string
}
class BaseEffectPrivate {
    static name: string
}
abstract class BaseTransitionClipClass {
    static name: string
}
class BaseTransitionClipPrivate {
    static name: string
}
abstract class BaseXmlFormatterClass {
    /* Fields of GES-1.0.GES.BaseXmlFormatterClass */
    readonly parent: FormatterClass
    readonly contentParser: GLib.MarkupParser
    readonly save: (formatter: Formatter, timeline: Timeline) => GLib.String
    readonly gesReserved: object[]
    static name: string
}
class BaseXmlFormatterPrivate {
    static name: string
}
abstract class ClipAssetClass {
    /* Fields of GES-1.0.GES.ClipAssetClass */
    readonly parent: AssetClass
    readonly getNaturalFramerate: (self: ClipAsset) => [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    readonly gesReserved: object[]
    static name: string
}
class ClipAssetPrivate {
    static name: string
}
abstract class ClipClass {
    /* Fields of GES-1.0.GES.ClipClass */
    readonly createTrackElement: CreateTrackElementFunc
    readonly createTrackElements: CreateTrackElementsFunc
    static name: string
}
class ClipPrivate {
    static name: string
}
abstract class CommandLineFormatterClass {
    /* Fields of GES-1.0.GES.CommandLineFormatterClass */
    readonly parentClass: FormatterClass
    static name: string
}
class CommandLineFormatterPrivate {
    static name: string
}
abstract class ContainerClass {
    /* Fields of GES-1.0.GES.ContainerClass */
    readonly childAdded: (container: Container, element: TimelineElement) => void
    readonly childRemoved: (container: Container, element: TimelineElement) => void
    readonly addChild: (container: Container, element: TimelineElement) => boolean
    readonly removeChild: (container: Container, element: TimelineElement) => boolean
    readonly ungroup: (container: Container, recursive: boolean) => Container[]
    readonly edit: (container: Container, layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number) => boolean
    static name: string
}
class ContainerPrivate {
    static name: string
}
abstract class EffectAssetClass {
    /* Fields of GES-1.0.GES.EffectAssetClass */
    readonly parentClass: TrackElementAssetClass
    readonly gesReserved: object[]
    static name: string
}
class EffectAssetPrivate {
    static name: string
}
abstract class EffectClass {
    /* Methods of GES-1.0.GES.EffectClass */
    static registerRateProperty(klass: Effect | Function | GObject.Type, elementName: string, propertyName: string): boolean
    static name: string
}
abstract class EffectClipClass {
    static name: string
}
class EffectClipPrivate {
    static name: string
}
class EffectPrivate {
    static name: string
}
abstract class ExtractableInterface {
    /* Fields of GES-1.0.GES.ExtractableInterface */
    readonly parent: GObject.TypeInterface
    readonly assetType: GObject.Type
    readonly checkId: ExtractableCheckId
    readonly canUpdateAsset: boolean
    readonly setAsset: (self: Extractable, asset: Asset) => void
    readonly setAssetFull: (self: Extractable, asset: Asset) => boolean
    readonly getId: (self: Extractable) => string
    readonly getRealExtractableType: (wantedType: GObject.Type, id: string) => GObject.Type
    readonly registerMetas: (self: ExtractableInterface, klass: GObject.ObjectClass, asset: Asset) => boolean
    readonly gesReserved: object[]
    static name: string
}
abstract class FormatterClass {
    /* Fields of GES-1.0.GES.FormatterClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    readonly canLoadUri: FormatterCanLoadURIMethod
    readonly loadFromUri: FormatterLoadFromURIMethod
    readonly saveToUri: FormatterSaveToURIMethod
    /* Methods of GES-1.0.GES.FormatterClass */
    static registerMetas(klass: Formatter | Function | GObject.Type, name: string, description: string, extensions: string, caps: string, version: number, rank: Gst.Rank): void
    static name: string
}
class FormatterPrivate {
    static name: string
}
abstract class GroupClass {
    /* Fields of GES-1.0.GES.GroupClass */
    readonly parentClass: ContainerClass
    readonly gesReserved: object[]
    static name: string
}
class GroupPrivate {
    static name: string
}
abstract class ImageSourceClass {
    /* Fields of GES-1.0.GES.ImageSourceClass */
    readonly parentClass: VideoSourceClass
    readonly gesReserved: object[]
    static name: string
}
class ImageSourcePrivate {
    static name: string
}
abstract class LayerClass {
    /* Fields of GES-1.0.GES.LayerClass */
    readonly objectAdded: (layer: Layer, object: Clip) => void
    readonly objectRemoved: (layer: Layer, object: Clip) => void
    static name: string
}
class LayerPrivate {
    static name: string
}
abstract class MarkerClass {
    /* Fields of GES-1.0.GES.MarkerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class MarkerListClass {
    /* Fields of GES-1.0.GES.MarkerListClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class MetaContainerInterface {
    /* Fields of GES-1.0.GES.MetaContainerInterface */
    readonly parentIface: GObject.TypeInterface
    readonly gesReserved: object[]
    static name: string
}
abstract class MultiFileSourceClass {
    /* Fields of GES-1.0.GES.MultiFileSourceClass */
    readonly parentClass: VideoSourceClass
    readonly gesReserved: object[]
    static name: string
}
class MultiFileSourcePrivate {
    static name: string
}
abstract class OperationClass {
    static name: string
}
abstract class OperationClipClass {
    static name: string
}
class OperationClipPrivate {
    static name: string
}
class OperationPrivate {
    static name: string
}
abstract class OverlayClipClass {
    /* Fields of GES-1.0.GES.OverlayClipClass */
    readonly parentClass: OperationClipClass
    static name: string
}
class OverlayClipPrivate {
    static name: string
}
abstract class PipelineClass {
    static name: string
}
class PipelinePrivate {
    static name: string
}
abstract class PitiviFormatterClass {
    static name: string
}
class PitiviFormatterPrivate {
    static name: string
}
abstract class ProjectClass {
    /* Fields of GES-1.0.GES.ProjectClass */
    readonly parentClass: AssetClass
    readonly assetAdded: (self: Project, asset: Asset) => void
    readonly assetLoading: (self: Project, asset: Asset) => void
    readonly assetRemoved: (self: Project, asset: Asset) => void
    readonly missingUri: (self: Project, error: GLib.Error, wrongAsset: Asset) => string
    readonly loadingError: (self: Project, error: GLib.Error, id: string, extractableType: GObject.Type) => boolean
    readonly loaded: (self: Project, timeline: Timeline) => boolean
    readonly loading: (self: Project, timeline: Timeline) => void
    readonly gesReserved: object[]
    static name: string
}
class ProjectPrivate {
    static name: string
}
abstract class SourceClass {
    /* Fields of GES-1.0.GES.SourceClass */
    readonly selectPad: (source: Source, pad: Gst.Pad) => boolean
    readonly createSource: (source: Source) => Gst.Element
    static name: string
}
abstract class SourceClipAssetClass {
    /* Fields of GES-1.0.GES.SourceClipAssetClass */
    readonly parentClass: ClipAssetClass
    static name: string
}
abstract class SourceClipClass {
    static name: string
}
class SourceClipPrivate {
    static name: string
}
class SourcePrivate {
    static name: string
}
abstract class TestClipClass {
    static name: string
}
class TestClipPrivate {
    static name: string
}
abstract class TextOverlayClass {
    /* Fields of GES-1.0.GES.TextOverlayClass */
    readonly parentClass: OperationClass
    static name: string
}
abstract class TextOverlayClipClass {
    static name: string
}
class TextOverlayClipPrivate {
    static name: string
}
class TextOverlayPrivate {
    static name: string
}
abstract class TimelineClass {
    /* Fields of GES-1.0.GES.TimelineClass */
    readonly parentClass: Gst.BinClass
    readonly trackAdded: (timeline: Timeline, track: Track) => void
    readonly trackRemoved: (timeline: Timeline, track: Track) => void
    readonly layerAdded: (timeline: Timeline, layer: Layer) => void
    readonly layerRemoved: (timeline: Timeline, layer: Layer) => void
    readonly groupAdded: (timeline: Timeline, group: Group) => void
    static name: string
}
abstract class TimelineElementClass {
    /* Fields of GES-1.0.GES.TimelineElementClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    readonly setParent: (self: TimelineElement, parent: TimelineElement) => boolean
    readonly setStart: (self: TimelineElement, start: Gst.ClockTime) => boolean
    readonly setInpoint: (self: TimelineElement, inpoint: Gst.ClockTime) => boolean
    readonly setDuration: (self: TimelineElement, duration: Gst.ClockTime) => boolean
    readonly setMaxDuration: (self: TimelineElement, maxduration: Gst.ClockTime) => boolean
    readonly setPriority: (self: TimelineElement, priority: number) => boolean
    readonly ripple: (self: TimelineElement, start: number) => boolean
    readonly rippleEnd: (self: TimelineElement, end: number) => boolean
    readonly rollStart: (self: TimelineElement, start: number) => boolean
    readonly rollEnd: (self: TimelineElement, end: number) => boolean
    readonly trim: (self: TimelineElement, start: number) => boolean
    readonly deepCopy: (self: TimelineElement, copy: TimelineElement) => void
    readonly lookupChild: (self: TimelineElement, propName: string) => [ /* returnType */ boolean, /* child */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    readonly getTrackTypes: (self: TimelineElement) => TrackType
    readonly setChildProperty: (self: TimelineElement, child: GObject.Object, pspec: GObject.ParamSpec, value: any) => void
    readonly getLayerPriority: (self: TimelineElement) => number
    readonly getNaturalFramerate: (self: TimelineElement) => [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    readonly setChildPropertyFull: (self: TimelineElement, child: GObject.Object, pspec: GObject.ParamSpec, value: any) => boolean
    readonly gesReserved: object[]
    static name: string
}
class TimelineElementPrivate {
    static name: string
}
class TimelinePrivate {
    static name: string
}
abstract class TitleClipClass {
    static name: string
}
class TitleClipPrivate {
    static name: string
}
abstract class TitleSourceClass {
    /* Fields of GES-1.0.GES.TitleSourceClass */
    readonly parentClass: VideoSourceClass
    static name: string
}
class TitleSourcePrivate {
    static name: string
}
abstract class TrackClass {
    static name: string
}
abstract class TrackElementAssetClass {
    /* Fields of GES-1.0.GES.TrackElementAssetClass */
    readonly parentClass: AssetClass
    readonly getNaturalFramerate: (self: TrackElementAsset) => [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    readonly gesReserved: object[]
    static name: string
}
class TrackElementAssetPrivate {
    static name: string
}
abstract class TrackElementClass {
    /* Fields of GES-1.0.GES.TrackElementClass */
    readonly nleobjectFactorytype: string
    readonly createGnlObject: (object: TrackElement) => Gst.Element
    readonly createElement: (object: TrackElement) => Gst.Element
    readonly activeChanged: (object: TrackElement, active: boolean) => void
    readonly changed: (object: TrackElement) => void
    readonly lookupChild: (object: TrackElement, propName: string) => [ /* returnType */ boolean, /* element */ Gst.Element | null, /* pspec */ GObject.ParamSpec | null ]
    static name: string
}
class TrackElementPrivate {
    static name: string
}
class TrackPrivate {
    static name: string
}
abstract class TransitionClass {
    static name: string
}
abstract class TransitionClipClass {
    static name: string
}
class TransitionClipPrivate {
    static name: string
}
class TransitionPrivate {
    static name: string
}
abstract class UriClipAssetClass {
    /* Fields of GES-1.0.GES.UriClipAssetClass */
    readonly parentClass: SourceClipAssetClass
    readonly discovered: (discoverer: GstPbutils.Discoverer, info: GstPbutils.DiscovererInfo, err: GLib.Error) => void
    /* Methods of GES-1.0.GES.UriClipAssetClass */
    static setTimeout(klass: UriClipAsset | Function | GObject.Type, timeout: Gst.ClockTime): void
    static name: string
}
class UriClipAssetPrivate {
    static name: string
}
abstract class UriClipClass {
    static name: string
}
class UriClipPrivate {
    static name: string
}
class UriSource {
    static name: string
}
abstract class UriSourceAssetClass {
    /* Fields of GES-1.0.GES.UriSourceAssetClass */
    readonly parentClass: TrackElementAssetClass
    readonly gesReserved: object[]
    static name: string
}
class UriSourceAssetPrivate {
    static name: string
}
abstract class VideoSourceClass {
    static name: string
}
class VideoSourcePrivate {
    static name: string
}
abstract class VideoTestSourceClass {
    /* Fields of GES-1.0.GES.VideoTestSourceClass */
    readonly parentClass: VideoSourceClass
    readonly gesReserved: object[]
    static name: string
}
class VideoTestSourcePrivate {
    static name: string
}
abstract class VideoTrackClass {
    /* Fields of GES-1.0.GES.VideoTrackClass */
    readonly parentClass: TrackClass
    readonly gesReserved: object[]
    static name: string
}
class VideoTrackPrivate {
    static name: string
}
abstract class VideoTransitionClass {
    /* Fields of GES-1.0.GES.VideoTransitionClass */
    readonly parentClass: TransitionClass
    static name: string
}
class VideoTransitionPrivate {
    static name: string
}
abstract class VideoUriSourceClass {
    static name: string
}
class VideoUriSourcePrivate {
    static name: string
}
abstract class XmlFormatterClass {
    /* Fields of GES-1.0.GES.XmlFormatterClass */
    readonly parent: BaseXmlFormatterClass
    readonly gesReserved: object[]
    static name: string
}
class XmlFormatterPrivate {
    static name: string
}
    type FrameNumber = number
}
export default GES;