/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Epc-1.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Epc {

enum AddressFamily {
    UNSPEC,
    IPV4,
    IPV6,
}
enum CollisionHandling {
    IGNORE,
    CHANGE_NAME,
    UNIQUE_SERVICE,
}
enum Protocol {
    UNKNOWN,
    HTTP,
    HTTPS,
}
enum AuthFlags {
    DEFAULT,
    PASSWORD_TEXT_NEEDED,
}
const SERVICE_TYPE_HTTP: string
const SERVICE_TYPE_HTTPS: string
const TLS_SECONDS_PER_DAY: number
const TLS_SECONDS_PER_HOUR: number
const TLS_SECONDS_PER_MINUTE: number
function addressFamilyToString(value: AddressFamily): string
function authFlagsToString(value: AuthFlags): string
function avahiErrorQuark(): GLib.Quark
function collisionHandlingToString(value: CollisionHandling): string
function httpErrorQuark(): GLib.Quark
function protocolBuildUri(protocol: Protocol, hostname: string, port: number, path: string): string
function protocolFromName(name: string, fallback: Protocol): Protocol
function protocolGetServiceType(protocol: Protocol): string
function protocolGetUriScheme(protocol: Protocol): string
function protocolToString(value: Protocol): string
function serviceTypeGetBase(type: string): string
function serviceTypeGetProtocol(serviceType: string): Protocol
function serviceTypeNew(protocol: Protocol, application: string): string
function shellGetDebugLevel(): number
function shellGetHostName(): string
function shellProgressBegin(title: string, message: string): void
function shellProgressEnd(): void
function shellProgressUpdate(percentage: number, message: string): void
function shellRestartAvahiClient(strloc: string): void
function shellSetProgressHooks(hooks: ShellProgressHooks, userData: object, destroyData: GLib.DestroyNotify): void
function shellWatchRemove(id: number): void
function tlsErrorQuark(): GLib.Quark
function tlsGetCertificateFilename(hostname: string): string
function tlsGetPrivateKeyFilename(hostname: string): string
function tlsGetServerCredentials(hostname: string, crtfile: string, keyfile: string): boolean
interface AuthHandler {
    (context: AuthContext, username: string): boolean
}
interface ContentsHandler {
    (publisher: Publisher, key: string): Contents
}
interface ContentsReadFunc {
    (contents: Contents, buffer: object, length: number): boolean
}
interface Consumer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Epc-1.0.Epc.Consumer */
    application?: string
    domain?: string
    hostname?: string
    name?: string
    password?: string
    path?: string
    port?: number
    protocol?: Protocol
    username?: string
}
class Consumer {
    /* Properties of Epc-1.0.Epc.Consumer */
    password: string
    protocol: Protocol
    username: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Epc-1.0.Epc.Consumer */
    getPassword(): string
    getProtocol(): Protocol
    getUsername(): string
    isPublisherResolved(): boolean
    resolvePublisher(timeout: number): boolean
    setPassword(password: string): void
    setProtocol(protocol: Protocol): void
    setUsername(username: string): void
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
    /* Signals of Epc-1.0.Epc.Consumer */
    connect(sigName: "authenticate", callback: ((object: string) => boolean)): number
    on(sigName: "authenticate", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", object: string): void
    connect(sigName: "publisher-resolved", callback: ((object: Protocol, p0: string, p1: number) => void)): number
    on(sigName: "publisher-resolved", callback: (object: Protocol, p0: string, p1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "publisher-resolved", callback: (object: Protocol, p0: string, p1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "publisher-resolved", callback: (object: Protocol, p0: string, p1: number) => void): NodeJS.EventEmitter
    emit(sigName: "publisher-resolved", object: Protocol, p0: string, p1: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Consumer_ConstructProps)
    _init (config?: Consumer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service: ServiceInfo): Consumer
    static newForName(name: string): Consumer
    static newForNameFull(name: string, application: string, domain: string): Consumer
    static $gtype: GObject.Type
}
interface Dispatcher_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Epc-1.0.Epc.Dispatcher */
    collisionHandling?: CollisionHandling
    cookie?: string
    name?: string
}
class Dispatcher {
    /* Properties of Epc-1.0.Epc.Dispatcher */
    collisionHandling: CollisionHandling
    cookie: string
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Epc-1.0.Epc.Dispatcher */
    addServiceSubtype(type: string, subtype: string): void
    getCollisionHandling(): CollisionHandling
    getCookie(): string
    getName(): string
    reset(): void
    run(): boolean
    setCollisionHandling(method: CollisionHandling): void
    setCookie(cookie: string): void
    setName(name: string): void
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
    connect(sigName: "notify::collision-handling", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collision-handling", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cookie", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cookie", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Dispatcher_ConstructProps)
    _init (config?: Dispatcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): Dispatcher
    static $gtype: GObject.Type
}
interface Publisher_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Epc-1.0.Epc.Publisher */
    application?: string
    authFlags?: AuthFlags
    certificateFile?: string
    collisionHandling?: CollisionHandling
    contentsPath?: string
    privateKeyFile?: string
    protocol?: Protocol
    serviceCookie?: string
    serviceDomain?: string
    serviceName?: string
}
class Publisher {
    /* Properties of Epc-1.0.Epc.Publisher */
    application: string
    authFlags: AuthFlags
    certificateFile: string
    collisionHandling: CollisionHandling
    contentsPath: string
    privateKeyFile: string
    protocol: Protocol
    serviceCookie: string
    serviceDomain: string
    serviceName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Epc-1.0.Epc.Publisher */
    add(key: string, data: object, length: number): void
    addBookmark(key: string, label: string): void
    addFile(key: string, filename: string): void
    addHandler(key: string, handler: ContentsHandler): void
    getAuthFlags(): AuthFlags
    getCertificateFile(): string
    getCollisionHandling(): CollisionHandling
    getContentsPath(): string
    getPath(key: string): string
    getPrivateKeyFile(): string
    getProtocol(): Protocol
    getServiceCookie(): string
    getServiceDomain(): string
    getServiceName(): string
    getUri(key: string): string
    hasKey(key: string): boolean
    quit(): boolean
    remove(key: string): boolean
    run(): boolean
    runAsync(): boolean
    setAuthFlags(flags: AuthFlags): void
    setAuthHandler(key: string, handler: AuthHandler): void
    setCollisionHandling(method: CollisionHandling): void
    setContentsPath(path: string): void
    setCredentials(certfile: string, keyfile: string): void
    setProtocol(protocol: Protocol): void
    setServiceCookie(cookie: string): void
    setServiceName(name: string): void
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
    connect(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auth-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::certificate-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::certificate-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::certificate-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::certificate-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::collision-handling", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collision-handling", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contents-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contents-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contents-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contents-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::private-key-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::private-key-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::private-key-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::private-key-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-cookie", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-cookie", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-domain", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-domain", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Publisher_ConstructProps)
    _init (config?: Publisher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, application: string, domain: string): Publisher
    static expandName(name: string): string
    static $gtype: GObject.Type
}
interface ServiceMonitor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Epc-1.0.Epc.ServiceMonitor */
    application?: string
    domain?: string
    serviceTypes?: string[]
    skipOurOwn?: boolean
}
class ServiceMonitor {
    /* Properties of Epc-1.0.Epc.ServiceMonitor */
    skipOurOwn: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Epc-1.0.Epc.ServiceMonitor */
    getSkipOurOwn(): boolean
    setSkipOurOwn(setting: boolean): void
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
    /* Signals of Epc-1.0.Epc.ServiceMonitor */
    connect(sigName: "scanning-done", callback: ((object: string) => void)): number
    on(sigName: "scanning-done", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scanning-done", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scanning-done", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "scanning-done", object: string): void
    connect(sigName: "service-found", callback: ((object: string, p0: ServiceInfo) => void)): number
    on(sigName: "service-found", callback: (object: string, p0: ServiceInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-found", callback: (object: string, p0: ServiceInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-found", callback: (object: string, p0: ServiceInfo) => void): NodeJS.EventEmitter
    emit(sigName: "service-found", object: string, p0: ServiceInfo): void
    connect(sigName: "service-removed", callback: ((object: string, p0: string) => void)): number
    on(sigName: "service-removed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-removed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-removed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "service-removed", object: string, p0: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::skip-our-own", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-our-own", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::skip-our-own", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::skip-our-own", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::skip-our-own", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ServiceMonitor_ConstructProps)
    _init (config?: ServiceMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForTypesStrv(domain: string, types: string): ServiceMonitor
    static $gtype: GObject.Type
}
class AuthContext {
    /* Methods of Epc-1.0.Epc.AuthContext */
    checkPassword(password: string): boolean
    getKey(): string
    getPassword(): string
    static name: string
}
abstract class ConsumerClass {
    /* Fields of Epc-1.0.Epc.ConsumerClass */
    readonly authenticate: (consumer: Consumer, realm: string) => void
    readonly publisherResolved: (consumer: Consumer, protocol: Protocol, hostname: string, port: number) => void
    static name: string
}
class ConsumerPrivate {
    static name: string
}
class Contents {
    /* Methods of Epc-1.0.Epc.Contents */
    getMimeType(): string
    isStream(): boolean
    ref(): Contents
    unref(): void
    static name: string
    static new(type: string, data: object, length: number, destroyData: GLib.DestroyNotify): Contents
    constructor(type: string, data: object, length: number, destroyData: GLib.DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(type: string, data: object, length: number, destroyData: GLib.DestroyNotify): Contents
    static newDup(type: string, data: object, length: number): Contents
    static streamNew(type: string, callback: ContentsReadFunc): Contents
}
abstract class DispatcherClass {
    static name: string
}
class DispatcherPrivate {
    static name: string
}
abstract class PublisherClass {
    static name: string
}
class PublisherPrivate {
    static name: string
}
class ServiceInfo {
    /* Methods of Epc-1.0.Epc.ServiceInfo */
    getAddressFamily(): AddressFamily
    getDetail(name: string): string
    getHost(): string
    getInterface(): string
    getPort(): number
    getServiceType(): string
    ref(): ServiceInfo
    unref(): void
    static name: string
}
abstract class ServiceMonitorClass {
    /* Fields of Epc-1.0.Epc.ServiceMonitorClass */
    readonly serviceFound: (monitor: ServiceMonitor, name: string, info: ServiceInfo) => void
    readonly serviceRemoved: (monitor: ServiceMonitor, name: string, type: string) => void
    readonly scanningDone: (monitor: ServiceMonitor, type: string) => void
    static name: string
}
class ServiceMonitorPrivate {
    static name: string
}
class ShellProgressHooks {
    /* Fields of Epc-1.0.Epc.ShellProgressHooks */
    readonly begin: (title: string) => void
    readonly update: (percentage: number, message: string) => void
    readonly end: () => void
    static name: string
}
}
export default Epc;