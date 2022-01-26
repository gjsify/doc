/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Snapd-1
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Snapd {

enum AliasStatus {
    UNKNOWN,
    DEFAULT,
    ENABLED,
    DISABLED,
    AUTO,
    MANUAL,
}
enum ChangeFilter {
    ALL,
    IN_PROGRESS,
    READY,
}
enum Confinement {
    UNKNOWN,
    STRICT,
    DEVMODE,
    CLASSIC,
}
enum DaemonType {
    NONE,
    UNKNOWN,
    SIMPLE,
    FORKING,
    ONESHOT,
    DBUS,
    NOTIFY,
}
enum Error {
    CONNECTION_FAILED,
    WRITE_FAILED,
    READ_FAILED,
    BAD_REQUEST,
    BAD_RESPONSE,
    AUTH_DATA_REQUIRED,
    AUTH_DATA_INVALID,
    TWO_FACTOR_REQUIRED,
    TWO_FACTOR_INVALID,
    PERMISSION_DENIED,
    FAILED,
    TERMS_NOT_ACCEPTED,
    PAYMENT_NOT_SETUP,
    PAYMENT_DECLINED,
    ALREADY_INSTALLED,
    NOT_INSTALLED,
    NO_UPDATE_AVAILABLE,
    PASSWORD_POLICY_ERROR,
    NEEDS_DEVMODE,
    NEEDS_CLASSIC,
    NEEDS_CLASSIC_SYSTEM,
    BAD_QUERY,
    NETWORK_TIMEOUT,
    NOT_FOUND,
    NOT_IN_STORE,
    AUTH_CANCELLED,
    NOT_CLASSIC,
    REVISION_NOT_AVAILABLE,
    CHANNEL_NOT_AVAILABLE,
    NOT_A_SNAP,
    DNS_FAILURE,
    OPTION_NOT_FOUND,
}
enum MaintenanceKind {
    UNKNOWN,
    DAEMON_RESTART,
    SYSTEM_RESTART,
}
enum MarkdownNodeType {
    TEXT,
    PARAGRAPH,
    UNORDERED_LIST,
    LIST_ITEM,
    CODE_BLOCK,
    CODE_SPAN,
    EMPHASIS,
    STRONG_EMPHASIS,
    URL,
}
enum MarkdownVersion {
    TODO_0,
}
enum PublisherValidation {
    UNKNOWN,
    UNPROVEN,
    VERIFIED,
}
enum SnapStatus {
    UNKNOWN,
    AVAILABLE,
    PRICED,
    INSTALLED,
    ACTIVE,
}
enum SnapType {
    UNKNOWN,
    APP,
    KERNEL,
    GADGET,
    OS,
    CORE,
    BASE,
    SNAPD,
}
enum SystemConfinement {
    UNKNOWN,
    STRICT,
    PARTIAL,
}
enum CreateUserFlags {
    NONE,
    SUDO,
    KNOWN,
}
enum FindFlags {
    NONE,
    MATCH_NAME,
    SELECT_PRIVATE,
    SELECT_REFRESH,
    SCOPE_WIDE,
    MATCH_COMMON_ID,
}
enum GetAppsFlags {
    NONE,
    SELECT_SERVICES,
}
enum GetConnectionsFlags {
    NONE,
    SELECT_ALL,
}
enum GetInterfacesFlags {
    NONE,
    INCLUDE_DOCS,
    INCLUDE_PLUGS,
    INCLUDE_SLOTS,
    ONLY_CONNECTED,
}
enum GetSnapsFlags {
    NONE,
    INCLUDE_INACTIVE,
}
enum InstallFlags {
    NONE,
    CLASSIC,
    DANGEROUS,
    DEVMODE,
    JAILMODE,
}
enum RemoveFlags {
    NONE,
    PURGE,
}
function errorQuark(): GLib.Quark
function loginAsync(username: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function loginFinish(result: Gio.AsyncResult): AuthData
function loginSync(username: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null): AuthData
interface ProgressCallback {
    (client: Client, change: Change, deprecated?: object | null): void
}
interface Alias_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Alias */
    appAuto?: string
    appManual?: string
    command?: string
    name?: string
    snap?: string
    status?: AliasStatus
}
class Alias {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Alias */
    getApp(): string | null
    getAppAuto(): string | null
    getAppManual(): string | null
    getCommand(): string
    getName(): string
    getSnap(): string
    getStatus(): AliasStatus
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
    constructor (config?: Alias_ConstructProps)
    _init (config?: Alias_ConstructProps): void
    static $gtype: GObject.Type
}
interface App_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.App */
    active?: boolean
    aliases?: string[]
    commonId?: string
    daemonType?: DaemonType
    desktopFile?: string
    enabled?: boolean
    name?: string
    snap?: string
}
class App {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.App */
    getActive(): boolean
    getAliases(): string[]
    getCommonId(): string | null
    getDaemonType(): DaemonType | null
    getDesktopFile(): string | null
    getEnabled(): boolean
    getName(): string
    getSnap(): string
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
    constructor (config?: App_ConstructProps)
    _init (config?: App_ConstructProps): void
    static $gtype: GObject.Type
}
interface Assertion_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Assertion */
    content?: string
}
class Assertion {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Assertion */
    getBody(): string | null
    getHeader(name: string): string | null
    getHeaders(): string[]
    getSignature(): string
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
    constructor (config?: Assertion_ConstructProps)
    _init (config?: Assertion_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(content: string): Assertion
    static $gtype: GObject.Type
}
interface AuthData_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.AuthData */
    discharges?: string[]
    macaroon?: string
}
class AuthData {
    /* Properties of Snapd-1.Snapd.AuthData */
    discharges: string[]
    macaroon: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.AuthData */
    getDischarges(): string[]
    getMacaroon(): string
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
    connect(sigName: "notify::discharges", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discharges", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discharges", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discharges", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discharges", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::macaroon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::macaroon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::macaroon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::macaroon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::macaroon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthData_ConstructProps)
    _init (config?: AuthData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(macaroon: string, discharges: string[]): AuthData
    static $gtype: GObject.Type
}
interface Change_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Change */
    error?: string
    id?: string
    kind?: string
    ready?: boolean
    readyTime?: GLib.DateTime
    spawnTime?: GLib.DateTime
    status?: string
    summary?: string
    tasks?: object[]
}
class Change {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Change */
    getError(): string | null
    getId(): string
    getKind(): string
    getReady(): boolean
    getReadyTime(): GLib.DateTime | null
    getSpawnTime(): GLib.DateTime
    getStatus(): string
    getSummary(): string
    getTasks(): Task[]
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
    constructor (config?: Change_ConstructProps)
    _init (config?: Change_ConstructProps): void
    static $gtype: GObject.Type
}
interface Channel_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Channel */
    confinement?: Confinement
    epoch?: string
    name?: string
    releasedAt?: GLib.DateTime
    revision?: string
    size?: number
    version?: string
}
class Channel {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Channel */
    getBranch(): string | null
    getConfinement(): Confinement
    getEpoch(): string
    getName(): string
    getReleasedAt(): GLib.DateTime | null
    getRevision(): string
    getRisk(): string
    getSize(): number
    getTrack(): string
    getVersion(): string
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
    constructor (config?: Channel_ConstructProps)
    _init (config?: Channel_ConstructProps): void
    static $gtype: GObject.Type
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
class Client {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Client */
    abortChangeAsync(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    abortChangeFinish(result: Gio.AsyncResult): Change
    abortChangeSync(id: string, cancellable?: Gio.Cancellable | null): Change
    addAssertionsAsync(assertions: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addAssertionsFinish(result: Gio.AsyncResult): boolean
    addAssertionsSync(assertions: string[], cancellable?: Gio.Cancellable | null): boolean
    aliasAsync(snap: string, app: string, alias: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    aliasFinish(result: Gio.AsyncResult): boolean
    aliasSync(snap: string, app: string, alias: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    buyAsync(id: string, amount: number, currency: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    buyFinish(result: Gio.AsyncResult): boolean
    buySync(id: string, amount: number, currency: string, cancellable?: Gio.Cancellable | null): boolean
    checkBuyAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    checkBuyFinish(result: Gio.AsyncResult): boolean
    checkBuySync(cancellable?: Gio.Cancellable | null): boolean
    connectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): boolean
    connectInterfaceAsync(plugSnap: string, plugName: string, slotSnap: string, slotName: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectInterfaceFinish(result: Gio.AsyncResult): boolean
    connectInterfaceSync(plugSnap: string, plugName: string, slotSnap: string, slotName: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    connectSync(cancellable?: Gio.Cancellable | null): boolean
    createUserAsync(email: string, flags: CreateUserFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createUserFinish(result: Gio.AsyncResult): UserInformation
    createUserSync(email: string, flags: CreateUserFlags, cancellable?: Gio.Cancellable | null): UserInformation
    createUsersAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createUsersFinish(result: Gio.AsyncResult): UserInformation[]
    createUsersSync(cancellable?: Gio.Cancellable | null): UserInformation[]
    disableAliasesAsync(snap: string, aliases: string[], progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disableAliasesFinish(result: Gio.AsyncResult): boolean
    disableAliasesSync(snap: string, aliases: string[], progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    disableAsync(name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disableFinish(result: Gio.AsyncResult): boolean
    disableSync(name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    disconnectInterfaceAsync(plugSnap: string, plugName: string, slotSnap: string, slotName: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnectInterfaceFinish(result: Gio.AsyncResult): boolean
    disconnectInterfaceSync(plugSnap: string, plugName: string, slotSnap: string, slotName: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    downloadAsync(name: string, channel?: string | null, revision?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    downloadFinish(result: Gio.AsyncResult): any
    downloadSync(name: string, channel?: string | null, revision?: string | null, cancellable?: Gio.Cancellable | null): any
    enableAliasesAsync(snap: string, aliases: string[], progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    enableAliasesFinish(result: Gio.AsyncResult): boolean
    enableAliasesSync(snap: string, aliases: string[], progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    enableAsync(name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    enableFinish(result: Gio.AsyncResult): boolean
    enableSync(name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    findAsync(flags: FindFlags, query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findFinish(result: Gio.AsyncResult): [ /* returnType */ Snap[], /* suggestedCurrency */ string | null ]
    findRefreshableAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findRefreshableFinish(result: Gio.AsyncResult): Snap[]
    findRefreshableSync(cancellable?: Gio.Cancellable | null): Snap[]
    findSectionAsync(flags: FindFlags, section?: string | null, query?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    findSectionFinish(result: Gio.AsyncResult): [ /* returnType */ Snap[], /* suggestedCurrency */ string | null ]
    findSectionSync(flags: FindFlags, section?: string | null, query?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ Snap[], /* suggestedCurrency */ string | null ]
    findSync(flags: FindFlags, query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ Snap[], /* suggestedCurrency */ string | null ]
    getAliasesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAliasesFinish(result: Gio.AsyncResult): Alias[]
    getAliasesSync(cancellable?: Gio.Cancellable | null): Alias[]
    getAllowInteraction(): boolean
    getApps2Async(flags: GetAppsFlags, snaps?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getApps2Finish(result: Gio.AsyncResult): App[]
    getApps2Sync(flags: GetAppsFlags, snaps?: string[] | null, cancellable?: Gio.Cancellable | null): App[]
    getAppsAsync(flags: GetAppsFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAppsFinish(result: Gio.AsyncResult): App[]
    getAppsSync(flags: GetAppsFlags, cancellable?: Gio.Cancellable | null): App[]
    getAssertionsAsync(type: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAssertionsFinish(result: Gio.AsyncResult): string[]
    getAssertionsSync(type: string, cancellable?: Gio.Cancellable | null): string[]
    getAuthData(): AuthData | null
    getChangeAsync(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getChangeFinish(result: Gio.AsyncResult): Change
    getChangeSync(id: string, cancellable?: Gio.Cancellable | null): Change
    getChangesAsync(filter: ChangeFilter, snapName?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getChangesFinish(result: Gio.AsyncResult): Change[]
    getChangesSync(filter: ChangeFilter, snapName?: string | null, cancellable?: Gio.Cancellable | null): Change[]
    getConnections2Async(flags: GetConnectionsFlags, snap?: string | null, interface?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getConnections2Finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* established */ Connection[] | null, /* undesired */ Connection[] | null, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    getConnections2Sync(flags: GetConnectionsFlags, snap?: string | null, interface?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* established */ Connection[] | null, /* undesired */ Connection[] | null, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    getConnectionsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getConnectionsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* established */ Connection[] | null, /* undesired */ Connection[] | null, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    getConnectionsSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* established */ Connection[] | null, /* undesired */ Connection[] | null, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    getIconAsync(name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getIconFinish(result: Gio.AsyncResult): Icon
    getIconSync(name: string, cancellable?: Gio.Cancellable | null): Icon
    getInterfaces2Async(flags: GetInterfacesFlags, names?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getInterfaces2Finish(result: Gio.AsyncResult): Interface[]
    getInterfaces2Sync(flags: GetInterfacesFlags, names?: string[] | null, cancellable?: Gio.Cancellable | null): Interface[]
    getInterfacesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getInterfacesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    getInterfacesSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    getMaintenance(): Maintenance | null
    getSectionsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSectionsFinish(result: Gio.AsyncResult): string[]
    getSectionsSync(cancellable?: Gio.Cancellable | null): string[]
    getSnapAsync(name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSnapConfAsync(name: string, keys?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSnapConfFinish(result: Gio.AsyncResult): GLib.HashTable
    getSnapConfSync(name: string, keys?: string[] | null, cancellable?: Gio.Cancellable | null): GLib.HashTable
    getSnapFinish(result: Gio.AsyncResult): Snap
    getSnapSync(name: string, cancellable?: Gio.Cancellable | null): Snap
    getSnapsAsync(flags: GetSnapsFlags, names?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSnapsFinish(result: Gio.AsyncResult): Snap[]
    getSnapsSync(flags: GetSnapsFlags, names?: string[] | null, cancellable?: Gio.Cancellable | null): Snap[]
    getSocketPath(): string
    getSystemInformationAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSystemInformationFinish(result: Gio.AsyncResult): SystemInformation
    getSystemInformationSync(cancellable?: Gio.Cancellable | null): SystemInformation
    getUserAgent(): string | null
    getUsersAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getUsersFinish(result: Gio.AsyncResult): UserInformation[]
    getUsersSync(cancellable?: Gio.Cancellable | null): UserInformation[]
    install2Async(flags: InstallFlags, name: string, channel?: string | null, revision?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    install2Finish(result: Gio.AsyncResult): boolean
    install2Sync(flags: InstallFlags, name: string, channel?: string | null, revision?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    installAsync(name: string, channel?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    installFinish(result: Gio.AsyncResult): boolean
    installStreamAsync(flags: InstallFlags, stream: Gio.InputStream, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    installStreamFinish(result: Gio.AsyncResult): boolean
    installStreamSync(flags: InstallFlags, stream: Gio.InputStream, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    installSync(name: string, channel?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    listAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    listFinish(result: Gio.AsyncResult): Snap[]
    listOneAsync(name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    listOneFinish(result: Gio.AsyncResult): Snap
    listOneSync(name: string, cancellable?: Gio.Cancellable | null): Snap
    listSync(cancellable?: Gio.Cancellable | null): Snap[]
    login2Async(email: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    login2Finish(result: Gio.AsyncResult): UserInformation
    login2Sync(email: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null): UserInformation
    loginAsync(email: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loginFinish(result: Gio.AsyncResult): AuthData
    loginSync(email: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null): AuthData
    logoutAsync(id: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    logoutFinish(result: Gio.AsyncResult): boolean
    logoutSync(id: number, cancellable?: Gio.Cancellable | null): boolean
    preferAsync(snap: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    preferFinish(result: Gio.AsyncResult): boolean
    preferSync(snap: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    refreshAllAsync(progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshAllFinish(result: Gio.AsyncResult): string[]
    refreshAllSync(progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): string[]
    refreshAsync(name: string, channel?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    refreshSync(name: string, channel?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    remove2Async(flags: RemoveFlags, name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove2Finish(result: Gio.AsyncResult): boolean
    remove2Sync(flags: RemoveFlags, name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    removeAsync(name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeFinish(result: Gio.AsyncResult): boolean
    removeSync(name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    resetAliasesAsync(snap: string, aliases: string[], progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resetAliasesFinish(result: Gio.AsyncResult): boolean
    resetAliasesSync(snap: string, aliases: string[], progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    runSnapctlAsync(contextId: string, args: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runSnapctlFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* stdoutOutput */ string | null, /* stderrOutput */ string | null ]
    runSnapctlSync(contextId: string, args: string[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* stdoutOutput */ string[] | null, /* stderrOutput */ string[] | null ]
    setAllowInteraction(allowInteraction: boolean): void
    setAuthData(authData?: AuthData | null): void
    setSnapConfAsync(name: string, keyValues: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setSnapConfFinish(result: Gio.AsyncResult): boolean
    setSnapConfSync(name: string, keyValues: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    setSocketPath(socketPath?: string | null): void
    setUserAgent(userAgent?: string | null): void
    switchAsync(name: string, channel: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    switchFinish(result: Gio.AsyncResult): boolean
    switchSync(name: string, channel: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    tryAsync(path: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryFinish(result: Gio.AsyncResult): boolean
    trySync(path: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    unaliasAsync(snap?: string | null, alias?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unaliasFinish(result: Gio.AsyncResult): boolean
    unaliasSync(snap?: string | null, alias?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
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
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static newFromSocket(socket: Gio.Socket): Client
    static $gtype: GObject.Type
}
interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Connection */
    gadget?: boolean
    interface?: string
    manual?: boolean
    name?: string
    plug?: PlugRef
    plugAttrs?: GLib.HashTable
    slot?: SlotRef
    slotAttrs?: GLib.HashTable
    snap?: string
}
class Connection {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Connection */
    getGadget(): boolean
    getInterface(): string
    getManual(): boolean
    getName(): string
    getPlug(): PlugRef
    getPlugAttribute(name: string): GLib.Variant | null
    getPlugAttributeNames(): [ /* returnType */ string[], /* length */ number | null ]
    getSlot(): SlotRef
    getSlotAttribute(name: string): GLib.Variant | null
    getSlotAttributeNames(): [ /* returnType */ string[], /* length */ number | null ]
    getSnap(): string
    hasPlugAttribute(name: string): boolean
    hasSlotAttribute(name: string): boolean
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
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    static $gtype: GObject.Type
}
interface Icon_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Icon */
    data?: any
    mimeType?: string
}
class Icon {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Icon */
    getData(): any
    getMimeType(): string
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
    constructor (config?: Icon_ConstructProps)
    _init (config?: Icon_ConstructProps): void
    static $gtype: GObject.Type
}
interface Interface_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Interface */
    docUrl?: string
    name?: string
    plugs?: object[]
    slots?: object[]
    summary?: string
}
class Interface {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Interface */
    getDocUrl(): string
    getName(): string
    getPlugs(): Plug[]
    getSlots(): Slot[]
    getSummary(): string
    makeLabel(): string
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
interface Maintenance_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Maintenance */
    kind?: MaintenanceKind
    message?: string
}
class Maintenance {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Maintenance */
    getKind(): MaintenanceKind
    getMessage(): string
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
    constructor (config?: Maintenance_ConstructProps)
    _init (config?: Maintenance_ConstructProps): void
    static $gtype: GObject.Type
}
interface MarkdownNode_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.MarkdownNode */
    children?: object[]
    nodeType?: MarkdownNodeType
    text?: string
}
class MarkdownNode {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.MarkdownNode */
    getChildren(): MarkdownNode[]
    getNodeType(): MarkdownNodeType
    getText(): string
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
    constructor (config?: MarkdownNode_ConstructProps)
    _init (config?: MarkdownNode_ConstructProps): void
    static $gtype: GObject.Type
}
interface MarkdownParser_ConstructProps extends GObject.Object_ConstructProps {
}
class MarkdownParser {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.MarkdownParser */
    getPreserveWhitespace(): boolean
    parse(text: string): MarkdownNode[]
    setPreserveWhitespace(preserveWhitespace: boolean): void
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
    constructor (config?: MarkdownParser_ConstructProps)
    _init (config?: MarkdownParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(version: MarkdownVersion): MarkdownParser
    static $gtype: GObject.Type
}
interface Media_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Media */
    height?: number
    type?: string
    url?: string
    width?: number
}
class Media {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Media */
    getHeight(): number
    getMediaType(): string
    getUrl(): string
    getWidth(): number
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
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    static $gtype: GObject.Type
}
interface Plug_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Plug */
    attributes?: GLib.HashTable
    connections?: object[]
    interface?: string
    label?: string
    name?: string
    snap?: string
}
class Plug {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Plug */
    getAttribute(name: string): GLib.Variant | null
    getAttributeNames(): [ /* returnType */ string[], /* length */ number | null ]
    getConnectedSlots(): SlotRef[]
    getConnections(): Connection[]
    getInterface(): string
    getLabel(): string
    getName(): string
    getSnap(): string
    hasAttribute(name: string): boolean
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
    constructor (config?: Plug_ConstructProps)
    _init (config?: Plug_ConstructProps): void
    static $gtype: GObject.Type
}
interface PlugRef_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.PlugRef */
    plug?: string
    snap?: string
}
class PlugRef {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.PlugRef */
    getPlug(): string
    getSnap(): string
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
    constructor (config?: PlugRef_ConstructProps)
    _init (config?: PlugRef_ConstructProps): void
    static $gtype: GObject.Type
}
interface Price_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Price */
    amount?: number
    currency?: string
}
class Price {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Price */
    getAmount(): number
    getCurrency(): string
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
    constructor (config?: Price_ConstructProps)
    _init (config?: Price_ConstructProps): void
    static $gtype: GObject.Type
}
interface Screenshot_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Screenshot */
    height?: number
    url?: string
    width?: number
}
class Screenshot {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Screenshot */
    getHeight(): number
    getUrl(): string
    getWidth(): number
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
    constructor (config?: Screenshot_ConstructProps)
    _init (config?: Screenshot_ConstructProps): void
    static $gtype: GObject.Type
}
interface Slot_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Slot */
    attributes?: GLib.HashTable
    connections?: object[]
    interface?: string
    label?: string
    name?: string
    snap?: string
}
class Slot {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Slot */
    getAttribute(name: string): GLib.Variant | null
    getAttributeNames(): [ /* returnType */ string[], /* length */ number | null ]
    getConnectedPlugs(): PlugRef[]
    getConnections(): Connection[]
    getInterface(): string
    getLabel(): string
    getName(): string
    getSnap(): string
    hasAttribute(name: string): boolean
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
    constructor (config?: Slot_ConstructProps)
    _init (config?: Slot_ConstructProps): void
    static $gtype: GObject.Type
}
interface SlotRef_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.SlotRef */
    slot?: string
    snap?: string
}
class SlotRef {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.SlotRef */
    getSlot(): string
    getSnap(): string
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
    constructor (config?: SlotRef_ConstructProps)
    _init (config?: SlotRef_ConstructProps): void
    static $gtype: GObject.Type
}
interface Snap_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Snap */
    apps?: object[]
    base?: string
    broken?: string
    channel?: string
    channels?: object[]
    commonIds?: string[]
    confinement?: Confinement
    contact?: string
    description?: string
    developer?: string
    devmode?: boolean
    downloadSize?: number
    icon?: string
    id?: string
    installDate?: GLib.DateTime
    installedSize?: number
    jailmode?: boolean
    license?: string
    media?: object[]
    mountedFrom?: string
    name?: string
    prices?: object[]
    private?: boolean
    publisherDisplayName?: string
    publisherId?: string
    publisherUsername?: string
    publisherValidation?: PublisherValidation
    revision?: string
    screenshots?: object[]
    snapType?: SnapType
    status?: SnapStatus
    summary?: string
    title?: string
    trackingChannel?: string
    tracks?: string[]
    trymode?: boolean
    version?: string
    website?: string
}
class Snap {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Snap */
    getApps(): App[]
    getBase(): string | null
    getBroken(): string | null
    getChannel(): string
    getChannels(): Channel[]
    getCommonIds(): string[]
    getConfinement(): Confinement
    getContact(): string
    getDescription(): string
    getDeveloper(): string
    getDevmode(): boolean
    getDownloadSize(): number
    getIcon(): string
    getId(): string
    getInstallDate(): GLib.DateTime | null
    getInstalledSize(): number
    getJailmode(): boolean
    getLicense(): string | null
    getMedia(): Media[]
    getMountedFrom(): string | null
    getName(): string
    getPrices(): Price[]
    getPrivate(): boolean
    getPublisherDisplayName(): string
    getPublisherId(): string
    getPublisherUsername(): string
    getPublisherValidation(): PublisherValidation
    getRevision(): string
    getScreenshots(): Screenshot[]
    getSnapType(): SnapType
    getStatus(): SnapStatus
    getSummary(): string
    getTitle(): string | null
    getTrackingChannel(): string
    getTracks(): string[]
    getTrymode(): boolean
    getVersion(): string
    getWebsite(): string
    matchChannel(name: string): Channel | null
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
    constructor (config?: Snap_ConstructProps)
    _init (config?: Snap_ConstructProps): void
    static $gtype: GObject.Type
}
interface SystemInformation_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.SystemInformation */
    binariesDirectory?: string
    buildId?: string
    confinement?: SystemConfinement
    kernelVersion?: string
    managed?: boolean
    mountDirectory?: string
    onClassic?: boolean
    osId?: string
    osVersion?: string
    refreshHold?: GLib.DateTime
    refreshLast?: GLib.DateTime
    refreshNext?: GLib.DateTime
    refreshSchedule?: string
    refreshTimer?: string
    sandboxFeatures?: object
    series?: string
    store?: string
    version?: string
}
class SystemInformation {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.SystemInformation */
    getBinariesDirectory(): string
    getBuildId(): string
    getConfinement(): SystemConfinement
    getKernelVersion(): string
    getManaged(): boolean
    getMountDirectory(): string
    getOnClassic(): boolean
    getOsId(): string
    getOsVersion(): string
    getRefreshHold(): GLib.DateTime | null
    getRefreshLast(): GLib.DateTime | null
    getRefreshNext(): GLib.DateTime | null
    getRefreshSchedule(): string | null
    getRefreshTimer(): string | null
    getSandboxFeatures(): GLib.HashTable
    getSeries(): string
    getStore(): string | null
    getVersion(): string
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
    constructor (config?: SystemInformation_ConstructProps)
    _init (config?: SystemInformation_ConstructProps): void
    static $gtype: GObject.Type
}
interface Task_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Task */
    id?: string
    kind?: string
    progressDone?: number
    progressLabel?: string
    progressTotal?: number
    ready?: boolean
    readyTime?: GLib.DateTime
    spawnTime?: GLib.DateTime
    status?: string
    summary?: string
}
class Task {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Task */
    getId(): string
    getKind(): string
    getProgressDone(): number
    getProgressLabel(): string
    getProgressTotal(): number
    getReady(): boolean
    getReadyTime(): GLib.DateTime | null
    getSpawnTime(): GLib.DateTime
    getStatus(): string
    getSummary(): string
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
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    static $gtype: GObject.Type
}
interface UserInformation_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.UserInformation */
    authData?: AuthData
    email?: string
    id?: number
    sshKeys?: string[]
    username?: string
}
class UserInformation {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.UserInformation */
    getAuthData(): AuthData | null
    getEmail(): string
    getId(): number
    getSshKeys(): string[]
    getUsername(): string
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
    constructor (config?: UserInformation_ConstructProps)
    _init (config?: UserInformation_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AliasClass {
    /* Fields of Snapd-1.Snapd.AliasClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class AppClass {
    /* Fields of Snapd-1.Snapd.AppClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class AssertionClass {
    /* Fields of Snapd-1.Snapd.AssertionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class AuthDataClass {
    /* Fields of Snapd-1.Snapd.AuthDataClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ChangeClass {
    /* Fields of Snapd-1.Snapd.ChangeClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ChannelClass {
    /* Fields of Snapd-1.Snapd.ChannelClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ClientClass {
    static name: string
}
abstract class ConnectionClass {
    /* Fields of Snapd-1.Snapd.ConnectionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class IconClass {
    /* Fields of Snapd-1.Snapd.IconClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class InterfaceClass {
    /* Fields of Snapd-1.Snapd.InterfaceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class MaintenanceClass {
    /* Fields of Snapd-1.Snapd.MaintenanceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class MarkdownNodeClass {
    /* Fields of Snapd-1.Snapd.MarkdownNodeClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class MarkdownParserClass {
    /* Fields of Snapd-1.Snapd.MarkdownParserClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class MediaClass {
    /* Fields of Snapd-1.Snapd.MediaClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class PlugClass {
    /* Fields of Snapd-1.Snapd.PlugClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class PlugRefClass {
    /* Fields of Snapd-1.Snapd.PlugRefClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class PriceClass {
    /* Fields of Snapd-1.Snapd.PriceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ScreenshotClass {
    /* Fields of Snapd-1.Snapd.ScreenshotClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SlotClass {
    /* Fields of Snapd-1.Snapd.SlotClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SlotRefClass {
    /* Fields of Snapd-1.Snapd.SlotRefClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SnapClass {
    /* Fields of Snapd-1.Snapd.SnapClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SystemInformationClass {
    /* Fields of Snapd-1.Snapd.SystemInformationClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class TaskClass {
    /* Fields of Snapd-1.Snapd.TaskClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class UserInformationClass {
    /* Fields of Snapd-1.Snapd.UserInformationClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
}
export default Snapd;