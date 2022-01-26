/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Geoclue-2.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Geoclue {

enum AccuracyLevel {
    NONE,
    COUNTRY,
    CITY,
    NEIGHBORHOOD,
    STREET,
    EXACT,
}
enum ClientProxyCreateFlags {
    NONE,
    AUTO_DELETE,
}
function clientInterfaceInfo(): Gio.DBusInterfaceInfo
function clientOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function locationInterfaceInfo(): Gio.DBusInterfaceInfo
function locationOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function managerInterfaceInfo(): Gio.DBusInterfaceInfo
function managerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
class Client {
    /* Properties of Geoclue-2.0.Geoclue.Client */
    active: boolean
    desktopId: string
    distanceThreshold: number
    location: string
    requestedAccuracyLevel: number
    timeThreshold: number
    /* Methods of Geoclue-2.0.Geoclue.Client */
    callStart(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartFinish(res: Gio.AsyncResult): boolean
    callStartSync(cancellable?: Gio.Cancellable | null): boolean
    callStop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStopFinish(res: Gio.AsyncResult): boolean
    callStopSync(cancellable?: Gio.Cancellable | null): boolean
    completeStart(invocation: Gio.DBusMethodInvocation): void
    completeStop(invocation: Gio.DBusMethodInvocation): void
    emitLocationUpdated(argOld: string, argNew: string): void
    /* Signals of Geoclue-2.0.Geoclue.Client */
    connect(sigName: "handle-start", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-start", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-stop", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-stop", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "location-updated", callback: ((argOld: string, argNew: string) => void)): number
    on(sigName: "location-updated", callback: (argOld: string, argNew: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "location-updated", callback: (argOld: string, argNew: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "location-updated", callback: (argOld: string, argNew: string) => void): NodeJS.EventEmitter
    emit(sigName: "location-updated", argOld: string, argNew: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Location {
    /* Properties of Geoclue-2.0.Geoclue.Location */
    accuracy: number
    altitude: number
    description: string
    heading: number
    latitude: number
    longitude: number
    speed: number
    timestamp: GLib.Variant
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Manager {
    /* Properties of Geoclue-2.0.Geoclue.Manager */
    availableAccuracyLevel: number
    inUse: boolean
    /* Methods of Geoclue-2.0.Geoclue.Manager */
    callAddAgent(argId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddAgentFinish(res: Gio.AsyncResult): boolean
    callAddAgentSync(argId: string, cancellable?: Gio.Cancellable | null): boolean
    callCreateClient(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCreateClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string | null ]
    callCreateClientSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string | null ]
    callDeleteClient(argClient: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteClientFinish(res: Gio.AsyncResult): boolean
    callDeleteClientSync(argClient: string, cancellable?: Gio.Cancellable | null): boolean
    callGetClient(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string | null ]
    callGetClientSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string | null ]
    completeAddAgent(invocation: Gio.DBusMethodInvocation): void
    completeCreateClient(invocation: Gio.DBusMethodInvocation, client: string): void
    completeDeleteClient(invocation: Gio.DBusMethodInvocation): void
    completeGetClient(invocation: Gio.DBusMethodInvocation, client: string): void
    /* Signals of Geoclue-2.0.Geoclue.Manager */
    connect(sigName: "handle-add-agent", callback: ((invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    on(sigName: "handle-add-agent", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-add-agent", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-add-agent", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-add-agent", invocation: Gio.DBusMethodInvocation, argId: string): void
    connect(sigName: "handle-create-client", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-create-client", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-create-client", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-create-client", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-create-client", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-delete-client", callback: ((invocation: Gio.DBusMethodInvocation, argClient: string) => boolean)): number
    on(sigName: "handle-delete-client", callback: (invocation: Gio.DBusMethodInvocation, argClient: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-delete-client", callback: (invocation: Gio.DBusMethodInvocation, argClient: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-delete-client", callback: (invocation: Gio.DBusMethodInvocation, argClient: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-delete-client", invocation: Gio.DBusMethodInvocation, argClient: string): void
    connect(sigName: "handle-get-client", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-client", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-client", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-client", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-client", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
interface ClientProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Geoclue-2.0.Geoclue.Client */
    active?: boolean
    desktopId?: string
    distanceThreshold?: number
    location?: string
    requestedAccuracyLevel?: number
    timeThreshold?: number
}
class ClientProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Geoclue-2.0.Geoclue.Client */
    active: boolean
    desktopId: string
    distanceThreshold: number
    location: string
    requestedAccuracyLevel: number
    timeThreshold: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Geoclue-2.0.Geoclue.Client */
    callStart(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartFinish(res: Gio.AsyncResult): boolean
    callStartSync(cancellable?: Gio.Cancellable | null): boolean
    callStop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStopFinish(res: Gio.AsyncResult): boolean
    callStopSync(cancellable?: Gio.Cancellable | null): boolean
    completeStart(invocation: Gio.DBusMethodInvocation): void
    completeStop(invocation: Gio.DBusMethodInvocation): void
    emitLocationUpdated(argOld: string, argNew: string): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Geoclue-2.0.Geoclue.Client */
    connect(sigName: "handle-start", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-start", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-stop", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-stop", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "location-updated", callback: ((argOld: string, argNew: string) => void)): number
    on(sigName: "location-updated", callback: (argOld: string, argNew: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "location-updated", callback: (argOld: string, argNew: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "location-updated", callback: (argOld: string, argNew: string) => void): NodeJS.EventEmitter
    emit(sigName: "location-updated", argOld: string, argNew: string): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::desktop-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::distance-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::distance-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::distance-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::distance-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::requested-accuracy-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::requested-accuracy-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::requested-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::requested-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::requested-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientProxy_ConstructProps)
    _init (config?: ClientProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ClientProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): ClientProxy
    static newForBusFinish(res: Gio.AsyncResult): ClientProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): ClientProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ClientProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ClientProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ClientProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ClientProxy
    static create(desktopId: string, accuracyLevel: AccuracyLevel, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static createFinish(result: Gio.AsyncResult): ClientProxy
    static createFull(desktopId: string, accuracyLevel: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static createFullFinish(result: Gio.AsyncResult): ClientProxy
    static createFullSync(desktopId: string, accuracyLevel: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable?: Gio.Cancellable | null): ClientProxy
    static createSync(desktopId: string, accuracyLevel: AccuracyLevel, cancellable?: Gio.Cancellable | null): ClientProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ClientSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Geoclue-2.0.Geoclue.Client */
    active?: boolean
    desktopId?: string
    distanceThreshold?: number
    location?: string
    requestedAccuracyLevel?: number
    timeThreshold?: number
}
class ClientSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Geoclue-2.0.Geoclue.Client */
    active: boolean
    desktopId: string
    distanceThreshold: number
    location: string
    requestedAccuracyLevel: number
    timeThreshold: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    /* Methods of Geoclue-2.0.Geoclue.Client */
    callStart(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartFinish(res: Gio.AsyncResult): boolean
    callStartSync(cancellable?: Gio.Cancellable | null): boolean
    callStop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStopFinish(res: Gio.AsyncResult): boolean
    callStopSync(cancellable?: Gio.Cancellable | null): boolean
    completeStart(invocation: Gio.DBusMethodInvocation): void
    completeStop(invocation: Gio.DBusMethodInvocation): void
    emitLocationUpdated(argOld: string, argNew: string): void
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
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
    /* Signals of Geoclue-2.0.Geoclue.Client */
    connect(sigName: "handle-start", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-start", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-stop", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-stop", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "location-updated", callback: ((argOld: string, argNew: string) => void)): number
    on(sigName: "location-updated", callback: (argOld: string, argNew: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "location-updated", callback: (argOld: string, argNew: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "location-updated", callback: (argOld: string, argNew: string) => void): NodeJS.EventEmitter
    emit(sigName: "location-updated", argOld: string, argNew: string): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::desktop-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::distance-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::distance-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::distance-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::distance-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::requested-accuracy-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::requested-accuracy-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::requested-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::requested-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::requested-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientSkeleton_ConstructProps)
    _init (config?: ClientSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ClientSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface LocationProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Geoclue-2.0.Geoclue.Location */
    accuracy?: number
    altitude?: number
    description?: string
    heading?: number
    latitude?: number
    longitude?: number
    speed?: number
    timestamp?: GLib.Variant
}
class LocationProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Geoclue-2.0.Geoclue.Location */
    accuracy: number
    altitude: number
    description: string
    heading: number
    latitude: number
    longitude: number
    speed: number
    timestamp: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accuracy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::altitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::heading", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::heading", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::heading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::heading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::heading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LocationProxy_ConstructProps)
    _init (config?: LocationProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): LocationProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): LocationProxy
    static newForBusFinish(res: Gio.AsyncResult): LocationProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): LocationProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): LocationProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): LocationProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): LocationProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): LocationProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface LocationSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Geoclue-2.0.Geoclue.Location */
    accuracy?: number
    altitude?: number
    description?: string
    heading?: number
    latitude?: number
    longitude?: number
    speed?: number
    timestamp?: GLib.Variant
}
class LocationSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Geoclue-2.0.Geoclue.Location */
    accuracy: number
    altitude: number
    description: string
    heading: number
    latitude: number
    longitude: number
    speed: number
    timestamp: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify::accuracy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::altitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::heading", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::heading", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::heading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::heading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::heading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LocationSkeleton_ConstructProps)
    _init (config?: LocationSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LocationSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface ManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Geoclue-2.0.Geoclue.Manager */
    availableAccuracyLevel?: number
    inUse?: boolean
}
class ManagerProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Geoclue-2.0.Geoclue.Manager */
    availableAccuracyLevel: number
    inUse: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Geoclue-2.0.Geoclue.Manager */
    callAddAgent(argId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddAgentFinish(res: Gio.AsyncResult): boolean
    callAddAgentSync(argId: string, cancellable?: Gio.Cancellable | null): boolean
    callCreateClient(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCreateClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string | null ]
    callCreateClientSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string | null ]
    callDeleteClient(argClient: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteClientFinish(res: Gio.AsyncResult): boolean
    callDeleteClientSync(argClient: string, cancellable?: Gio.Cancellable | null): boolean
    callGetClient(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string | null ]
    callGetClientSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string | null ]
    completeAddAgent(invocation: Gio.DBusMethodInvocation): void
    completeCreateClient(invocation: Gio.DBusMethodInvocation, client: string): void
    completeDeleteClient(invocation: Gio.DBusMethodInvocation): void
    completeGetClient(invocation: Gio.DBusMethodInvocation, client: string): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Geoclue-2.0.Geoclue.Manager */
    connect(sigName: "handle-add-agent", callback: ((invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    on(sigName: "handle-add-agent", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-add-agent", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-add-agent", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-add-agent", invocation: Gio.DBusMethodInvocation, argId: string): void
    connect(sigName: "handle-create-client", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-create-client", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-create-client", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-create-client", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-create-client", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-delete-client", callback: ((invocation: Gio.DBusMethodInvocation, argClient: string) => boolean)): number
    on(sigName: "handle-delete-client", callback: (invocation: Gio.DBusMethodInvocation, argClient: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-delete-client", callback: (invocation: Gio.DBusMethodInvocation, argClient: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-delete-client", callback: (invocation: Gio.DBusMethodInvocation, argClient: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-delete-client", invocation: Gio.DBusMethodInvocation, argClient: string): void
    connect(sigName: "handle-get-client", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-client", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-client", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-client", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-client", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-accuracy-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-accuracy-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-use", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-use", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-use", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-use", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-use", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ManagerProxy_ConstructProps)
    _init (config?: ManagerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ManagerProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): ManagerProxy
    static newForBusFinish(res: Gio.AsyncResult): ManagerProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): ManagerProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Geoclue-2.0.Geoclue.Manager */
    availableAccuracyLevel?: number
    inUse?: boolean
}
class ManagerSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Geoclue-2.0.Geoclue.Manager */
    availableAccuracyLevel: number
    inUse: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    /* Methods of Geoclue-2.0.Geoclue.Manager */
    callAddAgent(argId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddAgentFinish(res: Gio.AsyncResult): boolean
    callAddAgentSync(argId: string, cancellable?: Gio.Cancellable | null): boolean
    callCreateClient(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCreateClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string | null ]
    callCreateClientSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string | null ]
    callDeleteClient(argClient: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDeleteClientFinish(res: Gio.AsyncResult): boolean
    callDeleteClientSync(argClient: string, cancellable?: Gio.Cancellable | null): boolean
    callGetClient(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string | null ]
    callGetClientSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string | null ]
    completeAddAgent(invocation: Gio.DBusMethodInvocation): void
    completeCreateClient(invocation: Gio.DBusMethodInvocation, client: string): void
    completeDeleteClient(invocation: Gio.DBusMethodInvocation): void
    completeGetClient(invocation: Gio.DBusMethodInvocation, client: string): void
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
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
    /* Signals of Geoclue-2.0.Geoclue.Manager */
    connect(sigName: "handle-add-agent", callback: ((invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    on(sigName: "handle-add-agent", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-add-agent", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-add-agent", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-add-agent", invocation: Gio.DBusMethodInvocation, argId: string): void
    connect(sigName: "handle-create-client", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-create-client", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-create-client", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-create-client", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-create-client", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-delete-client", callback: ((invocation: Gio.DBusMethodInvocation, argClient: string) => boolean)): number
    on(sigName: "handle-delete-client", callback: (invocation: Gio.DBusMethodInvocation, argClient: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-delete-client", callback: (invocation: Gio.DBusMethodInvocation, argClient: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-delete-client", callback: (invocation: Gio.DBusMethodInvocation, argClient: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-delete-client", invocation: Gio.DBusMethodInvocation, argClient: string): void
    connect(sigName: "handle-get-client", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-client", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-client", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-client", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-client", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-accuracy-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-accuracy-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-accuracy-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-use", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-use", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-use", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-use", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-use", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ManagerSkeleton_ConstructProps)
    _init (config?: ManagerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ManagerSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface Simple_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Geoclue-2.0.Geoclue.Simple */
    accuracyLevel?: AccuracyLevel
    desktopId?: string
    distanceThreshold?: number
    timeThreshold?: number
}
class Simple {
    /* Properties of Geoclue-2.0.Geoclue.Simple */
    readonly client: ClientProxy
    readonly location: LocationProxy
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Geoclue-2.0.Geoclue.Simple */
    getClient(): ClientProxy
    getLocation(): Location
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Simple_ConstructProps)
    _init (config?: Simple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(result: Gio.AsyncResult): Simple
    static newSync(desktopId: string, accuracyLevel: AccuracyLevel, cancellable?: Gio.Cancellable | null): Simple
    static newWithThresholdsFinish(result: Gio.AsyncResult): Simple
    static newWithThresholdsSync(desktopId: string, accuracyLevel: AccuracyLevel, timeThreshold: number, distanceThreshold: number, cancellable?: Gio.Cancellable | null): Simple
    static newWithThresholds(desktopId: string, accuracyLevel: AccuracyLevel, timeThreshold: number, distanceThreshold: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
abstract class ClientIface {
    /* Fields of Geoclue-2.0.Geoclue.ClientIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleStart: (object: Client, invocation: Gio.DBusMethodInvocation) => boolean
    readonly handleStop: (object: Client, invocation: Gio.DBusMethodInvocation) => boolean
    readonly getActive: (object: Client) => boolean
    readonly getDesktopId: (object: Client) => string | null
    readonly getDistanceThreshold: (object: Client) => number
    readonly getLocation: (object: Client) => string | null
    readonly getRequestedAccuracyLevel: (object: Client) => number
    readonly getTimeThreshold: (object: Client) => number
    readonly locationUpdated: (object: Client, argOld: string, argNew: string) => void
    static name: string
}
abstract class ClientProxyClass {
    /* Fields of Geoclue-2.0.Geoclue.ClientProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class ClientProxyPrivate {
    static name: string
}
abstract class ClientSkeletonClass {
    /* Fields of Geoclue-2.0.Geoclue.ClientSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class ClientSkeletonPrivate {
    static name: string
}
abstract class LocationIface {
    /* Fields of Geoclue-2.0.Geoclue.LocationIface */
    readonly parentIface: GObject.TypeInterface
    readonly getAccuracy: (object: Location) => number
    readonly getAltitude: (object: Location) => number
    readonly getDescription: (object: Location) => string | null
    readonly getHeading: (object: Location) => number
    readonly getLatitude: (object: Location) => number
    readonly getLongitude: (object: Location) => number
    readonly getSpeed: (object: Location) => number
    readonly getTimestamp: (object: Location) => GLib.Variant | null
    static name: string
}
abstract class LocationProxyClass {
    /* Fields of Geoclue-2.0.Geoclue.LocationProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class LocationProxyPrivate {
    static name: string
}
abstract class LocationSkeletonClass {
    /* Fields of Geoclue-2.0.Geoclue.LocationSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class LocationSkeletonPrivate {
    static name: string
}
abstract class ManagerIface {
    /* Fields of Geoclue-2.0.Geoclue.ManagerIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleAddAgent: (object: Manager, invocation: Gio.DBusMethodInvocation, argId: string) => boolean
    readonly handleCreateClient: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    readonly handleDeleteClient: (object: Manager, invocation: Gio.DBusMethodInvocation, argClient: string) => boolean
    readonly handleGetClient: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    readonly getAvailableAccuracyLevel: (object: Manager) => number
    readonly getInUse: (object: Manager) => boolean
    static name: string
}
abstract class ManagerProxyClass {
    /* Fields of Geoclue-2.0.Geoclue.ManagerProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class ManagerProxyPrivate {
    static name: string
}
abstract class ManagerSkeletonClass {
    /* Fields of Geoclue-2.0.Geoclue.ManagerSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class ManagerSkeletonPrivate {
    static name: string
}
abstract class SimpleClass {
    /* Fields of Geoclue-2.0.Geoclue.SimpleClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SimplePrivate {
    static name: string
}
}
export default Geoclue;