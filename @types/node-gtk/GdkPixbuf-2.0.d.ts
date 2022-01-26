/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GdkPixbuf-2.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GdkPixbuf {

enum Colorspace {
    RGB,
}
enum InterpType {
    NEAREST,
    TILES,
    BILINEAR,
    HYPER,
}
enum PixbufAlphaMode {
    BILEVEL,
    FULL,
}
enum PixbufError {
    CORRUPT_IMAGE,
    INSUFFICIENT_MEMORY,
    BAD_OPTION,
    UNKNOWN_TYPE,
    UNSUPPORTED_OPERATION,
    FAILED,
    INCOMPLETE_ANIMATION,
}
enum PixbufRotation {
    NONE,
    COUNTERCLOCKWISE,
    UPSIDEDOWN,
    CLOCKWISE,
}
enum PixbufFormatFlags {
    WRITABLE,
    SCALABLE,
    THREADSAFE,
}
const PIXBUF_MAJOR: number
const PIXBUF_MICRO: number
const PIXBUF_MINOR: number
const PIXBUF_VERSION: string
function pixbufErrorQuark(): GLib.Quark
interface PixbufDestroyNotify {
    (pixels: Uint8Array): void
}
interface PixbufModuleFillInfoFunc {
    (info: PixbufFormat): void
}
interface PixbufModuleFillVtableFunc {
    (module: PixbufModule): void
}
interface PixbufModulePreparedFunc {
    (pixbuf: Pixbuf, anim: PixbufAnimation): void
}
interface PixbufModuleSizeFunc {
    (width: number, height: number): void
}
interface PixbufModuleUpdatedFunc {
    (pixbuf: Pixbuf, x: number, y: number, width: number, height: number): void
}
interface PixbufSaveFunc {
    (buf: Uint8Array): boolean
}
interface Pixbuf_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GdkPixbuf-2.0.GdkPixbuf.Pixbuf */
    bitsPerSample?: number
    colorspace?: Colorspace
    hasAlpha?: boolean
    height?: number
    nChannels?: number
    pixelBytes?: any
    pixels?: object
    rowstride?: number
    width?: number
}
class Pixbuf {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.Pixbuf */
    addAlpha(substituteColor: boolean, r: number, g: number, b: number): Pixbuf
    applyEmbeddedOrientation(): Pixbuf | null
    composite(dest: Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: InterpType, overallAlpha: number): void
    compositeColor(dest: Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: InterpType, overallAlpha: number, checkX: number, checkY: number, checkSize: number, color1: number, color2: number): void
    compositeColorSimple(destWidth: number, destHeight: number, interpType: InterpType, overallAlpha: number, checkSize: number, color1: number, color2: number): Pixbuf | null
    copy(): Pixbuf | null
    copyArea(srcX: number, srcY: number, width: number, height: number, destPixbuf: Pixbuf, destX: number, destY: number): void
    copyOptions(destPixbuf: Pixbuf): boolean
    fill(pixel: number): void
    flip(horizontal: boolean): Pixbuf | null
    getBitsPerSample(): number
    getByteLength(): number
    getColorspace(): Colorspace
    getHasAlpha(): boolean
    getHeight(): number
    getNChannels(): number
    getOption(key: string): string | null
    getOptions(): GLib.HashTable
    getPixels(): Uint8Array
    getRowstride(): number
    getWidth(): number
    newSubpixbuf(srcX: number, srcY: number, width: number, height: number): Pixbuf
    readPixelBytes(): any
    readPixels(): number
    removeOption(key: string): boolean
    rotateSimple(angle: PixbufRotation): Pixbuf | null
    saturateAndPixelate(dest: Pixbuf, saturation: number, pixelate: boolean): void
    saveToBufferv(type: string, optionKeys?: string[] | null, optionValues?: string[] | null): [ /* returnType */ boolean, /* buffer */ Uint8Array ]
    saveToCallbackv(saveFunc: PixbufSaveFunc, type: string, optionKeys?: string[] | null, optionValues?: string[] | null): boolean
    saveToStreamv(stream: Gio.OutputStream, type: string, optionKeys?: string[] | null, optionValues?: string[] | null, cancellable?: Gio.Cancellable | null): boolean
    saveToStreamvAsync(stream: Gio.OutputStream, type: string, optionKeys?: string[] | null, optionValues?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    savev(filename: string, type: string, optionKeys?: string[] | null, optionValues?: string[] | null): boolean
    scale(dest: Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: InterpType): void
    scaleSimple(destWidth: number, destHeight: number, interpType: InterpType): Pixbuf | null
    setOption(key: string, value: string): boolean
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
    /* Methods of Gio-2.0.Gio.Icon */
    equal(icon2?: Gio.Icon | null): boolean
    serialize(): GLib.Variant | null
    toString(): string | null
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    loadAsync(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
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
    constructor (config?: Pixbuf_ConstructProps)
    _init (config?: Pixbuf_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number): Pixbuf
    static newFromBytes(data: any, colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number, rowstride: number): Pixbuf
    static newFromData(data: Uint8Array, colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number, rowstride: number, destroyFn?: PixbufDestroyNotify | null): Pixbuf
    static newFromFile(filename: string): Pixbuf
    static newFromFileAtScale(filename: string, width: number, height: number, preserveAspectRatio: boolean): Pixbuf
    static newFromFileAtSize(filename: string, width: number, height: number): Pixbuf
    static newFromInline(data: Uint8Array, copyPixels: boolean): Pixbuf
    static newFromResource(resourcePath: string): Pixbuf
    static newFromResourceAtScale(resourcePath: string, width: number, height: number, preserveAspectRatio: boolean): Pixbuf
    static newFromStream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): Pixbuf
    static newFromStreamAtScale(stream: Gio.InputStream, width: number, height: number, preserveAspectRatio: boolean, cancellable?: Gio.Cancellable | null): Pixbuf
    static newFromStreamFinish(asyncResult: Gio.AsyncResult): Pixbuf
    static newFromXpmData(data: string[]): Pixbuf
    static calculateRowstride(colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number): number
    static getFileInfo(filename: string): [ /* returnType */ PixbufFormat | null, /* width */ number | null, /* height */ number | null ]
    static getFileInfoAsync(filename: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getFileInfoFinish(asyncResult: Gio.AsyncResult): [ /* returnType */ PixbufFormat | null, /* width */ number, /* height */ number ]
    static getFormats(): PixbufFormat[]
    static initModules(path: string): boolean
    static newFromStreamAsync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newFromStreamAtScaleAsync(stream: Gio.InputStream, width: number, height: number, preserveAspectRatio: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static saveToStreamFinish(asyncResult: Gio.AsyncResult): boolean
    static deserialize(value: GLib.Variant): Gio.Icon | null
    static hash(icon: object): number
    static newForString(str: string): Gio.Icon
    static $gtype: GObject.Type
}
interface PixbufAnimation_ConstructProps extends GObject.Object_ConstructProps {
}
class PixbufAnimation {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    getHeight(): number
    getIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    getStaticImage(): Pixbuf
    getWidth(): number
    isStaticImage(): boolean
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
    constructor (config?: PixbufAnimation_ConstructProps)
    _init (config?: PixbufAnimation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromFile(filename: string): PixbufAnimation
    static newFromResource(resourcePath: string): PixbufAnimation
    static newFromStream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): PixbufAnimation
    static newFromStreamFinish(asyncResult: Gio.AsyncResult): PixbufAnimation
    static newFromStreamAsync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
interface PixbufAnimationIter_ConstructProps extends GObject.Object_ConstructProps {
}
class PixbufAnimationIter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    advance(currentTime?: GLib.TimeVal | null): boolean
    getDelayTime(): number
    getPixbuf(): Pixbuf
    onCurrentlyLoadingFrame(): boolean
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
    constructor (config?: PixbufAnimationIter_ConstructProps)
    _init (config?: PixbufAnimationIter_ConstructProps): void
    static $gtype: GObject.Type
}
interface PixbufLoader_ConstructProps extends GObject.Object_ConstructProps {
}
class PixbufLoader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufLoader */
    close(): boolean
    getAnimation(): PixbufAnimation | null
    getFormat(): PixbufFormat | null
    getPixbuf(): Pixbuf | null
    setSize(width: number, height: number): void
    write(buf: Uint8Array): boolean
    writeBytes(buffer: any): boolean
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
    /* Signals of GdkPixbuf-2.0.GdkPixbuf.PixbufLoader */
    connect(sigName: "area-prepared", callback: (() => void)): number
    on(sigName: "area-prepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "area-prepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "area-prepared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "area-prepared"): void
    connect(sigName: "area-updated", callback: ((x: number, y: number, width: number, height: number) => void)): number
    on(sigName: "area-updated", callback: (x: number, y: number, width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "area-updated", callback: (x: number, y: number, width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "area-updated", callback: (x: number, y: number, width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "area-updated", x: number, y: number, width: number, height: number): void
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "size-prepared", callback: ((width: number, height: number) => void)): number
    on(sigName: "size-prepared", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-prepared", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-prepared", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "size-prepared", width: number, height: number): void
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
    constructor (config?: PixbufLoader_ConstructProps)
    _init (config?: PixbufLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PixbufLoader
    static newWithMimeType(mimeType: string): PixbufLoader
    static newWithType(imageType: string): PixbufLoader
    static $gtype: GObject.Type
}
interface PixbufNonAnim_ConstructProps extends PixbufAnimation_ConstructProps {
}
class PixbufNonAnim {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    getHeight(): number
    getIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    getStaticImage(): Pixbuf
    getWidth(): number
    isStaticImage(): boolean
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
    constructor (config?: PixbufNonAnim_ConstructProps)
    _init (config?: PixbufNonAnim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(pixbuf: Pixbuf): PixbufNonAnim
    static $gtype: GObject.Type
}
interface PixbufSimpleAnim_ConstructProps extends PixbufAnimation_ConstructProps {
    /* Constructor properties of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    loop?: boolean
}
class PixbufSimpleAnim {
    /* Properties of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    loop: boolean
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    addFrame(pixbuf: Pixbuf): void
    getLoop(): boolean
    setLoop(loop: boolean): void
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    getHeight(): number
    getIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    getStaticImage(): Pixbuf
    getWidth(): number
    isStaticImage(): boolean
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
    connect(sigName: "notify::loop", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufSimpleAnim_ConstructProps)
    _init (config?: PixbufSimpleAnim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number, rate: number): PixbufSimpleAnim
    static $gtype: GObject.Type
}
interface PixbufSimpleAnimIter_ConstructProps extends PixbufAnimationIter_ConstructProps {
}
class PixbufSimpleAnimIter {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    advance(currentTime?: GLib.TimeVal | null): boolean
    getDelayTime(): number
    getPixbuf(): Pixbuf
    onCurrentlyLoadingFrame(): boolean
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
    constructor (config?: PixbufSimpleAnimIter_ConstructProps)
    _init (config?: PixbufSimpleAnimIter_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class PixbufAnimationClass {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationClass */
    readonly parentClass: GObject.ObjectClass
    readonly isStaticImage: (animation: PixbufAnimation) => boolean
    readonly getStaticImage: (animation: PixbufAnimation) => Pixbuf
    readonly getSize: (animation: PixbufAnimation, width: number, height: number) => void
    readonly getIter: (animation: PixbufAnimation, startTime?: GLib.TimeVal | null) => PixbufAnimationIter
    static name: string
}
abstract class PixbufAnimationIterClass {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIterClass */
    readonly parentClass: GObject.ObjectClass
    readonly getDelayTime: (iter: PixbufAnimationIter) => number
    readonly getPixbuf: (iter: PixbufAnimationIter) => Pixbuf
    readonly onCurrentlyLoadingFrame: (iter: PixbufAnimationIter) => boolean
    readonly advance: (iter: PixbufAnimationIter, currentTime?: GLib.TimeVal | null) => boolean
    static name: string
}
class PixbufFormat {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufFormat */
    readonly name: string
    readonly signature: PixbufModulePattern
    readonly domain: string
    readonly description: string
    readonly mimeTypes: string[]
    readonly extensions: string[]
    readonly flags: number
    readonly disabled: boolean
    readonly license: string
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufFormat */
    copy(): PixbufFormat
    free(): void
    getDescription(): string
    getExtensions(): string[]
    getLicense(): string
    getMimeTypes(): string[]
    getName(): string
    isDisabled(): boolean
    isSaveOptionSupported(optionKey: string): boolean
    isScalable(): boolean
    isWritable(): boolean
    setDisabled(disabled: boolean): void
    static name: string
}
abstract class PixbufLoaderClass {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufLoaderClass */
    readonly parentClass: GObject.ObjectClass
    readonly sizePrepared: (loader: PixbufLoader, width: number, height: number) => void
    readonly areaPrepared: (loader: PixbufLoader) => void
    readonly areaUpdated: (loader: PixbufLoader, x: number, y: number, width: number, height: number) => void
    readonly closed: (loader: PixbufLoader) => void
    static name: string
}
class PixbufModule {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufModule */
    readonly moduleName: string
    readonly modulePath: string
    readonly module: GModule.Module
    readonly info: PixbufFormat
    readonly stopLoad: (context: object) => boolean
    readonly loadIncrement: (context: object, buf: number, size: number) => boolean
    readonly save: (f: object, pixbuf: Pixbuf, paramKeys: string, paramValues: string) => boolean
    readonly isSaveOptionSupported: (optionKey: string) => boolean
    static name: string
}
class PixbufModulePattern {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufModulePattern */
    readonly prefix: string
    readonly mask: string
    readonly relevance: number
    static name: string
}
abstract class PixbufSimpleAnimClass {
    static name: string
}
}
export default GdkPixbuf;