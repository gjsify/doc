/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUsb-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GUsb {

enum ContextError {
    CONTEXT_ERROR_INTERNAL,
}
enum DeviceClassCode {
    INTERFACE_DESC,
    AUDIO,
    COMMUNICATIONS,
    HID,
    PHYSICAL,
    IMAGE,
    PRINTER,
    MASS_STORAGE,
    HUB,
    CDC_DATA,
    SMART_CARD,
    CONTENT_SECURITY,
    VIDEO,
    PERSONAL_HEALTHCARE,
    AUDIO_VIDEO,
    BILLBOARD,
    DIAGNOSTIC,
    WIRELESS_CONTROLLER,
    MISCELLANEOUS,
    APPLICATION_SPECIFIC,
    VENDOR_SPECIFIC,
}
enum DeviceDirection {
    DEVICE_TO_HOST,
    HOST_TO_DEVICE,
}
enum DeviceError {
    INTERNAL,
    IO,
    TIMED_OUT,
    NOT_SUPPORTED,
    NO_DEVICE,
    NOT_OPEN,
    ALREADY_OPEN,
    CANCELLED,
    FAILED,
    PERMISSION_DENIED,
    LAST,
}
enum DeviceLangid {
    INVALID,
    ENGLISH_UNITED_STATES,
}
enum DeviceRecipient {
    DEVICE,
    INTERFACE,
    ENDPOINT,
    OTHER,
}
enum DeviceRequestType {
    STANDARD,
    CLASS,
    VENDOR,
    RESERVED,
}
enum SourceError {
    SOURCE_ERROR_INTERNAL,
}
enum ContextFlags {
    NONE,
    AUTO_OPEN_DEVICES,
}
enum DeviceClaimInterfaceFlags {
    NONE,
    BIND_KERNEL_DRIVER,
}
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
function sourceErrorQuark(): GLib.Quark
function strerror(errorCode: number): string
function versionString(): string
interface Context_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUsb-1.0.GUsb.Context */
    debugLevel?: number
}
class Context {
    /* Properties of GUsb-1.0.GUsb.Context */
    debugLevel: number
    readonly libusbContext: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUsb-1.0.GUsb.Context */
    enumerate(): void
    findByBusAddress(bus: number, address: number): Device
    findByPlatformId(platformId: string): Device
    findByVidPid(vid: number, pid: number): Device
    getDevices(): Device[]
    getFlags(): ContextFlags
    getHotplugPollInterval(): number
    getMainContext(): GLib.MainContext
    getSource(mainCtx: GLib.MainContext): Source
    setDebug(flags: GLib.LogLevelFlags): void
    setFlags(flags: ContextFlags): void
    setHotplugPollInterval(hotplugPollInterval: number): void
    setMainContext(mainCtx: GLib.MainContext): void
    waitForReplug(device: Device, timeoutMs: number): Device
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
    /* Signals of GUsb-1.0.GUsb.Context */
    connect(sigName: "device-added", callback: ((device: Device) => void)): number
    on(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", device: Device): void
    connect(sigName: "device-removed", callback: ((device: Device) => void)): number
    on(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", device: Device): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::debug-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::debug-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::debug-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::debug-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::libusb-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::libusb-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::libusb-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::libusb-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::libusb-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(): Context
    static errorQuark(): GLib.Quark
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUsb-1.0.GUsb.Device */
    context?: Context
    libusbDevice?: object
    platformId?: string
}
class Device {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUsb-1.0.GUsb.Device */
    bulkTransfer(endpoint: number, data: Uint8Array, timeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* actualLength */ number | null ]
    bulkTransferAsync(endpoint: number, data: Uint8Array, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    bulkTransferFinish(res: Gio.AsyncResult): number
    claimInterface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
    close(): boolean
    controlTransfer(direction: DeviceDirection, requestType: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: Uint8Array, timeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* actualLength */ number | null ]
    controlTransferAsync(direction: DeviceDirection, requestType: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: Uint8Array, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    controlTransferFinish(res: Gio.AsyncResult): number
    getAddress(): number
    getBus(): number
    getChildren(): Device[]
    getConfiguration(): number
    getConfigurationIndex(): number
    getCustomIndex(classId: number, subclassId: number, protocolId: number): number
    getDeviceClass(): number
    getDeviceProtocol(): number
    getDeviceSubclass(): number
    getInterface(classId: number, subclassId: number, protocolId: number): Interface
    getInterfaces(): Interface[]
    getManufacturerIndex(): number
    getParent(): Device
    getPid(): number
    getPidAsStr(): string
    getPlatformId(): string
    getPortNumber(): number
    getProductIndex(): number
    getRelease(): number
    getSerialNumberIndex(): number
    getSpec(): number
    getStringDescriptor(descIndex: number): string
    getStringDescriptorBytes(descIndex: number, langid: number): any
    getStringDescriptorBytesFull(descIndex: number, langid: number, length: number): any
    getVid(): number
    getVidAsStr(): string
    interruptTransfer(endpoint: number, data: Uint8Array, timeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* actualLength */ number | null ]
    interruptTransferAsync(endpoint: number, data: Uint8Array, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    interruptTransferFinish(res: Gio.AsyncResult): number
    open(): boolean
    releaseInterface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
    reset(): boolean
    setConfiguration(configuration: number): boolean
    setInterfaceAlt(interface: number, alt: number): boolean
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
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceList_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUsb-1.0.GUsb.DeviceList */
    context?: Context
}
class DeviceList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUsb-1.0.GUsb.DeviceList */
    coldplug(): void
    findByBusAddress(bus: number, address: number): Device
    findByVidPid(vid: number, pid: number): Device
    getDevices(): Device[]
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
    /* Signals of GUsb-1.0.GUsb.DeviceList */
    connect(sigName: "device-added", callback: ((device: Device) => void)): number
    on(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", device: Device): void
    connect(sigName: "device-removed", callback: ((device: Device) => void)): number
    on(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", device: Device): void
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
    constructor (config?: DeviceList_ConstructProps)
    _init (config?: DeviceList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context): DeviceList
    static $gtype: GObject.Type
}
interface Endpoint_ConstructProps extends GObject.Object_ConstructProps {
}
class Endpoint {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUsb-1.0.GUsb.Endpoint */
    getAddress(): number
    getDirection(): DeviceDirection
    getExtra(): any
    getKind(): number
    getMaximumPacketSize(): number
    getNumber(): number
    getPollingInterval(): number
    getRefresh(): number
    getSynchAddress(): number
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
    constructor (config?: Endpoint_ConstructProps)
    _init (config?: Endpoint_ConstructProps): void
    static $gtype: GObject.Type
}
interface Interface_ConstructProps extends GObject.Object_ConstructProps {
}
class Interface {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUsb-1.0.GUsb.Interface */
    getAlternate(): number
    getClass(): number
    getEndpoints(): Endpoint[]
    getExtra(): any
    getIndex(): number
    getKind(): number
    getLength(): number
    getNumber(): number
    getProtocol(): number
    getSubclass(): number
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
    constructor (config?: Interface_ConstructProps)
    _init (config?: Interface_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ContextClass {
    /* Fields of GUsb-1.0.GUsb.ContextClass */
    readonly parentClass: GObject.ObjectClass
    readonly deviceAdded: (context: Context, device: Device) => void
    readonly deviceRemoved: (context: Context, device: Device) => void
    static name: string
}
class ContextPrivate {
    static name: string
}
abstract class DeviceClass {
    /* Fields of GUsb-1.0.GUsb.DeviceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class DeviceListClass {
    /* Fields of GUsb-1.0.GUsb.DeviceListClass */
    readonly parentClass: GObject.ObjectClass
    readonly deviceAdded: (list: DeviceList, device: Device) => void
    readonly deviceRemoved: (list: DeviceList, device: Device) => void
    static name: string
}
class DeviceListPrivate {
    static name: string
}
class DevicePrivate {
    static name: string
}
abstract class EndpointClass {
    /* Fields of GUsb-1.0.GUsb.EndpointClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class InterfaceClass {
    /* Fields of GUsb-1.0.GUsb.InterfaceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class Source {
    /* Methods of GUsb-1.0.GUsb.Source */
    setCallback(func: GLib.SourceFunc): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
}
export default GUsb;