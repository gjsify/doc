/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GExiv2-0.10
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GExiv2 {

enum ByteOrder {
    LITTLE,
    BIG,
}
enum LogLevel {
    DEBUG,
    INFO,
    WARN,
    ERROR,
    MUTE,
}
enum Orientation {
    UNSPECIFIED,
    NORMAL,
    HFLIP,
    ROT_180,
    VFLIP,
    ROT_90_HFLIP,
    ROT_90,
    ROT_90_VFLIP,
    ROT_270,
}
enum StructureType {
    NONE,
    ALT,
    BAG,
    SEQ,
    LANG,
}
enum XmpFormatFlags {
    OMIT_PACKET_WRAPPER,
    READ_ONLY_PACKET,
    USE_COMPACT_FORMAT,
    INCLUDE_THUMBNAIL_PAD,
    EXACT_PACKET_LENGTH,
    WRITE_ALIAS_COMMENTS,
    OMIT_ALL_FORMATTING,
}
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
function getVersion(): number
function initialize(): boolean
function logGetLevel(): LogLevel
function logSetLevel(level: LogLevel): void
function logUseGlibLogging(): void
interface LogHandler {
    (level: LogLevel, msg: string): void
}
interface Metadata_ConstructProps extends GObject.Object_ConstructProps {
}
class Metadata {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GExiv2-0.10.GExiv2.Metadata */
    clear(): void
    clearComment(): void
    clearExif(): void
    clearIptc(): void
    clearTag(tag: string): boolean
    clearXmp(): void
    deleteGpsInfo(): void
    eraseExifThumbnail(): void
    free(): void
    fromApp1Segment(data: Uint8Array): boolean
    fromStream(stream: Gio.InputStream): boolean
    generateXmpPacket(xmpFormatFlags: XmpFormatFlags, padding: number): string | null
    getComment(): string | null
    getExifData(byteOrder: ByteOrder): any | null
    getExifTagRational(tag: string): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    getExifTags(): string[]
    getExifThumbnail(): [ /* returnType */ boolean, /* buffer */ Uint8Array ]
    getExposureTime(): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    getFnumber(): number
    getFocalLength(): number
    getGpsAltitude(): [ /* returnType */ boolean, /* altitude */ number ]
    getGpsInfo(): [ /* returnType */ boolean, /* longitude */ number, /* latitude */ number, /* altitude */ number ]
    getGpsLatitude(): [ /* returnType */ boolean, /* latitude */ number ]
    getGpsLongitude(): [ /* returnType */ boolean, /* longitude */ number ]
    getIptcTags(): string[]
    getIsoSpeed(): number
    getMetadataPixelHeight(): number
    getMetadataPixelWidth(): number
    getMimeType(): string
    getOrientation(): Orientation
    getPixelHeight(): number
    getPixelWidth(): number
    getPreviewImage(props: PreviewProperties): PreviewImage
    getPreviewProperties(): PreviewProperties[] | null
    getSupportsExif(): boolean
    getSupportsIptc(): boolean
    getSupportsXmp(): boolean
    getTagInterpretedString(tag: string): string | null
    getTagLong(tag: string): number
    getTagMultiple(tag: string): string[] | null
    getTagRaw(tag: string): any | null
    getTagString(tag: string): string | null
    getXmpPacket(): string | null
    getXmpTags(): string[]
    hasExif(): boolean
    hasIptc(): boolean
    hasTag(tag: string): boolean
    hasXmp(): boolean
    openBuf(data: Uint8Array): boolean
    openPath(path: string): boolean
    saveExternal(path: string): boolean
    saveFile(path: string): boolean
    setComment(comment: string): void
    setExifTagRational(tag: string, nom: number, den: number): boolean
    setExifThumbnailFromBuffer(buffer: Uint8Array): void
    setExifThumbnailFromFile(path: string): boolean
    setGpsInfo(longitude: number, latitude: number, altitude: number): boolean
    setMetadataPixelHeight(height: number): void
    setMetadataPixelWidth(width: number): void
    setOrientation(orientation: Orientation): void
    setTagLong(tag: string, value: number): boolean
    setTagMultiple(tag: string, values: string[]): boolean
    setTagString(tag: string, value: string): boolean
    setXmpTagStruct(tag: string, type: StructureType): boolean
    tryClearTag(tag: string): boolean
    tryDeleteGpsInfo(): void
    tryEraseExifThumbnail(): void
    tryGenerateXmpPacket(xmpFormatFlags: XmpFormatFlags, padding: number): string | null
    tryGetComment(): string | null
    tryGetExifTagRational(tag: string): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    tryGetExposureTime(): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    tryGetFnumber(): number
    tryGetFocalLength(): number
    tryGetGpsAltitude(): [ /* returnType */ boolean, /* altitude */ number ]
    tryGetGpsInfo(): [ /* returnType */ boolean, /* longitude */ number, /* latitude */ number, /* altitude */ number ]
    tryGetGpsLatitude(): [ /* returnType */ boolean, /* latitude */ number ]
    tryGetGpsLongitude(): [ /* returnType */ boolean, /* longitude */ number ]
    tryGetIsoSpeed(): number
    tryGetMetadataPixelHeight(): number
    tryGetMetadataPixelWidth(): number
    tryGetOrientation(): Orientation
    tryGetPreviewImage(props: PreviewProperties): PreviewImage
    tryGetTagInterpretedString(tag: string): string | null
    tryGetTagLong(tag: string): number
    tryGetTagMultiple(tag: string): string[] | null
    tryGetTagRaw(tag: string): any | null
    tryGetTagString(tag: string): string | null
    tryGetXmpPacket(): string | null
    tryHasTag(tag: string): boolean
    trySetComment(comment: string): void
    trySetExifTagRational(tag: string, nom: number, den: number): boolean
    trySetExifThumbnailFromBuffer(buffer: Uint8Array): void
    trySetGpsInfo(longitude: number, latitude: number, altitude: number): boolean
    trySetMetadataPixelHeight(height: number): void
    trySetMetadataPixelWidth(width: number): void
    trySetOrientation(orientation: Orientation): void
    trySetTagLong(tag: string, value: number): boolean
    trySetTagMultiple(tag: string, values: string[]): boolean
    trySetTagString(tag: string, value: string): boolean
    trySetXmpTagStruct(tag: string, type: StructureType): boolean
    tryTagSupportsMultipleValues(tag: string): boolean
    tryUpdateGpsInfo(longitude: number, latitude: number, altitude: number): boolean
    updateGpsInfo(longitude: number, latitude: number, altitude: number): boolean
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
    constructor (config?: Metadata_ConstructProps)
    _init (config?: Metadata_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Metadata
    static getTagDescription(tag: string): string | null
    static getTagLabel(tag: string): string | null
    static getTagType(tag: string): string | null
    static getXmpNamespaceForTag(tag: string): string
    static isExifTag(tag: string): boolean
    static isIptcTag(tag: string): boolean
    static isXmpTag(tag: string): boolean
    static registerXmpNamespace(name: string, prefix: string): boolean
    static tryGetTagDescription(tag: string): string | null
    static tryGetTagLabel(tag: string): string | null
    static tryGetTagType(tag: string): string | null
    static tryGetXmpNamespaceForTag(tag: string): string
    static tryRegisterXmpNamespace(name: string, prefix: string): boolean
    static tryUnregisterAllXmpNamespaces(): void
    static tryUnregisterXmpNamespace(name: string): boolean
    static unregisterAllXmpNamespaces(): void
    static unregisterXmpNamespace(name: string): boolean
    static $gtype: GObject.Type
}
interface PreviewImage_ConstructProps extends GObject.Object_ConstructProps {
}
class PreviewImage {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GExiv2-0.10.GExiv2.PreviewImage */
    free(): void
    getData(): Uint8Array
    getExtension(): string
    getHeight(): number
    getMimeType(): string
    getWidth(): number
    tryWriteFile(path: string): number
    writeFile(path: string): number
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
    constructor (config?: PreviewImage_ConstructProps)
    _init (config?: PreviewImage_ConstructProps): void
    static $gtype: GObject.Type
}
interface PreviewProperties_ConstructProps extends GObject.Object_ConstructProps {
}
class PreviewProperties {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GExiv2-0.10.GExiv2.PreviewProperties */
    getExtension(): string
    getHeight(): number
    getMimeType(): string
    getSize(): number
    getWidth(): number
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
    constructor (config?: PreviewProperties_ConstructProps)
    _init (config?: PreviewProperties_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class MetadataClass {
    /* Fields of GExiv2-0.10.GExiv2.MetadataClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MetadataPrivate {
    static name: string
}
abstract class PreviewImageClass {
    /* Fields of GExiv2-0.10.GExiv2.PreviewImageClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class PreviewImagePrivate {
    static name: string
}
abstract class PreviewPropertiesClass {
    /* Fields of GExiv2-0.10.GExiv2.PreviewPropertiesClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class PreviewPropertiesPrivate {
    static name: string
}
}
export default GExiv2;