/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PackageKitPlugin-1.0
 */

import type PackageKitGlib from './PackageKitGlib-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace PackageKitPlugin {

enum BackendJobSignal {
    ALLOW_CANCEL,
    DETAILS,
    ERROR_CODE,
    DISTRO_UPGRADE,
    FINISHED,
    PACKAGE,
    ITEM_PROGRESS,
    FILES,
    PERCENTAGE,
    REMAINING,
    SPEED,
    DOWNLOAD_SIZE_REMAINING,
    REPO_DETAIL,
    REPO_SIGNATURE_REQUIRED,
    EULA_REQUIRED,
    MEDIA_CHANGE_REQUIRED,
    REQUIRE_RESTART,
    STATUS_CHANGED,
    LOCKED_CHANGED,
    UPDATE_DETAIL,
    CATEGORY,
    LAST,
}
enum HintEnum {
    FALSE,
    TRUE,
    UNSET,
    INVALID,
    LAST,
}
enum PluginPhase {
    INIT,
    TRANSACTION_CONTENT_TYPES,
    TRANSACTION_RUN,
    TRANSACTION_STARTED,
    TRANSACTION_FINISHED_RESULTS,
    TRANSACTION_FINISHED_END,
    DESTROY,
    STATE_CHANGED,
    UNKNOWN,
}
enum TransactionState {
    NEW,
    WAITING_FOR_AUTH,
    COMMITTED,
    READY,
    RUNNING,
    FINISHED,
    UNKNOWN,
}
const BACKEND_PERCENTAGE_INVALID: number
const TRANSACTION_ALL_BACKEND_SIGNALS: number
const TRANSACTION_NO_BACKEND_SIGNALS: number
function directoryRemoveContents(directory: string): boolean
function getResource(): Gio.Resource
function hintEnumFromString(hint: string): HintEnum
function hintEnumToString(hint: HintEnum): string
function loadIntrospection(filename: string): Gio.DBusNodeInfo
function pluginGetDescription(): string
function strlen(text: string, len: number): number
function strtoint(text: string, value: number): boolean
function strtouint(text: string, value: number): boolean
function strtouint64(text: string, value: number): boolean
function strzero(text: string): boolean
interface BackendFileChanged {
    (backend: Backend, data: object): void
}
interface BackendJobThreadFunc {
    (job: BackendJob, params: GLib.Variant): void
}
interface BackendJobVFunc {
    (job: BackendJob, object: object): void
}
interface PluginFunc {
    (plugin: Plugin): void
}
interface PluginGetActionFunc {
    (plugin: Plugin, transaction: Transaction, actionId: string): string
}
interface PluginGetDescFunc {
    (): string
}
interface PluginTransactionFunc {
    (plugin: Plugin, transaction: Transaction): void
}
interface Backend_ConstructProps extends GObject.Object_ConstructProps {
}
class Backend {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitPlugin-1.0.PackageKitPlugin.Backend */
    acceptEula(eulaId: string): void
    cancel(job: BackendJob): void
    dependsOn(job: BackendJob, filters: PackageKitGlib.Bitfield, packageIds: string, recursive: boolean): void
    destroy(): void
    downloadPackages(job: BackendJob, packageIds: string, directory: string): void
    getAcceptedEulaString(): string
    getAuthor(): string
    getCategories(job: BackendJob): void
    getDescription(): string
    getDetails(job: BackendJob, packageIds: string): void
    getDetailsLocal(job: BackendJob, files: string): void
    getDistroUpgrades(job: BackendJob): void
    getFiles(job: BackendJob, packageIds: string): void
    getFilesLocal(job: BackendJob, files: string): void
    getFilters(): PackageKitGlib.Bitfield
    getGroups(): PackageKitGlib.Bitfield
    getMimeTypes(): string[]
    getName(): string
    getPackages(job: BackendJob, filters: PackageKitGlib.Bitfield): void
    getRepoList(job: BackendJob, filters: PackageKitGlib.Bitfield): void
    getRoles(): PackageKitGlib.Bitfield
    getUpdateDetail(job: BackendJob, packageIds: string): void
    getUpdates(job: BackendJob, filters: PackageKitGlib.Bitfield): void
    implement(role: PackageKitGlib.RoleEnum): void
    installFiles(job: BackendJob, transactionFlags: PackageKitGlib.Bitfield, fullPaths: string): void
    installPackages(job: BackendJob, transactionFlags: PackageKitGlib.Bitfield, packageIds: string): void
    installSignature(job: BackendJob, type: PackageKitGlib.SigTypeEnum, keyId: string, packageId: string): void
    isEulaValid(eulaId: string): boolean
    isImplemented(role: PackageKitGlib.RoleEnum): boolean
    isOnline(): boolean
    load(): boolean
    refreshCache(job: BackendJob, force: boolean): void
    removePackages(job: BackendJob, transactionFlags: PackageKitGlib.Bitfield, packageIds: string, allowDeps: boolean, autoremove: boolean): void
    repairSystem(job: BackendJob, transactionFlags: PackageKitGlib.Bitfield): void
    repoEnable(job: BackendJob, repoId: string, enabled: boolean): void
    repoListChanged(): boolean
    repoRemove(job: BackendJob, transactionFlags: PackageKitGlib.Bitfield, repoId: string, autoremove: boolean): void
    repoSetData(job: BackendJob, repoId: string, parameter: string, value: string): void
    requiredBy(job: BackendJob, filters: PackageKitGlib.Bitfield, packageIds: string, recursive: boolean): void
    resetJob(job: BackendJob): void
    resolve(job: BackendJob, filters: PackageKitGlib.Bitfield, packages: string): void
    searchDetails(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
    searchFiles(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
    searchGroups(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
    searchNames(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
    startJob(job: BackendJob): void
    stopJob(job: BackendJob): void
    supportsParallelization(): boolean
    threadStart(job: BackendJob, func: object): void
    threadStop(job: BackendJob, func: object): void
    unload(): boolean
    updatePackages(job: BackendJob, transactionFlags: PackageKitGlib.Bitfield, packageIds: string): void
    watchFile(filename: string, func: BackendFileChanged): boolean
    whatProvides(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
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
    constructor (config?: Backend_ConstructProps)
    _init (config?: Backend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(conf: GLib.KeyFile): Backend
    static boolToString(value: boolean): string
    static initialize(conf: GLib.KeyFile, backend: Backend): void
    static $gtype: GObject.Type
}
interface BackendJob_ConstructProps extends GObject.Object_ConstructProps {
}
class BackendJob {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitPlugin-1.0.PackageKitPlugin.BackendJob */
    category(parentId: string, catId: string, name: string, summary: string, icon: string): void
    details(packageId: string, summary: string, license: string, group: PackageKitGlib.GroupEnum, description: string, url: string, size: number): void
    distroUpgrade(type: PackageKitGlib.DistroUpgradeEnum, name: string, summary: string): void
    eulaRequired(eulaId: string, packageId: string, vendorName: string, licenseAgreement: string): void
    files(packageId: string, files: string): void
    finished(): void
    getAllowCancel(): boolean
    getBackend(): object
    getBackground(): HintEnum
    getCacheAge(): number
    getCmdline(): string
    getExitCode(): PackageKitGlib.ExitEnum
    getFrontendSocket(): string
    getInteractive(): HintEnum
    getIsErrorSet(): boolean
    getIsFinished(): boolean
    getLocale(): string
    getLocked(): boolean
    getNoProxy(): string
    getPac(): string
    getParameters(): GLib.Variant
    getProxyFtp(): string
    getProxyHttp(): string
    getProxyHttps(): string
    getProxySocks(): string
    getRole(): PackageKitGlib.RoleEnum
    getRuntime(): number
    getStarted(): boolean
    getTransactionFlags(): PackageKitGlib.Bitfield
    getUid(): number
    getUserData(): object
    getVfuncEnabled(signalKind: BackendJobSignal): boolean
    hasSetErrorCode(): boolean
    mediaChangeRequired(mediaType: PackageKitGlib.MediaTypeEnum, mediaId: string, mediaText: string): void
    notImplementedYet(method: string): void
    package(info: PackageKitGlib.InfoEnum, packageId: string, summary: string): void
    repoDetail(repoId: string, description: string, enabled: boolean): void
    repoSignatureRequired(packageId: string, repositoryName: string, keyUrl: string, keyUserid: string, keyId: string, keyFingerprint: string, keyTimestamp: string, type: PackageKitGlib.SigTypeEnum): void
    requireRestart(restart: PackageKitGlib.RestartEnum, packageId: string): void
    reset(): void
    setAllowCancel(allowCancel: boolean): void
    setBackend(backend: object): void
    setBackground(background: HintEnum): void
    setCacheAge(cacheAge: number): void
    setCmdline(cmdline: string): void
    setDownloadSizeRemaining(downloadSizeRemaining: number): void
    setExitCode(exit: PackageKitGlib.ExitEnum): void
    setFrontendSocket(frontendSocket: string): void
    setInteractive(interactive: HintEnum): void
    setItemProgress(packageId: string, status: PackageKitGlib.StatusEnum, percentage: number): void
    setLocale(code: string): void
    setLocked(locked: boolean): void
    setParameters(params: GLib.Variant): void
    setPercentage(percentage: number): void
    setProxy(proxyHttp: string, proxyHttps: string, proxyFtp: string, proxySocks: string, noProxy: string, pac: string): void
    setRole(role: PackageKitGlib.RoleEnum): void
    setSpeed(speed: number): void
    setStarted(started: boolean): void
    setStatus(status: PackageKitGlib.StatusEnum): void
    setTransactionFlags(transactionFlags: PackageKitGlib.Bitfield): void
    setUid(uid: number): void
    setUserData(userData: object): void
    setVfunc(signalKind: BackendJobSignal, vfunc: BackendJobVFunc): void
    threadCreate(func: BackendJobThreadFunc): boolean
    updateDetail(packageId: string, updates: string, obsoletes: string, vendorUrls: string, bugzillaUrls: string, cveUrls: string, restart: PackageKitGlib.RestartEnum, updateText: string, changelog: string, state: PackageKitGlib.UpdateStateEnum, issued: string, updated: string): void
    useBackground(): boolean
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
    constructor (config?: BackendJob_ConstructProps)
    _init (config?: BackendJob_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(conf: GLib.KeyFile): BackendJob
    static $gtype: GObject.Type
}
interface Transaction_ConstructProps extends GObject.Object_ConstructProps {
}
class Transaction {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitPlugin-1.0.PackageKitPlugin.Transaction */
    addSupportedContentType(mimeType: string): void
    cancelBg(): void
    getBackendJob(): BackendJob
    getConf(): GLib.KeyFile
    getFullPaths(): string[]
    getPackageIds(): string[]
    getResults(): PackageKitGlib.Results
    getRole(): PackageKitGlib.RoleEnum
    getState(): TransactionState
    getTid(): string
    getTransactionFlags(): PackageKitGlib.Bitfield
    getUid(): number
    getValues(): string[]
    isExclusive(): boolean
    isFinishedWithLockRequired(): boolean
    makeExclusive(): void
    resetAfterLockError(): void
    run(): boolean
    setBackend(backend: Backend): void
    setFullPaths(fullPaths: string): void
    setPackageIds(packageIds: string): void
    setState(state: TransactionState): boolean
    signalsReset(job: BackendJob): void
    skipAuthChecks(skipChecks: boolean): void
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
    /* Signals of PackageKitPlugin-1.0.PackageKitPlugin.Transaction */
    connect(sigName: "finished", callback: (() => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
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
    constructor (config?: Transaction_ConstructProps)
    _init (config?: Transaction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(conf: GLib.KeyFile, introspection: Gio.DBusNodeInfo): Transaction
    static errorQuark(): GLib.Quark
    static stateToString(state: TransactionState): string
    static $gtype: GObject.Type
}
abstract class BackendClass {
    /* Fields of PackageKitPlugin-1.0.PackageKitPlugin.BackendClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class BackendJobClass {
    /* Fields of PackageKitPlugin-1.0.PackageKitPlugin.BackendJobClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class BackendJobPrivate {
    static name: string
}
class BackendPrivate {
    static name: string
}
class Plugin {
    /* Fields of PackageKitPlugin-1.0.PackageKitPlugin.Plugin */
    readonly backend: Backend
    readonly job: BackendJob
    readonly priv: PluginPrivate
    /* Methods of PackageKitPlugin-1.0.PackageKitPlugin.Plugin */
    destroy(): void
    initialize(): void
    stateChanged(): void
    transactionContentTypes(transaction: Transaction): void
    transactionFinishedEnd(transaction: Transaction): void
    transactionFinishedResults(transaction: Transaction): void
    transactionGetAction(transaction: Transaction, actionId: string): string
    transactionRun(transaction: Transaction): void
    transactionStarted(transaction: Transaction): void
    static name: string
    /* Static methods and pseudo-constructors */
    static getDescription(): string
}
class PluginPrivate {
    static name: string
}
abstract class TransactionClass {
    /* Fields of PackageKitPlugin-1.0.PackageKitPlugin.TransactionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class TransactionPrivate {
    static name: string
}
}
export default PackageKitPlugin;