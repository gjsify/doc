/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Fwupd-2.0
 */

import type * as Gjs from './Gjs';
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
function build_history_report_json(devices: Device[]): string
function build_machine_id(salt: string): string
function build_user_agent(package_name: string, package_version: string): string
function checksum_format_for_display(checksum: string): string
function checksum_get_best(checksums: string[]): string
function checksum_get_by_kind(checksums: string[], kind: GLib.ChecksumType): string
function checksum_guess_kind(checksum: string): GLib.ChecksumType
function error_from_string(error: string): Error
function error_quark(): GLib.Quark
function error_to_string(error: Error): string
function feature_flag_from_string(feature_flag: string): FeatureFlags
function feature_flag_to_string(feature_flag: FeatureFlags): string
function get_os_release(): GLib.HashTable
function guid_from_string(guidstr: string | null, guid: number, flags: GuidFlags): boolean
function guid_hash_data(data: number, datasz: number, flags: GuidFlags): string
function guid_hash_string(str: string): string
function guid_is_valid(guid: string): boolean
function guid_to_string(guid: number, flags: GuidFlags): string
function keyring_kind_from_string(keyring_kind: string): KeyringKind
function keyring_kind_to_string(keyring_kind: KeyringKind): string
function status_from_string(status: string): Status
function status_to_string(status: Status): string
function trust_flag_from_string(trust_flag: string): TrustFlags
function trust_flag_to_string(trust_flag: TrustFlags): string
function update_state_from_string(update_state: string): UpdateState
function update_state_to_string(update_state: UpdateState): string
function version_format_from_string(str: string): VersionFormat
function version_format_to_string(kind: VersionFormat): string
interface Client_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Fwupd-2.0.Fwupd.Client */
    percentage?: number
    status?: number
}
class Client {
    /* Properties of Fwupd-2.0.Fwupd.Client */
    readonly daemon_version: string
    readonly host_machine_id: string
    readonly host_product: string
    readonly host_security_id: string
    readonly interactive: boolean
    percentage: number
    readonly soup_session: GObject.Object
    status: number
    readonly tainted: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Client */
    activate(cancellable: Gio.Cancellable | null, device_id: string): boolean
    activate_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    activate_finish(res: Gio.AsyncResult): boolean
    clear_results(device_id: string, cancellable?: Gio.Cancellable | null): boolean
    clear_results_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    clear_results_finish(res: Gio.AsyncResult): boolean
    connect(cancellable?: Gio.Cancellable | null): boolean
    connect_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(res: Gio.AsyncResult): boolean
    download_bytes(url: string, flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null): GLib.Bytes
    download_bytes_async(url: string, flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    download_bytes_finish(res: Gio.AsyncResult): GLib.Bytes
    download_file(url: string, file: Gio.File, flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null): boolean
    ensure_networking(): boolean
    get_approved_firmware(cancellable?: Gio.Cancellable | null): string[]
    get_approved_firmware_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_approved_firmware_finish(res: Gio.AsyncResult): string[]
    get_blocked_firmware(cancellable?: Gio.Cancellable | null): string[]
    get_blocked_firmware_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_blocked_firmware_finish(res: Gio.AsyncResult): string[]
    get_daemon_interactive(): boolean
    get_daemon_version(): string
    get_details(filename: string, cancellable?: Gio.Cancellable | null): Device[]
    get_details_bytes(bytes: GLib.Bytes, cancellable?: Gio.Cancellable | null): Device[]
    get_details_bytes_async(bytes: GLib.Bytes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_details_bytes_finish(res: Gio.AsyncResult): Device[]
    get_device_by_id(device_id: string, cancellable?: Gio.Cancellable | null): Device
    get_device_by_id_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_device_by_id_finish(res: Gio.AsyncResult): Device
    get_devices(cancellable?: Gio.Cancellable | null): Device[]
    get_devices_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_devices_by_guid(guid: string, cancellable?: Gio.Cancellable | null): Device[]
    get_devices_by_guid_async(guid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_devices_by_guid_finish(res: Gio.AsyncResult): Release[]
    get_devices_finish(res: Gio.AsyncResult): Device[]
    get_downgrades(device_id: string, cancellable?: Gio.Cancellable | null): Release[]
    get_downgrades_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_downgrades_finish(res: Gio.AsyncResult): Release[]
    get_history(cancellable?: Gio.Cancellable | null): Device[]
    get_history_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_history_finish(res: Gio.AsyncResult): Device[]
    get_host_machine_id(): string
    get_host_product(): string
    get_host_security_attrs(cancellable?: Gio.Cancellable | null): SecurityAttr[]
    get_host_security_attrs_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_host_security_attrs_finish(res: Gio.AsyncResult): SecurityAttr[]
    get_host_security_id(): string
    get_main_context(): GLib.MainContext
    get_percentage(): number
    get_plugins(cancellable?: Gio.Cancellable | null): Plugin[]
    get_plugins_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_plugins_finish(res: Gio.AsyncResult): Device[]
    get_releases(device_id: string, cancellable?: Gio.Cancellable | null): Release[]
    get_releases_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_releases_finish(res: Gio.AsyncResult): Release[]
    get_remote_by_id(remote_id: string, cancellable?: Gio.Cancellable | null): Remote
    get_remote_by_id_async(remote_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_remote_by_id_finish(res: Gio.AsyncResult): Remote
    get_remotes(cancellable?: Gio.Cancellable | null): Remote[]
    get_remotes_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_remotes_finish(res: Gio.AsyncResult): Remote[]
    get_report_metadata(cancellable?: Gio.Cancellable | null): GLib.HashTable
    get_report_metadata_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_report_metadata_finish(res: Gio.AsyncResult): GLib.HashTable
    get_results(device_id: string, cancellable?: Gio.Cancellable | null): Device
    get_results_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_results_finish(res: Gio.AsyncResult): Device
    get_status(): Status
    get_tainted(): boolean
    get_upgrades(device_id: string, cancellable?: Gio.Cancellable | null): Release[]
    get_upgrades_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_upgrades_finish(res: Gio.AsyncResult): Release[]
    get_user_agent(): string
    install(device_id: string, filename: string, install_flags: InstallFlags, cancellable?: Gio.Cancellable | null): boolean
    install_async(device_id: string, filename: string, install_flags: InstallFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    install_bytes(device_id: string, bytes: GLib.Bytes, install_flags: InstallFlags, cancellable?: Gio.Cancellable | null): boolean
    install_bytes_async(device_id: string, bytes: GLib.Bytes, install_flags: InstallFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    install_bytes_finish(res: Gio.AsyncResult): boolean
    install_finish(res: Gio.AsyncResult): boolean
    install_release(device: Device, release: Release, install_flags: InstallFlags, cancellable?: Gio.Cancellable | null): boolean
    install_release2(device: Device, release: Release, install_flags: InstallFlags, download_flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null): boolean
    install_release2_async(device: Device, release: Release, install_flags: InstallFlags, download_flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    install_release_async(device: Device, release: Release, install_flags: InstallFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    install_release_finish(res: Gio.AsyncResult): boolean
    modify_config(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    modify_config_async(key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_config_finish(res: Gio.AsyncResult): boolean
    modify_device(device_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    modify_device_async(device_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_device_finish(res: Gio.AsyncResult): boolean
    modify_remote(remote_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    modify_remote_async(remote_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_remote_finish(res: Gio.AsyncResult): boolean
    refresh_remote(remote: Remote, cancellable?: Gio.Cancellable | null): boolean
    refresh_remote_async(remote: Remote, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_remote_finish(res: Gio.AsyncResult): boolean
    self_sign(value: string, flags: SelfSignFlags, cancellable?: Gio.Cancellable | null): string
    self_sign_async(value: string, flags: SelfSignFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    self_sign_finish(res: Gio.AsyncResult): string
    set_approved_firmware(checksums: string, cancellable?: Gio.Cancellable | null): boolean
    set_approved_firmware_async(checksums: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_approved_firmware_finish(res: Gio.AsyncResult): boolean
    set_blocked_firmware(checksums: string, cancellable?: Gio.Cancellable | null): boolean
    set_blocked_firmware_async(checksums: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_blocked_firmware_finish(res: Gio.AsyncResult): boolean
    set_feature_flags(feature_flags: FeatureFlags, cancellable?: Gio.Cancellable | null): boolean
    set_feature_flags_async(feature_flags: FeatureFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_feature_flags_finish(res: Gio.AsyncResult): boolean
    set_main_context(main_ctx?: GLib.MainContext | null): void
    set_user_agent(user_agent: string): void
    set_user_agent_for_package(package_name: string, package_version: string): void
    unlock(device_id: string, cancellable?: Gio.Cancellable | null): boolean
    unlock_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unlock_finish(res: Gio.AsyncResult): boolean
    update_metadata(remote_id: string, metadata_fn: string, signature_fn: string, cancellable?: Gio.Cancellable | null): boolean
    update_metadata_bytes(remote_id: string, metadata: GLib.Bytes, signature: GLib.Bytes, cancellable?: Gio.Cancellable | null): boolean
    update_metadata_bytes_async(remote_id: string, metadata: GLib.Bytes, signature: GLib.Bytes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_metadata_bytes_finish(res: Gio.AsyncResult): boolean
    upload_bytes(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable?: Gio.Cancellable | null): GLib.Bytes
    upload_bytes_async(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    upload_bytes_finish(res: Gio.AsyncResult): GLib.Bytes
    verify(device_id: string, cancellable?: Gio.Cancellable | null): boolean
    verify_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verify_finish(res: Gio.AsyncResult): boolean
    verify_update(device_id: string, cancellable?: Gio.Cancellable | null): boolean
    verify_update_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verify_update_finish(res: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Fwupd-2.0.Fwupd.Client */
    vfunc_changed(): void
    vfunc_device_added(result: Device): void
    vfunc_device_changed(result: Device): void
    vfunc_device_removed(result: Device): void
    vfunc_status_changed(status: Status): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Fwupd-2.0.Fwupd.Client */
    connect(sigName: "changed", callback: (($obj: Client) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Client) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "device-added", callback: (($obj: Client, result: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Client, result: Device) => void)): number
    emit(sigName: "device-added", result: Device): void
    connect(sigName: "device-changed", callback: (($obj: Client, result: Device) => void)): number
    connect_after(sigName: "device-changed", callback: (($obj: Client, result: Device) => void)): number
    emit(sigName: "device-changed", result: Device): void
    connect(sigName: "device-removed", callback: (($obj: Client, result: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Client, result: Device) => void)): number
    emit(sigName: "device-removed", result: Device): void
    connect(sigName: "status-changed", callback: (($obj: Client, object: number) => void)): number
    connect_after(sigName: "status-changed", callback: (($obj: Client, object: number) => void)): number
    emit(sigName: "status-changed", object: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host-machine-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-machine-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host-product", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-product", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host-security-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-security-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interactive", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::percentage", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::soup-session", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::soup-session", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tainted", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tainted", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    update_state?: number
    version_format?: number
}
class Device {
    /* Properties of Fwupd-2.0.Fwupd.Device */
    flags: number
    parent: Device
    protocol: string
    status: number
    update_state: number
    version_format: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Device */
    add_checksum(checksum: string): void
    add_child(child: Device): void
    add_flag(flag: DeviceFlags): void
    add_guid(guid: string): void
    add_icon(icon: string): void
    add_instance_id(instance_id: string): void
    add_release(release: Release): void
    add_vendor_id(vendor_id: string): void
    compare(device2: Device): number
    get_branch(): string
    get_checksums(): string[]
    get_children(): Device[]
    get_created(): number
    get_description(): string
    get_flags(): number
    get_flashes_left(): number
    get_guid_default(): string
    get_guids(): string[]
    get_icons(): string[]
    get_id(): string
    get_install_duration(): number
    get_instance_ids(): string[]
    get_modified(): number
    get_name(): string
    get_parent(): Device
    get_parent_id(): string
    get_plugin(): string
    get_protocol(): string
    get_release_default(): Release
    get_releases(): Release[]
    get_serial(): string
    get_status(): Status
    get_summary(): string
    get_update_error(): string
    get_update_image(): string
    get_update_message(): string
    get_update_state(): UpdateState
    get_vendor(): string
    get_vendor_id(): string
    get_vendor_ids(): string[]
    get_version(): string
    get_version_bootloader(): string
    get_version_bootloader_raw(): number
    get_version_format(): VersionFormat
    get_version_lowest(): string
    get_version_lowest_raw(): number
    get_version_raw(): number
    has_flag(flag: DeviceFlags): boolean
    has_guid(guid: string): boolean
    has_instance_id(instance_id: string): boolean
    has_vendor_id(vendor_id: string): boolean
    incorporate(donor: Device): void
    remove_flag(flag: DeviceFlags): void
    set_branch(branch: string): void
    set_created(created: number): void
    set_description(description: string): void
    set_flags(flags: number): void
    set_flashes_left(flashes_left: number): void
    set_id(id: string): void
    set_install_duration(duration: number): void
    set_modified(modified: number): void
    set_name(name: string): void
    set_parent(parent: Device): void
    set_parent_id(parent_id: string): void
    set_plugin(plugin: string): void
    set_protocol(protocol: string): void
    set_serial(serial: string): void
    set_status(status: Status): void
    set_summary(summary: string): void
    set_update_error(update_error: string): void
    set_update_image(update_image: string): void
    set_update_message(update_message: string): void
    set_update_state(update_state: UpdateState): void
    set_vendor(vendor: string): void
    set_vendor_id(vendor_id: string): void
    set_version(version: string): void
    set_version_bootloader(version_bootloader: string): void
    set_version_bootloader_raw(version_bootloader_raw: number): void
    set_version_format(version_format: VersionFormat): void
    set_version_lowest(version_lowest: string): void
    set_version_lowest_raw(version_lowest_raw: number): void
    set_version_raw(version_raw: number): void
    to_string(): string
    to_variant(): GLib.Variant
    to_variant_full(flags: DeviceFlags): GLib.Variant
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version-format", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version-format", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Device
    static array_ensure_parents(devices: Device[]): void
    static array_from_variant(value: GLib.Variant): Device[]
    static flag_from_string(device_flag: string): DeviceFlags
    static flag_to_string(device_flag: DeviceFlags): string
    static from_variant(value: GLib.Variant): Device
    static id_is_valid(device_id: string): boolean
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Plugin */
    add_flag(flag: PluginFlags): void
    get_flags(): number
    get_name(): string
    has_flag(flag: PluginFlags): boolean
    remove_flag(flag: PluginFlags): void
    set_flags(flags: number): void
    set_name(name: string): void
    to_string(): string
    to_variant(): GLib.Variant
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Plugin
    static array_from_variant(value: GLib.Variant): Plugin[]
    static flag_from_string(plugin_flag: string): PluginFlags
    static flag_to_string(plugin_flag: PluginFlags): string
    static from_variant(value: GLib.Variant): Plugin
    static $gtype: GObject.Type
}
interface Release_ConstructProps extends GObject.Object_ConstructProps {
}
class Release {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Release */
    add_category(category: string): void
    add_checksum(checksum: string): void
    add_flag(flag: ReleaseFlags): void
    add_issue(issue: string): void
    add_location(location: string): void
    add_metadata(hash: GLib.HashTable): void
    add_metadata_item(key: string, value: string): void
    get_appstream_id(): string
    get_branch(): string
    get_categories(): string[]
    get_checksums(): string[]
    get_created(): number
    get_description(): string
    get_detach_caption(): string
    get_detach_image(): string
    get_details_url(): string
    get_filename(): string
    get_flags(): ReleaseFlags
    get_homepage(): string
    get_install_duration(): number
    get_issues(): string[]
    get_license(): string
    get_locations(): string[]
    get_metadata(): GLib.HashTable
    get_metadata_item(key: string): string
    get_name(): string
    get_name_variant_suffix(): string
    get_protocol(): string
    get_remote_id(): string
    get_size(): number
    get_source_url(): string
    get_summary(): string
    get_trust_flags(): TrustFlags
    get_update_image(): string
    get_update_message(): string
    get_urgency(): ReleaseUrgency
    get_uri(): string
    get_vendor(): string
    get_version(): string
    has_category(category: string): boolean
    has_checksum(checksum: string): boolean
    has_flag(flag: ReleaseFlags): boolean
    remove_flag(flag: ReleaseFlags): void
    set_appstream_id(appstream_id: string): void
    set_branch(branch: string): void
    set_created(created: number): void
    set_description(description: string): void
    set_detach_caption(detach_caption: string): void
    set_detach_image(detach_image: string): void
    set_details_url(details_url: string): void
    set_filename(filename: string): void
    set_flags(flags: ReleaseFlags): void
    set_homepage(homepage: string): void
    set_install_duration(duration: number): void
    set_license(license: string): void
    set_name(name: string): void
    set_name_variant_suffix(name_variant_suffix: string): void
    set_protocol(protocol: string): void
    set_remote_id(remote_id: string): void
    set_size(size: number): void
    set_source_url(source_url: string): void
    set_summary(summary: string): void
    set_trust_flags(trust_flags: TrustFlags): void
    set_update_image(update_image: string): void
    set_update_message(update_message: string): void
    set_urgency(urgency: ReleaseUrgency): void
    set_uri(uri: string): void
    set_vendor(vendor: string): void
    set_version(version: string): void
    to_string(): string
    to_variant(): GLib.Variant
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Release, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Release, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Release_ConstructProps)
    _init (config?: Release_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Release
    static array_from_variant(value: GLib.Variant): Release[]
    static flag_from_string(release_flag: string): ReleaseFlags
    static flag_to_string(release_flag: ReleaseFlags): string
    static from_variant(value: GLib.Variant): Release
    static urgency_from_string(release_urgency: string): ReleaseUrgency
    static urgency_to_string(release_urgency: ReleaseUrgency): string
    static $gtype: GObject.Type
}
interface Remote_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Fwupd-2.0.Fwupd.Remote */
    approval_required?: boolean
    automatic_reports?: boolean
    automatic_security_reports?: boolean
    enabled?: boolean
    id?: string
}
class Remote {
    /* Properties of Fwupd-2.0.Fwupd.Remote */
    approval_required: boolean
    automatic_reports: boolean
    automatic_security_reports: boolean
    enabled: boolean
    id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Remote */
    build_firmware_uri(url: string): string
    get_age(): number
    get_agreement(): string
    get_approval_required(): boolean
    get_automatic_reports(): boolean
    get_automatic_security_reports(): boolean
    get_checksum(): string
    get_enabled(): boolean
    get_filename_cache(): string
    get_filename_cache_sig(): string
    get_filename_source(): string
    get_firmware_base_uri(): string
    get_id(): string
    get_keyring_kind(): KeyringKind
    get_kind(): RemoteKind
    get_metadata_uri(): string
    get_metadata_uri_sig(): string
    get_order_after(): string[]
    get_order_before(): string[]
    get_password(): string
    get_priority(): number
    get_remotes_dir(): string
    get_report_uri(): string
    get_security_report_uri(): string
    get_title(): string
    get_username(): string
    load_from_filename(filename: string, cancellable?: Gio.Cancellable | null): boolean
    load_signature(filename: string): boolean
    load_signature_bytes(bytes: GLib.Bytes): boolean
    set_agreement(agreement: string): void
    set_keyring_kind(keyring_kind: KeyringKind): void
    set_mtime(mtime: number): void
    set_priority(priority: number): void
    set_remotes_dir(directory: string): void
    to_variant(): GLib.Variant
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::approval-required", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::approval-required", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::automatic-reports", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-reports", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::automatic-security-reports", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-security-reports", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Remote_ConstructProps)
    _init (config?: Remote_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Remote
    static array_from_variant(value: GLib.Variant): Remote[]
    static from_variant(value: GLib.Variant): Remote
    static kind_from_string(kind: string): RemoteKind
    static kind_to_string(kind: RemoteKind): string
    static $gtype: GObject.Type
}
interface SecurityAttr_ConstructProps extends GObject.Object_ConstructProps {
}
class SecurityAttr {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.SecurityAttr */
    add_flag(flag: SecurityAttrFlags): void
    add_metadata(key: string, value?: string | null): void
    add_obsolete(appstream_id: string): void
    get_appstream_id(): string
    get_flags(): SecurityAttrFlags
    get_level(): SecurityAttrLevel
    get_metadata(key: string): string | null
    get_name(): string
    get_obsoletes(): string[]
    get_plugin(): string
    get_result(): SecurityAttrResult
    get_url(): string
    has_flag(flag: SecurityAttrFlags): boolean
    has_obsolete(appstream_id: string): boolean
    set_appstream_id(appstream_id: string): void
    set_flags(flags: SecurityAttrFlags): void
    set_level(level: SecurityAttrLevel): void
    set_name(name: string): void
    set_plugin(plugin: string): void
    set_result(result: SecurityAttrResult): void
    set_url(url: string): void
    to_string(): string
    to_variant(): GLib.Variant
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SecurityAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SecurityAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SecurityAttr_ConstructProps)
    _init (config?: SecurityAttr_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(appstream_id?: string | null): SecurityAttr
    static array_from_variant(value: GLib.Variant): SecurityAttr[]
    static flag_to_string(flag: SecurityAttrFlags): string
    static flag_to_suffix(flag: SecurityAttrFlags): string
    static from_variant(value: GLib.Variant): SecurityAttr
    static result_to_string(result: SecurityAttrResult): string
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of Fwupd-2.0.Fwupd.ClientClass */
    readonly parent_class: GObject.ObjectClass
    readonly changed: (client: Client) => void
    readonly status_changed: (client: Client, status: Status) => void
    readonly device_added: (client: Client, result: Device) => void
    readonly device_removed: (client: Client, result: Device) => void
    readonly device_changed: (client: Client, result: Device) => void
    static name: string
}
abstract class DeviceClass {
    /* Fields of Fwupd-2.0.Fwupd.DeviceClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class PluginClass {
    /* Fields of Fwupd-2.0.Fwupd.PluginClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ReleaseClass {
    /* Fields of Fwupd-2.0.Fwupd.ReleaseClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class RemoteClass {
    /* Fields of Fwupd-2.0.Fwupd.RemoteClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class SecurityAttrClass {
    /* Fields of Fwupd-2.0.Fwupd.SecurityAttrClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
    type DeviceFlags = number
    type PluginFlags = number
    type ReleaseFlags = number
}
export default Fwupd;