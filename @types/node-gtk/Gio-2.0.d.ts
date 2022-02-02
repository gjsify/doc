/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gio-2.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gio {

enum BusType {
    STARTER,
    NONE,
    SYSTEM,
    SESSION,
}
enum ConverterResult {
    ERROR,
    CONVERTED,
    FINISHED,
    FLUSHED,
}
enum CredentialsType {
    INVALID,
    LINUX_UCRED,
    FREEBSD_CMSGCRED,
    OPENBSD_SOCKPEERCRED,
    SOLARIS_UCRED,
    NETBSD_UNPCBID,
    APPLE_XUCRED,
}
enum DBusError {
    FAILED,
    NO_MEMORY,
    SERVICE_UNKNOWN,
    NAME_HAS_NO_OWNER,
    NO_REPLY,
    IO_ERROR,
    BAD_ADDRESS,
    NOT_SUPPORTED,
    LIMITS_EXCEEDED,
    ACCESS_DENIED,
    AUTH_FAILED,
    NO_SERVER,
    TIMEOUT,
    NO_NETWORK,
    ADDRESS_IN_USE,
    DISCONNECTED,
    INVALID_ARGS,
    FILE_NOT_FOUND,
    FILE_EXISTS,
    UNKNOWN_METHOD,
    TIMED_OUT,
    MATCH_RULE_NOT_FOUND,
    MATCH_RULE_INVALID,
    SPAWN_EXEC_FAILED,
    SPAWN_FORK_FAILED,
    SPAWN_CHILD_EXITED,
    SPAWN_CHILD_SIGNALED,
    SPAWN_FAILED,
    SPAWN_SETUP_FAILED,
    SPAWN_CONFIG_INVALID,
    SPAWN_SERVICE_INVALID,
    SPAWN_SERVICE_NOT_FOUND,
    SPAWN_PERMISSIONS_INVALID,
    SPAWN_FILE_INVALID,
    SPAWN_NO_MEMORY,
    UNIX_PROCESS_ID_UNKNOWN,
    INVALID_SIGNATURE,
    INVALID_FILE_CONTENT,
    SELINUX_SECURITY_CONTEXT_UNKNOWN,
    ADT_AUDIT_DATA_UNKNOWN,
    OBJECT_PATH_IN_USE,
    UNKNOWN_OBJECT,
    UNKNOWN_INTERFACE,
    UNKNOWN_PROPERTY,
    PROPERTY_READ_ONLY,
}
enum DBusMessageByteOrder {
    BIG_ENDIAN,
    LITTLE_ENDIAN,
}
enum DBusMessageHeaderField {
    INVALID,
    PATH,
    INTERFACE,
    MEMBER,
    ERROR_NAME,
    REPLY_SERIAL,
    DESTINATION,
    SENDER,
    SIGNATURE,
    NUM_UNIX_FDS,
}
enum DBusMessageType {
    INVALID,
    METHOD_CALL,
    METHOD_RETURN,
    ERROR,
    SIGNAL,
}
enum DataStreamByteOrder {
    BIG_ENDIAN,
    LITTLE_ENDIAN,
    HOST_ENDIAN,
}
enum DataStreamNewlineType {
    LF,
    CR,
    CR_LF,
    ANY,
}
enum DriveStartStopType {
    UNKNOWN,
    SHUTDOWN,
    NETWORK,
    MULTIDISK,
    PASSWORD,
}
enum EmblemOrigin {
    UNKNOWN,
    DEVICE,
    LIVEMETADATA,
    TAG,
}
enum FileAttributeStatus {
    UNSET,
    SET,
    ERROR_SETTING,
}
enum FileAttributeType {
    INVALID,
    STRING,
    BYTE_STRING,
    BOOLEAN,
    UINT32,
    INT32,
    UINT64,
    INT64,
    OBJECT,
    STRINGV,
}
enum FileMonitorEvent {
    CHANGED,
    CHANGES_DONE_HINT,
    DELETED,
    CREATED,
    ATTRIBUTE_CHANGED,
    PRE_UNMOUNT,
    UNMOUNTED,
    MOVED,
    RENAMED,
    MOVED_IN,
    MOVED_OUT,
}
enum FileType {
    UNKNOWN,
    REGULAR,
    DIRECTORY,
    SYMBOLIC_LINK,
    SPECIAL,
    SHORTCUT,
    MOUNTABLE,
}
enum FilesystemPreviewType {
    IF_ALWAYS,
    IF_LOCAL,
    NEVER,
}
enum IOErrorEnum {
    FAILED,
    NOT_FOUND,
    EXISTS,
    IS_DIRECTORY,
    NOT_DIRECTORY,
    NOT_EMPTY,
    NOT_REGULAR_FILE,
    NOT_SYMBOLIC_LINK,
    NOT_MOUNTABLE_FILE,
    FILENAME_TOO_LONG,
    INVALID_FILENAME,
    TOO_MANY_LINKS,
    NO_SPACE,
    INVALID_ARGUMENT,
    PERMISSION_DENIED,
    NOT_SUPPORTED,
    NOT_MOUNTED,
    ALREADY_MOUNTED,
    CLOSED,
    CANCELLED,
    PENDING,
    READ_ONLY,
    CANT_CREATE_BACKUP,
    WRONG_ETAG,
    TIMED_OUT,
    WOULD_RECURSE,
    BUSY,
    WOULD_BLOCK,
    HOST_NOT_FOUND,
    WOULD_MERGE,
    FAILED_HANDLED,
    TOO_MANY_OPEN_FILES,
    NOT_INITIALIZED,
    ADDRESS_IN_USE,
    PARTIAL_INPUT,
    INVALID_DATA,
    DBUS_ERROR,
    HOST_UNREACHABLE,
    NETWORK_UNREACHABLE,
    CONNECTION_REFUSED,
    PROXY_FAILED,
    PROXY_AUTH_FAILED,
    PROXY_NEED_AUTH,
    PROXY_NOT_ALLOWED,
    BROKEN_PIPE,
    CONNECTION_CLOSED,
    NOT_CONNECTED,
    MESSAGE_TOO_LARGE,
}
enum IOModuleScopeFlags {
    NONE,
    BLOCK_DUPLICATES,
}
enum MemoryMonitorWarningLevel {
    LOW,
    MEDIUM,
    CRITICAL,
}
enum MountOperationResult {
    HANDLED,
    ABORTED,
    UNHANDLED,
}
enum NetworkConnectivity {
    LOCAL,
    LIMITED,
    PORTAL,
    FULL,
}
enum NotificationPriority {
    NORMAL,
    LOW,
    HIGH,
    URGENT,
}
enum PasswordSave {
    NEVER,
    FOR_SESSION,
    PERMANENTLY,
}
enum PollableReturn {
    FAILED,
    OK,
    WOULD_BLOCK,
}
enum ResolverError {
    NOT_FOUND,
    TEMPORARY_FAILURE,
    INTERNAL,
}
enum ResolverRecordType {
    SRV,
    MX,
    TXT,
    SOA,
    NS,
}
enum ResourceError {
    NOT_FOUND,
    INTERNAL,
}
enum SocketClientEvent {
    RESOLVING,
    RESOLVED,
    CONNECTING,
    CONNECTED,
    PROXY_NEGOTIATING,
    PROXY_NEGOTIATED,
    TLS_HANDSHAKING,
    TLS_HANDSHAKED,
    COMPLETE,
}
enum SocketFamily {
    INVALID,
    UNIX,
    IPV4,
    IPV6,
}
enum SocketListenerEvent {
    BINDING,
    BOUND,
    LISTENING,
    LISTENED,
}
enum SocketProtocol {
    UNKNOWN,
    DEFAULT,
    TCP,
    UDP,
    SCTP,
}
enum SocketType {
    INVALID,
    STREAM,
    DATAGRAM,
    SEQPACKET,
}
enum TlsAuthenticationMode {
    NONE,
    REQUESTED,
    REQUIRED,
}
enum TlsCertificateRequestFlags {
    NONE,
}
enum TlsChannelBindingError {
    NOT_IMPLEMENTED,
    INVALID_STATE,
    NOT_AVAILABLE,
    NOT_SUPPORTED,
    GENERAL_ERROR,
}
enum TlsChannelBindingType {
    UNIQUE,
    SERVER_END_POINT,
}
enum TlsDatabaseLookupFlags {
    NONE,
    KEYPAIR,
}
enum TlsError {
    UNAVAILABLE,
    MISC,
    BAD_CERTIFICATE,
    NOT_TLS,
    HANDSHAKE,
    CERTIFICATE_REQUIRED,
    EOF,
    INAPPROPRIATE_FALLBACK,
    BAD_CERTIFICATE_PASSWORD,
}
enum TlsInteractionResult {
    UNHANDLED,
    HANDLED,
    FAILED,
}
enum TlsProtocolVersion {
    UNKNOWN,
    SSL_3_0,
    TLS_1_0,
    TLS_1_1,
    TLS_1_2,
    TLS_1_3,
    DTLS_1_0,
    DTLS_1_2,
}
enum TlsRehandshakeMode {
    NEVER,
    SAFELY,
    UNSAFELY,
}
enum UnixSocketAddressType {
    INVALID,
    ANONYMOUS,
    PATH,
    ABSTRACT,
    ABSTRACT_PADDED,
}
enum ZlibCompressorFormat {
    ZLIB,
    GZIP,
    RAW,
}
enum AppInfoCreateFlags {
    NONE,
    NEEDS_TERMINAL,
    SUPPORTS_URIS,
    SUPPORTS_STARTUP_NOTIFICATION,
}
enum ApplicationFlags {
    FLAGS_NONE,
    IS_SERVICE,
    IS_LAUNCHER,
    HANDLES_OPEN,
    HANDLES_COMMAND_LINE,
    SEND_ENVIRONMENT,
    NON_UNIQUE,
    CAN_OVERRIDE_APP_ID,
    ALLOW_REPLACEMENT,
    REPLACE,
}
enum AskPasswordFlags {
    NEED_PASSWORD,
    NEED_USERNAME,
    NEED_DOMAIN,
    SAVING_SUPPORTED,
    ANONYMOUS_SUPPORTED,
    TCRYPT,
}
enum BusNameOwnerFlags {
    NONE,
    ALLOW_REPLACEMENT,
    REPLACE,
    DO_NOT_QUEUE,
}
enum BusNameWatcherFlags {
    NONE,
    AUTO_START,
}
enum ConverterFlags {
    NONE,
    INPUT_AT_END,
    FLUSH,
}
enum DBusCallFlags {
    NONE,
    NO_AUTO_START,
    ALLOW_INTERACTIVE_AUTHORIZATION,
}
enum DBusCapabilityFlags {
    NONE,
    UNIX_FD_PASSING,
}
enum DBusConnectionFlags {
    NONE,
    AUTHENTICATION_CLIENT,
    AUTHENTICATION_SERVER,
    AUTHENTICATION_ALLOW_ANONYMOUS,
    MESSAGE_BUS_CONNECTION,
    DELAY_MESSAGE_PROCESSING,
    AUTHENTICATION_REQUIRE_SAME_USER,
}
enum DBusInterfaceSkeletonFlags {
    NONE,
    HANDLE_METHOD_INVOCATIONS_IN_THREAD,
}
enum DBusMessageFlags {
    NONE,
    NO_REPLY_EXPECTED,
    NO_AUTO_START,
    ALLOW_INTERACTIVE_AUTHORIZATION,
}
enum DBusObjectManagerClientFlags {
    NONE,
    DO_NOT_AUTO_START,
}
enum DBusPropertyInfoFlags {
    NONE,
    READABLE,
    WRITABLE,
}
enum DBusProxyFlags {
    NONE,
    DO_NOT_LOAD_PROPERTIES,
    DO_NOT_CONNECT_SIGNALS,
    DO_NOT_AUTO_START,
    GET_INVALIDATED_PROPERTIES,
    DO_NOT_AUTO_START_AT_CONSTRUCTION,
    NO_MATCH_RULE,
}
enum DBusSendMessageFlags {
    NONE,
    PRESERVE_SERIAL,
}
enum DBusServerFlags {
    NONE,
    RUN_IN_THREAD,
    AUTHENTICATION_ALLOW_ANONYMOUS,
    AUTHENTICATION_REQUIRE_SAME_USER,
}
enum DBusSignalFlags {
    NONE,
    NO_MATCH_RULE,
    MATCH_ARG0_NAMESPACE,
    MATCH_ARG0_PATH,
}
enum DBusSubtreeFlags {
    NONE,
    DISPATCH_TO_UNENUMERATED_NODES,
}
enum DriveStartFlags {
    NONE,
}
enum FileAttributeInfoFlags {
    NONE,
    COPY_WITH_FILE,
    COPY_WHEN_MOVED,
}
enum FileCopyFlags {
    NONE,
    OVERWRITE,
    BACKUP,
    NOFOLLOW_SYMLINKS,
    ALL_METADATA,
    NO_FALLBACK_FOR_MOVE,
    TARGET_DEFAULT_PERMS,
}
enum FileCreateFlags {
    NONE,
    PRIVATE,
    REPLACE_DESTINATION,
}
enum FileMeasureFlags {
    NONE,
    REPORT_ANY_ERROR,
    APPARENT_SIZE,
    NO_XDEV,
}
enum FileMonitorFlags {
    NONE,
    WATCH_MOUNTS,
    SEND_MOVED,
    WATCH_HARD_LINKS,
    WATCH_MOVES,
}
enum FileQueryInfoFlags {
    NONE,
    NOFOLLOW_SYMLINKS,
}
enum IOStreamSpliceFlags {
    NONE,
    CLOSE_STREAM1,
    CLOSE_STREAM2,
    WAIT_FOR_BOTH,
}
enum MountMountFlags {
    NONE,
}
enum MountUnmountFlags {
    NONE,
    FORCE,
}
enum OutputStreamSpliceFlags {
    NONE,
    CLOSE_SOURCE,
    CLOSE_TARGET,
}
enum ResolverNameLookupFlags {
    DEFAULT,
    IPV4_ONLY,
    IPV6_ONLY,
}
enum ResourceFlags {
    NONE,
    COMPRESSED,
}
enum ResourceLookupFlags {
    NONE,
}
enum SettingsBindFlags {
    DEFAULT,
    GET,
    SET,
    NO_SENSITIVITY,
    GET_NO_CHANGES,
    INVERT_BOOLEAN,
}
enum SocketMsgFlags {
    NONE,
    OOB,
    PEEK,
    DONTROUTE,
}
enum SubprocessFlags {
    NONE,
    STDIN_PIPE,
    STDIN_INHERIT,
    STDOUT_PIPE,
    STDOUT_SILENCE,
    STDERR_PIPE,
    STDERR_SILENCE,
    STDERR_MERGE,
    INHERIT_FDS,
    SEARCH_PATH_FROM_ENVP,
}
enum TestDBusFlags {
    NONE,
}
enum TlsCertificateFlags {
    UNKNOWN_CA,
    BAD_IDENTITY,
    NOT_ACTIVATED,
    EXPIRED,
    REVOKED,
    INSECURE,
    GENERIC_ERROR,
    VALIDATE_ALL,
}
enum TlsDatabaseVerifyFlags {
    NONE,
}
enum TlsPasswordFlags {
    NONE,
    RETRY,
    MANY_TRIES,
    FINAL_TRY,
    PKCS11_USER,
    PKCS11_SECURITY_OFFICER,
    PKCS11_CONTEXT_SPECIFIC,
}
const DBUS_METHOD_INVOCATION_HANDLED: boolean
const DBUS_METHOD_INVOCATION_UNHANDLED: boolean
const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string
const DRIVE_IDENTIFIER_KIND_UNIX_DEVICE: string
const FILE_ATTRIBUTE_ACCESS_CAN_DELETE: string
const FILE_ATTRIBUTE_ACCESS_CAN_EXECUTE: string
const FILE_ATTRIBUTE_ACCESS_CAN_READ: string
const FILE_ATTRIBUTE_ACCESS_CAN_RENAME: string
const FILE_ATTRIBUTE_ACCESS_CAN_TRASH: string
const FILE_ATTRIBUTE_ACCESS_CAN_WRITE: string
const FILE_ATTRIBUTE_DOS_IS_ARCHIVE: string
const FILE_ATTRIBUTE_DOS_IS_MOUNTPOINT: string
const FILE_ATTRIBUTE_DOS_IS_SYSTEM: string
const FILE_ATTRIBUTE_DOS_REPARSE_POINT_TAG: string
const FILE_ATTRIBUTE_ETAG_VALUE: string
const FILE_ATTRIBUTE_FILESYSTEM_FREE: string
const FILE_ATTRIBUTE_FILESYSTEM_READONLY: string
const FILE_ATTRIBUTE_FILESYSTEM_REMOTE: string
const FILE_ATTRIBUTE_FILESYSTEM_SIZE: string
const FILE_ATTRIBUTE_FILESYSTEM_TYPE: string
const FILE_ATTRIBUTE_FILESYSTEM_USED: string
const FILE_ATTRIBUTE_FILESYSTEM_USE_PREVIEW: string
const FILE_ATTRIBUTE_GVFS_BACKEND: string
const FILE_ATTRIBUTE_ID_FILE: string
const FILE_ATTRIBUTE_ID_FILESYSTEM: string
const FILE_ATTRIBUTE_MOUNTABLE_CAN_EJECT: string
const FILE_ATTRIBUTE_MOUNTABLE_CAN_MOUNT: string
const FILE_ATTRIBUTE_MOUNTABLE_CAN_POLL: string
const FILE_ATTRIBUTE_MOUNTABLE_CAN_START: string
const FILE_ATTRIBUTE_MOUNTABLE_CAN_START_DEGRADED: string
const FILE_ATTRIBUTE_MOUNTABLE_CAN_STOP: string
const FILE_ATTRIBUTE_MOUNTABLE_CAN_UNMOUNT: string
const FILE_ATTRIBUTE_MOUNTABLE_HAL_UDI: string
const FILE_ATTRIBUTE_MOUNTABLE_IS_MEDIA_CHECK_AUTOMATIC: string
const FILE_ATTRIBUTE_MOUNTABLE_START_STOP_TYPE: string
const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE: string
const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE_FILE: string
const FILE_ATTRIBUTE_OWNER_GROUP: string
const FILE_ATTRIBUTE_OWNER_USER: string
const FILE_ATTRIBUTE_OWNER_USER_REAL: string
const FILE_ATTRIBUTE_PREVIEW_ICON: string
const FILE_ATTRIBUTE_RECENT_MODIFIED: string
const FILE_ATTRIBUTE_SELINUX_CONTEXT: string
const FILE_ATTRIBUTE_STANDARD_ALLOCATED_SIZE: string
const FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE: string
const FILE_ATTRIBUTE_STANDARD_COPY_NAME: string
const FILE_ATTRIBUTE_STANDARD_DESCRIPTION: string
const FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME: string
const FILE_ATTRIBUTE_STANDARD_EDIT_NAME: string
const FILE_ATTRIBUTE_STANDARD_FAST_CONTENT_TYPE: string
const FILE_ATTRIBUTE_STANDARD_ICON: string
const FILE_ATTRIBUTE_STANDARD_IS_BACKUP: string
const FILE_ATTRIBUTE_STANDARD_IS_HIDDEN: string
const FILE_ATTRIBUTE_STANDARD_IS_SYMLINK: string
const FILE_ATTRIBUTE_STANDARD_IS_VIRTUAL: string
const FILE_ATTRIBUTE_STANDARD_IS_VOLATILE: string
const FILE_ATTRIBUTE_STANDARD_NAME: string
const FILE_ATTRIBUTE_STANDARD_SIZE: string
const FILE_ATTRIBUTE_STANDARD_SORT_ORDER: string
const FILE_ATTRIBUTE_STANDARD_SYMBOLIC_ICON: string
const FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET: string
const FILE_ATTRIBUTE_STANDARD_TARGET_URI: string
const FILE_ATTRIBUTE_STANDARD_TYPE: string
const FILE_ATTRIBUTE_THUMBNAILING_FAILED: string
const FILE_ATTRIBUTE_THUMBNAIL_IS_VALID: string
const FILE_ATTRIBUTE_THUMBNAIL_PATH: string
const FILE_ATTRIBUTE_TIME_ACCESS: string
const FILE_ATTRIBUTE_TIME_ACCESS_USEC: string
const FILE_ATTRIBUTE_TIME_CHANGED: string
const FILE_ATTRIBUTE_TIME_CHANGED_USEC: string
const FILE_ATTRIBUTE_TIME_CREATED: string
const FILE_ATTRIBUTE_TIME_CREATED_USEC: string
const FILE_ATTRIBUTE_TIME_MODIFIED: string
const FILE_ATTRIBUTE_TIME_MODIFIED_USEC: string
const FILE_ATTRIBUTE_TRASH_DELETION_DATE: string
const FILE_ATTRIBUTE_TRASH_ITEM_COUNT: string
const FILE_ATTRIBUTE_TRASH_ORIG_PATH: string
const FILE_ATTRIBUTE_UNIX_BLOCKS: string
const FILE_ATTRIBUTE_UNIX_BLOCK_SIZE: string
const FILE_ATTRIBUTE_UNIX_DEVICE: string
const FILE_ATTRIBUTE_UNIX_GID: string
const FILE_ATTRIBUTE_UNIX_INODE: string
const FILE_ATTRIBUTE_UNIX_IS_MOUNTPOINT: string
const FILE_ATTRIBUTE_UNIX_MODE: string
const FILE_ATTRIBUTE_UNIX_NLINK: string
const FILE_ATTRIBUTE_UNIX_RDEV: string
const FILE_ATTRIBUTE_UNIX_UID: string
const MEMORY_MONITOR_EXTENSION_POINT_NAME: string
const MENU_ATTRIBUTE_ACTION: string
const MENU_ATTRIBUTE_ACTION_NAMESPACE: string
const MENU_ATTRIBUTE_ICON: string
const MENU_ATTRIBUTE_LABEL: string
const MENU_ATTRIBUTE_TARGET: string
const MENU_LINK_SECTION: string
const MENU_LINK_SUBMENU: string
const NATIVE_VOLUME_MONITOR_EXTENSION_POINT_NAME: string
const NETWORK_MONITOR_EXTENSION_POINT_NAME: string
const POWER_PROFILE_MONITOR_EXTENSION_POINT_NAME: string
const PROXY_EXTENSION_POINT_NAME: string
const PROXY_RESOLVER_EXTENSION_POINT_NAME: string
const SETTINGS_BACKEND_EXTENSION_POINT_NAME: string
const TLS_BACKEND_EXTENSION_POINT_NAME: string
const TLS_DATABASE_PURPOSE_AUTHENTICATE_CLIENT: string
const TLS_DATABASE_PURPOSE_AUTHENTICATE_SERVER: string
const VFS_EXTENSION_POINT_NAME: string
const VOLUME_IDENTIFIER_KIND_CLASS: string
const VOLUME_IDENTIFIER_KIND_HAL_UDI: string
const VOLUME_IDENTIFIER_KIND_LABEL: string
const VOLUME_IDENTIFIER_KIND_NFS_MOUNT: string
const VOLUME_IDENTIFIER_KIND_UNIX_DEVICE: string
const VOLUME_IDENTIFIER_KIND_UUID: string
const VOLUME_MONITOR_EXTENSION_POINT_NAME: string
function actionNameIsValid(actionName: string): boolean
function actionParseDetailedName(detailedName: string): [ /* returnType */ boolean, /* actionName */ string, /* targetValue */ GLib.Variant ]
function actionPrintDetailedName(actionName: string, targetValue?: GLib.Variant | null): string
function appInfoCreateFromCommandline(commandline: string, applicationName: string | null, flags: AppInfoCreateFlags): AppInfo
function appInfoGetAll(): AppInfo[]
function appInfoGetAllForType(contentType: string): AppInfo[]
function appInfoGetDefaultForType(contentType: string, mustSupportUris: boolean): AppInfo | null
function appInfoGetDefaultForUriScheme(uriScheme: string): AppInfo | null
function appInfoGetFallbackForType(contentType: string): AppInfo[]
function appInfoGetRecommendedForType(contentType: string): AppInfo[]
function appInfoLaunchDefaultForUri(uri: string, context?: AppLaunchContext | null): boolean
function appInfoLaunchDefaultForUriAsync(uri: string, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
function appInfoLaunchDefaultForUriFinish(result: AsyncResult): boolean
function appInfoResetTypeAssociations(contentType: string): void
function asyncInitableNewvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
function busGet(busType: BusType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
function busGetFinish(res: AsyncResult): DBusConnection
function busGetSync(busType: BusType, cancellable?: Cancellable | null): DBusConnection
function busOwnNameOnConnection(connection: DBusConnection, name: string, flags: BusNameOwnerFlags, nameAcquiredClosure?: Function | null, nameLostClosure?: Function | null): number
function busOwnName(busType: BusType, name: string, flags: BusNameOwnerFlags, busAcquiredClosure?: Function | null, nameAcquiredClosure?: Function | null, nameLostClosure?: Function | null): number
function busUnownName(ownerId: number): void
function busUnwatchName(watcherId: number): void
function busWatchNameOnConnection(connection: DBusConnection, name: string, flags: BusNameWatcherFlags, nameAppearedClosure?: Function | null, nameVanishedClosure?: Function | null): number
function busWatchName(busType: BusType, name: string, flags: BusNameWatcherFlags, nameAppearedClosure?: Function | null, nameVanishedClosure?: Function | null): number
function contentTypeCanBeExecutable(type: string): boolean
function contentTypeEquals(type1: string, type2: string): boolean
function contentTypeFromMimeType(mimeType: string): string | null
function contentTypeGetDescription(type: string): string
function contentTypeGetGenericIconName(type: string): string | null
function contentTypeGetIcon(type: string): Icon
function contentTypeGetMimeDirs(): string[]
function contentTypeGetMimeType(type: string): string | null
function contentTypeGetSymbolicIcon(type: string): Icon
function contentTypeGuess(filename: string | null, data: Uint8Array | null): [ /* returnType */ string, /* resultUncertain */ boolean | null ]
function contentTypeGuessForTree(root: File): string[]
function contentTypeIsA(type: string, supertype: string): boolean
function contentTypeIsMimeType(type: string, mimeType: string): boolean
function contentTypeIsUnknown(type: string): boolean
function contentTypeSetMimeDirs(dirs?: string[] | null): void
function contentTypesGetRegistered(): string[]
function dbusAddressEscapeValue(string: string): string
function dbusAddressGetForBusSync(busType: BusType, cancellable?: Cancellable | null): string
function dbusAddressGetStream(address: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
function dbusAddressGetStreamFinish(res: AsyncResult): [ /* returnType */ IOStream, /* outGuid */ string | null ]
function dbusAddressGetStreamSync(address: string, cancellable?: Cancellable | null): [ /* returnType */ IOStream, /* outGuid */ string | null ]
function dbusAnnotationInfoLookup(annotations: DBusAnnotationInfo[] | null, name: string): string | null
function dbusErrorEncodeGerror(error: GLib.Error): string
function dbusErrorGetRemoteError(error: GLib.Error): string | null
function dbusErrorIsRemoteError(error: GLib.Error): boolean
function dbusErrorNewForDbusError(dbusErrorName: string, dbusErrorMessage: string): GLib.Error
function dbusErrorQuark(): GLib.Quark
function dbusErrorRegisterError(errorDomain: GLib.Quark, errorCode: number, dbusErrorName: string): boolean
function dbusErrorRegisterErrorDomain(errorDomainQuarkName: string, quarkVolatile: number, entries: DBusErrorEntry[]): void
function dbusErrorStripRemoteError(error: GLib.Error): boolean
function dbusErrorUnregisterError(errorDomain: GLib.Quark, errorCode: number, dbusErrorName: string): boolean
function dbusEscapeObjectPath(s: string): string
function dbusEscapeObjectPathBytestring(bytes: Uint8Array): string
function dbusGenerateGuid(): string
function dbusGvalueToGvariant(gvalue: any, type: GLib.VariantType): GLib.Variant
function dbusGvariantToGvalue(value: GLib.Variant): /* outGvalue */ any
function dbusIsAddress(string: string): boolean
function dbusIsErrorName(string: string): boolean
function dbusIsGuid(string: string): boolean
function dbusIsInterfaceName(string: string): boolean
function dbusIsMemberName(string: string): boolean
function dbusIsName(string: string): boolean
function dbusIsSupportedAddress(string: string): boolean
function dbusIsUniqueName(string: string): boolean
function dbusUnescapeObjectPath(s: string): Uint8Array | null
function dtlsClientConnectionNew(baseSocket: DatagramBased, serverIdentity?: SocketConnectable | null): DtlsClientConnection
function dtlsServerConnectionNew(baseSocket: DatagramBased, certificate?: TlsCertificate | null): DtlsServerConnection
function fileNewForCommandlineArg(arg: string): File
function fileNewForCommandlineArgAndCwd(arg: string, cwd: string): File
function fileNewForPath(path: string): File
function fileNewForUri(uri: string): File
function fileNewTmp(tmpl?: string | null): [ /* returnType */ File, /* iostream */ FileIOStream ]
function fileParseName(parseName: string): File
function iconDeserialize(value: GLib.Variant): Icon | null
function iconHash(icon: object): number
function iconNewForString(str: string): Icon
function initableNewv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
function ioErrorFromErrno(errNo: number): IOErrorEnum
function ioErrorQuark(): GLib.Quark
function ioExtensionPointImplement(extensionPointName: string, type: GObject.Type, extensionName: string, priority: number): IOExtension
function ioExtensionPointLookup(name: string): IOExtensionPoint
function ioExtensionPointRegister(name: string): IOExtensionPoint
function ioModulesLoadAllInDirectory(dirname: string): IOModule[]
function ioModulesLoadAllInDirectoryWithScope(dirname: string, scope: IOModuleScope): IOModule[]
function ioModulesScanAllInDirectory(dirname: string): void
function ioModulesScanAllInDirectoryWithScope(dirname: string, scope: IOModuleScope): void
function ioSchedulerCancelAllJobs(): void
function ioSchedulerPushJob(jobFunc: IOSchedulerJobFunc, ioPriority: number, cancellable?: Cancellable | null): void
function keyfileSettingsBackendNew(filename: string, rootPath: string, rootGroup?: string | null): SettingsBackend
function memoryMonitorDupDefault(): MemoryMonitor
function memorySettingsBackendNew(): SettingsBackend
function networkMonitorGetDefault(): NetworkMonitor
function networkingInit(): void
function nullSettingsBackendNew(): SettingsBackend
function pollableSourceNew(pollableStream: GObject.Object): GLib.Source
function pollableSourceNewFull(pollableStream: GObject.Object, childSource?: GLib.Source | null, cancellable?: Cancellable | null): GLib.Source
function pollableStreamRead(stream: InputStream, buffer: Uint8Array, blocking: boolean, cancellable?: Cancellable | null): number
function pollableStreamWrite(stream: OutputStream, buffer: Uint8Array, blocking: boolean, cancellable?: Cancellable | null): number
function pollableStreamWriteAll(stream: OutputStream, buffer: Uint8Array, blocking: boolean, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number ]
function powerProfileMonitorDupDefault(): PowerProfileMonitor
function proxyGetDefaultForProtocol(protocol: string): Proxy | null
function proxyResolverGetDefault(): ProxyResolver
function resolverErrorQuark(): GLib.Quark
function resourceErrorQuark(): GLib.Quark
function resourceLoad(filename: string): Resource
function resourcesEnumerateChildren(path: string, lookupFlags: ResourceLookupFlags): string[]
function resourcesGetInfo(path: string, lookupFlags: ResourceLookupFlags): [ /* returnType */ boolean, /* size */ number | null, /* flags */ number | null ]
function resourcesLookupData(path: string, lookupFlags: ResourceLookupFlags): any
function resourcesOpenStream(path: string, lookupFlags: ResourceLookupFlags): InputStream
function resourcesRegister(resource: Resource): void
function resourcesUnregister(resource: Resource): void
function settingsSchemaSourceGetDefault(): SettingsSchemaSource | null
function simpleAsyncReportGerrorInIdle(object: GObject.Object | null, callback: AsyncReadyCallback | null, error: GLib.Error): void
function tlsBackendGetDefault(): TlsBackend
function tlsChannelBindingErrorQuark(): GLib.Quark
function tlsClientConnectionNew(baseIoStream: IOStream, serverIdentity?: SocketConnectable | null): TlsClientConnection
function tlsErrorQuark(): GLib.Quark
function tlsFileDatabaseNew(anchors: string): TlsFileDatabase
function tlsServerConnectionNew(baseIoStream: IOStream, certificate?: TlsCertificate | null): TlsServerConnection
function unixIsMountPathSystemInternal(mountPath: string): boolean
function unixIsSystemDevicePath(devicePath: string): boolean
function unixIsSystemFsType(fsType: string): boolean
function unixMountAt(mountPath: string): [ /* returnType */ UnixMountEntry | null, /* timeRead */ number | null ]
function unixMountCompare(mount1: UnixMountEntry, mount2: UnixMountEntry): number
function unixMountCopy(mountEntry: UnixMountEntry): UnixMountEntry
function unixMountFor(filePath: string): [ /* returnType */ UnixMountEntry | null, /* timeRead */ number | null ]
function unixMountFree(mountEntry: UnixMountEntry): void
function unixMountGetDevicePath(mountEntry: UnixMountEntry): string
function unixMountGetFsType(mountEntry: UnixMountEntry): string
function unixMountGetMountPath(mountEntry: UnixMountEntry): string
function unixMountGetOptions(mountEntry: UnixMountEntry): string | null
function unixMountGetRootPath(mountEntry: UnixMountEntry): string | null
function unixMountGuessCanEject(mountEntry: UnixMountEntry): boolean
function unixMountGuessIcon(mountEntry: UnixMountEntry): Icon
function unixMountGuessName(mountEntry: UnixMountEntry): string
function unixMountGuessShouldDisplay(mountEntry: UnixMountEntry): boolean
function unixMountGuessSymbolicIcon(mountEntry: UnixMountEntry): Icon
function unixMountIsReadonly(mountEntry: UnixMountEntry): boolean
function unixMountIsSystemInternal(mountEntry: UnixMountEntry): boolean
function unixMountPointAt(mountPath: string): [ /* returnType */ UnixMountPoint | null, /* timeRead */ number | null ]
function unixMountPointsChangedSince(time: number): boolean
function unixMountPointsGet(): [ /* returnType */ UnixMountPoint[], /* timeRead */ number | null ]
function unixMountsChangedSince(time: number): boolean
function unixMountsGet(): [ /* returnType */ UnixMountEntry[], /* timeRead */ number | null ]
interface AsyncReadyCallback {
    (sourceObject: GObject.Object | null, res: AsyncResult): void
}
interface BusAcquiredCallback {
    (connection: DBusConnection, name: string): void
}
interface BusNameAcquiredCallback {
    (connection: DBusConnection, name: string): void
}
interface BusNameAppearedCallback {
    (connection: DBusConnection, name: string, nameOwner: string): void
}
interface BusNameLostCallback {
    (connection: DBusConnection, name: string): void
}
interface BusNameVanishedCallback {
    (connection: DBusConnection, name: string): void
}
interface CancellableSourceFunc {
    (cancellable?: Cancellable | null): boolean
}
interface DBusInterfaceGetPropertyFunc {
    (connection: DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string, error: GLib.Error): GLib.Variant
}
interface DBusInterfaceMethodCallFunc {
    (connection: DBusConnection, sender: string, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant, invocation: DBusMethodInvocation): void
}
interface DBusInterfaceSetPropertyFunc {
    (connection: DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string, value: GLib.Variant, error: GLib.Error): boolean
}
interface DBusMessageFilterFunction {
    (connection: DBusConnection, message: DBusMessage, incoming: boolean): DBusMessage | null
}
interface DBusProxyTypeFunc {
    (manager: DBusObjectManagerClient, objectPath: string, interfaceName?: string | null): GObject.Type
}
interface DBusSignalCallback {
    (connection: DBusConnection, senderName: string | null, objectPath: string, interfaceName: string, signalName: string, parameters: GLib.Variant): void
}
interface DBusSubtreeDispatchFunc {
    (connection: DBusConnection, sender: string, objectPath: string, interfaceName: string, node: string, outUserData: object): DBusInterfaceVTable | null
}
interface DBusSubtreeEnumerateFunc {
    (connection: DBusConnection, sender: string, objectPath: string): string[]
}
interface DBusSubtreeIntrospectFunc {
    (connection: DBusConnection, sender: string, objectPath: string, node: string): DBusInterfaceInfo[] | null
}
interface DatagramBasedSourceFunc {
    (datagramBased: DatagramBased, condition: GLib.IOCondition): boolean
}
interface DesktopAppLaunchCallback {
    (appinfo: DesktopAppInfo, pid: GLib.Pid): void
}
interface FileMeasureProgressCallback {
    (reporting: boolean, currentSize: number, numDirs: number, numFiles: number): void
}
interface FileProgressCallback {
    (currentNumBytes: number, totalNumBytes: number): void
}
interface FileReadMoreCallback {
    (fileContents: string, fileSize: number): boolean
}
interface IOSchedulerJobFunc {
    (job: IOSchedulerJob, cancellable?: Cancellable | null): boolean
}
interface PollableSourceFunc {
    (pollableStream: GObject.Object): boolean
}
interface ReallocFunc {
    (data: object | null, size: number): object | null
}
interface SettingsBindGetMapping {
    (value: any, variant: GLib.Variant): boolean
}
interface SettingsBindSetMapping {
    (value: any, expectedType: GLib.VariantType): GLib.Variant
}
interface SettingsGetMapping {
    (value: GLib.Variant): boolean
}
interface SimpleAsyncThreadFunc {
    (res: SimpleAsyncResult, object: GObject.Object, cancellable?: Cancellable | null): void
}
interface SocketSourceFunc {
    (socket: Socket, condition: GLib.IOCondition): boolean
}
interface TaskThreadFunc {
    (task: Task, sourceObject: GObject.Object, taskData?: object | null, cancellable?: Cancellable | null): void
}
interface VfsFileLookupFunc {
    (vfs: Vfs, identifier: string): File
}
class Action {
    /* Properties of Gio-2.0.Gio.Action */
    readonly enabled: boolean
    readonly name: string
    readonly parameterType: GLib.VariantType
    readonly state: GLib.Variant
    readonly stateType: GLib.VariantType
    /* Methods of Gio-2.0.Gio.Action */
    activate(parameter?: GLib.Variant | null): void
    changeState(value: GLib.Variant): void
    getEnabled(): boolean
    getName(): string
    getParameterType(): GLib.VariantType | null
    getState(): GLib.Variant | null
    getStateHint(): GLib.Variant | null
    getStateType(): GLib.VariantType | null
    static name: string
    /* Static methods and pseudo-constructors */
    static nameIsValid(actionName: string): boolean
    static parseDetailedName(detailedName: string): [ /* returnType */ boolean, /* actionName */ string, /* targetValue */ GLib.Variant ]
    static printDetailedName(actionName: string, targetValue?: GLib.Variant | null): string
}
class ActionGroup {
    /* Methods of Gio-2.0.Gio.ActionGroup */
    actionAdded(actionName: string): void
    actionEnabledChanged(actionName: string, enabled: boolean): void
    actionRemoved(actionName: string): void
    actionStateChanged(actionName: string, state: GLib.Variant): void
    activateAction(actionName: string, parameter?: GLib.Variant | null): void
    changeActionState(actionName: string, value: GLib.Variant): void
    getActionEnabled(actionName: string): boolean
    getActionParameterType(actionName: string): GLib.VariantType | null
    getActionState(actionName: string): GLib.Variant | null
    getActionStateHint(actionName: string): GLib.Variant | null
    getActionStateType(actionName: string): GLib.VariantType | null
    hasAction(actionName: string): boolean
    listActions(): string[]
    queryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Signals of Gio-2.0.Gio.ActionGroup */
    connect(sigName: "action-added", callback: ((actionName: string) => void)): number
    on(sigName: "action-added", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-added", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-added", callback: (actionName: string) => void): NodeJS.EventEmitter
    emit(sigName: "action-added", actionName: string): void
    connect(sigName: "action-enabled-changed", callback: ((actionName: string, enabled: boolean) => void)): number
    on(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "action-enabled-changed", actionName: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: ((actionName: string) => void)): number
    on(sigName: "action-removed", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-removed", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-removed", callback: (actionName: string) => void): NodeJS.EventEmitter
    emit(sigName: "action-removed", actionName: string): void
    connect(sigName: "action-state-changed", callback: ((actionName: string, value: GLib.Variant) => void)): number
    on(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "action-state-changed", actionName: string, value: GLib.Variant): void
    static name: string
}
class ActionMap {
    /* Methods of Gio-2.0.Gio.ActionMap */
    addAction(action: Action): void
    addActionEntries(entries: ActionEntry[], userData?: object | null): void
    lookupAction(actionName: string): Action | null
    removeAction(actionName: string): void
    static name: string
}
class AppInfo {
    /* Methods of Gio-2.0.Gio.AppInfo */
    addSupportsType(contentType: string): boolean
    canDelete(): boolean
    canRemoveSupportsType(): boolean
    delete(): boolean
    dup(): AppInfo
    equal(appinfo2: AppInfo): boolean
    getCommandline(): string | null
    getDescription(): string | null
    getDisplayName(): string
    getExecutable(): string
    getIcon(): Icon | null
    getId(): string | null
    getName(): string
    getSupportedTypes(): string[]
    launch(files?: File[] | null, context?: AppLaunchContext | null): boolean
    launchUris(uris?: string[] | null, context?: AppLaunchContext | null): boolean
    launchUrisAsync(uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    launchUrisFinish(result: AsyncResult): boolean
    removeSupportsType(contentType: string): boolean
    setAsDefaultForExtension(extension: string): boolean
    setAsDefaultForType(contentType: string): boolean
    setAsLastUsedForType(contentType: string): boolean
    shouldShow(): boolean
    supportsFiles(): boolean
    supportsUris(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static createFromCommandline(commandline: string, applicationName: string | null, flags: AppInfoCreateFlags): AppInfo
    static getAll(): AppInfo[]
    static getAllForType(contentType: string): AppInfo[]
    static getDefaultForType(contentType: string, mustSupportUris: boolean): AppInfo | null
    static getDefaultForUriScheme(uriScheme: string): AppInfo | null
    static getFallbackForType(contentType: string): AppInfo[]
    static getRecommendedForType(contentType: string): AppInfo[]
    static launchDefaultForUri(uri: string, context?: AppLaunchContext | null): boolean
    static launchDefaultForUriAsync(uri: string, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static launchDefaultForUriFinish(result: AsyncResult): boolean
    static resetTypeAssociations(contentType: string): void
}
class AsyncInitable {
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    initFinish(res: AsyncResult): boolean
    newFinish(res: AsyncResult): GObject.Object
    static name: string
    /* Static methods and pseudo-constructors */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
}
class AsyncResult {
    /* Methods of Gio-2.0.Gio.AsyncResult */
    getSourceObject(): GObject.Object | null
    getUserData(): object | null
    isTagged(sourceTag?: object | null): boolean
    legacyPropagateError(): boolean
    static name: string
}
class Converter {
    /* Methods of Gio-2.0.Gio.Converter */
    convert(inbuf: Uint8Array, outbuf: Uint8Array, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    reset(): void
    static name: string
}
class DBusInterface {
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): DBusObject | null
    getInfo(): DBusInterfaceInfo
    setObject(object?: DBusObject | null): void
    static name: string
}
class DBusObject {
    /* Methods of Gio-2.0.Gio.DBusObject */
    getInterface(interfaceName: string): DBusInterface | null
    getInterfaces(): DBusInterface[]
    getObjectPath(): string
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: ((interface: DBusInterface) => void)): number
    on(sigName: "interface-added", callback: (interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (interface: DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-added", interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: ((interface: DBusInterface) => void)): number
    on(sigName: "interface-removed", callback: (interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (interface: DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-removed", interface: DBusInterface): void
    static name: string
}
class DBusObjectManager {
    /* Methods of Gio-2.0.Gio.DBusObjectManager */
    getInterface(objectPath: string, interfaceName: string): DBusInterface | null
    getObject(objectPath: string): DBusObject | null
    getObjectPath(): string
    getObjects(): DBusObject[]
    /* Signals of Gio-2.0.Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: ((object: DBusObject, interface: DBusInterface) => void)): number
    on(sigName: "interface-added", callback: (object: DBusObject, interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (object: DBusObject, interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (object: DBusObject, interface: DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-added", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: ((object: DBusObject, interface: DBusInterface) => void)): number
    on(sigName: "interface-removed", callback: (object: DBusObject, interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (object: DBusObject, interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (object: DBusObject, interface: DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-removed", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "object-added", callback: ((object: DBusObject) => void)): number
    on(sigName: "object-added", callback: (object: DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-added", callback: (object: DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-added", callback: (object: DBusObject) => void): NodeJS.EventEmitter
    emit(sigName: "object-added", object: DBusObject): void
    connect(sigName: "object-removed", callback: ((object: DBusObject) => void)): number
    on(sigName: "object-removed", callback: (object: DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-removed", callback: (object: DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-removed", callback: (object: DBusObject) => void): NodeJS.EventEmitter
    emit(sigName: "object-removed", object: DBusObject): void
    static name: string
}
class DatagramBased {
    /* Methods of Gio-2.0.Gio.DatagramBased */
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    conditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    createSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    sendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    static name: string
}
class DesktopAppInfoLookup {
    /* Methods of Gio-2.0.Gio.DesktopAppInfoLookup */
    getDefaultForUriScheme(uriScheme: string): AppInfo | null
    static name: string
}
class Drive {
    /* Methods of Gio-2.0.Gio.Drive */
    canEject(): boolean
    canPollForMedia(): boolean
    canStart(): boolean
    canStartDegraded(): boolean
    canStop(): boolean
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectFinish(result: AsyncResult): boolean
    ejectWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectWithOperationFinish(result: AsyncResult): boolean
    enumerateIdentifiers(): string[]
    getIcon(): Icon
    getIdentifier(kind: string): string | null
    getName(): string
    getSortKey(): string | null
    getStartStopType(): DriveStartStopType
    getSymbolicIcon(): Icon
    getVolumes(): Volume[]
    hasMedia(): boolean
    hasVolumes(): boolean
    isMediaCheckAutomatic(): boolean
    isMediaRemovable(): boolean
    isRemovable(): boolean
    pollForMedia(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    pollForMediaFinish(result: AsyncResult): boolean
    start(flags: DriveStartFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    startFinish(result: AsyncResult): boolean
    stop(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    stopFinish(result: AsyncResult): boolean
    /* Signals of Gio-2.0.Gio.Drive */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "disconnected", callback: (() => void)): number
    on(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disconnected"): void
    connect(sigName: "eject-button", callback: (() => void)): number
    on(sigName: "eject-button", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "eject-button", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "eject-button", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "eject-button"): void
    connect(sigName: "stop-button", callback: (() => void)): number
    on(sigName: "stop-button", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stop-button", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stop-button", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stop-button"): void
    static name: string
}
class DtlsClientConnection {
    /* Properties of Gio-2.0.Gio.DtlsClientConnection */
    readonly acceptedCas: object[]
    serverIdentity: SocketConnectable
    validationFlags: TlsCertificateFlags
    /* Properties of Gio-2.0.Gio.DtlsConnection */
    advertisedProtocols: string[]
    certificate: TlsCertificate
    readonly ciphersuiteName: string
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiatedProtocol: string
    readonly peerCertificate: TlsCertificate
    readonly peerCertificateErrors: TlsCertificateFlags
    readonly protocolVersion: TlsProtocolVersion
    rehandshakeMode: TlsRehandshakeMode
    requireCloseNotify: boolean
    /* Methods of Gio-2.0.Gio.DtlsClientConnection */
    getAcceptedCas(): any[]
    getServerIdentity(): SocketConnectable
    getValidationFlags(): TlsCertificateFlags
    setServerIdentity(identity: SocketConnectable): void
    setValidationFlags(flags: TlsCertificateFlags): void
    /* Methods of Gio-2.0.Gio.DatagramBased */
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    conditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    createSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    sendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Methods of Gio-2.0.Gio.DtlsConnection */
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    emitAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    getCertificate(): TlsCertificate | null
    getChannelBindingData(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ Uint8Array | null ]
    getCiphersuiteName(): string | null
    getDatabase(): TlsDatabase | null
    getInteraction(): TlsInteraction | null
    getNegotiatedProtocol(): string | null
    getPeerCertificate(): TlsCertificate | null
    getPeerCertificateErrors(): TlsCertificateFlags
    getProtocolVersion(): TlsProtocolVersion
    getRehandshakeMode(): TlsRehandshakeMode
    getRequireCloseNotify(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshakeFinish(result: AsyncResult): boolean
    setAdvertisedProtocols(protocols?: string[] | null): void
    setCertificate(certificate: TlsCertificate): void
    setDatabase(database?: TlsDatabase | null): void
    setInteraction(interaction?: TlsInteraction | null): void
    setRehandshakeMode(mode: TlsRehandshakeMode): void
    setRequireCloseNotify(requireCloseNotify: boolean): void
    shutdown(shutdownRead: boolean, shutdownWrite: boolean, cancellable?: Cancellable | null): boolean
    shutdownAsync(shutdownRead: boolean, shutdownWrite: boolean, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    shutdownFinish(result: AsyncResult): boolean
    /* Signals of Gio-2.0.Gio.DtlsConnection */
    connect(sigName: "accept-certificate", callback: ((peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    on(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "accept-certificate", peerCert: TlsCertificate, errors: TlsCertificateFlags): void
    static name: string
}
class DtlsConnection {
    /* Properties of Gio-2.0.Gio.DtlsConnection */
    advertisedProtocols: string[]
    certificate: TlsCertificate
    readonly ciphersuiteName: string
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiatedProtocol: string
    readonly peerCertificate: TlsCertificate
    readonly peerCertificateErrors: TlsCertificateFlags
    readonly protocolVersion: TlsProtocolVersion
    rehandshakeMode: TlsRehandshakeMode
    requireCloseNotify: boolean
    /* Methods of Gio-2.0.Gio.DtlsConnection */
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    emitAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    getCertificate(): TlsCertificate | null
    getChannelBindingData(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ Uint8Array | null ]
    getCiphersuiteName(): string | null
    getDatabase(): TlsDatabase | null
    getInteraction(): TlsInteraction | null
    getNegotiatedProtocol(): string | null
    getPeerCertificate(): TlsCertificate | null
    getPeerCertificateErrors(): TlsCertificateFlags
    getProtocolVersion(): TlsProtocolVersion
    getRehandshakeMode(): TlsRehandshakeMode
    getRequireCloseNotify(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshakeFinish(result: AsyncResult): boolean
    setAdvertisedProtocols(protocols?: string[] | null): void
    setCertificate(certificate: TlsCertificate): void
    setDatabase(database?: TlsDatabase | null): void
    setInteraction(interaction?: TlsInteraction | null): void
    setRehandshakeMode(mode: TlsRehandshakeMode): void
    setRequireCloseNotify(requireCloseNotify: boolean): void
    shutdown(shutdownRead: boolean, shutdownWrite: boolean, cancellable?: Cancellable | null): boolean
    shutdownAsync(shutdownRead: boolean, shutdownWrite: boolean, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    shutdownFinish(result: AsyncResult): boolean
    /* Methods of Gio-2.0.Gio.DatagramBased */
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    conditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    createSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    sendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Signals of Gio-2.0.Gio.DtlsConnection */
    connect(sigName: "accept-certificate", callback: ((peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    on(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "accept-certificate", peerCert: TlsCertificate, errors: TlsCertificateFlags): void
    static name: string
}
class DtlsServerConnection {
    /* Properties of Gio-2.0.Gio.DtlsServerConnection */
    authenticationMode: TlsAuthenticationMode
    /* Properties of Gio-2.0.Gio.DtlsConnection */
    advertisedProtocols: string[]
    certificate: TlsCertificate
    readonly ciphersuiteName: string
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiatedProtocol: string
    readonly peerCertificate: TlsCertificate
    readonly peerCertificateErrors: TlsCertificateFlags
    readonly protocolVersion: TlsProtocolVersion
    rehandshakeMode: TlsRehandshakeMode
    requireCloseNotify: boolean
    /* Methods of Gio-2.0.Gio.DatagramBased */
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    conditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    createSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    sendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Methods of Gio-2.0.Gio.DtlsConnection */
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    emitAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    getCertificate(): TlsCertificate | null
    getChannelBindingData(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ Uint8Array | null ]
    getCiphersuiteName(): string | null
    getDatabase(): TlsDatabase | null
    getInteraction(): TlsInteraction | null
    getNegotiatedProtocol(): string | null
    getPeerCertificate(): TlsCertificate | null
    getPeerCertificateErrors(): TlsCertificateFlags
    getProtocolVersion(): TlsProtocolVersion
    getRehandshakeMode(): TlsRehandshakeMode
    getRequireCloseNotify(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshakeFinish(result: AsyncResult): boolean
    setAdvertisedProtocols(protocols?: string[] | null): void
    setCertificate(certificate: TlsCertificate): void
    setDatabase(database?: TlsDatabase | null): void
    setInteraction(interaction?: TlsInteraction | null): void
    setRehandshakeMode(mode: TlsRehandshakeMode): void
    setRequireCloseNotify(requireCloseNotify: boolean): void
    shutdown(shutdownRead: boolean, shutdownWrite: boolean, cancellable?: Cancellable | null): boolean
    shutdownAsync(shutdownRead: boolean, shutdownWrite: boolean, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    shutdownFinish(result: AsyncResult): boolean
    /* Signals of Gio-2.0.Gio.DtlsConnection */
    connect(sigName: "accept-certificate", callback: ((peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    on(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "accept-certificate", peerCert: TlsCertificate, errors: TlsCertificateFlags): void
    static name: string
}
class File {
    /* Methods of Gio-2.0.Gio.File */
    appendTo(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    appendToAsync(flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    appendToFinish(res: AsyncResult): FileOutputStream
    buildAttributeListForCopy(flags: FileCopyFlags, cancellable?: Cancellable | null): string
    copy(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progressCallback?: FileProgressCallback | null): boolean
    copyAsync(destination: File, flags: FileCopyFlags, ioPriority: number, cancellable?: Cancellable | null): void
    copyAttributes(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null): boolean
    copyFinish(res: AsyncResult): boolean
    create(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    createAsync(flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    createFinish(res: AsyncResult): FileOutputStream
    createReadwrite(flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    createReadwriteAsync(flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    createReadwriteFinish(res: AsyncResult): FileIOStream
    delete(cancellable?: Cancellable | null): boolean
    deleteAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    deleteFinish(result: AsyncResult): boolean
    dup(): File
    ejectMountable(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectMountableFinish(result: AsyncResult): boolean
    ejectMountableWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectMountableWithOperationFinish(result: AsyncResult): boolean
    enumerateChildren(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileEnumerator
    enumerateChildrenAsync(attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    enumerateChildrenFinish(res: AsyncResult): FileEnumerator
    equal(file2: File): boolean
    findEnclosingMount(cancellable?: Cancellable | null): Mount
    findEnclosingMountAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    findEnclosingMountFinish(res: AsyncResult): Mount
    getBasename(): string | null
    getChild(name: string): File
    getChildForDisplayName(displayName: string): File
    getParent(): File | null
    getParseName(): string
    getPath(): string | null
    getRelativePath(descendant: File): string | null
    getUri(): string
    getUriScheme(): string | null
    hasParent(parent?: File | null): boolean
    hasPrefix(prefix: File): boolean
    hasUriScheme(uriScheme: string): boolean
    hash(): number
    isNative(): boolean
    loadBytes(cancellable?: Cancellable | null): [ /* returnType */ any, /* etagOut */ string | null ]
    loadBytesAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadBytesFinish(result: AsyncResult): [ /* returnType */ any, /* etagOut */ string | null ]
    loadContents(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* contents */ Uint8Array, /* etagOut */ string | null ]
    loadContentsAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadContentsFinish(res: AsyncResult): [ /* returnType */ boolean, /* contents */ Uint8Array, /* etagOut */ string | null ]
    loadPartialContentsFinish(res: AsyncResult): [ /* returnType */ boolean, /* contents */ Uint8Array, /* etagOut */ string | null ]
    makeDirectory(cancellable?: Cancellable | null): boolean
    makeDirectoryAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    makeDirectoryFinish(result: AsyncResult): boolean
    makeDirectoryWithParents(cancellable?: Cancellable | null): boolean
    makeSymbolicLink(symlinkValue: string, cancellable?: Cancellable | null): boolean
    measureDiskUsageFinish(result: AsyncResult): [ /* returnType */ boolean, /* diskUsage */ number | null, /* numDirs */ number | null, /* numFiles */ number | null ]
    monitor(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    monitorDirectory(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    monitorFile(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    mountEnclosingVolume(flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    mountEnclosingVolumeFinish(result: AsyncResult): boolean
    mountMountable(flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    mountMountableFinish(result: AsyncResult): File
    move(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progressCallback?: FileProgressCallback | null): boolean
    openReadwrite(cancellable?: Cancellable | null): FileIOStream
    openReadwriteAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    openReadwriteFinish(res: AsyncResult): FileIOStream
    peekPath(): string | null
    pollMountable(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    pollMountableFinish(result: AsyncResult): boolean
    queryDefaultHandler(cancellable?: Cancellable | null): AppInfo
    queryDefaultHandlerAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryDefaultHandlerFinish(result: AsyncResult): AppInfo
    queryExists(cancellable?: Cancellable | null): boolean
    queryFileType(flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileType
    queryFilesystemInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    queryFilesystemInfoAsync(attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryFilesystemInfoFinish(res: AsyncResult): FileInfo
    queryInfo(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileInfo
    queryInfoAsync(attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryInfoFinish(res: AsyncResult): FileInfo
    querySettableAttributes(cancellable?: Cancellable | null): FileAttributeInfoList
    queryWritableNamespaces(cancellable?: Cancellable | null): FileAttributeInfoList
    read(cancellable?: Cancellable | null): FileInputStream
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readFinish(res: AsyncResult): FileInputStream
    replace(etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    replaceAsync(etag: string | null, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replaceContents(contents: Uint8Array, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* newEtag */ string | null ]
    replaceContentsAsync(contents: Uint8Array, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replaceContentsBytesAsync(contents: any, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replaceContentsFinish(res: AsyncResult): [ /* returnType */ boolean, /* newEtag */ string | null ]
    replaceFinish(res: AsyncResult): FileOutputStream
    replaceReadwrite(etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    replaceReadwriteAsync(etag: string | null, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replaceReadwriteFinish(res: AsyncResult): FileIOStream
    resolveRelativePath(relativePath: string): File | null
    setAttribute(attribute: string, type: FileAttributeType, valueP: object | null, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeByteString(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeInt32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeInt64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeString(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeUint32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributeUint64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setAttributesAsync(info: FileInfo, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    setAttributesFinish(result: AsyncResult): [ /* returnType */ boolean, /* info */ FileInfo ]
    setAttributesFromInfo(info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    setDisplayName(displayName: string, cancellable?: Cancellable | null): File
    setDisplayNameAsync(displayName: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    setDisplayNameFinish(res: AsyncResult): File
    startMountable(flags: DriveStartFlags, startOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    startMountableFinish(result: AsyncResult): boolean
    stopMountable(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    stopMountableFinish(result: AsyncResult): boolean
    supportsThreadContexts(): boolean
    trash(cancellable?: Cancellable | null): boolean
    trashAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    trashFinish(result: AsyncResult): boolean
    unmountMountable(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmountMountableFinish(result: AsyncResult): boolean
    unmountMountableWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmountMountableWithOperationFinish(result: AsyncResult): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static newForCommandlineArg(arg: string): File
    static newForCommandlineArgAndCwd(arg: string, cwd: string): File
    static newForPath(path: string): File
    static newForUri(uri: string): File
    static newTmp(tmpl?: string | null): [ /* returnType */ File, /* iostream */ FileIOStream ]
    static parseName(parseName: string): File
}
class FileDescriptorBased {
    /* Methods of Gio-2.0.Gio.FileDescriptorBased */
    getFd(): number
    static name: string
}
class Icon {
    /* Methods of Gio-2.0.Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    toString(): string | null
    static name: string
    /* Static methods and pseudo-constructors */
    static deserialize(value: GLib.Variant): Icon | null
    static hash(icon: object): number
    static newForString(str: string): Icon
}
class Initable {
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
}
class ListModel {
    /* Methods of Gio-2.0.Gio.ListModel */
    getItemType(): GObject.Type
    getNItems(): number
    getItem(position: number): GObject.Object | null
    itemsChanged(position: number, removed: number, added: number): void
    /* Signals of Gio-2.0.Gio.ListModel */
    connect(sigName: "items-changed", callback: ((position: number, removed: number, added: number) => void)): number
    on(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void): NodeJS.EventEmitter
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    static name: string
}
class LoadableIcon {
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    loadAsync(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadFinish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Methods of Gio-2.0.Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    toString(): string | null
    static name: string
}
class MemoryMonitor {
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.MemoryMonitor */
    connect(sigName: "low-memory-warning", callback: ((level: MemoryMonitorWarningLevel) => void)): number
    on(sigName: "low-memory-warning", callback: (level: MemoryMonitorWarningLevel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "low-memory-warning", callback: (level: MemoryMonitorWarningLevel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "low-memory-warning", callback: (level: MemoryMonitorWarningLevel) => void): NodeJS.EventEmitter
    emit(sigName: "low-memory-warning", level: MemoryMonitorWarningLevel): void
    static name: string
    /* Static methods and pseudo-constructors */
    static dupDefault(): MemoryMonitor
}
class Mount {
    /* Methods of Gio-2.0.Gio.Mount */
    canEject(): boolean
    canUnmount(): boolean
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectFinish(result: AsyncResult): boolean
    ejectWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectWithOperationFinish(result: AsyncResult): boolean
    getDefaultLocation(): File
    getDrive(): Drive | null
    getIcon(): Icon
    getName(): string
    getRoot(): File
    getSortKey(): string | null
    getSymbolicIcon(): Icon
    getUuid(): string | null
    getVolume(): Volume | null
    guessContentType(forceRescan: boolean, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    guessContentTypeFinish(result: AsyncResult): string[]
    guessContentTypeSync(forceRescan: boolean, cancellable?: Cancellable | null): string[]
    isShadowed(): boolean
    remount(flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    remountFinish(result: AsyncResult): boolean
    shadow(): void
    unmount(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmountFinish(result: AsyncResult): boolean
    unmountWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmountWithOperationFinish(result: AsyncResult): boolean
    unshadow(): void
    /* Signals of Gio-2.0.Gio.Mount */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "pre-unmount", callback: (() => void)): number
    on(sigName: "pre-unmount", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-unmount", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-unmount", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "pre-unmount"): void
    connect(sigName: "unmounted", callback: (() => void)): number
    on(sigName: "unmounted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmounted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmounted", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmounted"): void
    static name: string
}
class NetworkMonitor {
    /* Properties of Gio-2.0.Gio.NetworkMonitor */
    readonly connectivity: NetworkConnectivity
    readonly networkAvailable: boolean
    readonly networkMetered: boolean
    /* Methods of Gio-2.0.Gio.NetworkMonitor */
    canReach(connectable: SocketConnectable, cancellable?: Cancellable | null): boolean
    canReachAsync(connectable: SocketConnectable, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    canReachFinish(result: AsyncResult): boolean
    getConnectivity(): NetworkConnectivity
    getNetworkAvailable(): boolean
    getNetworkMetered(): boolean
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.NetworkMonitor */
    connect(sigName: "network-changed", callback: ((networkAvailable: boolean) => void)): number
    on(sigName: "network-changed", callback: (networkAvailable: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "network-changed", callback: (networkAvailable: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "network-changed", callback: (networkAvailable: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "network-changed", networkAvailable: boolean): void
    static name: string
    /* Static methods and pseudo-constructors */
    static getDefault(): NetworkMonitor
}
interface PollableInputStream_ConstructProps extends InputStream_ConstructProps {
}
class PollableInputStream {
    /* Fields of Gio-2.0.Gio.InputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    constructor (config?: PollableInputStream_ConstructProps)
    _init (config?: PollableInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
interface PollableOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
class PollableOutputStream {
    /* Fields of Gio-2.0.Gio.OutputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.PollableOutputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isWritable(): boolean
    writeNonblocking(buffer: Uint8Array, cancellable?: Cancellable | null): number
    writevNonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Cancellable | null): number
    writeAll(buffer: Uint8Array, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    constructor (config?: PollableOutputStream_ConstructProps)
    _init (config?: PollableOutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
class PowerProfileMonitor {
    /* Properties of Gio-2.0.Gio.PowerProfileMonitor */
    readonly powerSaverEnabled: boolean
    /* Methods of Gio-2.0.Gio.PowerProfileMonitor */
    getPowerSaverEnabled(): boolean
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static dupDefault(): PowerProfileMonitor
}
class Proxy {
    /* Methods of Gio-2.0.Gio.Proxy */
    connect(connection: IOStream, proxyAddress: ProxyAddress, cancellable?: Cancellable | null): IOStream
    connectAsync(connection: IOStream, proxyAddress: ProxyAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): IOStream
    supportsHostname(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getDefaultForProtocol(protocol: string): Proxy | null
}
class ProxyResolver {
    /* Methods of Gio-2.0.Gio.ProxyResolver */
    isSupported(): boolean
    lookup(uri: string, cancellable?: Cancellable | null): string[]
    lookupAsync(uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupFinish(result: AsyncResult): string[]
    static name: string
    /* Static methods and pseudo-constructors */
    static getDefault(): ProxyResolver
}
class RemoteActionGroup {
    /* Methods of Gio-2.0.Gio.RemoteActionGroup */
    activateActionFull(actionName: string, parameter: GLib.Variant | null, platformData: GLib.Variant): void
    changeActionStateFull(actionName: string, value: GLib.Variant, platformData: GLib.Variant): void
    /* Methods of Gio-2.0.Gio.ActionGroup */
    actionAdded(actionName: string): void
    actionEnabledChanged(actionName: string, enabled: boolean): void
    actionRemoved(actionName: string): void
    actionStateChanged(actionName: string, state: GLib.Variant): void
    activateAction(actionName: string, parameter?: GLib.Variant | null): void
    changeActionState(actionName: string, value: GLib.Variant): void
    getActionEnabled(actionName: string): boolean
    getActionParameterType(actionName: string): GLib.VariantType | null
    getActionState(actionName: string): GLib.Variant | null
    getActionStateHint(actionName: string): GLib.Variant | null
    getActionStateType(actionName: string): GLib.VariantType | null
    hasAction(actionName: string): boolean
    listActions(): string[]
    queryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Signals of Gio-2.0.Gio.ActionGroup */
    connect(sigName: "action-added", callback: ((actionName: string) => void)): number
    on(sigName: "action-added", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-added", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-added", callback: (actionName: string) => void): NodeJS.EventEmitter
    emit(sigName: "action-added", actionName: string): void
    connect(sigName: "action-enabled-changed", callback: ((actionName: string, enabled: boolean) => void)): number
    on(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "action-enabled-changed", actionName: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: ((actionName: string) => void)): number
    on(sigName: "action-removed", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-removed", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-removed", callback: (actionName: string) => void): NodeJS.EventEmitter
    emit(sigName: "action-removed", actionName: string): void
    connect(sigName: "action-state-changed", callback: ((actionName: string, value: GLib.Variant) => void)): number
    on(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "action-state-changed", actionName: string, value: GLib.Variant): void
    static name: string
}
class Seekable {
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    static name: string
}
class SocketConnectable {
    /* Methods of Gio-2.0.Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    toString(): string
    static name: string
}
class TlsBackend {
    /* Methods of Gio-2.0.Gio.TlsBackend */
    getCertificateType(): GObject.Type
    getClientConnectionType(): GObject.Type
    getDefaultDatabase(): TlsDatabase
    getDtlsClientConnectionType(): GObject.Type
    getDtlsServerConnectionType(): GObject.Type
    getFileDatabaseType(): GObject.Type
    getServerConnectionType(): GObject.Type
    setDefaultDatabase(database?: TlsDatabase | null): void
    supportsDtls(): boolean
    supportsTls(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getDefault(): TlsBackend
}
interface TlsClientConnection_ConstructProps extends TlsConnection_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.TlsClientConnection */
    serverIdentity?: SocketConnectable
    useSsl3?: boolean
    validationFlags?: TlsCertificateFlags
}
class TlsClientConnection {
    /* Properties of Gio-2.0.Gio.TlsClientConnection */
    readonly acceptedCas: object[]
    serverIdentity: SocketConnectable
    useSsl3: boolean
    validationFlags: TlsCertificateFlags
    /* Properties of Gio-2.0.Gio.TlsConnection */
    advertisedProtocols: string[]
    certificate: TlsCertificate
    readonly ciphersuiteName: string
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiatedProtocol: string
    readonly peerCertificate: TlsCertificate
    readonly peerCertificateErrors: TlsCertificateFlags
    readonly protocolVersion: TlsProtocolVersion
    rehandshakeMode: TlsRehandshakeMode
    requireCloseNotify: boolean
    useSystemCertdb: boolean
    /* Properties of Gio-2.0.Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio-2.0.Gio.TlsConnection */
    readonly parentInstance: IOStream
    readonly priv: TlsConnectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.TlsClientConnection */
    copySessionState(source: TlsClientConnection): void
    getAcceptedCas(): any[]
    getServerIdentity(): SocketConnectable | null
    getUseSsl3(): boolean
    getValidationFlags(): TlsCertificateFlags
    setServerIdentity(identity: SocketConnectable): void
    setUseSsl3(useSsl3: boolean): void
    setValidationFlags(flags: TlsCertificateFlags): void
    /* Methods of Gio-2.0.Gio.TlsConnection */
    emitAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    getCertificate(): TlsCertificate | null
    getChannelBindingData(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ Uint8Array | null ]
    getCiphersuiteName(): string | null
    getDatabase(): TlsDatabase | null
    getInteraction(): TlsInteraction | null
    getNegotiatedProtocol(): string | null
    getPeerCertificate(): TlsCertificate | null
    getPeerCertificateErrors(): TlsCertificateFlags
    getProtocolVersion(): TlsProtocolVersion
    getRehandshakeMode(): TlsRehandshakeMode
    getRequireCloseNotify(): boolean
    getUseSystemCertdb(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshakeFinish(result: AsyncResult): boolean
    setAdvertisedProtocols(protocols?: string[] | null): void
    setCertificate(certificate: TlsCertificate): void
    setDatabase(database?: TlsDatabase | null): void
    setInteraction(interaction?: TlsInteraction | null): void
    setRehandshakeMode(mode: TlsRehandshakeMode): void
    setRequireCloseNotify(requireCloseNotify: boolean): void
    setUseSystemCertdb(useSystemCertdb: boolean): void
    /* Methods of Gio-2.0.Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Signals of Gio-2.0.Gio.TlsConnection */
    connect(sigName: "accept-certificate", callback: ((peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    on(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "accept-certificate", peerCert: TlsCertificate, errors: TlsCertificateFlags): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accepted-cas", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepted-cas", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accepted-cas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accepted-cas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accepted-cas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server-identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-ssl3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-ssl3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-ssl3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-ssl3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-ssl3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::validation-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validation-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::validation-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::validation-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::validation-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::advertised-protocols", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::advertised-protocols", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ciphersuite-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ciphersuite-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ciphersuite-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ciphersuite-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ciphersuite-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::database", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::negotiated-protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::peer-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::peer-certificate-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rehandshake-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rehandshake-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::require-close-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-close-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-system-certdb", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-system-certdb", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TlsClientConnection_ConstructProps)
    _init (config?: TlsClientConnection_ConstructProps): void
    static $gtype: GObject.Type
}
interface TlsFileDatabase_ConstructProps extends TlsDatabase_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.TlsFileDatabase */
    anchors?: string
}
class TlsFileDatabase {
    /* Properties of Gio-2.0.Gio.TlsFileDatabase */
    anchors: string
    /* Fields of Gio-2.0.Gio.TlsDatabase */
    readonly parentInstance: GObject.Object
    readonly priv: TlsDatabasePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.TlsDatabase */
    createCertificateHandle(certificate: TlsCertificate): string | null
    lookupCertificateForHandle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate | null
    lookupCertificateForHandleAsync(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificateForHandleFinish(result: AsyncResult): TlsCertificate
    lookupCertificateIssuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate
    lookupCertificateIssuerAsync(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificateIssuerFinish(result: AsyncResult): TlsCertificate
    lookupCertificatesIssuedBy(issuerRawDn: Uint8Array, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate[]
    lookupCertificatesIssuedByAsync(issuerRawDn: Uint8Array, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificatesIssuedByFinish(result: AsyncResult): TlsCertificate[]
    verifyChain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null): TlsCertificateFlags
    verifyChainAsync(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    verifyChainFinish(result: AsyncResult): TlsCertificateFlags
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
    connect(sigName: "notify::anchors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TlsFileDatabase_ConstructProps)
    _init (config?: TlsFileDatabase_ConstructProps): void
    static $gtype: GObject.Type
}
interface TlsServerConnection_ConstructProps extends TlsConnection_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.TlsServerConnection */
    authenticationMode?: TlsAuthenticationMode
}
class TlsServerConnection {
    /* Properties of Gio-2.0.Gio.TlsServerConnection */
    authenticationMode: TlsAuthenticationMode
    /* Properties of Gio-2.0.Gio.TlsConnection */
    advertisedProtocols: string[]
    certificate: TlsCertificate
    readonly ciphersuiteName: string
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiatedProtocol: string
    readonly peerCertificate: TlsCertificate
    readonly peerCertificateErrors: TlsCertificateFlags
    readonly protocolVersion: TlsProtocolVersion
    rehandshakeMode: TlsRehandshakeMode
    requireCloseNotify: boolean
    useSystemCertdb: boolean
    /* Properties of Gio-2.0.Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio-2.0.Gio.TlsConnection */
    readonly parentInstance: IOStream
    readonly priv: TlsConnectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.TlsConnection */
    emitAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    getCertificate(): TlsCertificate | null
    getChannelBindingData(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ Uint8Array | null ]
    getCiphersuiteName(): string | null
    getDatabase(): TlsDatabase | null
    getInteraction(): TlsInteraction | null
    getNegotiatedProtocol(): string | null
    getPeerCertificate(): TlsCertificate | null
    getPeerCertificateErrors(): TlsCertificateFlags
    getProtocolVersion(): TlsProtocolVersion
    getRehandshakeMode(): TlsRehandshakeMode
    getRequireCloseNotify(): boolean
    getUseSystemCertdb(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshakeFinish(result: AsyncResult): boolean
    setAdvertisedProtocols(protocols?: string[] | null): void
    setCertificate(certificate: TlsCertificate): void
    setDatabase(database?: TlsDatabase | null): void
    setInteraction(interaction?: TlsInteraction | null): void
    setRehandshakeMode(mode: TlsRehandshakeMode): void
    setRequireCloseNotify(requireCloseNotify: boolean): void
    setUseSystemCertdb(useSystemCertdb: boolean): void
    /* Methods of Gio-2.0.Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Signals of Gio-2.0.Gio.TlsConnection */
    connect(sigName: "accept-certificate", callback: ((peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    on(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "accept-certificate", peerCert: TlsCertificate, errors: TlsCertificateFlags): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authentication-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authentication-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authentication-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authentication-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authentication-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::advertised-protocols", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::advertised-protocols", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ciphersuite-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ciphersuite-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ciphersuite-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ciphersuite-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ciphersuite-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::database", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::negotiated-protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::peer-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::peer-certificate-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rehandshake-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rehandshake-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::require-close-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-close-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-system-certdb", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-system-certdb", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TlsServerConnection_ConstructProps)
    _init (config?: TlsServerConnection_ConstructProps): void
    static $gtype: GObject.Type
}
class Volume {
    /* Methods of Gio-2.0.Gio.Volume */
    canEject(): boolean
    canMount(): boolean
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectFinish(result: AsyncResult): boolean
    ejectWithOperation(flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ejectWithOperationFinish(result: AsyncResult): boolean
    enumerateIdentifiers(): string[]
    getActivationRoot(): File | null
    getDrive(): Drive | null
    getIcon(): Icon
    getIdentifier(kind: string): string | null
    getMount(): Mount | null
    getName(): string
    getSortKey(): string | null
    getSymbolicIcon(): Icon
    getUuid(): string | null
    mount(flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    mountFinish(result: AsyncResult): boolean
    shouldAutomount(): boolean
    /* Signals of Gio-2.0.Gio.Volume */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "removed", callback: (() => void)): number
    on(sigName: "removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "removed"): void
    static name: string
}
interface AppInfoMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
class AppInfoMonitor {
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
    /* Signals of Gio-2.0.Gio.AppInfoMonitor */
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AppInfoMonitor_ConstructProps)
    _init (config?: AppInfoMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): AppInfoMonitor
    static $gtype: GObject.Type
}
interface AppLaunchContext_ConstructProps extends GObject.Object_ConstructProps {
}
class AppLaunchContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.AppLaunchContext */
    getDisplay(info: AppInfo, files: File[]): string | null
    getEnvironment(): string[]
    getStartupNotifyId(info: AppInfo, files: File[]): string | null
    launchFailed(startupNotifyId: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
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
    /* Signals of Gio-2.0.Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: ((startupNotifyId: string) => void)): number
    on(sigName: "launch-failed", callback: (startupNotifyId: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "launch-failed", callback: (startupNotifyId: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "launch-failed", callback: (startupNotifyId: string) => void): NodeJS.EventEmitter
    emit(sigName: "launch-failed", startupNotifyId: string): void
    connect(sigName: "launch-started", callback: ((info: AppInfo, platformData?: GLib.Variant | null) => void)): number
    on(sigName: "launch-started", callback: (info: AppInfo, platformData?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "launch-started", callback: (info: AppInfo, platformData?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "launch-started", callback: (info: AppInfo, platformData?: GLib.Variant | null) => void): NodeJS.EventEmitter
    emit(sigName: "launch-started", info: AppInfo, platformData?: GLib.Variant | null): void
    connect(sigName: "launched", callback: ((info: AppInfo, platformData: GLib.Variant) => void)): number
    on(sigName: "launched", callback: (info: AppInfo, platformData: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "launched", callback: (info: AppInfo, platformData: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "launched", callback: (info: AppInfo, platformData: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "launched", info: AppInfo, platformData: GLib.Variant): void
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
    constructor (config?: AppLaunchContext_ConstructProps)
    _init (config?: AppLaunchContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AppLaunchContext
    static $gtype: GObject.Type
}
interface Application_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.Application */
    actionGroup?: ActionGroup
    applicationId?: string
    flags?: ApplicationFlags
    inactivityTimeout?: number
    resourceBasePath?: string
}
class Application {
    /* Properties of Gio-2.0.Gio.Application */
    actionGroup: ActionGroup
    applicationId: string
    flags: ApplicationFlags
    inactivityTimeout: number
    readonly isBusy: boolean
    readonly isRegistered: boolean
    readonly isRemote: boolean
    resourceBasePath: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Application */
    activate(): void
    addMainOption(longName: string, shortName: number, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, argDescription?: string | null): void
    addMainOptionEntries(entries: GLib.OptionEntry[]): void
    addOptionGroup(group: GLib.OptionGroup): void
    bindBusyProperty(object: GObject.Object, property: string): void
    getApplicationId(): string | null
    getDbusConnection(): DBusConnection | null
    getDbusObjectPath(): string | null
    getFlags(): ApplicationFlags
    getInactivityTimeout(): number
    getIsBusy(): boolean
    getIsRegistered(): boolean
    getIsRemote(): boolean
    getResourceBasePath(): string | null
    hold(): void
    markBusy(): void
    open(files: File[], hint: string): void
    quit(): void
    register(cancellable?: Cancellable | null): boolean
    release(): void
    run(argv?: string[] | null): number
    sendNotification(id: string | null, notification: Notification): void
    setActionGroup(actionGroup?: ActionGroup | null): void
    setApplicationId(applicationId?: string | null): void
    setDefault(): void
    setFlags(flags: ApplicationFlags): void
    setInactivityTimeout(inactivityTimeout: number): void
    setOptionContextDescription(description?: string | null): void
    setOptionContextParameterString(parameterString?: string | null): void
    setOptionContextSummary(summary?: string | null): void
    setResourceBasePath(resourcePath?: string | null): void
    unbindBusyProperty(object: GObject.Object, property: string): void
    unmarkBusy(): void
    withdrawNotification(id: string): void
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
    /* Signals of Gio-2.0.Gio.Application */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "command-line", callback: ((commandLine: ApplicationCommandLine) => number)): number
    on(sigName: "command-line", callback: (commandLine: ApplicationCommandLine) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "command-line", callback: (commandLine: ApplicationCommandLine) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "command-line", callback: (commandLine: ApplicationCommandLine) => void): NodeJS.EventEmitter
    emit(sigName: "command-line", commandLine: ApplicationCommandLine): void
    connect(sigName: "handle-local-options", callback: ((options: GLib.VariantDict) => number)): number
    on(sigName: "handle-local-options", callback: (options: GLib.VariantDict) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-local-options", callback: (options: GLib.VariantDict) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-local-options", callback: (options: GLib.VariantDict) => void): NodeJS.EventEmitter
    emit(sigName: "handle-local-options", options: GLib.VariantDict): void
    connect(sigName: "name-lost", callback: (() => boolean)): number
    on(sigName: "name-lost", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-lost", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-lost", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "name-lost"): void
    connect(sigName: "open", callback: ((files: File[], hint: string) => void)): number
    on(sigName: "open", callback: (files: File[], hint: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open", callback: (files: File[], hint: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open", callback: (files: File[], hint: string) => void): NodeJS.EventEmitter
    emit(sigName: "open", files: File[], hint: string): void
    connect(sigName: "shutdown", callback: (() => void)): number
    on(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "shutdown"): void
    connect(sigName: "startup", callback: (() => void)): number
    on(sigName: "startup", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "startup", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "startup", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "startup"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::action-group", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inactivity-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-registered", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-remote", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-base-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(applicationId: string | null, flags: ApplicationFlags): Application
    static getDefault(): Application | null
    static idIsValid(applicationId: string): boolean
    static $gtype: GObject.Type
}
interface ApplicationCommandLine_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.ApplicationCommandLine */
    "arguments"?: GLib.Variant
    options?: GLib.Variant
    platformData?: GLib.Variant
}
class ApplicationCommandLine {
    /* Properties of Gio-2.0.Gio.ApplicationCommandLine */
    readonly isRemote: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.ApplicationCommandLine */
    createFileForArg(arg: string): File
    getArguments(): string[]
    getCwd(): string | null
    getEnviron(): string[]
    getExitStatus(): number
    getIsRemote(): boolean
    getOptionsDict(): GLib.VariantDict
    getPlatformData(): GLib.Variant | null
    getStdin(): InputStream | null
    getenv(name: string): string | null
    setExitStatus(exitStatus: number): void
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
    connect(sigName: "notify::is-remote", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ApplicationCommandLine_ConstructProps)
    _init (config?: ApplicationCommandLine_ConstructProps): void
    static $gtype: GObject.Type
}
interface BufferedInputStream_ConstructProps extends FilterInputStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.BufferedInputStream */
    bufferSize?: number
}
class BufferedInputStream {
    /* Properties of Gio-2.0.Gio.BufferedInputStream */
    bufferSize: number
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    readonly parentInstance: InputStream
    readonly baseStream: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.BufferedInputStream */
    fill(count: number, cancellable?: Cancellable | null): number
    fillAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    fillFinish(result: AsyncResult): number
    getAvailable(): number
    getBufferSize(): number
    peek(buffer: Uint8Array, offset: number): number
    peekBuffer(): Uint8Array
    readByte(cancellable?: Cancellable | null): number
    setBufferSize(size: number): void
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    getBaseStream(): InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::buffer-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BufferedInputStream_ConstructProps)
    _init (config?: BufferedInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseStream: InputStream): BufferedInputStream
    static newSized(baseStream: InputStream, size: number): BufferedInputStream
    static $gtype: GObject.Type
}
interface BufferedOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.BufferedOutputStream */
    autoGrow?: boolean
    bufferSize?: number
}
class BufferedOutputStream {
    /* Properties of Gio-2.0.Gio.BufferedOutputStream */
    autoGrow: boolean
    bufferSize: number
    /* Fields of Gio-2.0.Gio.FilterOutputStream */
    readonly parentInstance: OutputStream
    readonly baseStream: OutputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.BufferedOutputStream */
    getAutoGrow(): boolean
    getBufferSize(): number
    setAutoGrow(autoGrow: boolean): void
    setBufferSize(size: number): void
    /* Methods of Gio-2.0.Gio.FilterOutputStream */
    getBaseStream(): OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Cancellable | null): number
    writeAll(buffer: Uint8Array, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-grow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-grow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-grow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-grow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-grow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BufferedOutputStream_ConstructProps)
    _init (config?: BufferedOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseStream: OutputStream): BufferedOutputStream
    static newSized(baseStream: OutputStream, size: number): BufferedOutputStream
    static $gtype: GObject.Type
}
interface BytesIcon_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.BytesIcon */
    bytes?: any
}
class BytesIcon {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.BytesIcon */
    getBytes(): any
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
    /* Methods of Gio-2.0.Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    toString(): string | null
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    loadAsync(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadFinish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
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
    constructor (config?: BytesIcon_ConstructProps)
    _init (config?: BytesIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bytes: any): BytesIcon
    static deserialize(value: GLib.Variant): Icon | null
    static hash(icon: object): number
    static newForString(str: string): Icon
    static $gtype: GObject.Type
}
interface Cancellable_ConstructProps extends GObject.Object_ConstructProps {
}
class Cancellable {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Cancellable */
    cancel(): void
    connect(callback: GObject.Callback): number
    disconnect(handlerId: number): void
    getFd(): number
    isCancelled(): boolean
    makePollfd(pollfd: GLib.PollFD): boolean
    popCurrent(): void
    pushCurrent(): void
    releaseFd(): void
    reset(): void
    setErrorIfCancelled(): boolean
    sourceNew(): GLib.Source
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
    /* Signals of Gio-2.0.Gio.Cancellable */
    connect(sigName: "cancelled", callback: (() => void)): number
    on(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cancelled"): void
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
    constructor (config?: Cancellable_ConstructProps)
    _init (config?: Cancellable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Cancellable
    static getCurrent(): Cancellable | null
    static $gtype: GObject.Type
}
interface CharsetConverter_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.CharsetConverter */
    fromCharset?: string
    toCharset?: string
    useFallback?: boolean
}
class CharsetConverter {
    /* Properties of Gio-2.0.Gio.CharsetConverter */
    useFallback: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.CharsetConverter */
    getNumFallbacks(): number
    getUseFallback(): boolean
    setUseFallback(useFallback: boolean): void
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
    /* Methods of Gio-2.0.Gio.Converter */
    convert(inbuf: Uint8Array, outbuf: Uint8Array, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    reset(): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::use-fallback", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-fallback", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CharsetConverter_ConstructProps)
    _init (config?: CharsetConverter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(toCharset: string, fromCharset: string): CharsetConverter
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ConverterInputStream_ConstructProps extends FilterInputStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.ConverterInputStream */
    converter?: Converter
}
class ConverterInputStream {
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    readonly parentInstance: InputStream
    readonly baseStream: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.ConverterInputStream */
    getConverter(): Converter
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    getBaseStream(): InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Methods of Gio-2.0.Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ConverterInputStream_ConstructProps)
    _init (config?: ConverterInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseStream: InputStream, converter: Converter): ConverterInputStream
    static $gtype: GObject.Type
}
interface ConverterOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.ConverterOutputStream */
    converter?: Converter
}
class ConverterOutputStream {
    /* Fields of Gio-2.0.Gio.FilterOutputStream */
    readonly parentInstance: OutputStream
    readonly baseStream: OutputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.ConverterOutputStream */
    getConverter(): Converter
    /* Methods of Gio-2.0.Gio.FilterOutputStream */
    getBaseStream(): OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Cancellable | null): number
    writeAll(buffer: Uint8Array, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Methods of Gio-2.0.Gio.PollableOutputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isWritable(): boolean
    writeNonblocking(buffer: Uint8Array, cancellable?: Cancellable | null): number
    writevNonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
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
    constructor (config?: ConverterOutputStream_ConstructProps)
    _init (config?: ConverterOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseStream: OutputStream, converter: Converter): ConverterOutputStream
    static $gtype: GObject.Type
}
interface Credentials_ConstructProps extends GObject.Object_ConstructProps {
}
class Credentials {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Credentials */
    getUnixPid(): number
    getUnixUser(): number
    isSameUser(otherCredentials: Credentials): boolean
    setNative(nativeType: CredentialsType, native: object): void
    setUnixUser(uid: number): boolean
    toString(): string
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
interface DBusActionGroup_ConstructProps extends GObject.Object_ConstructProps {
}
class DBusActionGroup {
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
    /* Methods of Gio-2.0.Gio.ActionGroup */
    actionAdded(actionName: string): void
    actionEnabledChanged(actionName: string, enabled: boolean): void
    actionRemoved(actionName: string): void
    actionStateChanged(actionName: string, state: GLib.Variant): void
    activateAction(actionName: string, parameter?: GLib.Variant | null): void
    changeActionState(actionName: string, value: GLib.Variant): void
    getActionEnabled(actionName: string): boolean
    getActionParameterType(actionName: string): GLib.VariantType | null
    getActionState(actionName: string): GLib.Variant | null
    getActionStateHint(actionName: string): GLib.Variant | null
    getActionStateType(actionName: string): GLib.VariantType | null
    hasAction(actionName: string): boolean
    listActions(): string[]
    queryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio-2.0.Gio.RemoteActionGroup */
    activateActionFull(actionName: string, parameter: GLib.Variant | null, platformData: GLib.Variant): void
    changeActionStateFull(actionName: string, value: GLib.Variant, platformData: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.ActionGroup */
    connect(sigName: "action-added", callback: ((actionName: string) => void)): number
    on(sigName: "action-added", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-added", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-added", callback: (actionName: string) => void): NodeJS.EventEmitter
    emit(sigName: "action-added", actionName: string): void
    connect(sigName: "action-enabled-changed", callback: ((actionName: string, enabled: boolean) => void)): number
    on(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "action-enabled-changed", actionName: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: ((actionName: string) => void)): number
    on(sigName: "action-removed", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-removed", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-removed", callback: (actionName: string) => void): NodeJS.EventEmitter
    emit(sigName: "action-removed", actionName: string): void
    connect(sigName: "action-state-changed", callback: ((actionName: string, value: GLib.Variant) => void)): number
    on(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "action-state-changed", actionName: string, value: GLib.Variant): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusActionGroup_ConstructProps)
    _init (config?: DBusActionGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(connection: DBusConnection, busName: string | null, objectPath: string): DBusActionGroup
    static $gtype: GObject.Type
}
interface DBusAuthObserver_ConstructProps extends GObject.Object_ConstructProps {
}
class DBusAuthObserver {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusAuthObserver */
    allowMechanism(mechanism: string): boolean
    authorizeAuthenticatedPeer(stream: IOStream, credentials?: Credentials | null): boolean
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
    /* Signals of Gio-2.0.Gio.DBusAuthObserver */
    connect(sigName: "allow-mechanism", callback: ((mechanism: string) => boolean)): number
    on(sigName: "allow-mechanism", callback: (mechanism: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "allow-mechanism", callback: (mechanism: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "allow-mechanism", callback: (mechanism: string) => void): NodeJS.EventEmitter
    emit(sigName: "allow-mechanism", mechanism: string): void
    connect(sigName: "authorize-authenticated-peer", callback: ((stream: IOStream, credentials?: Credentials | null) => boolean)): number
    on(sigName: "authorize-authenticated-peer", callback: (stream: IOStream, credentials?: Credentials | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authorize-authenticated-peer", callback: (stream: IOStream, credentials?: Credentials | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authorize-authenticated-peer", callback: (stream: IOStream, credentials?: Credentials | null) => void): NodeJS.EventEmitter
    emit(sigName: "authorize-authenticated-peer", stream: IOStream, credentials?: Credentials | null): void
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
    constructor (config?: DBusAuthObserver_ConstructProps)
    _init (config?: DBusAuthObserver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DBusAuthObserver
    static $gtype: GObject.Type
}
interface DBusConnection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.DBusConnection */
    address?: string
    authenticationObserver?: DBusAuthObserver
    exitOnClose?: boolean
    flags?: DBusConnectionFlags
    guid?: string
    stream?: IOStream
}
class DBusConnection {
    /* Properties of Gio-2.0.Gio.DBusConnection */
    readonly capabilities: DBusCapabilityFlags
    readonly closed: boolean
    exitOnClose: boolean
    readonly uniqueName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusConnection */
    addFilter(filterFunction: DBusMessageFilterFunction): number
    call(busName: string | null, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant | null, replyType: GLib.VariantType | null, flags: DBusCallFlags, timeoutMsec: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    callFinish(res: AsyncResult): GLib.Variant
    callSync(busName: string | null, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant | null, replyType: GLib.VariantType | null, flags: DBusCallFlags, timeoutMsec: number, cancellable?: Cancellable | null): GLib.Variant
    callWithUnixFdList(busName: string | null, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant | null, replyType: GLib.VariantType | null, flags: DBusCallFlags, timeoutMsec: number, fdList?: UnixFDList | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ UnixFDList | null ]
    callWithUnixFdListSync(busName: string | null, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant | null, replyType: GLib.VariantType | null, flags: DBusCallFlags, timeoutMsec: number, fdList?: UnixFDList | null, cancellable?: Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ UnixFDList | null ]
    close(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(res: AsyncResult): boolean
    closeSync(cancellable?: Cancellable | null): boolean
    emitSignal(destinationBusName: string | null, objectPath: string, interfaceName: string, signalName: string, parameters?: GLib.Variant | null): boolean
    exportActionGroup(objectPath: string, actionGroup: ActionGroup): number
    exportMenuModel(objectPath: string, menu: MenuModel): number
    flush(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(res: AsyncResult): boolean
    flushSync(cancellable?: Cancellable | null): boolean
    getCapabilities(): DBusCapabilityFlags
    getExitOnClose(): boolean
    getFlags(): DBusConnectionFlags
    getGuid(): string
    getLastSerial(): number
    getPeerCredentials(): Credentials | null
    getStream(): IOStream
    getUniqueName(): string | null
    isClosed(): boolean
    registerObject(objectPath: string, interfaceInfo: DBusInterfaceInfo, methodCallClosure?: Function | null, getPropertyClosure?: Function | null, setPropertyClosure?: Function | null): number
    registerSubtree(objectPath: string, vtable: DBusSubtreeVTable, flags: DBusSubtreeFlags, userData: object | null, userDataFreeFunc: GLib.DestroyNotify): number
    removeFilter(filterId: number): void
    sendMessage(message: DBusMessage, flags: DBusSendMessageFlags): [ /* returnType */ boolean, /* outSerial */ number | null ]
    sendMessageWithReply(message: DBusMessage, flags: DBusSendMessageFlags, timeoutMsec: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* outSerial */ number | null
    sendMessageWithReplyFinish(res: AsyncResult): DBusMessage
    sendMessageWithReplySync(message: DBusMessage, flags: DBusSendMessageFlags, timeoutMsec: number, cancellable?: Cancellable | null): [ /* returnType */ DBusMessage, /* outSerial */ number | null ]
    setExitOnClose(exitOnClose: boolean): void
    signalSubscribe(sender: string | null, interfaceName: string | null, member: string | null, objectPath: string | null, arg0: string | null, flags: DBusSignalFlags, callback: DBusSignalCallback): number
    signalUnsubscribe(subscriptionId: number): void
    startMessageProcessing(): void
    unexportActionGroup(exportId: number): void
    unexportMenuModel(exportId: number): void
    unregisterObject(registrationId: number): boolean
    unregisterSubtree(registrationId: number): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    initFinish(res: AsyncResult): boolean
    newFinish(res: AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusConnection */
    connect(sigName: "closed", callback: ((remotePeerVanished: boolean, error?: GLib.Error | null) => void)): number
    on(sigName: "closed", callback: (remotePeerVanished: boolean, error?: GLib.Error | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: (remotePeerVanished: boolean, error?: GLib.Error | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: (remotePeerVanished: boolean, error?: GLib.Error | null) => void): NodeJS.EventEmitter
    emit(sigName: "closed", remotePeerVanished: boolean, error?: GLib.Error | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::exit-on-close", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exit-on-close", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exit-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exit-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exit-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unique-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unique-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unique-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unique-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusConnection_ConstructProps)
    _init (config?: DBusConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: AsyncResult): DBusConnection
    static newForAddressFinish(res: AsyncResult): DBusConnection
    static newForAddressSync(address: string, flags: DBusConnectionFlags, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null): DBusConnection
    static newSync(stream: IOStream, guid: string | null, flags: DBusConnectionFlags, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null): DBusConnection
    static newForAddress(address: string, flags: DBusConnectionFlags, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DBusInterfaceSkeleton_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags?: DBusInterfaceSkeletonFlags
}
class DBusInterfaceSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): DBusConnection | null
    getConnections(): DBusConnection[]
    getFlags(): DBusInterfaceSkeletonFlags
    getInfo(): DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: DBusConnection): boolean
    setFlags(flags: DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: DBusConnection): void
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
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusInterfaceSkeleton_ConstructProps)
    _init (config?: DBusInterfaceSkeleton_ConstructProps): void
    static $gtype: GObject.Type
}
interface DBusMenuModel_ConstructProps extends MenuModel_ConstructProps {
}
class DBusMenuModel {
    /* Fields of Gio-2.0.Gio.MenuModel */
    readonly parentInstance: GObject.Object
    readonly priv: MenuModelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.MenuModel */
    getItemAttributeValue(itemIndex: number, attribute: string, expectedType?: GLib.VariantType | null): GLib.Variant | null
    getItemLink(itemIndex: number, link: string): MenuModel | null
    getNItems(): number
    isMutable(): boolean
    itemsChanged(position: number, removed: number, added: number): void
    iterateItemAttributes(itemIndex: number): MenuAttributeIter
    iterateItemLinks(itemIndex: number): MenuLinkIter
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
    /* Signals of Gio-2.0.Gio.MenuModel */
    connect(sigName: "items-changed", callback: ((position: number, removed: number, added: number) => void)): number
    on(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void): NodeJS.EventEmitter
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
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
    constructor (config?: DBusMenuModel_ConstructProps)
    _init (config?: DBusMenuModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(connection: DBusConnection, busName: string | null, objectPath: string): DBusMenuModel
    static $gtype: GObject.Type
}
interface DBusMessage_ConstructProps extends GObject.Object_ConstructProps {
}
class DBusMessage {
    /* Properties of Gio-2.0.Gio.DBusMessage */
    readonly locked: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusMessage */
    copy(): DBusMessage
    getArg0(): string | null
    getBody(): GLib.Variant | null
    getByteOrder(): DBusMessageByteOrder
    getDestination(): string | null
    getErrorName(): string | null
    getFlags(): DBusMessageFlags
    getHeader(headerField: DBusMessageHeaderField): GLib.Variant | null
    getHeaderFields(): Uint8Array
    getInterface(): string | null
    getLocked(): boolean
    getMember(): string | null
    getMessageType(): DBusMessageType
    getNumUnixFds(): number
    getPath(): string | null
    getReplySerial(): number
    getSender(): string | null
    getSerial(): number
    getSignature(): string
    getUnixFdList(): UnixFDList | null
    lock(): void
    newMethodErrorLiteral(errorName: string, errorMessage: string): DBusMessage
    newMethodReply(): DBusMessage
    print(indent: number): string
    setBody(body: GLib.Variant): void
    setByteOrder(byteOrder: DBusMessageByteOrder): void
    setDestination(value?: string | null): void
    setErrorName(value: string): void
    setFlags(flags: DBusMessageFlags): void
    setHeader(headerField: DBusMessageHeaderField, value?: GLib.Variant | null): void
    setInterface(value?: string | null): void
    setMember(value?: string | null): void
    setMessageType(type: DBusMessageType): void
    setNumUnixFds(value: number): void
    setPath(value?: string | null): void
    setReplySerial(value: number): void
    setSender(value?: string | null): void
    setSerial(serial: number): void
    setSignature(value?: string | null): void
    setUnixFdList(fdList?: UnixFDList | null): void
    toBlob(capabilities: DBusCapabilityFlags): Uint8Array
    toGerror(): boolean
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
    connect(sigName: "notify::locked", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusMessage_ConstructProps)
    _init (config?: DBusMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DBusMessage
    static newFromBlob(blob: Uint8Array, capabilities: DBusCapabilityFlags): DBusMessage
    static newMethodCall(name: string | null, path: string, interface: string | null, method: string): DBusMessage
    static newSignal(path: string, interface: string, signal: string): DBusMessage
    static bytesNeeded(blob: Uint8Array): number
    static $gtype: GObject.Type
}
interface DBusMethodInvocation_ConstructProps extends GObject.Object_ConstructProps {
}
class DBusMethodInvocation {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusMethodInvocation */
    getConnection(): DBusConnection
    getInterfaceName(): string
    getMessage(): DBusMessage
    getMethodInfo(): DBusMethodInfo | null
    getMethodName(): string
    getObjectPath(): string
    getParameters(): GLib.Variant
    getPropertyInfo(): DBusPropertyInfo | null
    getSender(): string
    returnDbusError(errorName: string, errorMessage: string): void
    returnErrorLiteral(domain: GLib.Quark, code: number, message: string): void
    returnGerror(error: GLib.Error): void
    returnValue(parameters?: GLib.Variant | null): void
    returnValueWithUnixFdList(parameters?: GLib.Variant | null, fdList?: UnixFDList | null): void
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
    constructor (config?: DBusMethodInvocation_ConstructProps)
    _init (config?: DBusMethodInvocation_ConstructProps): void
    static $gtype: GObject.Type
}
interface DBusObjectManagerClient_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.DBusObjectManagerClient */
    busType?: BusType
    connection?: DBusConnection
    flags?: DBusObjectManagerClientFlags
    getProxyTypeDestroyNotify?: object
    getProxyTypeFunc?: object
    getProxyTypeUserData?: object
    name?: string
    objectPath?: string
}
class DBusObjectManagerClient {
    /* Properties of Gio-2.0.Gio.DBusObjectManagerClient */
    readonly nameOwner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusObjectManagerClient */
    getConnection(): DBusConnection
    getFlags(): DBusObjectManagerClientFlags
    getName(): string
    getNameOwner(): string | null
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    initFinish(res: AsyncResult): boolean
    newFinish(res: AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusObjectManager */
    getInterface(objectPath: string, interfaceName: string): DBusInterface | null
    getObject(objectPath: string): DBusObject | null
    getObjectPath(): string
    getObjects(): DBusObject[]
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: ((objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "interface-proxy-properties-changed", callback: (objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-proxy-properties-changed", callback: (objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-proxy-properties-changed", callback: (objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "interface-proxy-properties-changed", objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "interface-proxy-signal", callback: ((objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "interface-proxy-signal", callback: (objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-proxy-signal", callback: (objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-proxy-signal", callback: (objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "interface-proxy-signal", objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: ((object: DBusObject, interface: DBusInterface) => void)): number
    on(sigName: "interface-added", callback: (object: DBusObject, interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (object: DBusObject, interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (object: DBusObject, interface: DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-added", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: ((object: DBusObject, interface: DBusInterface) => void)): number
    on(sigName: "interface-removed", callback: (object: DBusObject, interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (object: DBusObject, interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (object: DBusObject, interface: DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-removed", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "object-added", callback: ((object: DBusObject) => void)): number
    on(sigName: "object-added", callback: (object: DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-added", callback: (object: DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-added", callback: (object: DBusObject) => void): NodeJS.EventEmitter
    emit(sigName: "object-added", object: DBusObject): void
    connect(sigName: "object-removed", callback: ((object: DBusObject) => void)): number
    on(sigName: "object-removed", callback: (object: DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-removed", callback: (object: DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-removed", callback: (object: DBusObject) => void): NodeJS.EventEmitter
    emit(sigName: "object-removed", object: DBusObject): void
    connect(sigName: "notify::name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusObjectManagerClient_ConstructProps)
    _init (config?: DBusObjectManagerClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: AsyncResult): DBusObjectManagerClient
    static newForBusFinish(res: AsyncResult): DBusObjectManagerClient
    static newForBusSync(busType: BusType, flags: DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc?: DBusProxyTypeFunc | null, cancellable?: Cancellable | null): DBusObjectManagerClient
    static newSync(connection: DBusConnection, flags: DBusObjectManagerClientFlags, name: string | null, objectPath: string, getProxyTypeFunc?: DBusProxyTypeFunc | null, cancellable?: Cancellable | null): DBusObjectManagerClient
    static newForBus(busType: BusType, flags: DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc?: DBusProxyTypeFunc | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DBusObjectManagerServer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.DBusObjectManagerServer */
    connection?: DBusConnection
    objectPath?: string
}
class DBusObjectManagerServer {
    /* Properties of Gio-2.0.Gio.DBusObjectManagerServer */
    connection: DBusConnection
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusObjectManagerServer */
    export(object: DBusObjectSkeleton): void
    exportUniquely(object: DBusObjectSkeleton): void
    getConnection(): DBusConnection | null
    isExported(object: DBusObjectSkeleton): boolean
    setConnection(connection?: DBusConnection | null): void
    unexport(objectPath: string): boolean
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
    /* Methods of Gio-2.0.Gio.DBusObjectManager */
    getInterface(objectPath: string, interfaceName: string): DBusInterface | null
    getObject(objectPath: string): DBusObject | null
    getObjectPath(): string
    getObjects(): DBusObject[]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: ((object: DBusObject, interface: DBusInterface) => void)): number
    on(sigName: "interface-added", callback: (object: DBusObject, interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (object: DBusObject, interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (object: DBusObject, interface: DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-added", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: ((object: DBusObject, interface: DBusInterface) => void)): number
    on(sigName: "interface-removed", callback: (object: DBusObject, interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (object: DBusObject, interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (object: DBusObject, interface: DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-removed", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "object-added", callback: ((object: DBusObject) => void)): number
    on(sigName: "object-added", callback: (object: DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-added", callback: (object: DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-added", callback: (object: DBusObject) => void): NodeJS.EventEmitter
    emit(sigName: "object-added", object: DBusObject): void
    connect(sigName: "object-removed", callback: ((object: DBusObject) => void)): number
    on(sigName: "object-removed", callback: (object: DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-removed", callback: (object: DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-removed", callback: (object: DBusObject) => void): NodeJS.EventEmitter
    emit(sigName: "object-removed", object: DBusObject): void
    connect(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusObjectManagerServer_ConstructProps)
    _init (config?: DBusObjectManagerServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(objectPath: string): DBusObjectManagerServer
    static $gtype: GObject.Type
}
interface DBusObjectProxy_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.DBusObjectProxy */
    gConnection?: DBusConnection
    gObjectPath?: string
}
class DBusObjectProxy {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusObjectProxy */
    getConnection(): DBusConnection
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
    /* Methods of Gio-2.0.Gio.DBusObject */
    getInterface(interfaceName: string): DBusInterface | null
    getInterfaces(): DBusInterface[]
    getObjectPath(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: ((interface: DBusInterface) => void)): number
    on(sigName: "interface-added", callback: (interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (interface: DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-added", interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: ((interface: DBusInterface) => void)): number
    on(sigName: "interface-removed", callback: (interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (interface: DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-removed", interface: DBusInterface): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusObjectProxy_ConstructProps)
    _init (config?: DBusObjectProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusConnection, objectPath: string): DBusObjectProxy
    static $gtype: GObject.Type
}
interface DBusObjectSkeleton_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.DBusObjectSkeleton */
    gObjectPath?: string
}
class DBusObjectSkeleton {
    /* Properties of Gio-2.0.Gio.DBusObjectSkeleton */
    gObjectPath: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusObjectSkeleton */
    addInterface(interface: DBusInterfaceSkeleton): void
    flush(): void
    removeInterface(interface: DBusInterfaceSkeleton): void
    removeInterfaceByName(interfaceName: string): void
    setObjectPath(objectPath: string): void
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
    /* Methods of Gio-2.0.Gio.DBusObject */
    getInterface(interfaceName: string): DBusInterface | null
    getInterfaces(): DBusInterface[]
    getObjectPath(): string
    /* Signals of Gio-2.0.Gio.DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: ((interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean)): number
    on(sigName: "authorize-method", callback: (interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authorize-method", callback: (interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authorize-method", callback: (interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "authorize-method", interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: ((interface: DBusInterface) => void)): number
    on(sigName: "interface-added", callback: (interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (interface: DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-added", interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: ((interface: DBusInterface) => void)): number
    on(sigName: "interface-removed", callback: (interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (interface: DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (interface: DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-removed", interface: DBusInterface): void
    connect(sigName: "notify::g-object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusObjectSkeleton_ConstructProps)
    _init (config?: DBusObjectSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(objectPath: string): DBusObjectSkeleton
    static $gtype: GObject.Type
}
interface DBusProxy_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.DBusProxy */
    gBusType?: BusType
    gConnection?: DBusConnection
    gDefaultTimeout?: number
    gFlags?: DBusProxyFlags
    gInterfaceInfo?: DBusInterfaceInfo
    gInterfaceName?: string
    gName?: string
    gObjectPath?: string
}
class DBusProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeoutMsec: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    callFinish(res: AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeoutMsec: number, cancellable?: Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeoutMsec: number, fdList?: UnixFDList | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeoutMsec: number, fdList?: UnixFDList | null, cancellable?: Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): DBusConnection
    getDefaultTimeout(): number
    getFlags(): DBusProxyFlags
    getInterfaceInfo(): DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: DBusInterfaceInfo | null): void
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
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusProxy_ConstructProps)
    _init (config?: DBusProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: AsyncResult): DBusProxy
    static newForBusFinish(res: AsyncResult): DBusProxy
    static newForBusSync(busType: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Cancellable | null): DBusProxy
    static newSync(connection: DBusConnection, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Cancellable | null): DBusProxy
    static newForBus(busType: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
interface DBusServer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.DBusServer */
    address?: string
    authenticationObserver?: DBusAuthObserver
    flags?: DBusServerFlags
    guid?: string
}
class DBusServer {
    /* Properties of Gio-2.0.Gio.DBusServer */
    readonly active: boolean
    readonly clientAddress: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusServer */
    getClientAddress(): string
    getFlags(): DBusServerFlags
    getGuid(): string
    isActive(): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusServer */
    connect(sigName: "new-connection", callback: ((connection: DBusConnection) => boolean)): number
    on(sigName: "new-connection", callback: (connection: DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-connection", callback: (connection: DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-connection", callback: (connection: DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "new-connection", connection: DBusConnection): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DBusServer_ConstructProps)
    _init (config?: DBusServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newSync(address: string, flags: DBusServerFlags, guid: string, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null): DBusServer
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DataInputStream_ConstructProps extends BufferedInputStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.DataInputStream */
    byteOrder?: DataStreamByteOrder
    newlineType?: DataStreamNewlineType
}
class DataInputStream {
    /* Properties of Gio-2.0.Gio.DataInputStream */
    byteOrder: DataStreamByteOrder
    newlineType: DataStreamNewlineType
    /* Properties of Gio-2.0.Gio.BufferedInputStream */
    bufferSize: number
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Gio-2.0.Gio.BufferedInputStream */
    readonly parentInstance: FilterInputStream
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    readonly baseStream: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DataInputStream */
    getByteOrder(): DataStreamByteOrder
    getNewlineType(): DataStreamNewlineType
    readByte(cancellable?: Cancellable | null): number
    readInt16(cancellable?: Cancellable | null): number
    readInt32(cancellable?: Cancellable | null): number
    readInt64(cancellable?: Cancellable | null): number
    readLine(cancellable?: Cancellable | null): [ /* returnType */ Uint8Array | null, /* length */ number | null ]
    readLineAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readLineFinish(result: AsyncResult): [ /* returnType */ Uint8Array | null, /* length */ number | null ]
    readLineFinishUtf8(result: AsyncResult): [ /* returnType */ string | null, /* length */ number | null ]
    readLineUtf8(cancellable?: Cancellable | null): [ /* returnType */ string | null, /* length */ number | null ]
    readUint16(cancellable?: Cancellable | null): number
    readUint32(cancellable?: Cancellable | null): number
    readUint64(cancellable?: Cancellable | null): number
    readUntil(stopChars: string, cancellable?: Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    readUntilAsync(stopChars: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readUntilFinish(result: AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    readUpto(stopChars: string, stopCharsLen: number, cancellable?: Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    readUptoAsync(stopChars: string, stopCharsLen: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readUptoFinish(result: AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    setByteOrder(order: DataStreamByteOrder): void
    setNewlineType(type: DataStreamNewlineType): void
    /* Methods of Gio-2.0.Gio.BufferedInputStream */
    fill(count: number, cancellable?: Cancellable | null): number
    fillAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    fillFinish(result: AsyncResult): number
    getAvailable(): number
    getBufferSize(): number
    peek(buffer: Uint8Array, offset: number): number
    peekBuffer(): Uint8Array
    readByte(cancellable?: Cancellable | null): number
    setBufferSize(size: number): void
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    getBaseStream(): InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::byte-order", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::newline-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataInputStream_ConstructProps)
    _init (config?: DataInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseStream: InputStream): DataInputStream
    /* Function overloads */
    static new(baseStream: InputStream): DataInputStream
    static $gtype: GObject.Type
}
interface DataOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.DataOutputStream */
    byteOrder?: DataStreamByteOrder
}
class DataOutputStream {
    /* Properties of Gio-2.0.Gio.DataOutputStream */
    byteOrder: DataStreamByteOrder
    /* Fields of Gio-2.0.Gio.FilterOutputStream */
    readonly parentInstance: OutputStream
    readonly baseStream: OutputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DataOutputStream */
    getByteOrder(): DataStreamByteOrder
    putByte(data: number, cancellable?: Cancellable | null): boolean
    putInt16(data: number, cancellable?: Cancellable | null): boolean
    putInt32(data: number, cancellable?: Cancellable | null): boolean
    putInt64(data: number, cancellable?: Cancellable | null): boolean
    putString(str: string, cancellable?: Cancellable | null): boolean
    putUint16(data: number, cancellable?: Cancellable | null): boolean
    putUint32(data: number, cancellable?: Cancellable | null): boolean
    putUint64(data: number, cancellable?: Cancellable | null): boolean
    setByteOrder(order: DataStreamByteOrder): void
    /* Methods of Gio-2.0.Gio.FilterOutputStream */
    getBaseStream(): OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Cancellable | null): number
    writeAll(buffer: Uint8Array, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::byte-order", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataOutputStream_ConstructProps)
    _init (config?: DataOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseStream: OutputStream): DataOutputStream
    static $gtype: GObject.Type
}
interface DesktopAppInfo_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.DesktopAppInfo */
    filename?: string
}
class DesktopAppInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DesktopAppInfo */
    getActionName(actionName: string): string
    getBoolean(key: string): boolean
    getCategories(): string | null
    getFilename(): string | null
    getGenericName(): string | null
    getIsHidden(): boolean
    getKeywords(): string[]
    getLocaleString(key: string): string | null
    getNodisplay(): boolean
    getShowIn(desktopEnv?: string | null): boolean
    getStartupWmClass(): string | null
    getString(key: string): string | null
    getStringList(key: string): string[]
    hasKey(key: string): boolean
    launchAction(actionName: string, launchContext?: AppLaunchContext | null): void
    launchUrisAsManager(uris: string[], launchContext: AppLaunchContext | null, spawnFlags: GLib.SpawnFlags): boolean
    launchUrisAsManagerWithFds(uris: string[], launchContext: AppLaunchContext | null, spawnFlags: GLib.SpawnFlags, stdinFd: number, stdoutFd: number, stderrFd: number): boolean
    listActions(): string[]
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
    /* Methods of Gio-2.0.Gio.AppInfo */
    addSupportsType(contentType: string): boolean
    canDelete(): boolean
    canRemoveSupportsType(): boolean
    delete(): boolean
    dup(): AppInfo
    equal(appinfo2: AppInfo): boolean
    getCommandline(): string | null
    getDescription(): string | null
    getDisplayName(): string
    getExecutable(): string
    getIcon(): Icon | null
    getId(): string | null
    getName(): string
    getSupportedTypes(): string[]
    launch(files?: File[] | null, context?: AppLaunchContext | null): boolean
    launchUris(uris?: string[] | null, context?: AppLaunchContext | null): boolean
    launchUrisAsync(uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    launchUrisFinish(result: AsyncResult): boolean
    removeSupportsType(contentType: string): boolean
    setAsDefaultForExtension(extension: string): boolean
    setAsDefaultForType(contentType: string): boolean
    setAsLastUsedForType(contentType: string): boolean
    shouldShow(): boolean
    supportsFiles(): boolean
    supportsUris(): boolean
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
    constructor (config?: DesktopAppInfo_ConstructProps)
    _init (config?: DesktopAppInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(desktopId: string): DesktopAppInfo
    static newFromFilename(filename: string): DesktopAppInfo
    static newFromKeyfile(keyFile: GLib.KeyFile): DesktopAppInfo
    static getImplementations(interface: string): DesktopAppInfo[]
    static search(searchString: string): string[]
    static setDesktopEnv(desktopEnv: string): void
    static createFromCommandline(commandline: string, applicationName: string | null, flags: AppInfoCreateFlags): AppInfo
    static getAll(): AppInfo[]
    static getAllForType(contentType: string): AppInfo[]
    static getDefaultForType(contentType: string, mustSupportUris: boolean): AppInfo | null
    static getDefaultForUriScheme(uriScheme: string): AppInfo | null
    static getFallbackForType(contentType: string): AppInfo[]
    static getRecommendedForType(contentType: string): AppInfo[]
    static launchDefaultForUri(uri: string, context?: AppLaunchContext | null): boolean
    static launchDefaultForUriAsync(uri: string, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static launchDefaultForUriFinish(result: AsyncResult): boolean
    static resetTypeAssociations(contentType: string): void
    static $gtype: GObject.Type
}
interface Emblem_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.Emblem */
    icon?: GObject.Object
    origin?: EmblemOrigin
}
class Emblem {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Emblem */
    getIcon(): Icon
    getOrigin(): EmblemOrigin
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
    /* Methods of Gio-2.0.Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    toString(): string | null
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
    constructor (config?: Emblem_ConstructProps)
    _init (config?: Emblem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(icon: Icon): Emblem
    static newWithOrigin(icon: Icon, origin: EmblemOrigin): Emblem
    static deserialize(value: GLib.Variant): Icon | null
    static hash(icon: object): number
    static newForString(str: string): Icon
    static $gtype: GObject.Type
}
interface EmblemedIcon_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.EmblemedIcon */
    gicon?: Icon
}
class EmblemedIcon {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.EmblemedIcon */
    addEmblem(emblem: Emblem): void
    clearEmblems(): void
    getEmblems(): Emblem[]
    getIcon(): Icon
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
    /* Methods of Gio-2.0.Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    toString(): string | null
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
    constructor (config?: EmblemedIcon_ConstructProps)
    _init (config?: EmblemedIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(icon: Icon, emblem?: Emblem | null): EmblemedIcon
    static deserialize(value: GLib.Variant): Icon | null
    static hash(icon: object): number
    static newForString(str: string): Icon
    static $gtype: GObject.Type
}
interface FileEnumerator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.FileEnumerator */
    container?: File
}
class FileEnumerator {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FileEnumerator */
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getChild(info: FileInfo): File
    getContainer(): File
    hasPending(): boolean
    isClosed(): boolean
    iterate(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* outInfo */ FileInfo | null, /* outChild */ File | null ]
    nextFile(cancellable?: Cancellable | null): FileInfo | null
    nextFilesAsync(numFiles: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    nextFilesFinish(result: AsyncResult): FileInfo[]
    setPending(pending: boolean): void
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
    constructor (config?: FileEnumerator_ConstructProps)
    _init (config?: FileEnumerator_ConstructProps): void
    static $gtype: GObject.Type
}
interface FileIOStream_ConstructProps extends IOStream_ConstructProps {
}
class FileIOStream {
    /* Properties of Gio-2.0.Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio-2.0.Gio.IOStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FileIOStream */
    getEtag(): string | null
    queryInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    queryInfoAsync(attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryInfoFinish(result: AsyncResult): FileInfo
    /* Methods of Gio-2.0.Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileIOStream_ConstructProps)
    _init (config?: FileIOStream_ConstructProps): void
    static $gtype: GObject.Type
}
interface FileIcon_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.FileIcon */
    file?: File
}
class FileIcon {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FileIcon */
    getFile(): File
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
    /* Methods of Gio-2.0.Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    toString(): string | null
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    loadAsync(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    loadFinish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
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
    constructor (config?: FileIcon_ConstructProps)
    _init (config?: FileIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: File): FileIcon
    static deserialize(value: GLib.Variant): Icon | null
    static hash(icon: object): number
    static newForString(str: string): Icon
    static $gtype: GObject.Type
}
interface FileInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class FileInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FileInfo */
    clearStatus(): void
    copyInto(destInfo: FileInfo): void
    dup(): FileInfo
    getAccessDateTime(): GLib.DateTime | null
    getAttributeAsString(attribute: string): string | null
    getAttributeBoolean(attribute: string): boolean
    getAttributeByteString(attribute: string): string | null
    getAttributeData(attribute: string): [ /* returnType */ boolean, /* type */ FileAttributeType | null, /* valuePp */ object | null, /* status */ FileAttributeStatus | null ]
    getAttributeInt32(attribute: string): number
    getAttributeInt64(attribute: string): number
    getAttributeObject(attribute: string): GObject.Object | null
    getAttributeStatus(attribute: string): FileAttributeStatus
    getAttributeString(attribute: string): string | null
    getAttributeStringv(attribute: string): string[] | null
    getAttributeType(attribute: string): FileAttributeType
    getAttributeUint32(attribute: string): number
    getAttributeUint64(attribute: string): number
    getContentType(): string | null
    getCreationDateTime(): GLib.DateTime | null
    getDeletionDate(): GLib.DateTime | null
    getDisplayName(): string
    getEditName(): string
    getEtag(): string | null
    getFileType(): FileType
    getIcon(): Icon | null
    getIsBackup(): boolean
    getIsHidden(): boolean
    getIsSymlink(): boolean
    getModificationDateTime(): GLib.DateTime | null
    getModificationTime(): /* result */ GLib.TimeVal
    getName(): string
    getSize(): number
    getSortOrder(): number
    getSymbolicIcon(): Icon | null
    getSymlinkTarget(): string | null
    hasAttribute(attribute: string): boolean
    hasNamespace(nameSpace: string): boolean
    listAttributes(nameSpace?: string | null): string[] | null
    removeAttribute(attribute: string): void
    setAccessDateTime(atime: GLib.DateTime): void
    setAttribute(attribute: string, type: FileAttributeType, valueP: object): void
    setAttributeBoolean(attribute: string, attrValue: boolean): void
    setAttributeByteString(attribute: string, attrValue: string): void
    setAttributeInt32(attribute: string, attrValue: number): void
    setAttributeInt64(attribute: string, attrValue: number): void
    setAttributeMask(mask: FileAttributeMatcher): void
    setAttributeObject(attribute: string, attrValue: GObject.Object): void
    setAttributeStatus(attribute: string, status: FileAttributeStatus): boolean
    setAttributeString(attribute: string, attrValue: string): void
    setAttributeStringv(attribute: string, attrValue: string[]): void
    setAttributeUint32(attribute: string, attrValue: number): void
    setAttributeUint64(attribute: string, attrValue: number): void
    setContentType(contentType: string): void
    setCreationDateTime(creationTime: GLib.DateTime): void
    setDisplayName(displayName: string): void
    setEditName(editName: string): void
    setFileType(type: FileType): void
    setIcon(icon: Icon): void
    setIsHidden(isHidden: boolean): void
    setIsSymlink(isSymlink: boolean): void
    setModificationDateTime(mtime: GLib.DateTime): void
    setModificationTime(mtime: GLib.TimeVal): void
    setName(name: string): void
    setSize(size: number): void
    setSortOrder(sortOrder: number): void
    setSymbolicIcon(icon: Icon): void
    setSymlinkTarget(symlinkTarget: string): void
    unsetAttributeMask(): void
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
    constructor (config?: FileInfo_ConstructProps)
    _init (config?: FileInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FileInfo
    static $gtype: GObject.Type
}
interface FileInputStream_ConstructProps extends InputStream_ConstructProps {
}
class FileInputStream {
    /* Fields of Gio-2.0.Gio.InputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FileInputStream */
    queryInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    queryInfoAsync(attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryInfoFinish(result: AsyncResult): FileInfo
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
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
    constructor (config?: FileInputStream_ConstructProps)
    _init (config?: FileInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
interface FileMonitor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.FileMonitor */
    rateLimit?: number
}
class FileMonitor {
    /* Properties of Gio-2.0.Gio.FileMonitor */
    readonly cancelled: boolean
    rateLimit: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FileMonitor */
    cancel(): boolean
    emitEvent(child: File, otherFile: File, eventType: FileMonitorEvent): void
    isCancelled(): boolean
    setRateLimit(limitMsecs: number): void
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
    /* Signals of Gio-2.0.Gio.FileMonitor */
    connect(sigName: "changed", callback: ((file: File, otherFile: File | null, eventType: FileMonitorEvent) => void)): number
    on(sigName: "changed", callback: (file: File, otherFile: File | null, eventType: FileMonitorEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (file: File, otherFile: File | null, eventType: FileMonitorEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (file: File, otherFile: File | null, eventType: FileMonitorEvent) => void): NodeJS.EventEmitter
    emit(sigName: "changed", file: File, otherFile: File | null, eventType: FileMonitorEvent): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cancelled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rate-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rate-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rate-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rate-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileMonitor_ConstructProps)
    _init (config?: FileMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
interface FileOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
class FileOutputStream {
    /* Fields of Gio-2.0.Gio.OutputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FileOutputStream */
    getEtag(): string | null
    queryInfo(attributes: string, cancellable?: Cancellable | null): FileInfo
    queryInfoAsync(attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    queryInfoFinish(result: AsyncResult): FileInfo
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Cancellable | null): number
    writeAll(buffer: Uint8Array, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
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
    constructor (config?: FileOutputStream_ConstructProps)
    _init (config?: FileOutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
interface FilenameCompleter_ConstructProps extends GObject.Object_ConstructProps {
}
class FilenameCompleter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FilenameCompleter */
    getCompletionSuffix(initialText: string): string | null
    getCompletions(initialText: string): string[]
    setDirsOnly(dirsOnly: boolean): void
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
    /* Signals of Gio-2.0.Gio.FilenameCompleter */
    connect(sigName: "got-completion-data", callback: (() => void)): number
    on(sigName: "got-completion-data", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-completion-data", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-completion-data", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "got-completion-data"): void
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
    constructor (config?: FilenameCompleter_ConstructProps)
    _init (config?: FilenameCompleter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilenameCompleter
    static $gtype: GObject.Type
}
interface FilterInputStream_ConstructProps extends InputStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.FilterInputStream */
    baseStream?: InputStream
    closeBaseStream?: boolean
}
class FilterInputStream {
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Gio-2.0.Gio.InputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    getBaseStream(): InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    connect(sigName: "notify::close-base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilterInputStream_ConstructProps)
    _init (config?: FilterInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
interface FilterOutputStream_ConstructProps extends OutputStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.FilterOutputStream */
    baseStream?: OutputStream
    closeBaseStream?: boolean
}
class FilterOutputStream {
    /* Fields of Gio-2.0.Gio.OutputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FilterOutputStream */
    getBaseStream(): OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Cancellable | null): number
    writeAll(buffer: Uint8Array, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    constructor (config?: FilterOutputStream_ConstructProps)
    _init (config?: FilterOutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
interface IOModule_ConstructProps extends GObject.TypeModule_ConstructProps {
}
class IOModule {
    /* Fields of GObject-2.0.GObject.TypeModule */
    readonly parentInstance: GObject.Object
    readonly useCount: number
    readonly typeInfos: object[]
    readonly interfaceInfos: object[]
    readonly name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.TypeModule */
    addInterface(instanceType: GObject.Type, interfaceType: GObject.Type, interfaceInfo: GObject.InterfaceInfo): void
    registerEnum(name: string, constStaticValues: GObject.EnumValue): GObject.Type
    registerFlags(name: string, constStaticValues: GObject.FlagsValue): GObject.Type
    registerType(parentType: GObject.Type, typeName: string, typeInfo: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    setName(name: string): void
    unuse(): void
    use(): boolean
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
    /* Methods of GObject-2.0.GObject.TypePlugin */
    completeInterfaceInfo(instanceType: GObject.Type, interfaceType: GObject.Type, info: GObject.InterfaceInfo): void
    completeTypeInfo(gType: GObject.Type, info: GObject.TypeInfo, valueTable: GObject.TypeValueTable): void
    use(): void
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
    constructor (config?: IOModule_ConstructProps)
    _init (config?: IOModule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): IOModule
    static query(): string[]
    static $gtype: GObject.Type
}
interface IOStream_ConstructProps extends GObject.Object_ConstructProps {
}
class IOStream {
    /* Properties of Gio-2.0.Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IOStream_ConstructProps)
    _init (config?: IOStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static spliceFinish(result: AsyncResult): boolean
    static $gtype: GObject.Type
}
interface InetAddress_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.InetAddress */
    bytes?: object
    family?: SocketFamily
}
class InetAddress {
    /* Properties of Gio-2.0.Gio.InetAddress */
    readonly isAny: boolean
    readonly isLinkLocal: boolean
    readonly isLoopback: boolean
    readonly isMcGlobal: boolean
    readonly isMcLinkLocal: boolean
    readonly isMcNodeLocal: boolean
    readonly isMcOrgLocal: boolean
    readonly isMcSiteLocal: boolean
    readonly isMulticast: boolean
    readonly isSiteLocal: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.InetAddress */
    equal(otherAddress: InetAddress): boolean
    getFamily(): SocketFamily
    getIsAny(): boolean
    getIsLinkLocal(): boolean
    getIsLoopback(): boolean
    getIsMcGlobal(): boolean
    getIsMcLinkLocal(): boolean
    getIsMcNodeLocal(): boolean
    getIsMcOrgLocal(): boolean
    getIsMcSiteLocal(): boolean
    getIsMulticast(): boolean
    getIsSiteLocal(): boolean
    getNativeSize(): number
    toString(): string
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
    connect(sigName: "notify::is-any", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-any", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-any", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-any", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-any", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-link-local", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-link-local", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-link-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-link-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-link-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-loopback", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loopback", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-loopback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-loopback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-loopback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-mc-global", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-global", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-mc-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-mc-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-mc-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-mc-link-local", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-link-local", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-mc-link-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-mc-link-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-mc-link-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-mc-node-local", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-node-local", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-mc-node-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-mc-node-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-mc-node-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-mc-org-local", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-org-local", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-mc-org-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-mc-org-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-mc-org-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-mc-site-local", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-site-local", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-mc-site-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-mc-site-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-mc-site-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-multicast", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-multicast", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-multicast", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-multicast", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-multicast", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-site-local", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-site-local", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-site-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-site-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-site-local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InetAddress_ConstructProps)
    _init (config?: InetAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newAny(family: SocketFamily): InetAddress
    static newFromBytes(bytes: Uint8Array, family: SocketFamily): InetAddress
    static newFromString(string: string): InetAddress
    static newLoopback(family: SocketFamily): InetAddress
    static $gtype: GObject.Type
}
interface InetAddressMask_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.InetAddressMask */
    address?: InetAddress
    length?: number
}
class InetAddressMask {
    /* Properties of Gio-2.0.Gio.InetAddressMask */
    address: InetAddress
    readonly family: SocketFamily
    length: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.InetAddressMask */
    equal(mask2: InetAddressMask): boolean
    getAddress(): InetAddress
    getFamily(): SocketFamily
    getLength(): number
    matches(address: InetAddress): boolean
    toString(): string
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InetAddressMask_ConstructProps)
    _init (config?: InetAddressMask_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(addr: InetAddress, length: number): InetAddressMask
    static newFromString(maskString: string): InetAddressMask
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface InetSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.InetSocketAddress */
    address?: InetAddress
    flowinfo?: number
    port?: number
    scopeId?: number
}
class InetSocketAddress {
    /* Properties of Gio-2.0.Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio-2.0.Gio.SocketAddress */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.InetSocketAddress */
    getAddress(): InetAddress
    getFlowinfo(): number
    getPort(): number
    getScopeId(): number
    /* Methods of Gio-2.0.Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio-2.0.Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    toString(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InetSocketAddress_ConstructProps)
    _init (config?: InetSocketAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(address: InetAddress, port: number): InetSocketAddress
    static newFromString(address: string, port: number): InetSocketAddress
    static $gtype: GObject.Type
}
interface InputStream_ConstructProps extends GObject.Object_ConstructProps {
}
class InputStream {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    constructor (config?: InputStream_ConstructProps)
    _init (config?: InputStream_ConstructProps): void
    static $gtype: GObject.Type
}
interface ListStore_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.ListStore */
    itemType?: GObject.Type
}
class ListStore {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.ListStore */
    append(item: GObject.Object): void
    find(item: GObject.Object): [ /* returnType */ boolean, /* position */ number | null ]
    findWithEqualFunc(item: GObject.Object, equalFunc: GLib.EqualFunc): [ /* returnType */ boolean, /* position */ number | null ]
    insert(position: number, item: GObject.Object): void
    insertSorted(item: GObject.Object, compareFunc: GLib.CompareDataFunc): number
    remove(position: number): void
    removeAll(): void
    sort(compareFunc: GLib.CompareDataFunc): void
    splice(position: number, nRemovals: number, additions: GObject.Object[]): void
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
    /* Methods of Gio-2.0.Gio.ListModel */
    getItemType(): GObject.Type
    getNItems(): number
    getItem(position: number): GObject.Object | null
    itemsChanged(position: number, removed: number, added: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.ListModel */
    connect(sigName: "items-changed", callback: ((position: number, removed: number, added: number) => void)): number
    on(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void): NodeJS.EventEmitter
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ListStore_ConstructProps)
    _init (config?: ListStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(itemType: GObject.Type): ListStore
    static $gtype: GObject.Type
}
interface MemoryInputStream_ConstructProps extends InputStream_ConstructProps {
}
class MemoryInputStream {
    /* Fields of Gio-2.0.Gio.InputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.MemoryInputStream */
    addBytes(bytes: any): void
    addData(data: Uint8Array, destroy?: GLib.DestroyNotify | null): void
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Methods of Gio-2.0.Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
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
    constructor (config?: MemoryInputStream_ConstructProps)
    _init (config?: MemoryInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MemoryInputStream
    static newFromBytes(bytes: any): MemoryInputStream
    static newFromData(data: Uint8Array, destroy?: GLib.DestroyNotify | null): MemoryInputStream
    static $gtype: GObject.Type
}
interface MemoryOutputStream_ConstructProps extends OutputStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.MemoryOutputStream */
    data?: object
    size?: number
}
class MemoryOutputStream {
    /* Properties of Gio-2.0.Gio.MemoryOutputStream */
    readonly dataSize: number
    /* Fields of Gio-2.0.Gio.OutputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.MemoryOutputStream */
    getData(): object | null
    getDataSize(): number
    getSize(): number
    stealAsBytes(): any
    stealData(): object | null
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Cancellable | null): number
    writeAll(buffer: Uint8Array, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Methods of Gio-2.0.Gio.PollableOutputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isWritable(): boolean
    writeNonblocking(buffer: Uint8Array, cancellable?: Cancellable | null): number
    writevNonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MemoryOutputStream_ConstructProps)
    _init (config?: MemoryOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newResizable(): MemoryOutputStream
    static $gtype: GObject.Type
}
interface Menu_ConstructProps extends MenuModel_ConstructProps {
}
class Menu {
    /* Fields of Gio-2.0.Gio.MenuModel */
    readonly parentInstance: GObject.Object
    readonly priv: MenuModelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Menu */
    append(label?: string | null, detailedAction?: string | null): void
    appendItem(item: MenuItem): void
    appendSection(label: string | null, section: MenuModel): void
    appendSubmenu(label: string | null, submenu: MenuModel): void
    freeze(): void
    insert(position: number, label?: string | null, detailedAction?: string | null): void
    insertItem(position: number, item: MenuItem): void
    insertSection(position: number, label: string | null, section: MenuModel): void
    insertSubmenu(position: number, label: string | null, submenu: MenuModel): void
    prepend(label?: string | null, detailedAction?: string | null): void
    prependItem(item: MenuItem): void
    prependSection(label: string | null, section: MenuModel): void
    prependSubmenu(label: string | null, submenu: MenuModel): void
    remove(position: number): void
    removeAll(): void
    /* Methods of Gio-2.0.Gio.MenuModel */
    getItemAttributeValue(itemIndex: number, attribute: string, expectedType?: GLib.VariantType | null): GLib.Variant | null
    getItemLink(itemIndex: number, link: string): MenuModel | null
    getNItems(): number
    isMutable(): boolean
    itemsChanged(position: number, removed: number, added: number): void
    iterateItemAttributes(itemIndex: number): MenuAttributeIter
    iterateItemLinks(itemIndex: number): MenuLinkIter
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
    /* Signals of Gio-2.0.Gio.MenuModel */
    connect(sigName: "items-changed", callback: ((position: number, removed: number, added: number) => void)): number
    on(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void): NodeJS.EventEmitter
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
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
    constructor (config?: Menu_ConstructProps)
    _init (config?: Menu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Menu
    static $gtype: GObject.Type
}
interface MenuAttributeIter_ConstructProps extends GObject.Object_ConstructProps {
}
class MenuAttributeIter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.MenuAttributeIter */
    getName(): string
    getNext(): [ /* returnType */ boolean, /* outName */ string | null, /* value */ GLib.Variant | null ]
    getValue(): GLib.Variant
    next(): boolean
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
    constructor (config?: MenuAttributeIter_ConstructProps)
    _init (config?: MenuAttributeIter_ConstructProps): void
    static $gtype: GObject.Type
}
interface MenuItem_ConstructProps extends GObject.Object_ConstructProps {
}
class MenuItem {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.MenuItem */
    getAttributeValue(attribute: string, expectedType?: GLib.VariantType | null): GLib.Variant | null
    getLink(link: string): MenuModel | null
    setActionAndTargetValue(action?: string | null, targetValue?: GLib.Variant | null): void
    setAttributeValue(attribute: string, value?: GLib.Variant | null): void
    setDetailedAction(detailedAction: string): void
    setIcon(icon: Icon): void
    setLabel(label?: string | null): void
    setLink(link: string, model?: MenuModel | null): void
    setSection(section?: MenuModel | null): void
    setSubmenu(submenu?: MenuModel | null): void
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
    constructor (config?: MenuItem_ConstructProps)
    _init (config?: MenuItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(label?: string | null, detailedAction?: string | null): MenuItem
    static newFromModel(model: MenuModel, itemIndex: number): MenuItem
    static newSection(label: string | null, section: MenuModel): MenuItem
    static newSubmenu(label: string | null, submenu: MenuModel): MenuItem
    static $gtype: GObject.Type
}
interface MenuLinkIter_ConstructProps extends GObject.Object_ConstructProps {
}
class MenuLinkIter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.MenuLinkIter */
    getName(): string
    getNext(): [ /* returnType */ boolean, /* outLink */ string | null, /* value */ MenuModel | null ]
    getValue(): MenuModel
    next(): boolean
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
    constructor (config?: MenuLinkIter_ConstructProps)
    _init (config?: MenuLinkIter_ConstructProps): void
    static $gtype: GObject.Type
}
interface MenuModel_ConstructProps extends GObject.Object_ConstructProps {
}
class MenuModel {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.MenuModel */
    getItemAttributeValue(itemIndex: number, attribute: string, expectedType?: GLib.VariantType | null): GLib.Variant | null
    getItemLink(itemIndex: number, link: string): MenuModel | null
    getNItems(): number
    isMutable(): boolean
    itemsChanged(position: number, removed: number, added: number): void
    iterateItemAttributes(itemIndex: number): MenuAttributeIter
    iterateItemLinks(itemIndex: number): MenuLinkIter
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
    /* Signals of Gio-2.0.Gio.MenuModel */
    connect(sigName: "items-changed", callback: ((position: number, removed: number, added: number) => void)): number
    on(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void): NodeJS.EventEmitter
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
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
    constructor (config?: MenuModel_ConstructProps)
    _init (config?: MenuModel_ConstructProps): void
    static $gtype: GObject.Type
}
interface MountOperation_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.MountOperation */
    anonymous?: boolean
    choice?: number
    domain?: string
    isTcryptHiddenVolume?: boolean
    isTcryptSystemVolume?: boolean
    password?: string
    passwordSave?: PasswordSave
    pim?: number
    username?: string
}
class MountOperation {
    /* Properties of Gio-2.0.Gio.MountOperation */
    anonymous: boolean
    choice: number
    domain: string
    isTcryptHiddenVolume: boolean
    isTcryptSystemVolume: boolean
    password: string
    passwordSave: PasswordSave
    pim: number
    username: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.MountOperation */
    getAnonymous(): boolean
    getChoice(): number
    getDomain(): string | null
    getIsTcryptHiddenVolume(): boolean
    getIsTcryptSystemVolume(): boolean
    getPassword(): string | null
    getPasswordSave(): PasswordSave
    getPim(): number
    getUsername(): string | null
    reply(result: MountOperationResult): void
    setAnonymous(anonymous: boolean): void
    setChoice(choice: number): void
    setDomain(domain?: string | null): void
    setIsTcryptHiddenVolume(hiddenVolume: boolean): void
    setIsTcryptSystemVolume(systemVolume: boolean): void
    setPassword(password?: string | null): void
    setPasswordSave(save: PasswordSave): void
    setPim(pim: number): void
    setUsername(username?: string | null): void
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
    /* Signals of Gio-2.0.Gio.MountOperation */
    connect(sigName: "aborted", callback: (() => void)): number
    on(sigName: "aborted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "aborted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "aborted", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "aborted"): void
    connect(sigName: "ask-password", callback: ((message: string, defaultUser: string, defaultDomain: string, flags: AskPasswordFlags) => void)): number
    on(sigName: "ask-password", callback: (message: string, defaultUser: string, defaultDomain: string, flags: AskPasswordFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ask-password", callback: (message: string, defaultUser: string, defaultDomain: string, flags: AskPasswordFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ask-password", callback: (message: string, defaultUser: string, defaultDomain: string, flags: AskPasswordFlags) => void): NodeJS.EventEmitter
    emit(sigName: "ask-password", message: string, defaultUser: string, defaultDomain: string, flags: AskPasswordFlags): void
    connect(sigName: "ask-question", callback: ((message: string, choices: string[]) => void)): number
    on(sigName: "ask-question", callback: (message: string, choices: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ask-question", callback: (message: string, choices: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ask-question", callback: (message: string, choices: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ask-question", message: string, choices: string[]): void
    connect(sigName: "reply", callback: ((result: MountOperationResult) => void)): number
    on(sigName: "reply", callback: (result: MountOperationResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reply", callback: (result: MountOperationResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reply", callback: (result: MountOperationResult) => void): NodeJS.EventEmitter
    emit(sigName: "reply", result: MountOperationResult): void
    connect(sigName: "show-processes", callback: ((message: string, processes: GLib.Pid[], choices: string[]) => void)): number
    on(sigName: "show-processes", callback: (message: string, processes: GLib.Pid[], choices: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-processes", callback: (message: string, processes: GLib.Pid[], choices: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-processes", callback: (message: string, processes: GLib.Pid[], choices: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "show-processes", message: string, processes: GLib.Pid[], choices: string[]): void
    connect(sigName: "show-unmount-progress", callback: ((message: string, timeLeft: number, bytesLeft: number) => void)): number
    on(sigName: "show-unmount-progress", callback: (message: string, timeLeft: number, bytesLeft: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-unmount-progress", callback: (message: string, timeLeft: number, bytesLeft: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-unmount-progress", callback: (message: string, timeLeft: number, bytesLeft: number) => void): NodeJS.EventEmitter
    emit(sigName: "show-unmount-progress", message: string, timeLeft: number, bytesLeft: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anonymous", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anonymous", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anonymous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anonymous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anonymous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::choice", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::domain", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-tcrypt-hidden-volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-tcrypt-hidden-volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-tcrypt-hidden-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-tcrypt-hidden-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-tcrypt-hidden-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-tcrypt-system-volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-tcrypt-system-volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-tcrypt-system-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-tcrypt-system-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-tcrypt-system-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-save", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-save", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-save", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-save", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-save", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pim", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pim", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pim", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pim", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pim", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: MountOperation_ConstructProps)
    _init (config?: MountOperation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MountOperation
    static $gtype: GObject.Type
}
interface NativeSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
}
class NativeSocketAddress {
    /* Properties of Gio-2.0.Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio-2.0.Gio.SocketAddress */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio-2.0.Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    toString(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NativeSocketAddress_ConstructProps)
    _init (config?: NativeSocketAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(native: object | null, len: number): NativeSocketAddress
    static $gtype: GObject.Type
}
interface NativeVolumeMonitor_ConstructProps extends VolumeMonitor_ConstructProps {
}
class NativeVolumeMonitor {
    /* Fields of Gio-2.0.Gio.VolumeMonitor */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.VolumeMonitor */
    getConnectedDrives(): Drive[]
    getMountForUuid(uuid: string): Mount | null
    getMounts(): Mount[]
    getVolumeForUuid(uuid: string): Volume | null
    getVolumes(): Volume[]
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
    /* Signals of Gio-2.0.Gio.VolumeMonitor */
    connect(sigName: "drive-changed", callback: ((drive: Drive) => void)): number
    on(sigName: "drive-changed", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drive-changed", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drive-changed", callback: (drive: Drive) => void): NodeJS.EventEmitter
    emit(sigName: "drive-changed", drive: Drive): void
    connect(sigName: "drive-connected", callback: ((drive: Drive) => void)): number
    on(sigName: "drive-connected", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drive-connected", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drive-connected", callback: (drive: Drive) => void): NodeJS.EventEmitter
    emit(sigName: "drive-connected", drive: Drive): void
    connect(sigName: "drive-disconnected", callback: ((drive: Drive) => void)): number
    on(sigName: "drive-disconnected", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drive-disconnected", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drive-disconnected", callback: (drive: Drive) => void): NodeJS.EventEmitter
    emit(sigName: "drive-disconnected", drive: Drive): void
    connect(sigName: "drive-eject-button", callback: ((drive: Drive) => void)): number
    on(sigName: "drive-eject-button", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drive-eject-button", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drive-eject-button", callback: (drive: Drive) => void): NodeJS.EventEmitter
    emit(sigName: "drive-eject-button", drive: Drive): void
    connect(sigName: "drive-stop-button", callback: ((drive: Drive) => void)): number
    on(sigName: "drive-stop-button", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drive-stop-button", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drive-stop-button", callback: (drive: Drive) => void): NodeJS.EventEmitter
    emit(sigName: "drive-stop-button", drive: Drive): void
    connect(sigName: "mount-added", callback: ((mount: Mount) => void)): number
    on(sigName: "mount-added", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mount-added", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mount-added", callback: (mount: Mount) => void): NodeJS.EventEmitter
    emit(sigName: "mount-added", mount: Mount): void
    connect(sigName: "mount-changed", callback: ((mount: Mount) => void)): number
    on(sigName: "mount-changed", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mount-changed", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mount-changed", callback: (mount: Mount) => void): NodeJS.EventEmitter
    emit(sigName: "mount-changed", mount: Mount): void
    connect(sigName: "mount-pre-unmount", callback: ((mount: Mount) => void)): number
    on(sigName: "mount-pre-unmount", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mount-pre-unmount", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mount-pre-unmount", callback: (mount: Mount) => void): NodeJS.EventEmitter
    emit(sigName: "mount-pre-unmount", mount: Mount): void
    connect(sigName: "mount-removed", callback: ((mount: Mount) => void)): number
    on(sigName: "mount-removed", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mount-removed", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mount-removed", callback: (mount: Mount) => void): NodeJS.EventEmitter
    emit(sigName: "mount-removed", mount: Mount): void
    connect(sigName: "volume-added", callback: ((volume: Volume) => void)): number
    on(sigName: "volume-added", callback: (volume: Volume) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-added", callback: (volume: Volume) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-added", callback: (volume: Volume) => void): NodeJS.EventEmitter
    emit(sigName: "volume-added", volume: Volume): void
    connect(sigName: "volume-changed", callback: ((volume: Volume) => void)): number
    on(sigName: "volume-changed", callback: (volume: Volume) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-changed", callback: (volume: Volume) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-changed", callback: (volume: Volume) => void): NodeJS.EventEmitter
    emit(sigName: "volume-changed", volume: Volume): void
    connect(sigName: "volume-removed", callback: ((volume: Volume) => void)): number
    on(sigName: "volume-removed", callback: (volume: Volume) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-removed", callback: (volume: Volume) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-removed", callback: (volume: Volume) => void): NodeJS.EventEmitter
    emit(sigName: "volume-removed", volume: Volume): void
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
    constructor (config?: NativeVolumeMonitor_ConstructProps)
    _init (config?: NativeVolumeMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
interface NetworkAddress_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.NetworkAddress */
    hostname?: string
    port?: number
    scheme?: string
}
class NetworkAddress {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.NetworkAddress */
    getHostname(): string
    getPort(): number
    getScheme(): string | null
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
    /* Methods of Gio-2.0.Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    toString(): string
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
    constructor (config?: NetworkAddress_ConstructProps)
    _init (config?: NetworkAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(hostname: string, port: number): NetworkAddress
    static newLoopback(port: number): NetworkAddress
    static parse(hostAndPort: string, defaultPort: number): NetworkAddress
    static parseUri(uri: string, defaultPort: number): NetworkAddress
    static $gtype: GObject.Type
}
interface NetworkService_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.NetworkService */
    domain?: string
    protocol?: string
    scheme?: string
    service?: string
}
class NetworkService {
    /* Properties of Gio-2.0.Gio.NetworkService */
    scheme: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.NetworkService */
    getDomain(): string
    getProtocol(): string
    getScheme(): string
    getService(): string
    setScheme(scheme: string): void
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
    /* Methods of Gio-2.0.Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    toString(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NetworkService_ConstructProps)
    _init (config?: NetworkService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service: string, protocol: string, domain: string): NetworkService
    static $gtype: GObject.Type
}
interface Notification_ConstructProps extends GObject.Object_ConstructProps {
}
class Notification {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Notification */
    addButton(label: string, detailedAction: string): void
    addButtonWithTarget(label: string, action: string, target?: GLib.Variant | null): void
    setBody(body?: string | null): void
    setCategory(category?: string | null): void
    setDefaultAction(detailedAction: string): void
    setDefaultActionAndTarget(action: string, target?: GLib.Variant | null): void
    setIcon(icon: Icon): void
    setPriority(priority: NotificationPriority): void
    setTitle(title: string): void
    setUrgent(urgent: boolean): void
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
    constructor (config?: Notification_ConstructProps)
    _init (config?: Notification_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string): Notification
    static $gtype: GObject.Type
}
interface OutputStream_ConstructProps extends GObject.Object_ConstructProps {
}
class OutputStream {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Cancellable | null): number
    writeAll(buffer: Uint8Array, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    constructor (config?: OutputStream_ConstructProps)
    _init (config?: OutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
interface Permission_ConstructProps extends GObject.Object_ConstructProps {
}
class Permission {
    /* Properties of Gio-2.0.Gio.Permission */
    readonly allowed: boolean
    readonly canAcquire: boolean
    readonly canRelease: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Permission */
    acquire(cancellable?: Cancellable | null): boolean
    acquireAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acquireFinish(result: AsyncResult): boolean
    getAllowed(): boolean
    getCanAcquire(): boolean
    getCanRelease(): boolean
    implUpdate(allowed: boolean, canAcquire: boolean, canRelease: boolean): void
    release(cancellable?: Cancellable | null): boolean
    releaseAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    releaseFinish(result: AsyncResult): boolean
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
    connect(sigName: "notify::allowed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-acquire", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-acquire", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-release", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-release", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Permission_ConstructProps)
    _init (config?: Permission_ConstructProps): void
    static $gtype: GObject.Type
}
interface PropertyAction_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.PropertyAction */
    invertBoolean?: boolean
    name?: string
    object?: GObject.Object
    propertyName?: string
}
class PropertyAction {
    /* Properties of Gio-2.0.Gio.PropertyAction */
    readonly enabled: boolean
    readonly parameterType: GLib.VariantType
    readonly state: GLib.Variant
    readonly stateType: GLib.VariantType
    /* Properties of Gio-2.0.Gio.Action */
    readonly name: string
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
    /* Methods of Gio-2.0.Gio.Action */
    activate(parameter?: GLib.Variant | null): void
    changeState(value: GLib.Variant): void
    getEnabled(): boolean
    getName(): string
    getParameterType(): GLib.VariantType | null
    getState(): GLib.Variant | null
    getStateHint(): GLib.Variant | null
    getStateType(): GLib.VariantType | null
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameter-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameter-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameter-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameter-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameter-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: PropertyAction_ConstructProps)
    _init (config?: PropertyAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, object: GObject.Object, propertyName: string): PropertyAction
    static nameIsValid(actionName: string): boolean
    static parseDetailedName(detailedName: string): [ /* returnType */ boolean, /* actionName */ string, /* targetValue */ GLib.Variant ]
    static printDetailedName(actionName: string, targetValue?: GLib.Variant | null): string
    static $gtype: GObject.Type
}
interface ProxyAddress_ConstructProps extends InetSocketAddress_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.ProxyAddress */
    destinationHostname?: string
    destinationPort?: number
    destinationProtocol?: string
    password?: string
    protocol?: string
    uri?: string
    username?: string
}
class ProxyAddress {
    /* Properties of Gio-2.0.Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio-2.0.Gio.InetSocketAddress */
    readonly parentInstance: SocketAddress
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.ProxyAddress */
    getDestinationHostname(): string
    getDestinationPort(): number
    getDestinationProtocol(): string
    getPassword(): string | null
    getProtocol(): string
    getUri(): string | null
    getUsername(): string | null
    /* Methods of Gio-2.0.Gio.InetSocketAddress */
    getAddress(): InetAddress
    getFlowinfo(): number
    getPort(): number
    getScopeId(): number
    /* Methods of Gio-2.0.Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio-2.0.Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    toString(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProxyAddress_ConstructProps)
    _init (config?: ProxyAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(inetaddr: InetAddress, port: number, protocol: string, destHostname: string, destPort: number, username?: string | null, password?: string | null): ProxyAddress
    /* Function overloads */
    static new(address: InetAddress, port: number): ProxyAddress
    static $gtype: GObject.Type
}
interface ProxyAddressEnumerator_ConstructProps extends SocketAddressEnumerator_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.ProxyAddressEnumerator */
    connectable?: SocketConnectable
    defaultPort?: number
    proxyResolver?: ProxyResolver
    uri?: string
}
class ProxyAddressEnumerator {
    /* Properties of Gio-2.0.Gio.ProxyAddressEnumerator */
    proxyResolver: ProxyResolver
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SocketAddressEnumerator */
    next(cancellable?: Cancellable | null): SocketAddress
    nextAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    nextFinish(result: AsyncResult): SocketAddress
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
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProxyAddressEnumerator_ConstructProps)
    _init (config?: ProxyAddressEnumerator_ConstructProps): void
    static $gtype: GObject.Type
}
interface Resolver_ConstructProps extends GObject.Object_ConstructProps {
}
class Resolver {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Resolver */
    lookupByAddress(address: InetAddress, cancellable?: Cancellable | null): string
    lookupByAddressAsync(address: InetAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupByAddressFinish(result: AsyncResult): string
    lookupByName(hostname: string, cancellable?: Cancellable | null): InetAddress[]
    lookupByNameAsync(hostname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupByNameFinish(result: AsyncResult): InetAddress[]
    lookupByNameWithFlags(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null): InetAddress[]
    lookupByNameWithFlagsAsync(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupByNameWithFlagsFinish(result: AsyncResult): InetAddress[]
    lookupRecords(rrname: string, recordType: ResolverRecordType, cancellable?: Cancellable | null): GLib.Variant[]
    lookupRecordsAsync(rrname: string, recordType: ResolverRecordType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupRecordsFinish(result: AsyncResult): GLib.Variant[]
    lookupService(service: string, protocol: string, domain: string, cancellable?: Cancellable | null): SrvTarget[]
    lookupServiceAsync(service: string, protocol: string, domain: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupServiceFinish(result: AsyncResult): SrvTarget[]
    setDefault(): void
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
    /* Signals of Gio-2.0.Gio.Resolver */
    connect(sigName: "reload", callback: (() => void)): number
    on(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reload", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reload"): void
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
    constructor (config?: Resolver_ConstructProps)
    _init (config?: Resolver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Resolver
    static $gtype: GObject.Type
}
interface Settings_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.Settings */
    backend?: SettingsBackend
    path?: string
    schema?: string
    schemaId?: string
    settingsSchema?: SettingsSchema
}
class Settings {
    /* Properties of Gio-2.0.Gio.Settings */
    readonly delayApply: boolean
    readonly hasUnapplied: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Settings */
    apply(): void
    bind(key: string, object: GObject.Object, property: string, flags: SettingsBindFlags): void
    bindWritable(key: string, object: GObject.Object, property: string, inverted: boolean): void
    createAction(key: string): Action
    delay(): void
    getBoolean(key: string): boolean
    getChild(name: string): Settings
    getDefaultValue(key: string): GLib.Variant | null
    getDouble(key: string): number
    getEnum(key: string): number
    getFlags(key: string): number
    getHasUnapplied(): boolean
    getInt(key: string): number
    getInt64(key: string): number
    getMapped(key: string, mapping: SettingsGetMapping): object | null
    getRange(key: string): GLib.Variant
    getString(key: string): string
    getStrv(key: string): string[]
    getUint(key: string): number
    getUint64(key: string): number
    getUserValue(key: string): GLib.Variant | null
    getValue(key: string): GLib.Variant
    isWritable(name: string): boolean
    listChildren(): string[]
    listKeys(): string[]
    rangeCheck(key: string, value: GLib.Variant): boolean
    reset(key: string): void
    revert(): void
    setBoolean(key: string, value: boolean): boolean
    setDouble(key: string, value: number): boolean
    setEnum(key: string, value: number): boolean
    setFlags(key: string, value: number): boolean
    setInt(key: string, value: number): boolean
    setInt64(key: string, value: number): boolean
    setString(key: string, value: string): boolean
    setStrv(key: string, value?: string[] | null): boolean
    setUint(key: string, value: number): boolean
    setUint64(key: string, value: number): boolean
    setValue(key: string, value: GLib.Variant): boolean
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
    /* Signals of Gio-2.0.Gio.Settings */
    connect(sigName: "change-event", callback: ((keys: GLib.Quark[] | null) => boolean)): number
    on(sigName: "change-event", callback: (keys: GLib.Quark[] | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "change-event", callback: (keys: GLib.Quark[] | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "change-event", callback: (keys: GLib.Quark[] | null) => void): NodeJS.EventEmitter
    emit(sigName: "change-event", keys: GLib.Quark[] | null): void
    connect(sigName: "changed", callback: ((key: string) => void)): number
    on(sigName: "changed", callback: (key: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (key: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (key: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", key: string): void
    connect(sigName: "writable-change-event", callback: ((key: number) => boolean)): number
    on(sigName: "writable-change-event", callback: (key: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "writable-change-event", callback: (key: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "writable-change-event", callback: (key: number) => void): NodeJS.EventEmitter
    emit(sigName: "writable-change-event", key: number): void
    connect(sigName: "writable-changed", callback: ((key: string) => void)): number
    on(sigName: "writable-changed", callback: (key: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "writable-changed", callback: (key: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "writable-changed", callback: (key: string) => void): NodeJS.EventEmitter
    emit(sigName: "writable-changed", key: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::delay-apply", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay-apply", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::delay-apply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::delay-apply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::delay-apply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-unapplied", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-unapplied", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-unapplied", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-unapplied", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-unapplied", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Settings_ConstructProps)
    _init (config?: Settings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(schemaId: string): Settings
    static newFull(schema: SettingsSchema, backend?: SettingsBackend | null, path?: string | null): Settings
    static newWithBackend(schemaId: string, backend: SettingsBackend): Settings
    static newWithBackendAndPath(schemaId: string, backend: SettingsBackend, path: string): Settings
    static newWithPath(schemaId: string, path: string): Settings
    static listRelocatableSchemas(): string[]
    static listSchemas(): string[]
    static sync(): void
    static unbind(object: GObject.Object, property: string): void
    static $gtype: GObject.Type
}
interface SettingsBackend_ConstructProps extends GObject.Object_ConstructProps {
}
class SettingsBackend {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SettingsBackend */
    changed(key: string, originTag?: object | null): void
    changedTree(tree: GLib.Tree, originTag?: object | null): void
    keysChanged(path: string, items: string[], originTag?: object | null): void
    pathChanged(path: string, originTag?: object | null): void
    pathWritableChanged(path: string): void
    writableChanged(key: string): void
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
    constructor (config?: SettingsBackend_ConstructProps)
    _init (config?: SettingsBackend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static flattenTree(tree: GLib.Tree): [ /* path */ string, /* keys */ string[], /* values */ GLib.Variant[] | null ]
    static getDefault(): SettingsBackend
    static $gtype: GObject.Type
}
interface SimpleAction_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.SimpleAction */
    enabled?: boolean
    name?: string
    parameterType?: GLib.VariantType
    state?: GLib.Variant
}
class SimpleAction {
    /* Properties of Gio-2.0.Gio.SimpleAction */
    enabled: boolean
    state: GLib.Variant
    readonly stateType: GLib.VariantType
    /* Properties of Gio-2.0.Gio.Action */
    readonly name: string
    readonly parameterType: GLib.VariantType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SimpleAction */
    setEnabled(enabled: boolean): void
    setState(value: GLib.Variant): void
    setStateHint(stateHint?: GLib.Variant | null): void
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
    /* Methods of Gio-2.0.Gio.Action */
    activate(parameter?: GLib.Variant | null): void
    changeState(value: GLib.Variant): void
    getEnabled(): boolean
    getName(): string
    getParameterType(): GLib.VariantType | null
    getState(): GLib.Variant | null
    getStateHint(): GLib.Variant | null
    getStateType(): GLib.VariantType | null
    /* Signals of Gio-2.0.Gio.SimpleAction */
    connect(sigName: "activate", callback: ((parameter?: GLib.Variant | null) => void)): number
    on(sigName: "activate", callback: (parameter?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: (parameter?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: (parameter?: GLib.Variant | null) => void): NodeJS.EventEmitter
    emit(sigName: "activate", parameter?: GLib.Variant | null): void
    connect(sigName: "change-state", callback: ((value?: GLib.Variant | null) => void)): number
    on(sigName: "change-state", callback: (value?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "change-state", callback: (value?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "change-state", callback: (value?: GLib.Variant | null) => void): NodeJS.EventEmitter
    emit(sigName: "change-state", value?: GLib.Variant | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameter-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameter-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameter-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameter-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameter-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleAction_ConstructProps)
    _init (config?: SimpleAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, parameterType?: GLib.VariantType | null): SimpleAction
    static newStateful(name: string, parameterType: GLib.VariantType | null, state: GLib.Variant): SimpleAction
    static nameIsValid(actionName: string): boolean
    static parseDetailedName(detailedName: string): [ /* returnType */ boolean, /* actionName */ string, /* targetValue */ GLib.Variant ]
    static printDetailedName(actionName: string, targetValue?: GLib.Variant | null): string
    static $gtype: GObject.Type
}
interface SimpleActionGroup_ConstructProps extends GObject.Object_ConstructProps {
}
class SimpleActionGroup {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SimpleActionGroup */
    addEntries(entries: ActionEntry[], userData?: object | null): void
    insert(action: Action): void
    lookup(actionName: string): Action
    remove(actionName: string): void
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
    /* Methods of Gio-2.0.Gio.ActionGroup */
    actionAdded(actionName: string): void
    actionEnabledChanged(actionName: string, enabled: boolean): void
    actionRemoved(actionName: string): void
    actionStateChanged(actionName: string, state: GLib.Variant): void
    activateAction(actionName: string, parameter?: GLib.Variant | null): void
    changeActionState(actionName: string, value: GLib.Variant): void
    getActionEnabled(actionName: string): boolean
    getActionParameterType(actionName: string): GLib.VariantType | null
    getActionState(actionName: string): GLib.Variant | null
    getActionStateHint(actionName: string): GLib.Variant | null
    getActionStateType(actionName: string): GLib.VariantType | null
    hasAction(actionName: string): boolean
    listActions(): string[]
    queryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio-2.0.Gio.ActionMap */
    addAction(action: Action): void
    addActionEntries(entries: ActionEntry[], userData?: object | null): void
    lookupAction(actionName: string): Action | null
    removeAction(actionName: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.ActionGroup */
    connect(sigName: "action-added", callback: ((actionName: string) => void)): number
    on(sigName: "action-added", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-added", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-added", callback: (actionName: string) => void): NodeJS.EventEmitter
    emit(sigName: "action-added", actionName: string): void
    connect(sigName: "action-enabled-changed", callback: ((actionName: string, enabled: boolean) => void)): number
    on(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "action-enabled-changed", actionName: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: ((actionName: string) => void)): number
    on(sigName: "action-removed", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-removed", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-removed", callback: (actionName: string) => void): NodeJS.EventEmitter
    emit(sigName: "action-removed", actionName: string): void
    connect(sigName: "action-state-changed", callback: ((actionName: string, value: GLib.Variant) => void)): number
    on(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "action-state-changed", actionName: string, value: GLib.Variant): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleActionGroup_ConstructProps)
    _init (config?: SimpleActionGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleActionGroup
    static $gtype: GObject.Type
}
interface SimpleAsyncResult_ConstructProps extends GObject.Object_ConstructProps {
}
class SimpleAsyncResult {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SimpleAsyncResult */
    complete(): void
    completeInIdle(): void
    getOpResGboolean(): boolean
    getOpResGssize(): number
    propagateError(): boolean
    setCheckCancellable(checkCancellable?: Cancellable | null): void
    setFromError(error: GLib.Error): void
    setHandleCancellation(handleCancellation: boolean): void
    setOpResGboolean(opRes: boolean): void
    setOpResGssize(opRes: number): void
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
    /* Methods of Gio-2.0.Gio.AsyncResult */
    getSourceObject(): GObject.Object | null
    getUserData(): object | null
    isTagged(sourceTag?: object | null): boolean
    legacyPropagateError(): boolean
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
    constructor (config?: SimpleAsyncResult_ConstructProps)
    _init (config?: SimpleAsyncResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sourceObject?: GObject.Object | null, callback?: AsyncReadyCallback | null, sourceTag?: object | null): SimpleAsyncResult
    static newFromError(sourceObject: GObject.Object | null, callback: AsyncReadyCallback | null, error: GLib.Error): SimpleAsyncResult
    static isValid(result: AsyncResult, source?: GObject.Object | null, sourceTag?: object | null): boolean
    static $gtype: GObject.Type
}
interface SimpleIOStream_ConstructProps extends IOStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.SimpleIOStream */
    inputStream?: InputStream
    outputStream?: OutputStream
}
class SimpleIOStream {
    /* Properties of Gio-2.0.Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio-2.0.Gio.IOStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleIOStream_ConstructProps)
    _init (config?: SimpleIOStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(inputStream: InputStream, outputStream: OutputStream): SimpleIOStream
    static $gtype: GObject.Type
}
interface SimplePermission_ConstructProps extends Permission_ConstructProps {
}
class SimplePermission {
    /* Properties of Gio-2.0.Gio.Permission */
    readonly allowed: boolean
    readonly canAcquire: boolean
    readonly canRelease: boolean
    /* Fields of Gio-2.0.Gio.Permission */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Permission */
    acquire(cancellable?: Cancellable | null): boolean
    acquireAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acquireFinish(result: AsyncResult): boolean
    getAllowed(): boolean
    getCanAcquire(): boolean
    getCanRelease(): boolean
    implUpdate(allowed: boolean, canAcquire: boolean, canRelease: boolean): void
    release(cancellable?: Cancellable | null): boolean
    releaseAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    releaseFinish(result: AsyncResult): boolean
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
    connect(sigName: "notify::allowed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-acquire", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-acquire", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-release", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-release", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimplePermission_ConstructProps)
    _init (config?: SimplePermission_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(allowed: boolean): SimplePermission
    static $gtype: GObject.Type
}
interface SimpleProxyResolver_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.SimpleProxyResolver */
    defaultProxy?: string
    ignoreHosts?: string[]
}
class SimpleProxyResolver {
    /* Properties of Gio-2.0.Gio.SimpleProxyResolver */
    defaultProxy: string
    ignoreHosts: string[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SimpleProxyResolver */
    setDefaultProxy(defaultProxy: string): void
    setIgnoreHosts(ignoreHosts: string[]): void
    setUriProxy(uriScheme: string, proxy: string): void
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
    /* Methods of Gio-2.0.Gio.ProxyResolver */
    isSupported(): boolean
    lookup(uri: string, cancellable?: Cancellable | null): string[]
    lookupAsync(uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupFinish(result: AsyncResult): string[]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-hosts", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-hosts", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-hosts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-hosts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-hosts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleProxyResolver_ConstructProps)
    _init (config?: SimpleProxyResolver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): ProxyResolver
    static $gtype: GObject.Type
}
interface Socket_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.Socket */
    blocking?: boolean
    broadcast?: boolean
    family?: SocketFamily
    fd?: number
    keepalive?: boolean
    listenBacklog?: number
    multicastLoopback?: boolean
    multicastTtl?: number
    protocol?: SocketProtocol
    timeout?: number
    ttl?: number
    type?: SocketType
}
class Socket {
    /* Properties of Gio-2.0.Gio.Socket */
    blocking: boolean
    broadcast: boolean
    keepalive: boolean
    listenBacklog: number
    readonly localAddress: SocketAddress
    multicastLoopback: boolean
    multicastTtl: number
    readonly remoteAddress: SocketAddress
    timeout: number
    ttl: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Socket */
    accept(cancellable?: Cancellable | null): Socket
    bind(address: SocketAddress, allowReuse: boolean): boolean
    checkConnectResult(): boolean
    close(): boolean
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    conditionTimedWait(condition: GLib.IOCondition, timeoutUs: number, cancellable?: Cancellable | null): boolean
    conditionWait(condition: GLib.IOCondition, cancellable?: Cancellable | null): boolean
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectionFactoryCreateConnection(): SocketConnection
    getAvailableBytes(): number
    getBlocking(): boolean
    getBroadcast(): boolean
    getCredentials(): Credentials
    getFamily(): SocketFamily
    getFd(): number
    getKeepalive(): boolean
    getListenBacklog(): number
    getLocalAddress(): SocketAddress
    getMulticastLoopback(): boolean
    getMulticastTtl(): number
    getOption(level: number, optname: number): [ /* returnType */ boolean, /* value */ number ]
    getProtocol(): SocketProtocol
    getRemoteAddress(): SocketAddress
    getSocketType(): SocketType
    getTimeout(): number
    getTtl(): number
    isClosed(): boolean
    isConnected(): boolean
    joinMulticastGroup(group: InetAddress, sourceSpecific: boolean, iface?: string | null): boolean
    joinMulticastGroupSsm(group: InetAddress, sourceSpecific?: InetAddress | null, iface?: string | null): boolean
    leaveMulticastGroup(group: InetAddress, sourceSpecific: boolean, iface?: string | null): boolean
    leaveMulticastGroupSsm(group: InetAddress, sourceSpecific?: InetAddress | null, iface?: string | null): boolean
    listen(): boolean
    receive(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    receiveFrom(cancellable?: Cancellable | null): [ /* returnType */ number, /* address */ SocketAddress | null, /* buffer */ Uint8Array ]
    receiveMessage(vectors: InputVector[], flags: number, cancellable?: Cancellable | null): [ /* returnType */ number, /* address */ SocketAddress | null, /* messages */ SocketControlMessage[] | null, /* flags */ number ]
    receiveMessages(messages: InputMessage[], flags: number, cancellable?: Cancellable | null): number
    receiveWithBlocking(blocking: boolean, cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    send(buffer: Uint8Array, cancellable?: Cancellable | null): number
    sendMessage(address: SocketAddress | null, vectors: OutputVector[], messages: SocketControlMessage[] | null, flags: number, cancellable?: Cancellable | null): number
    sendMessageWithTimeout(address: SocketAddress | null, vectors: OutputVector[], messages: SocketControlMessage[] | null, flags: number, timeoutUs: number, cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    sendMessages(messages: OutputMessage[], flags: number, cancellable?: Cancellable | null): number
    sendTo(address: SocketAddress | null, buffer: Uint8Array, cancellable?: Cancellable | null): number
    sendWithBlocking(buffer: Uint8Array, blocking: boolean, cancellable?: Cancellable | null): number
    setBlocking(blocking: boolean): void
    setBroadcast(broadcast: boolean): void
    setKeepalive(keepalive: boolean): void
    setListenBacklog(backlog: number): void
    setMulticastLoopback(loopback: boolean): void
    setMulticastTtl(ttl: number): void
    setOption(level: number, optname: number, value: number): boolean
    setTimeout(timeout: number): void
    setTtl(ttl: number): void
    shutdown(shutdownRead: boolean, shutdownWrite: boolean): boolean
    speaksIpv4(): boolean
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
    /* Methods of Gio-2.0.Gio.DatagramBased */
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition
    conditionWait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    createSource(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receiveMessages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    sendMessages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocking", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocking", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::broadcast", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::broadcast", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::broadcast", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::broadcast", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::broadcast", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keepalive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keepalive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keepalive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keepalive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keepalive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::listen-backlog", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::multicast-loopback", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::multicast-loopback", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::multicast-loopback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::multicast-loopback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::multicast-loopback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::multicast-ttl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::multicast-ttl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::multicast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::multicast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::multicast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ttl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ttl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Socket_ConstructProps)
    _init (config?: Socket_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(family: SocketFamily, type: SocketType, protocol: SocketProtocol): Socket
    static newFromFd(fd: number): Socket
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface SocketAddress_ConstructProps extends GObject.Object_ConstructProps {
}
class SocketAddress {
    /* Properties of Gio-2.0.Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio-2.0.Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    toString(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SocketAddress_ConstructProps)
    _init (config?: SocketAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromNative(native: object, len: number): SocketAddress
    static $gtype: GObject.Type
}
interface SocketAddressEnumerator_ConstructProps extends GObject.Object_ConstructProps {
}
class SocketAddressEnumerator {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SocketAddressEnumerator */
    next(cancellable?: Cancellable | null): SocketAddress
    nextAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    nextFinish(result: AsyncResult): SocketAddress
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
    constructor (config?: SocketAddressEnumerator_ConstructProps)
    _init (config?: SocketAddressEnumerator_ConstructProps): void
    static $gtype: GObject.Type
}
interface SocketClient_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.SocketClient */
    enableProxy?: boolean
    family?: SocketFamily
    localAddress?: SocketAddress
    protocol?: SocketProtocol
    proxyResolver?: ProxyResolver
    timeout?: number
    tls?: boolean
    tlsValidationFlags?: TlsCertificateFlags
    type?: SocketType
}
class SocketClient {
    /* Properties of Gio-2.0.Gio.SocketClient */
    enableProxy: boolean
    family: SocketFamily
    localAddress: SocketAddress
    protocol: SocketProtocol
    proxyResolver: ProxyResolver
    timeout: number
    tls: boolean
    tlsValidationFlags: TlsCertificateFlags
    type: SocketType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SocketClient */
    addApplicationProxy(protocol: string): void
    connect(connectable: SocketConnectable, cancellable?: Cancellable | null): SocketConnection
    connectAsync(connectable: SocketConnectable, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): SocketConnection
    connectToHost(hostAndPort: string, defaultPort: number, cancellable?: Cancellable | null): SocketConnection
    connectToHostAsync(hostAndPort: string, defaultPort: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectToHostFinish(result: AsyncResult): SocketConnection
    connectToService(domain: string, service: string, cancellable?: Cancellable | null): SocketConnection
    connectToServiceAsync(domain: string, service: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectToServiceFinish(result: AsyncResult): SocketConnection
    connectToUri(uri: string, defaultPort: number, cancellable?: Cancellable | null): SocketConnection
    connectToUriAsync(uri: string, defaultPort: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectToUriFinish(result: AsyncResult): SocketConnection
    getEnableProxy(): boolean
    getFamily(): SocketFamily
    getLocalAddress(): SocketAddress | null
    getProtocol(): SocketProtocol
    getProxyResolver(): ProxyResolver
    getSocketType(): SocketType
    getTimeout(): number
    getTls(): boolean
    getTlsValidationFlags(): TlsCertificateFlags
    setEnableProxy(enable: boolean): void
    setFamily(family: SocketFamily): void
    setLocalAddress(address?: SocketAddress | null): void
    setProtocol(protocol: SocketProtocol): void
    setProxyResolver(proxyResolver?: ProxyResolver | null): void
    setSocketType(type: SocketType): void
    setTimeout(timeout: number): void
    setTls(tls: boolean): void
    setTlsValidationFlags(flags: TlsCertificateFlags): void
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
    /* Signals of Gio-2.0.Gio.SocketClient */
    connect(sigName: "event", callback: ((event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null) => void)): number
    on(sigName: "event", callback: (event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enable-proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-validation-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-validation-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-validation-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-validation-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-validation-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SocketClient_ConstructProps)
    _init (config?: SocketClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SocketClient
    static $gtype: GObject.Type
}
interface SocketConnection_ConstructProps extends IOStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.SocketConnection */
    socket?: Socket
}
class SocketConnection {
    /* Properties of Gio-2.0.Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio-2.0.Gio.IOStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectAsync(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): boolean
    getLocalAddress(): SocketAddress
    getRemoteAddress(): SocketAddress
    getSocket(): Socket
    isConnected(): boolean
    /* Methods of Gio-2.0.Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SocketConnection_ConstructProps)
    _init (config?: SocketConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static factoryLookupType(family: SocketFamily, type: SocketType, protocolId: number): GObject.Type
    static factoryRegisterType(gType: GObject.Type, family: SocketFamily, type: SocketType, protocol: number): void
    static $gtype: GObject.Type
}
interface SocketControlMessage_ConstructProps extends GObject.Object_ConstructProps {
}
class SocketControlMessage {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SocketControlMessage */
    getLevel(): number
    getMsgType(): number
    getSize(): number
    serialize(data: object): void
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
    constructor (config?: SocketControlMessage_ConstructProps)
    _init (config?: SocketControlMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static deserialize(level: number, type: number, data: Uint8Array): SocketControlMessage
    static $gtype: GObject.Type
}
interface SocketListener_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.SocketListener */
    listenBacklog?: number
}
class SocketListener {
    /* Properties of Gio-2.0.Gio.SocketListener */
    listenBacklog: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SocketListener */
    accept(cancellable?: Cancellable | null): [ /* returnType */ SocketConnection, /* sourceObject */ GObject.Object | null ]
    acceptAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptFinish(result: AsyncResult): [ /* returnType */ SocketConnection, /* sourceObject */ GObject.Object | null ]
    acceptSocket(cancellable?: Cancellable | null): [ /* returnType */ Socket, /* sourceObject */ GObject.Object | null ]
    acceptSocketAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptSocketFinish(result: AsyncResult): [ /* returnType */ Socket, /* sourceObject */ GObject.Object | null ]
    addAddress(address: SocketAddress, type: SocketType, protocol: SocketProtocol, sourceObject?: GObject.Object | null): [ /* returnType */ boolean, /* effectiveAddress */ SocketAddress | null ]
    addAnyInetPort(sourceObject?: GObject.Object | null): number
    addInetPort(port: number, sourceObject?: GObject.Object | null): boolean
    addSocket(socket: Socket, sourceObject?: GObject.Object | null): boolean
    close(): void
    setBacklog(listenBacklog: number): void
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
    /* Signals of Gio-2.0.Gio.SocketListener */
    connect(sigName: "event", callback: ((event: SocketListenerEvent, socket: Socket) => void)): number
    on(sigName: "event", callback: (event: SocketListenerEvent, socket: Socket) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: SocketListenerEvent, socket: Socket) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: SocketListenerEvent, socket: Socket) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: SocketListenerEvent, socket: Socket): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::listen-backlog", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SocketListener_ConstructProps)
    _init (config?: SocketListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SocketListener
    static $gtype: GObject.Type
}
interface SocketService_ConstructProps extends SocketListener_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.SocketService */
    active?: boolean
}
class SocketService {
    /* Properties of Gio-2.0.Gio.SocketService */
    active: boolean
    /* Properties of Gio-2.0.Gio.SocketListener */
    listenBacklog: number
    /* Fields of Gio-2.0.Gio.SocketListener */
    readonly parentInstance: GObject.Object
    readonly priv: SocketListenerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SocketService */
    isActive(): boolean
    start(): void
    stop(): void
    /* Methods of Gio-2.0.Gio.SocketListener */
    accept(cancellable?: Cancellable | null): [ /* returnType */ SocketConnection, /* sourceObject */ GObject.Object | null ]
    acceptAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptFinish(result: AsyncResult): [ /* returnType */ SocketConnection, /* sourceObject */ GObject.Object | null ]
    acceptSocket(cancellable?: Cancellable | null): [ /* returnType */ Socket, /* sourceObject */ GObject.Object | null ]
    acceptSocketAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptSocketFinish(result: AsyncResult): [ /* returnType */ Socket, /* sourceObject */ GObject.Object | null ]
    addAddress(address: SocketAddress, type: SocketType, protocol: SocketProtocol, sourceObject?: GObject.Object | null): [ /* returnType */ boolean, /* effectiveAddress */ SocketAddress | null ]
    addAnyInetPort(sourceObject?: GObject.Object | null): number
    addInetPort(port: number, sourceObject?: GObject.Object | null): boolean
    addSocket(socket: Socket, sourceObject?: GObject.Object | null): boolean
    close(): void
    setBacklog(listenBacklog: number): void
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
    /* Signals of Gio-2.0.Gio.SocketService */
    connect(sigName: "incoming", callback: ((connection: SocketConnection, sourceObject?: GObject.Object | null) => boolean)): number
    on(sigName: "incoming", callback: (connection: SocketConnection, sourceObject?: GObject.Object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "incoming", callback: (connection: SocketConnection, sourceObject?: GObject.Object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "incoming", callback: (connection: SocketConnection, sourceObject?: GObject.Object | null) => void): NodeJS.EventEmitter
    emit(sigName: "incoming", connection: SocketConnection, sourceObject?: GObject.Object | null): void
    /* Signals of Gio-2.0.Gio.SocketListener */
    connect(sigName: "event", callback: ((event: SocketListenerEvent, socket: Socket) => void)): number
    on(sigName: "event", callback: (event: SocketListenerEvent, socket: Socket) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: SocketListenerEvent, socket: Socket) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: SocketListenerEvent, socket: Socket) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: SocketListenerEvent, socket: Socket): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::listen-backlog", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SocketService_ConstructProps)
    _init (config?: SocketService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SocketService
    /* Function overloads */
    static new(): SocketService
    static $gtype: GObject.Type
}
interface Subprocess_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.Subprocess */
    argv?: string[]
    flags?: SubprocessFlags
}
class Subprocess {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Subprocess */
    communicate(stdinBuf?: any | null, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* stdoutBuf */ any | null, /* stderrBuf */ any | null ]
    communicateAsync(stdinBuf?: any | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    communicateFinish(result: AsyncResult): [ /* returnType */ boolean, /* stdoutBuf */ any | null, /* stderrBuf */ any | null ]
    communicateUtf8(stdinBuf?: string | null, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* stdoutBuf */ string | null, /* stderrBuf */ string | null ]
    communicateUtf8Async(stdinBuf?: string | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    communicateUtf8Finish(result: AsyncResult): [ /* returnType */ boolean, /* stdoutBuf */ string | null, /* stderrBuf */ string | null ]
    forceExit(): void
    getExitStatus(): number
    getIdentifier(): string | null
    getIfExited(): boolean
    getIfSignaled(): boolean
    getStatus(): number
    getStderrPipe(): InputStream | null
    getStdinPipe(): OutputStream | null
    getStdoutPipe(): InputStream | null
    getSuccessful(): boolean
    getTermSig(): number
    sendSignal(signalNum: number): void
    wait(cancellable?: Cancellable | null): boolean
    waitAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    waitCheck(cancellable?: Cancellable | null): boolean
    waitCheckAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    waitCheckFinish(result: AsyncResult): boolean
    waitFinish(result: AsyncResult): boolean
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
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
    constructor (config?: Subprocess_ConstructProps)
    _init (config?: Subprocess_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(argv: string[], flags: SubprocessFlags): Subprocess
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface SubprocessLauncher_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.SubprocessLauncher */
    flags?: SubprocessFlags
}
class SubprocessLauncher {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SubprocessLauncher */
    close(): void
    getenv(variable: string): string | null
    setCwd(cwd: string): void
    setEnviron(env: string[]): void
    setFlags(flags: SubprocessFlags): void
    setStderrFilePath(path?: string | null): void
    setStdinFilePath(path: string): void
    setStdoutFilePath(path?: string | null): void
    setenv(variable: string, value: string, overwrite: boolean): void
    spawnv(argv: string[]): Subprocess
    takeFd(sourceFd: number, targetFd: number): void
    takeStderrFd(fd: number): void
    takeStdinFd(fd: number): void
    takeStdoutFd(fd: number): void
    unsetenv(variable: string): void
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
    constructor (config?: SubprocessLauncher_ConstructProps)
    _init (config?: SubprocessLauncher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: SubprocessFlags): SubprocessLauncher
    static $gtype: GObject.Type
}
interface Task_ConstructProps extends GObject.Object_ConstructProps {
}
class Task {
    /* Properties of Gio-2.0.Gio.Task */
    readonly completed: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Task */
    getCancellable(): Cancellable
    getCheckCancellable(): boolean
    getCompleted(): boolean
    getContext(): GLib.MainContext
    getName(): string | null
    getPriority(): number
    getReturnOnCancel(): boolean
    getSourceObject(): GObject.Object | null
    getSourceTag(): object | null
    getTaskData(): object | null
    hadError(): boolean
    propagateBoolean(): boolean
    propagateInt(): number
    propagatePointer(): object | null
    propagateValue(): [ /* returnType */ boolean, /* value */ any ]
    returnBoolean(result: boolean): void
    returnError(error: GLib.Error): void
    returnErrorIfCancelled(): boolean
    returnInt(result: number): void
    returnPointer(result?: object | null, resultDestroy?: GLib.DestroyNotify | null): void
    returnValue(result?: any | null): void
    runInThread(taskFunc: TaskThreadFunc): void
    runInThreadSync(taskFunc: TaskThreadFunc): void
    setCheckCancellable(checkCancellable: boolean): void
    setName(name?: string | null): void
    setPriority(priority: number): void
    setReturnOnCancel(returnOnCancel: boolean): boolean
    setSourceTag(sourceTag?: object | null): void
    setTaskData(taskData?: object | null, taskDataDestroy?: GLib.DestroyNotify | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncResult */
    getUserData(): object | null
    isTagged(sourceTag?: object | null): boolean
    legacyPropagateError(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::completed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(sourceObject?: GObject.Object | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): Task
    static isValid(result: AsyncResult, sourceObject?: GObject.Object | null): boolean
    static reportError(sourceObject: GObject.Object | null, callback: AsyncReadyCallback | null, sourceTag: object | null, error: GLib.Error): void
    static $gtype: GObject.Type
}
interface TcpConnection_ConstructProps extends SocketConnection_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.TcpConnection */
    gracefulDisconnect?: boolean
}
class TcpConnection {
    /* Properties of Gio-2.0.Gio.TcpConnection */
    gracefulDisconnect: boolean
    /* Properties of Gio-2.0.Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio-2.0.Gio.SocketConnection */
    readonly parentInstance: IOStream
    readonly priv: SocketConnectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.TcpConnection */
    getGracefulDisconnect(): boolean
    setGracefulDisconnect(gracefulDisconnect: boolean): void
    /* Methods of Gio-2.0.Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectAsync(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): boolean
    getLocalAddress(): SocketAddress
    getRemoteAddress(): SocketAddress
    getSocket(): Socket
    isConnected(): boolean
    /* Methods of Gio-2.0.Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    connect(sigName: "notify::graceful-disconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::graceful-disconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::graceful-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::graceful-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::graceful-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TcpConnection_ConstructProps)
    _init (config?: TcpConnection_ConstructProps): void
    static $gtype: GObject.Type
}
interface TcpWrapperConnection_ConstructProps extends TcpConnection_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.TcpWrapperConnection */
    baseIoStream?: IOStream
}
class TcpWrapperConnection {
    /* Properties of Gio-2.0.Gio.TcpConnection */
    gracefulDisconnect: boolean
    /* Properties of Gio-2.0.Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio-2.0.Gio.TcpConnection */
    readonly parentInstance: SocketConnection
    readonly priv: TcpConnectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.TcpWrapperConnection */
    getBaseIoStream(): IOStream
    /* Methods of Gio-2.0.Gio.TcpConnection */
    getGracefulDisconnect(): boolean
    setGracefulDisconnect(gracefulDisconnect: boolean): void
    /* Methods of Gio-2.0.Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectAsync(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): boolean
    getLocalAddress(): SocketAddress
    getRemoteAddress(): SocketAddress
    getSocket(): Socket
    isConnected(): boolean
    /* Methods of Gio-2.0.Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    connect(sigName: "notify::graceful-disconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::graceful-disconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::graceful-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::graceful-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::graceful-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TcpWrapperConnection_ConstructProps)
    _init (config?: TcpWrapperConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseIoStream: IOStream, socket: Socket): TcpWrapperConnection
    static $gtype: GObject.Type
}
interface TestDBus_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.TestDBus */
    flags?: TestDBusFlags
}
class TestDBus {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.TestDBus */
    addServiceDir(path: string): void
    down(): void
    getBusAddress(): string | null
    getFlags(): TestDBusFlags
    stop(): void
    up(): void
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
    constructor (config?: TestDBus_ConstructProps)
    _init (config?: TestDBus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: TestDBusFlags): TestDBus
    static unset(): void
    static $gtype: GObject.Type
}
interface ThemedIcon_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.ThemedIcon */
    name?: string
    names?: string[]
    useDefaultFallbacks?: boolean
}
class ThemedIcon {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.ThemedIcon */
    appendName(iconname: string): void
    getNames(): string[]
    prependName(iconname: string): void
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
    /* Methods of Gio-2.0.Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant | null
    toString(): string | null
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
    constructor (config?: ThemedIcon_ConstructProps)
    _init (config?: ThemedIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(iconname: string): ThemedIcon
    static newFromNames(iconnames: string[]): ThemedIcon
    static newWithDefaultFallbacks(iconname: string): ThemedIcon
    static deserialize(value: GLib.Variant): Icon | null
    static hash(icon: object): number
    static newForString(str: string): Icon
    static $gtype: GObject.Type
}
interface ThreadedSocketService_ConstructProps extends SocketService_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.ThreadedSocketService */
    maxThreads?: number
}
class ThreadedSocketService {
    /* Properties of Gio-2.0.Gio.SocketService */
    active: boolean
    /* Properties of Gio-2.0.Gio.SocketListener */
    listenBacklog: number
    /* Fields of Gio-2.0.Gio.SocketService */
    readonly parentInstance: SocketListener
    readonly priv: SocketServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.SocketService */
    isActive(): boolean
    start(): void
    stop(): void
    /* Methods of Gio-2.0.Gio.SocketListener */
    accept(cancellable?: Cancellable | null): [ /* returnType */ SocketConnection, /* sourceObject */ GObject.Object | null ]
    acceptAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptFinish(result: AsyncResult): [ /* returnType */ SocketConnection, /* sourceObject */ GObject.Object | null ]
    acceptSocket(cancellable?: Cancellable | null): [ /* returnType */ Socket, /* sourceObject */ GObject.Object | null ]
    acceptSocketAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acceptSocketFinish(result: AsyncResult): [ /* returnType */ Socket, /* sourceObject */ GObject.Object | null ]
    addAddress(address: SocketAddress, type: SocketType, protocol: SocketProtocol, sourceObject?: GObject.Object | null): [ /* returnType */ boolean, /* effectiveAddress */ SocketAddress | null ]
    addAnyInetPort(sourceObject?: GObject.Object | null): number
    addInetPort(port: number, sourceObject?: GObject.Object | null): boolean
    addSocket(socket: Socket, sourceObject?: GObject.Object | null): boolean
    close(): void
    setBacklog(listenBacklog: number): void
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
    /* Signals of Gio-2.0.Gio.ThreadedSocketService */
    connect(sigName: "run", callback: ((connection: SocketConnection, sourceObject?: GObject.Object | null) => boolean)): number
    on(sigName: "run", callback: (connection: SocketConnection, sourceObject?: GObject.Object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run", callback: (connection: SocketConnection, sourceObject?: GObject.Object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run", callback: (connection: SocketConnection, sourceObject?: GObject.Object | null) => void): NodeJS.EventEmitter
    emit(sigName: "run", connection: SocketConnection, sourceObject?: GObject.Object | null): void
    /* Signals of Gio-2.0.Gio.SocketService */
    connect(sigName: "incoming", callback: ((connection: SocketConnection, sourceObject?: GObject.Object | null) => boolean)): number
    on(sigName: "incoming", callback: (connection: SocketConnection, sourceObject?: GObject.Object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "incoming", callback: (connection: SocketConnection, sourceObject?: GObject.Object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "incoming", callback: (connection: SocketConnection, sourceObject?: GObject.Object | null) => void): NodeJS.EventEmitter
    emit(sigName: "incoming", connection: SocketConnection, sourceObject?: GObject.Object | null): void
    /* Signals of Gio-2.0.Gio.SocketListener */
    connect(sigName: "event", callback: ((event: SocketListenerEvent, socket: Socket) => void)): number
    on(sigName: "event", callback: (event: SocketListenerEvent, socket: Socket) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: SocketListenerEvent, socket: Socket) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: SocketListenerEvent, socket: Socket) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: SocketListenerEvent, socket: Socket): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::listen-backlog", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::listen-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ThreadedSocketService_ConstructProps)
    _init (config?: ThreadedSocketService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(maxThreads: number): ThreadedSocketService
    /* Function overloads */
    static new(): ThreadedSocketService
    static new(): ThreadedSocketService
    static $gtype: GObject.Type
}
interface TlsCertificate_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.TlsCertificate */
    certificate?: Uint8Array
    certificatePem?: string
    issuer?: TlsCertificate
    password?: string
    pkcs11Uri?: string
    pkcs12Data?: Uint8Array
    privateKey?: Uint8Array
    privateKeyPem?: string
    privateKeyPkcs11Uri?: string
}
class TlsCertificate {
    /* Properties of Gio-2.0.Gio.TlsCertificate */
    readonly dnsNames: object[]
    readonly ipAddresses: object[]
    readonly issuerName: string
    readonly notValidAfter: GLib.DateTime
    readonly notValidBefore: GLib.DateTime
    readonly subjectName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.TlsCertificate */
    getDnsNames(): any[] | null
    getIpAddresses(): InetAddress[] | null
    getIssuer(): TlsCertificate | null
    getIssuerName(): string | null
    getNotValidAfter(): GLib.DateTime | null
    getNotValidBefore(): GLib.DateTime | null
    getSubjectName(): string | null
    isSame(certTwo: TlsCertificate): boolean
    verify(identity?: SocketConnectable | null, trustedCa?: TlsCertificate | null): TlsCertificateFlags
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
    connect(sigName: "notify::dns-names", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dns-names", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dns-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dns-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dns-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-addresses", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-addresses", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::issuer-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::issuer-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::issuer-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::issuer-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::issuer-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::not-valid-after", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::not-valid-after", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::not-valid-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::not-valid-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::not-valid-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::not-valid-before", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::not-valid-before", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::not-valid-before", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::not-valid-before", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::not-valid-before", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TlsCertificate_ConstructProps)
    _init (config?: TlsCertificate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromFile(file: string): TlsCertificate
    static newFromFileWithPassword(file: string, password: string): TlsCertificate
    static newFromFiles(certFile: string, keyFile: string): TlsCertificate
    static newFromPem(data: string, length: number): TlsCertificate
    static newFromPkcs11Uris(pkcs11Uri: string, privateKeyPkcs11Uri?: string | null): TlsCertificate
    static newFromPkcs12(data: number, length: number, password?: string | null): TlsCertificate
    static listNewFromFile(file: string): TlsCertificate[]
    static $gtype: GObject.Type
}
interface TlsConnection_ConstructProps extends IOStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.TlsConnection */
    advertisedProtocols?: string[]
    baseIoStream?: IOStream
    certificate?: TlsCertificate
    database?: TlsDatabase
    interaction?: TlsInteraction
    rehandshakeMode?: TlsRehandshakeMode
    requireCloseNotify?: boolean
    useSystemCertdb?: boolean
}
class TlsConnection {
    /* Properties of Gio-2.0.Gio.TlsConnection */
    advertisedProtocols: string[]
    certificate: TlsCertificate
    readonly ciphersuiteName: string
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiatedProtocol: string
    readonly peerCertificate: TlsCertificate
    readonly peerCertificateErrors: TlsCertificateFlags
    readonly protocolVersion: TlsProtocolVersion
    rehandshakeMode: TlsRehandshakeMode
    requireCloseNotify: boolean
    useSystemCertdb: boolean
    /* Properties of Gio-2.0.Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio-2.0.Gio.IOStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.TlsConnection */
    emitAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean
    getCertificate(): TlsCertificate | null
    getChannelBindingData(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ Uint8Array | null ]
    getCiphersuiteName(): string | null
    getDatabase(): TlsDatabase | null
    getInteraction(): TlsInteraction | null
    getNegotiatedProtocol(): string | null
    getPeerCertificate(): TlsCertificate | null
    getPeerCertificateErrors(): TlsCertificateFlags
    getProtocolVersion(): TlsProtocolVersion
    getRehandshakeMode(): TlsRehandshakeMode
    getRequireCloseNotify(): boolean
    getUseSystemCertdb(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshakeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshakeFinish(result: AsyncResult): boolean
    setAdvertisedProtocols(protocols?: string[] | null): void
    setCertificate(certificate: TlsCertificate): void
    setDatabase(database?: TlsDatabase | null): void
    setInteraction(interaction?: TlsInteraction | null): void
    setRehandshakeMode(mode: TlsRehandshakeMode): void
    setRequireCloseNotify(requireCloseNotify: boolean): void
    setUseSystemCertdb(useSystemCertdb: boolean): void
    /* Methods of Gio-2.0.Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Signals of Gio-2.0.Gio.TlsConnection */
    connect(sigName: "accept-certificate", callback: ((peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    on(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: (peerCert: TlsCertificate, errors: TlsCertificateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "accept-certificate", peerCert: TlsCertificate, errors: TlsCertificateFlags): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::advertised-protocols", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::advertised-protocols", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::advertised-protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ciphersuite-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ciphersuite-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ciphersuite-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ciphersuite-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ciphersuite-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::database", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::negotiated-protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::negotiated-protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::peer-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::peer-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::peer-certificate-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::peer-certificate-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rehandshake-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rehandshake-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rehandshake-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::require-close-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-close-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::require-close-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-system-certdb", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-system-certdb", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-system-certdb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TlsConnection_ConstructProps)
    _init (config?: TlsConnection_ConstructProps): void
    static $gtype: GObject.Type
}
interface TlsDatabase_ConstructProps extends GObject.Object_ConstructProps {
}
class TlsDatabase {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.TlsDatabase */
    createCertificateHandle(certificate: TlsCertificate): string | null
    lookupCertificateForHandle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate | null
    lookupCertificateForHandleAsync(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificateForHandleFinish(result: AsyncResult): TlsCertificate
    lookupCertificateIssuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate
    lookupCertificateIssuerAsync(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificateIssuerFinish(result: AsyncResult): TlsCertificate
    lookupCertificatesIssuedBy(issuerRawDn: Uint8Array, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate[]
    lookupCertificatesIssuedByAsync(issuerRawDn: Uint8Array, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookupCertificatesIssuedByFinish(result: AsyncResult): TlsCertificate[]
    verifyChain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null): TlsCertificateFlags
    verifyChainAsync(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    verifyChainFinish(result: AsyncResult): TlsCertificateFlags
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
    constructor (config?: TlsDatabase_ConstructProps)
    _init (config?: TlsDatabase_ConstructProps): void
    static $gtype: GObject.Type
}
interface TlsInteraction_ConstructProps extends GObject.Object_ConstructProps {
}
class TlsInteraction {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.TlsInteraction */
    askPassword(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult
    askPasswordAsync(password: TlsPassword, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    askPasswordFinish(result: AsyncResult): TlsInteractionResult
    invokeAskPassword(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult
    invokeRequestCertificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null): TlsInteractionResult
    requestCertificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null): TlsInteractionResult
    requestCertificateAsync(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    requestCertificateFinish(result: AsyncResult): TlsInteractionResult
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
    constructor (config?: TlsInteraction_ConstructProps)
    _init (config?: TlsInteraction_ConstructProps): void
    static $gtype: GObject.Type
}
interface TlsPassword_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.TlsPassword */
    description?: string
    flags?: TlsPasswordFlags
    warning?: string
}
class TlsPassword {
    /* Properties of Gio-2.0.Gio.TlsPassword */
    description: string
    flags: TlsPasswordFlags
    warning: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.TlsPassword */
    getDescription(): string
    getFlags(): TlsPasswordFlags
    getValue(): Uint8Array
    getWarning(): string
    setDescription(description: string): void
    setFlags(flags: TlsPasswordFlags): void
    setValue(value: Uint8Array): void
    setValueFull(value: Uint8Array, destroy?: GLib.DestroyNotify | null): void
    setWarning(warning: string): void
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
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::warning", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TlsPassword_ConstructProps)
    _init (config?: TlsPassword_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: TlsPasswordFlags, description: string): TlsPassword
    static $gtype: GObject.Type
}
interface UnixConnection_ConstructProps extends SocketConnection_ConstructProps {
}
class UnixConnection {
    /* Properties of Gio-2.0.Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: InputStream
    readonly outputStream: OutputStream
    /* Fields of Gio-2.0.Gio.SocketConnection */
    readonly parentInstance: IOStream
    readonly priv: SocketConnectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.UnixConnection */
    receiveCredentials(cancellable?: Cancellable | null): Credentials
    receiveCredentialsAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    receiveCredentialsFinish(result: AsyncResult): Credentials
    receiveFd(cancellable?: Cancellable | null): number
    sendCredentials(cancellable?: Cancellable | null): boolean
    sendCredentialsAsync(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    sendCredentialsFinish(result: AsyncResult): boolean
    sendFd(fd: number, cancellable?: Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connectAsync(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connectFinish(result: AsyncResult): boolean
    getLocalAddress(): SocketAddress
    getRemoteAddress(): SocketAddress
    getSocket(): Socket
    isConnected(): boolean
    /* Methods of Gio-2.0.Gio.IOStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    getInputStream(): InputStream
    getOutputStream(): OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnixConnection_ConstructProps)
    _init (config?: UnixConnection_ConstructProps): void
    static $gtype: GObject.Type
}
interface UnixCredentialsMessage_ConstructProps extends SocketControlMessage_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.UnixCredentialsMessage */
    credentials?: Credentials
}
class UnixCredentialsMessage {
    /* Fields of Gio-2.0.Gio.SocketControlMessage */
    readonly parentInstance: GObject.Object
    readonly priv: SocketControlMessagePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.UnixCredentialsMessage */
    getCredentials(): Credentials
    /* Methods of Gio-2.0.Gio.SocketControlMessage */
    getLevel(): number
    getMsgType(): number
    getSize(): number
    serialize(data: object): void
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
    constructor (config?: UnixCredentialsMessage_ConstructProps)
    _init (config?: UnixCredentialsMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnixCredentialsMessage
    static newWithCredentials(credentials: Credentials): UnixCredentialsMessage
    static isSupported(): boolean
    static $gtype: GObject.Type
}
interface UnixFDList_ConstructProps extends GObject.Object_ConstructProps {
}
class UnixFDList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.UnixFDList */
    append(fd: number): number
    get(index: number): number
    getLength(): number
    peekFds(): number[]
    stealFds(): number[]
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
    constructor (config?: UnixFDList_ConstructProps)
    _init (config?: UnixFDList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnixFDList
    static newFromArray(fds: number[]): UnixFDList
    static $gtype: GObject.Type
}
interface UnixFDMessage_ConstructProps extends SocketControlMessage_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.UnixFDMessage */
    fdList?: UnixFDList
}
class UnixFDMessage {
    /* Fields of Gio-2.0.Gio.SocketControlMessage */
    readonly parentInstance: GObject.Object
    readonly priv: SocketControlMessagePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.UnixFDMessage */
    appendFd(fd: number): boolean
    getFdList(): UnixFDList
    stealFds(): number[]
    /* Methods of Gio-2.0.Gio.SocketControlMessage */
    getLevel(): number
    getMsgType(): number
    getSize(): number
    serialize(data: object): void
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
    constructor (config?: UnixFDMessage_ConstructProps)
    _init (config?: UnixFDMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnixFDMessage
    static newWithFdList(fdList: UnixFDList): UnixFDMessage
    static $gtype: GObject.Type
}
interface UnixInputStream_ConstructProps extends InputStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.UnixInputStream */
    closeFd?: boolean
    fd?: number
}
class UnixInputStream {
    /* Properties of Gio-2.0.Gio.UnixInputStream */
    closeFd: boolean
    /* Fields of Gio-2.0.Gio.InputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.UnixInputStream */
    getCloseFd(): boolean
    getFd(): number
    setCloseFd(closeFd: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    readBytesFinish(result: AsyncResult): any
    readFinish(result: AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skipFinish(result: AsyncResult): number
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
    /* Methods of Gio-2.0.Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-fd", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnixInputStream_ConstructProps)
    _init (config?: UnixInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number, closeFd: boolean): UnixInputStream
    static $gtype: GObject.Type
}
interface UnixMountMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
class UnixMountMonitor {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.UnixMountMonitor */
    setRateLimit(limitMsec: number): void
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
    /* Signals of Gio-2.0.Gio.UnixMountMonitor */
    connect(sigName: "mountpoints-changed", callback: (() => void)): number
    on(sigName: "mountpoints-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mountpoints-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mountpoints-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "mountpoints-changed"): void
    connect(sigName: "mounts-changed", callback: (() => void)): number
    on(sigName: "mounts-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mounts-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mounts-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "mounts-changed"): void
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
    constructor (config?: UnixMountMonitor_ConstructProps)
    _init (config?: UnixMountMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnixMountMonitor
    static get(): UnixMountMonitor
    static $gtype: GObject.Type
}
interface UnixOutputStream_ConstructProps extends OutputStream_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.UnixOutputStream */
    closeFd?: boolean
    fd?: number
}
class UnixOutputStream {
    /* Properties of Gio-2.0.Gio.UnixOutputStream */
    closeFd: boolean
    /* Fields of Gio-2.0.Gio.OutputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.UnixOutputStream */
    getCloseFd(): boolean
    getFd(): number
    setCloseFd(closeFd: boolean): void
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    closeFinish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flushFinish(result: AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    spliceFinish(result: AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Cancellable | null): number
    writeAll(buffer: Uint8Array, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writeBytesFinish(result: AsyncResult): number
    writeFinish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevAllFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writevFinish(result: AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Methods of Gio-2.0.Gio.PollableOutputStream */
    canPoll(): boolean
    createSource(cancellable?: Cancellable | null): GLib.Source
    isWritable(): boolean
    writeNonblocking(buffer: Uint8Array, cancellable?: Cancellable | null): number
    writevNonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-fd", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnixOutputStream_ConstructProps)
    _init (config?: UnixOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number, closeFd: boolean): UnixOutputStream
    static $gtype: GObject.Type
}
interface UnixSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.UnixSocketAddress */
    abstract?: boolean
    addressType?: UnixSocketAddressType
    path?: string
    pathAsArray?: Uint8Array
}
class UnixSocketAddress {
    /* Properties of Gio-2.0.Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio-2.0.Gio.SocketAddress */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.UnixSocketAddress */
    getAddressType(): UnixSocketAddressType
    getIsAbstract(): boolean
    getPath(): string
    getPathLen(): number
    /* Methods of Gio-2.0.Gio.SocketAddress */
    getFamily(): SocketFamily
    getNativeSize(): number
    toNative(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio-2.0.Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxyEnumerate(): SocketAddressEnumerator
    toString(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnixSocketAddress_ConstructProps)
    _init (config?: UnixSocketAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string): UnixSocketAddress
    static newAbstract(path: number[]): UnixSocketAddress
    static newWithType(path: number[], type: UnixSocketAddressType): UnixSocketAddress
    static abstractNamesSupported(): boolean
    static $gtype: GObject.Type
}
interface Vfs_ConstructProps extends GObject.Object_ConstructProps {
}
class Vfs {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Vfs */
    getFileForPath(path: string): File
    getFileForUri(uri: string): File
    getSupportedUriSchemes(): string[]
    isActive(): boolean
    parseName(parseName: string): File
    registerUriScheme(scheme: string, uriFunc?: VfsFileLookupFunc | null, parseNameFunc?: VfsFileLookupFunc | null): boolean
    unregisterUriScheme(scheme: string): boolean
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
    constructor (config?: Vfs_ConstructProps)
    _init (config?: Vfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Vfs
    static getLocal(): Vfs
    static $gtype: GObject.Type
}
interface VolumeMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
class VolumeMonitor {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.VolumeMonitor */
    getConnectedDrives(): Drive[]
    getMountForUuid(uuid: string): Mount | null
    getMounts(): Mount[]
    getVolumeForUuid(uuid: string): Volume | null
    getVolumes(): Volume[]
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
    /* Signals of Gio-2.0.Gio.VolumeMonitor */
    connect(sigName: "drive-changed", callback: ((drive: Drive) => void)): number
    on(sigName: "drive-changed", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drive-changed", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drive-changed", callback: (drive: Drive) => void): NodeJS.EventEmitter
    emit(sigName: "drive-changed", drive: Drive): void
    connect(sigName: "drive-connected", callback: ((drive: Drive) => void)): number
    on(sigName: "drive-connected", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drive-connected", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drive-connected", callback: (drive: Drive) => void): NodeJS.EventEmitter
    emit(sigName: "drive-connected", drive: Drive): void
    connect(sigName: "drive-disconnected", callback: ((drive: Drive) => void)): number
    on(sigName: "drive-disconnected", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drive-disconnected", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drive-disconnected", callback: (drive: Drive) => void): NodeJS.EventEmitter
    emit(sigName: "drive-disconnected", drive: Drive): void
    connect(sigName: "drive-eject-button", callback: ((drive: Drive) => void)): number
    on(sigName: "drive-eject-button", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drive-eject-button", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drive-eject-button", callback: (drive: Drive) => void): NodeJS.EventEmitter
    emit(sigName: "drive-eject-button", drive: Drive): void
    connect(sigName: "drive-stop-button", callback: ((drive: Drive) => void)): number
    on(sigName: "drive-stop-button", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drive-stop-button", callback: (drive: Drive) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drive-stop-button", callback: (drive: Drive) => void): NodeJS.EventEmitter
    emit(sigName: "drive-stop-button", drive: Drive): void
    connect(sigName: "mount-added", callback: ((mount: Mount) => void)): number
    on(sigName: "mount-added", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mount-added", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mount-added", callback: (mount: Mount) => void): NodeJS.EventEmitter
    emit(sigName: "mount-added", mount: Mount): void
    connect(sigName: "mount-changed", callback: ((mount: Mount) => void)): number
    on(sigName: "mount-changed", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mount-changed", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mount-changed", callback: (mount: Mount) => void): NodeJS.EventEmitter
    emit(sigName: "mount-changed", mount: Mount): void
    connect(sigName: "mount-pre-unmount", callback: ((mount: Mount) => void)): number
    on(sigName: "mount-pre-unmount", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mount-pre-unmount", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mount-pre-unmount", callback: (mount: Mount) => void): NodeJS.EventEmitter
    emit(sigName: "mount-pre-unmount", mount: Mount): void
    connect(sigName: "mount-removed", callback: ((mount: Mount) => void)): number
    on(sigName: "mount-removed", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mount-removed", callback: (mount: Mount) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mount-removed", callback: (mount: Mount) => void): NodeJS.EventEmitter
    emit(sigName: "mount-removed", mount: Mount): void
    connect(sigName: "volume-added", callback: ((volume: Volume) => void)): number
    on(sigName: "volume-added", callback: (volume: Volume) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-added", callback: (volume: Volume) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-added", callback: (volume: Volume) => void): NodeJS.EventEmitter
    emit(sigName: "volume-added", volume: Volume): void
    connect(sigName: "volume-changed", callback: ((volume: Volume) => void)): number
    on(sigName: "volume-changed", callback: (volume: Volume) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-changed", callback: (volume: Volume) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-changed", callback: (volume: Volume) => void): NodeJS.EventEmitter
    emit(sigName: "volume-changed", volume: Volume): void
    connect(sigName: "volume-removed", callback: ((volume: Volume) => void)): number
    on(sigName: "volume-removed", callback: (volume: Volume) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-removed", callback: (volume: Volume) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-removed", callback: (volume: Volume) => void): NodeJS.EventEmitter
    emit(sigName: "volume-removed", volume: Volume): void
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
    constructor (config?: VolumeMonitor_ConstructProps)
    _init (config?: VolumeMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static adoptOrphanMount(mount: Mount): Volume
    static get(): VolumeMonitor
    static $gtype: GObject.Type
}
interface ZlibCompressor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.ZlibCompressor */
    fileInfo?: FileInfo
    format?: ZlibCompressorFormat
    level?: number
}
class ZlibCompressor {
    /* Properties of Gio-2.0.Gio.ZlibCompressor */
    fileInfo: FileInfo
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.ZlibCompressor */
    getFileInfo(): FileInfo | null
    setFileInfo(fileInfo?: FileInfo | null): void
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
    /* Methods of Gio-2.0.Gio.Converter */
    convert(inbuf: Uint8Array, outbuf: Uint8Array, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    reset(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::file-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ZlibCompressor_ConstructProps)
    _init (config?: ZlibCompressor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: ZlibCompressorFormat, level: number): ZlibCompressor
    static $gtype: GObject.Type
}
interface ZlibDecompressor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gio-2.0.Gio.ZlibDecompressor */
    format?: ZlibCompressorFormat
}
class ZlibDecompressor {
    /* Properties of Gio-2.0.Gio.ZlibDecompressor */
    readonly fileInfo: FileInfo
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.ZlibDecompressor */
    getFileInfo(): FileInfo | null
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
    /* Methods of Gio-2.0.Gio.Converter */
    convert(inbuf: Uint8Array, outbuf: Uint8Array, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    reset(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::file-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ZlibDecompressor_ConstructProps)
    _init (config?: ZlibDecompressor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: ZlibCompressorFormat): ZlibDecompressor
    static $gtype: GObject.Type
}
class ActionEntry {
    /* Fields of Gio-2.0.Gio.ActionEntry */
    readonly name: string
    readonly activate: (action: SimpleAction, parameter: GLib.Variant) => void
    readonly parameterType: string
    readonly state: string
    readonly changeState: (action: SimpleAction, value: GLib.Variant) => void
    static name: string
}
abstract class ActionGroupInterface {
    /* Fields of Gio-2.0.Gio.ActionGroupInterface */
    readonly gIface: GObject.TypeInterface
    readonly hasAction: (actionGroup: ActionGroup, actionName: string) => boolean
    readonly listActions: (actionGroup: ActionGroup) => string[]
    readonly getActionEnabled: (actionGroup: ActionGroup, actionName: string) => boolean
    readonly getActionParameterType: (actionGroup: ActionGroup, actionName: string) => GLib.VariantType | null
    readonly getActionStateType: (actionGroup: ActionGroup, actionName: string) => GLib.VariantType | null
    readonly getActionStateHint: (actionGroup: ActionGroup, actionName: string) => GLib.Variant | null
    readonly getActionState: (actionGroup: ActionGroup, actionName: string) => GLib.Variant | null
    readonly changeActionState: (actionGroup: ActionGroup, actionName: string, value: GLib.Variant) => void
    readonly activateAction: (actionGroup: ActionGroup, actionName: string, parameter?: GLib.Variant | null) => void
    readonly actionAdded: (actionGroup: ActionGroup, actionName: string) => void
    readonly actionRemoved: (actionGroup: ActionGroup, actionName: string) => void
    readonly actionEnabledChanged: (actionGroup: ActionGroup, actionName: string, enabled: boolean) => void
    readonly actionStateChanged: (actionGroup: ActionGroup, actionName: string, state: GLib.Variant) => void
    readonly queryAction: (actionGroup: ActionGroup, actionName: string) => [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    static name: string
}
abstract class ActionInterface {
    /* Fields of Gio-2.0.Gio.ActionInterface */
    readonly gIface: GObject.TypeInterface
    readonly getName: (action: Action) => string
    readonly getParameterType: (action: Action) => GLib.VariantType | null
    readonly getStateType: (action: Action) => GLib.VariantType | null
    readonly getStateHint: (action: Action) => GLib.Variant | null
    readonly getEnabled: (action: Action) => boolean
    readonly getState: (action: Action) => GLib.Variant | null
    readonly changeState: (action: Action, value: GLib.Variant) => void
    readonly activate: (action: Action, parameter?: GLib.Variant | null) => void
    static name: string
}
abstract class ActionMapInterface {
    /* Fields of Gio-2.0.Gio.ActionMapInterface */
    readonly gIface: GObject.TypeInterface
    readonly lookupAction: (actionMap: ActionMap, actionName: string) => Action | null
    readonly addAction: (actionMap: ActionMap, action: Action) => void
    readonly removeAction: (actionMap: ActionMap, actionName: string) => void
    static name: string
}
abstract class AppInfoIface {
    /* Fields of Gio-2.0.Gio.AppInfoIface */
    readonly gIface: GObject.TypeInterface
    readonly dup: (appinfo: AppInfo) => AppInfo
    readonly equal: (appinfo1: AppInfo, appinfo2: AppInfo) => boolean
    readonly getId: (appinfo: AppInfo) => string | null
    readonly getName: (appinfo: AppInfo) => string
    readonly getDescription: (appinfo: AppInfo) => string | null
    readonly getExecutable: (appinfo: AppInfo) => string
    readonly getIcon: (appinfo: AppInfo) => Icon | null
    readonly launch: (appinfo: AppInfo, files?: File[] | null, context?: AppLaunchContext | null) => boolean
    readonly supportsUris: (appinfo: AppInfo) => boolean
    readonly supportsFiles: (appinfo: AppInfo) => boolean
    readonly launchUris: (appinfo: AppInfo, uris?: string[] | null, context?: AppLaunchContext | null) => boolean
    readonly shouldShow: (appinfo: AppInfo) => boolean
    readonly setAsDefaultForType: (appinfo: AppInfo, contentType: string) => boolean
    readonly setAsDefaultForExtension: (appinfo: AppInfo, extension: string) => boolean
    readonly addSupportsType: (appinfo: AppInfo, contentType: string) => boolean
    readonly canRemoveSupportsType: (appinfo: AppInfo) => boolean
    readonly removeSupportsType: (appinfo: AppInfo, contentType: string) => boolean
    readonly canDelete: (appinfo: AppInfo) => boolean
    readonly doDelete: (appinfo: AppInfo) => boolean
    readonly getCommandline: (appinfo: AppInfo) => string | null
    readonly getDisplayName: (appinfo: AppInfo) => string
    readonly setAsLastUsedForType: (appinfo: AppInfo, contentType: string) => boolean
    readonly getSupportedTypes: (appinfo: AppInfo) => string[]
    readonly launchUrisAsync: (appinfo: AppInfo, uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly launchUrisFinish: (appinfo: AppInfo, result: AsyncResult) => boolean
    static name: string
}
abstract class AppLaunchContextClass {
    /* Fields of Gio-2.0.Gio.AppLaunchContextClass */
    readonly parentClass: GObject.ObjectClass
    readonly getDisplay: (context: AppLaunchContext, info: AppInfo, files: File[]) => string | null
    readonly getStartupNotifyId: (context: AppLaunchContext, info: AppInfo, files: File[]) => string | null
    readonly launchFailed: (context: AppLaunchContext, startupNotifyId: string) => void
    readonly launched: (context: AppLaunchContext, info: AppInfo, platformData: GLib.Variant) => void
    readonly launchStarted: (context: AppLaunchContext, info: AppInfo, platformData: GLib.Variant) => void
    static name: string
}
class AppLaunchContextPrivate {
    static name: string
}
abstract class ApplicationClass {
    /* Fields of Gio-2.0.Gio.ApplicationClass */
    readonly startup: (application: Application) => void
    readonly activate: (application: Application) => void
    readonly open: (application: Application, files: File[], hint: string) => void
    readonly commandLine: (application: Application, commandLine: ApplicationCommandLine) => number
    readonly localCommandLine: (application: Application, arguments_: string[]) => [ /* returnType */ boolean, /* arguments_ */ string[], /* exitStatus */ number ]
    readonly beforeEmit: (application: Application, platformData: GLib.Variant) => void
    readonly afterEmit: (application: Application, platformData: GLib.Variant) => void
    readonly addPlatformData: (application: Application, builder: GLib.VariantBuilder) => void
    readonly quitMainloop: (application: Application) => void
    readonly runMainloop: (application: Application) => void
    readonly shutdown: (application: Application) => void
    readonly dbusRegister: (application: Application, connection: DBusConnection, objectPath: string) => boolean
    readonly dbusUnregister: (application: Application, connection: DBusConnection, objectPath: string) => void
    readonly handleLocalOptions: (application: Application, options: GLib.VariantDict) => number
    readonly nameLost: (application: Application) => boolean
    static name: string
}
abstract class ApplicationCommandLineClass {
    /* Fields of Gio-2.0.Gio.ApplicationCommandLineClass */
    readonly printLiteral: (cmdline: ApplicationCommandLine, message: string) => void
    readonly printerrLiteral: (cmdline: ApplicationCommandLine, message: string) => void
    readonly getStdin: (cmdline: ApplicationCommandLine) => InputStream | null
    static name: string
}
class ApplicationCommandLinePrivate {
    static name: string
}
class ApplicationPrivate {
    static name: string
}
abstract class AsyncInitableIface {
    /* Fields of Gio-2.0.Gio.AsyncInitableIface */
    readonly gIface: GObject.TypeInterface
    readonly initAsync: (initable: AsyncInitable, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly initFinish: (initable: AsyncInitable, res: AsyncResult) => boolean
    static name: string
}
abstract class AsyncResultIface {
    /* Fields of Gio-2.0.Gio.AsyncResultIface */
    readonly gIface: GObject.TypeInterface
    readonly getUserData: (res: AsyncResult) => object | null
    readonly getSourceObject: (res: AsyncResult) => GObject.Object | null
    readonly isTagged: (res: AsyncResult, sourceTag?: object | null) => boolean
    static name: string
}
abstract class BufferedInputStreamClass {
    /* Fields of Gio-2.0.Gio.BufferedInputStreamClass */
    readonly parentClass: FilterInputStreamClass
    readonly fill: (stream: BufferedInputStream, count: number, cancellable?: Cancellable | null) => number
    readonly fillAsync: (stream: BufferedInputStream, count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly fillFinish: (stream: BufferedInputStream, result: AsyncResult) => number
    static name: string
}
class BufferedInputStreamPrivate {
    static name: string
}
abstract class BufferedOutputStreamClass {
    /* Fields of Gio-2.0.Gio.BufferedOutputStreamClass */
    readonly parentClass: FilterOutputStreamClass
    static name: string
}
class BufferedOutputStreamPrivate {
    static name: string
}
abstract class CancellableClass {
    /* Fields of Gio-2.0.Gio.CancellableClass */
    readonly parentClass: GObject.ObjectClass
    readonly cancelled: (cancellable?: Cancellable | null) => void
    static name: string
}
class CancellablePrivate {
    static name: string
}
abstract class CharsetConverterClass {
    /* Fields of Gio-2.0.Gio.CharsetConverterClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ConverterIface {
    /* Fields of Gio-2.0.Gio.ConverterIface */
    readonly gIface: GObject.TypeInterface
    readonly convert: (converter: Converter, inbuf: Uint8Array | null, outbuf: Uint8Array | null, flags: ConverterFlags) => [ /* returnType */ ConverterResult, /* bytesRead */ number, /* bytesWritten */ number ]
    readonly reset: (converter: Converter) => void
    static name: string
}
abstract class ConverterInputStreamClass {
    /* Fields of Gio-2.0.Gio.ConverterInputStreamClass */
    readonly parentClass: FilterInputStreamClass
    static name: string
}
class ConverterInputStreamPrivate {
    static name: string
}
abstract class ConverterOutputStreamClass {
    /* Fields of Gio-2.0.Gio.ConverterOutputStreamClass */
    readonly parentClass: FilterOutputStreamClass
    static name: string
}
class ConverterOutputStreamPrivate {
    static name: string
}
abstract class CredentialsClass {
    static name: string
}
class DBusAnnotationInfo {
    /* Fields of Gio-2.0.Gio.DBusAnnotationInfo */
    readonly refCount: number
    readonly key: string
    readonly value: string
    readonly annotations: DBusAnnotationInfo[]
    /* Methods of Gio-2.0.Gio.DBusAnnotationInfo */
    ref(): DBusAnnotationInfo
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static lookup(annotations: DBusAnnotationInfo[] | null, name: string): string | null
}
class DBusArgInfo {
    /* Fields of Gio-2.0.Gio.DBusArgInfo */
    readonly refCount: number
    readonly name: string
    readonly signature: string
    readonly annotations: DBusAnnotationInfo[]
    /* Methods of Gio-2.0.Gio.DBusArgInfo */
    ref(): DBusArgInfo
    unref(): void
    static name: string
}
class DBusErrorEntry {
    /* Fields of Gio-2.0.Gio.DBusErrorEntry */
    readonly errorCode: number
    readonly dbusErrorName: string
    static name: string
}
abstract class DBusInterfaceIface {
    /* Fields of Gio-2.0.Gio.DBusInterfaceIface */
    readonly parentIface: GObject.TypeInterface
    readonly getInfo: (interface: DBusInterface) => DBusInterfaceInfo
    readonly getObject: (interface: DBusInterface) => DBusObject | null
    readonly setObject: (interface: DBusInterface, object?: DBusObject | null) => void
    readonly dupObject: (interface: DBusInterface) => DBusObject | null
    static name: string
}
class DBusInterfaceInfo {
    /* Fields of Gio-2.0.Gio.DBusInterfaceInfo */
    readonly refCount: number
    readonly name: string
    readonly methods: DBusMethodInfo[]
    readonly signals: DBusSignalInfo[]
    readonly properties: DBusPropertyInfo[]
    readonly annotations: DBusAnnotationInfo[]
    /* Methods of Gio-2.0.Gio.DBusInterfaceInfo */
    cacheBuild(): void
    cacheRelease(): void
    generateXml(indent: number, stringBuilder: GLib.String): void
    lookupMethod(name: string): DBusMethodInfo | null
    lookupProperty(name: string): DBusPropertyInfo | null
    lookupSignal(name: string): DBusSignalInfo | null
    ref(): DBusInterfaceInfo
    unref(): void
    static name: string
}
abstract class DBusInterfaceSkeletonClass {
    /* Fields of Gio-2.0.Gio.DBusInterfaceSkeletonClass */
    readonly parentClass: GObject.ObjectClass
    readonly getInfo: (interface: DBusInterfaceSkeleton) => DBusInterfaceInfo
    readonly getProperties: (interface: DBusInterfaceSkeleton) => GLib.Variant
    readonly flush: (interface: DBusInterfaceSkeleton) => void
    readonly gAuthorizeMethod: (interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean
    static name: string
}
class DBusInterfaceSkeletonPrivate {
    static name: string
}
class DBusInterfaceVTable {
    /* Fields of Gio-2.0.Gio.DBusInterfaceVTable */
    readonly methodCall: DBusInterfaceMethodCallFunc
    readonly getProperty: DBusInterfaceGetPropertyFunc
    readonly setProperty: DBusInterfaceSetPropertyFunc
    static name: string
}
class DBusMethodInfo {
    /* Fields of Gio-2.0.Gio.DBusMethodInfo */
    readonly refCount: number
    readonly name: string
    readonly inArgs: DBusArgInfo[]
    readonly outArgs: DBusArgInfo[]
    readonly annotations: DBusAnnotationInfo[]
    /* Methods of Gio-2.0.Gio.DBusMethodInfo */
    ref(): DBusMethodInfo
    unref(): void
    static name: string
}
class DBusNodeInfo {
    /* Fields of Gio-2.0.Gio.DBusNodeInfo */
    readonly refCount: number
    readonly path: string
    readonly interfaces: DBusInterfaceInfo[]
    readonly nodes: DBusNodeInfo[]
    readonly annotations: DBusAnnotationInfo[]
    /* Methods of Gio-2.0.Gio.DBusNodeInfo */
    generateXml(indent: number, stringBuilder: GLib.String): void
    lookupInterface(name: string): DBusInterfaceInfo | null
    ref(): DBusNodeInfo
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newForXml(xmlData: string): DBusNodeInfo
}
abstract class DBusObjectIface {
    /* Fields of Gio-2.0.Gio.DBusObjectIface */
    readonly parentIface: GObject.TypeInterface
    readonly getObjectPath: (object: DBusObject) => string
    readonly getInterfaces: (object: DBusObject) => DBusInterface[]
    readonly getInterface: (object: DBusObject, interfaceName: string) => DBusInterface | null
    readonly interfaceAdded: (object: DBusObject, interface: DBusInterface) => void
    readonly interfaceRemoved: (object: DBusObject, interface: DBusInterface) => void
    static name: string
}
abstract class DBusObjectManagerClientClass {
    /* Fields of Gio-2.0.Gio.DBusObjectManagerClientClass */
    readonly parentClass: GObject.ObjectClass
    readonly interfaceProxySignal: (manager: DBusObjectManagerClient, objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void
    readonly interfaceProxyPropertiesChanged: (manager: DBusObjectManagerClient, objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string) => void
    static name: string
}
class DBusObjectManagerClientPrivate {
    static name: string
}
abstract class DBusObjectManagerIface {
    /* Fields of Gio-2.0.Gio.DBusObjectManagerIface */
    readonly parentIface: GObject.TypeInterface
    readonly getObjectPath: (manager: DBusObjectManager) => string
    readonly getObjects: (manager: DBusObjectManager) => DBusObject[]
    readonly getObject: (manager: DBusObjectManager, objectPath: string) => DBusObject | null
    readonly getInterface: (manager: DBusObjectManager, objectPath: string, interfaceName: string) => DBusInterface | null
    readonly objectAdded: (manager: DBusObjectManager, object: DBusObject) => void
    readonly objectRemoved: (manager: DBusObjectManager, object: DBusObject) => void
    readonly interfaceAdded: (manager: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void
    readonly interfaceRemoved: (manager: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void
    static name: string
}
abstract class DBusObjectManagerServerClass {
    /* Fields of Gio-2.0.Gio.DBusObjectManagerServerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DBusObjectManagerServerPrivate {
    static name: string
}
abstract class DBusObjectProxyClass {
    /* Fields of Gio-2.0.Gio.DBusObjectProxyClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DBusObjectProxyPrivate {
    static name: string
}
abstract class DBusObjectSkeletonClass {
    /* Fields of Gio-2.0.Gio.DBusObjectSkeletonClass */
    readonly parentClass: GObject.ObjectClass
    readonly authorizeMethod: (object: DBusObjectSkeleton, interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean
    static name: string
}
class DBusObjectSkeletonPrivate {
    static name: string
}
class DBusPropertyInfo {
    /* Fields of Gio-2.0.Gio.DBusPropertyInfo */
    readonly refCount: number
    readonly name: string
    readonly signature: string
    readonly flags: DBusPropertyInfoFlags
    readonly annotations: DBusAnnotationInfo[]
    /* Methods of Gio-2.0.Gio.DBusPropertyInfo */
    ref(): DBusPropertyInfo
    unref(): void
    static name: string
}
abstract class DBusProxyClass {
    /* Fields of Gio-2.0.Gio.DBusProxyClass */
    readonly gPropertiesChanged: (proxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string) => void
    readonly gSignal: (proxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void
    static name: string
}
class DBusProxyPrivate {
    static name: string
}
class DBusSignalInfo {
    /* Fields of Gio-2.0.Gio.DBusSignalInfo */
    readonly refCount: number
    readonly name: string
    readonly args: DBusArgInfo[]
    readonly annotations: DBusAnnotationInfo[]
    /* Methods of Gio-2.0.Gio.DBusSignalInfo */
    ref(): DBusSignalInfo
    unref(): void
    static name: string
}
class DBusSubtreeVTable {
    /* Fields of Gio-2.0.Gio.DBusSubtreeVTable */
    readonly enumerate: DBusSubtreeEnumerateFunc
    readonly introspect: DBusSubtreeIntrospectFunc
    readonly dispatch: DBusSubtreeDispatchFunc
    static name: string
}
abstract class DataInputStreamClass {
    /* Fields of Gio-2.0.Gio.DataInputStreamClass */
    readonly parentClass: BufferedInputStreamClass
    static name: string
}
class DataInputStreamPrivate {
    static name: string
}
abstract class DataOutputStreamClass {
    /* Fields of Gio-2.0.Gio.DataOutputStreamClass */
    readonly parentClass: FilterOutputStreamClass
    static name: string
}
class DataOutputStreamPrivate {
    static name: string
}
abstract class DatagramBasedInterface {
    /* Fields of Gio-2.0.Gio.DatagramBasedInterface */
    readonly gIface: GObject.TypeInterface
    readonly receiveMessages: (datagramBased: DatagramBased, messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null) => number
    readonly sendMessages: (datagramBased: DatagramBased, messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null) => number
    readonly createSource: (datagramBased: DatagramBased, condition: GLib.IOCondition, cancellable?: Cancellable | null) => GLib.Source
    readonly conditionCheck: (datagramBased: DatagramBased, condition: GLib.IOCondition) => GLib.IOCondition
    readonly conditionWait: (datagramBased: DatagramBased, condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null) => boolean
    static name: string
}
abstract class DesktopAppInfoClass {
    /* Fields of Gio-2.0.Gio.DesktopAppInfoClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class DesktopAppInfoLookupIface {
    /* Fields of Gio-2.0.Gio.DesktopAppInfoLookupIface */
    readonly gIface: GObject.TypeInterface
    readonly getDefaultForUriScheme: (lookup: DesktopAppInfoLookup, uriScheme: string) => AppInfo | null
    static name: string
}
abstract class DriveIface {
    /* Fields of Gio-2.0.Gio.DriveIface */
    readonly gIface: GObject.TypeInterface
    readonly changed: (drive: Drive) => void
    readonly disconnected: (drive: Drive) => void
    readonly ejectButton: (drive: Drive) => void
    readonly getName: (drive: Drive) => string
    readonly getIcon: (drive: Drive) => Icon
    readonly hasVolumes: (drive: Drive) => boolean
    readonly getVolumes: (drive: Drive) => Volume[]
    readonly isMediaRemovable: (drive: Drive) => boolean
    readonly hasMedia: (drive: Drive) => boolean
    readonly isMediaCheckAutomatic: (drive: Drive) => boolean
    readonly canEject: (drive: Drive) => boolean
    readonly canPollForMedia: (drive: Drive) => boolean
    readonly eject: (drive: Drive, flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly ejectFinish: (drive: Drive, result: AsyncResult) => boolean
    readonly pollForMedia: (drive: Drive, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly pollForMediaFinish: (drive: Drive, result: AsyncResult) => boolean
    readonly getIdentifier: (drive: Drive, kind: string) => string | null
    readonly enumerateIdentifiers: (drive: Drive) => string[]
    readonly getStartStopType: (drive: Drive) => DriveStartStopType
    readonly canStart: (drive: Drive) => boolean
    readonly canStartDegraded: (drive: Drive) => boolean
    readonly start: (drive: Drive, flags: DriveStartFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly startFinish: (drive: Drive, result: AsyncResult) => boolean
    readonly canStop: (drive: Drive) => boolean
    readonly stop: (drive: Drive, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly stopFinish: (drive: Drive, result: AsyncResult) => boolean
    readonly stopButton: (drive: Drive) => void
    readonly ejectWithOperation: (drive: Drive, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly ejectWithOperationFinish: (drive: Drive, result: AsyncResult) => boolean
    readonly getSortKey: (drive: Drive) => string | null
    readonly getSymbolicIcon: (drive: Drive) => Icon
    readonly isRemovable: (drive: Drive) => boolean
    static name: string
}
abstract class DtlsClientConnectionInterface {
    /* Fields of Gio-2.0.Gio.DtlsClientConnectionInterface */
    readonly gIface: GObject.TypeInterface
    static name: string
}
abstract class DtlsConnectionInterface {
    /* Fields of Gio-2.0.Gio.DtlsConnectionInterface */
    readonly gIface: GObject.TypeInterface
    readonly acceptCertificate: (connection: DtlsConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean
    readonly handshake: (conn: DtlsConnection, cancellable?: Cancellable | null) => boolean
    readonly handshakeAsync: (conn: DtlsConnection, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly handshakeFinish: (conn: DtlsConnection, result: AsyncResult) => boolean
    readonly shutdown: (conn: DtlsConnection, shutdownRead: boolean, shutdownWrite: boolean, cancellable?: Cancellable | null) => boolean
    readonly shutdownAsync: (conn: DtlsConnection, shutdownRead: boolean, shutdownWrite: boolean, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly shutdownFinish: (conn: DtlsConnection, result: AsyncResult) => boolean
    readonly setAdvertisedProtocols: (conn: DtlsConnection, protocols?: string[] | null) => void
    readonly getNegotiatedProtocol: (conn: DtlsConnection) => string | null
    readonly getBindingData: (conn: DtlsConnection, type: TlsChannelBindingType, data: Uint8Array) => boolean
    static name: string
}
abstract class DtlsServerConnectionInterface {
    /* Fields of Gio-2.0.Gio.DtlsServerConnectionInterface */
    readonly gIface: GObject.TypeInterface
    static name: string
}
abstract class EmblemClass {
    static name: string
}
abstract class EmblemedIconClass {
    /* Fields of Gio-2.0.Gio.EmblemedIconClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class EmblemedIconPrivate {
    static name: string
}
class FileAttributeInfo {
    /* Fields of Gio-2.0.Gio.FileAttributeInfo */
    readonly name: string
    readonly type: FileAttributeType
    readonly flags: FileAttributeInfoFlags
    static name: string
}
class FileAttributeInfoList {
    /* Fields of Gio-2.0.Gio.FileAttributeInfoList */
    readonly infos: FileAttributeInfo
    readonly nInfos: number
    /* Methods of Gio-2.0.Gio.FileAttributeInfoList */
    add(name: string, type: FileAttributeType, flags: FileAttributeInfoFlags): void
    dup(): FileAttributeInfoList
    lookup(name: string): FileAttributeInfo
    ref(): FileAttributeInfoList
    unref(): void
    static name: string
    static new(): FileAttributeInfoList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FileAttributeInfoList
}
class FileAttributeMatcher {
    /* Methods of Gio-2.0.Gio.FileAttributeMatcher */
    enumerateNamespace(ns: string): boolean
    enumerateNext(): string | null
    matches(attribute: string): boolean
    matchesOnly(attribute: string): boolean
    ref(): FileAttributeMatcher
    subtract(subtract?: FileAttributeMatcher | null): FileAttributeMatcher | null
    toString(): string
    unref(): void
    static name: string
    static new(attributes: string): FileAttributeMatcher
    constructor(attributes: string)
    /* Static methods and pseudo-constructors */
    static new(attributes: string): FileAttributeMatcher
}
abstract class FileDescriptorBasedIface {
    /* Fields of Gio-2.0.Gio.FileDescriptorBasedIface */
    readonly gIface: GObject.TypeInterface
    readonly getFd: (fdBased: FileDescriptorBased) => number
    static name: string
}
abstract class FileEnumeratorClass {
    /* Fields of Gio-2.0.Gio.FileEnumeratorClass */
    readonly parentClass: GObject.ObjectClass
    readonly nextFile: (enumerator: FileEnumerator, cancellable?: Cancellable | null) => FileInfo | null
    readonly closeFn: (enumerator: FileEnumerator, cancellable?: Cancellable | null) => boolean
    readonly nextFilesAsync: (enumerator: FileEnumerator, numFiles: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly nextFilesFinish: (enumerator: FileEnumerator, result: AsyncResult) => FileInfo[]
    readonly closeAsync: (enumerator: FileEnumerator, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly closeFinish: (enumerator: FileEnumerator, result: AsyncResult) => boolean
    static name: string
}
class FileEnumeratorPrivate {
    static name: string
}
abstract class FileIOStreamClass {
    /* Fields of Gio-2.0.Gio.FileIOStreamClass */
    readonly parentClass: IOStreamClass
    readonly tell: (stream: FileIOStream) => number
    readonly canSeek: (stream: FileIOStream) => boolean
    readonly seek: (stream: FileIOStream, offset: number, type: GLib.SeekType, cancellable?: Cancellable | null) => boolean
    readonly canTruncate: (stream: FileIOStream) => boolean
    readonly truncateFn: (stream: FileIOStream, size: number, cancellable?: Cancellable | null) => boolean
    readonly queryInfo: (stream: FileIOStream, attributes: string, cancellable?: Cancellable | null) => FileInfo
    readonly queryInfoAsync: (stream: FileIOStream, attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly queryInfoFinish: (stream: FileIOStream, result: AsyncResult) => FileInfo
    readonly getEtag: (stream: FileIOStream) => string | null
    static name: string
}
class FileIOStreamPrivate {
    static name: string
}
abstract class FileIconClass {
    static name: string
}
abstract class FileIface {
    /* Fields of Gio-2.0.Gio.FileIface */
    readonly gIface: GObject.TypeInterface
    readonly dup: (file: File) => File
    readonly hash: (file: File) => number
    readonly equal: (file1: File, file2: File) => boolean
    readonly isNative: (file: File) => boolean
    readonly hasUriScheme: (file: File, uriScheme: string) => boolean
    readonly getUriScheme: (file: File) => string | null
    readonly getBasename: (file: File) => string | null
    readonly getPath: (file: File) => string | null
    readonly getUri: (file: File) => string
    readonly getParseName: (file: File) => string
    readonly getParent: (file: File) => File | null
    readonly prefixMatches: (prefix: File, file: File) => boolean
    readonly getRelativePath: (parent: File, descendant: File) => string | null
    readonly resolveRelativePath: (file: File, relativePath: string) => File | null
    readonly getChildForDisplayName: (file: File, displayName: string) => File
    readonly enumerateChildren: (file: File, attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null) => FileEnumerator
    readonly enumerateChildrenAsync: (file: File, attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly enumerateChildrenFinish: (file: File, res: AsyncResult) => FileEnumerator
    readonly queryInfo: (file: File, attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null) => FileInfo
    readonly queryInfoAsync: (file: File, attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly queryInfoFinish: (file: File, res: AsyncResult) => FileInfo
    readonly queryFilesystemInfo: (file: File, attributes: string, cancellable?: Cancellable | null) => FileInfo
    readonly queryFilesystemInfoAsync: (file: File, attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly queryFilesystemInfoFinish: (file: File, res: AsyncResult) => FileInfo
    readonly findEnclosingMount: (file: File, cancellable?: Cancellable | null) => Mount
    readonly findEnclosingMountAsync: (file: File, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly findEnclosingMountFinish: (file: File, res: AsyncResult) => Mount
    readonly setDisplayName: (file: File, displayName: string, cancellable?: Cancellable | null) => File
    readonly setDisplayNameAsync: (file: File, displayName: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly setDisplayNameFinish: (file: File, res: AsyncResult) => File
    readonly querySettableAttributes: (file: File, cancellable?: Cancellable | null) => FileAttributeInfoList
    readonly queryWritableNamespaces: (file: File, cancellable?: Cancellable | null) => FileAttributeInfoList
    readonly setAttribute: (file: File, attribute: string, type: FileAttributeType, valueP: object | null, flags: FileQueryInfoFlags, cancellable?: Cancellable | null) => boolean
    readonly setAttributesFromInfo: (file: File, info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null) => boolean
    readonly setAttributesAsync: (file: File, info: FileInfo, flags: FileQueryInfoFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly setAttributesFinish: (file: File, result: AsyncResult) => [ /* returnType */ boolean, /* info */ FileInfo ]
    readonly readFn: (file: File, cancellable?: Cancellable | null) => FileInputStream
    readonly readAsync: (file: File, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly readFinish: (file: File, res: AsyncResult) => FileInputStream
    readonly appendTo: (file: File, flags: FileCreateFlags, cancellable?: Cancellable | null) => FileOutputStream
    readonly appendToAsync: (file: File, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly appendToFinish: (file: File, res: AsyncResult) => FileOutputStream
    readonly create: (file: File, flags: FileCreateFlags, cancellable?: Cancellable | null) => FileOutputStream
    readonly createAsync: (file: File, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly createFinish: (file: File, res: AsyncResult) => FileOutputStream
    readonly replace: (file: File, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null) => FileOutputStream
    readonly replaceAsync: (file: File, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly replaceFinish: (file: File, res: AsyncResult) => FileOutputStream
    readonly deleteFile: (file: File, cancellable?: Cancellable | null) => boolean
    readonly deleteFileAsync: (file: File, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly deleteFileFinish: (file: File, result: AsyncResult) => boolean
    readonly trash: (file: File, cancellable?: Cancellable | null) => boolean
    readonly trashAsync: (file: File, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly trashFinish: (file: File, result: AsyncResult) => boolean
    readonly makeDirectory: (file: File, cancellable?: Cancellable | null) => boolean
    readonly makeDirectoryAsync: (file: File, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly makeDirectoryFinish: (file: File, result: AsyncResult) => boolean
    readonly makeSymbolicLink: (file: File, symlinkValue: string, cancellable?: Cancellable | null) => boolean
    readonly copy: (source: File, destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progressCallback?: FileProgressCallback | null) => boolean
    readonly copyAsync: (source: File, destination: File, flags: FileCopyFlags, ioPriority: number, cancellable?: Cancellable | null) => void
    readonly copyFinish: (file: File, res: AsyncResult) => boolean
    readonly move: (source: File, destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progressCallback?: FileProgressCallback | null) => boolean
    readonly mountMountable: (file: File, flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly mountMountableFinish: (file: File, result: AsyncResult) => File
    readonly unmountMountable: (file: File, flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly unmountMountableFinish: (file: File, result: AsyncResult) => boolean
    readonly ejectMountable: (file: File, flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly ejectMountableFinish: (file: File, result: AsyncResult) => boolean
    readonly mountEnclosingVolume: (location: File, flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly mountEnclosingVolumeFinish: (location: File, result: AsyncResult) => boolean
    readonly monitorDir: (file: File, flags: FileMonitorFlags, cancellable?: Cancellable | null) => FileMonitor
    readonly monitorFile: (file: File, flags: FileMonitorFlags, cancellable?: Cancellable | null) => FileMonitor
    readonly openReadwrite: (file: File, cancellable?: Cancellable | null) => FileIOStream
    readonly openReadwriteAsync: (file: File, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly openReadwriteFinish: (file: File, res: AsyncResult) => FileIOStream
    readonly createReadwrite: (file: File, flags: FileCreateFlags, cancellable?: Cancellable | null) => FileIOStream
    readonly createReadwriteAsync: (file: File, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly createReadwriteFinish: (file: File, res: AsyncResult) => FileIOStream
    readonly replaceReadwrite: (file: File, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null) => FileIOStream
    readonly replaceReadwriteAsync: (file: File, etag: string | null, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly replaceReadwriteFinish: (file: File, res: AsyncResult) => FileIOStream
    readonly startMountable: (file: File, flags: DriveStartFlags, startOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly startMountableFinish: (file: File, result: AsyncResult) => boolean
    readonly stopMountable: (file: File, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly stopMountableFinish: (file: File, result: AsyncResult) => boolean
    readonly supportsThreadContexts: boolean
    readonly unmountMountableWithOperation: (file: File, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly unmountMountableWithOperationFinish: (file: File, result: AsyncResult) => boolean
    readonly ejectMountableWithOperation: (file: File, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly ejectMountableWithOperationFinish: (file: File, result: AsyncResult) => boolean
    readonly pollMountable: (file: File, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly pollMountableFinish: (file: File, result: AsyncResult) => boolean
    readonly measureDiskUsageFinish: (file: File, result: AsyncResult) => [ /* returnType */ boolean, /* diskUsage */ number | null, /* numDirs */ number | null, /* numFiles */ number | null ]
    static name: string
}
abstract class FileInfoClass {
    static name: string
}
abstract class FileInputStreamClass {
    /* Fields of Gio-2.0.Gio.FileInputStreamClass */
    readonly parentClass: InputStreamClass
    readonly tell: (stream: FileInputStream) => number
    readonly canSeek: (stream: FileInputStream) => boolean
    readonly seek: (stream: FileInputStream, offset: number, type: GLib.SeekType, cancellable?: Cancellable | null) => boolean
    readonly queryInfo: (stream: FileInputStream, attributes: string, cancellable?: Cancellable | null) => FileInfo
    readonly queryInfoAsync: (stream: FileInputStream, attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly queryInfoFinish: (stream: FileInputStream, result: AsyncResult) => FileInfo
    static name: string
}
class FileInputStreamPrivate {
    static name: string
}
abstract class FileMonitorClass {
    /* Fields of Gio-2.0.Gio.FileMonitorClass */
    readonly parentClass: GObject.ObjectClass
    readonly changed: (monitor: FileMonitor, file: File, otherFile: File, eventType: FileMonitorEvent) => void
    readonly cancel: (monitor: FileMonitor) => boolean
    static name: string
}
class FileMonitorPrivate {
    static name: string
}
abstract class FileOutputStreamClass {
    /* Fields of Gio-2.0.Gio.FileOutputStreamClass */
    readonly parentClass: OutputStreamClass
    readonly tell: (stream: FileOutputStream) => number
    readonly canSeek: (stream: FileOutputStream) => boolean
    readonly seek: (stream: FileOutputStream, offset: number, type: GLib.SeekType, cancellable?: Cancellable | null) => boolean
    readonly canTruncate: (stream: FileOutputStream) => boolean
    readonly truncateFn: (stream: FileOutputStream, size: number, cancellable?: Cancellable | null) => boolean
    readonly queryInfo: (stream: FileOutputStream, attributes: string, cancellable?: Cancellable | null) => FileInfo
    readonly queryInfoAsync: (stream: FileOutputStream, attributes: string, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly queryInfoFinish: (stream: FileOutputStream, result: AsyncResult) => FileInfo
    readonly getEtag: (stream: FileOutputStream) => string | null
    static name: string
}
class FileOutputStreamPrivate {
    static name: string
}
abstract class FilenameCompleterClass {
    /* Fields of Gio-2.0.Gio.FilenameCompleterClass */
    readonly parentClass: GObject.ObjectClass
    readonly gotCompletionData: (filenameCompleter: FilenameCompleter) => void
    static name: string
}
abstract class FilterInputStreamClass {
    /* Fields of Gio-2.0.Gio.FilterInputStreamClass */
    readonly parentClass: InputStreamClass
    static name: string
}
abstract class FilterOutputStreamClass {
    /* Fields of Gio-2.0.Gio.FilterOutputStreamClass */
    readonly parentClass: OutputStreamClass
    static name: string
}
class IOExtension {
    /* Methods of Gio-2.0.Gio.IOExtension */
    getName(): string
    getPriority(): number
    getType(): GObject.Type
    static name: string
}
class IOExtensionPoint {
    /* Methods of Gio-2.0.Gio.IOExtensionPoint */
    getExtensionByName(name: string): IOExtension
    getExtensions(): IOExtension[]
    getRequiredType(): GObject.Type
    setRequiredType(type: GObject.Type): void
    static name: string
    /* Static methods and pseudo-constructors */
    static implement(extensionPointName: string, type: GObject.Type, extensionName: string, priority: number): IOExtension
    static lookup(name: string): IOExtensionPoint
    static register(name: string): IOExtensionPoint
}
abstract class IOModuleClass {
    static name: string
}
class IOModuleScope {
    /* Methods of Gio-2.0.Gio.IOModuleScope */
    block(basename: string): void
    free(): void
    static name: string
}
class IOSchedulerJob {
    /* Methods of Gio-2.0.Gio.IOSchedulerJob */
    sendToMainloop(func: GLib.SourceFunc): boolean
    sendToMainloopAsync(func: GLib.SourceFunc): void
    static name: string
}
class IOStreamAdapter {
    static name: string
}
abstract class IOStreamClass {
    /* Fields of Gio-2.0.Gio.IOStreamClass */
    readonly parentClass: GObject.ObjectClass
    readonly getInputStream: (stream: IOStream) => InputStream
    readonly getOutputStream: (stream: IOStream) => OutputStream
    readonly closeFn: (stream: IOStream, cancellable?: Cancellable | null) => boolean
    readonly closeAsync: (stream: IOStream, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly closeFinish: (stream: IOStream, result: AsyncResult) => boolean
    static name: string
}
class IOStreamPrivate {
    static name: string
}
abstract class IconIface {
    /* Fields of Gio-2.0.Gio.IconIface */
    readonly gIface: GObject.TypeInterface
    readonly hash: (icon: Icon) => number
    readonly equal: (icon1?: Icon | null, icon2?: Icon | null) => boolean
    readonly serialize: (icon: Icon) => GLib.Variant | null
    static name: string
}
abstract class InetAddressClass {
    /* Fields of Gio-2.0.Gio.InetAddressClass */
    readonly parentClass: GObject.ObjectClass
    readonly toString: (address: InetAddress) => string
    readonly toBytes: (address: InetAddress) => number
    static name: string
}
abstract class InetAddressMaskClass {
    /* Fields of Gio-2.0.Gio.InetAddressMaskClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class InetAddressMaskPrivate {
    static name: string
}
class InetAddressPrivate {
    static name: string
}
abstract class InetSocketAddressClass {
    /* Fields of Gio-2.0.Gio.InetSocketAddressClass */
    readonly parentClass: SocketAddressClass
    static name: string
}
class InetSocketAddressPrivate {
    static name: string
}
abstract class InitableIface {
    /* Fields of Gio-2.0.Gio.InitableIface */
    readonly gIface: GObject.TypeInterface
    readonly init: (initable: Initable, cancellable?: Cancellable | null) => boolean
    static name: string
}
class InputMessage {
    /* Fields of Gio-2.0.Gio.InputMessage */
    readonly address: SocketAddress
    readonly vectors: InputVector[]
    readonly numVectors: number
    readonly bytesReceived: number
    readonly flags: number
    readonly controlMessages: SocketControlMessage[]
    readonly numControlMessages: number
    static name: string
}
abstract class InputStreamClass {
    /* Fields of Gio-2.0.Gio.InputStreamClass */
    readonly parentClass: GObject.ObjectClass
    readonly readFn: (stream: InputStream, buffer: object | null, count: number, cancellable?: Cancellable | null) => number
    readonly skip: (stream: InputStream, count: number, cancellable?: Cancellable | null) => number
    readonly closeFn: (stream: InputStream, cancellable?: Cancellable | null) => boolean
    readonly readAsync: (stream: InputStream, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => /* buffer */ Uint8Array | null
    readonly readFinish: (stream: InputStream, result: AsyncResult) => number
    readonly skipAsync: (stream: InputStream, count: number, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly skipFinish: (stream: InputStream, result: AsyncResult) => number
    readonly closeAsync: (stream: InputStream, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly closeFinish: (stream: InputStream, result: AsyncResult) => boolean
    static name: string
}
class InputStreamPrivate {
    static name: string
}
class InputVector {
    /* Fields of Gio-2.0.Gio.InputVector */
    readonly buffer: object
    readonly size: number
    static name: string
}
abstract class ListModelInterface {
    /* Fields of Gio-2.0.Gio.ListModelInterface */
    readonly gIface: GObject.TypeInterface
    readonly getItemType: (list: ListModel) => GObject.Type
    readonly getNItems: (list: ListModel) => number
    readonly getItem: (list: ListModel, position: number) => GObject.Object | null
    static name: string
}
abstract class ListStoreClass {
    /* Fields of Gio-2.0.Gio.ListStoreClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class LoadableIconIface {
    /* Fields of Gio-2.0.Gio.LoadableIconIface */
    readonly gIface: GObject.TypeInterface
    readonly load: (icon: LoadableIcon, size: number, cancellable?: Cancellable | null) => [ /* returnType */ InputStream, /* type */ string | null ]
    readonly loadAsync: (icon: LoadableIcon, size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly loadFinish: (icon: LoadableIcon, res: AsyncResult) => [ /* returnType */ InputStream, /* type */ string | null ]
    static name: string
}
abstract class MemoryInputStreamClass {
    /* Fields of Gio-2.0.Gio.MemoryInputStreamClass */
    readonly parentClass: InputStreamClass
    static name: string
}
class MemoryInputStreamPrivate {
    static name: string
}
abstract class MemoryMonitorInterface {
    /* Fields of Gio-2.0.Gio.MemoryMonitorInterface */
    readonly lowMemoryWarning: (monitor: MemoryMonitor, level: MemoryMonitorWarningLevel) => void
    static name: string
}
abstract class MemoryOutputStreamClass {
    /* Fields of Gio-2.0.Gio.MemoryOutputStreamClass */
    readonly parentClass: OutputStreamClass
    static name: string
}
class MemoryOutputStreamPrivate {
    static name: string
}
abstract class MenuAttributeIterClass {
    /* Fields of Gio-2.0.Gio.MenuAttributeIterClass */
    readonly parentClass: GObject.ObjectClass
    readonly getNext: (iter: MenuAttributeIter) => [ /* returnType */ boolean, /* outName */ string | null, /* value */ GLib.Variant | null ]
    static name: string
}
class MenuAttributeIterPrivate {
    static name: string
}
abstract class MenuLinkIterClass {
    /* Fields of Gio-2.0.Gio.MenuLinkIterClass */
    readonly parentClass: GObject.ObjectClass
    readonly getNext: (iter: MenuLinkIter) => [ /* returnType */ boolean, /* outLink */ string | null, /* value */ MenuModel | null ]
    static name: string
}
class MenuLinkIterPrivate {
    static name: string
}
abstract class MenuModelClass {
    /* Fields of Gio-2.0.Gio.MenuModelClass */
    readonly parentClass: GObject.ObjectClass
    readonly isMutable: (model: MenuModel) => boolean
    readonly getNItems: (model: MenuModel) => number
    readonly getItemAttributes: (model: MenuModel, itemIndex: number) => /* attributes */ GLib.HashTable
    readonly iterateItemAttributes: (model: MenuModel, itemIndex: number) => MenuAttributeIter
    readonly getItemAttributeValue: (model: MenuModel, itemIndex: number, attribute: string, expectedType?: GLib.VariantType | null) => GLib.Variant | null
    readonly getItemLinks: (model: MenuModel, itemIndex: number) => /* links */ GLib.HashTable
    readonly iterateItemLinks: (model: MenuModel, itemIndex: number) => MenuLinkIter
    readonly getItemLink: (model: MenuModel, itemIndex: number, link: string) => MenuModel | null
    static name: string
}
class MenuModelPrivate {
    static name: string
}
abstract class MountIface {
    /* Fields of Gio-2.0.Gio.MountIface */
    readonly gIface: GObject.TypeInterface
    readonly changed: (mount: Mount) => void
    readonly unmounted: (mount: Mount) => void
    readonly getRoot: (mount: Mount) => File
    readonly getName: (mount: Mount) => string
    readonly getIcon: (mount: Mount) => Icon
    readonly getUuid: (mount: Mount) => string | null
    readonly getVolume: (mount: Mount) => Volume | null
    readonly getDrive: (mount: Mount) => Drive | null
    readonly canUnmount: (mount: Mount) => boolean
    readonly canEject: (mount: Mount) => boolean
    readonly unmount: (mount: Mount, flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly unmountFinish: (mount: Mount, result: AsyncResult) => boolean
    readonly eject: (mount: Mount, flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly ejectFinish: (mount: Mount, result: AsyncResult) => boolean
    readonly remount: (mount: Mount, flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly remountFinish: (mount: Mount, result: AsyncResult) => boolean
    readonly guessContentType: (mount: Mount, forceRescan: boolean, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly guessContentTypeFinish: (mount: Mount, result: AsyncResult) => string[]
    readonly guessContentTypeSync: (mount: Mount, forceRescan: boolean, cancellable?: Cancellable | null) => string[]
    readonly preUnmount: (mount: Mount) => void
    readonly unmountWithOperation: (mount: Mount, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly unmountWithOperationFinish: (mount: Mount, result: AsyncResult) => boolean
    readonly ejectWithOperation: (mount: Mount, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly ejectWithOperationFinish: (mount: Mount, result: AsyncResult) => boolean
    readonly getDefaultLocation: (mount: Mount) => File
    readonly getSortKey: (mount: Mount) => string | null
    readonly getSymbolicIcon: (mount: Mount) => Icon
    static name: string
}
abstract class MountOperationClass {
    /* Fields of Gio-2.0.Gio.MountOperationClass */
    readonly parentClass: GObject.ObjectClass
    readonly askPassword: (op: MountOperation, message: string, defaultUser: string, defaultDomain: string, flags: AskPasswordFlags) => void
    readonly askQuestion: (op: MountOperation, message: string, choices: string[]) => void
    readonly reply: (op: MountOperation, result: MountOperationResult) => void
    readonly aborted: (op: MountOperation) => void
    readonly showProcesses: (op: MountOperation, message: string, processes: GLib.Pid[], choices: string[]) => void
    readonly showUnmountProgress: (op: MountOperation, message: string, timeLeft: number, bytesLeft: number) => void
    static name: string
}
class MountOperationPrivate {
    static name: string
}
abstract class NativeSocketAddressClass {
    /* Fields of Gio-2.0.Gio.NativeSocketAddressClass */
    readonly parentClass: SocketAddressClass
    static name: string
}
class NativeSocketAddressPrivate {
    static name: string
}
abstract class NativeVolumeMonitorClass {
    /* Fields of Gio-2.0.Gio.NativeVolumeMonitorClass */
    readonly parentClass: VolumeMonitorClass
    static name: string
}
abstract class NetworkAddressClass {
    /* Fields of Gio-2.0.Gio.NetworkAddressClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class NetworkAddressPrivate {
    static name: string
}
abstract class NetworkMonitorInterface {
    /* Fields of Gio-2.0.Gio.NetworkMonitorInterface */
    readonly gIface: GObject.TypeInterface
    readonly networkChanged: (monitor: NetworkMonitor, networkAvailable: boolean) => void
    readonly canReach: (monitor: NetworkMonitor, connectable: SocketConnectable, cancellable?: Cancellable | null) => boolean
    readonly canReachAsync: (monitor: NetworkMonitor, connectable: SocketConnectable, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly canReachFinish: (monitor: NetworkMonitor, result: AsyncResult) => boolean
    static name: string
}
abstract class NetworkServiceClass {
    /* Fields of Gio-2.0.Gio.NetworkServiceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class NetworkServicePrivate {
    static name: string
}
class OutputMessage {
    /* Fields of Gio-2.0.Gio.OutputMessage */
    readonly address: SocketAddress
    readonly vectors: OutputVector
    readonly numVectors: number
    readonly bytesSent: number
    readonly controlMessages: SocketControlMessage[]
    readonly numControlMessages: number
    static name: string
}
abstract class OutputStreamClass {
    /* Fields of Gio-2.0.Gio.OutputStreamClass */
    readonly parentClass: GObject.ObjectClass
    readonly writeFn: (stream: OutputStream, buffer: Uint8Array | null, cancellable?: Cancellable | null) => number
    readonly splice: (stream: OutputStream, source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null) => number
    readonly flush: (stream: OutputStream, cancellable?: Cancellable | null) => boolean
    readonly closeFn: (stream: OutputStream, cancellable?: Cancellable | null) => boolean
    readonly writeAsync: (stream: OutputStream, buffer: Uint8Array | null, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly writeFinish: (stream: OutputStream, result: AsyncResult) => number
    readonly spliceAsync: (stream: OutputStream, source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly spliceFinish: (stream: OutputStream, result: AsyncResult) => number
    readonly flushAsync: (stream: OutputStream, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly flushFinish: (stream: OutputStream, result: AsyncResult) => boolean
    readonly closeAsync: (stream: OutputStream, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly closeFinish: (stream: OutputStream, result: AsyncResult) => boolean
    readonly writevFn: (stream: OutputStream, vectors: OutputVector[], cancellable?: Cancellable | null) => [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    readonly writevAsync: (stream: OutputStream, vectors: OutputVector[], ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly writevFinish: (stream: OutputStream, result: AsyncResult) => [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    static name: string
}
class OutputStreamPrivate {
    static name: string
}
class OutputVector {
    /* Fields of Gio-2.0.Gio.OutputVector */
    readonly buffer: object
    readonly size: number
    static name: string
}
abstract class PermissionClass {
    /* Fields of Gio-2.0.Gio.PermissionClass */
    readonly parentClass: GObject.ObjectClass
    readonly acquire: (permission: Permission, cancellable?: Cancellable | null) => boolean
    readonly acquireAsync: (permission: Permission, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly acquireFinish: (permission: Permission, result: AsyncResult) => boolean
    readonly release: (permission: Permission, cancellable?: Cancellable | null) => boolean
    readonly releaseAsync: (permission: Permission, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly releaseFinish: (permission: Permission, result: AsyncResult) => boolean
    readonly reserved: object[]
    static name: string
}
class PermissionPrivate {
    static name: string
}
abstract class PollableInputStreamInterface {
    /* Fields of Gio-2.0.Gio.PollableInputStreamInterface */
    readonly gIface: GObject.TypeInterface
    readonly canPoll: (stream: PollableInputStream) => boolean
    readonly isReadable: (stream: PollableInputStream) => boolean
    readonly createSource: (stream: PollableInputStream, cancellable?: Cancellable | null) => GLib.Source
    readonly readNonblocking: (stream: PollableInputStream) => [ /* returnType */ number, /* buffer */ Uint8Array | null ]
    static name: string
}
abstract class PollableOutputStreamInterface {
    /* Fields of Gio-2.0.Gio.PollableOutputStreamInterface */
    readonly gIface: GObject.TypeInterface
    readonly canPoll: (stream: PollableOutputStream) => boolean
    readonly isWritable: (stream: PollableOutputStream) => boolean
    readonly createSource: (stream: PollableOutputStream, cancellable?: Cancellable | null) => GLib.Source
    readonly writeNonblocking: (stream: PollableOutputStream, buffer: Uint8Array | null) => number
    readonly writevNonblocking: (stream: PollableOutputStream, vectors: OutputVector[]) => [ /* returnType */ PollableReturn, /* bytesWritten */ number | null ]
    static name: string
}
abstract class PowerProfileMonitorInterface {
    static name: string
}
abstract class ProxyAddressClass {
    /* Fields of Gio-2.0.Gio.ProxyAddressClass */
    readonly parentClass: InetSocketAddressClass
    static name: string
}
abstract class ProxyAddressEnumeratorClass {
    static name: string
}
class ProxyAddressEnumeratorPrivate {
    static name: string
}
class ProxyAddressPrivate {
    static name: string
}
abstract class ProxyInterface {
    /* Fields of Gio-2.0.Gio.ProxyInterface */
    readonly gIface: GObject.TypeInterface
    readonly connect: (proxy: Proxy, connection: IOStream, proxyAddress: ProxyAddress, cancellable?: Cancellable | null) => IOStream
    readonly connectAsync: (proxy: Proxy, connection: IOStream, proxyAddress: ProxyAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly connectFinish: (proxy: Proxy, result: AsyncResult) => IOStream
    readonly supportsHostname: (proxy: Proxy) => boolean
    static name: string
}
abstract class ProxyResolverInterface {
    /* Fields of Gio-2.0.Gio.ProxyResolverInterface */
    readonly gIface: GObject.TypeInterface
    readonly isSupported: (resolver: ProxyResolver) => boolean
    readonly lookup: (resolver: ProxyResolver, uri: string, cancellable?: Cancellable | null) => string[]
    readonly lookupAsync: (resolver: ProxyResolver, uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly lookupFinish: (resolver: ProxyResolver, result: AsyncResult) => string[]
    static name: string
}
abstract class RemoteActionGroupInterface {
    /* Fields of Gio-2.0.Gio.RemoteActionGroupInterface */
    readonly gIface: GObject.TypeInterface
    readonly activateActionFull: (remote: RemoteActionGroup, actionName: string, parameter: GLib.Variant | null, platformData: GLib.Variant) => void
    readonly changeActionStateFull: (remote: RemoteActionGroup, actionName: string, value: GLib.Variant, platformData: GLib.Variant) => void
    static name: string
}
abstract class ResolverClass {
    /* Fields of Gio-2.0.Gio.ResolverClass */
    readonly parentClass: GObject.ObjectClass
    readonly reload: (resolver: Resolver) => void
    readonly lookupByName: (resolver: Resolver, hostname: string, cancellable?: Cancellable | null) => InetAddress[]
    readonly lookupByNameAsync: (resolver: Resolver, hostname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly lookupByNameFinish: (resolver: Resolver, result: AsyncResult) => InetAddress[]
    readonly lookupByAddress: (resolver: Resolver, address: InetAddress, cancellable?: Cancellable | null) => string
    readonly lookupByAddressAsync: (resolver: Resolver, address: InetAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly lookupByAddressFinish: (resolver: Resolver, result: AsyncResult) => string
    readonly lookupServiceAsync: (resolver: Resolver, rrname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly lookupServiceFinish: (resolver: Resolver, result: AsyncResult) => SrvTarget[]
    readonly lookupRecords: (resolver: Resolver, rrname: string, recordType: ResolverRecordType, cancellable?: Cancellable | null) => GLib.Variant[]
    readonly lookupRecordsAsync: (resolver: Resolver, rrname: string, recordType: ResolverRecordType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly lookupRecordsFinish: (resolver: Resolver, result: AsyncResult) => GLib.Variant[]
    readonly lookupByNameWithFlagsAsync: (resolver: Resolver, hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly lookupByNameWithFlagsFinish: (resolver: Resolver, result: AsyncResult) => InetAddress[]
    readonly lookupByNameWithFlags: (resolver: Resolver, hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null) => InetAddress[]
    static name: string
}
class ResolverPrivate {
    static name: string
}
class Resource {
    /* Methods of Gio-2.0.Gio.Resource */
    register(): void
    unregister(): void
    enumerateChildren(path: string, lookupFlags: ResourceLookupFlags): string[]
    getInfo(path: string, lookupFlags: ResourceLookupFlags): [ /* returnType */ boolean, /* size */ number | null, /* flags */ number | null ]
    lookupData(path: string, lookupFlags: ResourceLookupFlags): any
    openStream(path: string, lookupFlags: ResourceLookupFlags): InputStream
    ref(): Resource
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromData(data: any): Resource
    static load(filename: string): Resource
}
abstract class SeekableIface {
    /* Fields of Gio-2.0.Gio.SeekableIface */
    readonly gIface: GObject.TypeInterface
    readonly tell: (seekable: Seekable) => number
    readonly canSeek: (seekable: Seekable) => boolean
    readonly seek: (seekable: Seekable, offset: number, type: GLib.SeekType, cancellable?: Cancellable | null) => boolean
    readonly canTruncate: (seekable: Seekable) => boolean
    readonly truncateFn: (seekable: Seekable, offset: number, cancellable?: Cancellable | null) => boolean
    static name: string
}
abstract class SettingsBackendClass {
    /* Fields of Gio-2.0.Gio.SettingsBackendClass */
    readonly parentClass: GObject.ObjectClass
    readonly read: (backend: SettingsBackend, key: string, expectedType: GLib.VariantType, defaultValue: boolean) => GLib.Variant
    readonly getWritable: (backend: SettingsBackend, key: string) => boolean
    readonly write: (backend: SettingsBackend, key: string, value: GLib.Variant, originTag?: object | null) => boolean
    readonly writeTree: (backend: SettingsBackend, tree: GLib.Tree, originTag?: object | null) => boolean
    readonly reset: (backend: SettingsBackend, key: string, originTag?: object | null) => void
    readonly subscribe: (backend: SettingsBackend, name: string) => void
    readonly unsubscribe: (backend: SettingsBackend, name: string) => void
    readonly sync: (backend: SettingsBackend) => void
    readonly readUserValue: (backend: SettingsBackend, key: string, expectedType: GLib.VariantType) => GLib.Variant
    static name: string
}
class SettingsBackendPrivate {
    static name: string
}
abstract class SettingsClass {
    /* Fields of Gio-2.0.Gio.SettingsClass */
    readonly parentClass: GObject.ObjectClass
    readonly writableChanged: (settings: Settings, key: string) => void
    readonly changed: (settings: Settings, key: string) => void
    readonly writableChangeEvent: (settings: Settings, key: GLib.Quark) => boolean
    readonly changeEvent: (settings: Settings, keys: GLib.Quark, nKeys: number) => boolean
    readonly padding: object[]
    static name: string
}
class SettingsPrivate {
    static name: string
}
class SettingsSchema {
    /* Methods of Gio-2.0.Gio.SettingsSchema */
    getId(): string
    getKey(name: string): SettingsSchemaKey
    getPath(): string | null
    hasKey(name: string): boolean
    listChildren(): string[]
    listKeys(): string[]
    ref(): SettingsSchema
    unref(): void
    static name: string
}
class SettingsSchemaKey {
    /* Methods of Gio-2.0.Gio.SettingsSchemaKey */
    getDefaultValue(): GLib.Variant
    getDescription(): string | null
    getName(): string
    getRange(): GLib.Variant
    getSummary(): string | null
    getValueType(): GLib.VariantType
    rangeCheck(value: GLib.Variant): boolean
    ref(): SettingsSchemaKey
    unref(): void
    static name: string
}
class SettingsSchemaSource {
    /* Methods of Gio-2.0.Gio.SettingsSchemaSource */
    listSchemas(recursive: boolean): [ /* nonRelocatable */ string[], /* relocatable */ string[] ]
    lookup(schemaId: string, recursive: boolean): SettingsSchema | null
    ref(): SettingsSchemaSource
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromDirectory(directory: string, parent: SettingsSchemaSource | null, trusted: boolean): SettingsSchemaSource
    static getDefault(): SettingsSchemaSource | null
}
abstract class SimpleActionGroupClass {
    static name: string
}
class SimpleActionGroupPrivate {
    static name: string
}
abstract class SimpleAsyncResultClass {
    static name: string
}
abstract class SimpleProxyResolverClass {
    /* Fields of Gio-2.0.Gio.SimpleProxyResolverClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SimpleProxyResolverPrivate {
    static name: string
}
abstract class SocketAddressClass {
    /* Fields of Gio-2.0.Gio.SocketAddressClass */
    readonly parentClass: GObject.ObjectClass
    readonly getFamily: (address: SocketAddress) => SocketFamily
    readonly getNativeSize: (address: SocketAddress) => number
    readonly toNative: (address: SocketAddress, dest: object | null, destlen: number) => boolean
    static name: string
}
abstract class SocketAddressEnumeratorClass {
    /* Fields of Gio-2.0.Gio.SocketAddressEnumeratorClass */
    readonly next: (enumerator: SocketAddressEnumerator, cancellable?: Cancellable | null) => SocketAddress
    readonly nextAsync: (enumerator: SocketAddressEnumerator, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly nextFinish: (enumerator: SocketAddressEnumerator, result: AsyncResult) => SocketAddress
    static name: string
}
abstract class SocketClass {
    /* Fields of Gio-2.0.Gio.SocketClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SocketClientClass {
    /* Fields of Gio-2.0.Gio.SocketClientClass */
    readonly parentClass: GObject.ObjectClass
    readonly event: (client: SocketClient, event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream) => void
    static name: string
}
class SocketClientPrivate {
    static name: string
}
abstract class SocketConnectableIface {
    /* Fields of Gio-2.0.Gio.SocketConnectableIface */
    readonly gIface: GObject.TypeInterface
    readonly enumerate: (connectable: SocketConnectable) => SocketAddressEnumerator
    readonly proxyEnumerate: (connectable: SocketConnectable) => SocketAddressEnumerator
    readonly toString: (connectable: SocketConnectable) => string
    static name: string
}
abstract class SocketConnectionClass {
    /* Fields of Gio-2.0.Gio.SocketConnectionClass */
    readonly parentClass: IOStreamClass
    static name: string
}
class SocketConnectionPrivate {
    static name: string
}
abstract class SocketControlMessageClass {
    /* Fields of Gio-2.0.Gio.SocketControlMessageClass */
    readonly parentClass: GObject.ObjectClass
    readonly getSize: (message: SocketControlMessage) => number
    readonly getLevel: (message: SocketControlMessage) => number
    readonly getType: (message: SocketControlMessage) => number
    readonly serialize: (message: SocketControlMessage, data: object) => void
    static name: string
}
class SocketControlMessagePrivate {
    static name: string
}
abstract class SocketListenerClass {
    /* Fields of Gio-2.0.Gio.SocketListenerClass */
    readonly parentClass: GObject.ObjectClass
    readonly changed: (listener: SocketListener) => void
    readonly event: (listener: SocketListener, event: SocketListenerEvent, socket: Socket) => void
    static name: string
}
class SocketListenerPrivate {
    static name: string
}
class SocketPrivate {
    static name: string
}
abstract class SocketServiceClass {
    /* Fields of Gio-2.0.Gio.SocketServiceClass */
    readonly parentClass: SocketListenerClass
    readonly incoming: (service: SocketService, connection: SocketConnection, sourceObject: GObject.Object) => boolean
    static name: string
}
class SocketServicePrivate {
    static name: string
}
class SrvTarget {
    /* Methods of Gio-2.0.Gio.SrvTarget */
    copy(): SrvTarget
    free(): void
    getHostname(): string
    getPort(): number
    getPriority(): number
    getWeight(): number
    static name: string
    static new(hostname: string, port: number, priority: number, weight: number): SrvTarget
    constructor(hostname: string, port: number, priority: number, weight: number)
    /* Static methods and pseudo-constructors */
    static new(hostname: string, port: number, priority: number, weight: number): SrvTarget
}
class StaticResource {
    /* Methods of Gio-2.0.Gio.StaticResource */
    fini(): void
    getResource(): Resource
    init(): void
    static name: string
}
abstract class TaskClass {
    static name: string
}
abstract class TcpConnectionClass {
    /* Fields of Gio-2.0.Gio.TcpConnectionClass */
    readonly parentClass: SocketConnectionClass
    static name: string
}
class TcpConnectionPrivate {
    static name: string
}
abstract class TcpWrapperConnectionClass {
    /* Fields of Gio-2.0.Gio.TcpWrapperConnectionClass */
    readonly parentClass: TcpConnectionClass
    static name: string
}
class TcpWrapperConnectionPrivate {
    static name: string
}
abstract class ThemedIconClass {
    static name: string
}
abstract class ThreadedSocketServiceClass {
    /* Fields of Gio-2.0.Gio.ThreadedSocketServiceClass */
    readonly parentClass: SocketServiceClass
    readonly run: (service: ThreadedSocketService, connection: SocketConnection, sourceObject: GObject.Object) => boolean
    static name: string
}
class ThreadedSocketServicePrivate {
    static name: string
}
abstract class TlsBackendInterface {
    /* Fields of Gio-2.0.Gio.TlsBackendInterface */
    readonly gIface: GObject.TypeInterface
    readonly supportsTls: (backend: TlsBackend) => boolean
    readonly getCertificateType: () => GObject.Type
    readonly getClientConnectionType: () => GObject.Type
    readonly getServerConnectionType: () => GObject.Type
    readonly getFileDatabaseType: () => GObject.Type
    readonly getDefaultDatabase: (backend: TlsBackend) => TlsDatabase
    readonly supportsDtls: (backend: TlsBackend) => boolean
    readonly getDtlsClientConnectionType: () => GObject.Type
    readonly getDtlsServerConnectionType: () => GObject.Type
    static name: string
}
abstract class TlsCertificateClass {
    /* Fields of Gio-2.0.Gio.TlsCertificateClass */
    readonly parentClass: GObject.ObjectClass
    readonly verify: (cert: TlsCertificate, identity?: SocketConnectable | null, trustedCa?: TlsCertificate | null) => TlsCertificateFlags
    static name: string
}
class TlsCertificatePrivate {
    static name: string
}
abstract class TlsClientConnectionInterface {
    /* Fields of Gio-2.0.Gio.TlsClientConnectionInterface */
    readonly gIface: GObject.TypeInterface
    readonly copySessionState: (conn: TlsClientConnection, source: TlsClientConnection) => void
    static name: string
}
abstract class TlsConnectionClass {
    /* Fields of Gio-2.0.Gio.TlsConnectionClass */
    readonly parentClass: IOStreamClass
    readonly acceptCertificate: (connection: TlsConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags) => boolean
    readonly handshake: (conn: TlsConnection, cancellable?: Cancellable | null) => boolean
    readonly handshakeAsync: (conn: TlsConnection, ioPriority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly handshakeFinish: (conn: TlsConnection, result: AsyncResult) => boolean
    readonly getBindingData: (conn: TlsConnection, type: TlsChannelBindingType, data: Uint8Array) => boolean
    readonly getNegotiatedProtocol: (conn: TlsConnection) => string | null
    static name: string
}
class TlsConnectionPrivate {
    static name: string
}
abstract class TlsDatabaseClass {
    /* Fields of Gio-2.0.Gio.TlsDatabaseClass */
    readonly parentClass: GObject.ObjectClass
    readonly verifyChain: (self: TlsDatabase, chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null) => TlsCertificateFlags
    readonly verifyChainAsync: (self: TlsDatabase, chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly verifyChainFinish: (self: TlsDatabase, result: AsyncResult) => TlsCertificateFlags
    readonly createCertificateHandle: (self: TlsDatabase, certificate: TlsCertificate) => string | null
    readonly lookupCertificateForHandle: (self: TlsDatabase, handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null) => TlsCertificate | null
    readonly lookupCertificateForHandleAsync: (self: TlsDatabase, handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly lookupCertificateForHandleFinish: (self: TlsDatabase, result: AsyncResult) => TlsCertificate
    readonly lookupCertificateIssuer: (self: TlsDatabase, certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null) => TlsCertificate
    readonly lookupCertificateIssuerAsync: (self: TlsDatabase, certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly lookupCertificateIssuerFinish: (self: TlsDatabase, result: AsyncResult) => TlsCertificate
    readonly lookupCertificatesIssuedBy: (self: TlsDatabase, issuerRawDn: Uint8Array, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null) => TlsCertificate[]
    readonly lookupCertificatesIssuedByAsync: (self: TlsDatabase, issuerRawDn: Uint8Array, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly lookupCertificatesIssuedByFinish: (self: TlsDatabase, result: AsyncResult) => TlsCertificate[]
    static name: string
}
class TlsDatabasePrivate {
    static name: string
}
abstract class TlsFileDatabaseInterface {
    /* Fields of Gio-2.0.Gio.TlsFileDatabaseInterface */
    readonly gIface: GObject.TypeInterface
    static name: string
}
abstract class TlsInteractionClass {
    /* Fields of Gio-2.0.Gio.TlsInteractionClass */
    readonly askPassword: (interaction: TlsInteraction, password: TlsPassword, cancellable?: Cancellable | null) => TlsInteractionResult
    readonly askPasswordAsync: (interaction: TlsInteraction, password: TlsPassword, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly askPasswordFinish: (interaction: TlsInteraction, result: AsyncResult) => TlsInteractionResult
    readonly requestCertificate: (interaction: TlsInteraction, connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null) => TlsInteractionResult
    readonly requestCertificateAsync: (interaction: TlsInteraction, connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly requestCertificateFinish: (interaction: TlsInteraction, result: AsyncResult) => TlsInteractionResult
    static name: string
}
class TlsInteractionPrivate {
    static name: string
}
abstract class TlsPasswordClass {
    /* Fields of Gio-2.0.Gio.TlsPasswordClass */
    readonly parentClass: GObject.ObjectClass
    readonly getValue: (password: TlsPassword) => Uint8Array
    readonly setValue: (password: TlsPassword, value: Uint8Array, destroy?: GLib.DestroyNotify | null) => void
    readonly getDefaultWarning: (password: TlsPassword) => string
    static name: string
}
class TlsPasswordPrivate {
    static name: string
}
abstract class TlsServerConnectionInterface {
    /* Fields of Gio-2.0.Gio.TlsServerConnectionInterface */
    readonly gIface: GObject.TypeInterface
    static name: string
}
abstract class UnixConnectionClass {
    /* Fields of Gio-2.0.Gio.UnixConnectionClass */
    readonly parentClass: SocketConnectionClass
    static name: string
}
class UnixConnectionPrivate {
    static name: string
}
abstract class UnixCredentialsMessageClass {
    /* Fields of Gio-2.0.Gio.UnixCredentialsMessageClass */
    readonly parentClass: SocketControlMessageClass
    static name: string
}
class UnixCredentialsMessagePrivate {
    static name: string
}
abstract class UnixFDListClass {
    /* Fields of Gio-2.0.Gio.UnixFDListClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class UnixFDListPrivate {
    static name: string
}
abstract class UnixFDMessageClass {
    /* Fields of Gio-2.0.Gio.UnixFDMessageClass */
    readonly parentClass: SocketControlMessageClass
    static name: string
}
class UnixFDMessagePrivate {
    static name: string
}
abstract class UnixInputStreamClass {
    /* Fields of Gio-2.0.Gio.UnixInputStreamClass */
    readonly parentClass: InputStreamClass
    static name: string
}
class UnixInputStreamPrivate {
    static name: string
}
class UnixMountEntry {
    static name: string
}
abstract class UnixMountMonitorClass {
    static name: string
}
class UnixMountPoint {
    /* Methods of Gio-2.0.Gio.UnixMountPoint */
    compare(mount2: UnixMountPoint): number
    copy(): UnixMountPoint
    free(): void
    getDevicePath(): string
    getFsType(): string
    getMountPath(): string
    getOptions(): string | null
    guessCanEject(): boolean
    guessIcon(): Icon
    guessName(): string
    guessSymbolicIcon(): Icon
    isLoopback(): boolean
    isReadonly(): boolean
    isUserMountable(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static at(mountPath: string): [ /* returnType */ UnixMountPoint | null, /* timeRead */ number | null ]
}
abstract class UnixOutputStreamClass {
    /* Fields of Gio-2.0.Gio.UnixOutputStreamClass */
    readonly parentClass: OutputStreamClass
    static name: string
}
class UnixOutputStreamPrivate {
    static name: string
}
abstract class UnixSocketAddressClass {
    /* Fields of Gio-2.0.Gio.UnixSocketAddressClass */
    readonly parentClass: SocketAddressClass
    static name: string
}
class UnixSocketAddressPrivate {
    static name: string
}
abstract class VfsClass {
    /* Fields of Gio-2.0.Gio.VfsClass */
    readonly parentClass: GObject.ObjectClass
    readonly isActive: (vfs: Vfs) => boolean
    readonly getFileForPath: (vfs: Vfs, path: string) => File
    readonly getFileForUri: (vfs: Vfs, uri: string) => File
    readonly getSupportedUriSchemes: (vfs: Vfs) => string[]
    readonly parseName: (vfs: Vfs, parseName: string) => File
    readonly localFileAddInfo: (vfs: Vfs, filename: string, device: number, attributeMatcher: FileAttributeMatcher, info: FileInfo, cancellable: Cancellable | null, extraData: object | null, freeExtraData: GLib.DestroyNotify) => void
    readonly addWritableNamespaces: (vfs: Vfs, list: FileAttributeInfoList) => void
    readonly localFileSetAttributes: (vfs: Vfs, filename: string, info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null) => boolean
    readonly localFileRemoved: (vfs: Vfs, filename: string) => void
    readonly localFileMoved: (vfs: Vfs, source: string, dest: string) => void
    static name: string
}
abstract class VolumeIface {
    /* Fields of Gio-2.0.Gio.VolumeIface */
    readonly gIface: GObject.TypeInterface
    readonly changed: (volume: Volume) => void
    readonly removed: (volume: Volume) => void
    readonly getName: (volume: Volume) => string
    readonly getIcon: (volume: Volume) => Icon
    readonly getUuid: (volume: Volume) => string | null
    readonly getDrive: (volume: Volume) => Drive | null
    readonly getMount: (volume: Volume) => Mount | null
    readonly canMount: (volume: Volume) => boolean
    readonly canEject: (volume: Volume) => boolean
    readonly mountFn: (volume: Volume, flags: MountMountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly mountFinish: (volume: Volume, result: AsyncResult) => boolean
    readonly eject: (volume: Volume, flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly ejectFinish: (volume: Volume, result: AsyncResult) => boolean
    readonly getIdentifier: (volume: Volume, kind: string) => string | null
    readonly enumerateIdentifiers: (volume: Volume) => string[]
    readonly shouldAutomount: (volume: Volume) => boolean
    readonly getActivationRoot: (volume: Volume) => File | null
    readonly ejectWithOperation: (volume: Volume, flags: MountUnmountFlags, mountOperation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null) => void
    readonly ejectWithOperationFinish: (volume: Volume, result: AsyncResult) => boolean
    readonly getSortKey: (volume: Volume) => string | null
    readonly getSymbolicIcon: (volume: Volume) => Icon
    static name: string
}
abstract class VolumeMonitorClass {
    /* Fields of Gio-2.0.Gio.VolumeMonitorClass */
    readonly parentClass: GObject.ObjectClass
    readonly volumeAdded: (volumeMonitor: VolumeMonitor, volume: Volume) => void
    readonly volumeRemoved: (volumeMonitor: VolumeMonitor, volume: Volume) => void
    readonly volumeChanged: (volumeMonitor: VolumeMonitor, volume: Volume) => void
    readonly mountAdded: (volumeMonitor: VolumeMonitor, mount: Mount) => void
    readonly mountRemoved: (volumeMonitor: VolumeMonitor, mount: Mount) => void
    readonly mountPreUnmount: (volumeMonitor: VolumeMonitor, mount: Mount) => void
    readonly mountChanged: (volumeMonitor: VolumeMonitor, mount: Mount) => void
    readonly driveConnected: (volumeMonitor: VolumeMonitor, drive: Drive) => void
    readonly driveDisconnected: (volumeMonitor: VolumeMonitor, drive: Drive) => void
    readonly driveChanged: (volumeMonitor: VolumeMonitor, drive: Drive) => void
    readonly isSupported: () => boolean
    readonly getConnectedDrives: (volumeMonitor: VolumeMonitor) => Drive[]
    readonly getVolumes: (volumeMonitor: VolumeMonitor) => Volume[]
    readonly getMounts: (volumeMonitor: VolumeMonitor) => Mount[]
    readonly getVolumeForUuid: (volumeMonitor: VolumeMonitor, uuid: string) => Volume | null
    readonly getMountForUuid: (volumeMonitor: VolumeMonitor, uuid: string) => Mount | null
    readonly driveEjectButton: (volumeMonitor: VolumeMonitor, drive: Drive) => void
    readonly driveStopButton: (volumeMonitor: VolumeMonitor, drive: Drive) => void
    static name: string
}
abstract class ZlibCompressorClass {
    /* Fields of Gio-2.0.Gio.ZlibCompressorClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ZlibDecompressorClass {
    /* Fields of Gio-2.0.Gio.ZlibDecompressorClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
}
export default Gio;