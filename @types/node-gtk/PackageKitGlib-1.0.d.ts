/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PackageKitGlib-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace PackageKitGlib {

enum AuthorizeEnum {
    UNKNOWN,
    YES,
    NO,
    INTERACTIVE,
    LAST,
}
enum ClientError {
    FAILED,
    FAILED_AUTH,
    NO_TID,
    ALREADY_TID,
    ROLE_UNKNOWN,
    CANNOT_START_DAEMON,
    INVALID_INPUT,
    INVALID_FILE,
    NOT_SUPPORTED,
    DECLINED_SIMULATION,
    DECLINED_INTERACTION,
    LAST,
}
enum ControlError {
    FAILED,
    CANNOT_START_DAEMON,
}
enum DistroUpgradeEnum {
    UNKNOWN,
    STABLE,
    UNSTABLE,
    LAST,
}
enum ErrorEnum {
    UNKNOWN,
    OOM,
    NO_NETWORK,
    NOT_SUPPORTED,
    INTERNAL_ERROR,
    GPG_FAILURE,
    PACKAGE_ID_INVALID,
    PACKAGE_NOT_INSTALLED,
    PACKAGE_NOT_FOUND,
    PACKAGE_ALREADY_INSTALLED,
    PACKAGE_DOWNLOAD_FAILED,
    GROUP_NOT_FOUND,
    GROUP_LIST_INVALID,
    DEP_RESOLUTION_FAILED,
    FILTER_INVALID,
    CREATE_THREAD_FAILED,
    TRANSACTION_ERROR,
    TRANSACTION_CANCELLED,
    NO_CACHE,
    REPO_NOT_FOUND,
    CANNOT_REMOVE_SYSTEM_PACKAGE,
    PROCESS_KILL,
    FAILED_INITIALIZATION,
    FAILED_FINALISE,
    FAILED_CONFIG_PARSING,
    CANNOT_CANCEL,
    CANNOT_GET_LOCK,
    NO_PACKAGES_TO_UPDATE,
    CANNOT_WRITE_REPO_CONFIG,
    LOCAL_INSTALL_FAILED,
    BAD_GPG_SIGNATURE,
    MISSING_GPG_SIGNATURE,
    CANNOT_INSTALL_SOURCE_PACKAGE,
    REPO_CONFIGURATION_ERROR,
    NO_LICENSE_AGREEMENT,
    FILE_CONFLICTS,
    PACKAGE_CONFLICTS,
    REPO_NOT_AVAILABLE,
    INVALID_PACKAGE_FILE,
    PACKAGE_INSTALL_BLOCKED,
    PACKAGE_CORRUPT,
    ALL_PACKAGES_ALREADY_INSTALLED,
    FILE_NOT_FOUND,
    NO_MORE_MIRRORS_TO_TRY,
    NO_DISTRO_UPGRADE_DATA,
    INCOMPATIBLE_ARCHITECTURE,
    NO_SPACE_ON_DEVICE,
    MEDIA_CHANGE_REQUIRED,
    NOT_AUTHORIZED,
    UPDATE_NOT_FOUND,
    CANNOT_INSTALL_REPO_UNSIGNED,
    CANNOT_UPDATE_REPO_UNSIGNED,
    CANNOT_GET_FILELIST,
    CANNOT_GET_REQUIRES,
    CANNOT_DISABLE_REPOSITORY,
    RESTRICTED_DOWNLOAD,
    PACKAGE_FAILED_TO_CONFIGURE,
    PACKAGE_FAILED_TO_BUILD,
    PACKAGE_FAILED_TO_INSTALL,
    PACKAGE_FAILED_TO_REMOVE,
    UPDATE_FAILED_DUE_TO_RUNNING_PROCESS,
    PACKAGE_DATABASE_CHANGED,
    PROVIDE_TYPE_NOT_SUPPORTED,
    INSTALL_ROOT_INVALID,
    CANNOT_FETCH_SOURCES,
    CANCELLED_PRIORITY,
    UNFINISHED_TRANSACTION,
    LOCK_REQUIRED,
    REPO_ALREADY_SET,
    LAST,
}
enum ExitEnum {
    UNKNOWN,
    SUCCESS,
    FAILED,
    CANCELLED,
    KEY_REQUIRED,
    EULA_REQUIRED,
    KILLED,
    MEDIA_CHANGE_REQUIRED,
    NEED_UNTRUSTED,
    CANCELLED_PRIORITY,
    SKIP_TRANSACTION,
    REPAIR_REQUIRED,
    LAST,
}
enum FilterEnum {
    UNKNOWN,
    NONE,
    INSTALLED,
    NOT_INSTALLED,
    DEVELOPMENT,
    NOT_DEVELOPMENT,
    GUI,
    NOT_GUI,
    FREE,
    NOT_FREE,
    VISIBLE,
    NOT_VISIBLE,
    SUPPORTED,
    NOT_SUPPORTED,
    BASENAME,
    NOT_BASENAME,
    NEWEST,
    NOT_NEWEST,
    ARCH,
    NOT_ARCH,
    SOURCE,
    NOT_SOURCE,
    COLLECTIONS,
    NOT_COLLECTIONS,
    APPLICATION,
    NOT_APPLICATION,
    DOWNLOADED,
    NOT_DOWNLOADED,
    LAST,
}
enum GroupEnum {
    UNKNOWN,
    ACCESSIBILITY,
    ACCESSORIES,
    ADMIN_TOOLS,
    COMMUNICATION,
    DESKTOP_GNOME,
    DESKTOP_KDE,
    DESKTOP_OTHER,
    DESKTOP_XFCE,
    EDUCATION,
    FONTS,
    GAMES,
    GRAPHICS,
    INTERNET,
    LEGACY,
    LOCALIZATION,
    MAPS,
    MULTIMEDIA,
    NETWORK,
    OFFICE,
    OTHER,
    POWER_MANAGEMENT,
    PROGRAMMING,
    PUBLISHING,
    REPOS,
    SECURITY,
    SERVERS,
    SYSTEM,
    VIRTUALIZATION,
    SCIENCE,
    DOCUMENTATION,
    ELECTRONICS,
    COLLECTIONS,
    VENDOR,
    NEWEST,
    LAST,
}
enum InfoEnum {
    UNKNOWN,
    INSTALLED,
    AVAILABLE,
    LOW,
    ENHANCEMENT,
    NORMAL,
    BUGFIX,
    IMPORTANT,
    SECURITY,
    BLOCKED,
    DOWNLOADING,
    UPDATING,
    INSTALLING,
    REMOVING,
    CLEANUP,
    OBSOLETING,
    COLLECTION_INSTALLED,
    COLLECTION_AVAILABLE,
    FINISHED,
    REINSTALLING,
    DOWNGRADING,
    PREPARING,
    DECOMPRESSING,
    UNTRUSTED,
    TRUSTED,
    UNAVAILABLE,
    CRITICAL,
    LAST,
}
enum MediaTypeEnum {
    UNKNOWN,
    CD,
    DVD,
    DISC,
    LAST,
}
enum NetworkEnum {
    UNKNOWN,
    OFFLINE,
    ONLINE,
    WIRED,
    WIFI,
    MOBILE,
    LAST,
}
enum OfflineAction {
    UNKNOWN,
    REBOOT,
    POWER_OFF,
    UNSET,
}
enum OfflineError {
    FAILED,
    INVALID_VALUE,
    NO_DATA,
}
enum PackageSackSortType {
    NAME,
    INFO,
    PACKAGE_ID,
    SUMMARY,
    LAST,
}
enum ProgressType {
    PACKAGE_ID,
    TRANSACTION_ID,
    PERCENTAGE,
    ALLOW_CANCEL,
    STATUS,
    ROLE,
    CALLER_ACTIVE,
    ELAPSED_TIME,
    REMAINING_TIME,
    SPEED,
    DOWNLOAD_SIZE_REMAINING,
    UID,
    PACKAGE,
    ITEM_PROGRESS,
    TRANSACTION_FLAGS,
    INVALID,
}
enum RestartEnum {
    UNKNOWN,
    NONE,
    APPLICATION,
    SESSION,
    SYSTEM,
    SECURITY_SESSION,
    SECURITY_SYSTEM,
    LAST,
}
enum RoleEnum {
    UNKNOWN,
    CANCEL,
    DEPENDS_ON,
    GET_DETAILS,
    GET_FILES,
    GET_PACKAGES,
    GET_REPO_LIST,
    REQUIRED_BY,
    GET_UPDATE_DETAIL,
    GET_UPDATES,
    INSTALL_FILES,
    INSTALL_PACKAGES,
    INSTALL_SIGNATURE,
    REFRESH_CACHE,
    REMOVE_PACKAGES,
    REPO_ENABLE,
    REPO_SET_DATA,
    RESOLVE,
    SEARCH_DETAILS,
    SEARCH_FILE,
    SEARCH_GROUP,
    SEARCH_NAME,
    UPDATE_PACKAGES,
    WHAT_PROVIDES,
    ACCEPT_EULA,
    DOWNLOAD_PACKAGES,
    GET_DISTRO_UPGRADES,
    GET_CATEGORIES,
    GET_OLD_TRANSACTIONS,
    REPAIR_SYSTEM,
    GET_DETAILS_LOCAL,
    GET_FILES_LOCAL,
    REPO_REMOVE,
    UPGRADE_SYSTEM,
    LAST,
}
enum SigTypeEnum {
    UNKNOWN,
    GPG,
    LAST,
}
enum StatusEnum {
    UNKNOWN,
    WAIT,
    SETUP,
    RUNNING,
    QUERY,
    INFO,
    REMOVE,
    REFRESH_CACHE,
    DOWNLOAD,
    INSTALL,
    UPDATE,
    CLEANUP,
    OBSOLETE,
    DEP_RESOLVE,
    SIG_CHECK,
    TEST_COMMIT,
    COMMIT,
    REQUEST,
    FINISHED,
    CANCEL,
    DOWNLOAD_REPOSITORY,
    DOWNLOAD_PACKAGELIST,
    DOWNLOAD_FILELIST,
    DOWNLOAD_CHANGELOG,
    DOWNLOAD_GROUP,
    DOWNLOAD_UPDATEINFO,
    REPACKAGING,
    LOADING_CACHE,
    SCAN_APPLICATIONS,
    GENERATE_PACKAGE_LIST,
    WAITING_FOR_LOCK,
    WAITING_FOR_AUTH,
    SCAN_PROCESS_LIST,
    CHECK_EXECUTABLE_FILES,
    CHECK_LIBRARIES,
    COPY_FILES,
    RUN_HOOK,
    LAST,
}
enum TransactionFlagEnum {
    NONE,
    ONLY_TRUSTED,
    SIMULATE,
    ONLY_DOWNLOAD,
    ALLOW_REINSTALL,
    JUST_REINSTALL,
    ALLOW_DOWNGRADE,
    LAST,
}
enum UpdateStateEnum {
    UNKNOWN,
    STABLE,
    UNSTABLE,
    TESTING,
    LAST,
}
enum UpgradeKindEnum {
    UNKNOWN,
    MINIMAL,
    DEFAULT,
    COMPLETE,
    LAST,
}
enum OfflineFlags {
    NONE,
    INTERACTIVE,
}
const DBUS_INTERFACE: string
const DBUS_INTERFACE_OFFLINE: string
const DBUS_INTERFACE_TRANSACTION: string
const DBUS_PATH: string
const DBUS_SERVICE: string
const DESKTOP_DEFAULT_APPLICATION_DIR: string
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const OFFLINE_DESTDIR: string
const OFFLINE_RESULTS_GROUP: string
const PACKAGE_IDS_DELIM: string
const PACKAGE_ID_ARCH: number
const PACKAGE_ID_DATA: number
const PACKAGE_ID_NAME: number
const PACKAGE_ID_VERSION: number
const SYSTEM_PACKAGE_CACHE_FILENAME: string
const SYSTEM_PACKAGE_LIST_FILENAME: string
function authorizeTypeEnumFromString(authorizeType: string): AuthorizeEnum
function authorizeTypeEnumToString(authorizeType: AuthorizeEnum): string
function clientErrorQuark(): GLib.Quark
function controlErrorQuark(): GLib.Quark
function debugAddLogDomain(logDomain: string): void
function debugIsVerbose(): boolean
function debugSetVerbose(verbose: boolean): void
function distroUpgradeEnumFromString(upgrade: string): DistroUpgradeEnum
function distroUpgradeEnumToString(upgrade: DistroUpgradeEnum): string
function enumFindString(table: EnumMatch, value: number): string
function enumFindValue(table: EnumMatch, string: string): number
function errorEnumFromString(code: string): ErrorEnum
function errorEnumToString(code: ErrorEnum): string
function exitEnumFromString(exit: string): ExitEnum
function exitEnumToString(exit: ExitEnum): string
function filterBitfieldFromString(filters: string): Bitfield
function filterBitfieldToString(filters: Bitfield): string
function filterEnumFromString(filter: string): FilterEnum
function filterEnumToString(filter: FilterEnum): string
function getDistroId(): string
function groupBitfieldFromString(groups: string): Bitfield
function groupBitfieldToString(groups: Bitfield): string
function groupEnumFromString(group: string): GroupEnum
function groupEnumToString(group: GroupEnum): string
function infoEnumFromString(info: string): InfoEnum
function infoEnumToLocalisedPast(info: InfoEnum): string
function infoEnumToLocalisedPresent(info: InfoEnum): string
function infoEnumToString(info: InfoEnum): string
function iso8601FromDate(date: GLib.Date): string
function iso8601Present(): string
function mediaTypeEnumFromString(mediaType: string): MediaTypeEnum
function mediaTypeEnumToString(mediaType: MediaTypeEnum): string
function networkEnumFromString(network: string): NetworkEnum
function networkEnumToString(network: NetworkEnum): string
function offlineActionFromString(action: string): OfflineAction
function offlineActionToString(action: OfflineAction): string
function offlineAuthCancel(): boolean
function offlineAuthClearResults(): boolean
function offlineAuthInvalidate(): boolean
function offlineAuthSetAction(action: OfflineAction): boolean
function offlineAuthSetPreparedIds(packageIds: string): boolean
function offlineAuthSetPreparedUpgrade(name: string, releaseVer: string): boolean
function offlineAuthSetResults(results: Results): boolean
function offlineAuthTrigger(action: OfflineAction): boolean
function offlineAuthTriggerUpgrade(action: OfflineAction): boolean
function offlineCancel(cancellable?: Gio.Cancellable | null): boolean
function offlineCancelWithFlags(flags: OfflineFlags, cancellable?: Gio.Cancellable | null): boolean
function offlineClearResults(cancellable?: Gio.Cancellable | null): boolean
function offlineClearResultsWithFlags(flags: OfflineFlags, cancellable?: Gio.Cancellable | null): boolean
function offlineErrorQuark(): GLib.Quark
function offlineGetAction(): OfflineAction
function offlineGetActionMonitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor
function offlineGetPreparedIds(): string[]
function offlineGetPreparedMonitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor
function offlineGetPreparedSack(): PackageSack
function offlineGetPreparedUpgrade(name: string, releaseVer: string): boolean
function offlineGetPreparedUpgradeMonitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor
function offlineGetPreparedUpgradeName(): string
function offlineGetPreparedUpgradeVersion(): string
function offlineGetResults(): Results
function offlineGetResultsMtime(): number
function offlineTrigger(action: OfflineAction, cancellable?: Gio.Cancellable | null): boolean
function offlineTriggerUpgrade(action: OfflineAction, cancellable?: Gio.Cancellable | null): boolean
function offlineTriggerUpgradeWithFlags(action: OfflineAction, flags: OfflineFlags, cancellable?: Gio.Cancellable | null): boolean
function offlineTriggerWithFlags(action: OfflineAction, flags: OfflineFlags, cancellable?: Gio.Cancellable | null): boolean
function polkitAgentClose(): void
function polkitAgentOpen(): number
function ptrArrayToStrv(array: string[]): string[]
function restartEnumFromString(restart: string): RestartEnum
function restartEnumToString(restart: RestartEnum): string
function roleBitfieldFromString(roles: string): Bitfield
function roleBitfieldToString(roles: Bitfield): string
function roleEnumFromString(role: string): RoleEnum
function roleEnumToLocalisedPresent(role: RoleEnum): string
function roleEnumToString(role: RoleEnum): string
function sigTypeEnumFromString(sigType: string): SigTypeEnum
function sigTypeEnumToString(sigType: SigTypeEnum): string
function statusEnumFromString(status: string): StatusEnum
function statusEnumToLocalisedText(status: StatusEnum): string
function statusEnumToString(status: StatusEnum): string
function transactionFlagBitfieldFromString(transactionFlags: string): Bitfield
function transactionFlagBitfieldToString(transactionFlags: Bitfield): string
function transactionFlagEnumFromString(transactionFlag: string): TransactionFlagEnum
function transactionFlagEnumToString(transactionFlag: TransactionFlagEnum): string
function updateStateEnumFromString(updateState: string): UpdateStateEnum
function updateStateEnumToString(updateState: UpdateStateEnum): string
function upgradeKindEnumFromString(upgradeKind: string): UpgradeKindEnum
function upgradeKindEnumToString(upgradeKind: UpgradeKindEnum): string
interface PackageSackFilterFunc {
    (package: Package): boolean
}
interface ProgressCallback {
    (progress: Progress, type: ProgressType): void
}
interface Category_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.Category */
    catId?: string
    icon?: string
    name?: string
    parentId?: string
    summary?: string
}
class Category {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Category */
    catId: string
    icon: string
    name: string
    parentId: string
    summary: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Category */
    getIcon(): string
    getId(): string
    getName(): string
    getParentId(): string
    getSummary(): string
    setIcon(icon: string): void
    setId(catId: string): void
    setName(name: string): void
    setParentId(parentId: string): void
    setSummary(summary: string): void
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
    connect(sigName: "notify::cat-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cat-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cat-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cat-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cat-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Category_ConstructProps)
    _init (config?: Category_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Category
    /* Function overloads */
    static new(): Category
    static $gtype: GObject.Type
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.Client */
    background?: boolean
    cacheAge?: number
    interactive?: boolean
    locale?: string
}
class Client {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Client */
    background: boolean
    cacheAge: number
    readonly idle: boolean
    interactive: boolean
    locale: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Client */
    acceptEula(eulaId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    acceptEulaAsync(eulaId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    adopt(transactionId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    adoptAsync(transactionId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    dependsOn(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    dependsOnAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    downloadPackages(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    downloadPackagesAsync(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    genericFinish(res: Gio.AsyncResult): Results
    getBackground(): boolean
    getCacheAge(): number
    getCategories(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getCategoriesAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getDetails(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getDetailsAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getDetailsLocal(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getDetailsLocalAsync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getDistroUpgrades(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getDistroUpgradesAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getFiles(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getFilesAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getFilesLocal(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getFilesLocalAsync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getIdle(): boolean
    getInteractive(): boolean
    getLocale(): string
    getOldTransactions(number: number, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getOldTransactionsAsync(number: number, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getPackages(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getPackagesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getProgress(transactionId: string, cancellable?: Gio.Cancellable | null): Progress
    getProgressAsync(transactionId: string, cancellable?: Gio.Cancellable | null, callbackReady?: Gio.AsyncReadyCallback | null): void
    getProgressFinish(res: Gio.AsyncResult): Progress
    getRepoList(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getRepoListAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getUpdateDetail(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getUpdateDetailAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getUpdates(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getUpdatesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    installFiles(transactionFlags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    installFilesAsync(transactionFlags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    installPackages(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    installPackagesAsync(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    installSignature(type: SigTypeEnum, keyId: string, packageId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    installSignatureAsync(type: SigTypeEnum, keyId: string, packageId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    refreshCache(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    refreshCacheAsync(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    removePackages(transactionFlags: Bitfield, packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    removePackagesAsync(transactionFlags: Bitfield, packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    repairSystem(transactionFlags: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    repairSystemAsync(transactionFlags: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    repoEnable(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    repoEnableAsync(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    repoRemove(transactionFlags: Bitfield, repoId: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    repoRemoveAsync(transactionFlags: Bitfield, repoId: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    repoSetData(repoId: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    repoSetDataAsync(repoId: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    requiredBy(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    requiredByAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    resolve(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    resolveAsync(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    searchDetails(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    searchDetailsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    searchFiles(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    searchFilesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    searchGroups(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    searchGroupsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    searchNames(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    searchNamesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    setBackground(background: boolean): void
    setCacheAge(cacheAge: number): void
    setInteractive(interactive: boolean): void
    setLocale(locale: string): void
    updatePackages(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    updatePackagesAsync(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    upgradeSystem(transactionFlags: Bitfield, distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    upgradeSystemAsync(transactionFlags: Bitfield, distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    whatProvides(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    whatProvidesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
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
    connect(sigName: "notify::background", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cache-age", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-age", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interactive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static createHelperArgvEnvp(argv: string, envpOut: string): boolean
    static $gtype: GObject.Type
}
interface ClientHelper_ConstructProps extends GObject.Object_ConstructProps {
}
class ClientHelper {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.ClientHelper */
    isActive(): boolean
    start(socketFilename: string, argv: string, envp: string): boolean
    startWithSocket(socket: Gio.Socket, argv: string, envp: string): boolean
    stop(): boolean
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
    constructor (config?: ClientHelper_ConstructProps)
    _init (config?: ClientHelper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ClientHelper
    static $gtype: GObject.Type
}
interface Control_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.Control */
    backendAuthor?: string
    backendDescription?: string
    backendName?: string
    connected?: boolean
    distroId?: string
    filters?: number
    groups?: number
    locked?: boolean
    mimeTypes?: string[]
    networkState?: NetworkEnum
    provides?: number
    roles?: number
}
class Control {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Control */
    backendAuthor: string
    backendDescription: string
    backendName: string
    connected: boolean
    distroId: string
    filters: number
    groups: number
    locked: boolean
    mimeTypes: string[]
    networkState: NetworkEnum
    provides: number
    roles: number
    readonly versionMajor: number
    readonly versionMicro: number
    readonly versionMinor: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Control */
    canAuthorizeAsync(actionId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    canAuthorizeFinish(res: Gio.AsyncResult): AuthorizeEnum
    getDaemonStateAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDaemonStateFinish(res: Gio.AsyncResult): string
    getProperties(cancellable?: Gio.Cancellable | null): boolean
    getPropertiesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getPropertiesFinish(res: Gio.AsyncResult): boolean
    getTidAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTidFinish(res: Gio.AsyncResult): string
    getTimeSinceActionAsync(role: RoleEnum, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTimeSinceActionFinish(res: Gio.AsyncResult): number
    getTransactionList(cancellable?: Gio.Cancellable | null): string[]
    getTransactionListAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTransactionListFinish(res: Gio.AsyncResult): string[]
    setProxy(proxyHttp: string, proxyFtp: string, cancellable?: Gio.Cancellable | null): boolean
    setProxy2(proxyHttp: string, proxyHttps: string, proxyFtp: string, proxySocks: string, noProxy: string, pac: string, cancellable?: Gio.Cancellable | null): boolean
    setProxy2Async(proxyHttp: string, proxyHttps: string, proxyFtp: string, proxySocks: string, noProxy: string, pac: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setProxyAsync(proxyHttp: string, proxyFtp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setProxyFinish(res: Gio.AsyncResult): boolean
    suggestDaemonQuit(cancellable?: Gio.Cancellable | null): boolean
    suggestDaemonQuitAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    suggestDaemonQuitFinish(res: Gio.AsyncResult): boolean
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
    /* Signals of PackageKitGlib-1.0.PackageKitGlib.Control */
    connect(sigName: "repo-list-changed", callback: (() => void)): number
    on(sigName: "repo-list-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "repo-list-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "repo-list-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "repo-list-changed"): void
    connect(sigName: "restart-schedule", callback: (() => void)): number
    on(sigName: "restart-schedule", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restart-schedule", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restart-schedule", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "restart-schedule"): void
    connect(sigName: "transaction-list-changed", callback: ((transactionIds: string[]) => void)): number
    on(sigName: "transaction-list-changed", callback: (transactionIds: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transaction-list-changed", callback: (transactionIds: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transaction-list-changed", callback: (transactionIds: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "transaction-list-changed", transactionIds: string[]): void
    connect(sigName: "updates-changed", callback: (() => void)): number
    on(sigName: "updates-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updates-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updates-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "updates-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend-author", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-author", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backend-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::distro-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distro-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::distro-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::distro-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::distro-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filters", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::groups", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locked", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provides", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provides", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provides", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provides", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provides", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::roles", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::roles", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version-major", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version-major", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version-micro", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version-micro", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version-micro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version-micro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version-micro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version-minor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version-minor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Control_ConstructProps)
    _init (config?: Control_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Control
    static $gtype: GObject.Type
}
interface Desktop_ConstructProps extends GObject.Object_ConstructProps {
}
class Desktop {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Desktop */
    getFilesForPackage(package: string): string[]
    getPackageForFile(filename: string): string
    getShownForPackage(package: string): string[]
    openDatabase(): boolean
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
    constructor (config?: Desktop_ConstructProps)
    _init (config?: Desktop_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Desktop
    static $gtype: GObject.Type
}
interface Details_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.Details */
    description?: string
    downloadSize?: number
    group?: GroupEnum
    license?: string
    packageId?: string
    size?: number
    summary?: string
    url?: string
}
class Details {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Details */
    description: string
    downloadSize: number
    group: GroupEnum
    license: string
    packageId: string
    size: number
    summary: string
    url: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Details */
    getDescription(): string
    getDownloadSize(): number
    getGroup(): GroupEnum
    getLicense(): string
    getPackageId(): string
    getSize(): number
    getSummary(): string
    getUrl(): string
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
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::download-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::download-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::download-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::download-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::download-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::group", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Details_ConstructProps)
    _init (config?: Details_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Details
    /* Function overloads */
    static new(): Details
    static $gtype: GObject.Type
}
interface DistroUpgrade_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade */
    name?: string
    state?: DistroUpgradeEnum
    summary?: string
}
class DistroUpgrade {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade */
    name: string
    state: DistroUpgradeEnum
    summary: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade */
    getId(): string
    getState(): DistroUpgradeEnum
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
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DistroUpgrade_ConstructProps)
    _init (config?: DistroUpgrade_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DistroUpgrade
    /* Function overloads */
    static new(): DistroUpgrade
    static $gtype: GObject.Type
}
interface Error_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.Error */
    code?: ErrorEnum
    details?: string
}
class Error {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Error */
    code: ErrorEnum
    details: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Error */
    getCode(): ErrorEnum
    getDetails(): string
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
    connect(sigName: "notify::code", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::code", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::details", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Error_ConstructProps)
    _init (config?: Error_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Error
    /* Function overloads */
    static new(): Error
    static $gtype: GObject.Type
}
interface EulaRequired_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequired */
    eulaId?: string
    licenseAgreement?: string
    packageId?: string
    vendorName?: string
}
class EulaRequired {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequired */
    eulaId: string
    licenseAgreement: string
    packageId: string
    vendorName: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.EulaRequired */
    getEulaId(): string
    getLicenseAgreement(): string
    getPackageId(): string
    getVendorName(): string
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
    connect(sigName: "notify::eula-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eula-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eula-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eula-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eula-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license-agreement", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-agreement", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license-agreement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license-agreement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license-agreement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EulaRequired_ConstructProps)
    _init (config?: EulaRequired_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): EulaRequired
    /* Function overloads */
    static new(): EulaRequired
    static $gtype: GObject.Type
}
interface Files_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.Files */
    files?: string[]
    packageId?: string
}
class Files {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Files */
    files: string[]
    packageId: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Files */
    getFiles(): string[]
    getPackageId(): string
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
    connect(sigName: "notify::files", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Files_ConstructProps)
    _init (config?: Files_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Files
    /* Function overloads */
    static new(): Files
    static $gtype: GObject.Type
}
interface ItemProgress_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress */
    packageId?: string
    percentage?: number
    status?: number
}
class ItemProgress {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress */
    packageId: string
    percentage: number
    status: number
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.ItemProgress */
    getPackageId(): string
    getPercentage(): number
    getStatus(): StatusEnum
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
    connect(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::percentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ItemProgress_ConstructProps)
    _init (config?: ItemProgress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ItemProgress
    /* Function overloads */
    static new(): ItemProgress
    static $gtype: GObject.Type
}
interface MediaChangeRequired_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired */
    mediaId?: string
    mediaText?: string
    mediaType?: MediaTypeEnum
}
class MediaChangeRequired {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired */
    mediaId: string
    mediaText: string
    mediaType: MediaTypeEnum
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::media-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaChangeRequired_ConstructProps)
    _init (config?: MediaChangeRequired_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaChangeRequired
    /* Function overloads */
    static new(): MediaChangeRequired
    static $gtype: GObject.Type
}
interface Package_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.Package */
    description?: string
    group?: GroupEnum
    info?: InfoEnum
    license?: string
    size?: number
    summary?: string
    updateBugzillaUrls?: string[]
    updateChangelog?: string
    updateCveUrls?: string[]
    updateIssued?: string
    updateObsoletes?: string
    updateRestart?: RestartEnum
    updateSeverity?: InfoEnum
    updateState?: UpdateStateEnum
    updateText?: string
    updateUpdated?: string
    updateUpdates?: string
    updateVendorUrls?: string[]
    url?: string
}
class Package {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Package */
    description: string
    group: GroupEnum
    info: InfoEnum
    license: string
    readonly packageId: string
    size: number
    summary: string
    updateBugzillaUrls: string[]
    updateChangelog: string
    updateCveUrls: string[]
    updateIssued: string
    updateObsoletes: string
    updateRestart: RestartEnum
    updateSeverity: InfoEnum
    updateState: UpdateStateEnum
    updateText: string
    updateUpdated: string
    updateUpdates: string
    updateVendorUrls: string[]
    url: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Package */
    equal(package2: Package): boolean
    equalId(package2: Package): boolean
    getArch(): string
    getData(): string
    getId(): string
    getInfo(): InfoEnum
    getName(): string
    getSummary(): string
    getUpdateSeverity(): InfoEnum
    getVersion(): string
    parse(data: string): boolean
    print(): void
    setId(packageId: string): boolean
    setInfo(info: InfoEnum): void
    setSummary(summary: string): void
    setUpdateSeverity(updateSeverity: InfoEnum): void
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
    /* Signals of PackageKitGlib-1.0.PackageKitGlib.Package */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::group", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-bugzilla-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-bugzilla-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-bugzilla-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-bugzilla-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-bugzilla-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-changelog", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-changelog", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-changelog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-changelog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-changelog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-cve-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-cve-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-cve-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-cve-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-cve-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-issued", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-issued", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-issued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-issued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-issued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-obsoletes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-obsoletes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-obsoletes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-obsoletes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-obsoletes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-restart", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-restart", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-severity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-severity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-severity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-severity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-severity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-updates", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-updates", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-updates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-updates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-updates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-vendor-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-vendor-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-vendor-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-vendor-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-vendor-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Package_ConstructProps)
    _init (config?: Package_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Package
    /* Function overloads */
    static new(): Package
    static idBuild(name: string, version: string, arch: string, data: string): string
    static idCheck(packageId: string): boolean
    static idEqualFuzzyArch(packageId1: string, packageId2: string): boolean
    static idSplit(packageId: string): string[]
    static idToPrintable(packageId: string): string
    static idsAddId(packageIds: string, packageId: string): string[]
    static idsAddIds(packageIds: string, packageIdsNew: string): string[]
    static idsCheck(packageIds: string): boolean
    static idsFromId(packageId: string): string[]
    static idsFromString(packageId: string): string[]
    static idsPresentId(packageIds: string, packageId: string): boolean
    static idsRemoveId(packageIds: string, packageId: string): string[]
    static idsToString(packageIds: string): string
    static $gtype: GObject.Type
}
interface PackageSack_ConstructProps extends GObject.Object_ConstructProps {
}
class PackageSack {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.PackageSack */
    addPackage(package: Package): boolean
    addPackageById(packageId: string): boolean
    addPackagesFromFile(file: Gio.File): boolean
    clear(): void
    filter(filterCb: PackageSackFilterFunc): PackageSack
    filterByInfo(info: InfoEnum): PackageSack
    findById(packageId: string): Package
    findByIdNameArch(packageId: string): Package
    getArray(): Package[]
    getDetails(cancellable?: Gio.Cancellable | null): boolean
    getDetailsAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callback?: Gio.AsyncReadyCallback | null): void
    getIds(): string[]
    getSize(): number
    getTotalBytes(): number
    getUpdateDetail(cancellable?: Gio.Cancellable | null): boolean
    getUpdateDetailAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callback?: Gio.AsyncReadyCallback | null): void
    mergeGenericFinish(res: Gio.AsyncResult): boolean
    removeByFilter(filterCb: PackageSackFilterFunc): boolean
    removePackage(package: Package): boolean
    removePackageById(packageId: string): boolean
    resolve(cancellable?: Gio.Cancellable | null): boolean
    resolveAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callback?: Gio.AsyncReadyCallback | null): void
    sort(type: PackageSackSortType): void
    toFile(file: Gio.File): boolean
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
    constructor (config?: PackageSack_ConstructProps)
    _init (config?: PackageSack_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PackageSack
    static $gtype: GObject.Type
}
interface Progress_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.Progress */
    allowCancel?: boolean
    callerActive?: boolean
    downloadSizeRemaining?: number
    elapsedTime?: number
    itemProgress?: ItemProgress
    package?: Package
    packageId?: string
    percentage?: number
    remainingTime?: number
    role?: number
    speed?: number
    status?: number
    transactionFlags?: number
    transactionId?: string
    uid?: number
}
class Progress {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Progress */
    allowCancel: boolean
    callerActive: boolean
    downloadSizeRemaining: number
    elapsedTime: number
    itemProgress: ItemProgress
    package: Package
    packageId: string
    percentage: number
    remainingTime: number
    role: number
    speed: number
    status: number
    transactionFlags: number
    transactionId: string
    uid: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Progress */
    getAllowCancel(): boolean
    getCallerActive(): boolean
    getDownloadSizeRemaining(): number
    getElapsedTime(): number
    getItemProgress(): ItemProgress
    getPackage(): Package
    getPackageId(): string
    getPercentage(): number
    getRemainingTime(): number
    getRole(): RoleEnum
    getSpeed(): number
    getStatus(): StatusEnum
    getTransactionFlags(): number
    getTransactionId(): string
    getUid(): number
    setAllowCancel(allowCancel: boolean): boolean
    setCallerActive(callerActive: boolean): boolean
    setDownloadSizeRemaining(downloadSizeRemaining: number): boolean
    setElapsedTime(elapsedTime: number): boolean
    setItemProgress(itemProgress: ItemProgress): boolean
    setPackage(package: Package): boolean
    setPackageId(packageId: string): boolean
    setPercentage(percentage: number): boolean
    setRemainingTime(remainingTime: number): boolean
    setRole(role: RoleEnum): boolean
    setSpeed(speed: number): boolean
    setStatus(status: StatusEnum): boolean
    setTransactionFlags(transactionFlags: number): boolean
    setTransactionId(transactionId: string): boolean
    setUid(uid: number): boolean
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
    connect(sigName: "notify::allow-cancel", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-cancel", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caller-active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caller-active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caller-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caller-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caller-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::download-size-remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::download-size-remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::download-size-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::download-size-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::download-size-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::elapsed-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::elapsed-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::elapsed-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::elapsed-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::elapsed-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::item-progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::item-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::item-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::item-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::package", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::package", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::package", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::package", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::percentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Progress_ConstructProps)
    _init (config?: Progress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Progress
    static $gtype: GObject.Type
}
interface RepoDetail_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail */
    description?: string
    enabled?: boolean
    repoId?: string
}
class RepoDetail {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail */
    description: string
    enabled: boolean
    repoId: string
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.RepoDetail */
    getDescription(): string
    getEnabled(): boolean
    getId(): string
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
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repo-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repo-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repo-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repo-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repo-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RepoDetail_ConstructProps)
    _init (config?: RepoDetail_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RepoDetail
    /* Function overloads */
    static new(): RepoDetail
    static $gtype: GObject.Type
}
interface RepoSignatureRequired_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired */
    keyFingerprint?: string
    keyId?: string
    keyTimestamp?: string
    keyUrl?: string
    keyUserid?: string
    packageId?: string
    repositoryName?: string
    type?: SigTypeEnum
}
class RepoSignatureRequired {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired */
    keyFingerprint: string
    keyId: string
    keyTimestamp: string
    keyUrl: string
    keyUserid: string
    packageId: string
    repositoryName: string
    type: SigTypeEnum
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key-fingerprint", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-fingerprint", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-fingerprint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-fingerprint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-fingerprint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-userid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-userid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-userid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-userid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-userid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repository-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repository-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repository-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repository-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RepoSignatureRequired_ConstructProps)
    _init (config?: RepoSignatureRequired_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RepoSignatureRequired
    /* Function overloads */
    static new(): RepoSignatureRequired
    static $gtype: GObject.Type
}
interface RequireRestart_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart */
    packageId?: string
    restart?: RestartEnum
}
class RequireRestart {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart */
    packageId: string
    restart: RestartEnum
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restart", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restart", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RequireRestart_ConstructProps)
    _init (config?: RequireRestart_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RequireRestart
    /* Function overloads */
    static new(): RequireRestart
    static $gtype: GObject.Type
}
interface Results_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.Results */
    inputs?: number
    progress?: Progress
    role?: RoleEnum
    transactionFlags?: number
}
class Results {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Results */
    inputs: number
    progress: Progress
    role: RoleEnum
    transactionFlags: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Results */
    addCategory(item: Category): boolean
    addDetails(item: Details): boolean
    addDistroUpgrade(item: DistroUpgrade): boolean
    addEulaRequired(item: EulaRequired): boolean
    addFiles(item: Files): boolean
    addMediaChangeRequired(item: MediaChangeRequired): boolean
    addPackage(item: Package): boolean
    addRepoDetail(item: RepoDetail): boolean
    addRepoSignatureRequired(item: RepoSignatureRequired): boolean
    addRequireRestart(item: RequireRestart): boolean
    addTransaction(item: TransactionPast): boolean
    addUpdateDetail(item: UpdateDetail): boolean
    getCategoryArray(): Category[]
    getDetailsArray(): Details[]
    getDistroUpgradeArray(): DistroUpgrade[]
    getErrorCode(): Error
    getEulaRequiredArray(): EulaRequired[]
    getExitCode(): ExitEnum
    getFilesArray(): Files[]
    getMediaChangeRequiredArray(): MediaChangeRequired[]
    getPackageArray(): Package[]
    getPackageSack(): PackageSack
    getRepoDetailArray(): RepoDetail[]
    getRepoSignatureRequiredArray(): RepoSignatureRequired[]
    getRequireRestartArray(): RequireRestart[]
    getRequireRestartWorst(): RestartEnum
    getRole(): RoleEnum
    getTransactionArray(): TransactionPast[]
    getTransactionFlags(): Bitfield
    getUpdateDetailArray(): UpdateDetail[]
    setErrorCode(item: Error): boolean
    setExitCode(exitEnum: ExitEnum): boolean
    setRole(role: RoleEnum): boolean
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
    connect(sigName: "notify::inputs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inputs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inputs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inputs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inputs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Results_ConstructProps)
    _init (config?: Results_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Results
    static $gtype: GObject.Type
}
interface Source_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role?: RoleEnum
    transactionId?: string
}
class Source {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Source_ConstructProps)
    _init (config?: Source_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Source
    static $gtype: GObject.Type
}
interface Task_ConstructProps extends Client_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.Task */
    allowDowngrade?: boolean
    allowReinstall?: boolean
    onlyDownload?: boolean
    onlyTrusted?: boolean
    simulate?: boolean
}
class Task {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Task */
    allowDowngrade: boolean
    allowReinstall: boolean
    onlyDownload: boolean
    onlyTrusted: boolean
    simulate: boolean
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Client */
    background: boolean
    cacheAge: number
    readonly idle: boolean
    interactive: boolean
    locale: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Client */
    readonly parent: GObject.Object
    readonly priv: ClientPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Task */
    dependsOnAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    dependsOnSync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    downloadPackagesAsync(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    downloadPackagesSync(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    genericFinish(res: Gio.AsyncResult): Results
    getAllowDowngrade(): boolean
    getAllowReinstall(): boolean
    getCategoriesAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getCategoriesSync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getDetailsAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getDetailsSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getFilesAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getFilesSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getOnlyDownload(): boolean
    getOnlyTrusted(): boolean
    getPackagesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getPackagesSync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getRepoListAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getRepoListSync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getSimulate(): boolean
    getUpdateDetailAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getUpdateDetailSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getUpdatesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getUpdatesSync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    installFilesAsync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    installFilesSync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    installPackagesAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    installPackagesSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    refreshCacheAsync(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    refreshCacheSync(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    removePackagesAsync(packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    removePackagesSync(packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    repairSystemAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    repairSystemSync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    repoEnableAsync(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    repoEnableSync(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    requiredByAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    requiredBySync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    resolveAsync(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    resolveSync(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    searchDetailsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    searchDetailsSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    searchFilesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    searchFilesSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    searchGroupsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    searchGroupsSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    searchNamesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    searchNamesSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    setAllowDowngrade(allowDowngrade: boolean): void
    setAllowReinstall(allowReinstall: boolean): void
    setOnlyDownload(onlyDownload: boolean): void
    setOnlyTrusted(onlyTrusted: boolean): void
    setSimulate(simulate: boolean): void
    updatePackagesAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    updatePackagesSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    upgradeSystemAsync(distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    upgradeSystemSync(distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    userAccepted(request: number): boolean
    userDeclined(request: number): boolean
    whatProvidesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    whatProvidesSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.Client */
    acceptEula(eulaId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    acceptEulaAsync(eulaId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    adopt(transactionId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    adoptAsync(transactionId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    dependsOn(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    dependsOnAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    downloadPackages(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    downloadPackagesAsync(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    genericFinish(res: Gio.AsyncResult): Results
    getBackground(): boolean
    getCacheAge(): number
    getCategories(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getCategoriesAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getDetails(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getDetailsAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getDetailsLocal(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getDetailsLocalAsync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getDistroUpgrades(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getDistroUpgradesAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getFiles(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getFilesAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getFilesLocal(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getFilesLocalAsync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getIdle(): boolean
    getInteractive(): boolean
    getLocale(): string
    getOldTransactions(number: number, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getOldTransactionsAsync(number: number, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getPackages(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getPackagesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getProgress(transactionId: string, cancellable?: Gio.Cancellable | null): Progress
    getProgressAsync(transactionId: string, cancellable?: Gio.Cancellable | null, callbackReady?: Gio.AsyncReadyCallback | null): void
    getProgressFinish(res: Gio.AsyncResult): Progress
    getRepoList(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getRepoListAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getUpdateDetail(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getUpdateDetailAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    getUpdates(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    getUpdatesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    installFiles(transactionFlags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    installFilesAsync(transactionFlags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    installPackages(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    installPackagesAsync(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    installSignature(type: SigTypeEnum, keyId: string, packageId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    installSignatureAsync(type: SigTypeEnum, keyId: string, packageId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    refreshCache(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    refreshCacheAsync(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    removePackages(transactionFlags: Bitfield, packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    removePackagesAsync(transactionFlags: Bitfield, packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    repairSystem(transactionFlags: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    repairSystemAsync(transactionFlags: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    repoEnable(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    repoEnableAsync(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    repoRemove(transactionFlags: Bitfield, repoId: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    repoRemoveAsync(transactionFlags: Bitfield, repoId: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    repoSetData(repoId: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    repoSetDataAsync(repoId: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    requiredBy(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    requiredByAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    resolve(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    resolveAsync(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    searchDetails(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    searchDetailsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    searchFiles(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    searchFilesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    searchGroups(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    searchGroupsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    searchNames(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    searchNamesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    setBackground(background: boolean): void
    setCacheAge(cacheAge: number): void
    setInteractive(interactive: boolean): void
    setLocale(locale: string): void
    updatePackages(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    updatePackagesAsync(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    upgradeSystem(transactionFlags: Bitfield, distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    upgradeSystemAsync(transactionFlags: Bitfield, distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
    whatProvides(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    whatProvidesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady?: Gio.AsyncReadyCallback | null): void
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
    connect(sigName: "notify::allow-downgrade", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-downgrade", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-downgrade", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-downgrade", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-downgrade", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-reinstall", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-reinstall", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-reinstall", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-reinstall", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-reinstall", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::only-download", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::only-download", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::only-download", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::only-download", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::only-download", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::only-trusted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::only-trusted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::only-trusted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::only-trusted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::only-trusted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::simulate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simulate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::simulate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::simulate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::simulate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cache-age", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-age", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interactive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static new(): Task
    /* Function overloads */
    static new(): Task
    static $gtype: GObject.Type
}
interface TransactionList_ConstructProps extends GObject.Object_ConstructProps {
}
class TransactionList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.TransactionList */
    getIds(): string[]
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
    /* Signals of PackageKitGlib-1.0.PackageKitGlib.TransactionList */
    connect(sigName: "added", callback: ((tid: string) => void)): number
    on(sigName: "added", callback: (tid: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "added", callback: (tid: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "added", callback: (tid: string) => void): NodeJS.EventEmitter
    emit(sigName: "added", tid: string): void
    connect(sigName: "removed", callback: ((tid: string) => void)): number
    on(sigName: "removed", callback: (tid: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: (tid: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: (tid: string) => void): NodeJS.EventEmitter
    emit(sigName: "removed", tid: string): void
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
    constructor (config?: TransactionList_ConstructProps)
    _init (config?: TransactionList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TransactionList
    static $gtype: GObject.Type
}
interface TransactionPast_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPast */
    cmdline?: string
    data?: string
    duration?: number
    role?: RoleEnum
    succeeded?: boolean
    tid?: string
    timespec?: string
    uid?: number
}
class TransactionPast {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPast */
    cmdline: string
    data: string
    duration: number
    role: RoleEnum
    succeeded: boolean
    tid: string
    timespec: string
    uid: number
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.TransactionPast */
    getCmdline(): string
    getData(): string
    getDatetime(): GLib.DateTime
    getDuration(): number
    getId(): string
    getRole(): RoleEnum
    getSucceeded(): boolean
    getTimespec(): string
    getTimestamp(): number
    getUid(): number
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
    connect(sigName: "notify::cmdline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cmdline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cmdline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cmdline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cmdline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::succeeded", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::succeeded", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::succeeded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::succeeded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::succeeded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timespec", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timespec", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timespec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timespec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timespec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TransactionPast_ConstructProps)
    _init (config?: TransactionPast_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TransactionPast
    /* Function overloads */
    static new(): TransactionPast
    static $gtype: GObject.Type
}
interface UpdateDetail_ConstructProps extends Source_ConstructProps {
    /* Constructor properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail */
    bugzillaUrls?: string[]
    changelog?: string
    cveUrls?: string[]
    issued?: string
    obsoletes?: string[]
    packageId?: string
    restart?: RestartEnum
    state?: UpdateStateEnum
    updateText?: string
    updated?: string
    updates?: string[]
    vendorUrls?: string[]
}
class UpdateDetail {
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail */
    bugzillaUrls: string[]
    changelog: string
    cveUrls: string[]
    issued: string
    obsoletes: string[]
    packageId: string
    restart: RestartEnum
    state: UpdateStateEnum
    updateText: string
    updated: string
    updates: string[]
    vendorUrls: string[]
    /* Properties of PackageKitGlib-1.0.PackageKitGlib.Source */
    role: RoleEnum
    transactionId: string
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.Source */
    readonly parent: GObject.Object
    readonly priv: SourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail */
    getBugzillaUrls(): string[]
    getChangelog(): string
    getCveUrls(): string[]
    getIssued(): string
    getObsoletes(): string[]
    getPackageId(): string
    getRestart(): RestartEnum
    getState(): UpdateStateEnum
    getUpdateText(): string
    getUpdated(): string
    getUpdates(): string[]
    getVendorUrls(): string[]
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
    connect(sigName: "notify::bugzilla-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bugzilla-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bugzilla-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bugzilla-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bugzilla-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::changelog", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changelog", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::changelog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::changelog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::changelog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cve-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cve-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cve-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cve-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cve-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::issued", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::issued", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::issued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::issued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::issued", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::obsoletes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::obsoletes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::obsoletes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::obsoletes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::obsoletes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::package-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::package-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restart", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restart", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updates", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updates", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UpdateDetail_ConstructProps)
    _init (config?: UpdateDetail_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UpdateDetail
    /* Function overloads */
    static new(): UpdateDetail
    static $gtype: GObject.Type
}
abstract class CategoryClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.CategoryClass */
    readonly parentClass: SourceClass
    static name: string
}
class CategoryPrivate {
    static name: string
}
abstract class ClientClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ClientClass */
    readonly parentClass: GObject.ObjectClass
    readonly changed: (client: Client) => void
    static name: string
}
abstract class ClientHelperClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ClientHelperClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ClientHelperPrivate {
    static name: string
}
class ClientPrivate {
    static name: string
}
abstract class ControlClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ControlClass */
    readonly parentClass: GObject.ObjectClass
    readonly transactionListChanged: (control: Control, transactionIds: string) => void
    readonly updatesChanged: (control: Control) => void
    readonly repoListChanged: (control: Control) => void
    readonly networkStateChanged: (control: Control) => void
    readonly restartSchedule: (control: Control) => void
    readonly locked: (control: Control, isLocked: boolean) => void
    readonly connectionChanged: (control: Control, connected: boolean) => void
    static name: string
}
class ControlPrivate {
    static name: string
}
abstract class DesktopClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.DesktopClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DesktopPrivate {
    static name: string
}
abstract class DetailsClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.DetailsClass */
    readonly parentClass: SourceClass
    static name: string
}
class DetailsPrivate {
    static name: string
}
abstract class DistroUpgradeClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.DistroUpgradeClass */
    readonly parentClass: SourceClass
    static name: string
}
class DistroUpgradePrivate {
    static name: string
}
class EnumMatch {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.EnumMatch */
    readonly value: number
    readonly string: string
    static name: string
}
abstract class ErrorClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ErrorClass */
    readonly parentClass: SourceClass
    static name: string
}
class ErrorPrivate {
    static name: string
}
abstract class EulaRequiredClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.EulaRequiredClass */
    readonly parentClass: SourceClass
    static name: string
}
class EulaRequiredPrivate {
    static name: string
}
abstract class FilesClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.FilesClass */
    readonly parentClass: SourceClass
    static name: string
}
class FilesPrivate {
    static name: string
}
abstract class ItemProgressClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ItemProgressClass */
    readonly parentClass: SourceClass
    static name: string
}
class ItemProgressPrivate {
    static name: string
}
abstract class MediaChangeRequiredClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequiredClass */
    readonly parentClass: SourceClass
    static name: string
}
class MediaChangeRequiredPrivate {
    static name: string
}
abstract class PackageClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.PackageClass */
    readonly parentClass: SourceClass
    readonly changed: (package: Package) => void
    static name: string
}
class PackagePrivate {
    static name: string
}
abstract class PackageSackClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.PackageSackClass */
    readonly parentClass: GObject.ObjectClass
    readonly changed: (sack: PackageSack) => void
    static name: string
}
class PackageSackPrivate {
    static name: string
}
class PackageSackResults {
    static name: string
}
abstract class ProgressClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ProgressClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ProgressPrivate {
    static name: string
}
abstract class RepoDetailClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.RepoDetailClass */
    readonly parentClass: SourceClass
    static name: string
}
class RepoDetailPrivate {
    static name: string
}
abstract class RepoSignatureRequiredClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequiredClass */
    readonly parentClass: SourceClass
    static name: string
}
class RepoSignatureRequiredPrivate {
    static name: string
}
abstract class RequireRestartClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.RequireRestartClass */
    readonly parentClass: SourceClass
    static name: string
}
class RequireRestartPrivate {
    static name: string
}
abstract class ResultsClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.ResultsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ResultsPrivate {
    static name: string
}
abstract class SourceClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.SourceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SourcePrivate {
    static name: string
}
abstract class TaskClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.TaskClass */
    readonly parentClass: ClientClass
    readonly untrustedQuestion: (task: Task, request: number, results: Results) => void
    readonly keyQuestion: (task: Task, request: number, results: Results) => void
    readonly eulaQuestion: (task: Task, request: number, results: Results) => void
    readonly mediaChangeQuestion: (task: Task, request: number, results: Results) => void
    readonly simulateQuestion: (task: Task, request: number, results: Results) => void
    readonly repairQuestion: (task: Task, request: number, results: Results) => void
    static name: string
}
class TaskPrivate {
    static name: string
}
abstract class TransactionListClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.TransactionListClass */
    readonly parentClass: GObject.ObjectClass
    readonly added: (tlist: TransactionList, tid: string) => void
    readonly removed: (tlist: TransactionList, tid: string) => void
    static name: string
}
class TransactionListPrivate {
    static name: string
}
abstract class TransactionPastClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.TransactionPastClass */
    readonly parentClass: SourceClass
    static name: string
}
class TransactionPastPrivate {
    static name: string
}
abstract class UpdateDetailClass {
    /* Fields of PackageKitGlib-1.0.PackageKitGlib.UpdateDetailClass */
    readonly parentClass: SourceClass
    static name: string
}
class UpdateDetailPrivate {
    static name: string
}
    type Bitfield = number
}
export default PackageKitGlib;