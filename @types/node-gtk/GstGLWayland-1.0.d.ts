/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstGLWayland-1.0
 */

import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstGL from './GstGL-1.0';

export namespace GstGLWayland {

interface GLDisplayWayland_ConstructProps extends GstGL.GLDisplay_ConstructProps {
}
class GLDisplayWayland {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLDisplay */
    addContext(context: GstGL.GLContext): boolean
    createContext(otherContext: GstGL.GLContext): [ /* returnType */ boolean, /* pContext */ GstGL.GLContext ]
    createWindow(): GstGL.GLWindow
    filterGlApi(glApi: GstGL.GLAPI): void
    findWindow(data: object | null, compareFunc: GLib.CompareFunc): GstGL.GLWindow
    getGlApi(): GstGL.GLAPI
    getGlApiUnlocked(): GstGL.GLAPI
    getGlContextForThread(thread: GLib.Thread): GstGL.GLContext
    getHandle(): number
    getHandleType(): GstGL.GLDisplayType
    removeContext(context: GstGL.GLContext): void
    removeWindow(window: GstGL.GLWindow): boolean
    retrieveWindow(data: object | null, compareFunc: GLib.CompareFunc): GstGL.GLWindow
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
    connect(sigName: "create-context", callback: ((context: GstGL.GLContext) => GstGL.GLContext)): number
    on(sigName: "create-context", callback: (context: GstGL.GLContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-context", callback: (context: GstGL.GLContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-context", callback: (context: GstGL.GLContext) => void): NodeJS.EventEmitter
    emit(sigName: "create-context", context: GstGL.GLContext): void
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
    constructor (config?: GLDisplayWayland_ConstructProps)
    _init (config?: GLDisplayWayland_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): GLDisplayWayland
    /* Function overloads */
    static new(): GLDisplayWayland
    static newWithDisplay(display?: object | null): GLDisplayWayland
    static $gtype: GObject.Type
}
abstract class GLDisplayWaylandClass {
    /* Fields of GstGLWayland-1.0.GstGLWayland.GLDisplayWaylandClass */
    readonly objectClass: GstGL.GLDisplayClass
    readonly padding: object[]
    static name: string
}
}
export default GstGLWayland;