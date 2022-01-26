/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Signon-2.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Signon {

enum Error {
    UNKNOWN,
    INTERNAL_SERVER,
    INTERNAL_COMMUNICATION,
    PERMISSION_DENIED,
    METHOD_NOT_KNOWN,
    SERVICE_NOT_AVAILABLE,
    INVALID_QUERY,
    METHOD_NOT_AVAILABLE,
    IDENTITY_NOT_FOUND,
    STORE_FAILED,
    REMOVE_FAILED,
    SIGNOUT_FAILED,
    IDENTITY_OPERATION_CANCELED,
    CREDENTIALS_NOT_AVAILABLE,
    REFERENCE_NOT_FOUND,
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
    USER_ERROR,
}
enum SessionDataUiPolicy {
    DEFAULT,
    REQUEST_PASSWORD,
    NO_USER_INTERACTION,
    VALIDATION,
}
enum IdentityType {
    OTHER,
    APP,
    WEB,
    NETWORK,
}
const SESSION_DATA_CAPTION: string
const SESSION_DATA_PROXY: string
const SESSION_DATA_REALM: string
const SESSION_DATA_RENEW_TOKEN: string
const SESSION_DATA_SECRET: string
const SESSION_DATA_TIMEOUT: string
const SESSION_DATA_UI_POLICY: string
const SESSION_DATA_USERNAME: string
const SESSION_DATA_WINDOW_ID: string
function errorQuark(): GLib.Quark
interface AuthService_ConstructProps extends GObject.Object_ConstructProps {
}
class AuthService {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Signon-2.0.Signon.AuthService */
    getMechanisms(method: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getMechanismsFinish(result: Gio.AsyncResult): string[]
    getMechanismsSync(method: string, cancellable?: Gio.Cancellable | null): string[]
    getMethods(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getMethodsFinish(result: Gio.AsyncResult): string[]
    getMethodsSync(cancellable?: Gio.Cancellable | null): string[]
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
    constructor (config?: AuthService_ConstructProps)
    _init (config?: AuthService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AuthService
    static $gtype: GObject.Type
}
interface AuthSession_ConstructProps extends GObject.Object_ConstructProps {
}
class AuthSession {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Signon-2.0.Signon.AuthSession */
    cancel(): void
    getMethod(): string
    process(sessionData: GLib.Variant, mechanism: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    processFinish(res: Gio.AsyncResult): GLib.Variant
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
    /* Signals of Signon-2.0.Signon.AuthSession */
    connect(sigName: "state-changed", callback: ((state: number, message: string) => void)): number
    on(sigName: "state-changed", callback: (state: number, message: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: number, message: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: number, message: string) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: number, message: string): void
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
    constructor (config?: AuthSession_ConstructProps)
    _init (config?: AuthSession_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, methodName: string): AuthSession
    static $gtype: GObject.Type
}
interface Identity_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Signon-2.0.Signon.Identity */
    id?: number
}
class Identity {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Signon-2.0.Signon.Identity */
    createSession(method: string): AuthSession
    getId(): number
    getLastError(): GLib.Error
    queryInfo(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryInfoFinish(res: Gio.AsyncResult): IdentityInfo
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeFinish(res: Gio.AsyncResult): boolean
    signOut(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    signOutFinish(res: Gio.AsyncResult): boolean
    storeInfo(info: IdentityInfo, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    storeInfoFinish(res: Gio.AsyncResult): boolean
    verifySecret(secret: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verifySecretFinish(res: Gio.AsyncResult): boolean
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
    /* Signals of Signon-2.0.Signon.Identity */
    connect(sigName: "signed-out", callback: (() => void)): number
    on(sigName: "signed-out", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signed-out", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signed-out", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "signed-out"): void
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
    constructor (config?: Identity_ConstructProps)
    _init (config?: Identity_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Identity
    static newFromDb(id: number): Identity
    static $gtype: GObject.Type
}
abstract class AuthServiceClass {
    /* Fields of Signon-2.0.Signon.AuthServiceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class AuthSessionClass {
    /* Fields of Signon-2.0.Signon.AuthSessionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class IdentityClass {
    /* Fields of Signon-2.0.Signon.IdentityClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class IdentityInfo {
    /* Methods of Signon-2.0.Signon.IdentityInfo */
    addAccessControl(systemContext: string, applicationContext: string): void
    copy(): IdentityInfo
    free(): void
    getAccessControlList(): SecurityContext[]
    getCaption(): string
    getId(): number
    getIdentityType(): IdentityType
    getMethods(): GLib.HashTable
    getRealms(): string[]
    getStoringSecret(): boolean
    getUsername(): string
    removeMethod(method: string): void
    setAccessControlList(accessControlList: SecurityContext[]): void
    setCaption(caption: string): void
    setIdentityType(type: IdentityType): void
    setMethod(method: string, mechanisms: string[]): void
    setRealms(realms: string[]): void
    setSecret(secret: string, storeSecret: boolean): void
    setUsername(username: string): void
    static name: string
    static new(): IdentityInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IdentityInfo
}
class SecurityContext {
    /* Methods of Signon-2.0.Signon.SecurityContext */
    copy(): SecurityContext
    free(): void
    getApplicationContext(): string
    getSystemContext(): string
    setApplicationContext(applicationContext: string): void
    setSystemContext(systemContext: string): void
    static name: string
    static new(): SecurityContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SecurityContext
    static newFromValues(systemContext: string, applicationContext: string): SecurityContext
}
}
export default Signon;