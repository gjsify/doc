/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Notify-0.7
 */

import type GdkPixbuf from './GdkPixbuf-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace Notify {

enum Urgency {
    LOW,
    NORMAL,
    CRITICAL,
}
const EXPIRES_DEFAULT: number
const EXPIRES_NEVER: number
const VERSION_MAJOR: number
const VERSION_MICRO: number
const VERSION_MINOR: number
function getAppName(): string
function getServerCaps(): string[]
function getServerInfo(): [ /* returnType */ boolean, /* retName */ string | null, /* retVendor */ string | null, /* retVersion */ string | null, /* retSpecVersion */ string | null ]
function init(appName: string): boolean
function isInitted(): boolean
function setAppName(appName: string): void
function uninit(): void
interface ActionCallback {
    (notification: Notification, action: string): void
}
interface Notification_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Notify-0.7.Notify.Notification */
    appName?: string
    body?: string
    iconName?: string
    id?: number
    summary?: string
}
class Notification {
    /* Properties of Notify-0.7.Notify.Notification */
    appName: string
    body: string
    readonly closedReason: number
    iconName: string
    id: number
    summary: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Notify-0.7.Notify.Notification */
    addAction(action: string, label: string, callback: ActionCallback): void
    clearActions(): void
    clearHints(): void
    close(): boolean
    getClosedReason(): number
    setAppName(appName: string): void
    setCategory(category: string): void
    setHint(key: string, value?: GLib.Variant | null): void
    setHintByte(key: string, value: number): void
    setHintByteArray(key: string, value: Uint8Array): void
    setHintDouble(key: string, value: number): void
    setHintInt32(key: string, value: number): void
    setHintString(key: string, value: string): void
    setHintUint32(key: string, value: number): void
    setIconFromPixbuf(icon: GdkPixbuf.Pixbuf): void
    setImageFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    setTimeout(timeout: number): void
    setUrgency(urgency: Urgency): void
    show(): boolean
    update(summary: string, body?: string | null, icon?: string | null): boolean
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
    /* Signals of Notify-0.7.Notify.Notification */
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::body", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed-reason", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed-reason", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed-reason", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed-reason", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed-reason", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Notification_ConstructProps)
    _init (config?: Notification_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(summary: string, body?: string | null, icon?: string | null): Notification
    static $gtype: GObject.Type
}
abstract class NotificationClass {
    /* Fields of Notify-0.7.Notify.NotificationClass */
    readonly parentClass: GObject.ObjectClass
    readonly closed: (notification: Notification) => void
    static name: string
}
class NotificationPrivate {
    static name: string
}
}
export default Notify;