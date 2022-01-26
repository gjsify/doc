/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * UPowerGlib-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace UPowerGlib {

enum DeviceKind {
    UNKNOWN,
    LINE_POWER,
    BATTERY,
    UPS,
    MONITOR,
    MOUSE,
    KEYBOARD,
    PDA,
    PHONE,
    MEDIA_PLAYER,
    TABLET,
    COMPUTER,
    LAST,
}
enum DeviceLevel {
    UNKNOWN,
    NONE,
    DISCHARGING,
    LOW,
    CRITICAL,
    ACTION,
    LAST,
}
enum DeviceState {
    UNKNOWN,
    CHARGING,
    DISCHARGING,
    EMPTY,
    FULLY_CHARGED,
    PENDING_CHARGE,
    PENDING_DISCHARGE,
    LAST,
}
enum DeviceTechnology {
    UNKNOWN,
    LITHIUM_ION,
    LITHIUM_POLYMER,
    LITHIUM_IRON_PHOSPHATE,
    LEAD_ACID,
    NICKEL_CADMIUM,
    NICKEL_METAL_HYDRIDE,
    LAST,
}
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
function clientGlueInterfaceInfo(): Gio.DBusInterfaceInfo
function clientGlueOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function deviceGlueInterfaceInfo(): Gio.DBusInterfaceInfo
function deviceGlueOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function wakeupsGlueInterfaceInfo(): Gio.DBusInterfaceInfo
function wakeupsGlueOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
class ClientGlue {
    /* Properties of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    daemonVersion: string
    lidIsClosed: boolean
    lidIsPresent: boolean
    onBattery: boolean
    /* Methods of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    callEnumerateDevices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callEnumerateDevicesFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevices */ string ]
    callEnumerateDevicesSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevices */ string ]
    callGetCriticalAction(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetCriticalActionFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAction */ string ]
    callGetCriticalActionSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAction */ string ]
    callGetDisplayDevice(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetDisplayDeviceFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevice */ string ]
    callGetDisplayDeviceSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevice */ string ]
    completeEnumerateDevices(invocation: Gio.DBusMethodInvocation, devices: string): void
    completeGetCriticalAction(invocation: Gio.DBusMethodInvocation, action: string): void
    completeGetDisplayDevice(invocation: Gio.DBusMethodInvocation, device: string): void
    emitDeviceAdded(argDevice: string): void
    emitDeviceRemoved(argDevice: string): void
    /* Signals of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    connect(sigName: "device-added", callback: ((argDevice: string) => void)): number
    on(sigName: "device-added", callback: (argDevice: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (argDevice: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (argDevice: string) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", argDevice: string): void
    connect(sigName: "device-removed", callback: ((argDevice: string) => void)): number
    on(sigName: "device-removed", callback: (argDevice: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (argDevice: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (argDevice: string) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", argDevice: string): void
    connect(sigName: "handle-enumerate-devices", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-enumerate-devices", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-enumerate-devices", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-enumerate-devices", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-critical-action", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-critical-action", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-critical-action", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-critical-action", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-critical-action", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-display-device", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-display-device", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-display-device", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-display-device", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-display-device", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class DeviceGlue {
    /* Properties of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    capacity: number
    energy: number
    energyEmpty: number
    energyFull: number
    energyFullDesign: number
    energyRate: number
    hasHistory: boolean
    hasStatistics: boolean
    iconName: string
    isPresent: boolean
    isRechargeable: boolean
    luminosity: number
    model: string
    nativePath: string
    online: boolean
    percentage: number
    powerSupply: boolean
    serial: string
    state: number
    technology: number
    temperature: number
    timeToEmpty: number
    timeToFull: number
    type: number
    updateTime: number
    vendor: string
    voltage: number
    warningLevel: number
    /* Methods of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    callGetHistory(argType: string, argTimespan: number, argResolution: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetHistoryFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetHistorySync(argType: string, argTimespan: number, argResolution: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetStatistics(argType: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetStatisticsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetStatisticsSync(argType: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callRefresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callRefreshFinish(res: Gio.AsyncResult): boolean
    callRefreshSync(cancellable?: Gio.Cancellable | null): boolean
    completeGetHistory(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeGetStatistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeRefresh(invocation: Gio.DBusMethodInvocation): void
    /* Signals of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    connect(sigName: "handle-get-history", callback: ((invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => boolean)): number
    on(sigName: "handle-get-history", callback: (invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-history", callback: (invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-history", callback: (invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-history", invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number): void
    connect(sigName: "handle-get-statistics", callback: ((invocation: Gio.DBusMethodInvocation, argType: string) => boolean)): number
    on(sigName: "handle-get-statistics", callback: (invocation: Gio.DBusMethodInvocation, argType: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-statistics", callback: (invocation: Gio.DBusMethodInvocation, argType: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-statistics", callback: (invocation: Gio.DBusMethodInvocation, argType: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-statistics", invocation: Gio.DBusMethodInvocation, argType: string): void
    connect(sigName: "handle-refresh", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-refresh", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-refresh", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-refresh", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-refresh", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class WakeupsGlue {
    /* Properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    hasCapability: boolean
    /* Methods of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    callGetData(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetDataFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetDataSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetTotal(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetTotalFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outValue */ number ]
    callGetTotalSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outValue */ number ]
    completeGetData(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeGetTotal(invocation: Gio.DBusMethodInvocation, value: number): void
    emitDataChanged(): void
    emitTotalChanged(argValue: number): void
    /* Signals of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    connect(sigName: "data-changed", callback: (() => void)): number
    on(sigName: "data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "data-changed"): void
    connect(sigName: "handle-get-data", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-data", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-data", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-data", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-data", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-total", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-total", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-total", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-total", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-total", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "total-changed", callback: ((argValue: number) => void)): number
    on(sigName: "total-changed", callback: (argValue: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "total-changed", callback: (argValue: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "total-changed", callback: (argValue: number) => void): NodeJS.EventEmitter
    emit(sigName: "total-changed", argValue: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
class Client {
    /* Properties of UPowerGlib-1.0.UPowerGlib.Client */
    readonly daemonVersion: string
    readonly lidIsClosed: boolean
    readonly lidIsPresent: boolean
    readonly onBattery: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of UPowerGlib-1.0.UPowerGlib.Client */
    getCriticalAction(): string
    getDaemonVersion(): string
    getDevices(): Device[]
    getDisplayDevice(): Device
    getLidIsClosed(): boolean
    getLidIsPresent(): boolean
    getOnBattery(): boolean
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
    /* Signals of UPowerGlib-1.0.UPowerGlib.Client */
    connect(sigName: "device-added", callback: ((device: Device) => void)): number
    on(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", device: Device): void
    connect(sigName: "device-removed", callback: ((objectPath: string) => void)): number
    on(sigName: "device-removed", callback: (objectPath: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (objectPath: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (objectPath: string) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", objectPath: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::daemon-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lid-is-closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lid-is-present", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::on-battery", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(): Client
    static $gtype: GObject.Type
}
interface ClientGlueProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    daemonVersion?: string
    lidIsClosed?: boolean
    lidIsPresent?: boolean
    onBattery?: boolean
}
class ClientGlueProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    daemonVersion: string
    lidIsClosed: boolean
    lidIsPresent: boolean
    onBattery: boolean
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
    /* Methods of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    callEnumerateDevices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callEnumerateDevicesFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevices */ string ]
    callEnumerateDevicesSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevices */ string ]
    callGetCriticalAction(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetCriticalActionFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAction */ string ]
    callGetCriticalActionSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAction */ string ]
    callGetDisplayDevice(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetDisplayDeviceFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevice */ string ]
    callGetDisplayDeviceSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevice */ string ]
    completeEnumerateDevices(invocation: Gio.DBusMethodInvocation, devices: string): void
    completeGetCriticalAction(invocation: Gio.DBusMethodInvocation, action: string): void
    completeGetDisplayDevice(invocation: Gio.DBusMethodInvocation, device: string): void
    emitDeviceAdded(argDevice: string): void
    emitDeviceRemoved(argDevice: string): void
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
    /* Signals of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    connect(sigName: "device-added", callback: ((argDevice: string) => void)): number
    on(sigName: "device-added", callback: (argDevice: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (argDevice: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (argDevice: string) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", argDevice: string): void
    connect(sigName: "device-removed", callback: ((argDevice: string) => void)): number
    on(sigName: "device-removed", callback: (argDevice: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (argDevice: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (argDevice: string) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", argDevice: string): void
    connect(sigName: "handle-enumerate-devices", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-enumerate-devices", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-enumerate-devices", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-enumerate-devices", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-critical-action", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-critical-action", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-critical-action", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-critical-action", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-critical-action", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-display-device", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-display-device", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-display-device", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-display-device", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-display-device", invocation: Gio.DBusMethodInvocation): void
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
    connect(sigName: "notify::daemon-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lid-is-closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lid-is-present", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::on-battery", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientGlueProxy_ConstructProps)
    _init (config?: ClientGlueProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ClientGlueProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): ClientGlueProxy
    static newForBusFinish(res: Gio.AsyncResult): ClientGlueProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): ClientGlueProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface ClientGlueSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    daemonVersion?: string
    lidIsClosed?: boolean
    lidIsPresent?: boolean
    onBattery?: boolean
}
class ClientGlueSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    daemonVersion: string
    lidIsClosed: boolean
    lidIsPresent: boolean
    onBattery: boolean
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
    /* Methods of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    callEnumerateDevices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callEnumerateDevicesFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevices */ string ]
    callEnumerateDevicesSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevices */ string ]
    callGetCriticalAction(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetCriticalActionFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAction */ string ]
    callGetCriticalActionSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAction */ string ]
    callGetDisplayDevice(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetDisplayDeviceFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevice */ string ]
    callGetDisplayDeviceSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevice */ string ]
    completeEnumerateDevices(invocation: Gio.DBusMethodInvocation, devices: string): void
    completeGetCriticalAction(invocation: Gio.DBusMethodInvocation, action: string): void
    completeGetDisplayDevice(invocation: Gio.DBusMethodInvocation, device: string): void
    emitDeviceAdded(argDevice: string): void
    emitDeviceRemoved(argDevice: string): void
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
    /* Signals of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    connect(sigName: "device-added", callback: ((argDevice: string) => void)): number
    on(sigName: "device-added", callback: (argDevice: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (argDevice: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (argDevice: string) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", argDevice: string): void
    connect(sigName: "device-removed", callback: ((argDevice: string) => void)): number
    on(sigName: "device-removed", callback: (argDevice: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (argDevice: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (argDevice: string) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", argDevice: string): void
    connect(sigName: "handle-enumerate-devices", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-enumerate-devices", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-enumerate-devices", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-enumerate-devices", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-critical-action", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-critical-action", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-critical-action", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-critical-action", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-critical-action", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-display-device", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-display-device", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-display-device", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-display-device", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-display-device", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::daemon-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lid-is-closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lid-is-present", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::on-battery", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ClientGlueSkeleton_ConstructProps)
    _init (config?: ClientGlueSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ClientGlueSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.Device */
    capacity?: number
    energy?: number
    energyEmpty?: number
    energyFull?: number
    energyFullDesign?: number
    energyRate?: number
    hasHistory?: boolean
    hasStatistics?: boolean
    iconName?: string
    isPresent?: boolean
    isRechargeable?: boolean
    kind?: number
    luminosity?: number
    model?: string
    nativePath?: string
    online?: boolean
    percentage?: number
    powerSupply?: boolean
    serial?: string
    state?: number
    technology?: number
    temperature?: number
    timeToEmpty?: number
    timeToFull?: number
    updateTime?: number
    vendor?: string
    voltage?: number
    warningLevel?: number
}
class Device {
    /* Properties of UPowerGlib-1.0.UPowerGlib.Device */
    capacity: number
    energy: number
    energyEmpty: number
    energyFull: number
    energyFullDesign: number
    energyRate: number
    hasHistory: boolean
    hasStatistics: boolean
    iconName: string
    isPresent: boolean
    isRechargeable: boolean
    kind: number
    luminosity: number
    model: string
    nativePath: string
    online: boolean
    percentage: number
    powerSupply: boolean
    serial: string
    state: number
    technology: number
    temperature: number
    timeToEmpty: number
    timeToFull: number
    updateTime: number
    vendor: string
    voltage: number
    warningLevel: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of UPowerGlib-1.0.UPowerGlib.Device */
    getHistorySync(type: string, timespec: number, resolution: number, cancellable?: Gio.Cancellable | null): HistoryItem[]
    getObjectPath(): string
    getStatisticsSync(type: string, cancellable?: Gio.Cancellable | null): StatsItem[]
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    setObjectPathSync(objectPath: string, cancellable?: Gio.Cancellable | null): boolean
    toText(): string
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
    connect(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-full-design", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-history", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-statistics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-present", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-rechargeable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::luminosity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::percentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::power-supply", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serial", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::technology", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::temperature", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-to-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-to-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::voltage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warning-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static new(): Device
    static kindFromString(type: string): DeviceKind
    static kindToString(typeEnum: DeviceKind): string
    static levelFromString(level: string): DeviceLevel
    static levelToString(levelEnum: DeviceLevel): string
    static stateFromString(state: string): DeviceState
    static stateToString(stateEnum: DeviceState): string
    static technologyFromString(technology: string): DeviceTechnology
    static technologyToString(technologyEnum: DeviceTechnology): string
    static $gtype: GObject.Type
}
interface DeviceGlueProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    capacity?: number
    energy?: number
    energyEmpty?: number
    energyFull?: number
    energyFullDesign?: number
    energyRate?: number
    hasHistory?: boolean
    hasStatistics?: boolean
    iconName?: string
    isPresent?: boolean
    isRechargeable?: boolean
    luminosity?: number
    model?: string
    nativePath?: string
    online?: boolean
    percentage?: number
    powerSupply?: boolean
    serial?: string
    state?: number
    technology?: number
    temperature?: number
    timeToEmpty?: number
    timeToFull?: number
    type?: number
    updateTime?: number
    vendor?: string
    voltage?: number
    warningLevel?: number
}
class DeviceGlueProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    capacity: number
    energy: number
    energyEmpty: number
    energyFull: number
    energyFullDesign: number
    energyRate: number
    hasHistory: boolean
    hasStatistics: boolean
    iconName: string
    isPresent: boolean
    isRechargeable: boolean
    luminosity: number
    model: string
    nativePath: string
    online: boolean
    percentage: number
    powerSupply: boolean
    serial: string
    state: number
    technology: number
    temperature: number
    timeToEmpty: number
    timeToFull: number
    type: number
    updateTime: number
    vendor: string
    voltage: number
    warningLevel: number
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
    /* Methods of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    callGetHistory(argType: string, argTimespan: number, argResolution: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetHistoryFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetHistorySync(argType: string, argTimespan: number, argResolution: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetStatistics(argType: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetStatisticsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetStatisticsSync(argType: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callRefresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callRefreshFinish(res: Gio.AsyncResult): boolean
    callRefreshSync(cancellable?: Gio.Cancellable | null): boolean
    completeGetHistory(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeGetStatistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeRefresh(invocation: Gio.DBusMethodInvocation): void
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
    /* Signals of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    connect(sigName: "handle-get-history", callback: ((invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => boolean)): number
    on(sigName: "handle-get-history", callback: (invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-history", callback: (invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-history", callback: (invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-history", invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number): void
    connect(sigName: "handle-get-statistics", callback: ((invocation: Gio.DBusMethodInvocation, argType: string) => boolean)): number
    on(sigName: "handle-get-statistics", callback: (invocation: Gio.DBusMethodInvocation, argType: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-statistics", callback: (invocation: Gio.DBusMethodInvocation, argType: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-statistics", callback: (invocation: Gio.DBusMethodInvocation, argType: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-statistics", invocation: Gio.DBusMethodInvocation, argType: string): void
    connect(sigName: "handle-refresh", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-refresh", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-refresh", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-refresh", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-refresh", invocation: Gio.DBusMethodInvocation): void
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
    connect(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-full-design", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-history", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-statistics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-present", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-rechargeable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::luminosity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::percentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::power-supply", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serial", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::technology", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::temperature", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-to-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-to-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::voltage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warning-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceGlueProxy_ConstructProps)
    _init (config?: DeviceGlueProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): DeviceGlueProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): DeviceGlueProxy
    static newForBusFinish(res: Gio.AsyncResult): DeviceGlueProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): DeviceGlueProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface DeviceGlueSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    capacity?: number
    energy?: number
    energyEmpty?: number
    energyFull?: number
    energyFullDesign?: number
    energyRate?: number
    hasHistory?: boolean
    hasStatistics?: boolean
    iconName?: string
    isPresent?: boolean
    isRechargeable?: boolean
    luminosity?: number
    model?: string
    nativePath?: string
    online?: boolean
    percentage?: number
    powerSupply?: boolean
    serial?: string
    state?: number
    technology?: number
    temperature?: number
    timeToEmpty?: number
    timeToFull?: number
    type?: number
    updateTime?: number
    vendor?: string
    voltage?: number
    warningLevel?: number
}
class DeviceGlueSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    capacity: number
    energy: number
    energyEmpty: number
    energyFull: number
    energyFullDesign: number
    energyRate: number
    hasHistory: boolean
    hasStatistics: boolean
    iconName: string
    isPresent: boolean
    isRechargeable: boolean
    luminosity: number
    model: string
    nativePath: string
    online: boolean
    percentage: number
    powerSupply: boolean
    serial: string
    state: number
    technology: number
    temperature: number
    timeToEmpty: number
    timeToFull: number
    type: number
    updateTime: number
    vendor: string
    voltage: number
    warningLevel: number
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
    /* Methods of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    callGetHistory(argType: string, argTimespan: number, argResolution: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetHistoryFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetHistorySync(argType: string, argTimespan: number, argResolution: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetStatistics(argType: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetStatisticsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetStatisticsSync(argType: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callRefresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callRefreshFinish(res: Gio.AsyncResult): boolean
    callRefreshSync(cancellable?: Gio.Cancellable | null): boolean
    completeGetHistory(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeGetStatistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeRefresh(invocation: Gio.DBusMethodInvocation): void
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
    /* Signals of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    connect(sigName: "handle-get-history", callback: ((invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => boolean)): number
    on(sigName: "handle-get-history", callback: (invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-history", callback: (invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-history", callback: (invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-history", invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number): void
    connect(sigName: "handle-get-statistics", callback: ((invocation: Gio.DBusMethodInvocation, argType: string) => boolean)): number
    on(sigName: "handle-get-statistics", callback: (invocation: Gio.DBusMethodInvocation, argType: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-statistics", callback: (invocation: Gio.DBusMethodInvocation, argType: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-statistics", callback: (invocation: Gio.DBusMethodInvocation, argType: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-statistics", invocation: Gio.DBusMethodInvocation, argType: string): void
    connect(sigName: "handle-refresh", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-refresh", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-refresh", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-refresh", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-refresh", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-full-design", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::energy-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-history", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-statistics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-present", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-rechargeable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::luminosity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::percentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::power-supply", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serial", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::technology", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::temperature", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-to-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time-to-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::voltage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warning-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceGlueSkeleton_ConstructProps)
    _init (config?: DeviceGlueSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceGlueSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface HistoryItem_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.HistoryItem */
    state?: number
    time?: number
    value?: number
}
class HistoryItem {
    /* Properties of UPowerGlib-1.0.UPowerGlib.HistoryItem */
    state: number
    time: number
    value: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of UPowerGlib-1.0.UPowerGlib.HistoryItem */
    getState(): DeviceState
    getTime(): number
    getValue(): number
    setFromString(text: string): boolean
    setState(state: DeviceState): void
    setTime(time: number): void
    setTimeToPresent(): void
    setValue(value: number): void
    toString(): string
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
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HistoryItem_ConstructProps)
    _init (config?: HistoryItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HistoryItem
    static $gtype: GObject.Type
}
interface StatsItem_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.StatsItem */
    accuracy?: number
    value?: number
}
class StatsItem {
    /* Properties of UPowerGlib-1.0.UPowerGlib.StatsItem */
    accuracy: number
    value: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of UPowerGlib-1.0.UPowerGlib.StatsItem */
    getAccuracy(): number
    getValue(): number
    setAccuracy(accuracy: number): void
    setValue(value: number): void
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
    connect(sigName: "notify::accuracy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StatsItem_ConstructProps)
    _init (config?: StatsItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StatsItem
    static $gtype: GObject.Type
}
interface WakeupItem_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.WakeupItem */
    cmdline?: string
    details?: string
    id?: number
    isUserspace?: boolean
    old?: number
    value?: number
}
class WakeupItem {
    /* Properties of UPowerGlib-1.0.UPowerGlib.WakeupItem */
    cmdline: string
    details: string
    id: number
    isUserspace: boolean
    old: number
    value: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of UPowerGlib-1.0.UPowerGlib.WakeupItem */
    getCmdline(): string
    getDetails(): string
    getId(): number
    getIsUserspace(): boolean
    getOld(): number
    getValue(): number
    setCmdline(cmdline: string): void
    setDetails(details: string): void
    setId(id: number): void
    setIsUserspace(isUserspace: boolean): void
    setOld(old: number): void
    setValue(value: number): void
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
    connect(sigName: "notify::cmdline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cmdline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cmdline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cmdline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cmdline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::details", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-userspace", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-userspace", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-userspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-userspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-userspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::old", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::old", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::old", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::old", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WakeupItem_ConstructProps)
    _init (config?: WakeupItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WakeupItem
    static $gtype: GObject.Type
}
interface Wakeups_ConstructProps extends GObject.Object_ConstructProps {
}
class Wakeups {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of UPowerGlib-1.0.UPowerGlib.Wakeups */
    getDataSync(cancellable?: Gio.Cancellable | null): WakeupItem[]
    getHasCapability(): boolean
    getPropertiesSync(cancellable?: Gio.Cancellable | null): boolean
    getTotalSync(cancellable?: Gio.Cancellable | null): number
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
    /* Signals of UPowerGlib-1.0.UPowerGlib.Wakeups */
    connect(sigName: "data-changed", callback: (() => void)): number
    on(sigName: "data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "data-changed"): void
    connect(sigName: "total-changed", callback: ((object: number) => void)): number
    on(sigName: "total-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "total-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "total-changed", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "total-changed", object: number): void
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
    constructor (config?: Wakeups_ConstructProps)
    _init (config?: Wakeups_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Wakeups
    static $gtype: GObject.Type
}
interface WakeupsGlueProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    hasCapability?: boolean
}
class WakeupsGlueProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    hasCapability: boolean
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
    /* Methods of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    callGetData(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetDataFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetDataSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetTotal(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetTotalFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outValue */ number ]
    callGetTotalSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outValue */ number ]
    completeGetData(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeGetTotal(invocation: Gio.DBusMethodInvocation, value: number): void
    emitDataChanged(): void
    emitTotalChanged(argValue: number): void
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
    /* Signals of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    connect(sigName: "data-changed", callback: (() => void)): number
    on(sigName: "data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "data-changed"): void
    connect(sigName: "handle-get-data", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-data", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-data", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-data", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-data", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-total", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-total", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-total", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-total", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-total", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "total-changed", callback: ((argValue: number) => void)): number
    on(sigName: "total-changed", callback: (argValue: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "total-changed", callback: (argValue: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "total-changed", callback: (argValue: number) => void): NodeJS.EventEmitter
    emit(sigName: "total-changed", argValue: number): void
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
    connect(sigName: "notify::has-capability", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-capability", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WakeupsGlueProxy_ConstructProps)
    _init (config?: WakeupsGlueProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): WakeupsGlueProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): WakeupsGlueProxy
    static newForBusFinish(res: Gio.AsyncResult): WakeupsGlueProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): WakeupsGlueProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface WakeupsGlueSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    hasCapability?: boolean
}
class WakeupsGlueSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    hasCapability: boolean
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
    /* Methods of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    callGetData(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetDataFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetDataSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    callGetTotal(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetTotalFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outValue */ number ]
    callGetTotalSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outValue */ number ]
    completeGetData(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    completeGetTotal(invocation: Gio.DBusMethodInvocation, value: number): void
    emitDataChanged(): void
    emitTotalChanged(argValue: number): void
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
    /* Signals of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    connect(sigName: "data-changed", callback: (() => void)): number
    on(sigName: "data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "data-changed"): void
    connect(sigName: "handle-get-data", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-data", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-data", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-data", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-data", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-total", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-total", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-total", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-total", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-total", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "total-changed", callback: ((argValue: number) => void)): number
    on(sigName: "total-changed", callback: (argValue: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "total-changed", callback: (argValue: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "total-changed", callback: (argValue: number) => void): NodeJS.EventEmitter
    emit(sigName: "total-changed", argValue: number): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-capability", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-capability", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WakeupsGlueSkeleton_ConstructProps)
    _init (config?: WakeupsGlueSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WakeupsGlueSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.ClientClass */
    readonly parentClass: GObject.ObjectClass
    readonly deviceAdded: (client: Client, device: Device) => void
    readonly deviceRemoved: (client: Client, objectPath: string) => void
    static name: string
}
abstract class ClientGlueIface {
    /* Fields of UPowerGlib-1.0.UPowerGlib.ClientGlueIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleEnumerateDevices: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    readonly handleGetCriticalAction: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    readonly handleGetDisplayDevice: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    readonly getDaemonVersion: (object: ClientGlue) => string
    readonly getLidIsClosed: (object: ClientGlue) => boolean
    readonly getLidIsPresent: (object: ClientGlue) => boolean
    readonly getOnBattery: (object: ClientGlue) => boolean
    readonly deviceAdded: (object: ClientGlue, argDevice: string) => void
    readonly deviceRemoved: (object: ClientGlue, argDevice: string) => void
    static name: string
}
abstract class ClientGlueProxyClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.ClientGlueProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class ClientGlueProxyPrivate {
    static name: string
}
abstract class ClientGlueSkeletonClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.ClientGlueSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class ClientGlueSkeletonPrivate {
    static name: string
}
class ClientPrivate {
    static name: string
}
abstract class DeviceClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.DeviceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class DeviceGlueIface {
    /* Fields of UPowerGlib-1.0.UPowerGlib.DeviceGlueIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleGetHistory: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => boolean
    readonly handleGetStatistics: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation, argType: string) => boolean
    readonly handleRefresh: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation) => boolean
    readonly getCapacity: (object: DeviceGlue) => number
    readonly getEnergy: (object: DeviceGlue) => number
    readonly getEnergyEmpty: (object: DeviceGlue) => number
    readonly getEnergyFull: (object: DeviceGlue) => number
    readonly getEnergyFullDesign: (object: DeviceGlue) => number
    readonly getEnergyRate: (object: DeviceGlue) => number
    readonly getHasHistory: (object: DeviceGlue) => boolean
    readonly getHasStatistics: (object: DeviceGlue) => boolean
    readonly getIconName: (object: DeviceGlue) => string
    readonly getIsPresent: (object: DeviceGlue) => boolean
    readonly getIsRechargeable: (object: DeviceGlue) => boolean
    readonly getLuminosity: (object: DeviceGlue) => number
    readonly getModel: (object: DeviceGlue) => string
    readonly getNativePath: (object: DeviceGlue) => string
    readonly getOnline: (object: DeviceGlue) => boolean
    readonly getPercentage: (object: DeviceGlue) => number
    readonly getPowerSupply: (object: DeviceGlue) => boolean
    readonly getSerial: (object: DeviceGlue) => string
    readonly getState: (object: DeviceGlue) => number
    readonly getTechnology: (object: DeviceGlue) => number
    readonly getTemperature: (object: DeviceGlue) => number
    readonly getTimeToEmpty: (object: DeviceGlue) => number
    readonly getTimeToFull: (object: DeviceGlue) => number
    readonly getType: (object: DeviceGlue) => number
    readonly getUpdateTime: (object: DeviceGlue) => number
    readonly getVendor: (object: DeviceGlue) => string
    readonly getVoltage: (object: DeviceGlue) => number
    readonly getWarningLevel: (object: DeviceGlue) => number
    static name: string
}
abstract class DeviceGlueProxyClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.DeviceGlueProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class DeviceGlueProxyPrivate {
    static name: string
}
abstract class DeviceGlueSkeletonClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.DeviceGlueSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class DeviceGlueSkeletonPrivate {
    static name: string
}
class DevicePrivate {
    static name: string
}
abstract class HistoryItemClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.HistoryItemClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class HistoryItemPrivate {
    static name: string
}
abstract class StatsItemClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.StatsItemClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class StatsItemPrivate {
    static name: string
}
abstract class WakeupItemClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.WakeupItemClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class WakeupItemPrivate {
    static name: string
}
abstract class WakeupsClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.WakeupsClass */
    readonly parentClass: GObject.ObjectClass
    readonly dataChanged: (wakeups: Wakeups) => void
    readonly totalChanged: (wakeups: Wakeups, value: number) => void
    static name: string
}
abstract class WakeupsGlueIface {
    /* Fields of UPowerGlib-1.0.UPowerGlib.WakeupsGlueIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleGetData: (object: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean
    readonly handleGetTotal: (object: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean
    readonly getHasCapability: (object: WakeupsGlue) => boolean
    readonly dataChanged: (object: WakeupsGlue) => void
    readonly totalChanged: (object: WakeupsGlue, argValue: number) => void
    static name: string
}
abstract class WakeupsGlueProxyClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.WakeupsGlueProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class WakeupsGlueProxyPrivate {
    static name: string
}
abstract class WakeupsGlueSkeletonClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.WakeupsGlueSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class WakeupsGlueSkeletonPrivate {
    static name: string
}
class WakeupsPrivate {
    static name: string
}
}
export default UPowerGlib;