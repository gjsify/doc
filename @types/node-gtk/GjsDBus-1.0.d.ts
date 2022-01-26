/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GjsDBus-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GjsDBus {

interface Implementation_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of GjsDBus-1.0.GjsDBus.Implementation */
    gInterfaceInfo?: Gio.DBusInterfaceInfo
}
class Implementation {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GjsDBus-1.0.GjsDBus.Implementation */
    emitPropertyChanged(property: string, newvalue?: GLib.Variant | null): void
    emitSignal(signalName: string, parameters?: GLib.Variant | null): void
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of GjsDBus-1.0.GjsDBus.Implementation */
    connect(sigName: "handle-method-call", callback: ((object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation) => void)): number
    on(sigName: "handle-method-call", callback: (object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-method-call", callback: (object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-method-call", callback: (object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-method-call", object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-property-get", callback: ((object: string) => GLib.Variant)): number
    on(sigName: "handle-property-get", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-property-get", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-property-get", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-property-get", object: string): void
    connect(sigName: "handle-property-set", callback: ((object: string, p0: GLib.Variant) => void)): number
    on(sigName: "handle-property-set", callback: (object: string, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-property-set", callback: (object: string, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-property-set", callback: (object: string, p0: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-property-set", object: string, p0: GLib.Variant): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Implementation_ConstructProps)
    _init (config?: Implementation_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ImplementationClass {
    /* Fields of GjsDBus-1.0.GjsDBus.ImplementationClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class ImplementationPrivate {
    static name: string
}
}
export default GjsDBus;