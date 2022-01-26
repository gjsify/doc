/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Zpj-0.0
 */

import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Rest from './Rest-0.7';
import type Json from './Json-1.0';

export namespace Zpj {

enum Error {
    REQUEST_URL_INVALID,
    UNKNOWN,
}
enum SkydriveEntryType {
    FILE,
    FOLDER,
    PHOTO,
    VIDEO,
    INVALID,
}
enum ThumbnailSize {
    SMALL,
    NORMAL,
}
const SKYDRIVE_FOLDER_MY_DOCUMENTS: string
const SKYDRIVE_FOLDER_MY_PHOTOS: string
const SKYDRIVE_FOLDER_PUBLIC_DOCUMENTS: string
const SKYDRIVE_FOLDER_SKYDRIVE: string
function errorQuark(): GLib.Quark
class Authorizer {
    /* Methods of Zpj-0.0.Zpj.Authorizer */
    isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    processCall(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void
    processMessage(domain: AuthorizationDomain | null, message: Soup.Message): void
    refreshAuthorization(cancellable?: Gio.Cancellable | null): boolean
    refreshAuthorizationAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshAuthorizationFinish(res: Gio.AsyncResult): boolean
    static name: string
}
interface AuthorizationDomain_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Zpj-0.0.Zpj.AuthorizationDomain */
    scope?: string
    serviceName?: string
}
class AuthorizationDomain {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.AuthorizationDomain */
    getScope(): string
    getServiceName(): string
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
    constructor (config?: AuthorizationDomain_ConstructProps)
    _init (config?: AuthorizationDomain_ConstructProps): void
    static $gtype: GObject.Type
}
interface GoaAuthorizer_ConstructProps extends GObject.Object_ConstructProps {
}
class GoaAuthorizer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    /* Methods of Zpj-0.0.Zpj.Authorizer */
    isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    processCall(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void
    processMessage(domain: AuthorizationDomain | null, message: Soup.Message): void
    refreshAuthorization(cancellable?: Gio.Cancellable | null): boolean
    refreshAuthorizationAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshAuthorizationFinish(res: Gio.AsyncResult): boolean
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
    constructor (config?: GoaAuthorizer_ConstructProps)
    _init (config?: GoaAuthorizer_ConstructProps): void
    static $gtype: GObject.Type
}
interface Skydrive_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Zpj-0.0.Zpj.Skydrive */
    authorizer?: Authorizer
}
class Skydrive {
    /* Properties of Zpj-0.0.Zpj.Skydrive */
    authorizer: Authorizer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.Skydrive */
    createFolder(folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): boolean
    createFolderFromName(name: string, parentId: string, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryId(entryId: string, cancellable?: Gio.Cancellable | null): boolean
    downloadFileIdToPath(fileId: string, path: string, cancellable?: Gio.Cancellable | null): boolean
    downloadFileIdToStream(fileId: string, cancellable?: Gio.Cancellable | null): Gio.InputStream
    downloadFileIdToStreamAsync(fileId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    downloadFileIdToStreamFinish(res: Gio.AsyncResult): Gio.InputStream
    downloadFileToPath(file: SkydriveFile, path: string, cancellable?: Gio.Cancellable | null): boolean
    downloadFileToStream(file: SkydriveFile, cancellable?: Gio.Cancellable | null): Gio.InputStream
    downloadFileToStreamAsync(file: SkydriveFile, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    downloadFileToStreamFinish(res: Gio.AsyncResult): Gio.InputStream
    getAuthorizer(): Authorizer
    listFolder(folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): SkydriveEntry[]
    listFolderId(folderId: string, cancellable?: Gio.Cancellable | null): SkydriveEntry[]
    listFolderIdAsync(folderId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    listFolderIdFinish(res: Gio.AsyncResult): SkydriveEntry[]
    queryInfoFromId(id: string, cancellable?: Gio.Cancellable | null): SkydriveEntry
    queryInfoFromIdAsync(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryInfoFromIdFinish(res: Gio.AsyncResult): SkydriveEntry
    setAuthorizer(authorizer: Authorizer): void
    thumbnailFileIdToStream(fileId: string, size: ThumbnailSize, cancellable?: Gio.Cancellable | null): Gio.InputStream
    uploadPathToFolder(path: string, folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): boolean
    uploadPathToFolderId(path: string, folderId: string, cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Skydrive_ConstructProps)
    _init (config?: Skydrive_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer: Authorizer): Skydrive
    static $gtype: GObject.Type
}
interface SkydriveEntry_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Zpj-0.0.Zpj.SkydriveEntry */
    json?: Json.Node
}
class SkydriveEntry {
    /* Properties of Zpj-0.0.Zpj.SkydriveEntry */
    readonly createdTime: GLib.DateTime
    readonly description: string
    readonly fromId: string
    readonly fromName: string
    readonly id: string
    readonly name: string
    readonly parentId: string
    readonly type: SkydriveEntryType
    readonly updatedTime: GLib.DateTime
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.SkydriveEntry */
    getCreatedTime(): GLib.DateTime
    getDescription(): string
    getFromId(): string
    getFromName(): string
    getId(): string
    getName(): string
    getParentId(): string
    getUpdatedTime(): GLib.DateTime
    isFolder(): boolean
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
    connect(sigName: "notify::created-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SkydriveEntry_ConstructProps)
    _init (config?: SkydriveEntry_ConstructProps): void
    static $gtype: GObject.Type
}
interface SkydriveFile_ConstructProps extends SkydriveEntry_ConstructProps {
}
class SkydriveFile {
    /* Properties of Zpj-0.0.Zpj.SkydriveFile */
    readonly size: number
    /* Properties of Zpj-0.0.Zpj.SkydriveEntry */
    readonly createdTime: GLib.DateTime
    readonly description: string
    readonly fromId: string
    readonly fromName: string
    readonly id: string
    readonly name: string
    readonly parentId: string
    readonly type: SkydriveEntryType
    readonly updatedTime: GLib.DateTime
    /* Fields of Zpj-0.0.Zpj.SkydriveEntry */
    readonly parentInstance: GObject.Object
    readonly priv: SkydriveEntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.SkydriveFile */
    getSize(): number
    /* Methods of Zpj-0.0.Zpj.SkydriveEntry */
    getCreatedTime(): GLib.DateTime
    getDescription(): string
    getFromId(): string
    getFromName(): string
    getId(): string
    getName(): string
    getParentId(): string
    getUpdatedTime(): GLib.DateTime
    isFolder(): boolean
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
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SkydriveFile_ConstructProps)
    _init (config?: SkydriveFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node: Json.Node): SkydriveFile
    static $gtype: GObject.Type
}
interface SkydriveFolder_ConstructProps extends SkydriveEntry_ConstructProps {
}
class SkydriveFolder {
    /* Properties of Zpj-0.0.Zpj.SkydriveEntry */
    readonly createdTime: GLib.DateTime
    readonly description: string
    readonly fromId: string
    readonly fromName: string
    readonly id: string
    readonly name: string
    readonly parentId: string
    readonly type: SkydriveEntryType
    readonly updatedTime: GLib.DateTime
    /* Fields of Zpj-0.0.Zpj.SkydriveEntry */
    readonly parentInstance: GObject.Object
    readonly priv: SkydriveEntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.SkydriveEntry */
    getCreatedTime(): GLib.DateTime
    getDescription(): string
    getFromId(): string
    getFromName(): string
    getId(): string
    getName(): string
    getParentId(): string
    getUpdatedTime(): GLib.DateTime
    isFolder(): boolean
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
    connect(sigName: "notify::created-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SkydriveFolder_ConstructProps)
    _init (config?: SkydriveFolder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node: Json.Node): SkydriveFolder
    static $gtype: GObject.Type
}
interface SkydrivePhoto_ConstructProps extends SkydriveFile_ConstructProps {
}
class SkydrivePhoto {
    /* Properties of Zpj-0.0.Zpj.SkydriveFile */
    readonly size: number
    /* Properties of Zpj-0.0.Zpj.SkydriveEntry */
    readonly createdTime: GLib.DateTime
    readonly description: string
    readonly fromId: string
    readonly fromName: string
    readonly id: string
    readonly name: string
    readonly parentId: string
    readonly type: SkydriveEntryType
    readonly updatedTime: GLib.DateTime
    /* Fields of Zpj-0.0.Zpj.SkydriveFile */
    readonly parentInstance: SkydriveEntry
    readonly priv: SkydriveFilePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.SkydriveFile */
    getSize(): number
    /* Methods of Zpj-0.0.Zpj.SkydriveEntry */
    getCreatedTime(): GLib.DateTime
    getDescription(): string
    getFromId(): string
    getFromName(): string
    getId(): string
    getName(): string
    getParentId(): string
    getUpdatedTime(): GLib.DateTime
    isFolder(): boolean
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
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SkydrivePhoto_ConstructProps)
    _init (config?: SkydrivePhoto_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node: Json.Node): SkydrivePhoto
    /* Function overloads */
    static new(node: Json.Node): SkydrivePhoto
    static $gtype: GObject.Type
}
interface SkydriveVideo_ConstructProps extends SkydriveFile_ConstructProps {
}
class SkydriveVideo {
    /* Properties of Zpj-0.0.Zpj.SkydriveVideo */
    readonly bitrate: number
    readonly duration: number
    readonly height: number
    readonly width: number
    /* Properties of Zpj-0.0.Zpj.SkydriveFile */
    readonly size: number
    /* Properties of Zpj-0.0.Zpj.SkydriveEntry */
    readonly createdTime: GLib.DateTime
    readonly description: string
    readonly fromId: string
    readonly fromName: string
    readonly id: string
    readonly name: string
    readonly parentId: string
    readonly type: SkydriveEntryType
    readonly updatedTime: GLib.DateTime
    /* Fields of Zpj-0.0.Zpj.SkydriveFile */
    readonly parentInstance: SkydriveEntry
    readonly priv: SkydriveFilePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Zpj-0.0.Zpj.SkydriveVideo */
    getBitrate(): number
    getDuration(): number
    getHeight(): number
    getWidth(): number
    /* Methods of Zpj-0.0.Zpj.SkydriveFile */
    getSize(): number
    /* Methods of Zpj-0.0.Zpj.SkydriveEntry */
    getCreatedTime(): GLib.DateTime
    getDescription(): string
    getFromId(): string
    getFromName(): string
    getId(): string
    getName(): string
    getParentId(): string
    getUpdatedTime(): GLib.DateTime
    isFolder(): boolean
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
    connect(sigName: "notify::bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SkydriveVideo_ConstructProps)
    _init (config?: SkydriveVideo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node: Json.Node): SkydriveVideo
    /* Function overloads */
    static new(node: Json.Node): SkydriveVideo
    static $gtype: GObject.Type
}
abstract class AuthorizationDomainClass {
    /* Fields of Zpj-0.0.Zpj.AuthorizationDomainClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class AuthorizationDomainPrivate {
    static name: string
}
abstract class AuthorizerInterface {
    /* Fields of Zpj-0.0.Zpj.AuthorizerInterface */
    readonly parentIface: GObject.TypeInterface
    readonly isAuthorizedForDomain: (iface: Authorizer, domain: AuthorizationDomain) => boolean
    readonly processCall: (iface: Authorizer, domain: AuthorizationDomain | null, call: Rest.ProxyCall) => void
    readonly processMessage: (iface: Authorizer, domain: AuthorizationDomain | null, message: Soup.Message) => void
    readonly refreshAuthorization: (iface: Authorizer, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
abstract class GoaAuthorizerClass {
    /* Fields of Zpj-0.0.Zpj.GoaAuthorizerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class GoaAuthorizerPrivate {
    static name: string
}
abstract class SkydriveClass {
    /* Fields of Zpj-0.0.Zpj.SkydriveClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SkydriveEntryClass {
    /* Fields of Zpj-0.0.Zpj.SkydriveEntryClass */
    readonly parentClass: GObject.ObjectClass
    readonly parseJsonNode: (self: SkydriveEntry, node: Json.Node) => void
    static name: string
}
class SkydriveEntryPrivate {
    static name: string
}
abstract class SkydriveFileClass {
    /* Fields of Zpj-0.0.Zpj.SkydriveFileClass */
    readonly parentClass: SkydriveEntryClass
    static name: string
}
class SkydriveFilePrivate {
    static name: string
}
abstract class SkydriveFolderClass {
    /* Fields of Zpj-0.0.Zpj.SkydriveFolderClass */
    readonly parentClass: SkydriveEntryClass
    static name: string
}
abstract class SkydrivePhotoClass {
    /* Fields of Zpj-0.0.Zpj.SkydrivePhotoClass */
    readonly parentClass: SkydriveFileClass
    static name: string
}
class SkydrivePrivate {
    static name: string
}
abstract class SkydriveVideoClass {
    /* Fields of Zpj-0.0.Zpj.SkydriveVideoClass */
    readonly parentClass: SkydriveFileClass
    static name: string
}
class SkydriveVideoPrivate {
    static name: string
}
}
export default Zpj;