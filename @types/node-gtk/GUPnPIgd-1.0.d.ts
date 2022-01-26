/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnPIgd-1.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GUPnPIgd {

enum SimpleIgdError {
    SIMPLE_IGD_ERROR_EXTERNAL_ADDRESS,
}
interface SimpleIgd_ConstructProps extends GObject.Object_ConstructProps {
}
class SimpleIgd {
    /* Properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    readonly mainContext: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    addPort(protocol: string, externalPort: number, localIp: string, localPort: number, leaseDuration: number, description: string): void
    deleteAllMappings(): boolean
    removePort(protocol: string, externalPort: number): void
    removePortLocal(protocol: string, localIp: string, localPort: number): void
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
    /* Signals of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    connect(sigName: "context-available", callback: ((context: GObject.Object) => boolean)): number
    on(sigName: "context-available", callback: (context: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-available", callback: (context: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-available", callback: (context: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "context-available", context: GObject.Object): void
    connect(sigName: "error-mapping-port", callback: ((error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string) => void)): number
    on(sigName: "error-mapping-port", callback: (error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error-mapping-port", callback: (error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error-mapping-port", callback: (error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string) => void): NodeJS.EventEmitter
    emit(sigName: "error-mapping-port", error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string): void
    connect(sigName: "mapped-external-port", callback: ((proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string) => void)): number
    on(sigName: "mapped-external-port", callback: (proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mapped-external-port", callback: (proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mapped-external-port", callback: (proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string) => void): NodeJS.EventEmitter
    emit(sigName: "mapped-external-port", proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleIgd_ConstructProps)
    _init (config?: SimpleIgd_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleIgd
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface SimpleIgdThread_ConstructProps extends SimpleIgd_ConstructProps {
}
class SimpleIgdThread {
    /* Properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    readonly mainContext: object
    /* Fields of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    addPort(protocol: string, externalPort: number, localIp: string, localPort: number, leaseDuration: number, description: string): void
    deleteAllMappings(): boolean
    removePort(protocol: string, externalPort: number): void
    removePortLocal(protocol: string, localIp: string, localPort: number): void
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
    /* Signals of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd */
    connect(sigName: "context-available", callback: ((context: GObject.Object) => boolean)): number
    on(sigName: "context-available", callback: (context: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-available", callback: (context: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-available", callback: (context: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "context-available", context: GObject.Object): void
    connect(sigName: "error-mapping-port", callback: ((error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string) => void)): number
    on(sigName: "error-mapping-port", callback: (error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error-mapping-port", callback: (error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error-mapping-port", callback: (error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string) => void): NodeJS.EventEmitter
    emit(sigName: "error-mapping-port", error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string): void
    connect(sigName: "mapped-external-port", callback: ((proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string) => void)): number
    on(sigName: "mapped-external-port", callback: (proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mapped-external-port", callback: (proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mapped-external-port", callback: (proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string) => void): NodeJS.EventEmitter
    emit(sigName: "mapped-external-port", proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleIgdThread_ConstructProps)
    _init (config?: SimpleIgdThread_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleIgdThread
    /* Function overloads */
    static new(): SimpleIgdThread
    static $gtype: GObject.Type
}
abstract class SimpleIgdClass {
    static name: string
}
class SimpleIgdPrivate {
    static name: string
}
abstract class SimpleIgdThreadClass {
    static name: string
}
class SimpleIgdThreadPrivate {
    static name: string
}
}
export default GUPnPIgd;