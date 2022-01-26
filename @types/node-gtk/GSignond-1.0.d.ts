/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GSignond-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GSignond {

enum Error {
    NONE,
    UNKNOWN,
    INTERNAL_SERVER,
    INTERNAL_COMMUNICATION,
    PERMISSION_DENIED,
    ENCRYPTION_FAILURE,
    AUTH_SERVICE_ERR,
    METHOD_NOT_KNOWN,
    SERVICE_NOT_AVAILABLE,
    INVALID_QUERY,
    IDENTITY_ERR,
    METHOD_NOT_AVAILABLE,
    IDENTITY_NOT_FOUND,
    STORE_FAILED,
    REMOVE_FAILED,
    SIGN_OUT_FAILED,
    IDENTITY_OPERATION_CANCELED,
    CREDENTIALS_NOT_AVAILABLE,
    REFERENCE_NOT_FOUND,
    AUTH_SESSION_ERR,
    MECHANISM_NOT_AVAILABLE,
    MISSING_DATA,
    INVALID_CREDENTIALS,
    NOT_AUTHORIZED,
    WRONG_STATE,
    OPERATION_NOT_SUPPORTED,
    NO_CONNECTION,
    NETWORK,
    SSL,
    RUNTIME,
    SESSION_CANCELED,
    TIMED_OUT,
    USER_INTERACTION,
    OPERATION_FAILED,
    ENCRYPTION_FAILED,
    TOS_NOT_ACCEPTED,
    FORGOT_PASSWORD,
    METHOD_OR_MECHANISM_NOT_ALLOWED,
    INCORRECT_DATE,
    USER_ERR,
}
enum PluginState {
    NONE,
    RESOLVING,
    CONNECTING,
    SENDING_DATA,
    WAITING,
    USER_PENDING,
    REFRESHING,
    PROCESS_PENDING,
    STARTED,
    CANCELING,
    DONE,
    HOLDING,
}
enum SignonuiError {
    NONE,
    GENERAL,
    NO_SIGNONUI,
    BAD_PARAMETERS,
    CANCELED,
    NOT_AVAILABLE,
    BAD_URL,
    BAD_CAPTCHA,
    BAD_CAPTCHA_URL,
    REFRESH_FAILED,
    FORBIDDEN,
    FORGOT_PASSWORD,
}
enum UiPolicy {
    DEFAULT,
    REQUEST_PASSWORD,
    NO_USER_INTERACTION,
    VALIDATION,
}
const CONFIG_DBUS_TIMEOUTS: string
const CONFIG_GENERAL: string
function errorNewFromVariant(var_: GLib.Variant): GLib.Error | null
function errorQuark(): GLib.Quark
function errorToVariant(error: GLib.Error): GLib.Variant | null
function generateNonce(): string
function isHostInDomain(host: string, domain: string): boolean
function newIoStreamFromFd(inFd: number, outFd: number, closeFds: boolean): Gio.IOStream
function securityContextFromVariant(variant: GLib.Variant): SecurityContext
function sequenceToArray(seq: GLib.Sequence): string[]
function wipeDirectory(dirname: string): boolean
function wipeFile(filename: string): boolean
class Plugin {
    /* Properties of GSignond-1.0.GSignond.Plugin */
    readonly mechanisms: string[]
    readonly type: string
    /* Methods of GSignond-1.0.GSignond.Plugin */
    cancel(): void
    error(error: GLib.Error): void
    refresh(uiData: SignonuiData): void
    refreshed(uiData: SignonuiData): void
    request(sessionData: SessionData): void
    requestInitial(sessionData: SessionData, identityMethodCache: Dictionary, mechanism: string): void
    response(sessionData: SessionData): void
    responseFinal(sessionData: SessionData): void
    statusChanged(state: PluginState, message: string): void
    store(identityMethodCache: Dictionary): void
    userActionFinished(uiData: SignonuiData): void
    userActionRequired(uiData: SignonuiData): void
    /* Signals of GSignond-1.0.GSignond.Plugin */
    connect(sigName: "error", callback: ((error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "refreshed", callback: ((uiData: SignonuiData) => void)): number
    on(sigName: "refreshed", callback: (uiData: SignonuiData) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refreshed", callback: (uiData: SignonuiData) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refreshed", callback: (uiData: SignonuiData) => void): NodeJS.EventEmitter
    emit(sigName: "refreshed", uiData: SignonuiData): void
    connect(sigName: "response", callback: ((sessionData: SessionData) => void)): number
    on(sigName: "response", callback: (sessionData: SessionData) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "response", callback: (sessionData: SessionData) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "response", callback: (sessionData: SessionData) => void): NodeJS.EventEmitter
    emit(sigName: "response", sessionData: SessionData): void
    connect(sigName: "response-final", callback: ((sessionData: SessionData) => void)): number
    on(sigName: "response-final", callback: (sessionData: SessionData) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "response-final", callback: (sessionData: SessionData) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "response-final", callback: (sessionData: SessionData) => void): NodeJS.EventEmitter
    emit(sigName: "response-final", sessionData: SessionData): void
    connect(sigName: "status-changed", callback: ((state: PluginState, message: string) => void)): number
    on(sigName: "status-changed", callback: (state: PluginState, message: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: (state: PluginState, message: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: (state: PluginState, message: string) => void): NodeJS.EventEmitter
    emit(sigName: "status-changed", state: PluginState, message: string): void
    connect(sigName: "store", callback: ((data: Dictionary) => void)): number
    on(sigName: "store", callback: (data: Dictionary) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "store", callback: (data: Dictionary) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "store", callback: (data: Dictionary) => void): NodeJS.EventEmitter
    emit(sigName: "store", data: Dictionary): void
    connect(sigName: "user-action-required", callback: ((uiData: SignonuiData) => void)): number
    on(sigName: "user-action-required", callback: (uiData: SignonuiData) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-action-required", callback: (uiData: SignonuiData) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-action-required", callback: (uiData: SignonuiData) => void): NodeJS.EventEmitter
    emit(sigName: "user-action-required", uiData: SignonuiData): void
    static name: string
}
interface AccessControlManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GSignond-1.0.GSignond.AccessControlManager */
    config?: Config
}
class AccessControlManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.AccessControlManager */
    aclIsValid(peerCtx: SecurityContext, identityAcl: SecurityContext[]): boolean
    peerIsAllowedToUseIdentity(peerCtx: SecurityContext, ownerCtx: SecurityContext, identityAcl: SecurityContext[]): boolean
    peerIsOwnerOfIdentity(peerCtx: SecurityContext, ownerCtx: SecurityContext): boolean
    securityContextOfKeychain(): SecurityContext
    securityContextOfPeer(peerCtx: SecurityContext, peerFd: number, peerService: string, peerAppCtx: string): void
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
    constructor (config?: AccessControlManager_ConstructProps)
    _init (config?: AccessControlManager_ConstructProps): void
    static $gtype: GObject.Type
}
interface Config_ConstructProps extends GObject.Object_ConstructProps {
}
class Config {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.Config */
    getInteger(key: string): number
    getString(key: string): string | null
    setInteger(key: string, value: number): void
    setString(key: string, value: string): void
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
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Config
    static $gtype: GObject.Type
}
interface Credentials_ConstructProps extends GObject.Object_ConstructProps {
}
class Credentials {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.Credentials */
    equal(two: Credentials): boolean
    getId(): number
    getPassword(): string | null
    getUsername(): string | null
    setData(id: number, username: string, password: string): boolean
    setId(id: number): boolean
    setPassword(password?: string | null): boolean
    setUsername(username?: string | null): boolean
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
    constructor (config?: Credentials_ConstructProps)
    _init (config?: Credentials_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Credentials
    static $gtype: GObject.Type
}
interface Dictionary_ConstructProps extends GObject.Object_ConstructProps {
}
class Dictionary {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.Dictionary */
    contains(key: string): boolean
    copy(): Dictionary
    get(key: string): GLib.Variant | null
    getBoolean(key: string): [ /* returnType */ boolean, /* value */ boolean ]
    getInt32(key: string): [ /* returnType */ boolean, /* value */ number ]
    getInt64(key: string): [ /* returnType */ boolean, /* value */ number ]
    getString(key: string): string | null
    getTable(): GLib.HashTable
    getUint32(key: string): [ /* returnType */ boolean, /* value */ number ]
    getUint64(key: string): [ /* returnType */ boolean, /* value */ number ]
    remove(key: string): boolean
    set(key: string, value: GLib.Variant): boolean
    setBoolean(key: string, value: boolean): boolean
    setInt32(key: string, value: number): boolean
    setInt64(key: string, value: number): boolean
    setString(key: string, value: string): boolean
    setUint32(key: string, value: number): boolean
    setUint64(key: string, value: number): boolean
    toVariant(): GLib.Variant | null
    toVariantBuilder(): GLib.VariantBuilder | null
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
    constructor (config?: Dictionary_ConstructProps)
    _init (config?: Dictionary_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Dictionary
    static newFromVariant(variant: GLib.Variant): Dictionary
    static $gtype: GObject.Type
}
interface Extension_ConstructProps extends GObject.Object_ConstructProps {
}
class Extension {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.Extension */
    getAccessControlManager(config: Config): AccessControlManager
    getName(): string
    getSecretStorage(config: Config): SecretStorage
    getStorageManager(config: Config): StorageManager
    getVersion(): number
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
    constructor (config?: Extension_ConstructProps)
    _init (config?: Extension_ConstructProps): void
    static $gtype: GObject.Type
}
interface SecretStorage_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GSignond-1.0.GSignond.SecretStorage */
    config?: Config
}
class SecretStorage {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.SecretStorage */
    checkCredentials(creds: Credentials): boolean
    clearDb(): boolean
    closeDb(): boolean
    getLastError(): GLib.Error
    isOpenDb(): boolean
    loadCredentials(id: number): Credentials | null
    loadData(id: number, method: number): Dictionary
    openDb(): boolean
    removeCredentials(id: number): boolean
    removeData(id: number, method: number): boolean
    updateCredentials(creds: Credentials): boolean
    updateData(id: number, method: number, data: Dictionary): boolean
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
    constructor (config?: SecretStorage_ConstructProps)
    _init (config?: SecretStorage_ConstructProps): void
    static $gtype: GObject.Type
}
interface SessionData_ConstructProps extends Dictionary_ConstructProps {
}
class SessionData {
    /* Fields of GSignond-1.0.GSignond.Dictionary */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.SessionData */
    copy(): SessionData
    getCaption(): string
    getNetworkProxy(): string
    getNetworkTimeout(): [ /* returnType */ boolean, /* networkTimeout */ number ]
    getRealm(): string
    getRenewToken(): [ /* returnType */ boolean, /* renewToken */ boolean ]
    getSecret(): string
    getUiPolicy(): [ /* returnType */ boolean, /* uiPolicy */ UiPolicy ]
    getUsername(): string
    getWindowId(): [ /* returnType */ boolean, /* windowId */ number ]
    setAllowedRealms(realms: GLib.Sequence): void
    setCaption(caption: string): void
    setNetworkProxy(networkProxy: string): void
    setNetworkTimeout(networkTimeout: number): void
    setRealm(realm: string): void
    setRenewToken(renewToken: boolean): void
    setSecret(secret: string): void
    setUiPolicy(uiPolicy: UiPolicy): void
    setUsername(username: string): void
    setWindowId(windowId: number): void
    /* Methods of GSignond-1.0.GSignond.Dictionary */
    contains(key: string): boolean
    copy(): Dictionary
    get(key: string): GLib.Variant | null
    getBoolean(key: string): [ /* returnType */ boolean, /* value */ boolean ]
    getInt32(key: string): [ /* returnType */ boolean, /* value */ number ]
    getInt64(key: string): [ /* returnType */ boolean, /* value */ number ]
    getString(key: string): string | null
    getTable(): GLib.HashTable
    getUint32(key: string): [ /* returnType */ boolean, /* value */ number ]
    getUint64(key: string): [ /* returnType */ boolean, /* value */ number ]
    remove(key: string): boolean
    set(key: string, value: GLib.Variant): boolean
    setBoolean(key: string, value: boolean): boolean
    setInt32(key: string, value: number): boolean
    setInt64(key: string, value: number): boolean
    setString(key: string, value: string): boolean
    setUint32(key: string, value: number): boolean
    setUint64(key: string, value: number): boolean
    toVariant(): GLib.Variant | null
    toVariantBuilder(): GLib.VariantBuilder | null
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
    constructor (config?: SessionData_ConstructProps)
    _init (config?: SessionData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SessionData
    /* Function overloads */
    static new(): SessionData
    static newFromVariant(variant: GLib.Variant): SessionData
    /* Function overloads */
    static newFromVariant(variant: GLib.Variant): SessionData
    static $gtype: GObject.Type
}
interface SignonuiData_ConstructProps extends Dictionary_ConstructProps {
}
class SignonuiData {
    /* Fields of GSignond-1.0.GSignond.Dictionary */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.SignonuiData */
    copy(): SignonuiData
    getCaptchaResponse(): string | null
    getCaptchaUrl(): string | null
    getCaption(): string | null
    getConfirm(): [ /* returnType */ boolean, /* confirm */ boolean ]
    getFinalUrl(): string | null
    getForgotPassword(): string | null
    getForgotPasswordUrl(): string | null
    getMessage(): string | null
    getOpenUrl(): string | null
    getPassword(): string | null
    getQueryError(): [ /* returnType */ boolean, /* error */ SignonuiError ]
    getQueryPassword(): [ /* returnType */ boolean, /* queryPassword */ boolean ]
    getQueryUsername(): [ /* returnType */ boolean, /* queryUsername */ boolean ]
    getRememberPassword(): [ /* returnType */ boolean, /* rememberPassword */ boolean ]
    getRequestId(): string | null
    getTestReply(): string | null
    getTitle(): string | null
    getUrlResponse(): string | null
    getUsername(): string | null
    setCaptchaResponse(response: string): void
    setCaptchaUrl(url: string): void
    setCaption(caption: string): void
    setConfirm(confirm: boolean): void
    setFinalUrl(url: string): void
    setForgotPassword(forgot: string): void
    setForgotPasswordUrl(url: string): void
    setMessage(message: string): void
    setOpenUrl(url: string): void
    setPassword(password: string): void
    setQueryError(error: SignonuiError): void
    setQueryPassword(query: boolean): void
    setQueryUsername(query: boolean): void
    setRememberPassword(remember: boolean): void
    setRequestId(id: string): void
    setTestReply(reply: string): void
    setTitle(title: string): void
    setUrlResponse(response: string): void
    setUsername(username: string): void
    /* Methods of GSignond-1.0.GSignond.Dictionary */
    contains(key: string): boolean
    copy(): Dictionary
    get(key: string): GLib.Variant | null
    getBoolean(key: string): [ /* returnType */ boolean, /* value */ boolean ]
    getInt32(key: string): [ /* returnType */ boolean, /* value */ number ]
    getInt64(key: string): [ /* returnType */ boolean, /* value */ number ]
    getString(key: string): string | null
    getTable(): GLib.HashTable
    getUint32(key: string): [ /* returnType */ boolean, /* value */ number ]
    getUint64(key: string): [ /* returnType */ boolean, /* value */ number ]
    remove(key: string): boolean
    set(key: string, value: GLib.Variant): boolean
    setBoolean(key: string, value: boolean): boolean
    setInt32(key: string, value: number): boolean
    setInt64(key: string, value: number): boolean
    setString(key: string, value: string): boolean
    setUint32(key: string, value: number): boolean
    setUint64(key: string, value: number): boolean
    toVariant(): GLib.Variant | null
    toVariantBuilder(): GLib.VariantBuilder | null
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
    constructor (config?: SignonuiData_ConstructProps)
    _init (config?: SignonuiData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SignonuiData
    /* Function overloads */
    static new(): SignonuiData
    static newFromVariant(variant: GLib.Variant): SignonuiData
    /* Function overloads */
    static newFromVariant(variant: GLib.Variant): SignonuiData
    static $gtype: GObject.Type
}
interface StorageManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GSignond-1.0.GSignond.StorageManager */
    config?: Config
}
class StorageManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.StorageManager */
    deleteStorage(): boolean
    filesystemIsMounted(): boolean
    initializeStorage(): boolean
    mountFilesystem(): string
    storageIsInitialized(): boolean
    unmountFilesystem(): boolean
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
    constructor (config?: StorageManager_ConstructProps)
    _init (config?: StorageManager_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AccessControlManagerClass {
    /* Fields of GSignond-1.0.GSignond.AccessControlManagerClass */
    readonly parentClass: GObject.ObjectClass
    readonly securityContextOfPeer: (self: AccessControlManager, peerCtx: SecurityContext, peerFd: number, peerService: string, peerAppCtx: string) => void
    readonly peerIsAllowedToUseIdentity: (self: AccessControlManager, peerCtx: SecurityContext, ownerCtx: SecurityContext, identityAcl: SecurityContext[]) => boolean
    readonly peerIsOwnerOfIdentity: (self: AccessControlManager, peerCtx: SecurityContext, ownerCtx: SecurityContext) => boolean
    readonly aclIsValid: (self: AccessControlManager, peerCtx: SecurityContext, identityAcl: SecurityContext[]) => boolean
    readonly securityContextOfKeychain: (self: AccessControlManager) => SecurityContext
    static name: string
}
class AccessControlManagerPrivate {
    static name: string
}
abstract class ConfigClass {
    /* Fields of GSignond-1.0.GSignond.ConfigClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class CredentialsClass {
    static name: string
}
abstract class DictionaryClass {
    static name: string
}
abstract class ExtensionClass {
    /* Fields of GSignond-1.0.GSignond.ExtensionClass */
    readonly parentClass: GObject.ObjectClass
    readonly getExtensionName: (self: Extension) => string
    readonly getExtensionVersion: (self: Extension) => number
    readonly getStorageManager: (self: Extension, config: Config) => StorageManager
    readonly getSecretStorage: (self: Extension, config: Config) => SecretStorage
    readonly getAccessControlManager: (self: Extension, config: Config) => AccessControlManager
    static name: string
}
abstract class PluginInterface {
    /* Fields of GSignond-1.0.GSignond.PluginInterface */
    readonly parent: GObject.TypeInterface
    readonly cancel: (self: Plugin) => void
    readonly requestInitial: (self: Plugin, sessionData: SessionData, identityMethodCache: Dictionary, mechanism: string) => void
    readonly request: (self: Plugin, sessionData: SessionData) => void
    readonly userActionFinished: (self: Plugin, uiData: SignonuiData) => void
    readonly refresh: (self: Plugin, uiData: SignonuiData) => void
    static name: string
}
abstract class SecretStorageClass {
    /* Fields of GSignond-1.0.GSignond.SecretStorageClass */
    readonly parentClass: GObject.ObjectClass
    readonly openDb: (self: SecretStorage) => boolean
    readonly closeDb: (self: SecretStorage) => boolean
    readonly clearDb: (self: SecretStorage) => boolean
    readonly isOpenDb: (self: SecretStorage) => boolean
    readonly loadCredentials: (self: SecretStorage, id: number) => Credentials | null
    readonly updateCredentials: (self: SecretStorage, creds: Credentials) => boolean
    readonly removeCredentials: (self: SecretStorage, id: number) => boolean
    readonly checkCredentials: (self: SecretStorage, creds: Credentials) => boolean
    readonly loadData: (self: SecretStorage, id: number, method: number) => Dictionary
    readonly updateData: (self: SecretStorage, id: number, method: number, data: Dictionary) => boolean
    readonly removeData: (self: SecretStorage, id: number, method: number) => boolean
    readonly getLastError: (self: SecretStorage) => GLib.Error
    static name: string
}
class SecretStoragePrivate {
    static name: string
}
class SecurityContext {
    /* Fields of GSignond-1.0.GSignond.SecurityContext */
    readonly sysCtx: string
    readonly appCtx: string
    /* Methods of GSignond-1.0.GSignond.SecurityContext */
    check(test: SecurityContext): boolean
    compare(ctx2: SecurityContext): number
    copy(): SecurityContext
    free(): void
    getApplicationContext(): string
    getSystemContext(): string
    match(ctx2: SecurityContext): boolean
    setApplicationContext(applicationContext: string): void
    setSystemContext(systemContext: string): void
    toVariant(): GLib.Variant
    static name: string
    static new(): SecurityContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SecurityContext
    static newFromValues(systemContext: string, applicationContext: string): SecurityContext
    static fromVariant(variant: GLib.Variant): SecurityContext
}
abstract class SessionDataClass {
    static name: string
}
abstract class SignonuiDataClass {
    static name: string
}
abstract class StorageManagerClass {
    /* Fields of GSignond-1.0.GSignond.StorageManagerClass */
    readonly parentClass: GObject.ObjectClass
    readonly initializeStorage: (self: StorageManager) => boolean
    readonly deleteStorage: (self: StorageManager) => boolean
    readonly storageIsInitialized: (self: StorageManager) => boolean
    readonly mountFilesystem: (self: StorageManager) => string
    readonly unmountFilesystem: (self: StorageManager) => boolean
    readonly filesystemIsMounted: (self: StorageManager) => boolean
    static name: string
}
class StorageManagerPrivate {
    static name: string
}
}
export default GSignond;