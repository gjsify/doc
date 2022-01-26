/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Fwupd-2.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Fwupd {

enum Error {
    INTERNAL,
    VERSION_NEWER,
    VERSION_SAME,
    ALREADY_PENDING,
    AUTH_FAILED,
    READ,
    WRITE,
    INVALID_FILE,
    NOT_FOUND,
    NOTHING_TO_DO,
    NOT_SUPPORTED,
    SIGNATURE_INVALID,
    AC_POWER_REQUIRED,
    PERMISSION_DENIED,
    BROKEN_SYSTEM,
    BATTERY_LEVEL_TOO_LOW,
    NEEDS_USER_ACTION,
}
enum KeyringKind {
    UNKNOWN,
    NONE,
    GPG,
    PKCS7,
    JCAT,
}
enum ReleaseUrgency {
    UNKNOWN,
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL,
}
enum RemoteKind {
    UNKNOWN,
    DOWNLOAD,
    LOCAL,
    DIRECTORY,
}
enum SecurityAttrLevel {
    NONE,
    CRITICAL,
    IMPORTANT,
    THEORETICAL,
    SYSTEM_PROTECTION,
    SYSTEM_ATTESTATION,
}
enum SecurityAttrResult {
    UNKNOWN,
    ENABLED,
    NOT_ENABLED,
    VALID,
    NOT_VALID,
    LOCKED,
    NOT_LOCKED,
    ENCRYPTED,
    NOT_ENCRYPTED,
    TAINTED,
    NOT_TAINTED,
    FOUND,
    NOT_FOUND,
    SUPPORTED,
    NOT_SUPPORTED,
}
enum Status {
    UNKNOWN,
    IDLE,
    LOADING,
    DECOMPRESSING,
    DEVICE_RESTART,
    DEVICE_WRITE,
    DEVICE_VERIFY,
    SCHEDULING,
    DOWNLOADING,
    DEVICE_READ,
    DEVICE_ERASE,
    WAITING_FOR_AUTH,
    DEVICE_BUSY,
    SHUTDOWN,
}
enum UpdateState {
    UNKNOWN,
    PENDING,
    SUCCESS,
    FAILED,
    NEEDS_REBOOT,
    FAILED_TRANSIENT,
}
enum VersionFormat {
    UNKNOWN,
    PLAIN,
    NUMBER,
    PAIR,
    TRIPLET,
    QUAD,
    BCD,
    INTEL_ME,
    INTEL_ME2,
    SURFACE_LEGACY,
    SURFACE,
    DELL_BIOS,
    HEX,
}
enum ClientDownloadFlags {
    NONE,
    ONLY_IPFS,
}
enum ClientUploadFlags {
    NONE,
    ALWAYS_MULTIPART,
}
enum FeatureFlags {
    NONE,
    CAN_REPORT,
    DETACH_ACTION,
    UPDATE_ACTION,
    SWITCH_BRANCH,
}
enum GuidFlags {
    NONE,
    NAMESPACE_MICROSOFT,
    MIXED_ENDIAN,
}
enum InstallFlags {
    NONE,
    OFFLINE,
    ALLOW_REINSTALL,
    ALLOW_OLDER,
    FORCE,
    NO_HISTORY,
    ALLOW_BRANCH_SWITCH,
    IGNORE_CHECKSUM,
    IGNORE_VID_PID,
    IGNORE_POWER,
    NO_SEARCH,
}
enum SecurityAttrFlags {
    NONE,
    SUCCESS,
    OBSOLETED,
    RUNTIME_UPDATES,
    RUNTIME_ATTESTATION,
    RUNTIME_ISSUE,
}
enum SelfSignFlags {
    NONE,
    ADD_TIMESTAMP,
    ADD_CERT,
}
enum TrustFlags {
    NONE,
    PAYLOAD,
    METADATA,
}
const DBUS_INTERFACE: string
const DBUS_PATH: string
const DBUS_SERVICE: string
const DEVICE_FLAG_ADD_COUNTERPART_GUIDS: number
const DEVICE_FLAG_ANOTHER_WRITE_REQUIRED: number
const DEVICE_FLAG_BACKUP_BEFORE_INSTALL: number
const DEVICE_FLAG_CAN_VERIFY: number
const DEVICE_FLAG_CAN_VERIFY_IMAGE: number
const DEVICE_FLAG_DUAL_IMAGE: number
const DEVICE_FLAG_ENSURE_SEMVER: number
const DEVICE_FLAG_HAS_MULTIPLE_BRANCHES: number
const DEVICE_FLAG_HISTORICAL: number
const DEVICE_FLAG_IGNORE_VALIDATION: number
const DEVICE_FLAG_INSTALL_ALL_RELEASES: number
const DEVICE_FLAG_INSTALL_PARENT_FIRST: number
const DEVICE_FLAG_INTERNAL: number
const DEVICE_FLAG_IS_BOOTLOADER: number
const DEVICE_FLAG_LOCKED: number
const DEVICE_FLAG_MD_SET_ICON: number
const DEVICE_FLAG_MD_SET_NAME: number
const DEVICE_FLAG_MD_SET_NAME_CATEGORY: number
const DEVICE_FLAG_MD_SET_VERFMT: number
const DEVICE_FLAG_NEEDS_ACTIVATION: number
const DEVICE_FLAG_NEEDS_BOOTLOADER: number
const DEVICE_FLAG_NEEDS_REBOOT: number
const DEVICE_FLAG_NEEDS_SHUTDOWN: number
const DEVICE_FLAG_NONE: number
const DEVICE_FLAG_NOTIFIED: number
const DEVICE_FLAG_NO_AUTO_INSTANCE_IDS: number
const DEVICE_FLAG_NO_GUID_MATCHING: number
const DEVICE_FLAG_ONLY_OFFLINE: number
const DEVICE_FLAG_ONLY_SUPPORTED: number
const DEVICE_FLAG_REGISTERED: number
const DEVICE_FLAG_REPORTED: number
const DEVICE_FLAG_REQUIRE_AC: number
const DEVICE_FLAG_SELF_RECOVERY: number
const DEVICE_FLAG_SKIPS_RESTART: number
const DEVICE_FLAG_SUPPORTED: number
const DEVICE_FLAG_TRUSTED: number
const DEVICE_FLAG_UPDATABLE: number
const DEVICE_FLAG_UPDATABLE_HIDDEN: number
const DEVICE_FLAG_USABLE_DURING_UPDATE: number
const DEVICE_FLAG_USE_RUNTIME_VERSION: number
const DEVICE_FLAG_VERSION_CHECK_REQUIRED: number
const DEVICE_FLAG_WAIT_FOR_REPLUG: number
const DEVICE_FLAG_WILL_DISAPPEAR: number
const DEVICE_ID_ANY: string
const PLUGIN_FLAG_CAPSULES_UNSUPPORTED: number
const PLUGIN_FLAG_CLEAR_UPDATABLE: number
const PLUGIN_FLAG_DISABLED: number
const PLUGIN_FLAG_EFIVAR_NOT_MOUNTED: number
const PLUGIN_FLAG_ESP_NOT_FOUND: number
const PLUGIN_FLAG_FAILED_OPEN: number
const PLUGIN_FLAG_LEGACY_BIOS: number
const PLUGIN_FLAG_NONE: number
const PLUGIN_FLAG_NO_HARDWARE: number
const PLUGIN_FLAG_UNLOCK_REQUIRED: number
const PLUGIN_FLAG_USER_WARNING: number
const RELEASE_FLAG_BLOCKED_APPROVAL: number
const RELEASE_FLAG_BLOCKED_VERSION: number
const RELEASE_FLAG_IS_ALTERNATE_BRANCH: number
const RELEASE_FLAG_IS_DOWNGRADE: number
const RELEASE_FLAG_IS_UPGRADE: number
const RELEASE_FLAG_NONE: number
const RELEASE_FLAG_TRUSTED_METADATA: number
const RELEASE_FLAG_TRUSTED_PAYLOAD: number
const RESULT_KEY_APPSTREAM_ID: string
const RESULT_KEY_BRANCH: string
const RESULT_KEY_CATEGORIES: string
const RESULT_KEY_CHECKSUM: string
const RESULT_KEY_CREATED: string
const RESULT_KEY_DESCRIPTION: string
const RESULT_KEY_DETACH_CAPTION: string
const RESULT_KEY_DETACH_IMAGE: string
const RESULT_KEY_DETAILS_URL: string
const RESULT_KEY_DEVICE_ID: string
const RESULT_KEY_FILENAME: string
const RESULT_KEY_FLAGS: string
const RESULT_KEY_FLASHES_LEFT: string
const RESULT_KEY_GUID: string
const RESULT_KEY_HOMEPAGE: string
const RESULT_KEY_HSI_LEVEL: string
const RESULT_KEY_HSI_RESULT: string
const RESULT_KEY_ICON: string
const RESULT_KEY_INSTALL_DURATION: string
const RESULT_KEY_INSTANCE_IDS: string
const RESULT_KEY_ISSUES: string
const RESULT_KEY_LICENSE: string
const RESULT_KEY_LOCATIONS: string
const RESULT_KEY_METADATA: string
const RESULT_KEY_MODIFIED: string
const RESULT_KEY_NAME: string
const RESULT_KEY_NAME_VARIANT_SUFFIX: string
const RESULT_KEY_PARENT_DEVICE_ID: string
const RESULT_KEY_PLUGIN: string
const RESULT_KEY_PROTOCOL: string
const RESULT_KEY_RELEASE: string
const RESULT_KEY_REMOTE_ID: string
const RESULT_KEY_SERIAL: string
const RESULT_KEY_SIZE: string
const RESULT_KEY_SOURCE_URL: string
const RESULT_KEY_STATUS: string
const RESULT_KEY_SUMMARY: string
const RESULT_KEY_TRUST_FLAGS: string
const RESULT_KEY_UPDATE_ERROR: string
const RESULT_KEY_UPDATE_IMAGE: string
const RESULT_KEY_UPDATE_MESSAGE: string
const RESULT_KEY_UPDATE_STATE: string
const RESULT_KEY_URGENCY: string
const RESULT_KEY_URI: string
const RESULT_KEY_VENDOR: string
const RESULT_KEY_VENDOR_ID: string
const RESULT_KEY_VERSION: string
const RESULT_KEY_VERSION_BOOTLOADER: string
const RESULT_KEY_VERSION_BOOTLOADER_RAW: string
const RESULT_KEY_VERSION_FORMAT: string
const RESULT_KEY_VERSION_LOWEST: string
const RESULT_KEY_VERSION_LOWEST_RAW: string
const RESULT_KEY_VERSION_RAW: string
const SECURITY_ATTR_ID_ACPI_DMAR: string
const SECURITY_ATTR_ID_ENCRYPTED_RAM: string
const SECURITY_ATTR_ID_FWUPD_ATTESTATION: string
const SECURITY_ATTR_ID_FWUPD_PLUGINS: string
const SECURITY_ATTR_ID_FWUPD_UPDATES: string
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_ACM: string
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_ENABLED: string
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_OTP: string
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_POLICY: string
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_VERIFIED: string
const SECURITY_ATTR_ID_INTEL_CET_ACTIVE: string
const SECURITY_ATTR_ID_INTEL_CET_ENABLED: string
const SECURITY_ATTR_ID_INTEL_DCI_ENABLED: string
const SECURITY_ATTR_ID_INTEL_DCI_LOCKED: string
const SECURITY_ATTR_ID_INTEL_SMAP: string
const SECURITY_ATTR_ID_IOMMU: string
const SECURITY_ATTR_ID_KERNEL_LOCKDOWN: string
const SECURITY_ATTR_ID_KERNEL_SWAP: string
const SECURITY_ATTR_ID_KERNEL_TAINTED: string
const SECURITY_ATTR_ID_MEI_MANUFACTURING_MODE: string
const SECURITY_ATTR_ID_MEI_OVERRIDE_STRAP: string
const SECURITY_ATTR_ID_MEI_VERSION: string
const SECURITY_ATTR_ID_SPI_BIOSWE: string
const SECURITY_ATTR_ID_SPI_BLE: string
const SECURITY_ATTR_ID_SPI_SMM_BWP: string
const SECURITY_ATTR_ID_SUSPEND_TO_IDLE: string
const SECURITY_ATTR_ID_SUSPEND_TO_RAM: string
const SECURITY_ATTR_ID_TPM_RECONSTRUCTION_PCR0: string
const SECURITY_ATTR_ID_TPM_VERSION_20: string
const SECURITY_ATTR_ID_UEFI_PK: string
const SECURITY_ATTR_ID_UEFI_SECUREBOOT: string
function buildHistoryReportJson(devices: Device[]): string
function buildMachineId(salt: string): string
function buildUserAgent(packageName: string, packageVersion: string): string
function checksumFormatForDisplay(checksum: string): string
function checksumGetBest(checksums: string[]): string
function checksumGetByKind(checksums: string[], kind: GLib.ChecksumType): string
function checksumGuessKind(checksum: string): GLib.ChecksumType
function errorFromString(error: string): Error
function errorQuark(): GLib.Quark
function errorToString(error: Error): string
function featureFlagFromString(featureFlag: string): FeatureFlags
function featureFlagToString(featureFlag: FeatureFlags): string
function getOsRelease(): GLib.HashTable
function guidFromString(guidstr: string | null, guid: number, flags: GuidFlags): boolean
function guidHashData(data: number, datasz: number, flags: GuidFlags): string
function guidHashString(str: string): string
function guidIsValid(guid: string): boolean
function guidToString(guid: number, flags: GuidFlags): string
function keyringKindFromString(keyringKind: string): KeyringKind
function keyringKindToString(keyringKind: KeyringKind): string
function statusFromString(status: string): Status
function statusToString(status: Status): string
function trustFlagFromString(trustFlag: string): TrustFlags
function trustFlagToString(trustFlag: TrustFlags): string
function updateStateFromString(updateState: string): UpdateState
function updateStateToString(updateState: UpdateState): string
function versionFormatFromString(str: string): VersionFormat
function versionFormatToString(kind: VersionFormat): string
interface Client_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Fwupd-2.0.Fwupd.Client */
    percentage?: number
    status?: number
}
class Client {
    /* Properties of Fwupd-2.0.Fwupd.Client */
    readonly daemonVersion: string
    readonly hostMachineId: string
    readonly hostProduct: string
    readonly hostSecurityId: string
    readonly interactive: boolean
    percentage: number
    readonly soupSession: GObject.Object
    status: number
    readonly tainted: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Client */
    activate(cancellable: Gio.Cancellable | null, deviceId: string): boolean
    activateAsync(deviceId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    activateFinish(res: Gio.AsyncResult): boolean
    clearResults(deviceId: string, cancellable?: Gio.Cancellable | null): boolean
    clearResultsAsync(deviceId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    clearResultsFinish(res: Gio.AsyncResult): boolean
    connect(cancellable?: Gio.Cancellable | null): boolean
    connectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(res: Gio.AsyncResult): boolean
    downloadBytes(url: string, flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null): any
    downloadBytesAsync(url: string, flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    downloadBytesFinish(res: Gio.AsyncResult): any
    downloadFile(url: string, file: Gio.File, flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null): boolean
    ensureNetworking(): boolean
    getApprovedFirmware(cancellable?: Gio.Cancellable | null): string[]
    getApprovedFirmwareAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getApprovedFirmwareFinish(res: Gio.AsyncResult): string[]
    getBlockedFirmware(cancellable?: Gio.Cancellable | null): string[]
    getBlockedFirmwareAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getBlockedFirmwareFinish(res: Gio.AsyncResult): string[]
    getDaemonInteractive(): boolean
    getDaemonVersion(): string
    getDetails(filename: string, cancellable?: Gio.Cancellable | null): Device[]
    getDetailsBytes(bytes: any, cancellable?: Gio.Cancellable | null): Device[]
    getDetailsBytesAsync(bytes: any, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDetailsBytesFinish(res: Gio.AsyncResult): Device[]
    getDeviceById(deviceId: string, cancellable?: Gio.Cancellable | null): Device
    getDeviceByIdAsync(deviceId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDeviceByIdFinish(res: Gio.AsyncResult): Device
    getDevices(cancellable?: Gio.Cancellable | null): Device[]
    getDevicesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDevicesByGuid(guid: string, cancellable?: Gio.Cancellable | null): Device[]
    getDevicesByGuidAsync(guid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDevicesByGuidFinish(res: Gio.AsyncResult): Release[]
    getDevicesFinish(res: Gio.AsyncResult): Device[]
    getDowngrades(deviceId: string, cancellable?: Gio.Cancellable | null): Release[]
    getDowngradesAsync(deviceId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDowngradesFinish(res: Gio.AsyncResult): Release[]
    getHistory(cancellable?: Gio.Cancellable | null): Device[]
    getHistoryAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getHistoryFinish(res: Gio.AsyncResult): Device[]
    getHostMachineId(): string
    getHostProduct(): string
    getHostSecurityAttrs(cancellable?: Gio.Cancellable | null): SecurityAttr[]
    getHostSecurityAttrsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getHostSecurityAttrsFinish(res: Gio.AsyncResult): SecurityAttr[]
    getHostSecurityId(): string
    getMainContext(): GLib.MainContext
    getPercentage(): number
    getPlugins(cancellable?: Gio.Cancellable | null): Plugin[]
    getPluginsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getPluginsFinish(res: Gio.AsyncResult): Device[]
    getReleases(deviceId: string, cancellable?: Gio.Cancellable | null): Release[]
    getReleasesAsync(deviceId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getReleasesFinish(res: Gio.AsyncResult): Release[]
    getRemoteById(remoteId: string, cancellable?: Gio.Cancellable | null): Remote
    getRemoteByIdAsync(remoteId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getRemoteByIdFinish(res: Gio.AsyncResult): Remote
    getRemotes(cancellable?: Gio.Cancellable | null): Remote[]
    getRemotesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getRemotesFinish(res: Gio.AsyncResult): Remote[]
    getReportMetadata(cancellable?: Gio.Cancellable | null): GLib.HashTable
    getReportMetadataAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getReportMetadataFinish(res: Gio.AsyncResult): GLib.HashTable
    getResults(deviceId: string, cancellable?: Gio.Cancellable | null): Device
    getResultsAsync(deviceId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getResultsFinish(res: Gio.AsyncResult): Device
    getStatus(): Status
    getTainted(): boolean
    getUpgrades(deviceId: string, cancellable?: Gio.Cancellable | null): Release[]
    getUpgradesAsync(deviceId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getUpgradesFinish(res: Gio.AsyncResult): Release[]
    getUserAgent(): string
    install(deviceId: string, filename: string, installFlags: InstallFlags, cancellable?: Gio.Cancellable | null): boolean
    installAsync(deviceId: string, filename: string, installFlags: InstallFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    installBytes(deviceId: string, bytes: any, installFlags: InstallFlags, cancellable?: Gio.Cancellable | null): boolean
    installBytesAsync(deviceId: string, bytes: any, installFlags: InstallFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    installBytesFinish(res: Gio.AsyncResult): boolean
    installFinish(res: Gio.AsyncResult): boolean
    installRelease(device: Device, release: Release, installFlags: InstallFlags, cancellable?: Gio.Cancellable | null): boolean
    installRelease2(device: Device, release: Release, installFlags: InstallFlags, downloadFlags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null): boolean
    installRelease2Async(device: Device, release: Release, installFlags: InstallFlags, downloadFlags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    installReleaseAsync(device: Device, release: Release, installFlags: InstallFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    installReleaseFinish(res: Gio.AsyncResult): boolean
    modifyConfig(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    modifyConfigAsync(key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyConfigFinish(res: Gio.AsyncResult): boolean
    modifyDevice(deviceId: string, key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    modifyDeviceAsync(deviceId: string, key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyDeviceFinish(res: Gio.AsyncResult): boolean
    modifyRemote(remoteId: string, key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    modifyRemoteAsync(remoteId: string, key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyRemoteFinish(res: Gio.AsyncResult): boolean
    refreshRemote(remote: Remote, cancellable?: Gio.Cancellable | null): boolean
    refreshRemoteAsync(remote: Remote, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshRemoteFinish(res: Gio.AsyncResult): boolean
    selfSign(value: string, flags: SelfSignFlags, cancellable?: Gio.Cancellable | null): string
    selfSignAsync(value: string, flags: SelfSignFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    selfSignFinish(res: Gio.AsyncResult): string
    setApprovedFirmware(checksums: string, cancellable?: Gio.Cancellable | null): boolean
    setApprovedFirmwareAsync(checksums: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setApprovedFirmwareFinish(res: Gio.AsyncResult): boolean
    setBlockedFirmware(checksums: string, cancellable?: Gio.Cancellable | null): boolean
    setBlockedFirmwareAsync(checksums: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setBlockedFirmwareFinish(res: Gio.AsyncResult): boolean
    setFeatureFlags(featureFlags: FeatureFlags, cancellable?: Gio.Cancellable | null): boolean
    setFeatureFlagsAsync(featureFlags: FeatureFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setFeatureFlagsFinish(res: Gio.AsyncResult): boolean
    setMainContext(mainCtx?: GLib.MainContext | null): void
    setUserAgent(userAgent: string): void
    setUserAgentForPackage(packageName: string, packageVersion: string): void
    unlock(deviceId: string, cancellable?: Gio.Cancellable | null): boolean
    unlockAsync(deviceId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unlockFinish(res: Gio.AsyncResult): boolean
    updateMetadata(remoteId: string, metadataFn: string, signatureFn: string, cancellable?: Gio.Cancellable | null): boolean
    updateMetadataBytes(remoteId: string, metadata: any, signature: any, cancellable?: Gio.Cancellable | null): boolean
    updateMetadataBytesAsync(remoteId: string, metadata: any, signature: any, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateMetadataBytesFinish(res: Gio.AsyncResult): boolean
    uploadBytes(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable?: Gio.Cancellable | null): any
    uploadBytesAsync(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uploadBytesFinish(res: Gio.AsyncResult): any
    verify(deviceId: string, cancellable?: Gio.Cancellable | null): boolean
    verifyAsync(deviceId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verifyFinish(res: Gio.AsyncResult): boolean
    verifyUpdate(deviceId: string, cancellable?: Gio.Cancellable | null): boolean
    verifyUpdateAsync(deviceId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verifyUpdateFinish(res: Gio.AsyncResult): boolean
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
    /* Signals of Fwupd-2.0.Fwupd.Client */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "device-added", callback: ((result: Device) => void)): number
    on(sigName: "device-added", callback: (result: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (result: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (result: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", result: Device): void
    connect(sigName: "device-changed", callback: ((result: Device) => void)): number
    on(sigName: "device-changed", callback: (result: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-changed", callback: (result: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-changed", callback: (result: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-changed", result: Device): void
    connect(sigName: "device-removed", callback: ((result: Device) => void)): number
    on(sigName: "device-removed", callback: (result: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (result: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (result: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", result: Device): void
    connect(sigName: "status-changed", callback: ((object: number) => void)): number
    on(sigName: "status-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "status-changed", object: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::daemon-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host-machine-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-machine-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host-machine-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host-machine-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host-machine-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host-product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host-product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host-product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host-product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host-security-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-security-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host-security-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host-security-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host-security-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interactive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::percentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::soup-session", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::soup-session", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::soup-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::soup-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::soup-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tainted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tainted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tainted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tainted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tainted", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Fwupd-2.0.Fwupd.Device */
    flags?: number
    parent?: Device
    protocol?: string
    status?: number
    updateState?: number
    versionFormat?: number
}
class Device {
    /* Properties of Fwupd-2.0.Fwupd.Device */
    flags: number
    parent: Device
    protocol: string
    status: number
    updateState: number
    versionFormat: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Device */
    addChecksum(checksum: string): void
    addChild(child: Device): void
    addFlag(flag: DeviceFlags): void
    addGuid(guid: string): void
    addIcon(icon: string): void
    addInstanceId(instanceId: string): void
    addRelease(release: Release): void
    addVendorId(vendorId: string): void
    compare(device2: Device): number
    getBranch(): string
    getChecksums(): string[]
    getChildren(): Device[]
    getCreated(): number
    getDescription(): string
    getFlags(): number
    getFlashesLeft(): number
    getGuidDefault(): string
    getGuids(): string[]
    getIcons(): string[]
    getId(): string
    getInstallDuration(): number
    getInstanceIds(): string[]
    getModified(): number
    getName(): string
    getParent(): Device
    getParentId(): string
    getPlugin(): string
    getProtocol(): string
    getReleaseDefault(): Release
    getReleases(): Release[]
    getSerial(): string
    getStatus(): Status
    getSummary(): string
    getUpdateError(): string
    getUpdateImage(): string
    getUpdateMessage(): string
    getUpdateState(): UpdateState
    getVendor(): string
    getVendorId(): string
    getVendorIds(): string[]
    getVersion(): string
    getVersionBootloader(): string
    getVersionBootloaderRaw(): number
    getVersionFormat(): VersionFormat
    getVersionLowest(): string
    getVersionLowestRaw(): number
    getVersionRaw(): number
    hasFlag(flag: DeviceFlags): boolean
    hasGuid(guid: string): boolean
    hasInstanceId(instanceId: string): boolean
    hasVendorId(vendorId: string): boolean
    incorporate(donor: Device): void
    removeFlag(flag: DeviceFlags): void
    setBranch(branch: string): void
    setCreated(created: number): void
    setDescription(description: string): void
    setFlags(flags: number): void
    setFlashesLeft(flashesLeft: number): void
    setId(id: string): void
    setInstallDuration(duration: number): void
    setModified(modified: number): void
    setName(name: string): void
    setParent(parent: Device): void
    setParentId(parentId: string): void
    setPlugin(plugin: string): void
    setProtocol(protocol: string): void
    setSerial(serial: string): void
    setStatus(status: Status): void
    setSummary(summary: string): void
    setUpdateError(updateError: string): void
    setUpdateImage(updateImage: string): void
    setUpdateMessage(updateMessage: string): void
    setUpdateState(updateState: UpdateState): void
    setVendor(vendor: string): void
    setVendorId(vendorId: string): void
    setVersion(version: string): void
    setVersionBootloader(versionBootloader: string): void
    setVersionBootloaderRaw(versionBootloaderRaw: number): void
    setVersionFormat(versionFormat: VersionFormat): void
    setVersionLowest(versionLowest: string): void
    setVersionLowestRaw(versionLowestRaw: number): void
    setVersionRaw(versionRaw: number): void
    toString(): string
    toVariant(): GLib.Variant
    toVariantFull(flags: DeviceFlags): GLib.Variant
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
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static new(): Device
    static arrayEnsureParents(devices: Device[]): void
    static arrayFromVariant(value: GLib.Variant): Device[]
    static flagFromString(deviceFlag: string): DeviceFlags
    static flagToString(deviceFlag: DeviceFlags): string
    static fromVariant(value: GLib.Variant): Device
    static idIsValid(deviceId: string): boolean
    static $gtype: GObject.Type
}
interface Plugin_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Fwupd-2.0.Fwupd.Plugin */
    flags?: number
    name?: string
}
class Plugin {
    /* Properties of Fwupd-2.0.Fwupd.Plugin */
    flags: number
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Plugin */
    addFlag(flag: PluginFlags): void
    getFlags(): number
    getName(): string
    hasFlag(flag: PluginFlags): boolean
    removeFlag(flag: PluginFlags): void
    setFlags(flags: number): void
    setName(name: string): void
    toString(): string
    toVariant(): GLib.Variant
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
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Plugin
    static arrayFromVariant(value: GLib.Variant): Plugin[]
    static flagFromString(pluginFlag: string): PluginFlags
    static flagToString(pluginFlag: PluginFlags): string
    static fromVariant(value: GLib.Variant): Plugin
    static $gtype: GObject.Type
}
interface Release_ConstructProps extends GObject.Object_ConstructProps {
}
class Release {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Release */
    addCategory(category: string): void
    addChecksum(checksum: string): void
    addFlag(flag: ReleaseFlags): void
    addIssue(issue: string): void
    addLocation(location: string): void
    addMetadata(hash: GLib.HashTable): void
    addMetadataItem(key: string, value: string): void
    getAppstreamId(): string
    getBranch(): string
    getCategories(): string[]
    getChecksums(): string[]
    getCreated(): number
    getDescription(): string
    getDetachCaption(): string
    getDetachImage(): string
    getDetailsUrl(): string
    getFilename(): string
    getFlags(): ReleaseFlags
    getHomepage(): string
    getInstallDuration(): number
    getIssues(): string[]
    getLicense(): string
    getLocations(): string[]
    getMetadata(): GLib.HashTable
    getMetadataItem(key: string): string
    getName(): string
    getNameVariantSuffix(): string
    getProtocol(): string
    getRemoteId(): string
    getSize(): number
    getSourceUrl(): string
    getSummary(): string
    getTrustFlags(): TrustFlags
    getUpdateImage(): string
    getUpdateMessage(): string
    getUrgency(): ReleaseUrgency
    getUri(): string
    getVendor(): string
    getVersion(): string
    hasCategory(category: string): boolean
    hasChecksum(checksum: string): boolean
    hasFlag(flag: ReleaseFlags): boolean
    removeFlag(flag: ReleaseFlags): void
    setAppstreamId(appstreamId: string): void
    setBranch(branch: string): void
    setCreated(created: number): void
    setDescription(description: string): void
    setDetachCaption(detachCaption: string): void
    setDetachImage(detachImage: string): void
    setDetailsUrl(detailsUrl: string): void
    setFilename(filename: string): void
    setFlags(flags: ReleaseFlags): void
    setHomepage(homepage: string): void
    setInstallDuration(duration: number): void
    setLicense(license: string): void
    setName(name: string): void
    setNameVariantSuffix(nameVariantSuffix: string): void
    setProtocol(protocol: string): void
    setRemoteId(remoteId: string): void
    setSize(size: number): void
    setSourceUrl(sourceUrl: string): void
    setSummary(summary: string): void
    setTrustFlags(trustFlags: TrustFlags): void
    setUpdateImage(updateImage: string): void
    setUpdateMessage(updateMessage: string): void
    setUrgency(urgency: ReleaseUrgency): void
    setUri(uri: string): void
    setVendor(vendor: string): void
    setVersion(version: string): void
    toString(): string
    toVariant(): GLib.Variant
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
    constructor (config?: Release_ConstructProps)
    _init (config?: Release_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Release
    static arrayFromVariant(value: GLib.Variant): Release[]
    static flagFromString(releaseFlag: string): ReleaseFlags
    static flagToString(releaseFlag: ReleaseFlags): string
    static fromVariant(value: GLib.Variant): Release
    static urgencyFromString(releaseUrgency: string): ReleaseUrgency
    static urgencyToString(releaseUrgency: ReleaseUrgency): string
    static $gtype: GObject.Type
}
interface Remote_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Fwupd-2.0.Fwupd.Remote */
    approvalRequired?: boolean
    automaticReports?: boolean
    automaticSecurityReports?: boolean
    enabled?: boolean
    id?: string
}
class Remote {
    /* Properties of Fwupd-2.0.Fwupd.Remote */
    approvalRequired: boolean
    automaticReports: boolean
    automaticSecurityReports: boolean
    enabled: boolean
    id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Remote */
    buildFirmwareUri(url: string): string
    getAge(): number
    getAgreement(): string
    getApprovalRequired(): boolean
    getAutomaticReports(): boolean
    getAutomaticSecurityReports(): boolean
    getChecksum(): string
    getEnabled(): boolean
    getFilenameCache(): string
    getFilenameCacheSig(): string
    getFilenameSource(): string
    getFirmwareBaseUri(): string
    getId(): string
    getKeyringKind(): KeyringKind
    getKind(): RemoteKind
    getMetadataUri(): string
    getMetadataUriSig(): string
    getOrderAfter(): string[]
    getOrderBefore(): string[]
    getPassword(): string
    getPriority(): number
    getRemotesDir(): string
    getReportUri(): string
    getSecurityReportUri(): string
    getTitle(): string
    getUsername(): string
    loadFromFilename(filename: string, cancellable?: Gio.Cancellable | null): boolean
    loadSignature(filename: string): boolean
    loadSignatureBytes(bytes: any): boolean
    setAgreement(agreement: string): void
    setKeyringKind(keyringKind: KeyringKind): void
    setMtime(mtime: number): void
    setPriority(priority: number): void
    setRemotesDir(directory: string): void
    toVariant(): GLib.Variant
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
    connect(sigName: "notify::approval-required", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::approval-required", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::approval-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::approval-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::approval-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-reports", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-reports", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-reports", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-reports", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-reports", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-security-reports", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-security-reports", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-security-reports", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-security-reports", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-security-reports", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Remote_ConstructProps)
    _init (config?: Remote_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Remote
    static arrayFromVariant(value: GLib.Variant): Remote[]
    static fromVariant(value: GLib.Variant): Remote
    static kindFromString(kind: string): RemoteKind
    static kindToString(kind: RemoteKind): string
    static $gtype: GObject.Type
}
interface SecurityAttr_ConstructProps extends GObject.Object_ConstructProps {
}
class SecurityAttr {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.SecurityAttr */
    addFlag(flag: SecurityAttrFlags): void
    addMetadata(key: string, value?: string | null): void
    addObsolete(appstreamId: string): void
    getAppstreamId(): string
    getFlags(): SecurityAttrFlags
    getLevel(): SecurityAttrLevel
    getMetadata(key: string): string | null
    getName(): string
    getObsoletes(): string[]
    getPlugin(): string
    getResult(): SecurityAttrResult
    getUrl(): string
    hasFlag(flag: SecurityAttrFlags): boolean
    hasObsolete(appstreamId: string): boolean
    setAppstreamId(appstreamId: string): void
    setFlags(flags: SecurityAttrFlags): void
    setLevel(level: SecurityAttrLevel): void
    setName(name: string): void
    setPlugin(plugin: string): void
    setResult(result: SecurityAttrResult): void
    setUrl(url: string): void
    toString(): string
    toVariant(): GLib.Variant
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
    constructor (config?: SecurityAttr_ConstructProps)
    _init (config?: SecurityAttr_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(appstreamId?: string | null): SecurityAttr
    static arrayFromVariant(value: GLib.Variant): SecurityAttr[]
    static flagToString(flag: SecurityAttrFlags): string
    static flagToSuffix(flag: SecurityAttrFlags): string
    static fromVariant(value: GLib.Variant): SecurityAttr
    static resultToString(result: SecurityAttrResult): string
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of Fwupd-2.0.Fwupd.ClientClass */
    readonly parentClass: GObject.ObjectClass
    readonly changed: (client: Client) => void
    readonly statusChanged: (client: Client, status: Status) => void
    readonly deviceAdded: (client: Client, result: Device) => void
    readonly deviceRemoved: (client: Client, result: Device) => void
    readonly deviceChanged: (client: Client, result: Device) => void
    static name: string
}
abstract class DeviceClass {
    /* Fields of Fwupd-2.0.Fwupd.DeviceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class PluginClass {
    /* Fields of Fwupd-2.0.Fwupd.PluginClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ReleaseClass {
    /* Fields of Fwupd-2.0.Fwupd.ReleaseClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class RemoteClass {
    /* Fields of Fwupd-2.0.Fwupd.RemoteClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SecurityAttrClass {
    /* Fields of Fwupd-2.0.Fwupd.SecurityAttrClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
    type DeviceFlags = number
    type PluginFlags = number
    type ReleaseFlags = number
}
export default Fwupd;