/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUdev-1.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GUdev {

enum DeviceType {
    NONE,
    BLOCK,
    CHAR,
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUdev-1.0.GUdev.Client */
    subsystems?: string[]
}
class Client {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUdev-1.0.GUdev.Client */
    queryByDeviceFile(deviceFile: string): Device | null
    queryByDeviceNumber(type: DeviceType, number: DeviceNumber): Device | null
    queryBySubsystem(subsystem?: string | null): Device[] | null
    queryBySubsystemAndName(subsystem: string, name: string): Device | null
    queryBySysfsPath(sysfsPath: string): Device | null
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
    /* Signals of GUdev-1.0.GUdev.Client */
    connect(sigName: "uevent", callback: ((action: string, device: Device) => void)): number
    on(sigName: "uevent", callback: (action: string, device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "uevent", callback: (action: string, device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "uevent", callback: (action: string, device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "uevent", action: string, device: Device): void
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
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(subsystems?: string[] | null): Client
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends GObject.Object_ConstructProps {
}
class Device {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUdev-1.0.GUdev.Device */
    getAction(): string
    getDeviceFile(): string | null
    getDeviceFileSymlinks(): string[]
    getDeviceNumber(): DeviceNumber
    getDeviceType(): DeviceType
    getDevtype(): string
    getDriver(): string | null
    getIsInitialized(): boolean
    getName(): string
    getNumber(): string
    getParent(): Device | null
    getParentWithSubsystem(subsystem: string, devtype?: string | null): Device | null
    getProperty(key: string): string | null
    getPropertyAsBoolean(key: string): boolean
    getPropertyAsDouble(key: string): number
    getPropertyAsInt(key: string): number
    getPropertyAsStrv(key: string): string[] | null
    getPropertyAsUint64(key: string): number
    getPropertyKeys(): string[]
    getSeqnum(): number
    getSubsystem(): string
    getSysfsAttr(name: string): string | null
    getSysfsAttrAsBoolean(name: string): boolean
    getSysfsAttrAsBooleanUncached(name: string): boolean
    getSysfsAttrAsDouble(name: string): number
    getSysfsAttrAsDoubleUncached(name: string): number
    getSysfsAttrAsInt(name: string): number
    getSysfsAttrAsIntUncached(name: string): number
    getSysfsAttrAsStrv(name: string): string[] | null
    getSysfsAttrAsStrvUncached(name: string): string[] | null
    getSysfsAttrAsUint64(name: string): number
    getSysfsAttrAsUint64Uncached(name: string): number
    getSysfsAttrKeys(): string[]
    getSysfsAttrUncached(name: string): string | null
    getSysfsPath(): string
    getTags(): string[]
    getUsecSinceInitialized(): number
    hasProperty(key: string): boolean
    hasSysfsAttr(key: string): boolean
    hasSysfsAttrUncached(key: string): boolean
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
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    static $gtype: GObject.Type
}
interface Enumerator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUdev-1.0.GUdev.Enumerator */
    client?: Client
}
class Enumerator {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUdev-1.0.GUdev.Enumerator */
    addMatchIsInitialized(): Enumerator
    addMatchName(name: string): Enumerator
    addMatchProperty(name: string, value: string): Enumerator
    addMatchSubsystem(subsystem: string): Enumerator
    addMatchSysfsAttr(name: string, value: string): Enumerator
    addMatchTag(tag: string): Enumerator
    addNomatchSubsystem(subsystem: string): Enumerator
    addNomatchSysfsAttr(name: string, value: string): Enumerator
    addSysfsPath(sysfsPath: string): Enumerator
    execute(): Device[]
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
    constructor (config?: Enumerator_ConstructProps)
    _init (config?: Enumerator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(client: Client): Enumerator
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of GUdev-1.0.GUdev.ClientClass */
    readonly parentClass: GObject.ObjectClass
    readonly uevent: (client: Client, action: string, device: Device) => void
    readonly reserved1: () => void
    readonly reserved2: () => void
    readonly reserved3: () => void
    readonly reserved4: () => void
    readonly reserved5: () => void
    readonly reserved6: () => void
    readonly reserved7: () => void
    readonly reserved8: () => void
    static name: string
}
class ClientPrivate {
    static name: string
}
abstract class DeviceClass {
    /* Fields of GUdev-1.0.GUdev.DeviceClass */
    readonly parentClass: GObject.ObjectClass
    readonly reserved1: () => void
    readonly reserved2: () => void
    readonly reserved3: () => void
    readonly reserved4: () => void
    readonly reserved5: () => void
    readonly reserved6: () => void
    readonly reserved7: () => void
    readonly reserved8: () => void
    static name: string
}
class DevicePrivate {
    static name: string
}
abstract class EnumeratorClass {
    /* Fields of GUdev-1.0.GUdev.EnumeratorClass */
    readonly parentClass: GObject.ObjectClass
    readonly reserved1: () => void
    readonly reserved2: () => void
    readonly reserved3: () => void
    readonly reserved4: () => void
    readonly reserved5: () => void
    readonly reserved6: () => void
    readonly reserved7: () => void
    readonly reserved8: () => void
    static name: string
}
class EnumeratorPrivate {
    static name: string
}
    type DeviceNumber = number
}
export default GUdev;