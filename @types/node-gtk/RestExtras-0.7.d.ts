/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RestExtras-0.7
 */

import type libxml2 from './libxml2-2.0';
import type Rest from './Rest-0.7';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace RestExtras {

interface YoutubeProxyUploadCallback {
    (proxy: YoutubeProxy, payload: string, total: number, uploaded: number, error: GLib.Error, weakObject: GObject.Object): void
}
interface FlickrProxy_ConstructProps extends Rest.Proxy_ConstructProps {
    /* Constructor properties of RestExtras-0.7.RestExtras.FlickrProxy */
    apiKey?: string
    sharedSecret?: string
    token?: string
}
class FlickrProxy {
    /* Properties of RestExtras-0.7.RestExtras.FlickrProxy */
    token: string
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
    /* Methods of RestExtras-0.7.RestExtras.FlickrProxy */
    buildLoginUrl(frob: string, perms: string): string
    getApiKey(): string
    getSharedSecret(): string
    getToken(): string
    newUpload(): FlickrProxyCall
    newUploadForFile(filename: string): FlickrProxyCall
    setToken(token: string): void
    sign(params: GLib.HashTable): string
    /* Methods of Rest-0.7.Rest.Proxy */
    addSoupFeature(feature: Soup.SessionFeature): void
    getUserAgent(): string
    newCall(): Rest.ProxyCall
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
    connect(sigName: "authenticate", callback: ((auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    on(sigName: "authenticate", callback: (auth: Rest.ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (auth: Rest.ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (auth: Rest.ProxyAuth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", auth: Rest.ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::token", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::token", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::token", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: FlickrProxy_ConstructProps)
    _init (config?: FlickrProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(apiKey: string, sharedSecret: string): FlickrProxy
    /* Function overloads */
    static new(urlFormat: string, bindingRequired: boolean): FlickrProxy
    static newWithToken(apiKey: string, sharedSecret: string, token: string): FlickrProxy
    static isSuccessful(root: Rest.XmlNode): boolean
    static $gtype: GObject.Type
}
interface FlickrProxyCall_ConstructProps extends Rest.ProxyCall_ConstructProps {
    /* Constructor properties of RestExtras-0.7.RestExtras.FlickrProxyCall */
    upload?: boolean
}
class FlickrProxyCall {
    /* Fields of Rest-0.7.Rest.ProxyCall */
    readonly parent: GObject.Object
    readonly priv: Rest.ProxyCallPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.ProxyCall */
    addHeader(header: string, value: string): void
    addParam(name: string, value: string): void
    addParamFull(param: Rest.Param): void
    getFunction(): string
    getMethod(): string
    getParams(): Rest.Params
    getPayload(): string
    getPayloadLength(): number
    getResponseHeaders(): GLib.HashTable
    getStatusCode(): number
    getStatusMessage(): string
    invokeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invokeFinish(result: Gio.AsyncResult): boolean
    lookupHeader(header: string): string
    lookupParam(name: string): Rest.Param
    lookupResponseHeader(header: string): string
    removeHeader(header: string): void
    removeParam(name: string): void
    run(loop: GLib.MainLoop): boolean
    serializeParams(): [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]
    setFunction(function_: string): void
    setMethod(method: string): void
    sync(): boolean
    upload(callback: Rest.ProxyCallUploadCallback, weakObject: GObject.Object): boolean
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
    constructor (config?: FlickrProxyCall_ConstructProps)
    _init (config?: FlickrProxyCall_ConstructProps): void
    static $gtype: GObject.Type
}
interface LastfmProxy_ConstructProps extends Rest.Proxy_ConstructProps {
    /* Constructor properties of RestExtras-0.7.RestExtras.LastfmProxy */
    apiKey?: string
    secret?: string
    sessionKey?: string
}
class LastfmProxy {
    /* Properties of RestExtras-0.7.RestExtras.LastfmProxy */
    sessionKey: string
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
    /* Methods of RestExtras-0.7.RestExtras.LastfmProxy */
    buildLoginUrl(token: string): string
    getApiKey(): string
    getSecret(): string
    getSessionKey(): string
    setSessionKey(sessionKey: string): void
    sign(params: GLib.HashTable): string
    /* Methods of Rest-0.7.Rest.Proxy */
    addSoupFeature(feature: Soup.SessionFeature): void
    getUserAgent(): string
    newCall(): Rest.ProxyCall
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
    connect(sigName: "authenticate", callback: ((auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    on(sigName: "authenticate", callback: (auth: Rest.ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (auth: Rest.ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (auth: Rest.ProxyAuth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", auth: Rest.ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::session-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::session-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::session-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::session-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: LastfmProxy_ConstructProps)
    _init (config?: LastfmProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(apiKey: string, secret: string): LastfmProxy
    /* Function overloads */
    static new(urlFormat: string, bindingRequired: boolean): LastfmProxy
    static newWithSession(apiKey: string, secret: string, sessionKey: string): LastfmProxy
    static isSuccessful(root: Rest.XmlNode): boolean
    static $gtype: GObject.Type
}
interface LastfmProxyCall_ConstructProps extends Rest.ProxyCall_ConstructProps {
}
class LastfmProxyCall {
    /* Fields of Rest-0.7.Rest.ProxyCall */
    readonly parent: GObject.Object
    readonly priv: Rest.ProxyCallPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.ProxyCall */
    addHeader(header: string, value: string): void
    addParam(name: string, value: string): void
    addParamFull(param: Rest.Param): void
    getFunction(): string
    getMethod(): string
    getParams(): Rest.Params
    getPayload(): string
    getPayloadLength(): number
    getResponseHeaders(): GLib.HashTable
    getStatusCode(): number
    getStatusMessage(): string
    invokeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invokeFinish(result: Gio.AsyncResult): boolean
    lookupHeader(header: string): string
    lookupParam(name: string): Rest.Param
    lookupResponseHeader(header: string): string
    removeHeader(header: string): void
    removeParam(name: string): void
    run(loop: GLib.MainLoop): boolean
    serializeParams(): [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]
    setFunction(function_: string): void
    setMethod(method: string): void
    sync(): boolean
    upload(callback: Rest.ProxyCallUploadCallback, weakObject: GObject.Object): boolean
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
    constructor (config?: LastfmProxyCall_ConstructProps)
    _init (config?: LastfmProxyCall_ConstructProps): void
    static $gtype: GObject.Type
}
interface YoutubeProxy_ConstructProps extends Rest.Proxy_ConstructProps {
    /* Constructor properties of RestExtras-0.7.RestExtras.YoutubeProxy */
    developerKey?: string
    userAuth?: string
}
class YoutubeProxy {
    /* Properties of RestExtras-0.7.RestExtras.YoutubeProxy */
    userAuth: string
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
    /* Methods of RestExtras-0.7.RestExtras.YoutubeProxy */
    setUserAuth(userAuth: string): void
    uploadAsync(filename: string, fields: GLib.HashTable, incomplete: boolean, callback: YoutubeProxyUploadCallback, weakObject: GObject.Object): boolean
    /* Methods of Rest-0.7.Rest.Proxy */
    addSoupFeature(feature: Soup.SessionFeature): void
    getUserAgent(): string
    newCall(): Rest.ProxyCall
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
    connect(sigName: "authenticate", callback: ((auth: Rest.ProxyAuth, retrying: boolean) => boolean)): number
    on(sigName: "authenticate", callback: (auth: Rest.ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (auth: Rest.ProxyAuth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (auth: Rest.ProxyAuth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", auth: Rest.ProxyAuth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::user-auth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-auth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: YoutubeProxy_ConstructProps)
    _init (config?: YoutubeProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(developerKey: string): YoutubeProxy
    /* Function overloads */
    static new(urlFormat: string, bindingRequired: boolean): YoutubeProxy
    static newWithAuth(developerKey: string, userAuth: string): YoutubeProxy
    static $gtype: GObject.Type
}
abstract class FlickrProxyCallClass {
    /* Fields of RestExtras-0.7.RestExtras.FlickrProxyCallClass */
    readonly parentClass: Rest.ProxyCallClass
    static name: string
}
abstract class FlickrProxyClass {
    /* Fields of RestExtras-0.7.RestExtras.FlickrProxyClass */
    readonly parentClass: Rest.ProxyClass
    static name: string
}
class FlickrProxyPrivate {
    static name: string
}
abstract class LastfmProxyCallClass {
    /* Fields of RestExtras-0.7.RestExtras.LastfmProxyCallClass */
    readonly parentClass: Rest.ProxyCallClass
    static name: string
}
abstract class LastfmProxyClass {
    /* Fields of RestExtras-0.7.RestExtras.LastfmProxyClass */
    readonly parentClass: Rest.ProxyClass
    static name: string
}
class LastfmProxyPrivate {
    static name: string
}
abstract class YoutubeProxyClass {
    /* Fields of RestExtras-0.7.RestExtras.YoutubeProxyClass */
    readonly parentClass: Rest.ProxyClass
    static name: string
}
class YoutubeProxyPrivate {
    static name: string
}
}
export default RestExtras;