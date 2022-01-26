/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GSSDP-1.2
 */

import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GSSDP {

enum Error {
    NO_IP_ADDRESS,
    FAILED,
}
enum UDAVersion {
    VERSION_UNSPECIFIED,
    VERSION_1_0,
    VERSION_1_1,
}
const ALL_RESOURCES: string
function errorQuark(): GLib.Quark
interface Client_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GSSDP-1.2.GSSDP.Client */
    active?: boolean
    addressFamily?: Gio.SocketFamily
    bootId?: number
    configId?: number
    hostIp?: string
    hostMask?: Gio.InetAddressMask
    interface?: string
    msearchPort?: number
    network?: string
    serverId?: string
    socketTtl?: number
    udaVersion?: UDAVersion
}
class Client {
    /* Properties of GSSDP-1.2.GSSDP.Client */
    active: boolean
    bootId: number
    configId: number
    hostIp: string
    hostMask: Gio.InetAddressMask
    network: string
    serverId: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GSSDP-1.2.GSSDP.Client */
    addCacheEntry(ipAddress: string, userAgent: string): void
    appendHeader(name: string, value?: string | null): void
    canReach(address: Gio.InetSocketAddress): boolean
    clearHeaders(): void
    getActive(): boolean
    getAddress(): Gio.InetAddress
    getAddressMask(): Gio.InetAddressMask
    getFamily(): Gio.SocketFamily
    getHostIp(): string
    getIndex(): number
    getInterface(): string
    getNetwork(): string
    getServerId(): string
    getUdaVersion(): UDAVersion
    guessUserAgent(ipAddress: string): string
    removeHeader(name: string): void
    setBootId(bootId: number): void
    setConfigId(configId: number): void
    setNetwork(network: string): void
    setServerId(serverId: string): void
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
    /* Signals of GSSDP-1.2.GSSDP.Client */
    connect(sigName: "message-received", callback: ((fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void)): number
    on(sigName: "message-received", callback: (fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message-received", callback: (fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message-received", callback: (fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void): NodeJS.EventEmitter
    emit(sigName: "message-received", fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::boot-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::boot-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::boot-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::boot-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::boot-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::config-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::config-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::config-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::config-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host-ip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-ip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host-mask", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-mask", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(iface?: string | null): Client
    static newWithPort(iface: string | null, msearchPort: number): Client
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ResourceBrowser_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GSSDP-1.2.GSSDP.ResourceBrowser */
    active?: boolean
    client?: Client
    mx?: number
    target?: string
}
class ResourceBrowser {
    /* Properties of GSSDP-1.2.GSSDP.ResourceBrowser */
    active: boolean
    mx: number
    target: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GSSDP-1.2.GSSDP.ResourceBrowser */
    getActive(): boolean
    getClient(): Client
    getMx(): number
    getTarget(): string
    rescan(): boolean
    setActive(active: boolean): void
    setMx(mx: number): void
    setTarget(target: string): void
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
    /* Signals of GSSDP-1.2.GSSDP.ResourceBrowser */
    connect(sigName: "resource-available", callback: ((usn: string, locations: string[]) => void)): number
    on(sigName: "resource-available", callback: (usn: string, locations: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-available", callback: (usn: string, locations: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-available", callback: (usn: string, locations: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "resource-available", usn: string, locations: string[]): void
    connect(sigName: "resource-unavailable", callback: ((usn: string) => void)): number
    on(sigName: "resource-unavailable", callback: (usn: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-unavailable", callback: (usn: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-unavailable", callback: (usn: string) => void): NodeJS.EventEmitter
    emit(sigName: "resource-unavailable", usn: string): void
    connect(sigName: "resource-update", callback: ((usn: string, bootId: number, nextBootId: number) => void)): number
    on(sigName: "resource-update", callback: (usn: string, bootId: number, nextBootId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-update", callback: (usn: string, bootId: number, nextBootId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-update", callback: (usn: string, bootId: number, nextBootId: number) => void): NodeJS.EventEmitter
    emit(sigName: "resource-update", usn: string, bootId: number, nextBootId: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mx", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mx", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ResourceBrowser_ConstructProps)
    _init (config?: ResourceBrowser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(client: Client, target: string): ResourceBrowser
    static $gtype: GObject.Type
}
interface ResourceGroup_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GSSDP-1.2.GSSDP.ResourceGroup */
    available?: boolean
    client?: Client
    maxAge?: number
    messageDelay?: number
}
class ResourceGroup {
    /* Properties of GSSDP-1.2.GSSDP.ResourceGroup */
    available: boolean
    maxAge: number
    messageDelay: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GSSDP-1.2.GSSDP.ResourceGroup */
    addResource(target: string, usn: string, locations: string[]): number
    addResourceSimple(target: string, usn: string, location: string): number
    getAvailable(): boolean
    getClient(): Client
    getMaxAge(): number
    getMessageDelay(): number
    removeResource(resourceId: number): void
    setAvailable(available: boolean): void
    setMaxAge(maxAge: number): void
    setMessageDelay(messageDelay: number): void
    update(newBootId: number): void
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
    connect(sigName: "notify::available", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-age", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-age", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ResourceGroup_ConstructProps)
    _init (config?: ResourceGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(client: Client): ResourceGroup
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of GSSDP-1.2.GSSDP.ClientClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ResourceBrowserClass {
    /* Fields of GSSDP-1.2.GSSDP.ResourceBrowserClass */
    readonly parentClass: GObject.ObjectClass
    readonly resourceUpdate: (resourceBrowser: ResourceBrowser, usn: string, bootId: number, nextBootId: number) => void
    readonly resourceUnavailable: (resourceBrowser: ResourceBrowser, usn: string) => void
    static name: string
}
abstract class ResourceGroupClass {
    /* Fields of GSSDP-1.2.GSSDP.ResourceGroupClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
}
export default GSSDP;