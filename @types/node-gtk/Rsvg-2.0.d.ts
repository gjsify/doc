/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Rsvg-2.0
 */

import type cairo from './cairo-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace Rsvg {

enum Error {
    FAILED,
}
enum Unit {
    PERCENT,
    PX,
    EM,
    EX,
    IN,
    CM,
    MM,
    PT,
    PC,
}
enum HandleFlags {
    FLAGS_NONE,
    FLAG_UNLIMITED,
    FLAG_KEEP_IMAGE_DATA,
}
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const VERSION: string
function cleanup(): void
function errorQuark(): GLib.Quark
function setDefaultDpi(dpi: number): void
function setDefaultDpiXY(dpiX: number, dpiY: number): void
interface Handle_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Rsvg-2.0.Rsvg.Handle */
    baseUri?: string
    dpiX?: number
    dpiY?: number
    flags?: HandleFlags
}
class Handle {
    /* Properties of Rsvg-2.0.Rsvg.Handle */
    baseUri: string
    readonly desc: string
    dpiX: number
    dpiY: number
    readonly em: number
    readonly ex: number
    readonly height: number
    readonly metadata: string
    readonly title: string
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Rsvg-2.0.Rsvg.Handle */
    close(): boolean
    getBaseUri(): string
    getDimensions(): /* dimensionData */ DimensionData
    getDimensionsSub(id?: string | null): [ /* returnType */ boolean, /* dimensionData */ DimensionData ]
    getGeometryForElement(id?: string | null): [ /* returnType */ boolean, /* outInkRect */ Rectangle | null, /* outLogicalRect */ Rectangle | null ]
    getGeometryForLayer(id: string | null, viewport: Rectangle): [ /* returnType */ boolean, /* outInkRect */ Rectangle | null, /* outLogicalRect */ Rectangle | null ]
    getIntrinsicDimensions(): [ /* outHasWidth */ boolean | null, /* outWidth */ Length | null, /* outHasHeight */ boolean | null, /* outHeight */ Length | null, /* outHasViewbox */ boolean | null, /* outViewbox */ Rectangle | null ]
    getIntrinsicSizeInPixels(): [ /* returnType */ boolean, /* outWidth */ number | null, /* outHeight */ number | null ]
    getPixbuf(): GdkPixbuf.Pixbuf | null
    getPixbufSub(id?: string | null): GdkPixbuf.Pixbuf | null
    getPositionSub(id?: string | null): [ /* returnType */ boolean, /* positionData */ PositionData ]
    hasSub(id: string): boolean
    internalSetTesting(testing: boolean): void
    readStreamSync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    renderCairo(cr: cairo.Context): boolean
    renderCairoSub(cr: cairo.Context, id?: string | null): boolean
    renderDocument(cr: cairo.Context, viewport: Rectangle): boolean
    renderElement(cr: cairo.Context, id: string | null, elementViewport: Rectangle): boolean
    renderLayer(cr: cairo.Context, id: string | null, viewport: Rectangle): boolean
    setBaseGfile(baseFile: Gio.File): void
    setBaseUri(baseUri: string): void
    setDpi(dpi: number): void
    setDpiXY(dpiX: number, dpiY: number): void
    setStylesheet(css: Uint8Array): boolean
    write(buf: Uint8Array): boolean
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
    connect(sigName: "notify::base-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dpi-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpi-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dpi-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dpi-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dpi-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dpi-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpi-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dpi-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dpi-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dpi-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::em", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::em", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::em", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::em", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::em", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ex", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ex", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Handle_ConstructProps)
    _init (config?: Handle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Handle
    static newFromData(data: Uint8Array): Handle
    static newFromFile(filename: string): Handle
    static newFromGfileSync(file: Gio.File, flags: HandleFlags, cancellable?: Gio.Cancellable | null): Handle
    static newFromStreamSync(inputStream: Gio.InputStream, baseFile: Gio.File | null, flags: HandleFlags, cancellable?: Gio.Cancellable | null): Handle
    static newWithFlags(flags: HandleFlags): Handle
    static $gtype: GObject.Type
}
class DimensionData {
    /* Fields of Rsvg-2.0.Rsvg.DimensionData */
    readonly width: number
    readonly height: number
    readonly em: number
    readonly ex: number
    static name: string
}
abstract class HandleClass {
    /* Fields of Rsvg-2.0.Rsvg.HandleClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
class Length {
    /* Fields of Rsvg-2.0.Rsvg.Length */
    readonly length: number
    readonly unit: Unit
    static name: string
}
class PositionData {
    /* Fields of Rsvg-2.0.Rsvg.PositionData */
    readonly x: number
    readonly y: number
    static name: string
}
class Rectangle {
    /* Fields of Rsvg-2.0.Rsvg.Rectangle */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    static name: string
}
}
export default Rsvg;