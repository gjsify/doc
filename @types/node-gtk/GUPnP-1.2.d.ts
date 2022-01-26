/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnP-1.2
 */

import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GSSDP from './GSSDP-1.2';

export namespace GUPnP {

enum ControlError {
    INVALID_ACTION,
    INVALID_ARGS,
    OUT_OF_SYNC,
    ACTION_FAILED,
}
enum EventingError {
    SUBSCRIPTION_FAILED,
    SUBSCRIPTION_LOST,
    NOTIFY_FAILED,
}
enum RootdeviceError {
    NO_CONTEXT,
    NO_DESCRIPTION_PATH,
    NO_DESCRIPTION_FOLDER,
    NO_NETWORK,
    FAIL,
}
enum ServerError {
    INTERNAL_SERVER_ERROR,
    NOT_FOUND,
    NOT_IMPLEMENTED,
    INVALID_RESPONSE,
    INVALID_URL,
    OTHER,
}
enum ServiceActionArgDirection {
    IN,
    OUT,
}
enum XMLError {
    PARSE,
    NO_NODE,
    EMPTY_NODE,
    INVALID_ATTRIBUTE,
    OTHER,
}
function controlErrorQuark(): GLib.Quark
function eventingErrorQuark(): GLib.Quark
function getUuid(): string
function rootdeviceErrorQuark(): GLib.Quark
function serverErrorQuark(): GLib.Quark
function whiteListAddEntry(whiteList: WhiteList, entry: string): boolean
function whiteListAddEntryv(whiteList: WhiteList, entries: string[]): void
function whiteListCheckContext(whiteList: WhiteList, context: Context): boolean
function whiteListClear(whiteList: WhiteList): void
function whiteListGetEnabled(whiteList: WhiteList): boolean
function whiteListGetEntries(whiteList: WhiteList): string[] | null
function whiteListIsEmpty(whiteList: WhiteList): boolean
function whiteListNew(): WhiteList
function whiteListRemoveEntry(whiteList: WhiteList, entry: string): boolean
function whiteListSetEnabled(whiteList: WhiteList, enable: boolean): void
function xmlErrorQuark(): GLib.Quark
interface ServiceIntrospectionCallback {
    (info: ServiceInfo, introspection?: ServiceIntrospection | null, error?: GLib.Error | null): void
}
interface ServiceProxyActionCallback {
    (proxy: ServiceProxy, action: ServiceProxyAction): void
}
interface ServiceProxyNotifyCallback {
    (proxy: ServiceProxy, variable: string, value: any): void
}
class Acl {
    /* Methods of GUPnP-1.2.GUPnP.Acl */
    canSync(): boolean
    isAllowed(device: object | null, service: object | null, path: string, address: string, agent?: string | null): boolean
    isAllowedAsync(device: object | null, service: object | null, path: string, address: string, agent?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    isAllowedFinish(res: Gio.AsyncResult): boolean
    static name: string
}
interface Context_ConstructProps extends GSSDP.Client_ConstructProps {
    /* Constructor properties of GUPnP-1.2.GUPnP.Context */
    acl?: Acl
    defaultLanguage?: string
    port?: number
    subscriptionTimeout?: number
}
class Context {
    /* Properties of GUPnP-1.2.GUPnP.Context */
    acl: Acl
    defaultLanguage: string
    readonly server: Soup.Server
    readonly session: Soup.Session
    /* Properties of GSSDP-1.2.GSSDP.Client */
    active: boolean
    bootId: number
    configId: number
    hostIp: string
    hostMask: Gio.InetAddressMask
    network: string
    serverId: string
    /* Fields of GSSDP-1.2.GSSDP.Client */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.Context */
    addServerHandler(useAcl: boolean, path: string, callback: Soup.ServerCallback): void
    getAcl(): Acl
    getDefaultLanguage(): string
    getPort(): number
    getServer(): Soup.Server
    getSession(): Soup.Session
    getSubscriptionTimeout(): number
    hostPath(localPath: string, serverPath: string): void
    hostPathForAgent(localPath: string, serverPath: string, userAgent: GLib.Regex): boolean
    removeServerHandler(path: string): void
    rewriteUri(uri: string): string
    setAcl(acl?: Acl | null): void
    setDefaultLanguage(language: string): void
    setSubscriptionTimeout(timeout: number): void
    unhostPath(serverPath: string): void
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
    getUdaVersion(): GSSDP.UDAVersion
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
    connect(sigName: "notify::acl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::acl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::acl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::acl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-language", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-language", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::session", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(iface: string | null, port: number): Context
    /* Function overloads */
    static new(iface?: string | null): Context
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ContextFilter_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.2.GUPnP.ContextFilter */
    enabled?: boolean
    entries?: string[]
}
class ContextFilter {
    /* Properties of GUPnP-1.2.GUPnP.ContextFilter */
    enabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.ContextFilter */
    addEntry(entry: string): boolean
    addEntryv(entries: string[]): void
    checkContext(context: Context): boolean
    clear(): void
    getEnabled(): boolean
    getEntries(): string[] | null
    isEmpty(): boolean
    removeEntry(entry: string): boolean
    setEnabled(enable: boolean): void
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
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContextFilter_ConstructProps)
    _init (config?: ContextFilter_ConstructProps): void
    static $gtype: GObject.Type
}
interface ContextManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.2.GUPnP.ContextManager */
    family?: Gio.SocketFamily
    port?: number
    udaVersion?: GSSDP.UDAVersion
}
class ContextManager {
    /* Properties of GUPnP-1.2.GUPnP.ContextManager */
    readonly contextFilter: ContextFilter
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.ContextManager */
    getContextFilter(): ContextFilter
    getPort(): number
    getSocketFamily(): Gio.SocketFamily
    getUdaVersion(): GSSDP.UDAVersion
    getWhiteList(): WhiteList
    manageControlPoint(controlPoint: ControlPoint): void
    manageRootDevice(rootDevice: RootDevice): void
    rescanControlPoints(): void
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
    /* Signals of GUPnP-1.2.GUPnP.ContextManager */
    connect(sigName: "context-available", callback: ((context: Context) => void)): number
    on(sigName: "context-available", callback: (context: Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-available", callback: (context: Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-available", callback: (context: Context) => void): NodeJS.EventEmitter
    emit(sigName: "context-available", context: Context): void
    connect(sigName: "context-unavailable", callback: ((context: Context) => void)): number
    on(sigName: "context-unavailable", callback: (context: Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-unavailable", callback: (context: Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-unavailable", callback: (context: Context) => void): NodeJS.EventEmitter
    emit(sigName: "context-unavailable", context: Context): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::context-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::context-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::context-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::context-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContextManager_ConstructProps)
    _init (config?: ContextManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(port: number): ContextManager
    static createFull(udaVersion: GSSDP.UDAVersion, family: Gio.SocketFamily, port: number): ContextManager
    static $gtype: GObject.Type
}
interface ControlPoint_ConstructProps extends GSSDP.ResourceBrowser_ConstructProps {
    /* Constructor properties of GUPnP-1.2.GUPnP.ControlPoint */
    resourceFactory?: ResourceFactory
}
class ControlPoint {
    /* Properties of GSSDP-1.2.GSSDP.ResourceBrowser */
    active: boolean
    mx: number
    target: string
    /* Fields of GSSDP-1.2.GSSDP.ResourceBrowser */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.ControlPoint */
    getContext(): Context
    getResourceFactory(): ResourceFactory
    listDeviceProxies(): DeviceProxy[]
    listServiceProxies(): ServiceProxy[]
    /* Methods of GSSDP-1.2.GSSDP.ResourceBrowser */
    getActive(): boolean
    getClient(): GSSDP.Client
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
    /* Signals of GUPnP-1.2.GUPnP.ControlPoint */
    connect(sigName: "device-proxy-available", callback: ((proxy: DeviceProxy) => void)): number
    on(sigName: "device-proxy-available", callback: (proxy: DeviceProxy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-proxy-available", callback: (proxy: DeviceProxy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-proxy-available", callback: (proxy: DeviceProxy) => void): NodeJS.EventEmitter
    emit(sigName: "device-proxy-available", proxy: DeviceProxy): void
    connect(sigName: "device-proxy-unavailable", callback: ((proxy: DeviceProxy) => void)): number
    on(sigName: "device-proxy-unavailable", callback: (proxy: DeviceProxy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-proxy-unavailable", callback: (proxy: DeviceProxy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-proxy-unavailable", callback: (proxy: DeviceProxy) => void): NodeJS.EventEmitter
    emit(sigName: "device-proxy-unavailable", proxy: DeviceProxy): void
    connect(sigName: "service-proxy-available", callback: ((proxy: ServiceProxy) => void)): number
    on(sigName: "service-proxy-available", callback: (proxy: ServiceProxy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-proxy-available", callback: (proxy: ServiceProxy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-proxy-available", callback: (proxy: ServiceProxy) => void): NodeJS.EventEmitter
    emit(sigName: "service-proxy-available", proxy: ServiceProxy): void
    connect(sigName: "service-proxy-unavailable", callback: ((proxy: ServiceProxy) => void)): number
    on(sigName: "service-proxy-unavailable", callback: (proxy: ServiceProxy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-proxy-unavailable", callback: (proxy: ServiceProxy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-proxy-unavailable", callback: (proxy: ServiceProxy) => void): NodeJS.EventEmitter
    emit(sigName: "service-proxy-unavailable", proxy: ServiceProxy): void
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
    constructor (config?: ControlPoint_ConstructProps)
    _init (config?: ControlPoint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context, target: string): ControlPoint
    /* Function overloads */
    static new(client: GSSDP.Client, target: string): ControlPoint
    static newFull(context: Context, factory: ResourceFactory, target: string): ControlPoint
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends DeviceInfo_ConstructProps {
    /* Constructor properties of GUPnP-1.2.GUPnP.Device */
    rootDevice?: RootDevice
}
class Device {
    /* Properties of GUPnP-1.2.GUPnP.DeviceInfo */
    document: XMLDoc
    element: object
    location: string
    urlBase: Soup.URI
    /* Fields of GUPnP-1.2.GUPnP.DeviceInfo */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.DeviceInfo */
    getContext(): Context
    getDescriptionValue(element: string): string | null
    getDevice(type: string): DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string | null, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    getLocation(): string
    getManufacturer(): string | null
    getManufacturerUrl(): string | null
    getModelDescription(): string | null
    getModelName(): string | null
    getModelNumber(): string | null
    getModelUrl(): string | null
    getPresentationUrl(): string | null
    getResourceFactory(): ResourceFactory
    getSerialNumber(): string | null
    getService(type: string): ServiceInfo | null
    getUdn(): string
    getUpc(): string | null
    getUrlBase(): Soup.URI
    listDeviceTypes(): string[] | null
    listDevices(): DeviceInfo[] | null
    listDlnaCapabilities(): string[] | null
    listDlnaDeviceClassIdentifier(): string[] | null
    listServiceTypes(): string[] | null
    listServices(): ServiceInfo[] | null
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
    connect(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
interface DeviceInfo_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.2.GUPnP.DeviceInfo */
    context?: Context
    deviceType?: string
    document?: XMLDoc
    element?: object
    location?: string
    resourceFactory?: ResourceFactory
    udn?: string
    urlBase?: Soup.URI
}
class DeviceInfo {
    /* Properties of GUPnP-1.2.GUPnP.DeviceInfo */
    document: XMLDoc
    element: object
    location: string
    urlBase: Soup.URI
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.DeviceInfo */
    getContext(): Context
    getDescriptionValue(element: string): string | null
    getDevice(type: string): DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string | null, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    getLocation(): string
    getManufacturer(): string | null
    getManufacturerUrl(): string | null
    getModelDescription(): string | null
    getModelName(): string | null
    getModelNumber(): string | null
    getModelUrl(): string | null
    getPresentationUrl(): string | null
    getResourceFactory(): ResourceFactory
    getSerialNumber(): string | null
    getService(type: string): ServiceInfo | null
    getUdn(): string
    getUpc(): string | null
    getUrlBase(): Soup.URI
    listDeviceTypes(): string[] | null
    listDevices(): DeviceInfo[] | null
    listDlnaCapabilities(): string[] | null
    listDlnaDeviceClassIdentifier(): string[] | null
    listServiceTypes(): string[] | null
    listServices(): ServiceInfo[] | null
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
    connect(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceInfo_ConstructProps)
    _init (config?: DeviceInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface DeviceProxy_ConstructProps extends DeviceInfo_ConstructProps {
}
class DeviceProxy {
    /* Properties of GUPnP-1.2.GUPnP.DeviceInfo */
    document: XMLDoc
    element: object
    location: string
    urlBase: Soup.URI
    /* Fields of GUPnP-1.2.GUPnP.DeviceInfo */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.DeviceInfo */
    getContext(): Context
    getDescriptionValue(element: string): string | null
    getDevice(type: string): DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string | null, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    getLocation(): string
    getManufacturer(): string | null
    getManufacturerUrl(): string | null
    getModelDescription(): string | null
    getModelName(): string | null
    getModelNumber(): string | null
    getModelUrl(): string | null
    getPresentationUrl(): string | null
    getResourceFactory(): ResourceFactory
    getSerialNumber(): string | null
    getService(type: string): ServiceInfo | null
    getUdn(): string
    getUpc(): string | null
    getUrlBase(): Soup.URI
    listDeviceTypes(): string[] | null
    listDevices(): DeviceInfo[] | null
    listDlnaCapabilities(): string[] | null
    listDlnaDeviceClassIdentifier(): string[] | null
    listServiceTypes(): string[] | null
    listServices(): ServiceInfo[] | null
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
    connect(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceProxy_ConstructProps)
    _init (config?: DeviceProxy_ConstructProps): void
    static $gtype: GObject.Type
}
interface ResourceFactory_ConstructProps extends GObject.Object_ConstructProps {
}
class ResourceFactory {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.ResourceFactory */
    registerResourceProxyType(upnpType: string, type: GObject.Type): void
    registerResourceType(upnpType: string, type: GObject.Type): void
    unregisterResourceProxyType(upnpType: string): boolean
    unregisterResourceType(upnpType: string): boolean
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
    constructor (config?: ResourceFactory_ConstructProps)
    _init (config?: ResourceFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ResourceFactory
    static getDefault(): ResourceFactory
    static $gtype: GObject.Type
}
interface RootDevice_ConstructProps extends Device_ConstructProps {
    /* Constructor properties of GUPnP-1.2.GUPnP.RootDevice */
    available?: boolean
    descriptionDir?: string
    descriptionDoc?: XMLDoc
    descriptionPath?: string
}
class RootDevice {
    /* Properties of GUPnP-1.2.GUPnP.RootDevice */
    available: boolean
    /* Properties of GUPnP-1.2.GUPnP.DeviceInfo */
    document: XMLDoc
    element: object
    location: string
    urlBase: Soup.URI
    /* Fields of GUPnP-1.2.GUPnP.Device */
    readonly parentInstance: DeviceInfo
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.RootDevice */
    getAvailable(): boolean
    getDescriptionDir(): string
    getDescriptionDocumentName(): string
    getDescriptionPath(): string
    getRelativeLocation(): string
    getSsdpResourceGroup(): GSSDP.ResourceGroup
    setAvailable(available: boolean): void
    /* Methods of GUPnP-1.2.GUPnP.DeviceInfo */
    getContext(): Context
    getDescriptionValue(element: string): string | null
    getDevice(type: string): DeviceInfo | null
    getDeviceType(): string
    getFriendlyName(): string
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string | null, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    getLocation(): string
    getManufacturer(): string | null
    getManufacturerUrl(): string | null
    getModelDescription(): string | null
    getModelName(): string | null
    getModelNumber(): string | null
    getModelUrl(): string | null
    getPresentationUrl(): string | null
    getResourceFactory(): ResourceFactory
    getSerialNumber(): string | null
    getService(type: string): ServiceInfo | null
    getUdn(): string
    getUpc(): string | null
    getUrlBase(): Soup.URI
    listDeviceTypes(): string[] | null
    listDevices(): DeviceInfo[] | null
    listDlnaCapabilities(): string[] | null
    listDlnaDeviceClassIdentifier(): string[] | null
    listServiceTypes(): string[] | null
    listServices(): ServiceInfo[] | null
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
    connect(sigName: "notify::available", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RootDevice_ConstructProps)
    _init (config?: RootDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context, descriptionPath: string, descriptionDir: string): RootDevice
    static newFull(context: Context, factory: ResourceFactory, descriptionDoc: XMLDoc, descriptionPath: string, descriptionDir: string): RootDevice
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Service_ConstructProps extends ServiceInfo_ConstructProps {
    /* Constructor properties of GUPnP-1.2.GUPnP.Service */
    rootDevice?: RootDevice
}
class Service {
    /* Fields of GUPnP-1.2.GUPnP.ServiceInfo */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.Service */
    freezeNotify(): void
    notifyValue(variable: string, value: any): void
    signalsAutoconnect(userData?: object | null): void
    thawNotify(): void
    /* Methods of GUPnP-1.2.GUPnP.ServiceInfo */
    getContext(): Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospectionAsync(callback: ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): ServiceIntrospection | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
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
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GUPnP-1.2.GUPnP.Service */
    connect(sigName: "action-invoked", callback: ((action: ServiceAction) => void)): number
    on(sigName: "action-invoked", callback: (action: ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: (action: ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: (action: ServiceAction) => void): NodeJS.EventEmitter
    emit(sigName: "action-invoked", action: ServiceAction): void
    connect(sigName: "notify-failed", callback: ((callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    on(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "notify-failed", callbackUrl: Soup.URI[], reason: GLib.Error): void
    connect(sigName: "query-variable", callback: ((variable: string, value: any) => void)): number
    on(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: (variable: string, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "query-variable", variable: string, value: any): void
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
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    static $gtype: GObject.Type
}
interface ServiceInfo_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.2.GUPnP.ServiceInfo */
    context?: Context
    document?: XMLDoc
    element?: object
    location?: string
    serviceType?: string
    udn?: string
    urlBase?: Soup.URI
}
class ServiceInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.ServiceInfo */
    getContext(): Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospectionAsync(callback: ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): ServiceIntrospection | null
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
    constructor (config?: ServiceInfo_ConstructProps)
    _init (config?: ServiceInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface ServiceIntrospection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.2.GUPnP.ServiceIntrospection */
    scpd?: object
}
class ServiceIntrospection {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.ServiceIntrospection */
    getAction(actionName: string): ServiceActionInfo | null
    getStateVariable(variableName: string): ServiceStateVariableInfo | null
    listActionNames(): string[]
    listActions(): ServiceActionInfo[]
    listStateVariableNames(): string[]
    listStateVariables(): ServiceStateVariableInfo[]
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
    constructor (config?: ServiceIntrospection_ConstructProps)
    _init (config?: ServiceIntrospection_ConstructProps): void
    static $gtype: GObject.Type
}
interface ServiceProxy_ConstructProps extends ServiceInfo_ConstructProps {
    /* Constructor properties of GUPnP-1.2.GUPnP.ServiceProxy */
    subscribed?: boolean
}
class ServiceProxy {
    /* Properties of GUPnP-1.2.GUPnP.ServiceProxy */
    subscribed: boolean
    /* Fields of GUPnP-1.2.GUPnP.ServiceInfo */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.ServiceProxy */
    addNotify(variable: string, type: GObject.Type, callback: ServiceProxyNotifyCallback): boolean
    addRawNotify(callback: ServiceProxyNotifyCallback): boolean
    beginActionList(action: string, inNames: string[], inValues: any[], callback: ServiceProxyActionCallback): ServiceProxyAction
    callAction(action: ServiceProxyAction, cancellable?: Gio.Cancellable | null): ServiceProxyAction | null
    callActionAsync(action: ServiceProxyAction, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callActionFinish(result: Gio.AsyncResult): ServiceProxyAction | null
    cancelAction(action: ServiceProxyAction): void
    endActionHash(action: ServiceProxyAction, hash: GLib.HashTable): [ /* returnType */ boolean, /* hash */ GLib.HashTable ]
    endActionList(action: ServiceProxyAction, outNames: string[], outTypes: GObject.Type[]): [ /* returnType */ boolean, /* outValues */ any[] ]
    getSubscribed(): boolean
    removeNotify(variable: string, callback: ServiceProxyNotifyCallback): boolean
    removeRawNotify(callback: ServiceProxyNotifyCallback): boolean
    sendActionList(action: string, inNames: string[], inValues: any[], outNames: string[], outTypes: GObject.Type[]): [ /* returnType */ boolean, /* outValues */ any[] ]
    setSubscribed(subscribed: boolean): void
    /* Methods of GUPnP-1.2.GUPnP.ServiceInfo */
    getContext(): Context
    getControlUrl(): string
    getEventSubscriptionUrl(): string
    getId(): string
    getIntrospectionAsync(callback: ServiceIntrospectionCallback): void
    getIntrospectionAsyncFull(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    getLocation(): string
    getScpdUrl(): string
    getServiceType(): string
    getUdn(): string
    getUrlBase(): Soup.URI
    introspectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspectFinish(res: Gio.AsyncResult): ServiceIntrospection | null
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
    /* Signals of GUPnP-1.2.GUPnP.ServiceProxy */
    connect(sigName: "subscription-lost", callback: ((error: GLib.Error) => void)): number
    on(sigName: "subscription-lost", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "subscription-lost", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "subscription-lost", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "subscription-lost", error: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::subscribed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subscribed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subscribed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subscribed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subscribed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ServiceProxy_ConstructProps)
    _init (config?: ServiceProxy_ConstructProps): void
    static $gtype: GObject.Type
}
interface XMLDoc_ConstructProps extends GObject.Object_ConstructProps {
}
class XMLDoc {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.2.GUPnP.XMLDoc */
    getDoc(): libxml2.Doc
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
    constructor (config?: XMLDoc_ConstructProps)
    _init (config?: XMLDoc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(xmlDoc: libxml2.Doc): XMLDoc
    static newFromPath(path: string): XMLDoc
    static $gtype: GObject.Type
}
abstract class AclInterface {
    /* Fields of GUPnP-1.2.GUPnP.AclInterface */
    readonly parent: GObject.TypeInterface
    readonly isAllowed: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent?: string | null) => boolean
    readonly isAllowedAsync: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly isAllowedFinish: (self: Acl, res: Gio.AsyncResult) => boolean
    readonly canSync: (self: Acl) => boolean
    static name: string
}
abstract class ContextClass {
    /* Fields of GUPnP-1.2.GUPnP.ContextClass */
    readonly parentClass: GSSDP.ClientClass
    static name: string
}
abstract class ContextFilterClass {
    /* Fields of GUPnP-1.2.GUPnP.ContextFilterClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ContextManagerClass {
    /* Fields of GUPnP-1.2.GUPnP.ContextManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ControlPointClass {
    /* Fields of GUPnP-1.2.GUPnP.ControlPointClass */
    readonly parentClass: GSSDP.ResourceBrowserClass
    readonly deviceProxyAvailable: (controlPoint: ControlPoint, proxy: DeviceProxy) => void
    readonly deviceProxyUnavailable: (controlPoint: ControlPoint, proxy: DeviceProxy) => void
    readonly serviceProxyAvailable: (controlPoint: ControlPoint, proxy: ServiceProxy) => void
    readonly serviceProxyUnavailable: (controlPoint: ControlPoint, proxy: ServiceProxy) => void
    static name: string
}
abstract class DeviceClass {
    /* Fields of GUPnP-1.2.GUPnP.DeviceClass */
    readonly parentClass: DeviceInfoClass
    static name: string
}
abstract class DeviceInfoClass {
    /* Fields of GUPnP-1.2.GUPnP.DeviceInfoClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class DeviceProxyClass {
    /* Fields of GUPnP-1.2.GUPnP.DeviceProxyClass */
    readonly parentClass: DeviceInfoClass
    static name: string
}
abstract class ResourceFactoryClass {
    /* Fields of GUPnP-1.2.GUPnP.ResourceFactoryClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class RootDeviceClass {
    /* Fields of GUPnP-1.2.GUPnP.RootDeviceClass */
    readonly parentClass: DeviceClass
    static name: string
}
class ServiceAction {
    /* Methods of GUPnP-1.2.GUPnP.ServiceAction */
    getArgumentCount(): number
    getValue(argument: string, type: GObject.Type): any
    getLocales(): string[]
    getMessage(): Soup.Message
    getName(): string
    getValues(argNames: string[], argTypes: GObject.Type[]): any[]
    return(): void
    returnError(errorCode: number, errorDescription: string): void
    returnSuccess(): void
    setValue(argument: string, value: any): void
    setValues(argNames: string[], argValues: any[]): void
    static name: string
}
class ServiceActionArgInfo {
    /* Fields of GUPnP-1.2.GUPnP.ServiceActionArgInfo */
    readonly name: string
    readonly direction: ServiceActionArgDirection
    readonly relatedStateVariable: string
    readonly retval: boolean
    static name: string
}
class ServiceActionInfo {
    /* Fields of GUPnP-1.2.GUPnP.ServiceActionInfo */
    readonly name: string
    readonly arguments_: ServiceActionArgInfo[]
    static name: string
}
abstract class ServiceClass {
    /* Fields of GUPnP-1.2.GUPnP.ServiceClass */
    readonly parentClass: ServiceInfoClass
    readonly actionInvoked: (service: Service, action: ServiceAction) => void
    readonly queryVariable: (service: Service, variable: string, value: any) => void
    static name: string
}
abstract class ServiceInfoClass {
    /* Fields of GUPnP-1.2.GUPnP.ServiceInfoClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ServiceIntrospectionClass {
    /* Fields of GUPnP-1.2.GUPnP.ServiceIntrospectionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ServiceProxyAction {
    /* Methods of GUPnP-1.2.GUPnP.ServiceProxyAction */
    getResultHash(outHash: GLib.HashTable): [ /* returnType */ boolean, /* outHash */ GLib.HashTable ]
    getResultList(outNames: string[], outTypes: GObject.Type[]): [ /* returnType */ boolean, /* outValues */ any[] ]
    ref(): ServiceProxyAction
    set(key: string, value: any): boolean
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromList(action: string, inNames: string[], inValues: any[]): ServiceProxyAction
}
abstract class ServiceProxyClass {
    /* Fields of GUPnP-1.2.GUPnP.ServiceProxyClass */
    readonly parentClass: ServiceInfoClass
    readonly subscriptionLost: (proxy: ServiceProxy, reason: GLib.Error) => void
    static name: string
}
class ServiceStateVariableInfo {
    /* Fields of GUPnP-1.2.GUPnP.ServiceStateVariableInfo */
    readonly name: string
    readonly sendEvents: boolean
    readonly isNumeric: boolean
    readonly type: GObject.Type
    readonly defaultValue: any
    readonly minimum: any
    readonly maximum: any
    readonly step: any
    readonly allowedValues: string[]
    static name: string
}
abstract class XMLDocClass {
    /* Fields of GUPnP-1.2.GUPnP.XMLDocClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
    type WhiteList = ContextFilter
}
export default GUPnP;