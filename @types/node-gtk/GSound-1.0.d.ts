/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GSound-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GSound {

enum Error {
    NOTSUPPORTED,
    INVALID,
    STATE,
    OOM,
    NODRIVER,
    SYSTEM,
    CORRUPT,
    TOOBIG,
    NOTFOUND,
    DESTROYED,
    CANCELED,
    NOTAVAILABLE,
    ACCESS,
    IO,
    INTERNAL,
    DISABLED,
    FORKED,
    DISCONNECTED,
}
const ATTR_APPLICATION_ICON: string
const ATTR_APPLICATION_ICON_NAME: string
const ATTR_APPLICATION_ID: string
const ATTR_APPLICATION_LANGUAGE: string
const ATTR_APPLICATION_NAME: string
const ATTR_APPLICATION_PROCESS_BINARY: string
const ATTR_APPLICATION_PROCESS_HOST: string
const ATTR_APPLICATION_PROCESS_ID: string
const ATTR_APPLICATION_PROCESS_USER: string
const ATTR_APPLICATION_VERSION: string
const ATTR_CANBERRA_CACHE_CONTROL: string
const ATTR_CANBERRA_ENABLE: string
const ATTR_CANBERRA_FORCE_CHANNEL: string
const ATTR_CANBERRA_VOLUME: string
const ATTR_CANBERRA_XDG_THEME_NAME: string
const ATTR_CANBERRA_XDG_THEME_OUTPUT_PROFILE: string
const ATTR_EVENT_DESCRIPTION: string
const ATTR_EVENT_ID: string
const ATTR_EVENT_MOUSE_BUTTON: string
const ATTR_EVENT_MOUSE_HPOS: string
const ATTR_EVENT_MOUSE_VPOS: string
const ATTR_EVENT_MOUSE_X: string
const ATTR_EVENT_MOUSE_Y: string
const ATTR_MEDIA_ARTIST: string
const ATTR_MEDIA_FILENAME: string
const ATTR_MEDIA_ICON: string
const ATTR_MEDIA_ICON_NAME: string
const ATTR_MEDIA_LANGUAGE: string
const ATTR_MEDIA_NAME: string
const ATTR_MEDIA_ROLE: string
const ATTR_MEDIA_TITLE: string
const ATTR_WINDOW_DESKTOP: string
const ATTR_WINDOW_HEIGHT: string
const ATTR_WINDOW_HPOS: string
const ATTR_WINDOW_ICON: string
const ATTR_WINDOW_ICON_NAME: string
const ATTR_WINDOW_ID: string
const ATTR_WINDOW_NAME: string
const ATTR_WINDOW_VPOS: string
const ATTR_WINDOW_WIDTH: string
const ATTR_WINDOW_X: string
const ATTR_WINDOW_X11_DISPLAY: string
const ATTR_WINDOW_X11_MONITOR: string
const ATTR_WINDOW_X11_SCREEN: string
const ATTR_WINDOW_X11_XID: string
const ATTR_WINDOW_Y: string
function errorQuark(): GLib.Quark
interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
class Context {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GSound-1.0.GSound.Context */
    cache(attrs: GLib.HashTable): boolean
    open(): boolean
    playFullFinish(result: Gio.AsyncResult): boolean
    playFull(attrs: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    playSimple(attrs: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    setAttributes(attrs: GLib.HashTable): boolean
    setDriver(driver: string): boolean
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
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
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable?: Gio.Cancellable | null): Context
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class ContextClass {
    static name: string
}
}
export default GSound;