/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Rest-0.7
 */

import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Rest {

enum MemoryUse {
    STATIC,
    TAKE,
    COPY,
}
enum OAuthSignatureMethod {
    PLAINTEXT,
    HMAC_SHA1,
}
enum ProxyCallError {
    FAILED,
}
enum ProxyError {
    CANCELLED,
    RESOLUTION,
    CONNECTION,
    SSL,
    IO,
    FAILED,
    HTTP_MULTIPLE_CHOICES,
    HTTP_MOVED_PERMANENTLY,
    HTTP_FOUND,
    HTTP_SEE_OTHER,
    HTTP_NOT_MODIFIED,
    HTTP_USE_PROXY,
    HTTP_THREEOHSIX,
    HTTP_TEMPORARY_REDIRECT,
    HTTP_BAD_REQUEST,
    HTTP_UNAUTHORIZED,
    HTTP_FOUROHTWO,
    HTTP_FORBIDDEN,
    HTTP_NOT_FOUND,
    HTTP_METHOD_NOT_ALLOWED,
    HTTP_NOT_ACCEPTABLE,
    HTTP_PROXY_AUTHENTICATION_REQUIRED,
    HTTP_REQUEST_TIMEOUT,
    HTTP_CONFLICT,
    HTTP_GONE,
    HTTP_LENGTH_REQUIRED,
    HTTP_PRECONDITION_FAILED,
    HTTP_REQUEST_ENTITY_TOO_LARGE,
    HTTP_REQUEST_URI_TOO_LONG,
    HTTP_UNSUPPORTED_MEDIA_TYPE,
    HTTP_REQUESTED_RANGE_NOT_SATISFIABLE,
    HTTP_EXPECTATION_FAILED,
    HTTP_INTERNAL_SERVER_ERROR,
    HTTP_NOT_IMPLEMENTED,
    HTTP_BAD_GATEWAY,
    HTTP_SERVICE_UNAVAILABLE,
    HTTP_GATEWAY_TIMEOUT,
    HTTP_HTTP_VERSION_NOT_SUPPORTED,
}
function hmacSha1(key: string, message: string): string
function proxyCallErrorQuark(): GLib.Quark
function proxyErrorQuark(): GLib.Quark
interface OAuthProxyAuthCallback {
    (proxy: OAuthProxy, error: GLib.Error, weakObject: GObject.Object, userdata?: object | null): void
}
interface ProxyCallAsyncCallback {
    (call: ProxyCall, error: GLib.Error, weakObject: GObject.Object, userdata?: object | null): void
}
interface ProxyCallContinuousCallback {
    (call: ProxyCall, buf: string, len: number, error: GLib.Error, weakObject: GObject.Object, userdata?: object | null): void
}
interface ProxyCallUploadCallback {
    (call: ProxyCall, total: number, uploaded: number, error: GLib.Error, weakObject: GObject.Object, userdata?: object | null): void
}
interface OAuth2Proxy_ConstructProps extends Proxy_ConstructProps {
    /* Constructor properties of Rest-0.7.Rest.OAuth2Proxy */
    accessToken?: string
    authEndpoint?: string
    clientId?: string
}
class OAuth2Proxy {
    /* Properties of Rest-0.7.Rest.OAuth2Proxy */
    accessToken: string
    /* Properties of Rest-0.7.Rest.Proxy */
    bindingRequired: boolean
    password: string
    sslCaFile: string
    sslStrict: boolean
    urlFormat: string
    userAgent: string
    username: string
    /* Fields of Rest-0.7.Rest.Proxy */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.OAuth2Proxy */
    buildLoginUrl(redirectUri: string): string
    buildLoginUrlFull(redirectUri: string, extraParams: GLib.HashTable): string
    getAccessToken(): string
    setAccessToken(accessToken: string): void
    /* Methods of Rest-0.7.Rest.Proxy */
    addSoupFeature(feature: Soup.SessionFeature): void
    getUserAgent(): string
    newCall(): ProxyCall
    setUserAgent(userAgent: string): void
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
    /* Signals of Rest-0.7.Rest.Proxy */
    connect(sigName: "authenticate", callback: ((auth: ProxyAuth, retrying: boolean) => boolean)): number
    on(sigName: "authenticate", callback: (auth: ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (auth: ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (auth: ProxyAuth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", auth: ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::access-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::binding-required", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-ca-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: OAuth2Proxy_ConstructProps)
    _init (config?: OAuth2Proxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(clientId: string, authEndpoint: string, urlFormat: string, bindingRequired: boolean): OAuth2Proxy
    /* Function overloads */
    static new(urlFormat: string, bindingRequired: boolean): OAuth2Proxy
    static newWithToken(clientId: string, accessToken: string, authEndpoint: string, urlFormat: string, bindingRequired: boolean): OAuth2Proxy
    static extractAccessToken(url: string): string
    static $gtype: GObject.Type
}
interface OAuth2ProxyCall_ConstructProps extends ProxyCall_ConstructProps {
}
class OAuth2ProxyCall {
    /* Fields of Rest-0.7.Rest.ProxyCall */
    readonly parent: GObject.Object
    readonly priv: ProxyCallPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.ProxyCall */
    addHeader(header: string, value: string): void
    addParam(name: string, value: string): void
    addParamFull(param: Param): void
    getFunction(): string
    getMethod(): string
    getParams(): Params
    getPayload(): string
    getPayloadLength(): number
    getResponseHeaders(): GLib.HashTable
    getStatusCode(): number
    getStatusMessage(): string
    invokeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invokeFinish(result: Gio.AsyncResult): boolean
    lookupHeader(header: string): string
    lookupParam(name: string): Param
    lookupResponseHeader(header: string): string
    removeHeader(header: string): void
    removeParam(name: string): void
    run(loop: GLib.MainLoop): boolean
    serializeParams(): [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]
    setFunction(function_: string): void
    setMethod(method: string): void
    sync(): boolean
    upload(callback: ProxyCallUploadCallback, weakObject: GObject.Object): boolean
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
    constructor (config?: OAuth2ProxyCall_ConstructProps)
    _init (config?: OAuth2ProxyCall_ConstructProps): void
    static $gtype: GObject.Type
}
interface OAuthProxy_ConstructProps extends Proxy_ConstructProps {
    /* Constructor properties of Rest-0.7.Rest.OAuthProxy */
    consumerKey?: string
    consumerSecret?: string
    signatureHost?: string
    signatureMethod?: OAuthSignatureMethod
    token?: string
    tokenSecret?: string
}
class OAuthProxy {
    /* Properties of Rest-0.7.Rest.OAuthProxy */
    signatureHost: string
    signatureMethod: OAuthSignatureMethod
    token: string
    tokenSecret: string
    /* Properties of Rest-0.7.Rest.Proxy */
    bindingRequired: boolean
    password: string
    sslCaFile: string
    sslStrict: boolean
    urlFormat: string
    userAgent: string
    username: string
    /* Fields of Rest-0.7.Rest.Proxy */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.OAuthProxy */
    accessToken(function_: string, verifier: string): boolean
    accessTokenAsync(function_: string, verifier: string, callback: OAuthProxyAuthCallback, weakObject: GObject.Object): boolean
    authStep(function_: string): boolean
    authStepAsync(function_: string, callback: OAuthProxyAuthCallback, weakObject: GObject.Object): boolean
    getSignatureHost(): string
    getToken(): string
    getTokenSecret(): string
    isOauth10a(): boolean
    newEchoProxy(serviceUrl: string, urlFormat: string, bindingRequired: boolean): Proxy
    requestToken(function_: string, callbackUri: string): boolean
    requestTokenAsync(function_: string, callbackUri: string, callback: OAuthProxyAuthCallback, weakObject: GObject.Object): boolean
    setSignatureHost(signatureHost: string): void
    setToken(token: string): void
    setTokenSecret(tokenSecret: string): void
    /* Methods of Rest-0.7.Rest.Proxy */
    addSoupFeature(feature: Soup.SessionFeature): void
    getUserAgent(): string
    newCall(): ProxyCall
    setUserAgent(userAgent: string): void
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
    /* Signals of Rest-0.7.Rest.Proxy */
    connect(sigName: "authenticate", callback: ((auth: ProxyAuth, retrying: boolean) => boolean)): number
    on(sigName: "authenticate", callback: (auth: ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (auth: ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (auth: ProxyAuth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", auth: ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::signature-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signature-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::signature-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::signature-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::signature-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::signature-method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signature-method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::signature-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::signature-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::signature-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::token", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::token", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::token-secret", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::token-secret", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::token-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::token-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::token-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::binding-required", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-ca-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: OAuthProxy_ConstructProps)
    _init (config?: OAuthProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(consumerKey: string, consumerSecret: string, urlFormat: string, bindingRequired: boolean): OAuthProxy
    /* Function overloads */
    static new(urlFormat: string, bindingRequired: boolean): OAuthProxy
    static newWithToken(consumerKey: string, consumerSecret: string, token: string, tokenSecret: string, urlFormat: string, bindingRequired: boolean): OAuthProxy
    static $gtype: GObject.Type
}
interface OAuthProxyCall_ConstructProps extends ProxyCall_ConstructProps {
}
class OAuthProxyCall {
    /* Fields of Rest-0.7.Rest.ProxyCall */
    readonly parent: GObject.Object
    readonly priv: ProxyCallPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.OAuthProxyCall */
    parseTokenReponse(): void
    parseTokenResponse(): void
    /* Methods of Rest-0.7.Rest.ProxyCall */
    addHeader(header: string, value: string): void
    addParam(name: string, value: string): void
    addParamFull(param: Param): void
    getFunction(): string
    getMethod(): string
    getParams(): Params
    getPayload(): string
    getPayloadLength(): number
    getResponseHeaders(): GLib.HashTable
    getStatusCode(): number
    getStatusMessage(): string
    invokeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invokeFinish(result: Gio.AsyncResult): boolean
    lookupHeader(header: string): string
    lookupParam(name: string): Param
    lookupResponseHeader(header: string): string
    removeHeader(header: string): void
    removeParam(name: string): void
    run(loop: GLib.MainLoop): boolean
    serializeParams(): [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]
    setFunction(function_: string): void
    setMethod(method: string): void
    sync(): boolean
    upload(callback: ProxyCallUploadCallback, weakObject: GObject.Object): boolean
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
    constructor (config?: OAuthProxyCall_ConstructProps)
    _init (config?: OAuthProxyCall_ConstructProps): void
    static $gtype: GObject.Type
}
interface Proxy_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Rest-0.7.Rest.Proxy */
    bindingRequired?: boolean
    disableCookies?: boolean
    password?: string
    sslCaFile?: string
    sslStrict?: boolean
    urlFormat?: string
    userAgent?: string
    username?: string
}
class Proxy {
    /* Properties of Rest-0.7.Rest.Proxy */
    bindingRequired: boolean
    password: string
    sslCaFile: string
    sslStrict: boolean
    urlFormat: string
    userAgent: string
    username: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.Proxy */
    addSoupFeature(feature: Soup.SessionFeature): void
    getUserAgent(): string
    newCall(): ProxyCall
    setUserAgent(userAgent: string): void
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
    /* Signals of Rest-0.7.Rest.Proxy */
    connect(sigName: "authenticate", callback: ((auth: ProxyAuth, retrying: boolean) => boolean)): number
    on(sigName: "authenticate", callback: (auth: ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (auth: ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (auth: ProxyAuth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", auth: ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::binding-required", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-ca-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: Proxy_ConstructProps)
    _init (config?: Proxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(urlFormat: string, bindingRequired: boolean): Proxy
    static newWithAuthentication(urlFormat: string, bindingRequired: boolean, username: string, password: string): Proxy
    static $gtype: GObject.Type
}
interface ProxyAuth_ConstructProps extends GObject.Object_ConstructProps {
}
class ProxyAuth {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.ProxyAuth */
    cancel(): void
    pause(): void
    unpause(): void
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
    constructor (config?: ProxyAuth_ConstructProps)
    _init (config?: ProxyAuth_ConstructProps): void
    static $gtype: GObject.Type
}
interface ProxyCall_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Rest-0.7.Rest.ProxyCall */
    proxy?: Proxy
}
class ProxyCall {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.ProxyCall */
    addHeader(header: string, value: string): void
    addParam(name: string, value: string): void
    addParamFull(param: Param): void
    getFunction(): string
    getMethod(): string
    getParams(): Params
    getPayload(): string
    getPayloadLength(): number
    getResponseHeaders(): GLib.HashTable
    getStatusCode(): number
    getStatusMessage(): string
    invokeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invokeFinish(result: Gio.AsyncResult): boolean
    lookupHeader(header: string): string
    lookupParam(name: string): Param
    lookupResponseHeader(header: string): string
    removeHeader(header: string): void
    removeParam(name: string): void
    run(loop: GLib.MainLoop): boolean
    serializeParams(): [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]
    setFunction(function_: string): void
    setMethod(method: string): void
    sync(): boolean
    upload(callback: ProxyCallUploadCallback, weakObject: GObject.Object): boolean
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
    constructor (config?: ProxyCall_ConstructProps)
    _init (config?: ProxyCall_ConstructProps): void
    static $gtype: GObject.Type
}
interface XmlParser_ConstructProps extends GObject.Object_ConstructProps {
}
class XmlParser {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.XmlParser */
    parseFromData(data: string, len: number): XmlNode
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
    constructor (config?: XmlParser_ConstructProps)
    _init (config?: XmlParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XmlParser
    static $gtype: GObject.Type
}
abstract class OAuth2ProxyCallClass {
    /* Fields of Rest-0.7.Rest.OAuth2ProxyCallClass */
    readonly parentClass: ProxyCallClass
    static name: string
}
abstract class OAuth2ProxyClass {
    /* Fields of Rest-0.7.Rest.OAuth2ProxyClass */
    readonly parentClass: ProxyClass
    static name: string
}
class OAuth2ProxyPrivate {
    static name: string
}
abstract class OAuthProxyCallClass {
    /* Fields of Rest-0.7.Rest.OAuthProxyCallClass */
    readonly parentClass: ProxyCallClass
    static name: string
}
abstract class OAuthProxyClass {
    /* Fields of Rest-0.7.Rest.OAuthProxyClass */
    readonly parentClass: ProxyClass
    static name: string
}
class Param {
    /* Methods of Rest-0.7.Rest.Param */
    getContent(): object | null
    getContentLength(): number
    getContentType(): string
    getFileName(): string
    getName(): string
    isString(): boolean
    ref(): Param
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newFull(name: string, use: MemoryUse, data: Uint8Array, contentType: string, filename: string): Param
    static newString(name: string, use: MemoryUse, string: string): Param
    static newWithOwner(name: string, data: Uint8Array, contentType: string, filename?: string | null, owner?: object | null, ownerDnotify?: GLib.DestroyNotify | null): Param
}
class Params {
    /* Methods of Rest-0.7.Rest.Params */
    add(param: Param): void
    areStrings(): boolean
    asStringHashTable(): GLib.HashTable
    free(): void
    get(name: string): Param
    remove(name: string): void
    static name: string
}
class ParamsIter {
    /* Methods of Rest-0.7.Rest.ParamsIter */
    init(params: Params): void
    next(): [ /* returnType */ boolean, /* name */ string, /* param */ Param | null ]
    static name: string
}
abstract class ProxyAuthClass {
    /* Fields of Rest-0.7.Rest.ProxyAuthClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ProxyAuthPrivate {
    static name: string
}
abstract class ProxyCallClass {
    /* Fields of Rest-0.7.Rest.ProxyCallClass */
    readonly prepare: (call: ProxyCall) => boolean
    readonly serializeParams: (call: ProxyCall) => [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]
    static name: string
}
class ProxyCallPrivate {
    static name: string
}
abstract class ProxyClass {
    /* Fields of Rest-0.7.Rest.ProxyClass */
    readonly newCall: (proxy: Proxy) => ProxyCall
    readonly authenticate: (proxy: Proxy, auth: ProxyAuth, retrying: boolean) => boolean
    static name: string
}
class XmlNode {
    /* Fields of Rest-0.7.Rest.XmlNode */
    readonly name: string
    readonly content: string
    readonly children: GLib.HashTable
    readonly attrs: GLib.HashTable
    readonly next: XmlNode
    /* Methods of Rest-0.7.Rest.XmlNode */
    addAttr(attribute: string, value: string): void
    addChild(tag: string): XmlNode
    find(tag: string): XmlNode
    free(): void
    getAttr(attrName: string): string
    print(): string
    setContent(value: string): void
    static name: string
}
abstract class XmlParserClass {
    /* Fields of Rest-0.7.Rest.XmlParserClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
}
export default Rest;